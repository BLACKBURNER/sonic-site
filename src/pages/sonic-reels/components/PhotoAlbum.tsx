import { useCallback, useEffect, useRef, useState } from 'react';
import { EraData } from '../page';

interface Props {
  eras: EraData[];
  activeEraIndex: number;
  onEraChange: (index: number) => void;
  showHighlights: boolean;
  onHighlightsClose: () => void;
}

// ── Film grain ─────────────────────────────────────────────────────────────
function FilmGrain({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
        mixBlendMode: 'overlay',
      }}
    />
  );
}

// ── Sprocket strip ─────────────────────────────────────────────────────────
function SprocketStrip({ side }: { side: 'top' | 'bottom' }) {
  return (
    <div
      className="absolute left-0 right-0 z-20 flex items-center justify-around px-3 pointer-events-none"
      style={{
        [side]: 0,
        height: 32,
        background: side === 'top'
          ? 'linear-gradient(to bottom, #161616 60%, transparent)'
          : 'linear-gradient(to top, #161616 60%, transparent)',
      }}
    >
      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 rounded-[1px]"
          style={{ width: 12, height: 8, background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.12)' }}
        />
      ))}
    </div>
  );
}

// ── Film Negative Contact Sheet ────────────────────────────────────────────
function FilmNegativeStrip({
  gallery,
  photoIndex,
  onSelect,
}: {
  gallery: { url: string; caption: string }[];
  photoIndex: number;
  onSelect: (i: number) => void;
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeRef.current || !stripRef.current) return;
    const container = stripRef.current;
    const btn = activeRef.current;
    const scrollTarget = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
  }, [photoIndex]);

  return (
    <div className="flex flex-col" style={{ background: '#0a0a0a' }}>
      {/* Top sprocket row */}
      <div
        className="flex items-center justify-around px-2 flex-shrink-0"
        style={{ height: 14, background: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-[1px]"
            style={{ width: 8, height: 5, background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}
          />
        ))}
      </div>

      {/* Film strip label */}
      <div
        className="flex items-center gap-4 px-4 flex-shrink-0"
        style={{ height: 16, background: '#111' }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(200,212,0,0.4)', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          SONIC ARCHIV · KODAK 5219 · 35MM
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <span style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.15)', fontWeight: 900 }}>
          {String(gallery.length).padStart(2, '0')} FRAMES
        </span>
      </div>

      {/* Scrollable negative frames */}
      <div
        ref={stripRef}
        className="flex items-stretch gap-0 overflow-x-auto flex-shrink-0"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          background: '#111',
          padding: '6px 8px',
        }}
      >
        {gallery.map((img, i) => {
          const isActive = i === photoIndex;
          return (
            <button
              key={i}
              ref={isActive ? activeRef : null}
              onClick={() => onSelect(i)}
              className="relative flex-shrink-0 cursor-pointer group"
              style={{
                width: 56,
                marginRight: 3,
                padding: '2px',
                background: isActive ? 'rgba(200,212,0,0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(200,212,0,0.5)' : '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Frame number above */}
              <div
                className="text-center mb-0.5"
                style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: isActive ? 'rgba(200,212,0,0.8)' : 'rgba(255,255,255,0.2)', fontWeight: 900 }}
              >
                {String(i + 1).padStart(2, '0')}A
              </div>

              {/* Negative image */}
              <div
                className="relative overflow-hidden"
                style={{
                  height: 36,
                  filter: isActive
                    ? 'none'
                    : 'invert(1) sepia(0.3) hue-rotate(180deg) saturate(0.4) brightness(0.7)',
                  transition: 'filter 0.3s ease',
                }}
              >
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                  style={{
                    opacity: isActive ? 1 : 0.6,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                {!isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(255,140,0,0.08)', mixBlendMode: 'color' }}
                  />
                )}
                {isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(200,212,0,0.4)' }}
                  />
                )}
              </div>

              {/* Hover highlight */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'rgba(200,212,0,0.06)' }}
              />
            </button>
          );
        })}
      </div>

      {/* Bottom sprocket row */}
      <div
        className="flex items-center justify-around px-2 flex-shrink-0"
        style={{ height: 14, background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-[1px]"
            style={{ width: 8, height: 5, background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Story So Far Card ──────────────────────────────────────────────────────
interface StorySoFarProps {
  stat: string;
  statLabel: string;
  tagline: string;
  years: string;
}

function StorySoFarCard({ stat, statLabel, tagline, years }: StorySoFarProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'white',
        border: '1px solid rgba(0,0,0,0.08)',
        padding: '14px 14px 12px 14px',
      }}
    >
      {/* Tape strip top */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2"
        style={{
          width: 44,
          height: 16,
          background: 'rgba(200,212,0,0.5)',
          transform: 'translateX(-50%) rotate(-1.5deg)',
        }}
      />
      {/* Label */}
      <p
        className="font-black uppercase tracking-[0.25em] mb-2 mt-1"
        style={{ fontSize: '0.6rem', color: 'rgba(0,0,0,0.3)', fontFamily: 'monospace' }}
      >
        Story So Far
      </p>
      {/* Big stat */}
      <div
        className="font-black leading-none mb-1"
        style={{
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          color: '#111',
          fontFamily: '"Bebas Neue", Impact, sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        {stat}
      </div>
      {/* Stat label */}
      <p style={{ fontSize: '0.65rem', color: 'rgba(0,0,0,0.45)', lineHeight: 1.4, fontWeight: 600 }}>
        {statLabel}
      </p>
      {/* Divider */}
      <div className="my-2 h-px" style={{ background: 'linear-gradient(to right, #C8D400, transparent)' }} />
      {/* Era context */}
      <p
        className="font-black uppercase tracking-[0.2em]"
        style={{ fontSize: '0.6rem', color: '#C8D400' }}
      >
        {tagline} · {years}
      </p>
      {/* Corner fold */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 0 14px 14px',
          borderColor: 'transparent transparent rgba(200,212,0,0.25) transparent',
        }}
      />
    </div>
  );
}

// ── Single Polaroid ────────────────────────────────────────────────────────
interface PolaroidProps {
  img: { url: string; caption: string };
  rotation: number;
  vertOffset: number;
  isCenter: boolean;
  isSide: boolean;
  onClick: () => void;
  onDragStart: (e: React.MouseEvent | React.TouchEvent) => void;
}

function Polaroid({ img, rotation, vertOffset, isCenter, isSide, onClick, onDragStart }: PolaroidProps) {
  const [hovered, setHovered] = useState(false);

  const scale = isCenter ? 1 : isSide ? 0.82 : 0.65;
  const finalRotation = isCenter ? (hovered ? 0 : rotation * 0.3) : rotation;
  const brightness = isCenter ? 1 : isSide ? 0.65 : 0.35;

  return (
    <div
      className="absolute select-none"
      style={{
        width: 'clamp(160px, 26vw, 360px)',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, calc(-50% + ${vertOffset}px)) rotate(${finalRotation}deg) scale(${hovered && isCenter ? 1.04 : scale})`,
        transition: 'transform 0.55s cubic-bezier(0.34, 1.2, 0.64, 1), filter 0.4s ease, opacity 0.4s ease',
        zIndex: isCenter ? 20 : isSide ? 10 : 5,
        filter: `brightness(${brightness}) saturate(${isCenter ? 1 : 0.6})`,
        cursor: isCenter ? (hovered ? 'zoom-in' : 'grab') : 'pointer',
        pointerEvents: isCenter || isSide ? 'auto' : 'none',
      }}
      onClick={isCenter ? onClick : undefined}
      onMouseEnter={() => isCenter && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={isCenter ? onDragStart : undefined}
      onTouchStart={isCenter ? onDragStart : undefined}
    >
      {/* Polaroid body */}
      <div
        style={{
          background: 'linear-gradient(145deg, #f8f3ea, #ede8df)',
          padding: '10px 10px 44px 10px',
          boxShadow: isCenter
            ? hovered
              ? '0 32px 80px rgba(0,0,0,0.85), 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)'
              : '0 20px 50px rgba(0,0,0,0.7), 0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
            : '0 8px 24px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        {/* Photo */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img
            src={img.url}
            alt={img.caption}
            className="w-full h-full object-cover object-top"
            draggable={false}
            style={{
              filter: `sepia(0.18) contrast(1.06) brightness(${isCenter ? 0.95 : 0.8})`,
              transform: hovered && isCenter ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.6s ease',
            }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)' }}
          />
          {/* Light leak */}
          <div
            className="absolute top-0 left-0 w-2/5 h-full pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(200,212,0,0.12), transparent)', opacity: isCenter ? 1 : 0 }}
          />
          {/* Scratch lines */}
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
            <div className="absolute" style={{ left: '23%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.8)', transform: 'rotate(0.5deg)' }} />
            <div className="absolute" style={{ left: '67%', top: 0, bottom: 0, width: 0.5, background: 'rgba(255,255,255,0.6)' }} />
          </div>
        </div>

        {/* Caption */}
        <div className="pt-2.5 pb-1 px-1 text-center">
          <p
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: '0.78rem',
              color: '#2e2820',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
            }}
          >
            {img.caption}
          </p>
        </div>

        {/* Tape strip */}
        <div
          className="absolute -top-3.5 left-1/2"
          style={{
            width: 52,
            height: 22,
            background: 'rgba(200,212,0,0.45)',
            transform: `translateX(-50%) rotate(${rotation * 0.25}deg)`,
            backdropFilter: 'blur(2px)',
          }}
        />

        {/* Bottom edge texture */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.08), transparent, rgba(0,0,0,0.08))' }}
        />
      </div>
    </div>
  );
}

// ── Era transition card ────────────────────────────────────────────────────
function EraTransitionCard({
  era,
  nextEra,
  onGoNext,
  onStay,
}: {
  era: EraData;
  nextEra: EraData | null;
  onGoNext: () => void;
  onStay: () => void;
}) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(10,10,10,0.97)' }}
    >
      <FilmGrain opacity={0.06} />
      <div className="relative z-10 text-center max-w-lg px-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#C8D400]/40" />
          <span className="font-black uppercase tracking-[0.4em] text-[#C8D400]/70" style={{ fontSize: '0.65rem', fontFamily: 'monospace' }}>
            Chapter Complete
          </span>
          <div className="h-px w-12 bg-[#C8D400]/40" />
        </div>
        <p
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', fontFamily: '"Bebas Neue", Impact, sans-serif' }}
        >
          {era.tagline}
        </p>
        <p className="font-black uppercase tracking-[0.3em] mb-8" style={{ fontSize: '0.65rem', color: 'rgba(200,212,0,0.6)' }}>
          {era.years}
        </p>

        {nextEra ? (
          <>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Ready for the next chapter?
            </p>
            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={onGoNext}
                className="flex items-center gap-3 px-8 py-3.5 font-black uppercase tracking-wider cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{
                  background: '#C8D400',
                  color: '#111',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                }}
              >
                <span>{nextEra.tagline} — {nextEra.years}</span>
                <i className="ri-arrow-right-line" />
              </button>
              <button
                onClick={onStay}
                className="text-white/30 hover:text-white/60 transition-colors cursor-pointer font-black uppercase tracking-widest"
                style={{ fontSize: '0.6rem' }}
              >
                Stay in this era
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-white/40 text-sm mb-6">You&apos;ve reached the end of the archive.</p>
            <button
              onClick={onStay}
              className="flex items-center gap-3 px-8 py-3.5 font-black uppercase tracking-wider cursor-pointer transition-all duration-300 hover:scale-105 mx-auto whitespace-nowrap"
              style={{ background: '#C8D400', color: '#111', fontSize: '0.75rem' }}
            >
              <i className="ri-restart-line" />
              <span>Back to start</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ── Keyboard Hint Overlay ──────────────────────────────────────────────────
function KeyboardHintOverlay({ onDismiss }: { onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4500);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-6 px-6 py-4 pointer-events-none"
      style={{
        background: 'rgba(10,10,10,0.92)',
        border: '1px solid rgba(200,212,0,0.2)',
        backdropFilter: 'blur(12px)',
        animation: 'hintFadeIn 0.5s ease forwards',
      }}
    >
      <FilmGrain opacity={0.04} />
      <div className="relative z-10 flex items-center gap-6">
        {/* Arrow keys */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <kbd
              className="flex items-center justify-center font-black"
              style={{
                width: 28,
                height: 28,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'monospace',
              }}
            >
              ←
            </kbd>
            <kbd
              className="flex items-center justify-center font-black"
              style={{
                width: 28,
                height: 28,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'monospace',
              }}
            >
              →
            </kbd>
          </div>
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Navigate photos
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6" style={{ background: 'rgba(255,255,255,0.1)' }} />

        {/* Escape */}
        <div className="flex items-center gap-2">
          <kbd
            className="flex items-center justify-center font-black px-2"
            style={{
              height: 28,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '0.55rem',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
            }}
          >
            ESC
          </kbd>
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Close lightbox
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6" style={{ background: 'rgba(255,255,255,0.1)' }} />

        {/* Drag */}
        <div className="flex items-center gap-2">
          <i className="ri-drag-move-line" style={{ fontSize: '0.9rem', color: 'rgba(200,212,0,0.6)' }} />
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Drag to flip
          </span>
        </div>
      </div>

      <style>{`
        @keyframes hintFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ── Highlights Viewer ──────────────────────────────────────────────────────
interface HighlightPhoto {
  url: string;
  caption: string;
  eraLabel: string;
  eraYears: string;
}

function HighlightsViewer({
  highlights,
  onClose,
}: {
  highlights: HighlightPhoto[];
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<HighlightPhoto | null>(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const curr = highlights[idx];
  const prev = highlights[idx - 1];
  const next = highlights[idx + 1];

  const goTo = useCallback((i: number) => {
    if (i < 0 || i >= highlights.length) return;
    setIdx(i);
  }, [highlights.length]);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(x);
    setIsDragging(true);
    setDragDelta(0);
  }, []);

  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragDelta(x - dragStartX);
  }, [isDragging, dragStartX]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -60) goTo(idx + 1);
    else if (dragDelta > 60) goTo(idx - 1);
    setDragDelta(0);
  }, [isDragging, dragDelta, idx, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(idx + 1);
      if (e.key === 'ArrowLeft') goTo(idx - 1);
      if (e.key === 'Escape') {
        if (lightboxImg) setLightboxImg(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [idx, goTo, lightboxImg, onClose]);

  const rotations = [-3.5, 2.8, -1.9, 4.2, -2.7, 3.1];

  return (
    <div
      className="fixed inset-0 z-[180] flex flex-col overflow-hidden"
      style={{ background: '#0a0a0a' }}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <FilmGrain opacity={0.05} />

      {/* Header */}
      <div
        className="relative z-20 flex items-center justify-between px-8 py-4 flex-shrink-0"
        style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-[#C8D400] animate-pulse" />
          <span className="font-black uppercase tracking-[0.4em]" style={{ fontSize: '0.65rem', color: '#C8D400', fontFamily: 'monospace' }}>
            Best of Sonic Reels
          </span>
          <span className="font-black" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>
            {String(idx + 1).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          <i className="ri-close-line text-sm" />
          <span>Close</span>
        </button>
      </div>

      {/* Stage */}
      <div
        className="flex-1 relative flex items-center justify-center"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Background */}
        {curr && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={curr.url}
              alt=""
              className="w-full h-full object-cover object-top"
              style={{ opacity: 0.12, filter: 'blur(20px) sepia(0.4)', transform: 'scale(1.1)' }}
              draggable={false}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.7)' }} />
          </div>
        )}

        {/* Prev ghost */}
        {prev && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: '6%',
              top: '50%',
              transform: `translateY(-50%) translateX(${isDragging && dragDelta > 0 ? Math.min(dragDelta * 0.3, 60) : 0}px)`,
              transition: isDragging ? 'none' : 'transform 0.4s ease',
              opacity: 0.3,
              zIndex: 5,
            }}
          >
            <div style={{ width: 'clamp(160px, 18vw, 260px)', background: 'linear-gradient(145deg, #f8f3ea, #ede8df)', padding: '8px 8px 36px 8px', transform: `rotate(${rotations[(idx - 1) % rotations.length]}deg)` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={prev.url} alt="" className="w-full h-full object-cover object-top" draggable={false} style={{ filter: 'sepia(0.3) brightness(0.7)' }} />
              </div>
            </div>
          </div>
        )}

        {/* Next ghost */}
        {next && (
          <div
            className="absolute pointer-events-none"
            style={{
              right: '6%',
              top: '50%',
              transform: `translateY(-50%) translateX(${isDragging && dragDelta < 0 ? Math.max(dragDelta * 0.3, -60) : 0}px)`,
              transition: isDragging ? 'none' : 'transform 0.4s ease',
              opacity: 0.3,
              zIndex: 5,
            }}
          >
            <div style={{ width: 'clamp(160px, 18vw, 260px)', background: 'linear-gradient(145deg, #f8f3ea, #ede8df)', padding: '8px 8px 36px 8px', transform: `rotate(${rotations[(idx + 1) % rotations.length]}deg)` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src={next.url} alt="" className="w-full h-full object-cover object-top" draggable={false} style={{ filter: 'sepia(0.3) brightness(0.7)' }} />
              </div>
            </div>
          </div>
        )}

        {/* Current polaroid */}
        {curr && (
          <div
            className="relative z-20 cursor-zoom-in"
            style={{
              width: 'clamp(240px, 28vw, 400px)',
              transform: `translateX(${isDragging ? dragDelta * 0.4 : 0}px) rotate(${isDragging ? dragDelta * 0.015 : rotations[idx % rotations.length] * 0.3}deg)`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)',
            }}
            onClick={() => setLightboxImg(curr)}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div
              style={{
                background: 'linear-gradient(145deg, #f8f3ea, #ede8df)',
                padding: '12px 12px 52px 12px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.5)',
                position: 'relative',
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={curr.url}
                  alt={curr.caption}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                  style={{ filter: 'sepia(0.15) contrast(1.06) brightness(0.95)' }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)' }} />
                <div className="absolute top-0 left-0 w-2/5 h-full pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(200,212,0,0.1), transparent)' }} />
                {/* Era badge */}
                <div
                  className="absolute top-2 right-2 px-2 py-0.5"
                  style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(200,212,0,0.3)', fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(200,212,0,0.9)', fontWeight: 900, letterSpacing: '0.1em' }}
                >
                  {curr.eraYears}
                </div>
              </div>
              <div className="pt-3 pb-1 px-1 text-center">
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: '0.9rem', color: '#2e2820', lineHeight: 1.3 }}>
                  {curr.caption}
                </p>
                <p className="mt-1 font-black uppercase tracking-wider" style={{ fontSize: '0.6rem', color: 'rgba(0,0,0,0.3)', fontFamily: 'monospace' }}>
                  {curr.eraLabel}
                </p>
              </div>
              {/* Tape */}
              <div
                className="absolute -top-3.5 left-1/2"
                style={{ width: 52, height: 22, background: 'rgba(200,212,0,0.45)', transform: 'translateX(-50%) rotate(-1.5deg)' }}
              />
            </div>
          </div>
        )}

        {/* Swipe hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none" style={{ opacity: 0.4 }}>
          <i className="ri-arrow-left-line text-white/60 text-xs" />
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
            drag to flip
          </span>
          <i className="ri-arrow-right-line text-white/60 text-xs" />
        </div>
      </div>

      {/* Bottom strip — thumbnail row */}
      <div
        className="flex-shrink-0 flex items-center gap-1 px-4 py-3 overflow-x-auto"
        style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.07)', scrollbarWidth: 'none' }}
      >
        {highlights.map((h, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="flex-shrink-0 relative cursor-pointer"
            style={{
              width: 48,
              height: 32,
              border: i === idx ? '1.5px solid rgba(200,212,0,0.6)' : '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease',
            }}
          >
            <img
              src={h.url}
              alt=""
              className="w-full h-full object-cover object-top"
              style={{ filter: i === idx ? 'none' : 'invert(1) sepia(0.3) hue-rotate(180deg) saturate(0.4) brightness(0.6)', transition: 'filter 0.3s ease' }}
              draggable={false}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-fullscreen flex items-center justify-center p-10 cursor-pointer"
          style={{ background: 'rgba(0,0,0,0.97)' }}
          onClick={() => setLightboxImg(null)}
        >
          <FilmGrain opacity={0.06} />
          <div
            className="relative z-10"
            style={{ maxWidth: 860, width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: 'linear-gradient(145deg, #f8f3ea, #ede8df)', padding: '14px 14px 60px 14px', boxShadow: '0 50px 120px rgba(0,0,0,0.95)' }}>
              <img src={lightboxImg.url} alt={lightboxImg.caption} className="w-full object-contain" style={{ maxHeight: '62vh', filter: 'sepia(0.1) contrast(1.04)' }} />
              <p className="text-center mt-4" style={{ fontFamily: '"Caveat", cursive', fontSize: '1.15rem', color: '#2e2820' }}>{lightboxImg.caption}</p>
            </div>
            <button className="absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center cursor-pointer" style={{ background: '#C8D400', color: '#111' }} onClick={() => setLightboxImg(null)}>
              <i className="ri-close-line text-lg font-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main PhotoAlbum ────────────────────────────────────────────────────────
export interface HighlightPhoto {
  url: string;
  caption: string;
  eraLabel: string;
  eraYears: string;
}

interface EraStatMap {
  [eraId: string]: { stat: string; statLabel: string };
}

const ERA_STATS: EraStatMap = {
  'era-2007-2015': { stat: '50+', statLabel: 'specialists deployed across DACH by 2013' },
  'era-2015-2019': { stat: '500+', statLabel: 'active brand ambassadors by 2019' },
  'era-2019-2022': { stat: '0', statLabel: 'clients lost during the crisis year' },
  'era-2022-2023': { stat: '€2B+', statLabel: 'cumulative retail sales activated' },
  'era-2024': { stat: '130%', statLabel: 'Garmin DACH revenue growth in 2024' },
  'era-2025': { stat: '2,000+', statLabel: 'active specialists — best year ever' },
  'era-2026': { stat: '3+', statLabel: 'new European markets in expansion scope' },
};

export default function PhotoAlbum({ eras, activeEraIndex, onEraChange, showHighlights, onHighlightsClose }: Props) {
  const era = eras[activeEraIndex];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showKeyboardHint, setShowKeyboardHint] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Show keyboard hint on first visit
  useEffect(() => {
    const seen = localStorage.getItem('sonic-reels-hint-seen');
    if (!seen) {
      const t = setTimeout(() => setShowKeyboardHint(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismissHint = useCallback(() => {
    setShowKeyboardHint(false);
    localStorage.setItem('sonic-reels-hint-seen', '1');
  }, []);

  // Reset photo index when era changes
  useEffect(() => {
    setPhotoIndex(0);
    setShowTransition(false);
    setIsAnimating(false);
  }, [activeEraIndex]);

  // Auto-rotate timer
  useEffect(() => {
    if (!autoRotate || showHighlights || lightboxImg || showTransition) {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
      return;
    }
    autoRotateRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        const next = prev + 1;
        if (next >= era.gallery.length) {
          setShowTransition(true);
          return prev;
        }
        return next;
      });
    }, 4500);
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [autoRotate, era.gallery.length, showHighlights, lightboxImg, showTransition, activeEraIndex]);

  const pauseAndResume = useCallback(() => {
    setAutoRotate(false);
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = setTimeout(() => setAutoRotate(true), 8000) as unknown as ReturnType<typeof setInterval>;
  }, []);

  const goToPhoto = useCallback((idx: number, userAction = false) => {
    if (isAnimating) return;
    if (idx < 0) return;
    if (idx >= era.gallery.length) {
      setShowTransition(true);
      return;
    }
    if (userAction) pauseAndResume();
    setIsAnimating(true);
    setPhotoIndex(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, era.gallery.length, pauseAndResume]);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(x);
    setIsDragging(true);
    setDragDelta(0);
  }, []);

  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragDelta(x - dragStartX);
  }, [isDragging, dragStartX]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -60) goToPhoto(photoIndex + 1, true);
    else if (dragDelta > 60) goToPhoto(photoIndex - 1, true);
    setDragDelta(0);
  }, [isDragging, dragDelta, photoIndex, goToPhoto]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToPhoto(photoIndex + 1, true);
      if (e.key === 'ArrowLeft') goToPhoto(photoIndex - 1, true);
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [photoIndex, goToPhoto]);

  // Build highlights from eras prop
  const highlights: HighlightPhoto[] = eras.flatMap((e) =>
    e.gallery
      .filter((_, i) => i === 0 || i === 3)
      .map((g) => ({ url: g.url, caption: g.caption, eraLabel: e.tagline, eraYears: e.years }))
  );

  const rotations = [-4.5, 3.2, -2.1, 4.8, -3.3, 2.7, -1.9, 3.6];
  const vertOffsets = [0, -18, 12, -8, 16, -12, 6, -20];

  const prevImg = era.gallery[photoIndex - 1];
  const currImg = era.gallery[photoIndex];
  const nextImg = era.gallery[photoIndex + 1];

  const totalPhotos = era.gallery.length;
  const globalPhotoIndex = eras.slice(0, activeEraIndex).reduce((acc, e) => acc + e.gallery.length, 0) + photoIndex;
  const totalPhotosAll = eras.reduce((acc, e) => acc + e.gallery.length, 0);

  const eraStat = ERA_STATS[era.id];

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ background: '#111', minHeight: 'calc(100vh - 64px)' }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <FilmGrain opacity={0.05} />

        {/* ── TOP FILM STRIP ── */}
        <div className="relative z-20" style={{ background: '#161616', height: 32 }}>
          <SprocketStrip side="top" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="font-black uppercase tracking-[0.5em]"
              style={{ fontSize: '0.65rem', color: 'rgba(200,212,0,0.35)', fontFamily: 'monospace' }}
            >
              SONIC PROMOTIONS · {era.years} · {era.tagline.toUpperCase()} · ARCHIV
            </span>
          </div>
        </div>

        {/* ── MAIN STAGE ── */}
        <div
          className="relative flex flex-col md:flex-row"
          style={{ minHeight: 'calc(100vh - 200px)' }}
        >
          {/* LEFT SIDEBAR — hidden on mobile, shown on md+ */}
          <div
            className="hidden md:flex flex-shrink-0 flex-col gap-5 py-8 px-6 border-r overflow-y-auto"
            style={{ width: 'clamp(220px, 20vw, 300px)', borderColor: 'rgba(0,0,0,0.1)', background: '#f8f6f1' }}
          >
            {/* Story So Far card */}
            {eraStat && (
              <StorySoFarCard
                stat={eraStat.stat}
                statLabel={eraStat.statLabel}
                tagline={era.tagline}
                years={era.years}
              />
            )}

            {/* Era year + label */}
            <div>
              <div
                className="font-black leading-none select-none mb-3"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  color: 'rgba(200,212,0,0.5)',
                  fontFamily: '"Bebas Neue", Impact, sans-serif',
                  letterSpacing: '-0.03em',
                }}
              >
                {era.years.split('–')[0]}
              </div>
              <div className="h-[2px] w-full mb-3" style={{ background: 'linear-gradient(to right, #C8D400, transparent)' }} />
              <p className="font-black uppercase tracking-[0.3em] mb-1" style={{ fontSize: '0.68rem', color: '#C8D400' }}>
                {era.tagline}
              </p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.45)', lineHeight: 1.6 }}>{era.years}</p>
            </div>

            {/* Milestones */}
            <div className="space-y-3">
              <p className="font-black uppercase tracking-[0.25em] mb-2" style={{ fontSize: '0.55rem', color: 'rgba(0,0,0,0.35)' }}>
                Key Moments
              </p>
              {era.milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-2" style={{ width: 5, height: 5, background: '#C8D400' }} />
                  <p style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.55)', lineHeight: 1.6 }}>{m}</p>
                </div>
              ))}
            </div>

            {/* Frame counter */}
            <div
              className="font-black text-center py-3 px-3 mt-auto"
              style={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                color: '#111',
                border: '2px solid #C8D400',
                background: 'rgba(200,212,0,0.10)',
              }}
            >
              FRAME {String(photoIndex + 1).padStart(2, '0')} / {String(totalPhotos).padStart(2, '0')}
            </div>
          </div>

          {/* MOBILE ERA INFO STRIP — shown only on mobile */}
          <div
            className="md:hidden flex items-center justify-between px-4 py-3 border-b"
            style={{ background: '#f8f6f1', borderColor: 'rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="font-black leading-none"
                style={{ fontSize: '1.8rem', color: 'rgba(200,212,0,0.6)', fontFamily: '"Bebas Neue", Impact, sans-serif' }}
              >
                {era.years.split('–')[0]}
              </span>
              <div>
                <p className="font-black uppercase tracking-wider" style={{ fontSize: '0.55rem', color: '#C8D400' }}>{era.tagline}</p>
                <p style={{ fontSize: '0.55rem', color: 'rgba(0,0,0,0.4)' }}>{era.years}</p>
              </div>
            </div>
            <div
              className="font-black px-2 py-1"
              style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: '#111', border: '1.5px solid #C8D400', background: 'rgba(200,212,0,0.08)' }}
            >
              {String(photoIndex + 1).padStart(2, '0')} / {String(totalPhotos).padStart(2, '0')}
            </div>
          </div>

          {/* CENTER STAGE — polaroid viewer */}
          <div className="flex-1 relative flex flex-col min-w-0">
            {/* Polaroid stage */}
            <div
              className="relative flex-1"
              style={{
                minHeight: 'clamp(300px, 55vw, 700px)',
                background: 'linear-gradient(to bottom, #0e0e0e, #141414)',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
              }}
            >
              {/* Background era image — reflects currently selected photo */}
              {currImg && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src={currImg.url}
                    alt=""
                    className="w-full h-full object-cover object-top"
                    style={{ opacity: 0.15, filter: 'grayscale(1) blur(1px)', transform: 'scale(1.05)' }}
                    draggable={false}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14,14,14,0.6) 0%, transparent 30%, transparent 70%, rgba(14,14,14,0.6) 100%)' }} />
                </div>
              )}

              {/* Prev photo (left ghost) */}
              {prevImg && (
                <div
                  style={{
                    position: 'absolute',
                    left: '8%',
                    top: '50%',
                    transform: `translateY(-50%) translateX(${isDragging && dragDelta > 0 ? Math.min(dragDelta * 0.3, 60) : 0}px)`,
                    transition: isDragging ? 'none' : 'transform 0.4s ease',
                    zIndex: 8,
                    opacity: 0.35,
                    pointerEvents: 'none',
                  }}
                >
                  <Polaroid
                    img={prevImg}
                    rotation={rotations[(photoIndex - 1) % rotations.length]}
                    vertOffset={vertOffsets[(photoIndex - 1) % vertOffsets.length]}
                    isCenter={false}
                    isSide={true}
                    onClick={() => {}}
                    onDragStart={() => {}}
                  />
                </div>
              )}

              {/* Next photo (right ghost) */}
              {nextImg && (
                <div
                  style={{
                    position: 'absolute',
                    right: '8%',
                    top: '50%',
                    transform: `translateY(-50%) translateX(${isDragging && dragDelta < 0 ? Math.max(dragDelta * 0.3, -60) : 0}px)`,
                    transition: isDragging ? 'none' : 'transform 0.4s ease',
                    zIndex: 8,
                    opacity: 0.35,
                    pointerEvents: 'none',
                  }}
                >
                  <Polaroid
                    img={nextImg}
                    rotation={rotations[(photoIndex + 1) % rotations.length]}
                    vertOffset={vertOffsets[(photoIndex + 1) % vertOffsets.length]}
                    isCenter={false}
                    isSide={true}
                    onClick={() => {}}
                    onDragStart={() => {}}
                  />
                </div>
              )}

              {/* Current photo — center */}
              {currImg && (
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translateX(${isDragging ? dragDelta * 0.4 : 0}px) rotate(${isDragging ? dragDelta * 0.02 : 0}deg)`,
                    transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)',
                    zIndex: 20,
                  }}
                >
                  <Polaroid
                    img={currImg}
                    rotation={rotations[photoIndex % rotations.length]}
                    vertOffset={0}
                    isCenter={true}
                    isSide={false}
                    onClick={() => setLightboxImg(currImg)}
                    onDragStart={handleDragStart}
                  />
                </div>
              )}

              {/* ── NAV BUTTONS ── */}
              {/* Prev button */}
              {photoIndex > 0 && (
                <button
                  onClick={() => goToPhoto(photoIndex - 1, true)}
                  className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                  style={{
                    width: 40, height: 40,
                    background: 'rgba(10,10,10,0.75)',
                    border: '1px solid rgba(200,212,0,0.35)',
                    backdropFilter: 'blur(8px)',
                  }}
                  aria-label="Previous photo"
                >
                  <i className="ri-arrow-left-s-line text-white text-xl" />
                </button>
              )}
              {/* Next button */}
              <button
                onClick={() => goToPhoto(photoIndex + 1, true)}
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                style={{
                  width: 40, height: 40,
                  background: photoIndex < era.gallery.length - 1 ? 'rgba(10,10,10,0.75)' : 'rgba(200,212,0,0.8)',
                  border: '1px solid rgba(200,212,0,0.35)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-label="Next photo"
              >
                <i className={`text-xl ${photoIndex < era.gallery.length - 1 ? 'ri-arrow-right-s-line text-white' : 'ri-arrow-right-line text-[#111]'}`} />
              </button>

              {/* Auto-rotate toggle + drag hint */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                <button
                  onClick={() => { setAutoRotate((v) => !v); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 cursor-pointer transition-all duration-200"
                  style={{
                    background: 'rgba(10,10,10,0.75)',
                    border: `1px solid ${autoRotate ? 'rgba(200,212,0,0.6)' : 'rgba(255,255,255,0.15)'}`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <i className={`${autoRotate ? 'ri-pause-line text-[#C8D400]' : 'ri-play-line text-white/50'} text-xs`} />
                  <span style={{ fontSize: '0.65rem', color: autoRotate ? 'rgba(200,212,0,0.8)' : 'rgba(255,255,255,0.3)', fontFamily: 'monospace', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    {autoRotate ? 'Auto' : 'Manual'}
                  </span>
                </button>
                <div className="flex items-center gap-1 pointer-events-none" style={{ opacity: 0.4 }}>
                  <i className="ri-drag-move-line text-white/60 text-xs" />
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                    drag
                  </span>
                </div>
              </div>

              {/* Era transition overlay */}
              {showTransition && (
                <EraTransitionCard
                  era={era}
                  nextEra={eras[activeEraIndex + 1] ?? null}
                  onGoNext={() => {
                    setShowTransition(false);
                    onEraChange(activeEraIndex + 1);
                  }}
                  onStay={() => {
                    setShowTransition(false);
                    setPhotoIndex(0);
                  }}
                />
              )}
            </div>

            {/* ── BOTTOM INFO STRIP ── */}
            <div
              className="border-t"
              style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#f8f6f1' }}
            >
              {/* Film negative contact sheet */}
              <FilmNegativeStrip
                gallery={era.gallery}
                photoIndex={photoIndex}
                onSelect={(idx) => goToPhoto(idx, true)}
              />

              {/* Info row */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4 items-start">
                {/* Pills */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-black uppercase tracking-wider whitespace-nowrap"
                    style={{ fontSize: '0.5rem', background: '#111', color: '#C8D400', letterSpacing: '0.2em' }}
                  >
                    <i className="ri-film-line text-[10px]" />
                    Archive
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-black uppercase tracking-wider whitespace-nowrap"
                    style={{ fontSize: '0.5rem', background: '#C8D400', color: '#111', letterSpacing: '0.2em' }}
                  >
                    {era.years}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 font-black whitespace-nowrap"
                    style={{ fontSize: '0.48rem', background: '#111', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', letterSpacing: '0.1em' }}
                  >
                    FRAME {String(globalPhotoIndex + 1).padStart(3, '0')} / {String(totalPhotosAll).padStart(3, '0')}
                  </span>
                </div>

                {/* Description — hidden on mobile to save space */}
                <div className="hidden md:block flex-1 min-w-0">
                  <p className="leading-relaxed" style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.55)', maxWidth: '55ch' }}>
                    {era.description}
                  </p>
                </div>

                {/* Global progress bar */}
                <div className="w-full md:w-auto md:flex-shrink-0 flex flex-col items-start md:items-end gap-1">
                  <div className="w-full md:w-28 h-1.5 overflow-hidden" style={{ background: 'rgba(0,0,0,0.1)' }}>
                    <div
                      className="h-full transition-all duration-500"
                      style={{ width: `${((globalPhotoIndex + 1) / totalPhotosAll) * 100}%`, background: '#C8D400' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM FILM STRIP ── */}
        <div className="relative z-20" style={{ background: '#161616', height: 32 }}>
          <SprocketStrip side="bottom" />
        </div>

        {/* ── LIGHTBOX ── */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-fullscreen flex items-center justify-center p-10 cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.97)' }}
            onClick={() => setLightboxImg(null)}
          >
            <FilmGrain opacity={0.06} />
            <div
              className="relative z-10"
              style={{ maxWidth: 860, width: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  background: 'linear-gradient(145deg, #f8f3ea, #ede8df)',
                  padding: '14px 14px 60px 14px',
                  boxShadow: '0 50px 120px rgba(0,0,0,0.95)',
                }}
              >
                <img
                  src={lightboxImg.url}
                  alt={lightboxImg.caption}
                  className="w-full object-contain"
                  style={{ maxHeight: '62vh', filter: 'sepia(0.1) contrast(1.04)' }}
                />
                <p className="text-center mt-4" style={{ fontFamily: '"Caveat", cursive', fontSize: '1.15rem', color: '#2e2820' }}>
                  {lightboxImg.caption}
                </p>
              </div>
              <button
                className="absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center cursor-pointer"
                style={{ background: '#C8D400', color: '#111' }}
                onClick={() => setLightboxImg(null)}
              >
                <i className="ri-close-line text-lg font-black" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── KEYBOARD HINT ── */}
      {showKeyboardHint && <KeyboardHintOverlay onDismiss={dismissHint} />}

      {/* ── HIGHLIGHTS VIEWER ── */}
      {showHighlights && (
        <HighlightsViewer
          highlights={highlights}
          onClose={onHighlightsClose}
        />
      )}

      {/* Expose showHighlights trigger via custom event */}
      <div id="sonic-highlights-trigger" data-show={showHighlights ? 'true' : 'false'} className="hidden" />
    </>
  );
}
