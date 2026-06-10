import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_EMAIL } from '@/lib/contact';

const SERVICES = [
  {
    id: 'daten-software',
    number: '01',
    category: 'Daten & Software',
    headline: 'Echtzeit-Intelligenz',
    sub: 'Vollständige Datentransparenz — von der ersten Stunde. Kein Blindflug, keine Silos. Entscheide auf Basis echter Zahlen.',
    cta: 'SRT entdecken',
    ctaLink: '/srt',
    secondaryCta: 'Forecasting ansehen',
    secondaryLink: '/leistungen/forecasting',
    tags: ['SRT', 'Forecasting', 'KPI-Tracking'],
    icon: 'ri-line-chart-line',
    bg: 'https://www.sonic-group.de/wp-content/uploads/2023/06/SRT_OPENER.jpg',
    detail: 'Live-Daten aus 1.350.000+ Einsätzen. GPS-Tracking, Echtzeitreporting, prädiktive Forecasts.',
  },
  {
    id: 'personal-staffing',
    number: '02',
    category: 'Personal & Staffing',
    headline: 'Festangestellte Talente',
    sub: 'Über 2.000 geschulte Markenbotschafter. Sofort einsatzbereit, GPS-getrackt, persönlich gecoacht — deutschlandweit.',
    cta: 'Talentepool erkunden',
    ctaLink: '/leistungen/talentpool',
    secondaryCta: 'Staffing ansehen',
    secondaryLink: '/services/staffing',
    tags: ['Recruiting', 'Field Force', 'GPS-Check-in'],
    icon: 'ri-team-line',
    bg: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
    detail: 'Vollzeit-Promoter, nicht Freelancer. Inhouse geschult, markenlos, sofort deploybar.',
  },
  {
    id: 'pos-video',
    number: '03',
    category: 'POS & Live Video',
    headline: 'Sichtbarkeit am POS',
    sub: 'Physische Präsenz trifft digitale Live-Beratung. Vom Regal bis zum QR-Code — nahtlose Customer Experience.',
    cta: 'POS Full Service',
    ctaLink: '/leistungen/pos-full-service',
    secondaryCta: 'Live Video Promotion',
    secondaryLink: '/leistungen/live-video',
    tags: ['POS-Display', 'Shop-in-Shop', 'Live Video'],
    icon: 'ri-video-line',
    bg: 'https://www.sonic-group.de/wp-content/uploads/2023/06/LVP_NEU.jpg',
    detail: '50.000+ Live Video Calls. QR-Code auf Verpackung → sofortige Kaufberatung.',
  },
  {
    id: 'events-logistik',
    number: '04',
    category: 'Events & Logistik',
    headline: 'Erlebbare Markenpräsenz',
    sub: 'Von der Aktivierungsfläche bis zum Warenlager — aus einer Hand. Roadshows, Messen, Instore-Events, Konfektionierung.',
    cta: 'Events & Messen',
    ctaLink: '/leistungen/events-messen',
    secondaryCta: 'Warehouse & Logistik',
    secondaryLink: '/leistungen/warehouse-logistik',
    tags: ['Roadshows', 'Events', 'Warehouse'],
    icon: 'ri-calendar-event-line',
    bg: 'https://www.sonic-group.de/wp-content/uploads/2023/06/LAGER_OPENER.jpg',
    detail: 'Eigenlogistik. Kein Subunternehmer. Aufbau, Konfektionierung, Distribution — alles inhouse.',
  },
];

const AUTO_INTERVAL = 4500;

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
}

