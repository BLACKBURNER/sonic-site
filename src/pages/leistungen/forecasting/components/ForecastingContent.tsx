import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import ChallengeSection from '@/components/feature/ChallengeSection';
import type { ChallengeItem } from '@/components/feature/ChallengeSection';

const FORECASTING_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-question-mark',
    title: 'ROI unsicher — Budget ins Unbekannte',
    desc: 'Budget fließt in Einsätze, ohne zu wissen was dabei rauskommt. Quartalsberichte kommen zu spät. Wer ohne Prognose startet, kennt seinen ROI erst rückwirkend.',
    trigger: 'Kommt dir bekannt vor?',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Datensilos machen Prognosen unmöglich',
    desc: 'Sell-out-Daten liegen in verschiedenen Systemen, Excel-Sheets und Handelspartnern. Eine übergreifende Prognose ist manuell kaum möglich — und fehleranfällig.',
    trigger: 'Auch bei euch so?',
  },
  {
    icon: 'ri-pencil-line',
    title: 'Manuelle Planung auf Bauchgefühl',
    desc: 'Einsatzplanung auf Basis von Bauchgefühl und Erfahrung. Saisonalität, Standort-Performance und Wettbewerbsdynamik werden nicht systematisch berücksichtigt.',
    trigger: 'Klingt vertraut?',
  },
];

const SOLUTIONS = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20robot%20AI%20brain%20intelligence%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-forecast-sol-robot-01&orientation=squarish', num: '01', accent: 'KI-Analyse', title: 'Prognosen auf Knopfdruck', desc: 'Das SRT analysiert historische Sell-out-Daten, Standort-Performance und Markttrends — und liefert eine belastbare Prognose, bevor du unterschreibst.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20map%20pin%20location%20marker%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-forecast-sol-pin-02&orientation=squarish', num: '02', accent: 'Standort', title: 'Standort-Potenzialanalyse', desc: 'Welche Outlets versprechen den größten Hebel? Das Forecasting-Modul priorisiert Standorte nach erwartetem ROI — datenbasiert, nicht nach Bauchgefühl.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20calendar%20check%20date%20schedule%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-forecast-sol-cal-03&orientation=squarish', num: '03', accent: 'Saisonalität', title: 'Saisonalität berücksichtigt', desc: 'Weihnachtsgeschäft, Back-to-School, Black Friday: Unser Forecasting-Modell berücksichtigt saisonale Muster aus über 1,35 Mio. dokumentierten Einsätzen.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20bar%20chart%20grouped%20scenarios%20analysis%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-forecast-sol-chart-04&orientation=squarish', num: '04', accent: 'Szenarien', title: 'Szenarien & Sensitivitäten', desc: 'Best Case, Base Case, Worst Case. Du siehst, wie sich verschiedene Einsatz-Szenarien auf dein Ergebnis auswirken — und kannst fundiert entscheiden.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20dashboard%20speedometer%20gauge%20live%20tracking%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-forecast-sol-dash-05&orientation=squarish', num: '05', accent: 'Live-Tracking', title: 'Live-Abgleich mit Ist-Daten', desc: 'Nach dem Go-live wird die Prognose laufend mit echten Einsatzdaten abgeglichen. Abweichungen werden sofort sichtbar — und können korrigiert werden.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20chain%20link%20integration%20connection%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-forecast-sol-link-06&orientation=squarish', num: '06', accent: 'Integration', title: 'Integration in dein System', desc: 'Das SRT dockt an deine bestehende Business-Intelligence-Software an. Du bekommst Forecasting-Daten direkt in dein Dashboard — kein Systembruch.' },
];

const HOW_IT_WORKS = [
  { num: '01', title: 'Datenbasis aufbauen', desc: 'Wir analysieren deine historischen Sell-out-Daten, Standortinformationen und Marktparameter. Je mehr Daten, desto präziser die Prognose.' },
  { num: '02', title: 'Modell kalibrieren', desc: 'Unser Forecasting-Modell wird auf dein Produkt, deine Kategorie und dein Retailer-Setup kalibriert. Benchmarks aus 1,35 Mio. Einsätzen fließen ein.' },
  { num: '03', title: 'Prognose ausgeben', desc: 'Du erhältst eine transparente Prognose: Erwarteter Sell-out pro Standort, pro Zeitraum, pro Szenario. Mit Konfidenzintervall und Sensitivitätsanalyse.' },
  { num: '04', title: 'Live abgleichen', desc: 'Nach Projektstart wird die Prognose täglich mit echten Einsatzdaten abgeglichen. Optimierungspotenziale werden sofort sichtbar.' },
];

