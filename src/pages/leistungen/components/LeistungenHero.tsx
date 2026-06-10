import { useCallback, useEffect, useState } from 'react';

const CYCLING_WORDS = [
  'ROI',
  'RETAIL',
  'POS',
  'EVENTS',
  'STAFFING',
  'VIDEO',
  'DATA',
  'GROWTH',
];

interface Props {
  onScrollToGrid: () => void;
}

export default function LeistungenHero({ onScrollToGrid }: Props) {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const cycleWord = useCallback(() => {
    setWordVisible(false);
    setTimeout(() => {
      setWordIdx((prev) => (prev + 1) % CYCLING_WORDS.length);
      setWordVisible(true);
    }, 320);
  }, []);

  useEffect(() => {
    const id = setInterval(cycleWord, 2200);
    return () => clearInterval(id);
  }, [cycleWord]);

  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background photo */}
      <img
        src="https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png"
        alt="Sonic Group Leistungen"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark veil */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.75) 100%)' }}
        aria-hidden="true"
      />

      {/* Lime ambient pulse */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
        style={{
          width: '700px',
          height: '380px',
          background: 'radial-gradient(ellipse, rgba(200,212,0,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      {/* Decorative horizontal skewed bars — top left */}
      <div className="absolute top-16 left-0 z-20 flex flex-col gap-2 pl-8 pointer-events-none" aria-hidden="true">
        {[80, 120, 50].map((w, i) => (
          <div
            key={i}
            className="h-[3px] bg-[#C8D400]"
            style={{
              width: `${w}px`,
              transform: 'skewX(-20deg)',
              opacity: [0.7, 1, 0.35][i],
            }}
          />
        ))}
      </div>

      {/* Decorative vertical line — right edge accent */}
      <div className="absolute top-0 right-16 bottom-0 z-20 flex items-stretch pointer-events-none" aria-hidden="true">
        <div
          className="w-[2px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(200,212,0,0.4) 30%, rgba(200,212,0,0.6) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 border border-[#C8D400]/35 px-4 py-1.5 mb-7"
          style={{ background: 'rgba(200,212,0,0.1)' }}
        >
          <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse" />
          <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Leistungen</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-[1.0] tracking-tight">
          MANPOWER<br />
          TRIFFT{' '}
          {/* Animated cycling word */}
          <span
            className="text-[#C8D400] inline-block"
            style={{
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.32s ease, transform 0.32s ease',
            }}
          >
            {CYCLING_WORDS[wordIdx]}
          </span>
        </h1>

        {/* Skewed accent bars under headline */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[30, 56, 80, 40, 18].map((w, i) => (
            <div
              key={i}
              className="h-[3px] bg-[#C8D400]"
              style={{
                width: `${w}px`,
                transform: 'skewX(-20deg)',
                opacity: i === 2 ? 1 : i === 1 || i === 3 ? 0.55 : 0.2,
              }}
            />
          ))}
        </div>

        <p className="text-lg md:text-xl text-white/80 mb-3 font-semibold max-w-2xl mx-auto">
          Full Service für deine Marken und Produkte im Retail
        </p>
        <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          Von Daten &amp; Software über Personal &amp; Staffing bis zu POS, Video und Events:{' '}
          Alles aus einer Hand — datenbasiert geplant, live reportet, messbar erfolgreich.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="https://calendly.com/sonic-group/beratungsgespraech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8D400] text-[#111] px-8 py-4 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2"
          >
            <i className="ri-calendar-line text-base"></i>
            Beratungsgespräch buchen
          </a>
          <button
            onClick={onScrollToGrid}
            className="inline-flex items-center gap-2 border-2 border-white/25 text-white px-8 py-4 font-black hover:border-[#C8D400] hover:text-[#C8D400] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2"
          >
            Alle Leistungen entdecken
            <i className="ri-arrow-down-line text-base"></i>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2" style={{ opacity: 0.38 }} aria-hidden="true">
          <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Bottom fade to black */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}
        aria-hidden="true"
      />
    </section>
  );
}