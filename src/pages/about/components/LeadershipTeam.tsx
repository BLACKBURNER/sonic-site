import { useEffect, useRef, useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const teamProfiles = [
  {
    background: 'Ex-Europa-CMO',
    detail: 'Consumer-Electronics-Marke',
    icon: 'ri-award-line',
    color: '#C8D400',
  },
  {
    background: 'Field-Force-Projektmanager',
    detail: 'Erfahrene Führungskräfte',
    icon: 'ri-team-line',
    color: '#1a1a1a',
  },
  {
    background: 'Kreative & Strategen',
    detail: 'Marken- und Agenturerfahrung',
    icon: 'ri-paint-brush-line',
    color: '#C8D400',
  },
  {
    background: 'Telco-Experten',
    detail: 'Hintergrund & Netzwerk',
    icon: 'ri-phone-line',
    color: '#1a1a1a',
  },
  {
    background: 'Programmierer',
    detail: 'Liebe zu Performance-Daten',
    icon: 'ri-code-s-slash-line',
    color: '#C8D400',
  },
  {
    background: 'Digital Natives',
    detail: 'Digitalprofis & E-Commerce',
    icon: 'ri-smartphone-line',
    color: '#1a1a1a',
  },
  {
    background: 'Eventprofis & Messebauer',
    detail: 'Live-Erlebnisse aus einer Hand',
    icon: 'ri-building-4-line',
    color: '#C8D400',
  },
  {
    background: 'Logistikprofis',
    detail: 'Warehouse & Last-Mile',
    icon: 'ri-truck-line',
    color: '#1a1a1a',
  },
];

const teamStats = [
  { value: '5,15', unit: 'Jahre', label: 'Ø Betriebszugehörigkeit' },
  { value: 'Dual', unit: '', label: 'Studium – Ausbildungspartner' },
  { value: 'B2B + D2C', unit: '', label: 'Erfahrung aus Kunden- & Agenturseite' },
];

export default function LeadershipTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % teamStats.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── HEADER ── */}
        <div
          className={`mb-14 md:mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center justify-center mb-6">
            <SectionBadge text="Das Team" variant="dark" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-sonic-dark leading-tight tracking-tight text-center mb-4">
            FACHLICHE UND<br />
            MENSCHLICHE VIELFALT.
          </h2>
          <p className="text-center text-black/40 text-sm md:text-base max-w-lg mx-auto">
            Bei Sonic treffen Backgrounds aufeinander, die sich perfekt ergänzen.
          </p>
        </div>

        {/* ── TEAM PHOTO + ROTATING STAT ── */}
        <div
          className={`grid lg:grid-cols-[1.3fr_1fr] gap-0 mb-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Photo */}
          <div className="relative overflow-hidden min-h-[300px] lg:min-h-[480px]">
            <img
              src="https://www.sonic-group.de/wp-content/uploads/2023/06/EVENT_NEU.jpg"
              alt="Das Sonic Team — Vielfältige Fachkräfte aus unterschiedlichen Branchen"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/15" />
            {/* Corner tag */}
            <div className="absolute top-5 left-5 bg-[#C8D400] text-black px-4 py-1.5 text-xs font-black uppercase tracking-widest">
              Das Sonic Team
            </div>
          </div>

          {/* Right panel: animated stat cycle + description */}
          <div className="bg-sonic-dark p-8 md:p-12 flex flex-col justify-between" style={{ boxShadow: 'inset 4px 4px 12px rgba(0,0,0,0.45), inset -2px -2px 8px rgba(255,255,255,0.04)' }}>
            {/* Rotating stat */}
            <div className="flex-1 flex flex-col justify-center min-h-[140px]">
              <div
                key={activeStatIndex}
                style={{ animation: 'fadeSlideIn 0.5s ease-out' }}
              >
                <div className="text-[#C8D400] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  {activeStatIndex + 1} / {teamStats.length}
                </div>
                <div className="text-5xl md:text-7xl font-black text-white leading-none mb-2">
                  {teamStats[activeStatIndex].value}
                  {teamStats[activeStatIndex].unit && (
                    <span className="text-2xl md:text-3xl text-[#C8D400] ml-2 font-black">{teamStats[activeStatIndex].unit}</span>
                  )}
                </div>
                <div className="text-white/50 text-sm font-bold uppercase tracking-wider mt-3">
                  {teamStats[activeStatIndex].label}
                </div>
              </div>

              {/* Stat progress dots */}
              <div className="flex gap-2 mt-8">
                {teamStats.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStatIndex(i)}
                    aria-label={`Statistik ${i + 1} von ${teamStats.length}`}
                    aria-pressed={activeStatIndex === i}
                    className={`transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                      activeStatIndex === i ? 'w-8 h-2 bg-[#C8D400]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                    style={{ borderRadius: 0 }}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="text-white/55 text-sm leading-relaxed">
                Vielfalt zeichnet uns aus: Bei Sonic arbeiten Talente mit Berufserfahrungen, die sich perfekt ergänzen.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bei uns sprichst du mit einem Ex-Europa-CMO einer Consumer-Electronics-Marke, erfahrenen Field-Force-Projektmanagern, Kreativen mit Marken- und Agenturerfahrung, Leuten mit Telco-Background, Programmieren mit Liebe zu Performance-Daten, Digital Natives und Digitalprofis, Eventprofis, Messebauern, Logistikprofis und vielen mehr. Wir verstehen deine Herausforderungen und Ziele, weil wir sie sowohl aus Kunden- und Agenturseite kennen.
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className={`text-center mt-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-black/35 text-xs uppercase tracking-widest font-black mb-6">Werde Teil unseres Teams</p>
          <a
            href="/careers"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sonic-dark text-white font-black hover:bg-sonic-lime hover:text-sonic-dark transition-all duration-300 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
          >
            Offene Stellen ansehen
            <i className="ri-arrow-right-line" />
          </a>
        </div>

      </div>
    </section>
  );
}
