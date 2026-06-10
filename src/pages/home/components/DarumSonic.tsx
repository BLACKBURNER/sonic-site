import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tag from '@/components/base/Tag';

interface Card {
  number: string;
  heading: string;
  description: string;
  cta: string;
  link: string;
  tags: string[];
  woodIcon: string;
}

const cards: Card[] = [
  {
    number: '01',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20data%20analytics%20brain%20neural%20network%20icon%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-carved-brain-darum-v2&orientation=squarish',
    heading: 'DATENBASIERTE VORHERSAGEN',
    description:
      'Wir unterstützen dich auf Basis unserer Daten zu Märkten und Mitarbeiter-Performance dabei, belastbare Absatz-Forecasts zu treffen.',
    cta: 'MEHR DAZU',
    link: '/srt',
    tags: ['Marktdaten', 'Forecasting', 'Performance'],
  },
  {
    number: '02',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20team%20people%20group%20talent%20pool%20icon%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-carved-talent-darum-v2&orientation=squarish',
    heading: '2.000 TALENTE IM POOL',
    description:
      'Deine Marke in besten Händen: Festangestellt, leidenschaftlich und mit motivierendem Live-Einblick in die Zielerreichung.',
    cta: 'MEHR DAZU',
    link: '/careers',
    tags: ['Festangestellt', 'Live-Einblick', 'Motivation'],
  },
];

export default function DarumSonic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  const isActive = (index: number) => hoveredCard === index || focusedCard === index;

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,212,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8D400]/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Darum Sonic</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-sonic-dark mb-5 leading-tight">
            DARUM SONIC
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto mt-4">
            Weil Daten und Menschen zusammengehören
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const active = isActive(index);
            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transform: active ? 'translateY(-6px)' : 'translateY(0)',
                  background: active
                    ? 'linear-gradient(145deg, #1a1a1a 0%, #111 100%)'
                    : '#ffffff',
                  boxShadow: active
                    ? '0 28px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(200,212,0,0.3)'
                    : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
                  borderRadius: 0,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onFocus={() => setFocusedCard(index)}
                onBlur={() => setFocusedCard(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(card.link);
                  }
                }}
                aria-label={`${card.heading}: ${card.description}`}
              >
                {/* Lime accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 transition-all duration-500"
                  style={{
                    height: active ? '3px' : '2px',
                    background: active ? '#C8D400' : 'rgba(200,212,0,0.2)',
                    boxShadow: active ? '0 0 20px rgba(200,212,0,0.6)' : 'none',
                  }}
                  aria-hidden="true"
                />

                {/* Card Content */}
                <div className="p-8 flex flex-col h-full min-h-[320px]">
                  {/* Number + Icon row */}
                  <div className="flex items-start justify-between mb-7">
                    <span
                      className="text-[56px] font-black leading-none transition-all duration-500"
                      style={{
                        color: active ? 'rgba(200,212,0,0.15)' : 'rgba(0,0,0,0.06)',
                        letterSpacing: '-0.04em',
                      }}
                      aria-hidden="true"
                    >
                      {card.number}
                    </span>
                    <div
                      className="w-14 h-14 overflow-hidden transition-all duration-500 flex-shrink-0"
                      style={{
                        transform: active ? 'scale(1.1) rotate(-3deg)' : 'scale(1)',
                        boxShadow: active
                          ? '0 8px 24px rgba(139,90,43,0.35), 0 0 16px rgba(200,212,0,0.2)'
                          : '0 2px 8px rgba(139,90,43,0.15)',
                      }}
                    >
                      <img src={card.woodIcon} alt={card.heading} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3
                    className="text-xl font-black mb-3 leading-tight transition-colors duration-500"
                    style={{ color: active ? '#ffffff' : '#1a1a1a' }}
                  >
                    {card.heading}
                  </h3>

                  {/* Divider */}
                  <div
                    className="mb-4 transition-all duration-500"
                    style={{
                      height: '1px',
                      background: active ? 'rgba(200,212,0,0.25)' : 'rgba(0,0,0,0.08)',
                    }}
                    aria-hidden="true"
                  />

                  <p
                    className="text-sm leading-relaxed flex-1 mb-6 transition-colors duration-500"
                    style={{ color: active ? 'rgba(255,255,255,0.7)' : '#6B7280' }}
                  >
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {card.tags.map((tag) => (
                      <Tag key={tag} variant={active ? 'lime' : 'subtle'}>{tag}</Tag>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleCardClick(card.link)}
                    className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 whitespace-nowrap w-fit cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
                    style={{
                      background: active ? '#C8D400' : 'rgba(0,0,0,0.07)',
                      color: active ? '#ffffff' : '#6B7280',
                      boxShadow: active ? '0 4px 20px rgba(200,212,0,0.4)' : 'none',
                    }}
                  >
                    {card.cta}
                    <i
                      className="ri-arrow-right-line text-sm transition-transform duration-300"
                      style={{ transform: active ? 'translateX(4px)' : 'translateX(0)' }}
                    ></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
