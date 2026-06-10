import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

export default function PerksAndBenefits() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const salesPerks = [
    { icon: 'ri-money-euro-circle-line', title: 'Wettbewerbsfähiges Gehalt + Provision', description: 'Marktführende Vergütungsstruktur' },
    { icon: 'ri-car-line', title: 'Firmenwagen', description: 'Für Außendienst-Positionen' },
    { icon: 'ri-smartphone-line', title: 'Neuestes Equipment', description: 'iPhone, iPad, Laptop – alles gestellt' },
    { icon: 'ri-graduation-cap-line', title: 'Kontinuierliche Schulungen', description: 'Produktwissen und Verkaufstraining' },
    { icon: 'ri-calendar-check-line', title: 'Flexible Einsatzplanung', description: 'Work-Life-Balance wird gelebt' },
    { icon: 'ri-trophy-line', title: 'Performance-Boni', description: 'Quartals- und Jahresziele mit Incentives' },
    { icon: 'ri-team-line', title: 'Team-Events', description: 'Regelmäßige Feiern und Ausflüge' },
    { icon: 'ri-arrow-up-line', title: 'Karriere-Entwicklung', description: 'Klarer Weg in die Führung' },
    { icon: 'ri-heart-pulse-line', title: 'Gesundheitsleistungen', description: 'Umfassende Absicherung' },
    { icon: 'ri-time-line', title: 'Bezahlter Urlaub', description: 'Großzügige Urlaubsregelung' },
  ];

  const staffPerks = [
    { icon: 'ri-money-euro-circle-line', title: 'Wettbewerbsfähiges Gehalt', description: 'Über Marktdurchschnitt' },
    { icon: 'ri-home-office-line', title: 'Hybrid-Arbeit', description: 'Office + Remote-Flexibilität' },
    { icon: 'ri-smartphone-line', title: 'Neuestes Equipment', description: 'MacBook und Zubehör gestellt' },
    { icon: 'ri-graduation-cap-line', title: 'Weiterbildung', description: 'Kurse, Konferenzen, Zertifikate' },
    { icon: 'ri-calendar-check-line', title: 'Flexible Arbeitszeiten', description: 'Kernzeiten mit Spielraum' },
    { icon: 'ri-team-line', title: 'Team-Events', description: 'Monatliche Aktivitäten' },
    { icon: 'ri-heart-pulse-line', title: 'Gesundheitsleistungen', description: 'Umfassende Absicherung' },
    { icon: 'ri-time-line', title: 'Bezahlter Urlaub', description: 'Großzügige Urlaubsregelung' },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8D400]/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <SectionBadge text="Benefits &amp; Mehr" variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-none mb-1 uppercase">
            DEINE VORTEILE
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-none mb-5 uppercase">
            BEI SONIC.
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8">
            Wir investieren in unsere Menschen — denn sie sind unser größtes Kapital.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#111] px-6 py-3">
            <i className="ri-trophy-line text-xl text-[#C8D400]"></i>
            <span className="font-bold text-white text-sm">Ø 5,15 Jahre Betriebszugehörigkeit vs. 1,8 Jahre Branchendurchschnitt</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sales Staff */}
          <div
            className="relative overflow-hidden transition-all duration-300"
            style={{ borderRadius: 0 }}
            onMouseEnter={() => setHoveredSection(0)}
            onMouseLeave={() => setHoveredSection(null)}
            role="region"
            aria-label="Sales Staff Benefits"
          >
            <div
              className="relative p-8 transition-all duration-300"
              style={{
                borderRadius: 0,
                background: hoveredSection === 0 ? 'linear-gradient(145deg, #1a1a1a, #111)' : 'white',
                boxShadow: hoveredSection === 0 ? '0 28px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(200,212,0,0.3)' : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 transition-all duration-300" style={{ height: hoveredSection === 0 ? '3px' : '2px', background: hoveredSection === 0 ? '#C8D400' : 'rgba(200,212,0,0.2)', boxShadow: hoveredSection === 0 ? '0 0 20px rgba(200,212,0,0.6)' : 'none' }} />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0" style={{ borderRadius: 0 }}>
                  <img src="https://readdy.ai/api/search-image?query=wooden%20star%20person%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-sales-chestnut&orientation=squarish" alt="Sales" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black transition-colors duration-300 uppercase" style={{ color: hoveredSection === 0 ? '#C8D400' : '#111' }}>Sales Staff</h3>
              </div>
              <div className="space-y-3">
                {salesPerks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 transition-all duration-300" style={{ background: hoveredSection === 0 ? 'rgba(255,255,255,0.05)' : '#f9f9f7', borderRadius: 0 }}>
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center" style={{ background: 'rgba(200,212,0,0.15)', borderRadius: 0 }}>
                      <i className={`${perk.icon} text-lg text-[#C8D400]`}></i>
                    </div>
                    <div>
                      <h4 className="font-black text-sm mb-0.5 transition-colors duration-300" style={{ color: hoveredSection === 0 ? '#fff' : '#111' }}>{perk.title}</h4>
                      <p className="text-xs transition-colors duration-300" style={{ color: hoveredSection === 0 ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Staff */}
          <div
            className="relative overflow-hidden transition-all duration-300"
            style={{ borderRadius: 0 }}
            onMouseEnter={() => setHoveredSection(1)}
            onMouseLeave={() => setHoveredSection(null)}
            role="region"
            aria-label="Interne Staff Benefits"
          >
            <div
              className="relative p-8 transition-all duration-300"
              style={{
                borderRadius: 0,
                background: hoveredSection === 1 ? 'linear-gradient(145deg, #1a1a1a, #111)' : 'white',
                boxShadow: hoveredSection === 1 ? '0 28px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(200,212,0,0.3)' : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 transition-all duration-300" style={{ height: hoveredSection === 1 ? '3px' : '2px', background: hoveredSection === 1 ? '#C8D400' : 'rgba(200,212,0,0.2)', boxShadow: hoveredSection === 1 ? '0 0 20px rgba(200,212,0,0.6)' : 'none' }} />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0" style={{ borderRadius: 0 }}>
                  <img src="https://readdy.ai/api/search-image?query=wooden%20briefcase%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-briefcase-chestnut&orientation=squarish" alt="Staff" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black transition-colors duration-300 uppercase" style={{ color: hoveredSection === 1 ? '#C8D400' : '#111' }}>Interne Staff</h3>
              </div>
              <div className="space-y-3">
                {staffPerks.map((perk, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 transition-all duration-300" style={{ background: hoveredSection === 1 ? 'rgba(255,255,255,0.05)' : '#f9f9f7', borderRadius: 0 }}>
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center" style={{ background: 'rgba(200,212,0,0.15)', borderRadius: 0 }}>
                      <i className={`${perk.icon} text-lg text-[#C8D400]`}></i>
                    </div>
                    <div>
                      <h4 className="font-black text-sm mb-0.5 transition-colors duration-300" style={{ color: hoveredSection === 1 ? '#fff' : '#111' }}>{perk.title}</h4>
                      <p className="text-xs transition-colors duration-300" style={{ color: hoveredSection === 1 ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
