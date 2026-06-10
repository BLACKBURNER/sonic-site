import { useState, useEffect, useRef, useCallback } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const FACES = [
  {
    id: 'tanja',
    name: 'Tanja K.',
    role: 'Recruiting Lead',
    location: 'Krefeld',
    tenure: '6 Jahre',
    quote: '„Bei Sonic durfte ich echte Verantwortung übernehmen — vom ersten Tag an."',
    metric: '98%',
    metricLabel: 'Bewerberzufriedenheit',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
    accent: '#C8D400',
    tag: 'People & Culture',
  },
  {
    id: 'andrew',
    name: 'Andrew M.',
    role: 'Event Manager',
    location: 'International',
    tenure: '14 Jahre',
    quote: '„22 Länder, 200+ Messen — jedes Event ist ein neues Abenteuer."',
    metric: '22',
    metricLabel: 'Länder bereist',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
    accent: '#C8D400',
    tag: 'Events & Logistics',
  },
  {
    id: 'hassibullah',
    name: 'Hassibullah A.',
    role: 'Sales Professional',
    location: 'Bayern',
    tenure: '4 Jahre',
    quote: '„Von null auf Top-Performer — Sonic hat mir den Raum gegeben zu wachsen."',
    metric: '127%',
    metricLabel: 'Zielerreichung',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/POS_NEU.jpg',
    accent: '#C8D400',
    tag: 'Sales & Retail',
  },
  {
    id: 'peter',
    name: 'Peter S.',
    role: 'Regional Lead',
    location: 'NRW',
    tenure: '5 Jahre',
    quote: '„Mein Comeback nach der Krankheit — das Team hat mich nie aufgegeben."',
    metric: '+42%',
    metricLabel: 'über Durchschnitt',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
    accent: '#C8D400',
    tag: 'Leadership',
  },
  {
    id: 'janina',
    name: 'Janina L.',
    role: 'HR Director',
    location: 'Krefeld',
    tenure: '7 Jahre',
    quote: '„Ich habe hier eine Kultur aufgebaut, auf die ich wirklich stolz bin."',
    metric: 'Ø 5,15J.',
    metricLabel: 'Betriebszugehörigkeit',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
    accent: '#C8D400',
    tag: 'HR & Strategy',
  },
];

