import { useState, useRef, useEffect } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const EVENTS = [
  {
    id: 'summit', ep: '01',
    label: 'Team Summit',
    icon: 'ri-building-line',
    tag: 'Jährlich',
    title: 'Sonic Team Summit',
    subtitle: 'Unser größtes Event des Jahres',
    highlight: '500+ Teilnehmer',
    desc: 'Drei Tage Strategie, Zusammenhalt und Feier an exklusiven Locations. Das ganze Sonic Team an einem Ort — vernetzt, motiviert, ausgezeichnet.',
    image: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png',
  },
  {
    id: 'celebrations', ep: '02',
    label: 'Quarterly Wins',
    icon: 'ri-trophy-line',
    tag: 'Quartalsweise',
    title: 'Quartals-Highlights',
    subtitle: 'Erfolge feiern, Talente ehren',
    highlight: 'Top Performer',
    desc: 'Wir feiern gemeinsam Ergebnisse, erkennen Leistungen an und stärken das Gemeinschaftsgefühl im Team. Jeder Erfolg gehört allen.',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/7-1.jpg',
  },
  {
    id: 'training', ep: '03',
    label: 'Training Days',
    icon: 'ri-lightbulb-line',
    tag: 'Monatlich',
    title: 'Training & Entwicklung',
    subtitle: 'Expert-geführte Workshops',
    highlight: 'Expertenwissen',
    desc: 'Praxisnahe Trainings mit Branchen-Experten, Produktdemos und Skills-Aufbau. Lernen ist bei uns keine Pflicht — es ist Kultur.',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/12.jpg',
  },
  {
    id: 'outing', ep: '04',
    label: 'Team Ausflüge',
    icon: 'ri-gamepad-line',
    tag: 'Regelmäßig',
    title: 'Team Ausflüge & Events',
    subtitle: 'Spaß, der verbindet',
    highlight: 'Pure Energie',
    desc: 'Von Go-Kart bis Escape Room — wir schaffen echte Verbindungen außerhalb des Büros. Gemeinsam arbeiten, gemeinsam lachen.',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
  },
  {
    id: 'holiday', ep: '05',
    label: 'Firmenfeiern',
    icon: 'ri-gift-line',
    tag: 'Tradition',
    title: 'Firmen- & Jahresfeiern',
    subtitle: 'Unvergessliche Nächte',
    highlight: 'Seit 2007',
    desc: 'Jahresabschluss-Events, die die gesamte Sonic Family zusammenbringen. Eine Tradition, die unsere Kultur definiert.',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
  },
  {
    id: 'bts', ep: '06',
    label: 'Behind the Scenes',
    icon: 'ri-camera-line',
    tag: 'Täglich',
    title: 'Alltag bei Sonic',
    subtitle: 'Die echte Kultur',
    highlight: 'Täglich gelebt',
    desc: 'Kaffee-Pausen, Mittags-Runden, spontane Erfolgsmomente. Die echte Unternehmenskultur passiert nicht auf Bühnen — sie passiert jeden Tag.',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
  },
];

function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

