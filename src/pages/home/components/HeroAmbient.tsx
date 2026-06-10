import { useEffect, useRef, useState } from 'react';

// ─── Floating data fragments ──────────────────────────────────────────────────
const DATA_FRAGMENTS = [
  { text: 'SRT_v2.4', x: '6%',  y: '18%', delay: 0 },
  { text: '48.2k ↑',  x: '88%', y: '14%', delay: 0.8 },
  { text: 'DE·AT·CH',  x: '4%',  y: '72%', delay: 1.4 },
  { text: '99.1%',     x: '91%', y: '68%', delay: 0.4 },
  { text: 'POS_LIVE',  x: '7%',  y: '44%', delay: 2.0 },
  { text: '∑ 3.7M',    x: '86%', y: '42%', delay: 1.1 },
  { text: 'DACH_2025', x: '5%',  y: '88%', delay: 0.6 },
  { text: '17Y_TRACK', x: '88%', y: '86%', delay: 1.7 },
];

// ─── Corner coordinate labels ─────────────────────────────────────────────────
const CORNERS = [
  { label: '48°N 11°E', pos: 'top-[72px] left-4' },
  { label: '47°N 15°E', pos: 'top-[72px] right-4' },
  { label: '47°N 8°E',  pos: 'bottom-4 left-4' },
  { label: '48°N 16°E', pos: 'bottom-4 right-4' },
];


export default function HeroAmbient() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroH, setHeroH] = useState(1);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    const measure = () => {
      if (heroRef.current?.parentElement) {
        setHeroH(heroRef.current.parentElement.offsetHeight || 1);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const fadeStart = heroH * 0.28;
  const fadeEnd   = heroH * 0.72;
  const opacity = scrollY <= fadeStart ? 1
    : scrollY >= fadeEnd ? 0
    : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);

  if (opacity <= 0) return null;

  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes fragmentFloat {
          0%,100% { transform: translateY(0px); opacity: var(--fa); }
          50%      { transform: translateY(-6px); opacity: calc(var(--fa) * 1.4); }
        }
        @keyframes cornerBlink {
          0%,90%,100% { opacity: 0.22; }
          95%          { opacity: 0.55; }
        }
        @keyframes scanPulse {
          0%   { opacity: 0; transform: scaleX(0.3); }
          20%  { opacity: 1; transform: scaleX(1); }
          80%  { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0; transform: scaleX(0.3); }
        }
      `}</style>

      <div
        ref={heroRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 2, opacity }}
      >


        {/* ── Corner coordinate labels ──────────────────────────────── */}
        {CORNERS.map((c, i) => (
          <div
            key={i}
            className={`absolute ${c.pos} font-sans tabular-nums text-xs text-[#8a9200] select-none`}
            style={{ animation: `cornerBlink ${3 + i * 0.7}s ease-in-out infinite` }}
          >
            {c.label}
          </div>
        ))}

        {/* ── Corner bracket marks ─────────────────────────────────── */}
        {[
          'top-[68px] left-3',
          'top-[68px] right-3',
          'bottom-8 left-3',
          'bottom-8 right-3',
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-4 h-4`}>
            <div
              className="absolute inset-0"
              style={{
                borderTop: i < 2 ? '1px solid rgba(200,212,0,0.25)' : 'none',
                borderBottom: i >= 2 ? '1px solid rgba(200,212,0,0.25)' : 'none',
                borderLeft: i % 2 === 0 ? '1px solid rgba(200,212,0,0.25)' : 'none',
                borderRight: i % 2 === 1 ? '1px solid rgba(200,212,0,0.25)' : 'none',
              }}
            />
          </div>
        ))}

        {/* ── Floating data fragments ───────────────────────────────── */}
        {DATA_FRAGMENTS.map((f, i) => (
          <div
            key={i}
            className="absolute font-sans tabular-nums text-xs font-bold tracking-widest select-none"
            style={{
              left: f.x,
              top: f.y,
              color: '#8a9200',
              ['--fa' as string]: '0.28',
              animation: `fragmentFloat ${5 + i * 0.6}s ease-in-out ${f.delay}s infinite`,
            }}
          >
            {f.text}
          </div>
        ))}

        {/* ── Left edge vertical text ───────────────────────────────── */}
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-[0.3em] text-[#8a9200]/35 select-none uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
        >
          SONIC·RETAIL·DACH·2025
        </div>

        {/* ── Right edge vertical text ──────────────────────────────── */}
        <div
          className="absolute right-3 top-1/2 font-mono text-[8px] tracking-[0.3em] text-[#8a9200]/35 select-none uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}
        >
          PERFORMANCE·PEOPLE·DATA
        </div>

        {/* ── Horizontal centre crosshair line ─────────────────────── */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(200,212,0,0.08) 15%, rgba(200,212,0,0.18) 50%, rgba(200,212,0,0.08) 85%, transparent 100%)',
          }}
        />

        {/* ── Vertical centre crosshair line ───────────────────────── */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '50%',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(200,212,0,0.06) 20%, rgba(200,212,0,0.14) 50%, rgba(200,212,0,0.06) 80%, transparent 100%)',
          }}
        />

        {/* ── Centre crosshair dot ──────────────────────────────────── */}
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '6px',
            height: '6px',
            marginTop: '-3px',
            marginLeft: '-3px',
            border: '1px solid rgba(200,212,0,0.30)',
            borderRadius: '50%',
            animation: 'cornerBlink 4s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
}
