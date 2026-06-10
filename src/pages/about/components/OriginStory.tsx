import { useEffect, useRef, useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const tickerStats = [
  { icon: 'ri-briefcase-line', value: '>500', label: 'Projekte' },
  { icon: 'ri-user-line', value: '>1,35 Mio.', label: 'Einsätze' },
  { icon: 'ri-store-2-line', value: '>100.000', label: 'POS-Umsetzungen' },
  { icon: 'ri-calendar-check-line', value: '2007', label: 'Gegründet' },
  { icon: 'ri-team-line', value: '>2.000', label: 'Talente im Pool' },
  { icon: 'ri-global-line', value: 'DACH', label: 'Marktabdeckung' },
  { icon: 'ri-bar-chart-2-line', value: '>2 Mrd. €', label: 'Umsatz generiert' },
  { icon: 'ri-medal-line', value: '17+', label: 'Jahre Erfahrung' },
];

export default function OriginStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">

      {/* ── MAIN CONTENT ── */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Section label */}
          <div
            className={`flex items-center justify-center mb-10 md:mb-16 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <SectionBadge text="Über uns" variant="dark" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Left: Image with stat overlay */}
            <div
              className={`relative transition-all duration-900 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/5]">
                <img
                  src="https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg"
                  alt="Sonic Sales Promotion Team"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#C8D400] text-black px-3 md:px-4 py-1.5 md:py-2 text-xs font-black uppercase tracking-widest">
                  Seit 2007
                </div>
              </div>

              {/* Floating stat card */}
              <div className="mt-4 md:mt-0 md:absolute md:-bottom-8 md:-right-6 bg-white border border-black/8 p-4 md:p-6 md:w-56" style={{ boxShadow: '6px 6px 18px rgba(0,0,0,0.10), -3px -3px 10px rgba(255,255,255,0.9), inset 0 1px 0 rgba(255,255,255,0.95)' }}>
                <div className="text-4xl md:text-5xl font-black text-sonic-dark leading-none mb-1 md:mb-2">17+</div>
                <div className="text-xs font-bold text-black/40 uppercase tracking-wider">
                  Jahre Markenerfolg im DACH-Raum
                </div>
                <div className="mt-3 md:mt-4 h-1 w-12 bg-[#C8D400]" />
              </div>
            </div>

            {/* Right: Text content */}
            <div
              className={`pt-0 md:pt-4 lg:pt-12 transition-all duration-900 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-sonic-dark mb-6 md:mb-8 leading-tight tracking-tight">
                MARKEN IM HERZEN.<br />ERFOLG IM FOKUS.
              </h2>

              <div className="space-y-4 md:space-y-5 text-sm md:text-[15px] leading-relaxed text-black/60 mb-8 md:mb-10">
                <p>
                  Wir sind eine unabhängige Marketing- und Sales-Agentur mit Schwerpunkten rund um die Konzeption, Kreation und Koordination von Kundenprojekten – ob am Point of Sale, im Studio, auf Messen oder Events in den Bereichen B2B, B2B2C und D2C.
                </p>
                <p>
                  Seit 2007 leben wir Marken und machen sie erfolgreich – unabhängig von Größe, Branche und Zielgruppe. Dabei arbeiten wir stets geprägt von den Werten <strong className="text-black">Mensch, Motivation, Daten und Werkzeug</strong>. Wir glauben daran, dass der Mensch den Unterschied macht, und leben eine familiäre, persönliche Firmenkultur.
                </p>
                <p>
                  Unsere Strategie: Ärmel hoch und anpacken! Echtes Handwerk – von Anfang bis Ende mit 100&nbsp;% Leidenschaft und vollem Einsatz für die Ziele unserer Kunden.
                </p>
              </div>

              <a
                href="/losungen"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-sonic-dark text-white font-black hover:bg-sonic-lime hover:text-sonic-dark transition-all duration-300 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
              >
                Unsere Lösungen entdecken
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── WOOD TICKER STRIP — after Marken im Herzen ── */}
      <div className="relative overflow-hidden border-y-2 border-[#C8D400]/20 py-4" aria-hidden="true">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=warm%20chestnut%20brown%20hardwood%20plank%20with%20clearly%20visible%20natural%20wood%20grain%20texture%20rich%20amber%20brown%20tone%20deep%20grain%20lines%20carved%20oak%20walnut%20surface%20close%20up%20macro%20photography%20warm%20brown%20color%20natural%20material%20visible%20grain%20depth%20dark%20rich%20finish%20consistent%20with%20briefcase%20star%20wooden%20icons&width=1920&height=100&seq=about-origin-wood-ticker-v1&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sonic-dark/40" />
        </div>
        <div className="relative z-10 overflow-hidden">
          <div className="flex items-center gap-8 animate-scroll-optimized whitespace-nowrap py-1">
            <div className="flex items-center gap-2 px-4">
              <div className="w-2 h-2 bg-[#C8D400] animate-pulse-slow" />
              <span className="text-xs font-sans tabular-nums text-white uppercase tracking-wider font-black drop-shadow-md">SONIC</span>
            </div>
            {tickerStats.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[#C8D400] drop-shadow-md">•</span>
                <i className={`${s.icon} text-[#C8D400] drop-shadow-md`} />
                <span className="text-sm font-sans tabular-nums font-black text-white drop-shadow-md">{s.value}</span>
                <span className="text-xs text-white/90 drop-shadow-md font-bold">{s.label}</span>
              </div>
            ))}
            <span className="text-[#C8D400] drop-shadow-md">•</span>
            <span className="text-xs text-white/80 drop-shadow-md font-bold">Seit 2007 für deine Marke</span>
            <span className="text-[#C8D400] drop-shadow-md">•</span>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-2 px-4">
              <div className="w-2 h-2 bg-[#C8D400] animate-pulse-slow" />
              <span className="text-xs font-sans tabular-nums text-white uppercase tracking-wider font-black drop-shadow-md">SONIC</span>
            </div>
            {tickerStats.map((s, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2">
                <span className="text-[#C8D400] drop-shadow-md">•</span>
                <i className={`${s.icon} text-[#C8D400] drop-shadow-md`} />
                <span className="text-sm font-sans tabular-nums font-black text-white drop-shadow-md">{s.value}</span>
                <span className="text-xs text-white/90 drop-shadow-md font-bold">{s.label}</span>
              </div>
            ))}
            <span className="text-[#C8D400] drop-shadow-md">•</span>
            <span className="text-xs text-white/80 drop-shadow-md font-bold">Seit 2007 für deine Marke</span>
            <span className="text-[#C8D400] drop-shadow-md">•</span>
          </div>
        </div>
      </div>

      {/* ── ÜBER DIE SONIC GROUP STRIP ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div
          className={`border border-black/8 overflow-hidden transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="grid md:grid-cols-[1fr_auto] items-stretch">
            <div className="p-8 md:p-12 bg-[#f5f5f5]">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-sonic-lime mb-4">Über die Sonic Group</div>
              <h3 className="text-2xl md:text-3xl font-black text-sonic-dark mb-4 leading-tight tracking-tight">
                MARKEN IM HERZEN,<br />ERFOLG ALS ZIEL
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-black/55 max-w-xl">
                Als unabhängige Sales- und Marketing-Agentur mit Schwerpunkten rund um Personalprojekte sowie mit eigener Software verbinden wir seit 2007 Kreativität mit Performance, Daten mit Menschen und Marken mit Konsumenten. Für deinen messbaren Markenerfolg.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-1 border-t md:border-t-0 md:border-l border-black/8 divide-x md:divide-x-0 md:divide-y divide-black/8">
              {[
                { value: '>500', label: 'Projekte' },
                { value: '>1,35 Mio.', label: 'Einsätze' },
                { value: '>300', label: 'Mitarbeitende' },
              ].map((s) => (
                <div key={s.label} className="p-6 md:p-8 text-center bg-white">
                  <div className="text-2xl md:text-3xl font-black text-sonic-dark leading-none mb-1">{s.value}</div>
                  <div className="text-xs font-bold text-black/35 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