const AUTO_ADVANCE_MS = 4500;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function SonicFaces() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reveal = useReveal();

  const goTo = useCallback((idx: number) => {
    if (idx === active) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setActive(idx);
      setIsTransitioning(false);
    }, 220);
  }, [active]);

  const advance = useCallback(() => {
    setActive((prev) => {
      const next = (prev + 1) % FACES.length;
      setIsTransitioning(true);
      setProgress(0);
      setTimeout(() => setIsTransitioning(false), 220);
      return next;
    });
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (isPaused) {
      if (progRef.current) clearInterval(progRef.current);
      return;
    }
    setProgress(0);
    progRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          advance();
          return 0;
        }
        return p + (100 / (AUTO_ADVANCE_MS / 50));
      });
    }, 50);
    return () => { if (progRef.current) clearInterval(progRef.current); };
  }, [active, isPaused, advance]);

  const face = FACES[active];

  return (
    <section id="sonic-faces" className="py-20 md:py-32 bg-[#1a1a1a] overflow-hidden relative">
      {/* Background noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />
      {/* Lime glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,212,0,0.06) 0%, transparent 70%)' }}
      />

      <div
        ref={reveal.ref}
        className="max-w-7xl mx-auto px-4 md:px-6"
        style={{
          opacity: reveal.visible ? 1 : 0,
          transform: reveal.visible ? 'translateY(0)' : 'translateY(48px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-12 md:mb-16">
          <SectionBadge text="Sonic Faces" variant="light" className="mb-5" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight mb-4 uppercase">
            Menschen hinter<br />
            <span style={{ color: '#C8D400' }}>der Marke.</span>
          </h2>
          <p className="text-sm text-white/40 max-w-sm mx-auto leading-relaxed">
            Echte Stimmen. Echte Karrieren. Das ist der Sonic Spirit.
          </p>
        </div>

        {/* ── MAIN REEL LAYOUT ── */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-start justify-center">

          {/* ── ACTIVE REEL (center) — polaroid frame ── */}
          <div
            className="relative flex-shrink-0 w-full max-w-[340px] mx-auto lg:mx-0 flex items-center justify-center"
            style={{ minHeight: '600px' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* ── POLAROID FRAME ── */}
            <div
              className="relative flex flex-col w-full"
              onMouseEnter={() => setHoveredPolaroid(true)}
              onMouseLeave={() => setHoveredPolaroid(false)}
              style={{
                background: '#f5f2ec',
                padding: '8px 8px 48px 8px',
                boxShadow: hoveredPolaroid
                  ? '0 32px 80px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.7)'
                  : '0 20px 60px rgba(0,0,0,0.75), 0 4px 16px rgba(0,0,0,0.5)',
                transform: hoveredPolaroid
                  ? 'rotate(0deg) scale(1.02) translateY(-6px)'
                  : 'rotate(-1deg) scale(1)',
                transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'pointer',
              }}
            >
              {/* Photo area — 9:16 */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '9/16', maxHeight: '520px' }}>
                {/* Background image */}
                <img
                  key={face.id}
                  src={face.image}
                  alt={face.name}
                  className="w-full h-full object-cover object-top"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'scale(1.03)' : 'scale(1)',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.85) 100%)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(200,212,0,0.06) 0%, transparent 60%)' }} />
                {/* Lime accent line at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />

                {/* ── TOP UI: Progress bars ── */}
                <div className="absolute top-0 left-0 right-0 z-20 p-3">
                  <div className="flex gap-1 mb-3">
                    {FACES.map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-[2.5px] overflow-hidden cursor-pointer"
                        style={{ background: 'rgba(255,255,255,0.2)' }}
                        onClick={() => goTo(i)}
                      >
                        <div
                          className="h-full transition-none"
                          style={{
                            background: '#C8D400',
                            width: i < active ? '100%' : i === active ? `${progress}%` : '0%',
                            transition: i === active ? 'none' : 'width 0.1s ease',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Top identity bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0" style={{ background: '#C8D400' }}>
                      <i className="ri-user-fill text-[#111] text-xs" />
                    </div>
                    <div>
                      <div className="text-white font-black text-xs leading-none">{face.name}</div>
                      <div className="text-white/55 text-[9px] font-bold mt-0.5">{face.role}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[9px] font-black px-2 py-0.5 uppercase tracking-widest" style={{ background: 'rgba(200,212,0,0.2)', color: '#C8D400', border: '1px solid rgba(200,212,0,0.4)' }}>
                        {face.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── CENTER: Play indicator ── */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div
                    className="w-14 h-14 flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(200,212,0,0.15)',
                      backdropFilter: 'blur(4px)',
                      border: '1.5px solid rgba(200,212,0,0.4)',
                      opacity: isPaused ? 0 : 0.7,
                    }}
                  >
                    <i className="ri-play-fill text-2xl text-white ml-0.5" />
                  </div>
                </div>

                {/* ── PAUSE indicator ── */}
                {isPaused && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-12 h-12 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}>
                      <i className="ri-pause-fill text-xl text-white" />
                    </div>
                  </div>
                )}

                {/* ── BOTTOM: Story content ── */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-20 p-5"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
                    transition: 'opacity 0.22s ease, transform 0.22s ease',
                  }}
                >
                  <p className="text-sm font-semibold text-white/90 leading-relaxed mb-4 italic">{face.quote}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4" style={{ background: 'rgba(200,212,0,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(200,212,0,0.4)' }}>
                    <span className="text-base font-black tabular-nums" style={{ color: '#C8D400' }}>{face.metric}</span>
                    <span className="text-[9px] font-black text-white/55 uppercase tracking-widest">{face.metricLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-white">{face.name}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <i className="ri-map-pin-line text-[9px]" style={{ color: 'rgba(200,212,0,0.7)' }} />
                        <span className="text-[10px] text-white/45 font-bold">{face.location}</span>
                        <span className="text-white/25 text-[10px]">·</span>
                        <i className="ri-time-line text-[9px]" style={{ color: 'rgba(200,212,0,0.7)' }} />
                        <span className="text-[10px] text-white/45 font-bold">{face.tenure}</span>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        className="w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/15 focus-visible:outline-none"
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                        onClick={() => goTo((active - 1 + FACES.length) % FACES.length)}
                        aria-label="Vorherige Person"
                      >
                        <i className="ri-arrow-left-s-line text-white text-sm" />
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#C8D400]/20 focus-visible:outline-none"
                        style={{ background: 'rgba(200,212,0,0.12)', border: '1px solid rgba(200,212,0,0.3)' }}
                        onClick={() => goTo((active + 1) % FACES.length)}
                        aria-label="Nächste Person"
                      >
                        <i className="ri-arrow-right-s-line text-white text-sm" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 0 1.5px rgba(200,212,0,0.5)', opacity: isPaused ? 1 : 0 }}
                />
              </div>

              {/* Polaroid caption strip — paper grain */}
              <div
                className="flex flex-col items-center justify-center pt-3 pb-1 relative overflow-hidden"
                style={{ background: '#f5f2ec' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                    backgroundSize: '120px 120px',
                    opacity: 0.6,
                    mixBlendMode: 'multiply',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(180,160,120,0.04) 3px, rgba(180,160,120,0.04) 4px)',
                    opacity: 0.8,
                  }}
                />
                <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{face.name}</div>
                <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">{face.tag}</div>
              </div>
            </div>
          </div>

          {/* ── THUMBNAIL STACK (right side) — mini polaroid ── */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 w-full lg:w-auto">
            {FACES.map((f, i) => {
              const isActive = active === i;
              return (
                <button
                  key={f.id}
                  onClick={() => goTo(i)}
                  className="flex-shrink-0 relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] transition-all duration-300"
                  style={{
                    width: '80px',
                    background: '#f5f2ec',
                    padding: '4px 4px 22px 4px',
                    borderRadius: 0,
                    border: isActive ? '1.5px solid rgba(200,212,0,0.6)' : '1.5px solid rgba(245,242,236,0.3)',
                    opacity: isActive ? 1 : 0.6,
                    transform: isActive ? 'rotate(0deg) scale(1.04)' : 'rotate(-1.5deg) scale(0.97)',
                    boxShadow: isActive
                      ? '0 8px 24px rgba(0,0,0,0.6)'
                      : '0 4px 12px rgba(0,0,0,0.4)',
                  }}
                  aria-label={`${f.name} — ${f.role}`}
                  aria-pressed={isActive}
                >
                  {/* Mini photo */}
                  <div className="relative overflow-hidden" style={{ height: '90px' }}>
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8D400]" />
                    )}
                    {/* Lime bottom line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px]" style={{ background: isActive ? '#C8D400' : 'rgba(200,212,0,0.3)' }} />
                  </div>
                  {/* Mini caption strip */}
                  <div className="flex flex-col items-center justify-center pt-1.5 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
                        backgroundSize: '80px 80px',
                        opacity: 0.5,
                        mixBlendMode: 'multiply',
                      }}
                    />
                    <div className="relative z-10 text-[8px] font-black text-[#111]/70 leading-none truncate w-full text-center">{f.name.split(' ')[0]}</div>
                    <div className="relative z-10 text-[7px] text-[#111]/40 font-bold truncate w-full text-center mt-0.5">{f.role}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── INFO PANEL (right side desktop) ── */}
          <div
            className="hidden lg:flex flex-col gap-4 max-w-[260px] w-full"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateX(8px)' : 'translateX(0)',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
            }}
          >
            {/* Name block */}
            <div className="pb-5 border-b border-white/8">
              <div
                className="text-[9px] font-black uppercase tracking-[0.2em] mb-2"
                style={{ color: '#C8D400' }}
              >
                {face.tag}
              </div>
              <h3 className="text-2xl font-black text-white leading-tight mb-1">{face.name}</h3>
              <div className="text-sm text-white/45 font-bold">{face.role}</div>
            </div>

            {/* Quote */}
            <div
              className="p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <i className="ri-double-quotes-l text-lg mb-2 block" style={{ color: 'rgba(200,212,0,0.5)' }} />
              <p className="text-sm text-white/65 leading-relaxed italic">{face.quote}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4" style={{ background: 'rgba(200,212,0,0.08)', border: '1px solid rgba(200,212,0,0.15)' }}>
                <div className="text-2xl font-black tabular-nums leading-none mb-1" style={{ color: '#C8D400' }}>{face.metric}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/40">{face.metricLabel}</div>
              </div>
              <div className="p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <i className="ri-time-line text-xs" style={{ color: 'rgba(200,212,0,0.6)' }} />
                  <span className="text-sm font-black text-white">{face.tenure}</span>
                </div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/30">Bei Sonic</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5 px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <i className="ri-map-pin-line text-sm" style={{ color: 'rgba(200,212,0,0.6)' }} />
              <span className="text-xs font-black text-white/50">{face.location}</span>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/sonic-group/tanja-15min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#111]"
              style={{ background: '#C8D400', color: '#111', borderRadius: 0 }}
            >
              <i className="ri-user-add-line" />
              Deine Geschichte beginnen
            </a>
          </div>
        </div>

        {/* ── MOBILE CTA ── */}
        <div className="lg:hidden mt-6 text-center">
          <a
            href="https://calendly.com/sonic-group/tanja-15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-4 px-8 font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#111]"
            style={{ background: '#C8D400', color: '#111', borderRadius: 0 }}
          >
            <i className="ri-user-add-line" />
            Deine Geschichte beginnen
          </a>
        </div>
      </div>
    </section>
  );
}
