import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import WoodenDivider from '../../../../components/base/WoodenDivider';
import ChallengeSection from '@/components/feature/ChallengeSection';
import type { ChallengeItem } from '@/components/feature/ChallengeSection';

const EVENTS_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-star-line',
    title: 'Zu wenig Unique — alles schon gesehen',
    desc: 'Die Zielgruppen haben schon viel gesehen und erlebt. Für einzigartige Erlebnisse müssen die Veranstaltungen auf allen Ebenen innovativ und perfekt sein.',
    trigger: 'Auch dein Problem?',
  },
  {
    icon: 'ri-tools-line',
    title: 'Zu viele Gewerke, zu viel Chaos',
    desc: 'Projektmanagement-Overhead, Inbox quillt über, alles wird erst auf den letzten Drücker fertig (oder auch nicht): Das passiert, ist aber vermeidbar.',
    trigger: 'Klingt bekannt?',
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Erfolge nicht messbar',
    desc: 'Daten zu bspw. Kosten und Erfolgen liegen verspätet bzw. unvollständig vor und können nicht optimal ausgewertet werden. Optimierungs-Möglichkeiten? Verborgen.',
    trigger: 'Frustrierend, oder?',
  },
];

const SOLUTIONS = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20lightbulb%20idea%20concept%20creative%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-bulb-events-sol-1&orientation=squarish', num: '01', accent: 'Kreation', title: 'Konzept', desc: 'Vor dem Wow steht die Idee: Einzigartige Erlebnisse erfordern kreative (Stand-)Gestaltung, Venues und Umsetzung für maximale Aufmerksamkeit.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20hammer%20construction%20build%20tool%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-hammer-events-sol-2&orientation=squarish', num: '02', accent: 'Bau & Technik', title: 'Bau & Equipment', desc: 'Die Ideen werden real: Mit Messe-, Möbel-, Modul- und Fahrzeugbau. Mit Bühnen, Displays, Installationen. Mit Licht, Sound, Screens und Interaktionen.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20person%20star%20talent%20team%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-person-events-sol-3&orientation=squarish', num: '03', accent: 'Team & Talent', title: 'Geschultes Personal', desc: 'Professionelle Promoter, Messe-Hostessen und Brand Ambassadors für deinen Event. Handverlesen aus unserem Talentepool, bestens geschult, top im Auftritt.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20fork%20knife%20dining%20restaurant%20catering%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-fork-events-sol-4&orientation=squarish', num: '04', accent: 'Erlebnis', title: 'Catering & Experiences', desc: 'Essen, Trinken, Kunst und immersive Erlebnisse: So wird die Veranstaltung zur High-Class-Show und bleibt lange im Gedächtnis.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20truck%20delivery%20logistics%20transport%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-truck-events-sol-5&orientation=squarish', num: '05', accent: 'Logistik', title: 'Logistik & Controlling', desc: 'Ort und Zeit stehen fest. Wir sind da. Alles läuft. Dank unserem eigenen Warehouse und Logistikteam. Und die Kosten? Siehst du im Sonic Reporting Tool (SRT).' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20megaphone%20announcement%20communication%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-mega-events-sol-6&orientation=squarish', num: '06', accent: 'Kommunikation', title: '(Digitale) Kommunikation', desc: 'Von der Einladung über Goodie-Bags und Give-aways bis zum Live-Stream: Deine Botschaften werden ankommen.' },
];

