import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const caseStudies = [
  {
    id: 'garmin',
    brand: 'Garmin',
    campaignType: 'Retail Activation & POS Full-Service',
    headline: 'Sportlich nach vorn',
    subline: '#beatyesterday: Seit 2021 — Retail-Partnerschaft im DACH-Raum',
    metric: '+116%',
    metricLabel: 'Umsatzwachstum 2021–2024',
    since: '2021',
    tag: 'POS Full-Service',
    modules: '5 Module',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
  },
  {
    id: 'groupe-seb',
    brand: 'Groupe SEB',
    campaignType: 'Multi-Brand Field Force & Live-Video',
    headline: 'Partnerschaft mit Performance',
    subline: 'Tefal, Rowenta, Krups, WMF — Multi-Brand-Aktivierung seit 2019',
    metric: '+130%',
    metricLabel: 'Umsatzwachstum pro Einsatztag 2019–2024',
    since: '2019',
    tag: 'Multi-Brand',
    modules: '6 Module',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
  },
  {
    id: 'philips',
    brand: 'Philips',
    campaignType: 'Field Force, Training & Digital',
    headline: 'Erfolgreichster europäischer Markt',
    subline: 'End-to-End von Schulung über Field Force bis Digital — seit 2021',
    metric: '+54%',
    metricLabel: 'Absatzwachstum pro Einsatztag 2021–2024',
    since: '2021',
    tag: 'Field Force',
    modules: '6 Module',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg',
  },
  {
    id: 'avoury',
    brand: 'Avoury',
    campaignType: 'Field Force, Recruiting & Datenoptimierung',
    headline: 'Heißes Wachstum mit Tee',
    subline: 'Avoury One by Melitta — datenbasiertes Matching für maximalen Absatz',
    metric: '+1.187%',
    metricLabel: 'Umsatzwachstum pro Einsatztag 2021–2023',
    since: '2021',
    tag: 'Datenoptimierung',
    modules: '5 Module',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
  },
];

export default function CaseStudiesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#111] relative overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C8D400 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <SectionBadge text="Alle Fallbeispiele" variant="light" className="mb-6" />
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-none mb-4">
            ECHTE MARKEN.<br />
            <span className="text-[#C8D400]">ECHTE ERGEBNISSE.</span>
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Vier Partnerschaften. Messbare Wachstumskurven. Datenbasierte Optimierung — Jahr für Jahr.
          </p>
        </div>

        {/* Grid — 2×2 pictorial cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="relative overflow-hidden cursor-pointer group"
              style={{ borderRadius: 0, height: '460px' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Full-bleed photo */}
              <img
                src={study.image}
                alt={study.brand}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}
              />

              {/* Gradient overlay — always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/15" />

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-[#C8D400]/8 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />

              {/* Bottom lime accent bar on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#C8D400] transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />
              {/* Left edge accent */}
              <div className={`absolute top-0 left-0 bottom-0 w-0.5 bg-[#C8D400] transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />

              {/* Since badge — moved below logo */}
              <div className="absolute top-4 right-4 z-10">
                <div className="inline-flex items-center gap-2 bg-black/55 border border-white/15 px-3 py-1.5" style={{ borderRadius: 0 }}>
                  <span className="text-[#C8D400] font-black text-sm font-sans tabular-nums">{study.metric}</span>
                  <span className="text-white/60 text-[10px] font-bold truncate max-w-[120px]">{study.metricLabel}</span>
                </div>
              </div>

              {/* Tag chip top-right — moved to right */}
              <div className="absolute top-16 right-4 z-10">
                <span className="inline-block bg-[#C8D400] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1" style={{ borderRadius: 0 }}>
                  {study.tag}
                </span>
              </div>

              {/* Top chip — left side logo + brand */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5">
                <div className="h-8 w-8 bg-white/10 flex items-center justify-center p-1" style={{ borderRadius: 0 }}>
                  <img
                    src={study.id === 'garmin' ? 'https://cdn.brandfetch.io/garmin.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' :
                         study.id === 'groupe-seb' ? 'https://cdn.brandfetch.io/groupeseb.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' :
                         study.id === 'philips' ? 'https://cdn.brandfetch.io/philips.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' :
                         'https://cdn.brandfetch.io/melitta.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX'}
                    alt={study.brand}
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="text-white font-black text-xs uppercase tracking-wide">{study.brand}</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-black text-xl leading-tight mb-1">{study.headline}</h3>
                <p className={`text-white/55 text-xs font-bold uppercase tracking-wide mb-3 transition-all duration-400 ${hoveredCard === index ? 'opacity-100' : 'opacity-70'}`}>
                  {study.campaignType} · {study.modules}
                </p>
                <p className={`text-white/70 text-sm leading-relaxed mb-4 transition-all duration-500 ${hoveredCard === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {study.subline}
                </p>

                {/* Metric pill */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2" style={{ borderRadius: 0 }}>
                    <span className="text-[#C8D400] font-black text-lg font-sans tabular-nums">{study.metric}</span>
                    <span className="text-white/50 text-[10px] font-bold">seit {study.since}</span>
                  </div>
                  <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${hoveredCard === index ? 'bg-[#C8D400]' : 'bg-white/10 border border-white/20'}`} style={{ borderRadius: 0 }}>
                    <i className="ri-arrow-right-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}