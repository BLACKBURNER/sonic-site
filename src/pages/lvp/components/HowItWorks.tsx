import { useState } from 'react';

export default function HowItWorks() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'QR Code Placement',
      description: 'Customers scan QR codes at POS displays, wobblers, stickers, or product packaging',
      icon: 'ri-qr-code-line',
      image: 'https://readdy.ai/api/search-image?query=close%20up%20of%20modern%20QR%20code%20on%20retail%20product%20display%20stand%20in%20bright%20clean%20store%20environment%20with%20simple%20white%20background%20professional%20retail%20photography&width=600&height=600&seq=lvp-qr-step&orientation=squarish'
    },
    {
      number: '02',
      title: 'Instant Studio Connection',
      description: 'Smartphone connects directly to live studio during defined opening hours',
      icon: 'ri-smartphone-line',
      image: 'https://readdy.ai/api/search-image?query=smartphone%20screen%20showing%20live%20video%20call%20with%20professional%20brand%20consultant%20in%20modern%20studio%20setting%20clean%20interface%20bright%20lighting%20simple%20background&width=600&height=600&seq=lvp-connect-step&orientation=squarish'
    },
    {
      number: '03',
      title: 'Expert Consultation',
      description: 'Brand-trained staff answer questions, demonstrate products, and distribute vouchers or codes',
      icon: 'ri-customer-service-2-line',
      image: 'https://readdy.ai/api/search-image?query=professional%20brand%20consultant%20in%20modern%20video%20studio%20with%20product%20display%20explaining%20features%20to%20camera%20bright%20clean%20white%20background%20professional%20lighting&width=600&height=600&seq=lvp-expert-step&orientation=squarish'
    }
  ];

  return (
    <section id="how-it-works" className="py-14 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/20 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Der Prozess</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] mb-4 leading-tight tracking-tight">
            SO FUNKTIONIERT ES
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Drei einfache Schritte — vom QR-Code bis zur Live-Beratung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Large background number - hidden on mobile */}
              <div className="hidden md:flex absolute -top-4 left-0 right-0 justify-center pointer-events-none z-0">
                <span 
                  className="text-[180px] font-black leading-none select-none transition-all duration-500"
                  style={{
                    color: 'transparent',
                    color: hoveredCard === index ? 'rgba(200, 212, 0, 0.25)' : 'rgba(200, 212, 0, 0.08)',
                    textShadow: hoveredCard === index ? '0 0 30px rgba(200, 212, 0, 0.2)' : 'none',
                  }}
                >
                  {step.number}
                </span>
              </div>
              
              <div className="relative bg-[#f5f5f5] p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible md:mt-20 z-10" style={{ borderRadius: 0 }}>
                {/* Subtle green background highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8D400]/3 via-transparent to-[#C8D400]/5 pointer-events-none" style={{ borderRadius: 0 }} />
                
                {/* SVG Border Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-2xl">
                  <defs>
                    <linearGradient id={`lvp-wavy-outer-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 1 : 0.2} />
                      <stop offset="50%" stopColor="#a8b300" stopOpacity={hoveredCard === index ? 1 : 0.12} />
                      <stop offset="100%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 1 : 0.2} />
                    </linearGradient>
                    <linearGradient id={`lvp-wavy-inner-${index}`} x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.7 : 0.08} />
                      <stop offset="50%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.85 : 0.05} />
                      <stop offset="100%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.7 : 0.08} />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="0" ry="0" fill="none" stroke={`url(#lvp-wavy-outer-${index})`} strokeWidth={hoveredCard === index ? 2 : 0.8} strokeLinecap="round" strokeLinejoin="round" className="transition-all ease-out" style={{ filter: hoveredCard === index ? 'drop-shadow(0 0 6px rgba(200, 212, 0, 0.5))' : 'none', transitionDuration: '1.2s' }}>
                    {hoveredCard === index && (<animate attributeName="stroke-dashoffset" values="0;-60" dur="4s" repeatCount="indefinite" />)}
                  </rect>
                  <rect x="7" y="7" width="calc(100% - 14px)" height="calc(100% - 14px)" rx="0" ry="0" fill="none" stroke={`url(#lvp-wavy-inner-${index})`} strokeWidth={hoveredCard === index ? 1.4 : 0.5} strokeLinecap="round" strokeLinejoin="round" className="transition-all ease-out" style={{ filter: hoveredCard === index ? 'drop-shadow(0 0 4px rgba(200, 212, 0, 0.4))' : 'none', transitionDuration: '1.2s' }}>
                    {hoveredCard === index && (<animate attributeName="stroke-dashoffset" values="0;60" dur="5s" repeatCount="indefinite" />)}
                  </rect>
                </svg>

                <div className="w-full h-48 md:h-64 mb-5 md:mb-6 overflow-hidden bg-gray-200 relative z-10" style={{ borderRadius: 0 }}>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C8D400] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform relative z-10" style={{ borderRadius: 0 }}>
                  <i className={`${step.icon} text-2xl md:text-3xl text-white`}></i>
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-[#111] mb-3 md:mb-4 relative z-10 uppercase tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <i className="ri-arrow-right-line text-4xl text-[#C8D400]"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