const STEPS = [
  { num: '01', title: 'Event-/Messe-Briefing', desc: 'Wir analysieren deine Ziele, Zielgruppe und Anforderungen, im Abgleich mit Gesamtstrategie, Budget und Zielen.', time: '1–2 Tage' },
  { num: '02', title: 'Konzeptentwicklung', desc: 'Kreatives Event-/Stand-/Modulkonzept inklusive Venue, Aktivierungsideen und Umsetzungsmöglichkeiten.', time: '1–4 Wochen' },
  { num: '03', title: 'Personal-Auswahl', desc: 'Auswahl und Schulung des perfekten Teams für deinen Event, meist aus dem Sonic Talentepool. Ggf. zusätzliches Recruiting.', time: '1–4 Wochen' },
  { num: '04', title: 'Produktion & Vorbereitung', desc: 'Bookings, Modul-/Möbel-/Standbau, Druck, Programmierungen, Kommunikation, Logistik, Equipment-Check und finale Briefings vor Ort.', time: 'Nach Aufwand' },
  { num: '05', title: 'Veranstaltung', desc: 'Professionelle Umsetzung mit Live-Support, Monitoring und Nachbereitung.', time: 'Event-Dauer' },
  { num: '06', title: 'Reporting', desc: 'Detaillierte Auswertung mit KPIs, Insights und Optimierungsvorschlägen.', time: '3–5 Tage' },
];

export default function EventsContent() {
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
        headline="Ein Moment, viele Baustellen."
        subline="Warum der Wow-Effekt bei Messen und Events nicht immer eintritt."
        challenges={EVENTS_CHALLENGES}
      />

      <WoodenDivider />

      {/* ── Solution (horizontal scroll, light warm bg) ── */}
      <section id="loesung" className="bg-white py-14 md:py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/8 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5">
                <i className="ri-check-double-line text-[#111] text-sm" />
                <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Lösung</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-none uppercase">
                MESSE- UND EVENT-<br /><span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>FULL SERVICE.</span>
              </h2>
            </div>
            <p className="text-[#111]/45 text-sm leading-relaxed max-w-xs">Wir setzen alles daran, dass dein Messe- oder Event-Auftritt zur Erfolgsgeschichte wird.</p>
          </div>

          <div className="flex items-center mb-6 gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#111]/30 flex-grow">{SOLUTIONS.length} Leistungen — scrollen</span>
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
                    <div className="w-[56px] h-[56px] overflow-hidden mb-6 flex-shrink-0" style={{ boxShadow: isA ? '0 10px 24px rgba(139,90,43,0.35)' : '0 4px 14px rgba(139,90,43,0.18)', transition: 'all 0.35s ease', transform: isA ? 'scale(1.08)' : 'scale(1)' }}>
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

      <WoodenDivider />

      {/* ── Process ── */}
      <section id="arbeitsweise" className="bg-white py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <SectionBadge text="Ablauf" variant="dark" className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight uppercase">So arbeiten wir</h2>
            <p className="text-[#111]/45 text-sm mt-3">Von der Planung bis zum Reporting: ideenreich, professionell und zuverlässig.</p>
          </div>
          <div className="flex gap-2 mb-0 overflow-x-auto pb-1 -mx-1 px-1">
            {STEPS.map((step, i) => (
              <button key={i} onClick={() => setActiveStep(i)} className={`flex items-center gap-2 px-3 md:px-4 py-2.5 font-bold text-xs transition-all whitespace-nowrap cursor-pointer flex-shrink-0 ${activeStep === i ? 'bg-white ring-2 ring-[#C8D400] text-[#C8D400]' : 'bg-white/60 hover:bg-white ring-1 ring-gray-200 hover:ring-[#C8D400]/50 text-gray-600'}`} style={{ borderRadius: 0 }}>
                <span className="text-[10px] opacity-60">{step.num}</span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>
          <div key={activeStep} className="border border-[#111]/10 bg-white p-6 md:p-10 relative overflow-hidden mt-0 border-t-0" style={{ animation: 'fadeIn 0.35s ease-out' }}>
            <div className="absolute top-0 left-0 text-7xl md:text-9xl font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(200,212,0,0.07)', lineHeight: 1 }}>{STEPS[activeStep].num}</div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#111] font-black text-xs uppercase tracking-widest">Schritt {STEPS[activeStep].num}</div>
                <div className="px-3 py-1 bg-[#C8D400] text-[#111] text-xs font-black">{STEPS[activeStep].time}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#111] mb-3 uppercase">{STEPS[activeStep].title}</h3>
              <p className="text-[#111]/65 text-sm md:text-base leading-relaxed">{STEPS[activeStep].desc}</p>
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
