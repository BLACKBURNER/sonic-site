import { useState, useEffect, useRef } from 'react';

export default function ClientSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isDashboardHovered, setIsDashboardHovered] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [dashboardDimensions, setDashboardDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    if (dashboardRef.current) {
      const updateDimensions = () => {
        if (dashboardRef.current) {
          setDashboardDimensions({
            width: dashboardRef.current.offsetWidth,
            height: dashboardRef.current.offsetHeight
          });
        }
      };
      updateDimensions();
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(dashboardRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const caseStudies = [
    {
      brand: 'Garmin',
      metric: '+130%',
      description: 'Revenue per day increase',
      detail: 'From €947 to €2,178 daily revenue across 122 POS locations',
      woodIcon: 'https://readdy.ai/api/search-image?query=extremely%20ancient%20heavily%20decayed%20weathered%20wooden%20growth%20arrow%20up%20icon%20carved%20from%20century%20old%20reclaimed%20barn%20wood%20with%20severe%20deep%20cracks%20massive%20splits%20wormholes%20rot%20marks%20heavy%20oxidation%20extreme%20patina%20thick%20layers%20of%20aged%20finish%20peeling%20flaking%20surface%20deep%20grooves%20worn%20smooth%20by%20decades%20of%20use%20archaeological%20artifact%20museum%20relic%20quality%20on%20white%20background&width=100&height=100&seq=wood-growth-ancient-extreme-1&orientation=squarish',
      quote: 'Sonic transformed our retail presence in DACH',
      author: 'Dana Eichinger, Garmin',
      stats: [
        { label: 'POS Locations', value: '122' },
        { label: 'Daily Revenue', value: '€2,178' },
        { label: 'Growth Rate', value: '+130%' },
      ]
    },
    {
      brand: 'Philips',
      metric: '€58.8M',
      description: 'Annual revenue generated',
      detail: '11,970 implementation days across 130 POS locations',
      woodIcon: 'https://readdy.ai/api/search-image?query=extremely%20ancient%20heavily%20decayed%20weathered%20wooden%20trophy%20achievement%20icon%20carved%20from%20century%20old%20reclaimed%20barn%20wood%20with%20severe%20deep%20cracks%20massive%20splits%20wormholes%20rot%20marks%20heavy%20oxidation%20extreme%20patina%20thick%20layers%20of%20aged%20finish%20peeling%20flaking%20surface%20deep%20grooves%20worn%20smooth%20by%20decades%20of%20use%20archaeological%20artifact%20museum%20relic%20quality%20on%20white%20background&width=100&height=100&seq=wood-trophy-ancient-extreme-1&orientation=squarish',
      quote: 'Germany became our #1 EU market with Sonic',
      author: 'Murat Yatkin, Philips',
      stats: [
        { label: 'Annual Revenue', value: '€58.8M' },
        { label: 'Implementation Days', value: '11,970' },
        { label: 'POS Locations', value: '130' },
      ]
    },
    {
      brand: 'Groupe SEB',
      metric: '24% → 14%',
      description: 'Cost efficiency improvement',
      detail: 'Optimized operations across Tefal, Krups, Rowenta, WMF brands',
      woodIcon: 'https://readdy.ai/api/search-image?query=extremely%20ancient%20heavily%20decayed%20weathered%20wooden%20efficiency%20gear%20cog%20icon%20carved%20from%20century%20old%20reclaimed%20barn%20wood%20with%20severe%20deep%20cracks%20massive%20splits%20wormholes%20rot%20marks%20heavy%20oxidation%20extreme%20patina%20thick%20layers%20of%20aged%20finish%20peeling%20flaking%20surface%20deep%20grooves%20worn%20smooth%20by%20decades%20of%20use%20archaeological%20artifact%20museum%20relic%20quality%20on%20white%20background&width=100&height=100&seq=wood-efficiency-ancient-extreme-1&orientation=squarish',
      quote: 'Unmatched efficiency and quality',
      author: 'Ramin Dirinpur, Groupe SEB',
      stats: [
        { label: 'Cost Reduction', value: '10%' },
        { label: 'Brands Managed', value: '4' },
        { label: 'Efficiency', value: '14%' },
      ]
    },
    {
      brand: 'Samsung',
      metric: '€12.4M',
      description: 'Quarterly sales boost',
      detail: 'Premium product launches across 200+ retail partners',
      woodIcon: 'https://readdy.ai/api/search-image?query=extremely%20ancient%20heavily%20decayed%20weathered%20wooden%20smartphone%20mobile%20device%20icon%20carved%20from%20century%20old%20reclaimed%20barn%20wood%20with%20severe%20deep%20cracks%20massive%20splits%20wormholes%20rot%20marks%20heavy%20oxidation%20extreme%20patina%20thick%20layers%20of%20aged%20finish%20peeling%20flaking%20surface%20deep%20grooves%20worn%20smooth%20by%20decades%20of%20use%20archaeological%20artifact%20museum%20relic%20quality%20on%20white%20background&width=100&height=100&seq=wood-mobile-ancient-extreme-1&orientation=squarish',
      quote: 'Best-in-class retail activation partner',
      author: 'Marketing Director, Samsung',
      stats: [
        { label: 'Quarterly Sales', value: '€12.4M' },
        { label: 'Retail Partners', value: '200+' },
        { label: 'Conversion', value: '+45%' },
      ]
    },
    {
      brand: 'Bosch',
      metric: '€8.2M',
      description: 'Campaign revenue impact',
      detail: 'Power tools and home appliances across 180 retail locations',
      woodIcon: 'https://readdy.ai/api/search-image?query=extremely%20ancient%20heavily%20decayed%20weathered%20wooden%20power%20tool%20drill%20icon%20carved%20from%20century%20old%20reclaimed%20barn%20wood%20with%20severe%20deep%20cracks%20massive%20splits%20wormholes%20rot%20marks%20heavy%20oxidation%20extreme%20patina%20thick%20layers%20of%20aged%20finish%20peeling%20flaking%20surface%20deep%20grooves%20worn%20smooth%20by%20decades%20of%20use%20archaeological%20artifact%20museum%20relic%20quality%20on%20white%20background&width=100&height=100&seq=wood-tool-ancient-extreme-1&orientation=squarish',
      quote: 'Exceptional execution and measurable results',
      author: 'Retail Manager, Bosch',
      stats: [
        { label: 'Campaign Revenue', value: '€8.2M' },
        { label: 'Retail Locations', value: '180' },
        { label: 'ROI', value: '+285%' },
      ]
    },
    {
      brand: 'Dyson',
      metric: '€15.2M',
      description: 'Annual campaign revenue',
      detail: 'Premium home technology across 150+ retail locations',
      woodIcon: 'https://readdy.ai/api/search-image?query=extremely%20ancient%20heavily%20decayed%20weathered%20wooden%20fan%20air%20flow%20icon%20carved%20from%20century%20old%20reclaimed%20barn%20wood%20with%20severe%20deep%20cracks%20massive%20splits%20wormholes%20rot%20marks%20heavy%20oxidation%20extreme%20patina%20thick%20layers%20of%20aged%20finish%20peeling%20flaking%20surface%20deep%20grooves%20worn%20smooth%20by%20decades%20of%20use%20archaeological%20artifact%20museum%20relic%20quality%20on%20white%20background&width=100&height=100&seq=wood-fan-ancient-extreme-1&orientation=squarish',
      quote: 'Outstanding brand representation and sales impact',
      author: 'Retail Director, Dyson',
      stats: [
        { label: 'Annual Revenue', value: '€15.2M' },
        { label: 'Retail Locations', value: '150+' },
        { label: 'Conversion', value: '+52%' },
      ]
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
  };

  // Generate distorted freehand path
  const generateDistortedBorderPath = (w: number, h: number, inset: number, distortion: number, borderRadius: number = 16) => {
    const r = Math.max(borderRadius - inset, 4);
    const segments = 40;
    
    let path = '';
    
    // Top edge
    path += `M ${inset + r},${inset}`;
    for (let i = 0; i <= segments; i++) {
      const x = inset + r + ((w - 2 * r - 2 * inset) * i / segments);
      const y = inset + (Math.random() - 0.5) * distortion;
      if (i === 0) continue;
      path += ` L ${x},${y}`;
    }
    
    // Top-right corner
    path += ` Q ${w - inset},${inset} ${w - inset},${inset + r}`;
    
    // Right edge
    for (let i = 0; i <= segments; i++) {
      const y = inset + r + ((h - 2 * r - 2 * inset) * i / segments);
      const x = w - inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Bottom-right corner
    path += ` Q ${w - inset},${h - inset} ${w - inset - r},${h - inset}`;
    
    // Bottom edge
    for (let i = 0; i <= segments; i++) {
      const x = w - inset - r - ((w - 2 * r - 2 * inset) * i / segments);
      const y = h - inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Bottom-left corner
    path += ` Q ${inset},${h - inset} ${inset},${h - inset - r}`;
    
    // Left edge
    for (let i = 0; i <= segments; i++) {
      const y = h - inset - r - ((h - 2 * r - 2 * inset) * i / segments);
      const x = inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Top-left corner
    path += ` Q ${inset},${inset} ${inset + r},${inset}`;
    
    return path;
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Lime green background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8D400]/4 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative wavy lines */}
      <div className="absolute top-40 left-0 w-1/3 h-2 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 8" preserveAspectRatio="none">
          <path d="M0,4 Q15,2 30,4 T60,4 Q75,6 90,4 T120,4 Q135,2 150,4 T180,4 Q195,6 210,4 T240,4 Q255,2 270,4 T300,4 Q315,6 330,4 T360,4 Q375,2 390,4 T420,4 Q435,6 450,4 T480,4 Q495,2 510,4 T540,4 Q555,6 570,4 T600,4" fill="none" stroke="#C8D400" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#C8D400]/20 rounded-lg">
              <i className="ri-checkbox-circle-line text-3xl text-[#C8D400]"></i>
            </div>
            <div className="bg-[#C8D400]/20 px-6 py-3 rounded-lg border border-[#C8D400]/30">
              <p className="text-sm font-black text-sonic-dark tracking-wide uppercase">
                Proven Results
              </p>
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-5 leading-tight">
            CLIENT SUCCESS
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
            Real brands. Real growth. Real data.
          </p>
        </div>

        {/* Dashboard-Style Display with Wood Texture */}
        <div 
          ref={dashboardRef}
          className="p-8 mb-8 relative overflow-visible transition-all duration-1200 border border-[#C8D400]/20"
          onMouseEnter={() => setIsDashboardHovered(true)}
          onMouseLeave={() => setIsDashboardHovered(false)}
        >
          {/* Extremely weathered ancient brown wood texture background - matching LiveMetrics */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=1920&height=100&seq=wood-texture-metrics-brown-1&orientation=landscape"
              alt="Wood texture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Subtle green background highlight - matching smaller cards */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8D400]/2 via-transparent to-[#C8D400]/3 pointer-events-none" />

          {/* Distorted SVG Border Line - replacing dotted highlights */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-2xl">
            <defs>
              <linearGradient id="dashboard-distorted-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8D400" stopOpacity={isDashboardHovered ? 1 : 0.4} />
                <stop offset="50%" stopColor="#a8b300" stopOpacity={isDashboardHovered ? 1 : 0.3} />
                <stop offset="100%" stopColor="#C8D400" stopOpacity={isDashboardHovered ? 1 : 0.4} />
              </linearGradient>
            </defs>
            
            {/* Distorted freehand line */}
            <path
              d={generateDistortedBorderPath(dashboardDimensions.width, dashboardDimensions.height, 3, 2, 16)}
              fill="none"
              stroke="url(#dashboard-distorted-gradient)"
              strokeWidth={isDashboardHovered ? 2.5 : 1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all ease-out"
              style={{
                filter: isDashboardHovered ? 'drop-shadow(0 0 8px rgba(200, 212, 0, 0.6))' : 'none',
                transitionDuration: '1.2s',
              }}
            />
          </svg>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#C8D400] rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-sans tabular-nums font-black drop-shadow-md">CLIENT PERFORMANCE</span>
            </div>
            <span className="text-white/80 text-xs font-sans tabular-nums font-bold drop-shadow-md">Live Results Dashboard</span>
          </div>

          {/* Active Case Study Display */}
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {/* Left - Brand Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 overflow-hidden border-2 border-[#C8D400]/50">
                  <img
                    src={caseStudies[activeIndex].woodIcon}
                    alt={caseStudies[activeIndex].brand}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white drop-shadow-md">
                    {caseStudies[activeIndex].brand}
                  </h3>
                  <p className="text-white/90 font-bold drop-shadow-md">{caseStudies[activeIndex].description}</p>
                </div>
              </div>
              
              <div className="text-6xl font-black text-sonic-lime font-sans tabular-nums mb-4 drop-shadow-lg">
                {caseStudies[activeIndex].metric}
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md font-semibold">
                {caseStudies[activeIndex].detail}
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/20">
                <p className="text-white italic mb-2 drop-shadow-md font-semibold">&quot;{caseStudies[activeIndex].quote}&quot;</p>
                <p className="text-sm text-white/80 font-bold drop-shadow-md">— {caseStudies[activeIndex].author}</p>
              </div>
            </div>

            {/* Right - Stats Dashboard */}
            <div className="grid grid-cols-1 gap-4">
              {caseStudies[activeIndex].stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/90 text-sm font-bold drop-shadow-md">{stat.label}</span>
                    <span className="text-white font-sans tabular-nums font-black text-2xl drop-shadow-md">{stat.value}</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#C8D400] to-[#a8b300] rounded-full transition-all duration-1000"
                      style={{ width: `${70 + idx * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              {/* Mini Chart */}
              <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/90 text-sm font-bold drop-shadow-md">Performance Trend</span>
                  <span className="text-sonic-lime text-xs font-sans tabular-nums font-black drop-shadow-md">+16% YoY</span>
                </div>
                <div className="h-16 flex items-end gap-1">
                  {[45, 52, 48, 58, 65, 62, 68, 72, 67, 74, 78, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-white/30 to-[#C8D400] rounded-t transition-all duration-300"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:scale-110 ${
                activeIndex === index 
                  ? 'bg-[#C8D400] w-8 shadow-lg' 
                  : 'bg-gray-300 hover:bg-[#C8D400]/60'
              }`}
              aria-label={`View case study ${index + 1}`}
            />
          ))}
        </div>

        {/* Card Grid with distorted freehand border effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <MiniCard
              key={index}
              study={study}
              index={index}
              isActive={activeIndex === index}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg font-semibold">
            Want results like these for your brand?
          </p>
          <button className="px-7 py-3 bg-[#C8D400] text-[#111] font-black text-sm uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
}

interface MiniCardProps {
  study: {
    brand: string;
    metric: string;
    description: string;
    woodIcon: string;
  };
  index: number;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

function MiniCard({ study, index, isActive, isHovered, onHover, onLeave, onClick }: MiniCardProps) {
  const showEffect = isHovered || isActive;
  const cardRef = useRef<HTMLButtonElement>(null);
  const [cardDimensions, setCardDimensions] = useState({ width: 200, height: 200 });

  useEffect(() => {
    if (cardRef.current) {
      const updateDimensions = () => {
        if (cardRef.current) {
          setCardDimensions({
            width: cardRef.current.offsetWidth,
            height: cardRef.current.offsetHeight
          });
        }
      };
      updateDimensions();
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(cardRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Generate distorted freehand path
  const generateDistortedBorderPath = (w: number, h: number, inset: number, distortion: number, borderRadius: number = 12) => {
    const r = Math.max(borderRadius - inset, 4);
    const segments = 30;
    
    let path = '';
    
    // Top edge
    path += `M ${inset + r},${inset}`;
    for (let i = 0; i <= segments; i++) {
      const x = inset + r + ((w - 2 * r - 2 * inset) * i / segments);
      const y = inset + (Math.random() - 0.5) * distortion;
      if (i === 0) continue;
      path += ` L ${x},${y}`;
    }
    
    // Top-right corner
    path += ` Q ${w - inset},${inset} ${w - inset},${inset + r}`;
    
    // Right edge
    for (let i = 0; i <= segments; i++) {
      const y = inset + r + ((h - 2 * r - 2 * inset) * i / segments);
      const x = w - inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Bottom-right corner
    path += ` Q ${w - inset},${h - inset} ${w - inset - r},${h - inset}`;
    
    // Bottom edge
    for (let i = 0; i <= segments; i++) {
      const x = w - inset - r - ((w - 2 * r - 2 * inset) * i / segments);
      const y = h - inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Bottom-left corner
    path += ` Q ${inset},${h - inset} ${inset},${h - inset - r}`;
    
    // Left edge
    for (let i = 0; i <= segments; i++) {
      const y = h - inset - r - ((h - 2 * r - 2 * inset) * i / segments);
      const x = inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Top-left corner
    path += ` Q ${inset},${inset} ${inset + r},${inset}`;
    
    return path;
  };

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`p-5 border transition-all duration-500 cursor-pointer text-left relative overflow-visible ${
        isActive ? 'bg-[#C8D400]/10 border-[#C8D400]/30' : 'bg-white border-gray-100'
      }`}
    >
      {/* Subtle green background highlight */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C8D400]/3 via-transparent to-[#C8D400]/5 pointer-events-none" />
      
      {/* Distorted SVG Border Line - replacing dotted highlights */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-xl">
        <defs>
          <linearGradient id={`card-distorted-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8D400" stopOpacity={showEffect ? 1 : 0.3} />
            <stop offset="50%" stopColor="#a8b300" stopOpacity={showEffect ? 1 : 0.2} />
            <stop offset="100%" stopColor="#C8D400" stopOpacity={showEffect ? 1 : 0.3} />
          </linearGradient>
        </defs>
        
        {/* Distorted freehand line */}
        <path
          d={generateDistortedBorderPath(cardDimensions.width, cardDimensions.height, 2, 1.5, 12)}
          fill="none"
          stroke={`url(#card-distorted-${index})`}
          strokeWidth={showEffect ? 2 : 1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all ease-out"
          style={{
            filter: showEffect ? 'drop-shadow(0 0 6px rgba(200, 212, 0, 0.5))' : 'none',
            transitionDuration: '1.2s',
          }}
        />
      </svg>
      
      <div className="flex items-center gap-3 mb-3 relative z-10">
        <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
          <img
            src={study.woodIcon}
            alt={study.brand}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-black text-sonic-dark">{study.brand}</h4>
          <p className="text-xs text-gray-600 font-semibold">{study.description}</p>
        </div>
      </div>
      <div className="text-2xl font-black text-sonic-lime font-sans tabular-nums relative z-10">
        {study.metric}
      </div>
    </button>
  );
}