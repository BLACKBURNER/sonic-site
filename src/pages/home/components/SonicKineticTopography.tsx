import { useRef, useEffect, useCallback } from 'react';

// ─── Grid ─────────────────────────────────────────────────────────────────────
const COLS = 80;
const ROWS = 52;

// ─── Extended palette: lime + dark gray spectrum ──────────────────────────────
const PALETTE = [
  { color: '#111111', weight: 2.8, alphaBase: 0.75 }, // 0 — near-black BOLD (deep troughs)
  { color: '#1e1e1e', weight: 1.5, alphaBase: 0.55 }, // 1 — very dark gray
  { color: '#2d2d2d', weight: 1.0, alphaBase: 0.40 }, // 2 — dark gray thin
  { color: '#3d4200', weight: 0.8, alphaBase: 0.35 }, // 3 — near-black olive
  { color: '#5a6300', weight: 1.1, alphaBase: 0.44 }, // 4 — dark olive
  { color: '#7a8500', weight: 1.6, alphaBase: 0.58 }, // 5 — mid olive
  { color: '#9aaa00', weight: 2.1, alphaBase: 0.72 }, // 6 — lime-mid
  { color: '#b8c800', weight: 2.8, alphaBase: 0.88 }, // 7 — bright lime bold
  { color: '#C8D400', weight: 3.6, alphaBase: 1.00 }, // 8 — neon lime BOLD (peaks)
];

// ─── Realistic terrain wave parameters ────────────────────────────────────────
const BASE_AMP   = 0.108;
const WAVE_SPEED = 0.22;

// ─── Cursor ───────────────────────────────────────────────────────────────────
const RIPPLE_RADIUS   = 0.12;
const RIPPLE_STRENGTH = 0.048;

// ─── Particles ────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 52;

// ─── Data nodes ───────────────────────────────────────────────────────────────
const NODE_COUNT = 14;

// ─── Vertical shift in pixels (push terrain down ~270px) ─────────────────────
const VERT_SHIFT = 270;

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
  layer: number;
}

interface DataNode {
  gi: number; gj: number;
  pulseOffset: number;
  pulseSpeed: number;
  connectedTo: number;
}

interface ClickRipple {
  x: number; y: number;
  t: number;
  maxR: number;
}

function initParticles(W: number, H: number): Particle[] {
  const colors = ['#C8D400', '#8a9200', '#a8b300', '#1a1a1a', '#444400'];
  return Array.from({ length: PARTICLE_COUNT }, (_, idx) => {
    const layer = idx < 17 ? 0 : idx < 34 ? 1 : 2;
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * (0.06 + layer * 0.08),
      vy: (Math.random() - 0.5) * (0.04 + layer * 0.06),
      radius: layer === 0 ? 0.7 + Math.random() * 0.9
             : layer === 1 ? 1.1 + Math.random() * 1.6
             : 1.6 + Math.random() * 2.6,
      alpha: 0.04 + Math.random() * 0.18,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulseSpeed: 0.25 + Math.random() * 0.85,
      pulseOffset: Math.random() * Math.PI * 2,
      layer,
    };
  });
}

function initNodes(): DataNode[] {
  return Array.from({ length: NODE_COUNT }, (_, i) => ({
    gi: 5 + Math.floor(Math.random() * (COLS - 10)),
    gj: 5 + Math.floor(Math.random() * (ROWS - 10)),
    pulseOffset: Math.random() * Math.PI * 2,
    pulseSpeed: 0.4 + Math.random() * 1.1,
    connectedTo: (i + 1 + Math.floor(Math.random() * (NODE_COUNT - 1))) % NODE_COUNT,
  }));
}

// Map normalised height (0–1) to palette index (9-stop)
function paletteIdx(t01: number): number {
  return Math.min(8, Math.floor(t01 * 9));
}

