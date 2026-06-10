import { useState, useEffect, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const stories = [
  {
    id: 'hassibullah',
    name: 'Hassibullah',
    subtitle: 'Gemacht. Gewachsen',
    headline: 'Starker Wille, starke Leistung.',
    intro: 'Hassibullah kam 2016 nach Deutschland, ohne Deutschkenntnisse. Mit viel Ehrgeiz schaffte er die IHK-Ausbildung, sammelte erste Erfahrungen im Einzelhandel und wechselte dann mutig zu Sonic, sogar mit Umzug nach Bayern.',
    body: 'Mit seinem Engagement, seiner positiven Haltung und seinem Einsatz im Außendienst zählt er heute zu unseren verlässlichsten Verkaufspersönlichkeiten, mit konstant starken Verkaufszahlen und Vorbildfunktion für andere.',
    traits: [
      { num: '01', title: 'Starker Wille', desc: 'zur persönlichen Weiterentwicklung.' },
      { num: '02', title: 'Macher-Mentalität', desc: 'und hohes Maß an Eigenverantwortung.' },
      { num: '03', title: 'Rückkehr mit Energie', desc: 'nach gesundheitsbedingter Auszeit.' },
      { num: '04', title: 'Verlässlich', desc: 'Vertrauen und Teamgeist als Basis für Erfolg.' },
    ],
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/POS_NEU.jpg',
    stat: 'IHK Ausbildung',
    statLabel: 'erfolgreich abgeschlossen',
    statIcon: 'ri-medal-line',
  },
  {
    id: 'andrew',
    name: 'Andrew',
    subtitle: 'Seine Bühne ist die Welt',
    headline: '14 Jahre. 22 Länder. Eine Heimat.',
    intro: 'In den 14 Jahren, in denen Andrew als Event- und Logistikmanager bei Sonic ist, war er für uns bei über 200 Messen und Events in 22 Ländern. Dank seiner Energie und lösungsorientierten Arbeitsweise ist er eine Stütze des Teams.',
    body: 'Ob es um die Planung, den Aufbau, das Mobiliar oder die Begleitung eines Events geht: Andrew ist immer vorne dabei. Hands-on, motiviert und mit einem Lächeln, das ansteckt.',
    traits: [
      { num: '01', title: 'Denkt in Lösungen', desc: 'Entweder er fixt es selbst, oder er kennt einen, der es fixen wird.' },
      { num: '02', title: 'Erfahrung & Neugier', desc: 'Event, Technik und Menschlichkeit kombiniert. Immer bereit für Neues.' },
      { num: '03', title: 'Unfassbar sympathisch', desc: 'Der geborene Ansprechpartner für Kunden, Kollegen und Externe.' },
      { num: '04', title: 'Fährt (fast) alles', desc: 'Wenn es Räder oder einen Motor hat, kann Andrew damit umgehen.' },
    ],
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
    stat: '22 Länder',
    statLabel: '200+ Messen & Events',
    statIcon: 'ri-global-line',
  },
  {
    id: 'peter',
    name: 'Peter',
    subtitle: 'Zurück ins Berufsleben',
    headline: '+42 % über Durchschnitt — Comeback des Jahres.',
    intro: 'Nach Jahren treuer Mitarbeit wurde Peters Weg plötzlich durch eine schwere Krankheit unterbrochen. Mit enormem Willen, medizinischer Begleitung und einem individuellen Wiedereinstiegsplan kehrte er erfolgreich zurück ins Team.',
    body: 'Sein Comeback macht Mut: Bereits in den ersten vier Wochen nach seinem Wiedereinstieg lag sein Absatz 42 % über dem Projekt-Durchschnitt.',
    traits: [
      { num: '01', title: 'Kämpfernatur', desc: 'Begeistert Menschen durch seine positive Energie.' },
      { num: '02', title: 'Willensstärke', desc: 'Unerschütterlicher Wunsch, wieder im Team zu sein.' },
      { num: '03', title: 'Kommunikativ', desc: 'Empathisch und sympathisch.' },
      { num: '04', title: 'Überzeugend', desc: 'Starkes Fachwissen als Grundlage für überdurchschnittliche Leistung.' },
    ],
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
    stat: '+42 %',
    statLabel: 'über Projekt-Durchschnitt',
    statIcon: 'ri-line-chart-line',
  },
];

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

export default function GeschichtenSection() {
  const [activeStory, setActiveStory] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);
  const reveal = useReveal();
  const story = stories[activeStory];

  const switchStory = (i: number) => {
    if (i === activeStory) return;
    setIsChanging(true);
    setTimeout(() => { setActiveStory(i); setIsChanging(false); }, 200);
  };

  return (
    <section id="geschichten" className="py-20 md:py-36 bg-white overflow-hidden relative">
      {/* Edge decoration */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,212,0,0.3), transparent)' }} />

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <SectionBadge text="Geschichten" variant="dark" className="mb-4" />
            <h2 className="text-4xl md:text-5xl font-black text-sonic-dark leading-tight tracking-tight uppercase">
              Der<br /><span style={{ color: '#C8D400' }}>Sonic Spirit</span>
            </h2>
            <p className="text-sm text-gray-500 mt-4 max-w-sm leading-relaxed">
              Bei Sonic arbeiten bedeutet, sich persönlich weiterzuentwickeln. Wir schaffen einen Rahmen, der Potentiale fördert, Mut belohnt und jederzeit Rückhalt gibt.
            </p>
          </div>

          {/* Person switcher */}
          <div className="flex gap-0 overflow-hidden border border-gray-200" style={{ borderRadius: 0 }} role="tablist" aria-label="Mitarbeiter-Geschichten">
            {stories.map((s, i) => (
              <button
                key={s.id}
                onClick={() => switchStory(i)}
                role="tab"
                aria-selected={activeStory === i}
                aria-controls={`story-panel-${s.id}`}
                id={`story-tab-${s.id}`}
                className={`relative px-6 py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] border-r border-gray-200 last:border-r-0 ${
                  activeStory === i ? 'bg-[#f7f6f3] text-[#C8D400]' : 'bg-transparent text-gray-400 hover:text-[#111]'
                }`}
                style={{ borderRadius: 0 }}
              >
                {s.name}
                {activeStory === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8D400]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── STORY LAYOUT ── */}
        <div
          role="tabpanel"
          id={`story-panel-${story.id}`}
          aria-labelledby={`story-tab-${story.id}`}
          style={{
            opacity: isChanging ? 0 : 1,
            transform: isChanging ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 md:gap-16 items-start">

            {/* ── LEFT: Content ── */}
            <div>
              {/* Story eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{story.subtitle}</span>
                <div className="h-px w-8 bg-[#C8D400]" />
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-sonic-dark leading-tight mb-8 tracking-tight">
                {story.headline}
              </h3>

              {/* Intro — larger text block */}
              <p className="text-base text-gray-600 leading-loose mb-4">
                {story.intro}
              </p>
              <p className="text-sm text-gray-500 leading-loose mb-12">
                {story.body}
              </p>

              {/* Traits — clean bordered grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-200">
                {story.traits.map((trait, i) => {
                  const isHov = hoveredTrait === i;
                  return (
                    <div
                      key={i}
                      className="relative p-6 md:p-8 border-r border-b border-gray-200 group cursor-default overflow-hidden transition-colors duration-300 last:border-r-0 sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-child(3)]:border-r-0"
                      style={{ background: isHov ? '#f7f6f3' : 'transparent', borderRadius: 0 }}
                      onMouseEnter={() => setHoveredTrait(i)}
                      onMouseLeave={() => setHoveredTrait(null)}
                    >
                      {/* Watermark */}
                      <div
                        className="absolute top-3 right-4 text-5xl font-black pointer-events-none select-none leading-none transition-colors duration-300"
                        style={{ color: isHov ? 'rgba(200,212,0,0.28)' : 'rgba(0,0,0,0.04)' }}
                        aria-hidden="true"
                      >
                        {trait.num}
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-black tabular-nums" style={{ color: '#C8D400' }}>{trait.num}</span>
                          <div className="flex-1 h-px" style={{ background: isHov ? 'rgba(200,212,0,0.3)' : 'rgba(0,0,0,0.1)' }} />
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-wide text-[#111] mb-1.5">{trait.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{trait.desc}</p>
                      </div>
                      {/* Lime bottom slide */}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#C8D400] transition-all duration-500" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── RIGHT: Portrait + Stat ── */}
            <div className="flex flex-col gap-4">
              {/* Portrait — polaroid frame */}
              <div
                className="relative flex flex-col"
                onMouseEnter={() => setHoveredPolaroid(true)}
                onMouseLeave={() => setHoveredPolaroid(false)}
                style={{
                  background: '#f5f2ec',
                  padding: '8px 8px 52px 8px',
                  boxShadow: hoveredPolaroid
                    ? '0 24px 64px rgba(0,0,0,0.22), 0 6px 20px rgba(0,0,0,0.12)'
                    : '0 12px 40px rgba(0,0,0,0.14), 0 3px 12px rgba(0,0,0,0.08)',
                  transform: hoveredPolaroid
                    ? 'rotate(0deg) translateY(-5px)'
                    : 'rotate(-0.8deg)',
                  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                }}
              >
                {/* Photo area */}
                <div className="relative overflow-hidden group" style={{ height: '420px' }}>
                  <img
                    src={story.image}
                    alt={`${story.name} — ${story.subtitle}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700"
                    style={{ transform: hoveredPolaroid ? 'scale(1.04)' : 'scale(1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                  {/* Lime accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <div className="text-lg font-black text-white">{story.name}</div>
                    <div className="text-xs font-black uppercase tracking-[0.15em] mt-0.5" style={{ color: '#C8D400' }}>{story.subtitle}</div>
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
                  <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{story.name}</div>
                  <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">{story.subtitle}</div>
                </div>
              </div>

              {/* Stat card — glassmorphism dark */}
              <div
                className="p-6 flex items-center gap-5"
                style={{ background: '#f7f6f3', borderRadius: 0 }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(200,212,0,0.15)', borderRadius: 0 }}
                >
                  <i className={`${story.statIcon} text-2xl`} style={{ color: '#C8D400' }} />
                </div>
                <div>
                  <div className="text-3xl font-black tabular-nums leading-none mb-1" style={{ color: '#C8D400' }}>{story.stat}</div>
                  <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(0,0,0,0.5)' }}>{story.statLabel}</div>
                </div>
              </div>

              {/* Story navigation dots */}
              <div className="flex gap-2" role="group" aria-label="Geschichten-Navigation">
                {stories.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => switchStory(i)}
                    aria-pressed={activeStory === i}
                    aria-label={`Geschichte: ${s.name}`}
                    className="flex-1 py-3 text-[10px] font-black uppercase tracking-[0.05em] transition-all duration-300 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
                    style={{
                      background: activeStory === i ? '#C8D400' : '#e5e7eb',
                      color: activeStory === i ? '#111' : 'rgba(0,0,0,0.4)',
                      borderRadius: 0,
                    }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
