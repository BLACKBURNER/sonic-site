import { useState, useRef, useEffect } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

type PathId = 'sales' | 'staff';

const paths = {
  sales: {
    id: 'sales' as PathId,
    badge: 'Internes Team',
    icon: 'ri-building-4-line',
    title: 'Sonic Sales Family',
    headline: 'Bürobasierte Karriere in Krefeld',
    tagline: 'Klare Aufstiegspfade, Mentoring, Hybridarbeit und eine echte Community.',
    color: '#C8D400',
    image: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png',
    stats: [
      { value: 'Ø 5,15 J.', label: 'Zugehörigkeit' },
      { value: '98 %', label: 'Zufriedenheit' },
      { value: 'Krefeld', label: 'Campus' },
      { value: 'Hybrid', label: 'Modell' },
    ],
    perks: ['Karrierepfade', 'Hybrides Arbeiten', 'Quartalsboni', 'Mentoring', 'Training', 'Gemeinschaft'],
    steps: [
      { step: '01', title: 'Einstieg', desc: 'Onboarding & erste Projekte' },
      { step: '02', title: 'Wachstum', desc: 'Eigenes Portfolio, Ziele übertreffen' },
      { step: '03', title: 'Leadership', desc: 'Teamverantwortung, Coaching' },
      { step: '04', title: 'Excellence', desc: 'Strategische Projekte, Management' },
    ],
    roles: ['Sales Representative', 'Account Manager', 'Team Lead', 'Business Development'],
    cta: 'Sonic Sales entdecken',
    email: 'karriere@sonic-group.de',
  },
  staff: {
    id: 'staff' as PathId,
    badge: 'Field Team',
    icon: 'ri-store-2-line',
    title: 'Sonic Staff Family',
    headline: 'Flexibler Einsatz DACH-weit',
    tagline: '150+ Premium-Brands, Top-Incentives und maximale Flexibilität.',
    color: '#C8D400',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/POS_NEU.jpg',
    stats: [
      { value: '150+', label: 'Brands' },
      { value: '20.000+', label: 'Promoter:innen' },
      { value: 'DACH', label: 'Gebiet' },
      { value: 'Flex', label: 'Planung' },
    ],
    perks: ['Flexible Zeiten', 'Incentive-Boni', 'Brand-Schulungen', 'DACH-weit', 'App-basiert', 'Top-Brands'],
    steps: [
      { step: '01', title: 'Registrierung', desc: 'SRT-App, Profil & Verfügbarkeiten' },
      { step: '02', title: 'Erste Einsätze', desc: 'Schulungen & erste Aufträge' },
      { step: '03', title: 'Top-Promoter', desc: 'Mehr Marken, bessere Konditionen' },
      { step: '04', title: 'Spezialist', desc: 'Exklusive Partnerschaften & Trainings' },
    ],
    roles: ['Brand Promoter', 'Produktdemonstrateur', 'Messe-Specialist', 'Retail Berater'],
    cta: 'Sonic Staff entdecken',
    email: 'staffjobs@sonic-group.de',
  },
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function KarrierepfadeSection() {
  const [active, setActive] = useState<PathId>('sales');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reveal = useReveal();
  const path = paths[active];

  const switchPath = (id: PathId) => {
    if (id === active) return;
    setIsTransitioning(true);
    setTimeout(() => { setActive(id); setIsTransitioning(false); }, 250);
  };

  const scrollCards = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 240 : -240, behavior: 'smooth' });
    }
  };

  return (
    <section id="karrierepfade" className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Top edge gradient */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,212,0,0.35), transparent)' }} />

      <div
        ref={reveal.ref}
        className="max-w-7xl mx-auto px-4 md:px-6"
        style={{
          opacity: reveal.visible ? 1 : 0,
          transform: reveal.visible ? 'translateY(0)' : 'translateY(48px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* ── SHARED GRID WRAPPER — header + panel share same column widths ── */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-0" style={{ overflow: 'visible' }}>

          {/* ── HEADER LEFT ── */}
          <div className="pb-12 pr-0 lg:pr-10">
            <SectionBadge text="Karrierepfade" variant="light" className="mb-4" />
            <h2 className="text-4xl md:text-5xl font-black text-sonic-dark leading-tight tracking-tight">
              ZWEI WEGE.<br />
              <span className="text-[#C8D400]">EIN ZIEL.</span>
            </h2>
            <p className="text-sm text-gray-400 mt-3 max-w-sm leading-relaxed">
              Ob intern am Campus oder flexibel im Außendienst — bei Sonic gibt es einen Weg für dich.
            </p>
          </div>

          {/* ── HEADER RIGHT: Toggle — aligns with polaroid column ── */}
          <div className="pb-12 flex items-end justify-start lg:justify-start">
            <div
                className="flex border border-gray-200 overflow-hidden w-full"
                style={{ borderRadius: 0 }}
                role="tablist"
                aria-label="Karrierepfad-Auswahl"
              >
                {(['sales', 'staff'] as PathId[]).map((id) => (
                  <button
                    key={id}
                    onClick={() => switchPath(id)}
                    role="tab"
                    aria-selected={active === id}
                    aria-controls={`path-panel-${id}`}
                    id={`path-tab-${id}`}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-4 text-[10px] font-black uppercase tracking-[0.06em] transition-all duration-300 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] ${
                      active === id ? 'bg-[#C8D400] text-[#111]' : 'bg-transparent text-gray-400 hover:text-[#111]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    <i className={`${paths[id].icon} text-base`} />
                    {paths[id].title}
                  </button>
                ))}
              </div>
          </div>

          {/* ── MAIN PANEL — spans both columns ── */}
          <div
            className="lg:col-span-2"
            role="tabpanel"
            id={`path-panel-${path.id}`}
            aria-labelledby={`path-tab-${path.id}`}
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            <div className="grid lg:grid-cols-[1fr_400px] gap-0 border border-gray-200" style={{ overflow: 'visible' }}>

              {/* LEFT: Steps column */}
              <div className="bg-white p-8 md:p-10">
                {/* Path tagline */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <span className="inline-block bg-[#C8D400] text-[#111] text-xs font-black px-3 py-1 uppercase tracking-widest mb-3">
                    {path.badge}
                  </span>
                  <h3 className="text-2xl font-black text-sonic-dark mb-2 leading-tight tracking-tight">{path.headline}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{path.tagline}</p>
                </div>

                {/* Steps — vertical timeline */}
                <div className="space-y-0 mb-8">
                  {path.steps.map((step, i) => {
                    const isHov = hoveredStep === i;
                    return (
                      <div
                        key={i}
                        className="flex gap-4 group cursor-default relative"
                        onMouseEnter={() => setHoveredStep(i)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        {/* Timeline line */}
                        {i < path.steps.length - 1 && (
                          <div
                            className="absolute left-5 top-10 w-px transition-all duration-400"
                            style={{ height: 'calc(100% - 0px)', background: isHov ? 'rgba(200,212,0,0.5)' : 'rgba(255,255,255,0.1)' }}
                          />
                        )}
                        {/* Step circle */}
                        <div
                          className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 z-10"
                          style={{
                            background: isHov ? '#C8D400' : '#1a1a1a',
                            border: `2px solid ${isHov ? '#C8D400' : 'rgba(255,255,255,0.12)'}`,
                          }}
                        >
                          <span
                            className="text-[10px] font-black tabular-nums transition-colors duration-300"
                            style={{ color: isHov ? '#111' : 'rgba(255,255,255,0.4)' }}
                          >
                            {step.step}
                          </span>
                        </div>
                        {/* Text */}
                        <div className="flex-1 py-2 pb-6">
                          <h4
                            className="text-sm font-black uppercase tracking-wide transition-colors duration-300 mb-0.5"
                            style={{ color: isHov ? '#fff' : 'rgba(255,255,255,0.5)' }}
                          >
                            {step.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Roles */}
                <div className="mb-8">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Rollen in diesem Pfad</div>
                  <div className="flex flex-wrap gap-2">
                    {path.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 text-xs font-black uppercase tracking-wide transition-all duration-200 hover:bg-[#C8D400] hover:text-[#111] cursor-default"
                        style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Perks */}
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Benefits</div>
                  <div className="flex flex-wrap gap-2">
                    {path.perks.map((perk) => (
                      <span
                        key={perk}
                        className="px-3 py-1 text-xs font-black uppercase tracking-wide"
                        style={{ background: 'rgba(200,212,0,0.1)', color: '#C8D400', border: '1px solid rgba(200,212,0,0.25)' }}
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Image with glassmorphism stat cards */}
              <div
                className="relative flex items-stretch"
                style={{ overflow: 'visible' }}
                onMouseEnter={() => setHoveredPolaroid(true)}
                onMouseLeave={() => setHoveredPolaroid(false)}
              >
                {/* ── POLAROID FRAME ── */}
                <div
                  className="relative w-full flex flex-col"
                  style={{
                    background: '#f5f2ec',
                    padding: '8px 8px 52px 8px',
                    boxShadow: hoveredPolaroid
                      ? '0 24px 64px rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.1)'
                      : '0 10px 36px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)',
                    transform: hoveredPolaroid
                      ? 'translateY(-4px)'
                      : 'translateY(0)',
                    transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  {/* Photo area */}
                  <div className="relative overflow-hidden flex-1" style={{ minHeight: '420px' }}>
                    <img
                      src={path.image}
                      alt={`${path.title} — ${path.headline}`}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700"
                      style={{ transform: hoveredPolaroid ? 'scale(1.03)' : 'scale(1)' }}
                    />
                    {/* Dark gradient */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)' }} />
                    {/* Lime accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />

                    {/* Glassmorphism stat cards */}
                    <div
                      ref={scrollRef}
                      className="absolute bottom-0 left-0 right-0 flex gap-0 overflow-x-auto"
                      style={{ scrollbarWidth: 'none' }}
                    >
                      {path.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="flex-1 min-w-[90px] px-3 py-4 text-center border-r border-gray-200 last:border-r-0 transition-all duration-200 hover:bg-white/10"
                          style={{ background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(12px)' }}
                        >
                          <div className="text-lg font-black text-[#C8D400] tabular-nums leading-none mb-1">{stat.value}</div>
                          <div className="text-[9px] text-gray-500 font-black uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Floating path badge */}
                    <div className="absolute top-5 left-5">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5"
                        style={{ background: 'rgba(200,212,0,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(200,212,0,0.4)' }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-[#C8D400] uppercase tracking-widest">{path.badge}</span>
                      </div>
                    </div>

                    {/* Scroll hint arrows */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between pointer-events-none">
                      <button
                        className="w-7 h-7 flex items-center justify-center pointer-events-auto cursor-pointer focus-visible:outline-none"
                        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                        onClick={() => scrollCards('left')}
                        aria-label="Scroll left"
                      >
                        <i className="ri-arrow-left-s-line text-white text-base" />
                      </button>
                      <button
                        className="w-7 h-7 flex items-center justify-center pointer-events-auto cursor-pointer focus-visible:outline-none"
                        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                        onClick={() => scrollCards('right')}
                        aria-label="Scroll right"
                      >
                        <i className="ri-arrow-right-s-line text-white text-base" />
                      </button>
                    </div>
                  </div>

                  {/* Polaroid caption strip — paper grain */}
                  <div className="flex flex-col items-center justify-center pt-3 pb-1 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                        backgroundSize: '120px 120px',
                        opacity: 0.6,
                        mixBlendMode: 'multiply',
                      }}
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(180,160,120,0.04) 3px, rgba(180,160,120,0.04) 4px)', opacity: 0.8 }} />
                    <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{path.title}</div>
                    <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">{path.headline}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CTA STRIP ── */}
            <div className="flex flex-col sm:flex-row gap-0 mt-0">
              <a
                href={`mailto:${path.email}?subject=Initiativbewerbung ${path.title}`}
                className="flex-1 flex items-center justify-center gap-3 py-4 font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-[#C8D400] hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                style={{ background: '#1a1a1a', color: 'white', borderRadius: 0 }}
              >
                <i className="ri-send-plane-line" />
                Initiativbewerbung — {path.title}
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('stellenangebote');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex-shrink-0 flex items-center justify-center gap-2 px-8 py-4 font-black text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#111] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                style={{ background: '#C8D400', color: '#111', borderRadius: 0 }}
              >
                Alle Stellen ansehen
                <i className="ri-arrow-right-line" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
