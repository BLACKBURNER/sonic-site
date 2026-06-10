import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

import WoodenDivider from '../../../components/base/WoodenDivider';

function LaptopMockup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-[#1a1a1a] border-2 border-[#333] p-2 pb-0 shadow-2xl shadow-black/40">
        <div className="bg-[#0a0a0a] border border-[#222] overflow-hidden relative">
          {children}
        </div>
      </div>
      <div className="h-3 bg-[#2a2a2a] border-x-2 border-b-2 border-[#333] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3a3a3a]" />
      </div>
      <div className="h-1 bg-[#333] mx-auto w-1/3" />
    </div>
  );
}

export default function GroupeSEBCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroDimensions, setHeroDimensions] = useState({ width: 1200, height: 400 });
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      const updateDimensions = () => {
        if (heroRef.current) {
          setHeroDimensions({
            width: heroRef.current.offsetWidth,
            height: heroRef.current.offsetHeight
          });
        }
      };
      updateDimensions();
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(heroRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Generate distorted freehand path
  const generateDistortedBorderPath = (w: number, h: number, inset: number, distortion: number, borderRadius: number = 8) => {
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
    <div className="min-h-screen bg-white">


      {/* Return Navigation */}
      <div className="bg-[#1a1a1a] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-white hover:text-[#C8D400] transition-colors font-bold uppercase tracking-wider text-sm"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            Return to Case Studies
          </Link>
        </div>
      </div>

      {/* Wooden Carousel Hero - Single Client */}
      <section className="relative bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={heroRef}
            className="bg-[#1a1a1a] border border-[#C8D400]/30 p-12 relative overflow-visible"
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
          >
            {/* Wood Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none ">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(90deg, rgba(200,212,0,0.08) 0px, transparent 2px, rgba(200,212,0,0.04) 4px)`,
                backgroundSize: '40px 100%'
              }}></div>
            </div>

            {/* Distorted SVG Border Line - replacing simple path borders */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible ">
              <defs>
                <linearGradient id="hero-distorted-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8D400" stopOpacity={isHeroHovered ? 1 : 0.4} />
                  <stop offset="50%" stopColor="#a8b300" stopOpacity={isHeroHovered ? 1 : 0.3} />
                  <stop offset="100%" stopColor="#C8D400" stopOpacity={isHeroHovered ? 1 : 0.4} />
                </linearGradient>
              </defs>
              
              {/* Distorted freehand line */}
              <path
                d={generateDistortedBorderPath(heroDimensions.width, heroDimensions.height, 4, 2.5, 8)}
                fill="none"
                stroke="url(#hero-distorted-gradient)"
                strokeWidth={isHeroHovered ? 3 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all ease-out"
                style={{
                  filter: isHeroHovered ? 'drop-shadow(0 0 10px rgba(200, 212, 0, 0.6))' : 'none',
                  transitionDuration: '1.2s',
                }}
              />
            </svg>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-3 bg-white/95 px-6 py-3  border-2 border-[#C8D400]/60">
                  <div className="w-10 h-10 bg-[#C8D400] flex items-center justify-center">
                    <i className="ri-store-3-fill text-white text-xl"></i>
                  </div>
                  <span className="font-black text-[#1a1a1a] text-xl uppercase tracking-wider">Groupe SEB</span>
                </div>

                {/* Headline Metric */}
                <div className="space-y-2">
                  <div className="text-6xl font-black text-[#C8D400]">24% → 14%</div>
                  <div className="text-xl font-bold text-white uppercase tracking-wide">Cost Reduction Achieved</div>
                </div>

                {/* Campaign Type */}
                <div className="inline-block bg-[#C8D400] px-6 py-2 ">
                  <span className="font-black text-[#1a1a1a] uppercase tracking-wider text-sm">Retail Efficiency</span>
                </div>

                {/* Quote */}
                <div className="bg-white/10 border-l-4 border-[#C8D400] p-6">
                  <p className="text-white text-lg italic leading-relaxed mb-4">
                    "Sonic transformed our retail operations across four major brands. Their efficiency and professionalism are unmatched."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#C8D400] flex items-center justify-center">
                      <i className="ri-user-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="font-bold text-white">Retail Operations Director</div>
                      <div className="text-sm text-[#C8D400]">Groupe SEB</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual Preview */}
              <div className="relative">
                <LaptopMockup>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=modern%20retail%20store%20display%20with%20premium%20kitchen%20appliances%20Tefal%20Krups%20Rowenta%20WMF%20brands%20professional%20merchandising%20clean%20organized%20shelves%20bright%20lighting%20contemporary%20interior%20design%20high-end%20cookware%20and%20small%20appliances%20showcase%20elegant%20product%20presentation&width=800&height=600&seq=groupeseb001&orientation=landscape"
                      alt="Groupe SEB Retail Campaign"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </LaptopMockup>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Client Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-2 mb-8">
              <i className="ri-building-fill text-[#C8D400] text-xl"></i>
              <span className="font-black text-white uppercase tracking-wider text-sm">Client Overview</span>
            </div>
            
            <h2 className="text-5xl font-black text-[#1a1a1a] mb-6 uppercase tracking-tight">
              Leading Global Appliance Manufacturer
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Groupe SEB is a world leader in small domestic equipment, operating across multiple premium brands including Tefal, Krups, Rowenta, and WMF. With a presence in over 150 countries, they required a retail partner capable of managing complex multi-brand operations while maintaining the distinct identity and premium positioning of each brand.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 my-12">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 text-center">
                  <div className="text-4xl font-black text-[#C8D400] mb-2">4</div>
                  <div className="text-white font-bold uppercase text-sm">Premium Brands</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 text-center">
                  <div className="text-4xl font-black text-[#C8D400] mb-2">150+</div>
                  <div className="text-white font-bold uppercase text-sm">Countries</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 text-center">
                  <div className="text-4xl font-black text-[#C8D400] mb-2">200+</div>
                  <div className="text-white font-bold uppercase text-sm">Retail Locations</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 text-center">
                  <div className="text-4xl font-black text-[#C8D400] mb-2">€7B</div>
                  <div className="text-white font-bold uppercase text-sm">Annual Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* The Challenge */}
      <section className="py-20 bg-[#f0efe9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-2 mb-8">
              <i className="ri-error-warning-fill text-[#C8D400] text-xl"></i>
              <span className="font-black text-white uppercase tracking-wider text-sm">The Challenge</span>
            </div>
            
            <h2 className="text-5xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
              Complex Multi-Brand Operations
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-[#C8D400] p-8">
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">High Operational Costs</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Previous retail partners were charging 24% of revenue for promotional staffing and retail operations, significantly impacting profitability across all four brands.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#C8D400] p-8">
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">Brand Differentiation</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Each brand (Tefal, Krups, Rowenta, WMF) required distinct positioning and messaging while maintaining operational efficiency across shared retail locations.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#C8D400] p-8">
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">Quality Consistency</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Maintaining premium brand standards across 200+ retail locations with varying staff quality and training levels proved challenging with previous partners.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#C8D400] p-8">
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">Scalability Issues</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Rapid expansion plans required a partner capable of scaling operations quickly while maintaining service quality and cost efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* The Sonic Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-2 mb-8">
              <i className="ri-lightbulb-flash-fill text-[#C8D400] text-xl"></i>
              <span className="font-black text-white uppercase tracking-wider text-sm">The Sonic Solution</span>
            </div>
            
            <h2 className="text-5xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tight">
              Integrated Multi-Brand Excellence
            </h2>
            
            <div className="space-y-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Sonic implemented a comprehensive retail operations strategy that addressed all challenges while reducing costs by 42% compared to the previous partner.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 ">
                  <div className="w-16 h-16 bg-[#C8D400]  flex items-center justify-center mb-4">
                    <i className="ri-team-fill text-[#1a1a1a] text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase">Specialized Teams</h3>
                  <p className="text-white/90 leading-relaxed">
                    Dedicated brand specialists trained specifically for Tefal, Krups, Rowenta, and WMF, ensuring authentic brand representation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 ">
                  <div className="w-16 h-16 bg-[#C8D400]  flex items-center justify-center mb-4">
                    <i className="ri-line-chart-fill text-[#1a1a1a] text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase">Cost Optimization</h3>
                  <p className="text-white/90 leading-relaxed">
                    Reduced operational costs from 24% to 14% through efficient resource allocation and streamlined processes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 ">
                  <div className="w-16 h-16 bg-[#C8D400]  flex items-center justify-center mb-4">
                    <i className="ri-graduation-cap-fill text-[#1a1a1a] text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase">Training Excellence</h3>
                  <p className="text-white/90 leading-relaxed">
                    Comprehensive product knowledge and brand positioning training ensuring consistent premium experience.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 ">
                  <div className="w-16 h-16 bg-[#C8D400]  flex items-center justify-center mb-4">
                    <i className="ri-dashboard-fill text-[#1a1a1a] text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase">Real-Time Analytics</h3>
                  <p className="text-white/90 leading-relaxed">
                    Live performance tracking across all locations and brands with actionable insights for continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Full Results */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-2 mb-8">
              <i className="ri-trophy-fill text-[#C8D400] text-xl"></i>
              <span className="font-black text-[#1a1a1a] uppercase tracking-wider text-sm">Results & Impact</span>
            </div>
            
            <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Measurable Success Across All Brands
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              Dramatic improvements in efficiency, cost reduction, and brand performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 text-center shadow-2xl">
              <div className="text-6xl font-black text-[#C8D400] mb-3">24% → 14%</div>
              <div className="text-2xl font-bold text-[#1a1a1a] mb-2 uppercase">Cost Reduction</div>
              <p className="text-gray-600">Operational costs reduced by 42% compared to previous partner</p>
            </div>

            <div className="bg-white p-8 text-center shadow-2xl">
              <div className="text-6xl font-black text-[#C8D400] mb-3">4</div>
              <div className="text-2xl font-bold text-[#1a1a1a] mb-2 uppercase">Brands Managed</div>
              <p className="text-gray-600">Tefal, Krups, Rowenta, WMF with distinct positioning</p>
            </div>

            <div className="bg-white p-8 text-center shadow-2xl">
              <div className="text-6xl font-black text-[#C8D400] mb-3">98%</div>
              <div className="text-2xl font-bold text-[#1a1a1a] mb-2 uppercase">Efficiency Rate</div>
              <p className="text-gray-600">Consistent quality across 200+ retail locations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 ">
              <h3 className="text-2xl font-black text-white mb-4 uppercase flex items-center gap-3">
                <i className="ri-arrow-up-line text-[#C8D400]"></i>
                Sales Performance
              </h3>
              <ul className="space-y-3 text-white/90 text-lg">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-[#C8D400] text-xl mt-1"></i>
                  <span>32% increase in average transaction value</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-[#C8D400] text-xl mt-1"></i>
                  <span>28% improvement in conversion rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-[#C8D400] text-xl mt-1"></i>
                  <span>€18.6M additional revenue generated</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 ">
              <h3 className="text-2xl font-black text-white mb-4 uppercase flex items-center gap-3">
                <i className="ri-star-fill text-[#C8D400]"></i>
                Brand Excellence
              </h3>
              <ul className="space-y-3 text-white/90 text-lg">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-[#C8D400] text-xl mt-1"></i>
                  <span>96% customer satisfaction score</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-[#C8D400] text-xl mt-1"></i>
                  <span>Consistent brand experience across all touchpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-[#C8D400] text-xl mt-1"></i>
                  <span>Enhanced premium positioning for all four brands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Campaign Visuals Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-2 mb-8">
              <i className="ri-gallery-fill text-[#C8D400] text-xl"></i>
              <span className="font-black text-white uppercase tracking-wider text-sm">Campaign Gallery</span>
            </div>
            
            <h2 className="text-5xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Excellence In Action
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden border border-[#C8D400]/40">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20retail%20staff%20demonstrating%20Tefal%20cookware%20products%20to%20customers%20in%20modern%20electronics%20store%20bright%20lighting%20engaged%20conversation%20product%20knowledge%20training%20premium%20brand%20experience&width=800&height=600&seq=groupeseb002&orientation=landscape"
                alt="Tefal Brand Experience"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                <h3 className="text-2xl font-black text-white uppercase">Tefal Brand Experience</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#C8D400]/40">
              <img
                src="https://readdy.ai/api/search-image?query=elegant%20Krups%20coffee%20machine%20display%20in%20premium%20retail%20environment%20sophisticated%20merchandising%20professional%20product%20presentation%20modern%20store%20interior%20luxury%20appliances%20showcase&width=800&height=600&seq=groupeseb003&orientation=landscape"
                alt="Krups Premium Display"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                <h3 className="text-2xl font-black text-white uppercase">Krups Premium Display</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#C8D400]/40">
              <img
                src="https://readdy.ai/api/search-image?query=Rowenta%20vacuum%20cleaners%20and%20home%20appliances%20retail%20demonstration%20trained%20specialist%20showing%20product%20features%20to%20interested%20customers%20clean%20organized%20store%20layout%20professional%20merchandising&width=800&height=600&seq=groupeseb004&orientation=landscape"
                alt="Rowenta Product Demo"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                <h3 className="text-2xl font-black text-white uppercase">Rowenta Product Demo</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#C8D400]/40">
              <img
                src="https://readdy.ai/api/search-image?query=WMF%20premium%20kitchenware%20and%20cookware%20display%20high-end%20retail%20environment%20elegant%20product%20arrangement%20professional%20merchandising%20luxury%20brand%20positioning%20modern%20store%20design&width=800&height=600&seq=groupeseb005&orientation=landscape"
                alt="WMF Luxury Positioning"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                <h3 className="text-2xl font-black text-white uppercase">WMF Luxury Positioning</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Related Case Studies */}
      <section className="py-20 bg-[#f0efe9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-2 mb-8">
              <i className="ri-file-list-3-fill text-[#C8D400] text-xl"></i>
              <span className="font-black text-white uppercase tracking-wider text-sm">More Success Stories</span>
            </div>
            
            <h2 className="text-5xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
              Related Case Studies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Samsung */}
            <Link to="/case-studies/samsung-mobile-experience" className="group">
              <div className="bg-white border-4 border-[#C8D400]/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20Samsung%20smartphone%20retail%20display%20interactive%20product%20demonstration%20professional%20brand%20ambassadors%20engaged%20customers%20contemporary%20electronics%20store%20premium%20mobile%20experience&width=600&height=400&seq=samsung101&orientation=landscape"
                    alt="Samsung Case Study"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2  border-2 border-[#C8D400]/60">
                    <span className="font-black text-[#1a1a1a] text-sm uppercase">Samsung</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3 uppercase">Mobile Experience Revolution</h3>
                  <p className="text-gray-600 mb-4">+18% market share through immersive retail experiences</p>
                  <div className="flex items-center gap-2 text-[#C8D400] font-bold uppercase text-sm group-hover:gap-4 transition-all">
                    Read Full Story
                    <i className="ri-arrow-right-line text-xl"></i>
                  </div>
                </div>
              </div>
            </Link>

            {/* Dyson */}
            <div className="group opacity-75 cursor-not-allowed">
              <div className="bg-white border-4 border-[#C8D400]/60  overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=premium%20Dyson%20vacuum%20cleaner%20and%20air%20purifier%20retail%20display%20modern%20technology%20showcase%20professional%20product%20demonstration%20sleek%20store%20environment%20innovative%20home%20appliances&width=600&height=400&seq=dyson101&orientation=landscape"
                    alt="Dyson Case Study"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2  border-2 border-[#C8D400]/60">
                    <span className="font-black text-[#1a1a1a] text-sm uppercase">Dyson</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3 uppercase">Premium Tech Showcase</h3>
                  <p className="text-gray-600 mb-4">€8.2M in sales through expert product demonstrations</p>
                  <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-sm">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Philips */}
            <div className="group opacity-75 cursor-not-allowed">
              <div className="bg-white border-4 border-[#C8D400]/60  overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Philips%20personal%20care%20and%20grooming%20products%20retail%20display%20modern%20health%20technology%20showcase%20professional%20merchandising%20clean%20contemporary%20store%20layout%20premium%20wellness%20brand&width=600&height=400&seq=philips101&orientation=landscape"
                    alt="Philips Case Study"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2  border-2 border-[#C8D400]/60">
                    <span className="font-black text-[#1a1a1a] text-sm uppercase">Philips</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3 uppercase">Health Tech Leadership</h3>
                  <p className="text-gray-600 mb-4">Market leadership through education-focused retail</p>
                  <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-sm">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Story Navigation */}
      <div className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-white hover:text-[#C8D400] transition-colors font-bold uppercase tracking-wider text-sm"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            All Case Studies
          </Link>
          
          <Link 
            to="/case-studies/samsung-mobile-experience" 
            className="inline-flex items-center gap-2 bg-[#C8D400] hover:bg-white hover:text-[#1a1a1a] text-[#1a1a1a] px-8 py-4 font-black uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
          >
            Next Story: Samsung
            <i className="ri-arrow-right-line text-xl"></i>
          </Link>
        </div>
      </div>


    </div>
  );
}