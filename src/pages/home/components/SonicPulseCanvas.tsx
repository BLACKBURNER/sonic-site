import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

// ─── Grid ────────────────────────────────────────────────────────────────────
const COLS = 52;
const ROWS = 32;
const PITCH = Math.PI * 0.42;
const COS_P = Math.cos(PITCH);
const SIN_P = Math.sin(PITCH);

// ─── Waves — water-wave tuning ───────────────────────────────────────────────
// Slower, more graceful rolling ocean swells instead of choppy multi-direction
const AMPLITUDE = 80;
const WAVE_SPEED = 0.38;          // much slower → feels like deep water rolling

// ─── Mouse ───────────────────────────────────────────────────────────────────
const MOUSE_RADIUS = 12;
const MOUSE_STRENGTH = 100;

// ─── Ripple ──────────────────────────────────────────────────────────────────
const RIPPLE_SPEED = 10;           // slightly slower ripple ring expansion
const RIPPLE_WAVELENGTH = 6.5;     // wider ripple arcs, more water-like
const RIPPLE_DECAY = 14;
const RIPPLE_DURATION = 3600;

interface Ripple {
  gx: number; gz: number; createdAt: number; strength: number;
}
interface MouseVel {
  vx: number; vy: number; prevGx: number; prevGz: number;
}

/** Per-segment color: charcoal (trough) → olive → lime #c8d400 (peak) */
function segmentColor(normalH: number, isLight: boolean, breathe: number): string {
  const t = Math.max(0, Math.min(1, (normalH + 1) / 2));
  if (isLight) {
    const r = Math.round(28 + t * 172);
    const g = Math.round(28 + t * 184);
    const b = Math.round(28 * (1 - t));
    const a = (0.30 + t * 0.56) * breathe;
    return `rgba(${r},${g},${b},${a})`;
  }
  const r = Math.round(62 + t * 138);
  const g = Math.round(62 + t * 150);
  const b = Math.round(62 * (1 - t * 0.92));
  const a = (0.28 + t * 0.68) * breathe;
  return `rgba(${r},${g},${b},${a})`;
}

export interface SonicPulseCanvasHandle {
  /** Fire a Sonic Boom ripple at specific grid coordinates */
  boomAt: (gx: number, gz: number, strength?: number) => void;
}

export interface SonicPulseCanvasProps {
  variant?: 'light' | 'dark';
}

