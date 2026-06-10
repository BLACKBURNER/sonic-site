import { useRef, useEffect, useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const PROBLEMS = [
  {
    num: '01',
    icon: 'ri-database-2-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20separated%20fragmented%20database%20cylinder%20storage%20units%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20isolated%20data%20sources%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-db-srt-problem-1&orientation=squarish',
    title: 'Getrennte Datensilos',
    headline: 'Daten liegen überall — nur nicht zusammen.',
    body: 'Die Realität im Retail: WaWi-Daten hier, Kampagnendaten dort, Einsatzplanung in einem Drittanbieter-Tool. Jede Abteilung pflegt ihre eigene Wahrheit. Ein ganzheitliches Bild der Performance entsteht — wenn überhaupt — nur durch aufwendige manuelle Zusammenführung.',
    impact: 'Ergebnis: Wertvolle Zeit geht verloren. Entscheidungen basieren auf Datenschnipseln statt auf der vollständigen Realität.',
    tags: ['WaWi', 'Marketing', 'Silos', 'Manuell'],
  },
  {
    num: '02',
    icon: 'ri-eye-off-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20monitor%20computer%20screen%20dashboard%20display%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20empty%20screen%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-screen-srt-problem-2&orientation=squarish',
    title: 'Keine Dashboards',
    headline: 'Was du nicht siehst, kannst du nicht steuern.',
    body: 'Ohne eine gemeinsame Datenbasis ist es schlicht unmöglich, aussagekräftige KPIs zu definieren und live zu monitoren. Kampagnen-Performance wird erst nach Wochen sichtbar — oft zu spät, um noch einzugreifen. Führungskräfte treffen Entscheidungen im Blindflug.',
    impact: 'Ergebnis: Fehlgeleitete Ressourcen, verpasste Optimierungsfenster, frustrierte Stakeholder.',
    tags: ['KPI', 'Monitoring', 'Dashboard', 'Echtzeit'],
  },
  {
    num: '03',
    icon: 'ri-time-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20clock%20hourglass%20time%20delay%20waiting%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20time%20passing%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-clock-srt-problem-3&orientation=squarish',
    title: 'Verspätete Erkenntnisse',
    headline: 'Wer zu spät kommt, verliert den Marktanteil.',
    body: 'Manuelle Auswertungen, Excel-Konsolidierungen, wöchentliche Meetings nur um Datenstände zu berichten — das kostet Zeit, die am Markt fehlt. Wenn eine Kampagne schlecht läuft, erfährt das Management es erst Tage oder Wochen später. Schnelle Nachjustierungen sind dann kaum noch möglich.',
    impact: 'Ergebnis: Reaktives statt proaktives Management. Wettbewerber, die schneller sehen, agieren schneller.',
    tags: ['Insights', 'Echtzeit', 'Verzug', 'Reaktiv'],
  },
];

export default function TheProblem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [readIdx, setReadIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Large background watermark */}
      <div
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-black leading-none"
        style={{ fontSize: 'clamp(120px,18vw,260px)', color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.04)', letterSpacing: '-0.05em' }}
      >
        PROBLEM
      </div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      >
        {/* Editorial header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="Deine Herausforderung" variant="dark" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h2
                className="font-black text-sonic-dark leading-tight tracking-tight"
                style={{ fontSize: 'clamp(28px,4vw,48px)' }}
              >
                DATEN&shy;QUELLEN<br />
                <span className="text-[#C8D400]">ZUSAMMEN</span><br />
                FÜHREN.
              </h2>
            </div>
            <div className="lg:pl-8 border-l-0 lg:border-l-2 border-[#C8D400]/40">
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Für effizientes Performance-Marketing müssen Daten aus vielen Quellen in Echtzeit zusammenlaufen. Genau daran scheitern die meisten Unternehmen — nicht an der Strategie, sondern an der Infrastruktur.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Die drei häufigsten Probleme, die wir bei unseren Kunden beobachten — und für die das SRT die direkte Antwort ist.
              </p>
            </div>
          </div>
        </div>

        {/* Problems — editorial stacked layout */}
        <div className="space-y-0">
          {PROBLEMS.map((p, i) => {
            const isExpanded = readIdx === i;
            return (
              <div
                key={i}
                className="relative group"
                style={{ borderTop: '1px solid #e5e7eb' }}
              >
                {/* Lime left accent on hover/expand */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                  style={{ background: isExpanded ? '#C8D400' : 'transparent' }}
                />

                <button
                  className="w-full text-left px-6 md:px-8 py-8 cursor-pointer transition-all duration-300 group-hover:bg-white"
                  onClick={() => setReadIdx(isExpanded ? null : i)}
                  aria-expanded={isExpanded}
                >
                  <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start">
                    {/* Number */}
                    <div className="hidden md:flex flex-col items-start gap-2 pt-0 w-20">
                      <span
                        className="font-black leading-none tabular-nums transition-colors duration-300"
                        style={{ fontSize: 'clamp(44px,4.5vw,64px)', color: isExpanded ? '#C8D400' : 'rgba(0,0,0,0.07)', WebkitTextStroke: isExpanded ? '0' : '1px rgba(0,0,0,0.12)' }}
                      >
                        {p.num}
                      </span>
                    </div>

                    {/* Main content */}
                    <div>
                      {/* Mobile number + title row */}
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">{p.num}</span>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>

                      <div className="flex items-center gap-3 mb-1">
                        <div
                          className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                          style={{ background: isExpanded ? '#C8D400' : '#f3f4f6' }}
                        >
                          <i className={`${p.icon} text-sm transition-colors duration-300`} style={{ color: isExpanded ? '#111' : '#9ca3af' }} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{p.title}</span>
                      </div>

                      <h3
                        className="text-xl md:text-2xl font-black text-sonic-dark leading-tight tracking-tight mb-0 transition-colors duration-300"
                        style={{ color: isExpanded ? '#111' : '#1a1a1a' }}
                      >
                        {p.headline}
                      </h3>

                      {/* Expandable reading content — split layout */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{ maxHeight: isExpanded ? '480px' : '0px', opacity: isExpanded ? 1 : 0 }}
                      >
                        <div className="pt-5">
                          <div className="grid md:grid-cols-[3fr_2fr] gap-6 md:gap-8">
                            {/* LEFT — Icon + body description */}
                            <div className="flex gap-4 items-start">
                              <div
                                className="w-12 h-12 flex-shrink-0 overflow-hidden hidden sm:block mt-1"
                                style={{ boxShadow: '0 4px 16px rgba(139,90,43,0.3)' }}
                              >
                                <img src={p.woodIcon} alt={p.title} className="w-full h-full object-cover" />
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                            </div>

                            {/* RIGHT — Impact + tags */}
                            <div className="flex flex-col gap-3">
                              {/* Impact callout */}
                              <div className="flex gap-3 items-start bg-[#111] px-4 py-4">
                                <i className="ri-alert-line text-[#C8D400] text-sm flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-white/75 leading-relaxed">{p.impact}</p>
                              </div>
                              {/* Tags */}
                              <div className="flex flex-wrap gap-1.5">
                                {p.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[9px] font-black px-2.5 py-1 uppercase tracking-widest text-[#C8D400] bg-[#C8D400]/10 border border-[#C8D400]/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expand toggle */}
                    <div className="flex items-center gap-2 pt-1 flex-shrink-0">
                      <span className="text-[10px] font-bold text-gray-400 hidden md:block whitespace-nowrap">
                        {isExpanded ? 'Einklappen' : 'Mehr lesen'}
                      </span>
                      <div
                        className="w-8 h-8 flex items-center justify-center border transition-all duration-300"
                        style={{
                          borderColor: isExpanded ? '#C8D400' : '#e5e7eb',
                          background: isExpanded ? '#C8D400' : 'transparent',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <i className="ri-arrow-down-s-line text-base" style={{ color: isExpanded ? '#111' : '#9ca3af' }} />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid #e5e7eb' }} />
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#111] px-8 py-7">
          <div>
            <p className="text-white font-black text-lg leading-tight mb-1">
              <span className="text-[#C8D400]">Das SRT</span> löst alle drei Probleme.
            </p>
            <p className="text-gray-400 text-sm">Eine Plattform. Alle Daten. Echtzeit.</p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('features');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-[#C8D400] text-[#111] px-7 py-3.5 font-black text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 cursor-pointer whitespace-nowrap group flex-shrink-0"
          >
            Lösung ansehen
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}