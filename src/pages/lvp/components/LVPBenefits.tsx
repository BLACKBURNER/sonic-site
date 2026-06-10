import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const benefits = [
  {
    number: '01',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20euro%20coin%20currency%20money%20savings%20cost%20efficiency%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20euro%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-euro-lvp-benefit-01&orientation=squarish',
    title: 'KOSTENEFFIZIENZ',
    description: 'Bis zu 70% günstiger als traditionelle In-Store Promotions bei gleicher oder besserer Reichweite.',
    tags: ['Kostensenkung', 'ROI', 'Effizienz'],
  },
  {
    number: '02',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20globe%20world%20map%20reach%20scale%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20globe%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-globe-lvp-benefit-02&orientation=squarish',
    title: 'MAXIMALE REICHWEITE',
    description: 'Erreichen Sie tausende potenzielle Kunden gleichzeitig – unabhängig vom Standort.',
    tags: ['Reichweite', 'Skalierbar', 'Digital'],
  },
  {
    number: '03',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20bar%20chart%20analytics%20results%20measurement%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20chart%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-chart-lvp-benefit-03&orientation=squarish',
    title: 'MESSBARE ERGEBNISSE',
    description: 'Echtzeit-Analytics zu Viewern, Engagement und Conversions für datenbasierte Optimierung.',
    tags: ['Analytics', 'Tracking', 'Insights'],
  },
  {
    number: '04',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20clock%20hourglass%20time%20saving%20efficiency%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20clock%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-clock-lvp-benefit-04&orientation=squarish',
    title: 'ZEITERSPARNIS',
    description: 'Keine aufwändige Logistik oder Reiseplanung – alles aus unserem professionellen Studio.',
    tags: ['Effizienz', 'Remote', 'Schnell'],
  },
  {
    number: '05',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20speech%20bubble%20chat%20conversation%20interactive%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20chat%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-chat-lvp-benefit-05&orientation=squarish',
    title: 'INTERAKTIVITÄT',
    description: 'Direkter Dialog mit Kunden durch Live-Chat, Q&A und Produktvorführungen in Echtzeit.',
    tags: ['Engagement', 'Live', 'Interaktiv'],
  },
  {
    number: '06',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20recycle%20arrows%20loop%20reuse%20content%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20recycle%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-recycle-lvp-benefit-06&orientation=squarish',
    title: 'WIEDERVERWENDBAR',
    description: 'Aufgezeichnete Sessions können als On-Demand Content weiterverwendet werden.',
    tags: ['Content', 'Recycling', 'Mehrwert'],
  },
];

export default function LVPBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <SectionBadge text="Ihre Vorteile" variant="dark" className="mb-5 md:mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] mb-4 leading-tight tracking-tight">
            WARUM LIVE VIDEO{' '}
            <span className="relative inline-block">
              PROMOTION?
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#C8D400]/25 -z-10" />
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Die Zukunft der Produktpromotion — effizient, messbar und skalierbar
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const isHov = hoveredIndex === index;
            return (
              <div
                key={index}
                className="relative overflow-hidden border border-gray-100 p-6 md:p-8 transition-all duration-300 cursor-default group"
                style={{
                  transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHov ? '0 16px 40px rgba(0,0,0,0.07), 0 0 0 1px rgba(200,212,0,0.25)' : '0 1px 4px rgba(0,0,0,0.04)',
                  background: isHov ? '#fafaf7' : '#fff',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Top lime bar */}
                <div
                  className="absolute top-0 left-0 right-0 transition-all duration-300"
                  style={{
                    height: isHov ? '3px' : '2px',
                    background: isHov ? '#C8D400' : 'rgba(200,212,0,0.12)',
                    boxShadow: isHov ? '0 0 12px rgba(200,212,0,0.35)' : 'none',
                  }}
                />
                {/* Left edge */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-0.5 transition-all duration-300"
                  style={{ background: isHov ? '#C8D400' : 'transparent' }}
                />
                {/* Corner brackets */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r transition-all duration-300" style={{ borderColor: isHov ? 'rgba(200,212,0,0.5)' : 'transparent' }} />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r transition-all duration-300" style={{ borderColor: isHov ? 'rgba(200,212,0,0.5)' : 'transparent' }} />

                {/* Number watermark */}
                <div
                  className="absolute top-3 left-4 text-6xl font-black leading-none pointer-events-none select-none transition-colors duration-300"
                  style={{ color: isHov ? 'rgba(200,212,0,0.10)' : 'rgba(0,0,0,0.03)' }}
                  aria-hidden="true"
                >
                  {benefit.number}
                </div>

                {/* Wooden Icon — top right */}
                <div className="absolute top-5 right-5 md:top-6 md:right-6">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 overflow-hidden transition-all duration-300"
                    style={{
                      boxShadow: isHov
                        ? '0 6px 18px rgba(139,90,43,0.4), 0 0 10px rgba(200,212,0,0.15)'
                        : '0 2px 8px rgba(139,90,43,0.18)',
                      transform: isHov ? 'scale(1.08) rotate(-3deg)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={benefit.woodIcon}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-10 md:mt-12">
                  <h3 className="text-base md:text-lg font-black mb-3 text-[#111] leading-tight tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 md:mb-5">
                    {benefit.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {benefit.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wide transition-all duration-300"
                        style={{
                          background: isHov ? 'rgba(200,212,0,0.12)' : 'rgba(0,0,0,0.04)',
                          color: isHov ? '#8a9800' : '#9CA3AF',
                          border: `1px solid ${isHov ? 'rgba(200,212,0,0.25)' : 'rgba(0,0,0,0.06)'}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}