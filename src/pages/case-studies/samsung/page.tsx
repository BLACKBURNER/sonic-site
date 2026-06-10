import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import WoodenDivider from '../../../components/base/WoodenDivider';

function LaptopMockup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop frame */}
      <div className="bg-[#1a1a1a] border-2 border-[#333] p-2 pb-0 shadow-2xl shadow-black/40">
        {/* Screen bezel */}
        <div className="bg-[#0a0a0a] border border-[#222] overflow-hidden relative">
          {children}
        </div>
      </div>
      {/* Laptop base / keyboard area */}
      <div className="h-3 bg-[#2a2a2a] border-x-2 border-b-2 border-[#333] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3a3a3a]" />
      </div>
      {/* Trackpad hint */}
      <div className="h-1 bg-[#333] mx-auto w-1/3" />
    </div>
  );
}

export default function SamsungCaseStudy() {
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
  const generateDistortedBorderPath = (w: number, h: number, inset: number, distortion: number, borderRadius: number = 0) => {
    const r = Math.max(borderRadius - inset, 0);
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
    if (r > 0) {
      path += ` Q ${w - inset},${inset} ${w - inset},${inset + r}`;
    }
    
    // Right edge
    for (let i = 0; i <= segments; i++) {
      const y = inset + r + ((h - 2 * r - 2 * inset) * i / segments);
      const x = w - inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Bottom-right corner
    if (r > 0) {
      path += ` Q ${w - inset},${h - inset} ${w - inset - r},${h - inset}`;
    }
    
    // Bottom edge
    for (let i = 0; i <= segments; i++) {
      const x = w - inset - r - ((w - 2 * r - 2 * inset) * i / segments);
      const y = h - inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Bottom-left corner
    if (r > 0) {
      path += ` Q ${inset},${h - inset} ${inset},${h - inset - r}`;
    }
    
    // Left edge
    for (let i = 0; i <= segments; i++) {
      const y = h - inset - r - ((h - 2 * r - 2 * inset) * i / segments);
      const x = inset + (Math.random() - 0.5) * distortion;
      path += ` L ${x},${y}`;
    }
    
    // Top-left corner
    if (r > 0) {
      path += ` Q ${inset},${inset} ${inset + r},${inset}`;
    } else {
      path += ` Z`;
    }
    
    return path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Return Link */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-8">
        <Link 
          to="/case-studies" 
          className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#C8D400] transition-colors font-bold"
        >
          <i className="ri-arrow-left-line"></i>
          Return to Case Studies
        </Link>
      </div>

      {/* Wooden Carousel Hero - Single Client */}
      <section className="py-16 bg-gradient-to-b from-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={heroRef}
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-none p-12 overflow-visible"
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
          >
            {/* Wooden Texture Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.3) 2px, rgba(139, 69, 19, 0.3) 4px)`
              }}></div>
            </div>

            {/* Distorted SVG Border Line - replacing straight line highlights */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="samsung-hero-distorted-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8D400" stopOpacity={isHeroHovered ? 1 : 0.4} />
                  <stop offset="50%" stopColor="#a8b300" stopOpacity={isHeroHovered ? 1 : 0.3} />
                  <stop offset="100%" stopColor="#C8D400" stopOpacity={isHeroHovered ? 1 : 0.4} />
                </linearGradient>
              </defs>
              
              {/* Distorted freehand line */}
              <path
                d={generateDistortedBorderPath(heroDimensions.width, heroDimensions.height, 3, 2.5, 0)}
                fill="none"
                stroke="url(#samsung-hero-distorted-gradient)"
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
              {/* Left: Client Info */}
              <div className="text-white">
                <div className="inline-block bg-[#C8D400] text-[#1a1a1a] px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
                  Mobile Experience
                </div>
                
                <h1 className="text-5xl font-black mb-6 leading-tight">
                  Samsung
                </h1>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-line-chart-line text-2xl text-[#C8D400]"></i>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[#C8D400]">+18%</div>
                      <div className="text-sm opacity-90">Market Share Growth</div>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#C8D400] pl-6 italic text-lg mb-8">
                  "Sonic transformed our retail presence into an immersive brand experience that drives real results."
                </blockquote>

                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#C8D400]">€12.4M</div>
                    <div className="text-xs opacity-80">Quarterly Sales</div>
                  </div>
                  <div className="w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#C8D400]">+45%</div>
                    <div className="text-xs opacity-80">Conversion Rate</div>
                  </div>
                  <div className="w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#C8D400]">200+</div>
                    <div className="text-xs opacity-80">Retail Partners</div>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <LaptopMockup>
                  <div className="aspect-[4/3] rounded-none overflow-hidden relative">
                    <img
                      src="https://readdy.ai/api/search-image?query=modern%20samsung%20smartphone%20galaxy%20retail%20display%20with%20sleek%20product%20showcase%20interactive%20demo%20stations%20premium%20technology%20store%20environment%20clean%20minimalist%20design%20professional%20lighting%20contemporary%20retail%20space%20mobile%20devices%20on%20elegant%20display%20stands&width=800&height=600&seq=samsung-hero-retail&orientation=landscape"
                      alt="Samsung Retail Experience"
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
            <div className="inline-block bg-[#C8D400] text-[#1a1a1a] px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
              Client Overview
            </div>
            
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-8">
              Global Technology Leader
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Samsung Electronics is a global leader in technology, opening new possibilities for people everywhere. Through relentless innovation and discovery, Samsung is transforming the worlds of TVs, smartphones, wearable devices, tablets, cameras, digital appliances, medical equipment, network systems, and semiconductor and LED solutions.
              </p>
              <p className="text-lg leading-relaxed">
                In the highly competitive DACH smartphone market, Samsung needed a retail partner who could deliver immersive product experiences that differentiate their premium Galaxy lineup while driving measurable sales growth across hundreds of retail locations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[#C8D400]/60">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-global-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <div className="text-3xl font-black text-[#1a1a1a] mb-2">Global</div>
                <div className="text-sm text-gray-600">Technology Leader</div>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[#C8D400]/60">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-smartphone-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <div className="text-3xl font-black text-[#1a1a1a] mb-2">Galaxy</div>
                <div className="text-sm text-gray-600">Premium Lineup</div>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[#C8D400]/60">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-store-3-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <div className="text-3xl font-black text-[#1a1a1a] mb-2">200+</div>
                <div className="text-sm text-gray-600">Retail Partners</div>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[#C8D400]/60">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-map-pin-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <div className="text-3xl font-black text-[#1a1a1a] mb-2">DACH</div>
                <div className="text-sm text-gray-600">Market Focus</div>
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
            <div className="inline-block bg-[#1a1a1a] text-white px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
              The Challenge
            </div>
            
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-8">
              Standing Out in a Crowded Market
            </h2>

            <div className="bg-white p-8 rounded-none border-l-4 border-[#C8D400] mb-12">
              <p className="text-lg leading-relaxed text-gray-700">
                The smartphone market in DACH is intensely competitive, with multiple premium brands vying for consumer attention. Samsung needed to differentiate their Galaxy lineup through exceptional in-store experiences that showcase innovation, build brand loyalty, and drive conversion at the point of sale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-none">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-user-search-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase">
                  Brand Differentiation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How to make Samsung's premium Galaxy devices stand out in retail environments saturated with competing smartphone brands and similar product displays.
                </p>
              </div>

              <div className="bg-white p-8 rounded-none">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-team-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase">
                  Expert Representation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Finding and training retail specialists who could authentically represent Samsung's innovation story and technical capabilities across 200+ locations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-none">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-exchange-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase">
                  Conversion Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Converting store traffic into actual sales while maximizing accessory attachment rates and overall transaction value in a price-sensitive market.
                </p>
              </div>

              <div className="bg-white p-8 rounded-none">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-3xl text-[#1a1a1a]"></i>
                </div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase">
                  Scalable Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintaining consistent brand experience quality and sales performance across a diverse network of retail partners with varying store formats.
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
            <div className="inline-block bg-[#C8D400] text-[#1a1a1a] px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
              The Sonic Solution
            </div>
            
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-8">
              Immersive Experiences That Convert
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Sonic deployed a comprehensive retail excellence program designed specifically for Samsung's premium positioning. Our approach combined expert product specialists, immersive demonstration experiences, and data-driven optimization to transform every customer interaction into a memorable brand moment.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-[#f5f5f5] p-8 border-l-4 border-[#C8D400]/60">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-star-line text-4xl text-[#1a1a1a]"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">
                      Samsung-Certified Specialists
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Recruited and trained a dedicated team of technology enthusiasts who became true Samsung brand ambassadors. Each specialist completed intensive product training covering Galaxy ecosystem features, camera technology, 5G capabilities, and competitive positioning.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Comprehensive Galaxy device certification program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Ongoing training on new product launches and features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Competitive intelligence and objection handling workshops</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-8 border-l-4 border-[#C8D400]/60">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <i className="ri-smartphone-line text-4xl text-[#1a1a1a]"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">
                      Interactive Product Experiences
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Created engaging demonstration scenarios that brought Samsung's innovation to life. From camera capabilities to ecosystem integration, every interaction was designed to showcase real-world value and create emotional connections with the brand.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Hands-on Galaxy ecosystem demonstrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Personalized feature discovery based on customer needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Accessory pairing recommendations and demonstrations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-8 border-l-4 border-[#C8D400]/60">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <i className="ri-bar-chart-box-line text-4xl text-[#1a1a1a]"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase">
                      Real-Time Performance Analytics
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Implemented Sonic's proprietary SRT platform to track performance across all touchpoints. Daily insights enabled rapid optimization of staffing, messaging, and promotional strategies to maximize ROI.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Live sales tracking and conversion monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Customer interaction quality scoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-checkbox-circle-fill text-[#C8D400] mt-1"></i>
                        <span>Predictive staffing optimization by location and time</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Full Results */}
      <section className="py-20 bg-gradient-to-b from-[#f7f6f3] to-[#f7f6f3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#1a1a1a] text-white px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
              The Results
            </div>
            
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-6">
              Measurable Impact Across Every Metric
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Within the first year of partnership, Samsung saw dramatic improvements across all key performance indicators, establishing new benchmarks for retail excellence in the DACH mobile market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-8 border-t-4 border-[#C8D400] text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-4xl text-[#1a1a1a]"></i>
              </div>
              <div className="text-5xl font-black text-[#1a1a1a] mb-2">+18%</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Market Share Growth</div>
              <p className="text-xs text-gray-500 mt-2">Year-over-year increase in DACH smartphone market</p>
            </div>

            <div className="bg-white p-8 border-t-4 border-[#C8D400] text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-euro-circle-line text-4xl text-[#1a1a1a]"></i>
              </div>
              <div className="text-5xl font-black text-[#1a1a1a] mb-2">€12.4M</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Quarterly Sales</div>
              <p className="text-xs text-gray-500 mt-2">Average quarterly revenue through Sonic channels</p>
            </div>

            <div className="bg-white p-8 border-t-4 border-[#C8D400] text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="ri-exchange-line text-4xl text-[#1a1a1a]"></i>
              </div>
              <div className="text-5xl font-black text-[#1a1a1a] mb-2">+45%</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Conversion Rate</div>
              <p className="text-xs text-gray-500 mt-2">Improvement in store visitor to buyer conversion</p>
            </div>

            <div className="bg-white p-8 border-t-4 border-[#C8D400] text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-bag-line text-4xl text-[#1a1a1a]"></i>
              </div>
              <div className="text-5xl font-black text-[#1a1a1a] mb-2">+67%</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Accessory Attachment</div>
              <p className="text-xs text-gray-500 mt-2">Increase in accessory sales per device sold</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-12 rounded-none text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-[#C8D400] mb-2">200+</div>
                <div className="text-sm uppercase tracking-wider opacity-90">Active Retail Locations</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#C8D400] mb-2">98%</div>
                <div className="text-sm uppercase tracking-wider opacity-90">Customer Satisfaction Score</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#C8D400] mb-2">4.8/5</div>
                <div className="text-sm uppercase tracking-wider opacity-90">Brand Experience Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Campaign Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C8D400] text-[#1a1a1a] px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
              Campaign Gallery
            </div>
            
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-6">
              Bringing Innovation to Life
            </h2>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A selection of retail activations and product experiences that showcase Samsung's Galaxy ecosystem across DACH markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-none">
                <img
                  src="https://readdy.ai/api/search-image?query=samsung%20galaxy%20smartphone%20retail%20display%20with%20interactive%20demo%20station%20modern%20technology%20store%20professional%20product%20showcase%20clean%20minimalist%20design%20premium%20mobile%20devices%20on%20sleek%20stands%20bright%20lighting%20contemporary%20retail%20environment&width=800&height=600&seq=samsung-gallery-1&orientation=landscape"
                  alt="Samsung Galaxy Interactive Display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2 uppercase">Galaxy Experience Zones</h3>
                <p className="text-gray-600">Interactive displays showcasing the full Galaxy ecosystem</p>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-none">
                <img
                  src="https://readdy.ai/api/search-image?query=samsung%20brand%20ambassador%20demonstrating%20smartphone%20camera%20features%20to%20customer%20in%20modern%20electronics%20store%20professional%20retail%20specialist%20showing%20mobile%20device%20technology%20friendly%20customer%20service%20interaction%20clean%20store%20environment&width=800&height=600&seq=samsung-gallery-2&orientation=landscape"
                  alt="Samsung Brand Ambassador"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2 uppercase">Expert Product Specialists</h3>
                <p className="text-gray-600">Trained ambassadors delivering personalized demonstrations</p>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-none">
                <img
                  src="https://readdy.ai/api/search-image?query=samsung%20galaxy%20smartphone%20camera%20photography%20demonstration%20with%20professional%20sample%20photos%20displayed%20on%20screens%20retail%20technology%20showcase%20high%20quality%20mobile%20photography%20examples%20modern%20product%20display%20clean%20presentation&width=800&height=600&seq=samsung-gallery-3&orientation=landscape"
                  alt="Samsung Camera Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2 uppercase">Camera Innovation Showcase</h3>
                <p className="text-gray-600">Highlighting Galaxy's advanced photography capabilities</p>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-none">
                <img
                  src="https://readdy.ai/api/search-image?query=samsung%20galaxy%20smartphone%20with%20wireless%20earbuds%20smartwatch%20and%20accessories%20displayed%20together%20on%20premium%20retail%20display%20modern%20technology%20ecosystem%20showcase%20clean%20product%20arrangement%20professional%20store%20presentation%20minimalist%20design&width=800&height=600&seq=samsung-gallery-4&orientation=landscape"
                  alt="Samsung Ecosystem Integration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2 uppercase">Ecosystem Integration</h3>
                <p className="text-gray-600">Demonstrating seamless connectivity across devices</p>
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
            <div className="inline-block bg-[#1a1a1a] text-white px-6 py-2 font-black uppercase tracking-wider text-sm mb-6 border border-[#C8D400]/40">
              More Success Stories
            </div>
            
            <h2 className="text-4xl font-black text-[#1a1a1a] mb-6">
              Explore Related Case Studies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Groupe SEB */}
            <Link to="/case-studies/groupe-seb-efficiency" className="group">
              <div className="bg-white rounded-none overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=premium%20kitchen%20appliances%20tefal%20krups%20rowenta%20wmf%20brands%20displayed%20in%20modern%20retail%20store%20professional%20product%20showcase%20clean%20organized%20display%20contemporary%20home%20appliance%20section%20bright%20lighting%20elegant%20presentation&width=600&height=450&seq=seb-related&orientation=landscape"
                    alt="Groupe SEB Case Study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-[#C8D400] text-[#1a1a1a] px-4 py-1 font-black uppercase tracking-wider text-xs mb-4">
                    Retail Excellence
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3 uppercase">Groupe SEB</h3>
                  <p className="text-gray-600 mb-4">Cost reduction from 24% to 14% while managing 4 premium brands across 200+ locations</p>
                  <div className="flex items-center gap-2 text-[#1a1a1a] font-bold">
                    <span>Read Full Story</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </Link>

            {/* Dyson - Coming Soon */}
            <div className="group opacity-60">
              <div className="bg-white rounded-none overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=dyson%20vacuum%20cleaner%20and%20air%20purifier%20products%20displayed%20in%20premium%20retail%20store%20modern%20technology%20showcase%20sleek%20product%20design%20professional%20store%20display%20clean%20minimalist%20presentation%20contemporary%20retail%20environment&width=600&height=450&seq=dyson-related&orientation=landscape"
                    alt="Dyson Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-gray-300 text-gray-600 px-4 py-1 font-black uppercase tracking-wider text-xs mb-4">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3 uppercase">Dyson</h3>
                  <p className="text-gray-600 mb-4">Premium technology demonstrations driving exceptional conversion rates</p>
                </div>
              </div>
            </div>

            {/* Philips - Coming Soon */}
            <div className="group opacity-60">
              <div className="bg-white rounded-none overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=philips%20consumer%20electronics%20and%20personal%20care%20products%20displayed%20in%20modern%20retail%20store%20professional%20product%20showcase%20clean%20organized%20display%20contemporary%20electronics%20section%20bright%20lighting%20premium%20presentation&width=600&height=450&seq=philips-related&orientation=landscape"
                    alt="Philips Case Study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-gray-300 text-gray-600 px-4 py-1 font-black uppercase tracking-wider text-xs mb-4">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3 uppercase">Philips</h3>
                  <p className="text-gray-600 mb-4">Health & wellness product expertise across multiple retail channels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Story Navigation */}
      <section className="py-12 bg-white border-t-2 border-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/case-studies/groupe-seb-efficiency"
              className="flex items-center gap-3 text-[#1a1a1a] hover:text-[#C8D400] transition-colors group"
            >
              <i className="ri-arrow-left-line text-2xl group-hover:-translate-x-1 transition-transform"></i>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-1">Previous Story</div>
                <div className="font-black text-lg">Groupe SEB</div>
              </div>
            </Link>

            <Link 
              to="/case-studies"
              className="px-8 py-3 bg-[#1a1a1a] text-white font-black uppercase tracking-wider hover:bg-[#C8D400] hover:text-[#1a1a1a] transition-colors"
            >
              All Case Studies
            </Link>

            <div className="flex items-center gap-3 text-gray-400 opacity-60">
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider mb-1">Next Story</div>
                <div className="font-black text-lg">Coming Soon</div>
              </div>
              <i className="ri-arrow-right-line text-2xl"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}