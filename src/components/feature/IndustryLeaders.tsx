import { useState, useRef, useEffect } from 'react';

export default function IndustryLeaders() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      number: '01',
      icon: 'ri-shopping-bag-3-line',
      title: 'Retail & E-Commerce',
      description: 'From pop-ups to flagship stores, we create memorable brand experiences that drive foot traffic and sales.',
      tags: ['Pop-ups', 'Flagship', 'POS'],
    },
    {
      number: '02',
      icon: 'ri-goblet-line',
      title: 'Food & Beverage',
      description: 'Launch new products, host tastings, and create buzz with experiential campaigns that get people talking.',
      tags: ['Tastings', 'Sampling', 'Campaigns'],
    },
    {
      number: '03',
      icon: 'ri-shirt-line',
      title: 'Fashion & Lifestyle',
      description: 'Runway shows, brand activations, and influencer events that position your brand at the forefront of culture.',
      tags: ['Activations', 'Runway', 'Influencer'],
    },
    {
      number: '04',
      icon: 'ri-smartphone-line',
      title: 'Technology',
      description: 'Product launches, trade shows, and demos that showcase innovation and drive adoption.',
      tags: ['Launches', 'Trade Shows', 'Demos'],
    },
    {
      number: '05',
      icon: 'ri-heart-pulse-line',
      title: 'Health & Wellness',
      description: 'Educational events, sampling campaigns, and community activations that build trust and loyalty.',
      tags: ['Education', 'Community', 'Sampling'],
    },
    {
      number: '06',
      icon: 'ri-car-line',
      title: 'Automotive',
      description: 'Test drives, showroom events, and experiential campaigns that put your vehicles in the spotlight.',
      tags: ['Test Drives', 'Showroom', 'Experiential'],
    },
  ];

  const trustedBrands = [
    { name: 'Philips', logo: 'https://cdn.brandfetch.io/philips.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Groupe SEB', logo: 'https://cdn.brandfetch.io/groupeseb.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Garmin', logo: 'https://cdn.brandfetch.io/garmin.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: "L'Oréal", logo: 'https://cdn.brandfetch.io/loreal.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'YSL', logo: 'https://www.sonic-group.de/wp-content/uploads/2023/05/YSL.png' },
    { name: 'WMF', logo: 'https://cdn.brandfetch.io/wmf.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Nespresso', logo: 'https://www.sonic-group.de/wp-content/uploads/2023/06/nespresso.png' },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...trustedBrands, ...trustedBrands, ...trustedBrands];

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8D400]/3 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8D400]/2 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-sonic-dark/8 border border-sonic-dark/15 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-sonic-dark animate-pulse" />
            <span className="text-xs font-black text-sonic-dark uppercase tracking-widest">Industries</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark mb-4 leading-none">
            Industries &amp; Use Cases
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            From retail execution to healthcare field teams — any operation involving coordinating, routing, or tracking people across locations
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const wavyPath = `M-2,${isHovered ? 2 : 3} Q${20 + Math.sin(index) * 4},${isHovered ? -1 : 1} ${50 + Math.cos(index) * 3},${isHovered ? 2 : 3} T${100 + Math.sin(index + 1) * 3},${isHovered ? 1 : 2} T${150 + Math.cos(index) * 4},${isHovered ? 3 : 2} T200,${isHovered ? 1 : 3} T250,${isHovered ? 2 : 1} T300,${isHovered ? 3 : 2} T350,${isHovered ? 1 : 3} T400,${isHovered ? 2 : 1} T450,${isHovered ? 3 : 2} T500,${isHovered ? 1 : 3} T550,${isHovered ? 2 : 1} T600,${isHovered ? 3 : 2}`;

            return (
              <div
                key={index}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  background: isHovered
                    ? '#1A1A1A'
                    : '#ffffff',
                  boxShadow: isHovered
                    ? '0 28px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(200,212,0,0.3)'
                    : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
                  borderRadius: 0,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <svg
                  className="absolute top-0 left-0 w-full pointer-events-none"
                  style={{ height: '6px', overflow: 'visible' }}
                  viewBox="0 0 600 6"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`il-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="20%" stopColor="#C8D400" stopOpacity={isHovered ? 1 : 0.3} />
                      <stop offset="80%" stopColor="#C8D400" stopOpacity={isHovered ? 1 : 0.3} />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <filter id={`il-glow-${index}`}>
                      <feGaussianBlur stdDeviation={isHovered ? '2' : '1'} result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <path
                    d={wavyPath}
                    fill="none"
                    stroke={`url(#il-grad-${index})`}
                    strokeWidth={isHovered ? '3' : '2'}
                    strokeLinecap="round"
                    filter={`url(#il-glow-${index})`}
                    className="transition-all duration-500"
                  />
                </svg>

                <div className="p-8 flex flex-col h-full min-h-[320px]">
                  <div className="flex items-start justify-between mb-7">
                    <span
                      className="text-[56px] font-black leading-none transition-all duration-500"
                      style={{
                        color: isHovered ? 'rgba(200,212,0,0.15)' : 'rgba(0,0,0,0.06)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {industry.number}
                    </span>
                    <div
                      className="w-14 h-14 flex items-center justify-center flex-shrink-0 transition-all duration-500"
                      style={{ transform: isHovered ? 'scale(1.1) rotate(-3deg)' : 'scale(1)' }}
                    >
                      <i
                        className={`${industry.icon} text-3xl transition-colors duration-500`}
                        style={{ color: isHovered ? '#C8D400' : '#9CA3AF' }}
                      ></i>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-black mb-3 leading-tight transition-colors duration-500"
                    style={{ color: isHovered ? '#ffffff' : '#1a1a1a' }}
                  >
                    {industry.title}
                  </h3>

                  <div
                    className="mb-4 transition-all duration-500"
                    style={{
                      height: '1px',
                      background: isHovered ? 'rgba(200,212,0,0.25)' : 'rgba(0,0,0,0.08)',
                    }}
                  />

                  <p
                    className="text-sm leading-relaxed flex-1 mb-6 transition-colors duration-500"
                    style={{ color: isHovered ? 'rgba(255,255,255,0.7)' : '#6B7280' }}
                  >
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-black px-2.5 py-1 uppercase tracking-wider transition-all duration-500"
                        style={{
                          background: isHovered ? 'rgba(200,212,0,0.12)' : 'rgba(0,0,0,0.05)',
                          color: isHovered ? '#C8D400' : '#9CA3AF',
                          border: isHovered
                            ? '1px solid rgba(200,212,0,0.25)'
                            : '1px solid transparent',
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

      {/* ── Prominent Scrolling Brand Ticker ── */}
      <div className="relative w-full overflow-hidden bg-sonic-dark py-8 mt-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #1A1A1A, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #1A1A1A, transparent)' }} />

        {/* Label */}
        <div className="text-center mb-5">
          <span className="text-xs font-black text-[#C8D400] uppercase tracking-[0.3em]">
            Trusted by Industry Leaders
          </span>
        </div>

        {/* Marquee track */}
        <div className="flex items-center" style={{ overflow: 'hidden' }}>
          <div
            className="flex items-center gap-0 flex-shrink-0"
            style={{
              animation: 'marquee-scroll 28s linear infinite',
              willChange: 'transform',
            }}
          >
            {marqueeItems.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 mx-10 group cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.55 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(20deg)';
                    (e.currentTarget as HTMLImageElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0) invert(1)';
                    (e.currentTarget as HTMLImageElement).style.opacity = '0.55';
                  }}
                />
                {/* Separator dot */}
                <span className="ml-10 w-1.5 h-1.5 rounded-full bg-[#C8D400]/30 flex-shrink-0"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
