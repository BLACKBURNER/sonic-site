import { useState } from 'react';

export default function OfficeTour() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isIframeHovered, setIsIframeHovered] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle highlight glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <i className="ri-building-4-line text-4xl text-[#C8D400]"></i>
            </div>
            <div className="bg-[#C8D400]/20 px-6 py-3 rounded-lg border border-[#C8D400]/30">
              <p className="text-sm font-semibold text-sonic-dark tracking-wide uppercase">
                Virtual Experience
              </p>
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-4 leading-tight uppercase">
            EXPLORE OUR OFFICE
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Take a 360° virtual tour of our headquarters in Krefeld
          </p>
        </div>

        {/* Matterport Virtual Tour */}
        <div 
          className="relative overflow-hidden shadow-2xl group"
          onMouseEnter={() => setIsIframeHovered(true)}
          onMouseLeave={() => setIsIframeHovered(false)}
        >
          {/* Animated lime highlight glow around iframe */}
          <div 
            className={`absolute -inset-1 bg-gradient-to-r from-[#C8D400]/30 via-[#a8b300]/20 to-[#C8D400]/30 blur-sm transition-all duration-500 pointer-events-none ${isIframeHovered ? 'opacity-100 scale-[1.02]' : 'opacity-0'}`}
          ></div>
          
          {/* Border that animates on hover */}
          <div 
            className={`absolute inset-0 border-4 transition-all duration-500 pointer-events-none z-20 ${isIframeHovered ? 'border-[#C8D400] shadow-[0_0_30px_rgba(200,212,0,0.4)]' : 'border-gray-200'}`}
          ></div>

          {/* Animated corner accents on hover */}
          <div className={`absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-[#C8D400] transition-all duration-500 z-30 ${isIframeHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
          <div className={`absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#C8D400] transition-all duration-500 z-30 ${isIframeHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
          <div className={`absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-[#C8D400] transition-all duration-500 z-30 ${isIframeHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
          <div className={`absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-[#C8D400] transition-all duration-500 z-30 ${isIframeHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
          
          {/* Matterport Iframe */}
          <div className="relative w-full aspect-[16/9]">
            <iframe
              src="https://my.matterport.com/show/?m=NUpWzUwWfMQ"
              className="w-full h-full border-0"
              allowFullScreen
              title="Sonic Office Virtual Tour"
            ></iframe>
          </div>
        </div>

        {/* Instructions */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-200">
            <i className="ri-drag-move-line text-xl text-[#C8D400]"></i>
            <span className="text-gray-700 font-medium">Click & drag to look around</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-200">
            <i className="ri-walk-line text-xl text-[#C8D400]"></i>
            <span className="text-gray-700 font-medium">Click circles to move</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-200">
            <i className="ri-fullscreen-line text-xl text-[#C8D400]"></i>
            <span className="text-gray-700 font-medium">Fullscreen for best experience</span>
          </div>
        </div>

        {/* Key Highlights Below - 2 wavy border lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: 'ri-building-2-line', title: 'Modern Headquarters', desc: 'State-of-the-art facilities at Campus Fichtenhain 46, Krefeld' },
            { icon: 'ri-team-line', title: 'Collaborative Spaces', desc: 'Open floor plans designed for teamwork and innovation' },
            { icon: 'ri-lightbulb-line', title: 'Creative Studios', desc: 'Dedicated spaces for content creation and brand training' },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 border border-gray-100 hover:border-[#C8D400]/30 transition-all duration-500 relative overflow-visible cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle green background highlight */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C8D400]/3 via-transparent to-[#C8D400]/5 pointer-events-none" />
              
              {/* 2 Wavy SVG Border Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-xl">
                <defs>
                  <linearGradient id={`office-highlight-outer-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 1 : 0.2} />
                    <stop offset="50%" stopColor="#a8b300" stopOpacity={hoveredCard === index ? 1 : 0.12} />
                    <stop offset="100%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 1 : 0.2} />
                  </linearGradient>
                  <linearGradient id={`office-highlight-inner-${index}`} x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.7 : 0.08} />
                    <stop offset="50%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.85 : 0.05} />
                    <stop offset="100%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.7 : 0.08} />
                  </linearGradient>
                </defs>
                
                {/* Outer wavy line */}
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="10"
                  ry="10"
                  fill="none"
                  stroke={`url(#office-highlight-outer-${index})`}
                  strokeWidth={hoveredCard === index ? 2 : 0.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all ease-out"
                  style={{
                    filter: hoveredCard === index ? 'drop-shadow(0 0 6px rgba(200, 212, 0, 0.5))' : 'none',
                    transitionDuration: '1.2s',
                  }}
                >
                  {hoveredCard === index && (
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-60"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  )}
                </rect>
                
                {/* Inner wavy line */}
                <rect
                  x="6"
                  y="6"
                  width="calc(100% - 12px)"
                  height="calc(100% - 12px)"
                  rx="7"
                  ry="7"
                  fill="none"
                  stroke={`url(#office-highlight-inner-${index})`}
                  strokeWidth={hoveredCard === index ? 1.4 : 0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all ease-out"
                  style={{
                    filter: hoveredCard === index ? 'drop-shadow(0 0 4px rgba(200, 212, 0, 0.4))' : 'none',
                    transitionDuration: '1.2s',
                  }}
                >
                  {hoveredCard === index && (
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;60"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  )}
                </rect>
              </svg>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#C8D400]/20 flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-2xl text-[#C8D400]`}></i>
                </div>
                <h4 className="text-lg font-bold text-sonic-dark mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 border-2 border-gray-200">
            <i className="ri-map-pin-line text-2xl text-[#C8D400]"></i>
            <div className="text-left">
              <p className="font-bold text-sonic-dark">Campus Fichtenhain 46</p>
              <p className="text-gray-600">47807 Krefeld, Germany</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Campus+Fichtenhain+46,+47807+Krefeld" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-[#C8D400] text-[#111] font-black hover:bg-white hover:text-[#111] transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
