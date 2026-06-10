import { useEffect, useRef } from 'react';

interface Era {
  id: string;
  label: string;
}

interface Props {
  eras: Era[];
  activeEra: string;
  activeIndex: number;
  totalEras: number;
  onEraClick: (id: string) => void;
  onHighlightsClick: () => void;
}

export default function EraNav({ eras, activeEra, activeIndex, totalEras, onEraClick, onHighlightsClick }: Props) {
  const activeRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeRef.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const btn = activeRef.current;
    const scrollTarget = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
  }, [activeEra]);

  const progressPct = totalEras > 1 ? (activeIndex / (totalEras - 1)) * 100 : 0;

  return (
    <div
      className="sticky top-16 z-40"
      style={{
        background: '#111111',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* ── Timeline scrubber ── */}
      <div className="relative w-full" style={{ height: 3, background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="absolute top-0 left-0 h-full transition-all duration-500 ease-out"
          style={{
            width: `${progressPct}%`,
            background: 'linear-gradient(to right, rgba(200,212,0,0.5), #C8D400)',
          }}
        />
        {eras.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-px"
            style={{
              left: `${(i / (totalEras - 1)) * 100}%`,
              background: i <= activeIndex ? 'rgba(200,212,0,0.6)' : 'rgba(255,255,255,0.15)',
              transform: 'translateX(-50%)',
            }}
          />
        ))}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500"
          style={{
            left: `${progressPct}%`,
            width: 10,
            height: 10,
            background: '#C8D400',
            boxShadow: '0 0 8px rgba(200,212,0,0.6)',
          }}
        />
      </div>

      {/* ── Nav bar — scrollable era tabs ── */}
      <div className="w-full px-2 md:px-4">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-0 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', justifyContent: 'flex-start' }}
        >
          {/* Era buttons */}
          <div className="flex items-stretch flex-shrink-0 mx-auto">
            {eras.map((era, i) => {
              const isActive = activeEra === era.id;
              const isPast = i < activeIndex;
              return (
                <button
                  key={era.id}
                  ref={isActive ? activeRef : null}
                  onClick={() => onEraClick(era.id)}
                  className="relative flex items-center gap-1.5 px-3 md:px-4 py-3 md:py-3.5 flex-shrink-0 cursor-pointer transition-all duration-300 group"
                  style={{
                    background: isActive ? 'rgba(200,212,0,0.07)' : 'transparent',
                    border: 'none',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Frame number */}
                  <span
                    className="font-black"
                    style={{
                      fontSize: '0.5rem',
                      color: isActive ? 'rgba(200,212,0,0.5)' : isPast ? 'rgba(200,212,0,0.25)' : 'rgba(255,255,255,0.12)',
                      fontFamily: 'monospace',
                      transition: 'color 0.3s',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {isPast && !isActive && (
                    <i className="ri-check-line text-[#C8D400]/40" style={{ fontSize: '0.6rem' }} />
                  )}

                  <span
                    className="font-black uppercase whitespace-nowrap"
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: isActive ? '#C8D400' : 'rgba(255,255,255,0.3)',
                      transition: 'color 0.3s',
                    }}
                  >
                    {era.label}
                  </span>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-30 transition-opacity duration-200" style={{ background: '#C8D400' }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Separator */}
          <div className="w-px h-6 flex-shrink-0 mx-2" style={{ background: 'rgba(255,255,255,0.1)' }} />

          {/* Highlights tab */}
          <button
            onClick={onHighlightsClick}
            className="relative flex items-center gap-2 px-5 py-3.5 flex-shrink-0 cursor-pointer transition-all duration-300 group"
            style={{
              background: 'transparent',
              border: 'none',
            }}
          >
            <i className="ri-star-line" style={{ fontSize: '0.75rem', color: 'rgba(200,212,0,0.6)', transition: 'color 0.3s' }} />
            <span
              className="font-black uppercase whitespace-nowrap"
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: 'rgba(200,212,0,0.6)',
                transition: 'color 0.3s',
              }}
            >
              Highlights
            </span>
            {/* Hover bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-50 transition-opacity duration-200" style={{ background: '#C8D400' }} />
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(200,212,0,0.04)' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