export default function SonicTeamEvents() {
  const [activeId, setActiveId] = useState('summit');
  const [transitioning, setTransitioning] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);
  const headerReveal = useReveal();
  const bodyReveal = useReveal(0.03);

  const current = EVENTS.find(e => e.id === activeId) ?? EVENTS[0];

  const switchTo = (id: string) => {
    if (id === activeId) return;
    setTransitioning(true);
    setTimeout(() => { setActiveId(id); setTransitioning(false); }, 220);
  };

  return (
    <section id="sonic-events" className="relative overflow-hidden" style={{ background: '#111' }}>
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(200,212,0,0.3) 25%,rgba(200,212,0,0.3) 75%,transparent 100%)' }} />

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(200,212,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(200,212,0,0.025) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* ── HEADER ── */}
      <div
        ref={headerReveal.ref}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12 relative z-10"
        style={{ opacity: headerReveal.vis ? 1 : 0, transform: headerReveal.vis ? 'none' : 'translateY(32px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#C8D400]" />
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#C8D400]/70">Sonic Team Events</span>
            </div>
            <SectionBadge text="Wir arbeiten hart. Wir feiern noch mehr." variant="light" className="mb-5" />
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight uppercase">
              Sonic<br /><span className="text-[#C8D400]">Team</span>
            </h2>
          </div>
          <p className="text-sm font-light leading-relaxed max-w-xs text-white/35">
            Echte Verbindungen jenseits des Büros. Wir schaffen Momente, die verbinden.
          </p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        ref={bodyReveal.ref}
        className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 relative z-10"
        style={{ opacity: bodyReveal.vis ? 1 : 0, transform: bodyReveal.vis ? 'none' : 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
      >
        {/* Main showcase */}
        <div
          className="relative cursor-pointer"
          style={{ overflow: 'visible' }}
          onMouseEnter={() => { setHovered(true); setHoveredPolaroid(true); }}
          onMouseLeave={() => { setHovered(false); setHoveredPolaroid(false); }}
        >
          {/* ── POLAROID FRAME ── */}
          <div
            className="relative flex flex-col w-full"
            style={{
              background: '#f5f2ec',
              padding: '8px 8px 52px 8px',
              boxShadow: hoveredPolaroid
                ? '0 28px 72px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35)'
                : '0 16px 48px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.25)',
              transform: hoveredPolaroid
                ? 'rotate(0deg) translateY(-5px)'
                : 'rotate(-0.4deg)',
              transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Photo area */}
            <div
              className="relative overflow-hidden group"
              style={{ border: '0.5px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative w-full" style={{ height: 'clamp(320px, 42vw, 520px)' }}>
                <img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-top"
                  style={{
                    transform: hovered ? 'scale(1.04)' : 'scale(1)',
                    opacity: transitioning ? 0 : 1,
                    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.22s ease',
                  }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(17,17,17,0.9) 0%,rgba(17,17,17,0.35) 45%,rgba(17,17,17,0.2) 100%)' }} />

                {/* Lime border on hover */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 0 1.5px #C8D400', opacity: hovered ? 1 : 0 }}
                />
                {/* Lime accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />

                {/* Top-left highlight chip */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: 'rgba(200,212,0,0.15)', border: '0.5px solid rgba(200,212,0,0.4)', backdropFilter: 'blur(8px)' }}>
                    <div className="w-1.5 h-1.5 animate-pulse bg-[#C8D400]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.1em] text-[#C8D400]">{current.highlight}</span>
                  </div>
                </div>
                {/* EP badge top-right */}
                <div className="absolute top-5 right-5 z-20 px-2.5 py-1.5 bg-[#C8D400]">
                  <span className="text-[9px] font-black tracking-[0.1em] text-[#111]">EP. {current.ep}</span>
                </div>

                {/* Bottom content */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8"
                  style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(6px)' : 'none', transition: 'opacity 0.22s ease, transform 0.22s ease' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-[#C8D400]">
                      <i className={`${current.icon} text-base text-[#111]`} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.1em] text-[#C8D400]">{current.subtitle}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}>{current.tag}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight mb-2.5 uppercase">{current.title}</h3>
                  <p className="text-sm font-light leading-relaxed max-w-2xl text-white/60">{current.desc}</p>
                </div>
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
              <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{current.title}</div>
              <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">Sonic Team Events · {current.tag}</div>
            </div>
          </div>
        </div>

        {/* ── THUMBNAIL STRIP (tab strip) ── */}
        <div className="grid gap-[3px] mt-[3px]" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {EVENTS.map((ev) => (
            <button
              key={ev.id}
              onClick={() => switchTo(ev.id)}
              className="relative overflow-hidden cursor-pointer group transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
              style={{
                background: activeId === ev.id ? 'rgba(200,212,0,0.1)' : '#1a1a1a',
                border: activeId === ev.id ? '0.5px solid rgba(200,212,0,0.4)' : '0.5px solid rgba(255,255,255,0.06)',
                borderRadius: 0,
                padding: '14px 16px',
              }}
            >
              {/* Active indicator */}
              {activeId === ev.id && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8D400]" />}
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{ background: activeId === ev.id ? '#C8D400' : 'rgba(255,255,255,0.06)', borderRadius: 0 }}
                >
                  <i className={`${ev.icon} text-[11px]`} style={{ color: activeId === ev.id ? '#111' : 'rgba(255,255,255,0.35)' }} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.1em]" style={{ color: activeId === ev.id ? '#C8D400' : 'rgba(255,255,255,0.25)' }}>EP. {ev.ep}</span>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.06em] text-left leading-snug" style={{ color: activeId === ev.id ? '#fff' : 'rgba(255,255,255,0.4)' }}>{ev.label}</div>
            </button>
          ))}
        </div>

        {/* ── BOTTOM STATS BAR ── */}
        <div className="grid gap-[3px] mt-[3px]" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {[
            { icon: 'ri-calendar-check-line', val: '50+', label: 'Events pro Jahr' },
            { icon: 'ri-map-pin-line', val: 'DACH', label: 'Exklusive Locations' },
            { icon: 'ri-emotion-happy-line', val: '98%', label: 'Zufriedenheitsrate' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-5 group transition-colors duration-200"
              style={{ background: '#1a1a1a', border: '0.5px solid rgba(255,255,255,0.06)' }}
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[rgba(200,212,0,0.15)]" style={{ background: 'rgba(200,212,0,0.08)', border: '0.5px solid rgba(200,212,0,0.15)' }}>
                <i className={`${item.icon} text-lg text-[#C8D400]`} />
              </div>
              <div>
                <div className="text-3xl font-black text-[#C8D400] leading-none tracking-tight">{item.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.08em] mt-0.5 text-white/30">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