export default function SonicKineticTopography() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const mouseRef     = useRef({ x: 9999, y: 9999 });
  const rafRef       = useRef<number>(0);
  const startRef     = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const nodesRef     = useRef<DataNode[]>(initNodes());
  const clickRipples = useRef<ClickRipple[]>([]);
  const scrollAlpha  = useRef<number>(1);

  // ── Realistic multi-octave terrain height function ──────────────────────────
  // Uses multiple overlapping sine waves at different frequencies + a Perlin-like
  // ridge function to create organic mountain/valley terrain feel
  const getHeight = useCallback((
    i: number, j: number, t: number,
    mx: number, mz: number,
    W: number, H: number,
  ): number => {
    const wx = (i / (COLS - 1) - 0.5) * W;
    const wz = (j / (ROWS - 1) - 0.5) * H;

    // Softer edge suppression — allow lines to reach edges
    const nx = Math.abs(wx) / (W * 0.5);
    const nz = Math.abs(wz) / (H * 0.5);
    const suppressX = Math.max(0, 1 - Math.max(0, nx - 0.55) / 0.45);
    const suppressZ = Math.max(0, 1 - Math.max(0, nz - 0.40) / 0.60);
    const centreMask = 1 - suppressX * suppressZ * 0.65; // softer mask, never fully 0

    const amp = BASE_AMP * H * centreMask;

    // Octave 1 — primary slow rolling hills
    const w1 = Math.sin(t * WAVE_SPEED        + i * 0.13 + j * 0.11) * amp;
    // Octave 2 — secondary cross-wave
    const w2 = Math.sin(t * WAVE_SPEED * 0.58 - i * 0.19 + j * 0.15) * amp * 0.55;
    // Octave 3 — tertiary detail
    const w3 = Math.cos(t * WAVE_SPEED * 0.35 + i * 0.09 - j * 0.14) * amp * 0.30;
    // Octave 4 — fine ripple
    const w4 = Math.sin(t * WAVE_SPEED * 1.15 + i * 0.32 + j * 0.27) * amp * 0.16;
    // Octave 5 — micro detail for realism
    const w5 = Math.cos(t * WAVE_SPEED * 0.72 - i * 0.41 - j * 0.38) * amp * 0.09;
    // Ridge function — creates sharp mountain ridges
    const ridge = Math.abs(Math.sin(t * WAVE_SPEED * 0.28 + i * 0.17 + j * 0.08)) * amp * 0.22;

    let h = w1 + w2 + w3 + w4 + w5 + ridge;

    // Mouse cursor dip
    const dx = wx - mx;
    const dz = wz - mz;
    const dist2 = dx * dx + dz * dz;
    const r = RIPPLE_RADIUS * W;
    const r2 = r * r;
    if (dist2 < r2 * 4) {
      h -= RIPPLE_STRENGTH * H * Math.exp(-dist2 / (r2 * 0.7));
      const rimDist = Math.abs(Math.sqrt(dist2) - r * 1.2);
      if (rimDist < r * 0.6) {
        const rf = 1 - rimDist / (r * 0.6);
        h += RIPPLE_STRENGTH * H * 0.35 * rf * rf;
      }
    }
    return h;
  }, []);

  useEffect(() => {
    const canvas  = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      canvas.width  = rect.width;
      canvas.height = rect.height;
      particlesRef.current = initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickRipples.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        t: performance.now(),
        maxR: 140 + Math.random() * 100,
      });
      if (clickRipples.current.length > 6) clickRipples.current.shift();
    };
    window.addEventListener('click', onClick);

    const onScroll = () => {
      const heroH = wrapper.offsetHeight;
      const scrollY = window.scrollY;
      const fadeStart = heroH * 0.30;
      const fadeEnd   = heroH * 0.78;
      scrollAlpha.current = scrollY <= fadeStart ? 1
        : scrollY >= fadeEnd ? 0
        : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const draw = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const t  = (ts - startRef.current) / 1000;
      const W  = canvas.width;
      const H  = canvas.height;
      const sa = scrollAlpha.current;

      ctx.clearRect(0, 0, W, H);
      if (sa <= 0.01) { rafRef.current = requestAnimationFrame(draw); return; }

      const mx = mouseRef.current.x - W / 2;
      const mz = mouseRef.current.y - H / 2;

      const tilt   = 0.50;
      // Camera Y shifted down by VERT_SHIFT to push terrain lower
      const camY   = H * 0.38 + VERT_SHIFT;
      const maxAmp = BASE_AMP * H;

      const project = (i: number, j: number, h: number) => {
        const wx    = (i / (COLS - 1)) * W;
        const wz    = (j / (ROWS - 1)) * H;
        const depth = j / (ROWS - 1);
        const scale = 0.50 + depth * 0.50;
        return {
          sx: W * 0.5 + (wx - W * 0.5) * scale,
          sy: camY + (wz - H * 0.5) * tilt * scale - h * scale,
          scale,
        };
      };

      // ── 1. Horizontal contour lines — 9-tier rich color system ──────────
      // Every 8th row = BOLD accent, every 4th = medium, rest = thin
      for (let j = 0; j < ROWS; j++) {
        const isBold   = j % 8 === 0;
        const isMedium = !isBold && j % 4 === 0;

        for (let i = 0; i < COLS - 1; i++) {
          const h0 = getHeight(i,     j, t, mx, mz, W, H);
          const h1 = getHeight(i + 1, j, t, mx, mz, W, H);
          const p0 = project(i,     j, h0);
          const p1 = project(i + 1, j, h1);

          // Skip lines that project completely off-canvas (with generous margin)
          if (p0.sx < -W * 0.3 && p1.sx < -W * 0.3) continue;
          if (p0.sx > W * 1.3  && p1.sx > W * 1.3)  continue;
          if (p0.sy < -H * 0.5 && p1.sy < -H * 0.5) continue;
          if (p0.sy > H * 1.5  && p1.sy > H * 1.5)  continue;

          const midH = (h0 + h1) / 2;
          const t01  = Math.max(0, Math.min(1, (midH / maxAmp + 1) / 2));
          const pi   = paletteIdx(t01);
          const pal  = PALETTE[pi];

          const wMult = isBold ? 1.9 : isMedium ? 1.25 : 0.72;
          const aMult = isBold ? 1.4 : isMedium ? 1.05 : 0.78;

          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = pal.color;
          ctx.globalAlpha = sa * Math.min(1, pal.alphaBase * aMult);
          ctx.lineWidth   = pal.weight * wMult;
          ctx.lineCap     = 'round';
          ctx.stroke();
        }
      }

      // ── 2. Vertical lines — thin, dark-gray dominant ─────────────────
      for (let i = 0; i < COLS; i++) {
        const isAccentCol = i % 9 === 0;
        for (let j = 0; j < ROWS - 1; j++) {
          const h0 = getHeight(i, j,     t, mx, mz, W, H);
          const h1 = getHeight(i, j + 1, t, mx, mz, W, H);
          const p0 = project(i, j,     h0);
          const p1 = project(i, j + 1, h1);

          if (p0.sx < -W * 0.3 && p1.sx < -W * 0.3) continue;
          if (p0.sx > W * 1.3  && p1.sx > W * 1.3)  continue;
          if (p0.sy < -H * 0.5 && p1.sy < -H * 0.5) continue;
          if (p0.sy > H * 1.5  && p1.sy > H * 1.5)  continue;

          const midH = (h0 + h1) / 2;
          const t01  = Math.max(0, Math.min(1, (midH / maxAmp + 1) / 2));
          const pi   = Math.max(0, paletteIdx(t01) - 2);
          const pal  = PALETTE[pi];

          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = pal.color;
          ctx.globalAlpha = sa * Math.min(1, pal.alphaBase * (isAccentCol ? 0.52 : 0.26));
          ctx.lineWidth   = isAccentCol ? 0.85 : 0.32;
          ctx.stroke();
        }
      }

      // ── 3. Peak highlight strokes — 4-pass bloom on neon lime peaks ──
      for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS - 1; i++) {
          const h0 = getHeight(i,     j, t, mx, mz, W, H);
          const h1 = getHeight(i + 1, j, t, mx, mz, W, H);
          const midH = (h0 + h1) / 2;
          const t01  = Math.max(0, Math.min(1, (midH / maxAmp + 1) / 2));
          if (t01 < 0.76) continue;

          const p0 = project(i,     j, h0);
          const p1 = project(i + 1, j, h1);

          if (p0.sy < -H * 0.5 || p0.sy > H * 1.5) continue;

          const intensity = (t01 - 0.76) / 0.24;

          // Pass A — tight soft bloom halo (reduced width for crispness)
          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = '#C8D400';
          ctx.globalAlpha = sa * intensity * 0.07;
          ctx.lineWidth   = 9 * intensity;
          ctx.lineCap     = 'round';
          ctx.stroke();

          // Pass B — medium glow (tighter)
          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = '#d8e800';
          ctx.globalAlpha = sa * intensity * 0.28;
          ctx.lineWidth   = 4.5 * intensity;
          ctx.stroke();

          // Pass C — inner bright glow (sharper)
          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = '#e8f500';
          ctx.globalAlpha = sa * intensity * 0.60;
          ctx.lineWidth   = 2.2 * intensity;
          ctx.stroke();

          // Pass D — sharp white-hot core (stronger)
          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = '#f5ff80';
          ctx.globalAlpha = sa * intensity * 0.90;
          ctx.lineWidth   = 1.0 * intensity;
          ctx.lineCap     = 'butt';
          ctx.stroke();
        }
      }

      // ── 4. Trough shadow strokes — extra dark on deep valleys ─────────
      for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS - 1; i++) {
          const h0 = getHeight(i,     j, t, mx, mz, W, H);
          const h1 = getHeight(i + 1, j, t, mx, mz, W, H);
          const midH = (h0 + h1) / 2;
          const t01  = Math.max(0, Math.min(1, (midH / maxAmp + 1) / 2));
          if (t01 > 0.20) continue;

          const p0 = project(i,     j, h0);
          const p1 = project(i + 1, j, h1);
          if (p0.sy < -H * 0.5 || p0.sy > H * 1.5) continue;

          const intensity = (0.20 - t01) / 0.20;

          ctx.beginPath();
          ctx.moveTo(p0.sx, p0.sy);
          ctx.lineTo(p1.sx, p1.sy);
          ctx.strokeStyle = '#080808';
          ctx.globalAlpha = sa * intensity * 0.50;
          ctx.lineWidth   = 3.0 * intensity;
          ctx.stroke();
        }
      }

      // ── 5. Data node connectors ──────────────────────────────────────
      const nodes = nodesRef.current;
      const nodePos: Array<{ sx: number; sy: number }> = [];
      for (const node of nodes) {
        const h = getHeight(node.gi, node.gj, t, mx, mz, W, H);
        const p = project(node.gi, node.gj, h);
        nodePos.push({ sx: p.sx, sy: p.sy });
      }

      for (let ni = 0; ni < nodes.length; ni++) {
        const a = nodePos[ni];
        const b = nodePos[nodes[ni].connectedTo];
        const dist = Math.hypot(b.sx - a.sx, b.sy - a.sy);
        if (dist > W * 0.40) continue;
        const pulse = 0.5 + 0.5 * Math.sin(t * nodes[ni].pulseSpeed + nodes[ni].pulseOffset);

        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle = '#8a9200';
        ctx.globalAlpha = sa * 0.10 * pulse;
        ctx.lineWidth   = 0.6;
        ctx.setLineDash([3, 9]);
        ctx.stroke();
        ctx.setLineDash([]);

        const prog = (t * 0.18 * nodes[ni].pulseSpeed + nodes[ni].pulseOffset * 0.1) % 1;
        const dotX = a.sx + (b.sx - a.sx) * prog;
        const dotY = a.sy + (b.sy - a.sy) * prog;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#C8D400';
        ctx.globalAlpha = sa * 0.58 * pulse;
        ctx.fill();
      }

      for (let ni = 0; ni < nodes.length; ni++) {
        const { sx, sy } = nodePos[ni];
        const pulse = 0.5 + 0.5 * Math.sin(t * nodes[ni].pulseSpeed + nodes[ni].pulseOffset);
        const size  = 3.5 + pulse * 2.5;

        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, size * 2.5);
        grd.addColorStop(0, '#C8D40044');
        grd.addColorStop(1, '#C8D40000');
        ctx.beginPath();
        ctx.arc(sx, sy, size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.globalAlpha = sa * 0.6 * pulse;
        ctx.fill();

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(Math.PI / 4);
        ctx.beginPath();
        ctx.rect(-size * 0.7, -size * 0.7, size * 1.4, size * 1.4);
        ctx.strokeStyle = '#C8D400';
        ctx.globalAlpha = sa * (0.4 + pulse * 0.5);
        ctx.lineWidth   = 1;
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.arc(sx, sy, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#C8D400';
        ctx.globalAlpha = sa * (0.7 + pulse * 0.3);
        ctx.fill();
      }

      // ── 6. Floating particles ────────────────────────────────────────
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        const pulse     = 0.5 + 0.5 * Math.sin(t * p.pulseSpeed + p.pulseOffset);
        const drawAlpha = sa * (p.alpha * 0.4 + pulse * p.alpha * 0.6);
        const haloR     = p.radius * (p.layer === 2 ? 5 : 4);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
        grad.addColorStop(0,   p.color + 'cc');
        grad.addColorStop(0.4, p.color + '44');
        grad.addColorStop(1,   p.color + '00');
        ctx.beginPath();
        ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
        ctx.fillStyle   = grad;
        ctx.globalAlpha = drawAlpha * 0.4;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.55, 0, Math.PI * 2);
        ctx.fillStyle   = p.color;
        ctx.globalAlpha = drawAlpha;
        ctx.fill();
      }

      // ── 7. Scan-line pulse ───────────────────────────────────────────
      const scanY    = ((t * 0.10) % 1) * H;
      const scanGrad = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80);
      scanGrad.addColorStop(0,   'rgba(200,212,0,0)');
      scanGrad.addColorStop(0.4, 'rgba(200,212,0,0.030)');
      scanGrad.addColorStop(0.5, 'rgba(200,212,0,0.08)');
      scanGrad.addColorStop(0.6, 'rgba(200,212,0,0.030)');
      scanGrad.addColorStop(1,   'rgba(200,212,0,0)');
      ctx.fillStyle   = scanGrad;
      ctx.globalAlpha = sa;
      ctx.fillRect(0, scanY - 80, W, 160);

      // ── 8. Click ripple bursts ───────────────────────────────────────
      const now = ts;
      clickRipples.current = clickRipples.current.filter(cr => now - cr.t < 1500);
      for (const cr of clickRipples.current) {
        const age       = (now - cr.t) / 1500;
        const ringAlpha = sa * (1 - age) * 0.55;
        const r1 = Math.max(0, cr.maxR * age);
        const r2 = Math.max(0, cr.maxR * age * 0.55);

        if (r1 > 0) {
          ctx.beginPath();
          ctx.arc(cr.x, cr.y, r1, 0, Math.PI * 2);
          ctx.strokeStyle = '#C8D400';
          ctx.globalAlpha = ringAlpha;
          ctx.lineWidth   = 1.8 * (1 - age);
          ctx.stroke();
        }

        if (r2 > 0) {
          ctx.beginPath();
          ctx.arc(cr.x, cr.y, r2, 0, Math.PI * 2);
          ctx.strokeStyle = '#1a1a1a';
          ctx.globalAlpha = ringAlpha * 0.5;
          ctx.lineWidth   = 1.0 * (1 - age);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, [getHeight]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        // Mask — fade-in starts earlier to match lower terrain position
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.50) 6%, rgba(0,0,0,0.85) 15%, black 28%, black 100%)',
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.50) 6%, rgba(0,0,0,0.85) 15%, black 28%, black 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