export default function ServiceGrid({ sectionRef }: Props) {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (idx === activeIdx || animating) return;
    setPrevIdx(activeIdx);
    setAnimating(true);
    setActiveIdx(idx);
    setProgress(0);
    setTimeout(() => {
      setPrevIdx(null);
      setAnimating(false);
    }, 520);
  };

  const goNext = () => goTo((activeIdx + 1) % SERVICES.length);
  const goPrev = () => goTo((activeIdx - 1 + SERVICES.length) % SERVICES.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [activeIdx, paused, animating]);

  useEffect(() => {
    setProgress(0);
    if (paused) return;
    const step = 100 / (AUTO_INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(100, p + step));
    }, 50);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [activeIdx, paused]);

  const handleNav = (link: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(link);
  };

  const svc = SERVICES[activeIdx];

  return (
    <section
      id="service-grid"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative bg-white py-14 md:py-18 px-4 md:px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Leistungsspektrum"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-[#C8D400]" />
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#C8D400]">Leistungsspektrum</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight uppercase">
              VIER KATEGORIEN.<br />
              <span className="text-[#1a1a1a]">EIN SYSTEM.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs lg:text-right">
            Jede Leistung einzeln buchbar — oder als integriertes Full-Service-Paket.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-0.5 border-b border-gray-100 mb-0" role="tablist">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={activeIdx === i}
              className="relative flex items-center gap-2 px-4 py-3 text-xs font-black uppercase tracking-widest cursor-pointer whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
              style={{ color: activeIdx === i ? '#1a1a1a' : '#aaa', background: 'transparent', border: 'none' }}
            >
              <span
                className="inline-flex items-center justify-center w-5 h-5 text-[9px] font-black transition-all duration-300 flex-shrink-0"
                style={{
                  background: activeIdx === i ? '#C8D400' : 'transparent',
                  border: activeIdx === i ? 'none' : '1.5px solid #ccc',
                  color: activeIdx === i ? '#1a1a1a' : '#aaa',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="hidden sm:inline">{s.category}</span>
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C8D400] transition-all duration-300"
                style={{ transform: activeIdx === i ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
              />
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 pb-2">
            <button
              onClick={goPrev}
              aria-label="Vorherige Kategorie"
              className="w-7 h-7 flex items-center justify-center border border-gray-200 cursor-pointer transition-all duration-200 hover:border-[#C8D400] hover:text-[#C8D400]"
            >
              <i className="ri-arrow-left-s-line text-sm"></i>
            </button>
            <button
              onClick={goNext}
              aria-label="Nächste Kategorie"
              className="w-7 h-7 flex items-center justify-center border border-gray-200 cursor-pointer transition-all duration-200 hover:border-[#C8D400] hover:text-[#C8D400]"
            >
              <i className="ri-arrow-right-s-line text-sm"></i>
            </button>
          </div>
        </div>

        {/* Progress bar (flush under tabs) */}
        <div className="h-0.5 bg-gray-100 overflow-hidden mb-0">
          <div
            className="h-full bg-[#C8D400] transition-none"
            style={{ width: `${progress}%`, opacity: paused ? 0.4 : 1 }}
          />
        </div>

        {/* ── PICTORIAL CARD AREA ── */}
        <div className="relative overflow-hidden" style={{ height: 'clamp(380px, 55vw, 500px)' }}>
          {SERVICES.map((s, i) => {
            const isActive = i === activeIdx;
            const isPrev = i === prevIdx;
            return (
              <div
                key={s.id}
                className="absolute inset-0 flex"
                role="tabpanel"
                style={{
                  opacity: isActive ? 1 : isPrev ? 0 : 0,
                  transform: isActive ? 'translateX(0)' : isPrev ? 'translateX(-2%)' : 'translateX(4%)',
                  transition: isActive || isPrev ? 'opacity 0.52s ease, transform 0.52s cubic-bezier(0.22,1,0.36,1)' : 'none',
                  zIndex: isActive ? 10 : isPrev ? 9 : 1,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                {/* LEFT — content panel */}
                <div className="relative z-10 bg-white flex flex-col justify-center px-8 md:px-12 py-10" style={{ width: '50%', minWidth: '320px', flexShrink: 0 }}>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8D400]" />

                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/10 border border-[#C8D400]/30 flex-shrink-0"
                    >
                      <i className={`${s.icon} text-xl text-[#C8D400]`}></i>
                    </div>
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#C8D400]">
                      {s.number} — {s.category}
                    </span>
                  </div>

                  <h3
                    className="font-black text-[#1a1a1a] leading-none tracking-tight mb-3"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                  >
                    {s.headline}
                  </h3>

                  {/* Skewed separator line — matches review card style */}
                  <div className="relative h-[2px] mb-4 overflow-visible" style={{ width: '80px' }}>
                    <div className="absolute inset-0 bg-[#C8D400]" style={{ transform: 'skewX(-20deg)' }} />
                  </div>

                  <p className="text-[#555] text-sm leading-relaxed mb-4 max-w-sm">{s.sub}</p>

                  {/* Detail callout */}
                  <p className="text-xs text-[#C8D400] font-black uppercase tracking-wider mb-5">{s.detail}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black px-2.5 py-1 uppercase tracking-wider border border-[#e0e0e0] text-[#888]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleNav(s.ctaLink)}
                      className="flex items-center gap-2 px-6 py-3 font-black text-xs uppercase tracking-widest cursor-pointer whitespace-nowrap group transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                      style={{ background: '#C8D400', color: '#1a1a1a' }}
                    >
                      {s.cta}
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
                    </button>
                    <button
                      onClick={() => handleNav(s.secondaryLink)}
                      className="flex items-center gap-2 px-5 py-3 font-black text-xs uppercase tracking-widest cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-black/5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                      style={{ color: '#1a1a1a', border: '1.5px solid #1a1a1a', background: 'transparent' }}
                    >
                      {s.secondaryCta}
                      <i className="ri-external-link-line transition-transform duration-300 group-hover:translate-x-0.5"></i>
                    </button>
                  </div>
                </div>

                {/* RIGHT — full-bleed image panel */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={s.bg}
                    alt={s.headline}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Left edge blend into white content panel */}
                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                  {/* Dark overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />

                  {/* Ghost number watermark */}
                  <div
                    className="absolute bottom-4 right-6 font-black select-none pointer-events-none leading-none"
                    style={{
                      fontSize: 'clamp(5rem, 10vw, 9rem)',
                      color: 'rgba(200,212,0,0.12)',
                      letterSpacing: '-0.06em',
                    }}
                    aria-hidden="true"
                  >
                    {s.number}
                  </div>

                  {/* Thumbnail strip — other services */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 z-20">
                    {SERVICES.filter((_, j) => j !== i).map((other, j) => (
                      <button
                        key={other.id}
                        onClick={() => goTo(SERVICES.findIndex(x => x.id === other.id))}
                        className="relative overflow-hidden cursor-pointer group transition-all duration-300 flex-1"
                        style={{ height: '52px' }}
                        aria-label={other.category}
                      >
                        <img
                          src={other.bg}
                          alt={other.category}
                          className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-[9px] font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300 px-1 text-center leading-tight">
                            {other.category}
                          </span>
                        </div>
                        {/* Lime top border on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8D400] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Auto indicator */}
        <div className="flex items-center justify-between mt-3 mb-0">
          <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest">
            {paused ? '— Pausiert' : '→ Auto-Switch aktiv'}
          </span>
          <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest">
            {activeIdx + 1} / {SERVICES.length}
          </span>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-6 bg-[#f9faf0] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
          <div>
            <p className="text-[#1a1a1a] font-black text-sm mb-0.5">Noch Fragen zum Leistungsumfang?</p>
            <p className="text-gray-400 text-xs">Wir beraten dich persönlich — kostenlos und unverbindlich.</p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Beratungsgespräch%20buchen`}
            className="flex items-center gap-2 px-6 py-3 font-black text-xs uppercase tracking-widest cursor-pointer whitespace-nowrap hover:scale-105 transition-all duration-300 group flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
            style={{ background: '#C8D400', color: '#1a1a1a' }}
          >
            Beratungsgespräch buchen
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
}