const SonicPulseCanvas = forwardRef<SonicPulseCanvasHandle, SonicPulseCanvasProps>(
  ({ variant = 'dark' }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const mouseRef = useRef({ gx: COLS / 2, gz: ROWS / 2 });
    const mouseVelRef = useRef<MouseVel>({ vx: 0, vy: 0, prevGx: COLS / 2, prevGz: ROWS / 2 });
    const ripplesRef = useRef<Ripple[]>([]);
    const variantRef = useRef(variant);
    useEffect(() => { variantRef.current = variant; }, [variant]);

    // ── Expose boomAt for external node-click triggers ──────────────────────
    useImperativeHandle(ref, () => ({
      boomAt: (gx: number, gz: number, strength = 92) => {
        ripplesRef.current.push({ gx, gz, createdAt: performance.now(), strength });
        if (ripplesRef.current.length > 8) ripplesRef.current.shift();
      },
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      function resize() {
        if (!canvas) return;
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      }
      resize();
      window.addEventListener('resize', resize);

      function screenToGrid(px: number, py: number) {
        const cw = canvas!.width;
        const ch = canvas!.height;
        return {
          gx: (px - cw / 2) / (cw / (COLS - 1)) + (COLS - 1) / 2,
          gz: (py - ch / 2) / ((ch / ((ROWS - 1) * COS_P)) * COS_P) + (ROWS - 1) / 2,
        };
      }

      function handleMouseMove(e: MouseEvent) {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio;
        const g = screenToGrid((e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr);
        const vel = mouseVelRef.current;
        vel.vx = g.gx - vel.prevGx;
        vel.vy = g.gz - vel.prevGz;
        vel.prevGx = g.gx;
        vel.prevGz = g.gz;
        mouseRef.current = g;
      }

      function handleClick(e: MouseEvent) {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio;
        const g = screenToGrid((e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr);
        ripplesRef.current.push({ gx: g.gx, gz: g.gz, createdAt: performance.now(), strength: 92 });
        if (ripplesRef.current.length > 8) ripplesRef.current.shift();
      }

      window.addEventListener('mousemove', handleMouseMove);
      const container = canvas.parentElement;
      container?.addEventListener('click', handleClick);

      function getHeight(i: number, j: number, t: number): number {
        const amp = variantRef.current === 'light' ? AMPLITUDE * 0.40 : AMPLITUDE;

        // Primary horizontal swell — rolls left to right like open ocean
        const w1 = Math.sin(t * WAVE_SPEED - i * 0.14 + j * 0.03) * amp;
        // Secondary gentle cross-swell — diagonal, subdued
        const w2 = Math.sin(t * WAVE_SPEED * 0.52 - i * 0.09 - j * 0.11) * amp * 0.38;
        // Slow background undulation — adds organic depth
        const w3 = Math.cos(t * WAVE_SPEED * 0.31 + i * 0.06 + j * 0.18) * amp * 0.22;
        // Fine surface chop — very subtle high-frequency detail
        const w4 = Math.sin(t * WAVE_SPEED * 1.15 - i * 0.28 + j * 0.04) * amp * 0.09;
        let h = w1 + w2 + w3 + w4;

        // Mouse: deep crater dip + raised rim
        const { gx, gz } = mouseRef.current;
        const mdx = i - gx; const mdz = j - gz;
        const mdist = Math.sqrt(mdx * mdx + mdz * mdz);
        const mdist2 = mdist * mdist;
        const mR2 = MOUSE_RADIUS * MOUSE_RADIUS;
        if (mdist2 < mR2 * 3.5) {
          h -= MOUSE_STRENGTH * Math.exp(-mdist2 / (mR2 * 0.65));
          const rimDist = Math.abs(mdist - MOUSE_RADIUS * 1.25);
          if (rimDist < MOUSE_RADIUS * 0.7) {
            const rf = 1 - rimDist / (MOUSE_RADIUS * 0.7);
            h += MOUSE_STRENGTH * 0.38 * rf * rf;
          }
        }

        // Mouse velocity wake
        const vel = mouseVelRef.current;
        const speed = Math.sqrt(vel.vx * vel.vx + vel.vy * vel.vy);
        if (speed > 0.15) {
          const wakeStr = Math.min(speed * 12, 38);
          const wdx = i - (gx - vel.vx * 2.2);
          const wdz = j - (gz - vel.vy * 2.2);
          const wdist2 = wdx * wdx + wdz * wdz;
          if (wdist2 < mR2 * 2)
            h += wakeStr * Math.exp(-wdist2 / (mR2 * 0.45));
        }

        // Sonic Boom ripples
        const now = performance.now();
        const expired: Ripple[] = [];
        for (const ripple of ripplesRef.current) {
          const elapsed = (now - ripple.createdAt) / 1000;
          if (elapsed > RIPPLE_DURATION / 1000) { expired.push(ripple); continue; }
          const rdx = i - ripple.gx; const rdz = j - ripple.gz;
          const rdist = Math.sqrt(rdx * rdx + rdz * rdz);
          const distFromFront = rdist - elapsed * RIPPLE_SPEED;
          if (Math.abs(distFromFront) < RIPPLE_WAVELENGTH * 3) {
            h += ripple.strength
              * Math.sin((distFromFront / RIPPLE_WAVELENGTH) * Math.PI * 2)
              * Math.exp(-rdist / RIPPLE_DECAY)
              * Math.exp(-elapsed * 0.85);
          }
        }
        if (expired.length)
          ripplesRef.current = ripplesRef.current.filter((r) => !expired.includes(r));

        return h;
      }

      const startTime = performance.now();

      function draw(timestamp: number) {
        if (!canvas || !ctx) { animRef.current = requestAnimationFrame(draw); return; }

        const t = (timestamp - startTime) / 1000;
        const cw = canvas.width; const ch = canvas.height;
        ctx.clearRect(0, 0, cw, ch);

        const cellW = cw / (COLS - 1);
        const cellH = ch / ((ROWS - 1) * COS_P);
        const dpr = window.devicePixelRatio;
        const isLight = variantRef.current === 'light';
        const breathe = 0.88 + 0.12 * Math.sin(t * 0.48);

        const sx: number[][] = [];
        const sy: number[][] = [];
        const sh: number[][] = [];
        for (let j = 0; j < ROWS; j++) {
          sx[j] = new Array(COLS); sy[j] = new Array(COLS); sh[j] = new Array(COLS);
          for (let i = 0; i < COLS; i++) {
            const worldY = getHeight(i, j, t);
            sh[j][i] = worldY;
            sx[j][i] = cw / 2 + (i - (COLS - 1) / 2) * cellW;
            sy[j][i] = ch / 2 + (j - (ROWS - 1) / 2) * cellH * COS_P - worldY * SIN_P;
          }
        }

        // ── Horizontal lines ─────────────────────────────────────────────
        for (let j = 0; j < ROWS; j++) {
          const isContour = j % 5 === 0;
          const depthScale = 0.65 + (j / (ROWS - 1)) * 0.35;
          for (let i = 0; i < COLS - 1; i++) {
            const midH = (sh[j][i] + sh[j][i + 1]) / 2;
            const normalH = Math.max(-1, Math.min(1, midH / AMPLITUDE));
            ctx.beginPath();
            ctx.moveTo(sx[j][i], sy[j][i]);
            ctx.lineTo(sx[j][i + 1], sy[j][i + 1]);
            ctx.strokeStyle = segmentColor(normalH * depthScale, isLight, breathe);
            // Light = ultra-thin hairlines | Dark = bold architectural
            ctx.lineWidth = isContour
              ? (isLight ? 0.38 : 1.30) * dpr
              : (isLight ? 0.16 : 0.78) * dpr;
            ctx.stroke();
          }
        }

        // ── Vertical lines ────────────────────────────────────────────────
        for (let i = 0; i < COLS; i++) {
          const isAccentCol = i % 5 === 0;
          const centreScale = Math.max(0.18, 1 - Math.abs(i / (COLS - 1) - 0.5) * 1.25);
          for (let j = 0; j < ROWS - 1; j++) {
            const midH = (sh[j][i] + sh[j + 1][i]) / 2;
            const normalH = Math.max(-1, Math.min(1, midH / AMPLITUDE));
            ctx.beginPath();
            ctx.moveTo(sx[j][i], sy[j][i]);
            ctx.lineTo(sx[j + 1][i], sy[j + 1][i]);
            ctx.strokeStyle = segmentColor(normalH * centreScale, isLight, breathe);
            ctx.lineWidth = isAccentCol
              ? (isLight ? 0.28 : 0.85) * dpr
              : (isLight ? 0.12 : 0.52) * dpr;
            ctx.stroke();
          }
        }

        // ── Interweaving ribbon waves — smooth bezier, depth-sorted ──────
        // Each ribbon is a continuous bezier curve sampled from a sine wave.
        // We sort them each frame by their screen Y midpoint so the one
        // visually "lower" always renders on top — natural crossing with zero
        // hard flips.
        const RIBBON_CTRL_POINTS = 64;   // control points per ribbon path
        const ribbons = [
          // { speed, freqX, phaseOff, baseY(0-1), amp(0-1), lime, lineW }
          { speed: 0.22, freqX: 1.40, phaseOff: 0.00, baseY: 0.20, amp: 0.110, lime: true,  w: isLight ? 0.80 : 2.20 },
          { speed: 0.15, freqX: 1.75, phaseOff: 1.05, baseY: 0.35, amp: 0.095, lime: false, w: isLight ? 0.50 : 1.20 },
          { speed: 0.28, freqX: 1.20, phaseOff: 2.10, baseY: 0.50, amp: 0.105, lime: true,  w: isLight ? 1.00 : 2.60 },
          { speed: 0.19, freqX: 1.60, phaseOff: 3.15, baseY: 0.65, amp: 0.085, lime: false, w: isLight ? 0.45 : 1.00 },
          { speed: 0.25, freqX: 1.35, phaseOff: 0.70, baseY: 0.38, amp: 0.078, lime: true,  w: isLight ? 0.65 : 1.70 },
          { speed: 0.17, freqX: 1.95, phaseOff: 1.90, baseY: 0.56, amp: 0.092, lime: false, w: isLight ? 0.35 : 0.85 },
        ];

        // Compute midpoint Y for each ribbon this frame for depth sorting
        const ribbonMidY = ribbons.map((rib) => {
          const midU = 0.5;
          const angle = t * rib.speed - midU * Math.PI * 2 * rib.freqX + rib.phaseOff;
          return rib.baseY * ch + Math.sin(angle) * rib.amp * ch;
        });

        // Sort indices: ribbons with larger Y (lower on screen) draw last = on top
        const drawOrder = [0, 1, 2, 3, 4, 5].sort((a, b) => ribbonMidY[a] - ribbonMidY[b]);

        for (const ri of drawOrder) {
          const rib = ribbons[ri];
          const limeA  = isLight ? 0.22 : 0.48;
          const whiteA = isLight ? 0.11 : 0.22;
          const baseAlpha = (rib.lime ? limeA : whiteA) * breathe;

          // Build the full bezier path as one continuous stroke,
          // varying lineWidth per-segment to simulate the brightness
          // along the wave crest (same visual rhythm as WoodenDivider)
          ctx.save();
          ctx.lineWidth = rib.w * dpr;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          let prevX = 0, prevY = 0;

          for (let s = 0; s < RIBBON_CTRL_POINTS; s++) {
            const u0 = s / RIBBON_CTRL_POINTS;
            const u1 = (s + 1) / RIBBON_CTRL_POINTS;
            const px0 = u0 * cw;
            const px1 = u1 * cw;
            const angle0 = t * rib.speed - u0 * Math.PI * 2 * rib.freqX + rib.phaseOff;
            const angle1 = t * rib.speed - u1 * Math.PI * 2 * rib.freqX + rib.phaseOff;
            const py0 = rib.baseY * ch + Math.sin(angle0) * rib.amp * ch;
            const py1 = rib.baseY * ch + Math.sin(angle1) * rib.amp * ch;

            // brightness: peaks glow, troughs dim — same rhythm as WoodenDivider
            const sinVal0 = (Math.sin(angle0) + 1) / 2;
            const segAlpha = baseAlpha * (0.38 + sinVal0 * 0.62);

            // Use a smooth quadratic control point midway between segments
            const cpX = (px0 + px1) / 2;
            const cpY = (py0 + py1) / 2;

            ctx.beginPath();
            if (s === 0) {
              ctx.moveTo(px0, py0);
            } else {
              ctx.moveTo(prevX, prevY);
            }
            ctx.quadraticCurveTo(px0, py0, cpX, cpY);

            ctx.strokeStyle = rib.lime
              ? `rgba(200,212,0,${segAlpha})`
              : `rgba(255,255,255,${segAlpha})`;
            ctx.stroke();

            prevX = cpX;
            prevY = cpY;
          }
          ctx.restore();
        }

        animRef.current = requestAnimationFrame(draw);
      }

      animRef.current = requestAnimationFrame(draw);

      return () => {
        cancelAnimationFrame(animRef.current);
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        container?.removeEventListener('click', handleClick);
      };
    }, []);

    return (
      <>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            zIndex: 0,
            pointerEvents: 'none',
            filter: variant === 'dark'
              ? 'drop-shadow(0 0 6px rgba(200,212,0,0.60)) drop-shadow(0 0 2px rgba(200,212,0,0.35))'
              : 'none',
          }}
        />

        {/* ── Radar scan-line — sweeps top→bottom every 8s ─────────────── */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            height: '1px',
            zIndex: 2,
            background: variant === 'dark'
              ? 'linear-gradient(to right, transparent 0%, rgba(200,212,0,0.10) 8%, rgba(200,212,0,0.55) 50%, rgba(200,212,0,0.10) 92%, transparent 100%)'
              : 'linear-gradient(to right, transparent 0%, rgba(200,212,0,0.05) 8%, rgba(200,212,0,0.28) 50%, rgba(200,212,0,0.05) 92%, transparent 100%)',
            filter: variant === 'dark'
              ? 'drop-shadow(0 0 4px rgba(200,212,0,0.55)) drop-shadow(0 0 8px rgba(200,212,0,0.20))'
              : 'drop-shadow(0 0 2px rgba(200,212,0,0.25))',
            animation: 'sonicScanLine 8s linear infinite',
          }}
        />
      </>
    );
  },
);

SonicPulseCanvas.displayName = 'SonicPulseCanvas';
export default SonicPulseCanvas;
