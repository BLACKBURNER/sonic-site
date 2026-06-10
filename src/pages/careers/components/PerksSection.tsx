import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

type Variant = 'sales' | 'staff';

interface Props {
  variant: Variant;
}

const salesPerks = [
  { icon: 'ri-building-4-line', title: 'Modernes Büro in Krefeld', description: 'Campus Fichtenhain 46 – voll ausgestattet, inspirierend' },
  { icon: 'ri-arrow-up-line', title: 'Klare Karrierepfade', description: 'Junior → Senior → Lead → Management – du weißt, wo du hingehst' },
  { icon: 'ri-graduation-cap-line', title: 'Internes Mentoring & Training', description: 'Kontinuierliche Weiterbildung durch Mentoren & Workshops' },
  { icon: 'ri-home-office-line', title: 'Hybrides Arbeiten', description: 'Flexible Kombination aus Büro und Remote' },
  { icon: 'ri-car-line', title: 'Dienstwagen für Field Roles', description: 'iPhone, iPad & Laptop – alles gestellt' },
  { icon: 'ri-trophy-line', title: 'Quartalsboni & Performance-Incentives', description: 'Quartals- und Jahreszahlungen on top' },
  { icon: 'ri-calendar-event-line', title: 'Dream Team Events', description: 'Regelmäßige Feiern, Ausflüge & Firmenevents' },
  { icon: 'ri-heart-pulse-line', title: 'Gesundheitsleistungen', description: 'Umfassendes betriebliches Gesundheitspaket' },
  { icon: 'ri-time-line', title: 'Großzügiger Urlaub', description: 'Faire Urlaubsregelung mit Work-Life-Balance-Fokus' },
  { icon: 'ri-team-line', title: 'Echte Community', description: 'Ø 5,15 Jahre Betriebszugehörigkeit – kein Drehtür-Unternehmen' },
];

const staffPerks = [
  { icon: 'ri-calendar-check-line', title: 'Flexible Einsatzplanung', description: 'Du bestimmst, wann und wie viel – wirklich' },
  { icon: 'ri-map-pin-2-line', title: 'Standortunabhängig', description: 'Einsätze in ganz DACH – du wählst deine Region' },
  { icon: 'ri-money-euro-circle-line', title: 'Attraktive Stundensätze', description: 'Steigende Raten bei nachgewiesener Performance' },
  { icon: 'ri-trophy-line', title: 'Incentive-Programme', description: 'Monatliche Boni, Prämien & Sachpreise für Top-Performer' },
  { icon: 'ri-graduation-cap-line', title: 'Produktschulungen & Zertifizierungen', description: 'Bezahlte Trainings für 150+ Marken' },
  { icon: 'ri-store-2-line', title: 'Zugang zum Sonic-Netzwerk', description: 'Garmin, Samsung, Dyson, Bose – Premium-Brands, echte Produkte' },
  { icon: 'ri-rocket-line', title: 'Wachstumschancen', description: 'Entwicklung zum Team Lead oder Account Manager' },
  { icon: 'ri-smartphone-line', title: 'Modernes Arbeitsequipment', description: 'Alles was du brauchst wird gestellt' },
];

export default function PerksSection({ variant }: Props) {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const perks = variant === 'sales' ? salesPerks : staffPerks;

  const titleInternal = variant === 'sales'
    ? { tag: 'Warum Sonic Sales', headline: 'DEINE VORTEILE ALS', highlight: 'INTERNES TEAM' }
    : { tag: 'Warum Sonic Staff', headline: 'DEINE VORTEILE ALS', highlight: 'FIELD PROMOTER' };

  const badge = variant === 'sales'
    ? 'Ø 5,15 Jahre Betriebszugehörigkeit – 3× Branchendurchschnitt'
    : '150+ Marken · Flexibel · Top-Incentives';

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <SectionBadge text={titleInternal.tag} variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] mb-3">
            {titleInternal.headline}{' '}
            <span className="relative inline-block">
              {titleInternal.highlight}
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#C8D400]/30 -z-10" style={{ borderRadius: 0 }}></span>
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Wir investieren in unsere Menschen – weil sie unser wichtigstes Kapital sind.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#111] px-6 py-3">
            <i className="ri-trophy-line text-xl text-[#C8D400]"></i>
            <span className="font-bold text-white text-sm">{badge}</span>
          </div>
        </div>

        <div
          className="relative overflow-hidden transition-all duration-300"
          style={{ borderRadius: 0 }}
          onMouseEnter={() => setHoveredSection(0)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div
            className="relative p-8 transition-all duration-300"
            style={{
              borderRadius: 0,
              background: hoveredSection === 0 ? 'linear-gradient(145deg, #1a1a1a, #111)' : 'white',
              boxShadow:
                hoveredSection === 0
                  ? '0 28px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(200,212,0,0.3)'
                  : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 transition-all duration-300"
              style={{
                height: hoveredSection === 0 ? '3px' : '2px',
                background: hoveredSection === 0 ? '#C8D400' : 'rgba(200,212,0,0.2)',
                boxShadow: hoveredSection === 0 ? '0 0 20px rgba(200,212,0,0.6)' : 'none',
                borderRadius: 0,
              }}
            />
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${variant === 'sales' ? '5' : '4'} gap-3`}>
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 transition-all duration-300"
                  style={{
                    background: hoveredSection === 0 ? 'rgba(255,255,255,0.05)' : '#f9f9f7',
                    borderRadius: 0,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                    style={{ background: 'rgba(200,212,0,0.15)', borderRadius: 0 }}
                  >
                    <i className={`${perk.icon} text-lg text-[#C8D400]`}></i>
                  </div>
                  <div>
                    <h4
                      className="font-black text-sm mb-0.5 transition-colors duration-300"
                      style={{ color: hoveredSection === 0 ? '#fff' : '#111' }}
                    >
                      {perk.title}
                    </h4>
                    <p
                      className="text-xs transition-colors duration-300"
                      style={{ color: hoveredSection === 0 ? 'rgba(255,255,255,0.6)' : '#6B7280' }}
                    >
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
