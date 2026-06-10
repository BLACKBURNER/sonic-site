import { useState, useRef, useEffect, useCallback } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const EXECUTIVES = [
  {
    id: 'jo',
    name: 'Jo',
    title: 'Gründer & Geschäftsführer',
    tenure: 'Seit 2007',
    tag: 'CEO & Founder',
    eyebrow: 'Vision. Verantwortung. Wachstum.',
    pullQuote: '„Wir sind eine Agentur, die nicht verwaltet, sondern gestaltet. Das war 2007 unser Versprechen — und daran hat sich nichts geändert."',
    bio: 'Jo gründete Sonic 2007 mit einer klaren Überzeugung: dass Marken nicht durch Lautstärke, sondern durch Präzision gewinnen. Unter seiner Führung wurde Sonic zu einem der führenden Promotions- und Sales-Partner im DACH-Raum — mit über €2B in beeinflussten Umsätzen.',
    qa: [
      { q: 'Was treibt Sonic nach 18 Jahren noch an?', a: 'Die Überzeugung, dass jede Marke eine Chance verdient, am Point of Sale wirklich erlebt zu werden. Das ist unser täglicher Antrieb.' },
      { q: 'Wie hat sich die Branche verändert?', a: 'Schneller, digitaler, komplexer — aber das Herzstück bleibt dasselbe: der Mensch, der ein Produkt in die Hand nimmt und sich entscheidet.' },
      { q: 'Was ist Sonics strategische Richtung für die nächsten Jahre?', a: 'Wir investieren massiv in Technologie und Kreation. SRT, Live Video, CGI — das sind keine Trend-Features, sondern strukturelle Vorteile.' },
    ],
    stats: [{ val: '18+', label: 'Jahre' }, { val: '€2B+', label: 'Influenced Sales' }],
    linkedin: 'https://www.linkedin.com/company/sonic-group-gmbh',
    image: 'https://readdy.ai/api/search-image?query=professional%20male%20CEO%20founder%20confident%20authoritative%20strong%20presence%20modern%20executive%20portrait%20dark%20minimalist%20background%20dramatic%20lighting%20professional%20suit%20editorial%20photography%20premium%20quality%20sharp%20focus%20leadership&width=700&height=900&seq=mgmt-jo-wilken&orientation=portrait',
    imageBg: 'linear-gradient(160deg,#101410,#090c08)',
  },
  {
    id: 'bjorn',
    name: 'Björn',
    title: 'Geschäftsführer Operations',
    tenure: 'Seit 2010',
    tag: 'Managing Director',
    eyebrow: 'Prozess. Präzision. Performance.',
    pullQuote: '„Exzellenz passiert nicht zufällig. Sie ist das Ergebnis von Systemen, die für Menschen gebaut werden."',
    bio: 'Björn verantwortet die operative Exzellenz des Unternehmens — von Prozessoptimierung bis zur DACH-weiten Koordination. Seine Arbeit hält das System am Laufen, das 20.000+ Promoter:innen täglich trägt.',
    qa: [
      { q: 'Was ist das Rückgrat von Sonics operativer Stärke?', a: 'Das SRT — unser inhouse entwickeltes Reporting-Tool. Es verbindet Planung, Einsatz und Messung in einer Plattform. Keine Blackbox.' },
      { q: 'Wie managed man 150+ Brands gleichzeitig?', a: 'Klare Strukturen, klare Verantwortlichkeiten, und ein Team, das wirklich eigene Entscheidungen trifft. Mikro-Management skaliert nicht.' },
      { q: 'Was macht einen guten Partner aus?', a: 'Verlässlichkeit über Phasen hinweg. Nicht nur wenn alles läuft, sondern besonders wenn es schwierig wird.' },
    ],
    stats: [{ val: '150+', label: 'Brands' }, { val: '20K+', label: 'Netzwerk' }],
    linkedin: 'https://www.linkedin.com/company/sonic-group-gmbh',
    image: 'https://readdy.ai/api/search-image?query=professional%20man%20executive%20operations%20director%20smart%20poised%20modern%20corporate%20environment%20premium%20editorial%20portrait%20photography%20side%20lighting%20dark%20sophisticated%20office%20background%20sharp%20detail%20business%20professional%20confident&width=700&height=900&seq=mgmt-bjorn&orientation=portrait',
    imageBg: 'linear-gradient(160deg,#0f1018,#08090f)',
  },
  {
    id: 'lucas',
    name: 'Lucas',
    title: 'Direktor Kreation & Innovation',
    tenure: 'Seit 2014',
    tag: 'Creative Director',
    eyebrow: 'Kreation. Kontext. Konversion.',
    pullQuote: '„Guter Content erklärt nicht — er überzeugt. Das ist der Unterschied zwischen Aufmerksamkeit und Wirkung."',
    bio: 'Lucas leitet die Kreationseinheit von Sonic und hat in 10 Jahren eine vollständige Inhouse-Kreation aufgebaut — von CGI und Live Video bis zum Messebau. Unter ihm entstanden über 500 Kampagnen für Brands wie Philips, Canon, Garmin und Groupe SEB.',
    qa: [
      { q: 'Was unterscheidet Sonics Kreation von einer klassischen Werbeagentur?', a: 'Wir denken vom POS rückwärts. Nicht vom Award-Portfolio. Jede Kreation muss am Regal, auf der Messe oder im Livestream funktionieren.' },
      { q: 'Welche Rolle spielt CGI heute?', a: 'Immens. CGI ist nicht mehr die Alternative zur Produktion — es ist die erste Instanz. Wir rendern vor dem Bau, optimieren vor dem Drehen.' },
      { q: 'Was ist die Zukunft des Contents am POS?', a: 'Personalisiert, live, hyperkontextuell. Wir arbeiten daran, Content in Echtzeit anzupassen — Stichwort: Dynamic POS Content.' },
    ],
    stats: [{ val: '500+', label: 'Kampagnen' }, { val: '100K+', label: 'Assets' }],
    linkedin: 'https://www.linkedin.com/company/sonic-group-gmbh',
    image: 'https://readdy.ai/api/search-image?query=professional%20creative%20director%20man%20young%20energetic%20modern%20design%20studio%20environment%20editorial%20portrait%20photography%20dramatic%20studio%20lighting%20dark%20background%20artistic%20sharp%20detail%20contemporary%20creative%20professional%20premium%20quality&width=700&height=900&seq=mgmt-lucas&orientation=portrait',
    imageBg: 'linear-gradient(160deg,#181410,#100d08)',
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

export default function ManagementVoices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);
  const [qaAnimKey, setQaAnimKey] = useState(0);
  const headerReveal = useReveal();
  const bodyReveal = useReveal(0.03);

  const exec = EXECUTIVES[activeIdx];

  const goTo = useCallback((i: number) => {
    if (i === activeIdx) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveIdx(i);
      setQaAnimKey(k => k + 1);
      setTransitioning(false);
    }, 280);
  }, [activeIdx]);

  return (
    <section
      id="management-voices"
      className="relative overflow-hidden"
      style={{ background: '#111' }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(200,212,0,0.3) 25%,rgba(200,212,0,0.3) 75%,transparent 100%)' }} />

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(200,212,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(200,212,0,0.025) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(200,212,0,0.06) 0%,transparent 70%)' }} />

      {/* ── HEADER ── */}
      <div
        ref={headerReveal.ref}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12 relative z-10"
        style={{ opacity: headerReveal.vis ? 1 : 0, transform: headerReveal.vis ? 'none' : 'translateY(32px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#C8D400]" />
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#C8D400]/70">Leadership Perspectives</span>
            </div>
            <SectionBadge text="Hear from Our Management" variant="light" className="mb-5" />
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
              Die Stimmen<br /><span className="text-[#C8D400]">hinter Sonic.</span>
            </h2>
            <p className="text-sm font-light leading-relaxed mt-4 max-w-sm text-white/40">
              Strategie, Kreation und Operations — drei Perspektiven, eine Überzeugung.
            </p>
          </div>
          {/* Tab selector — executive style */}
          <div className="flex flex-col gap-0.5 flex-shrink-0">
            {EXECUTIVES.map((e, i) => (
              <button
                key={e.id}
                onClick={() => goTo(i)}
                className="flex items-center gap-4 px-5 py-3.5 cursor-pointer transition-all duration-300 text-left whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                style={{
                  background: activeIdx === i ? 'rgba(200,212,0,0.12)' : 'transparent',
                  border: activeIdx === i ? '0.5px solid rgba(200,212,0,0.3)' : '0.5px solid rgba(255,255,255,0.07)',
                  borderRadius: 0,
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[11px] font-black"
                  style={{ background: activeIdx === i ? '#C8D400' : 'rgba(255,255,255,0.05)', color: activeIdx === i ? '#111' : 'rgba(255,255,255,0.3)', borderRadius: 0 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="text-lg font-black leading-none tracking-tight" style={{ color: activeIdx === i ? '#C8D400' : 'rgba(255,255,255,0.6)' }}>{e.name}</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.08em] mt-0.5 text-white/25">{e.tag}</div>
                </div>
                {activeIdx === i && <div className="ml-auto w-1.5 h-1.5 flex-shrink-0 bg-[#C8D400]" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN PANEL ── */}
      <div
        ref={bodyReveal.ref}
        className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 relative z-10"
        style={{ opacity: bodyReveal.vis ? 1 : 0, transform: bodyReveal.vis ? 'none' : 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
      >
        <div className="grid gap-[3px]" style={{ gridTemplateColumns: '1fr 1.1fr' }}>

          {/* LEFT: Executive portrait */}
          <div
            className="relative overflow-hidden flex items-center justify-center"
            style={{ minHeight: '600px', background: exec.imageBg }}
          >
            {/* Full-bleed dark bg gradient */}
            <div className="absolute inset-0" style={{ background: exec.imageBg }} />

            {/* ── POLAROID FRAME ── */}
            <div
              className="relative z-10 flex flex-col"
              onMouseEnter={() => setHoveredPolaroid(true)}
              onMouseLeave={() => setHoveredPolaroid(false)}
              style={{
                background: '#f5f2ec',
                padding: '12px 12px 52px 12px',
                boxShadow: hoveredPolaroid
                  ? '0 32px 80px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6)'
                  : '0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.5)',
                transform: transitioning
                  ? 'scale(0.97) rotate(0deg)'
                  : hoveredPolaroid
                  ? 'rotate(0deg) scale(1.0) translateY(-4px)'
                  : 'rotate(-1.2deg) scale(1)',
                transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.28s ease, width 0.45s cubic-bezier(0.16,1,0.3,1)',
                opacity: transitioning ? 0 : 1,
                width: hoveredPolaroid ? 'calc(100% - 56px)' : '82%',
                maxWidth: hoveredPolaroid ? '420px' : '380px',
                cursor: 'pointer',
              }}
            >
              {/* Photo area */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  key={exec.id}
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-cover object-top"
                  style={{ mixBlendMode: 'luminosity', filter: 'contrast(1.05) brightness(0.92)' }}
                />
                {/* Subtle vignette inside photo */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)' }} />
                {/* Lime accent line at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
              </div>

              {/* Polaroid caption strip — with paper grain texture */}
              <div
                className="flex flex-col items-center justify-center pt-3 pb-1 relative overflow-hidden"
                style={{ background: '#f5f2ec' }}
              >
                {/* Paper grain overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                    backgroundSize: '120px 120px',
                    opacity: 0.6,
                    mixBlendMode: 'multiply',
                  }}
                />
                {/* Subtle warm tint lines (paper fiber feel) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(180,160,120,0.04) 3px, rgba(180,160,120,0.04) 4px)',
                    opacity: 0.8,
                  }}
                />
                <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{exec.name}</div>
                <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">{exec.tag}</div>
              </div>
            </div>

            {/* Corner accents — frame the polaroid area */}
            <div className="absolute top-6 left-6 w-14 h-14 z-20 pointer-events-none" style={{ borderTop: '1.5px solid rgba(200,212,0,0.5)', borderLeft: '1.5px solid rgba(200,212,0,0.5)' }} />
            <div className="absolute top-6 right-6 w-14 h-14 z-20 pointer-events-none" style={{ borderTop: '1.5px solid rgba(200,212,0,0.5)', borderRight: '1.5px solid rgba(200,212,0,0.5)' }} />
            <div className="absolute bottom-[88px] left-6 w-14 h-14 z-20 pointer-events-none" style={{ borderBottom: '1.5px solid rgba(200,212,0,0.25)', borderLeft: '1.5px solid rgba(200,212,0,0.25)' }} />
            <div className="absolute bottom-[88px] right-6 w-14 h-14 z-20 pointer-events-none" style={{ borderBottom: '1.5px solid rgba(200,212,0,0.25)', borderRight: '1.5px solid rgba(200,212,0,0.25)' }} />

            {/* Tag top center */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-3 py-1.5 bg-[#C8D400] text-[#111]">{exec.tag}</span>
            </div>

            {/* Bottom identity block */}
            <div
              className="absolute bottom-0 left-0 right-0 z-20 px-8 py-8"
              style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(8px)' : 'none', transition: 'opacity 0.28s ease, transform 0.28s ease', background: 'linear-gradient(to top, rgba(17,17,17,0.98) 0%, rgba(17,17,17,0.7) 60%, transparent 100%)' }}
            >
              <div className="text-[9px] font-black uppercase tracking-[0.14em] text-[#C8D400]/70 mb-2.5">{exec.eyebrow}</div>
              <div className="text-4xl font-black text-white leading-none tracking-tight mb-1.5">{exec.name}</div>
              <div className="text-[11px] font-black uppercase tracking-[0.06em] mb-4 text-white/40">{exec.title}</div>
              {/* Stats */}
              <div className="flex gap-4">
                {exec.stats.map((s, si) => (
                  <div key={si} className="px-4 py-3" style={{ background: 'rgba(200,212,0,0.1)', border: '0.5px solid rgba(200,212,0,0.2)' }}>
                    <div className="text-2xl font-black text-[#C8D400] leading-none tracking-tight">{s.val}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest mt-0.5 text-white/35">{s.label}</div>
                  </div>
                ))}
                <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
                  <div className="text-2xl font-black text-white leading-none tracking-tight">{exec.tenure}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest mt-0.5 text-white/30">Bei Sonic</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Interview panel */}
          <div
            className="flex flex-col"
            style={{ background: '#1a1a1a', border: '0.5px solid rgba(255,255,255,0.07)', padding: '44px' }}
          >
            {/* Series label */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-px bg-[#C8D400]" />
              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#C8D400]/70">Management Voices · {exec.tag}</span>
            </div>

            {/* Pull quote */}
            <blockquote
              className="text-base font-light italic leading-[1.7] mb-6"
              style={{
                color: 'rgba(255,255,255,0.75)',
                borderLeft: '2px solid #C8D400',
                paddingLeft: '18px',
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? 'translateX(8px)' : 'none',
                transition: 'opacity 0.28s ease, transform 0.28s ease',
              }}
            >
              {exec.pullQuote}
            </blockquote>

            {/* Bio */}
            <p
              className="text-sm font-light leading-relaxed mb-8 text-white/40"
              style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.28s ease 0.05s' }}
            >
              {exec.bio}
            </p>

            {/* Q&A */}
            <div className="flex flex-col flex-1 gap-0">
              {exec.qa.map((item, qi) => (
                <div
                  key={`${qaAnimKey}-${qi}`}
                  className="py-5"
                  style={{
                    borderTop: '0.5px solid rgba(255,255,255,0.07)',
                    opacity: transitioning ? 0 : 1,
                    transform: transitioning ? 'translateX(16px)' : 'translateX(0)',
                    transition: `opacity 0.35s cubic-bezier(0.16,1,0.3,1) ${0.08 + qi * 0.07}s, transform 0.35s cubic-bezier(0.16,1,0.3,1) ${0.08 + qi * 0.07}s`,
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 px-2 py-0.5 text-[8px] font-black mt-0.5" style={{ background: 'rgba(200,212,0,0.1)', border: '0.5px solid rgba(200,212,0,0.25)', color: '#C8D400' }}>Q</div>
                    <span className="text-[11px] font-black uppercase tracking-[0.07em] text-[#C8D400]/80">{item.q}</span>
                  </div>
                  <p className="text-xs font-light leading-relaxed pl-8 text-white/45">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 mt-auto" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:info@sonic-group.de"
                  className="flex items-center gap-2 px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] cursor-pointer transition-all duration-200 hover:bg-[#d4f040] whitespace-nowrap"
                  style={{ background: '#C8D400', color: '#111', borderRadius: 0 }}
                >
                  Kontakt aufnehmen →
                </a>
                <a
                  href={exec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-3 text-[11px] font-black uppercase tracking-[0.08em] cursor-pointer transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)', borderRadius: 0 }}
                >
                  <i className="ri-linkedin-box-fill text-sm" />
                  Vollständiges Profil
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goTo((activeIdx - 1 + EXECUTIVES.length) % EXECUTIVES.length)}
                  className="w-9 h-9 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: 0, color: 'rgba(255,255,255,0.5)' }}
                >←</button>
                <span className="text-[11px] font-mono text-gray-500" style={{ minWidth: '40px', textAlign: 'center' }}>{activeIdx + 1} / {EXECUTIVES.length}</span>
                <button
                  onClick={() => goTo((activeIdx + 1) % EXECUTIVES.length)}
                  className="w-9 h-9 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: 0, color: 'rgba(255,255,255,0.5)' }}
                >→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