const STATS = [
  { value: '>1,35 Mio.', label: 'Einsätze als Datenbasis' },
  { value: '>8 Jahre', label: 'Historische Retail-Daten' },
  { value: '100 %', label: 'Transparenz via Dashboard' },
  { value: '±15 %', label: 'Durchschnittliche Prognosegenauigkeit' },
];

export default function ForecastingContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [solActive, setSolActive] = useState<number | null>(null);
  const solRef = useRef<HTMLDivElement>(null);

  const scrollSol = (dir: 'left' | 'right') => {
    solRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };
  const goTo = (i: number) => {
    setSolActive(i);
    solRef.current?.scrollTo({ left: i * 376, behavior: 'smooth' });
  };

  return (
    <>
      <ChallengeSection
        badge="Das Problem"
        headline="Ohne Prognose fliegt ihr im Blindflug."
        subline="Zu viele Retail-Projekte starten ohne belastbare Planung — und merken es erst am Quartalsende."
        challenges={FORECASTING_CHALLENGES}
      />

      {/* ── Solution (horizontal scroll, light warm bg) ── */}
      <section id="loesung" className="bg-white py-14 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/8 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5">
                <i className="ri-check-double-line text-[#111] text-sm" />
                <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Sonic-Lösung</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-tight tracking-tight uppercase">
                FORECASTING. <span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>DATENBASIERT.</span><br />BELASTBAR.
              </h2>
            </div>
            <p className="text-[#111]/45 text-sm leading-relaxed max-w-xs lg:text-right">Prognosen auf echten Daten — nicht auf Excel-Tabellen und Bauchgefühl.</p>
          </div>

          <div className="flex items-center mb-6 gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#111]/30 flex-grow">{SOLUTIONS.length} Features — scrollen</span>
            <button onClick={() => scrollSol('left')} className="w-10 h-10 flex items-center justify-center border border-[#111]/20 text-[#111]/40 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" aria-label="links"><i className="ri-arrow-left-s-line text-xl" /></button>
            <button onClick={() => scrollSol('right')} className="w-10 h-10 flex items-center justify-center border border-[#111]/20 text-[#111]/40 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" aria-label="rechts"><i className="ri-arrow-right-s-line text-xl" /></button>
          </div>

          <div ref={solRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {SOLUTIONS.map((s, idx) => {
              const isA = solActive === idx;
              return (
                <div key={idx} className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                  style={{ width: 'clamp(280px, 26vw, 340px)', minHeight: '380px', background: isA ? '#111' : '#ffffff', border: `1px solid ${isA ? 'rgba(200,212,0,0.5)' : 'rgba(0,0,0,0.09)'}`, transition: 'all 0.3s ease', transform: isA ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.3), 0 24px 48px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)' }}
                  onMouseEnter={() => setSolActive(idx)} onMouseLeave={() => setSolActive(null)}
                >
                  <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? '#C8D400' : 'rgba(0,0,0,0.08)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.5)' : 'none', transition: 'all 0.3s ease' }} />
                  <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '6rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{s.num}</div>
                  <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: '380px' }}>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : 'rgba(200,212,0,0.6)', transition: 'background 0.3s ease' }} />
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : 'rgba(139,110,0,0.7)', transition: 'color 0.3s ease' }}>{s.accent}</span>
                    </div>
                    <div className="w-[56px] h-[56px] overflow-hidden mb-6 flex-shrink-0 transition-all duration-500" style={{ boxShadow: isA ? '0 8px 24px rgba(139,90,43,0.4)' : '0 4px 14px rgba(139,90,43,0.18)', transform: isA ? 'scale(1.1) rotate(-3deg)' : 'scale(1)' }}>
                      <img src={s.woodIcon} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-black mb-3 leading-snug uppercase" style={{ color: isA ? '#fff' : '#111', transition: 'color 0.3s ease' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed flex-grow" style={{ color: isA ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)', transition: 'color 0.3s ease' }}>{s.desc}</p>
                    <div className="flex items-center justify-between pt-4 mt-4" style={{ borderTop: `1px solid ${isA ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`, transition: 'border-color 0.3s ease' }}>
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>{s.num} / {String(SOLUTIONS.length).padStart(2, '0')}</span>
                      <div className="w-7 h-7 flex items-center justify-center" style={{ background: isA ? '#C8D400' : 'rgba(0,0,0,0.07)', transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}>
                        <i className="ri-arrow-right-line text-sm" style={{ color: isA ? '#111' : 'rgba(0,0,0,0.45)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {SOLUTIONS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="cursor-pointer" style={{ width: i === (solActive ?? 0) ? '22px' : '6px', height: '3px', background: i === (solActive ?? 0) ? '#C8D400' : 'rgba(0,0,0,0.2)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="wie-es-funktioniert" className="bg-white py-14 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <SectionBadge text="So funktioniert es" variant="dark" className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight uppercase">In 4 Schritten zur<br />belastbaren Prognose</h2>
          </div>
          <div className="flex gap-0 mb-0 overflow-x-auto border border-[#111]/10" style={{ scrollbarWidth: 'none' }}>
            {HOW_IT_WORKS.map((step, i) => (
              <button key={i} onClick={() => setActiveStep(i)} className={`flex-shrink-0 flex-1 px-3 md:px-4 py-3 font-black text-xs whitespace-nowrap transition-all duration-300 cursor-pointer border-r border-[#111]/10 last:border-r-0 ${activeStep === i ? 'bg-[#111] text-[#C8D400]' : 'bg-white text-[#111]/50 hover:text-[#111] hover:bg-white'}`} style={{ minWidth: '80px' }}>
                <span className="block text-[10px] opacity-60 mb-0.5">{step.num}</span>
                <span className="hidden sm:block">{step.title}</span>
                <span className="sm:hidden">{step.num}</span>
              </button>
            ))}
          </div>
          <div key={activeStep} className="border border-[#111]/10 border-t-0 bg-white p-6 md:p-10 relative overflow-hidden" style={{ animation: 'fadeIn 0.35s ease-out' }}>
            <div className="absolute top-0 left-0 text-7xl md:text-9xl font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(200,212,0,0.08)', lineHeight: 1 }}>{HOW_IT_WORKS[activeStep].num}</div>
            <div className="relative">
              <div className="text-[#111] font-black text-xs uppercase tracking-widest mb-3">Schritt {HOW_IT_WORKS[activeStep].num}</div>
              <h3 className="text-xl md:text-2xl font-black text-[#111] mb-3 md:mb-4 uppercase">{HOW_IT_WORKS[activeStep].title}</h3>
              <p className="text-[#111]/65 text-sm md:text-base leading-relaxed">{HOW_IT_WORKS[activeStep].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="bg-[#111] py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C8D400]/15 border border-[#C8D400]/15 overflow-hidden">
          {STATS.map((s, i) => (
            <div key={i} className="bg-[#111] p-5 md:p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#C8D400]/0 group-hover:bg-[#C8D400]/5 transition-colors duration-300" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8D400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-3xl lg:text-4xl font-black text-[#C8D400] mb-2 relative z-10">{s.value}</div>
              <div className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-wider leading-snug relative z-10">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="bg-white py-14 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#111]/10 bg-white p-7 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8D400]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D400]/10 blur-3xl pointer-events-none translate-x-16 -translate-y-16" />
            <div className="relative">
              <div className="text-[#C8D400]/20 text-6xl md:text-8xl font-black leading-none mb-2 select-none">&ldquo;</div>
              <p className="text-[#111] text-base md:text-xl font-semibold italic leading-relaxed mb-6 md:mb-8">
                &ldquo;Auf Basis unserer historischen Daten prognostizieren wir Sell-out-Ergebnisse. Bevor der erste Einsatz startet. Du weißt vorher, was du erwarten kannst.&rdquo;
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#C8D400] flex-shrink-0">
                  <i className="ri-user-star-line text-lg md:text-xl text-[#111]" />
                </div>
                <div>
                  <div className="text-[#111] font-black text-sm">Sonic Analytics Team</div>
                  <div className="text-[#111]/45 text-xs">SRT — Sonic Reporting Tool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
