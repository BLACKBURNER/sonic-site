import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DualCTA() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    navigate(href);
  };

  return (
    <section className="py-32 px-6 bg-[#111] relative overflow-hidden">
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,212,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8D400]/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            READY TO START?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Choose your path and take the first step toward DACH market success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* For Businesses */}
          <div
            className="relative overflow-hidden cursor-pointer group"
            style={{
              minHeight: '560px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              transform: hoveredCard === 0 ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === 0
                ? '0 40px 100px rgba(0,0,0,0.95), 0 0 0 1.5px rgba(200,212,0,0.7), inset 0 1px 0 rgba(200,212,0,0.2)'
                : '0 12px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* BG image — heavily dimmed */}
            <img
              src="https://readdy.ai/api/search-image?query=professional%20business%20strategy%20meeting%20executive%20team%20modern%20office%20dark%20interior%20sleek%20contemporary%20workspace%20premium%20corporate%20environment%20dramatic%20directional%20lighting%20deep%20shadows%20rich%20textures%20polished%20surfaces%20ambitious%20businesspeople&width=900&height=700&seq=dualcta-biz-bg-v3&orientation=landscape"
              alt="For Businesses"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{ opacity: hoveredCard === 0 ? 0.15 : 0.08 }}
            />

            {/* Full black glossy base */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(145deg, #080808 0%, #111 50%, #0c0c0c 100%)' }}
            />

            {/* Diagonal gloss sheen */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.045) 0%, transparent 45%, rgba(0,0,0,0.25) 100%)' }}
            />

            {/* Top highlight strip */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                height: '150px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
                opacity: hoveredCard === 0 ? 1 : 0.5,
                transition: 'opacity 0.4s ease',
              }}
            />

            {/* Lime top bar */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                height: hoveredCard === 0 ? '3px' : '2px',
                background: hoveredCard === 0
                  ? 'linear-gradient(90deg, transparent, #C8D400 30%, #a8b300 70%, transparent)'
                  : 'rgba(200,212,0,0.35)',
                boxShadow: hoveredCard === 0 ? '0 0 28px rgba(200,212,0,0.8)' : 'none',
                transition: 'all 0.3s ease',
              }}
            />

            <div className="relative z-10 p-10 flex flex-col h-full" style={{ minHeight: '560px' }}>
              {/* Icon */}
              <div className="w-16 h-16 mb-8 overflow-hidden" style={{ boxShadow: '0 6px 20px rgba(139,90,43,0.5)' }}>
                <img
                  src="https://readdy.ai/api/search-image?query=carved%20wooden%20briefcase%20business%20executive%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20minimalist%20handcrafted%20artisan%20on%20clean%20white%20background%20top%20view%20studio%20lighting&width=128&height=128&seq=wood-brief-cta-v3&orientation=squarish"
                  alt="For Businesses"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sonic-lime text-xs font-black uppercase tracking-[0.25em] mb-3">
                Für Unternehmen
              </div>
              <h3 className="text-4xl font-black text-white mb-4 leading-tight">
                FOR<br />BUSINESSES
              </h3>
              <p className="text-white/70 text-base mb-8 leading-relaxed max-w-sm">
                Ready to dominate the DACH market? Let&apos;s build your success story together.
              </p>

              <ul className="space-y-3.5 mb-10 flex-1">
                {[
                  { icon: 'ri-search-eye-line', text: 'Free market entry consultation' },
                  { icon: 'ri-route-line', text: 'Custom strategy development' },
                  { icon: 'ri-pie-chart-2-line', text: 'SRT platform demo' },
                  { icon: 'ri-bar-chart-grouped-line', text: 'ROI projection analysis' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <div
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: hoveredCard === 0 ? '#C8D400' : 'rgba(200,212,0,0.12)',
                        border: hoveredCard === 0 ? 'none' : '1px solid rgba(200,212,0,0.2)',
                      }}
                    >
                      <i className={`${item.icon} text-sm`} style={{ color: hoveredCard === 0 ? '#111' : '#C8D400' }} />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleNav('/about')}
                className="skeu-btn-lime w-full py-4 font-black text-sm uppercase tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{
                  background: hoveredCard === 0
                    ? 'linear-gradient(135deg, #C8D400 0%, #a8b300 50%, #C8D400 100%)'
                    : 'rgba(200,212,0,0.15)',
                  color: hoveredCard === 0 ? '#111' : '#C8D400',
                  border: hoveredCard === 0 ? 'none' : '1px solid rgba(200,212,0,0.3)',
                  boxShadow: hoveredCard === 0 ? '0 4px 32px rgba(200,212,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3)' : 'none',
                }}
              >
                Schedule Consultation
              </button>

              <div className="mt-5 flex items-center justify-center gap-6 text-white/30 text-xs">
                <div className="flex items-center gap-1.5">
                  <i className="ri-time-line" />
                  <span>30-min call</span>
                </div>
                <div className="w-px h-3 bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <i className="ri-shield-check-line" />
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </div>

          {/* For Talent */}
          <div
            className="relative overflow-hidden cursor-pointer group"
            style={{
              minHeight: '560px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              transform: hoveredCard === 1 ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === 1
                ? '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1.5px rgba(200,212,0,0.6), inset 0 1px 0 rgba(200,212,0,0.3)'
                : '0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* BG image */}
            <img
              src="https://readdy.ai/api/search-image?query=ambitious%20young%20professionals%20field%20sales%20promotion%20team%20vibrant%20energy%20modern%20retail%20environment%20confident%20diverse%20group%20dynamic%20brand%20ambassadors%20stylish%20contemporary%20setting%20dramatic%20warm%20directional%20lighting%20beautiful%20people%20community%20motivated%20career%20growth&width=900&height=700&seq=dualcta-talent-bg-v3&orientation=landscape"
              alt="For Talent"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Glass glossy overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: hoveredCard === 1
                  ? 'linear-gradient(145deg, rgba(180,110,10,0.82) 0%, rgba(140,70,5,0.90) 100%)'
                  : 'linear-gradient(145deg, rgba(160,90,8,0.88) 0%, rgba(120,60,4,0.94) 100%)',
              }}
            />

            {/* Glossy sheen */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none transition-opacity duration-500"
              style={{
                height: '200px',
                background: 'linear-gradient(180deg, rgba(255,220,100,0.10) 0%, transparent 100%)',
                opacity: hoveredCard === 1 ? 1 : 0.5,
              }}
            />

            {/* Lime top bar */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none transition-all duration-400"
              style={{
                height: hoveredCard === 1 ? '3px' : '2px',
                background: hoveredCard === 1
                  ? 'linear-gradient(90deg, transparent, #C8D400 30%, #a8b300 70%, transparent)'
                  : 'rgba(200,212,0,0.2)',
                boxShadow: hoveredCard === 1 ? '0 0 24px rgba(200,212,0,0.7)' : 'none',
              }}
            />

            <div className="relative z-10 p-10 flex flex-col h-full" style={{ minHeight: '560px' }}>
              {/* Icon */}
              <div className="w-16 h-16 mb-8 overflow-hidden" style={{ boxShadow: '0 6px 20px rgba(139,90,43,0.5)' }}>
                <img
                  src="https://readdy.ai/api/search-image?query=carved%20wooden%20star%20achievement%20award%20excellence%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20minimalist%20handcrafted%20artisan%20on%20clean%20white%20background%20top%20view%20studio%20lighting&width=128&height=128&seq=wood-star-cta-v3&orientation=squarish"
                  alt="For Talent"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sonic-lime text-xs font-black uppercase tracking-[0.25em] mb-3">
                Für Talente
              </div>
              <h3 className="text-4xl font-black text-white mb-4 leading-tight">
                FOR<br />TALENT
              </h3>
              <p className="text-white/80 text-base mb-8 leading-relaxed max-w-sm">
                Join 20,000+ professionals building careers with flexibility and growth.
              </p>

              <ul className="space-y-3.5 mb-10 flex-1">
                {[
                  { icon: 'ri-calendar-check-line', text: 'Flexible scheduling options' },
                  { icon: 'ri-money-euro-circle-line', text: 'Competitive compensation' },
                  { icon: 'ri-award-line', text: 'Professional development' },
                  { icon: 'ri-arrow-up-line', text: 'Career advancement paths' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <div
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: hoveredCard === 1 ? '#C8D400' : 'rgba(255,255,255,0.12)',
                        border: hoveredCard === 1 ? 'none' : '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      <i className={`${item.icon} text-sm`} style={{ color: hoveredCard === 1 ? '#111' : 'rgba(255,255,255,0.8)' }} />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleNav('/careers')}
                className="w-full py-4 font-black text-sm uppercase tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{
                  background: hoveredCard === 1
                    ? 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)'
                    : 'rgba(255,255,255,0.15)',
                  color: hoveredCard === 1 ? '#c26800' : '#ffffff',
                  border: hoveredCard === 1 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  boxShadow: hoveredCard === 1 ? '0 4px 32px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.5)' : 'none',
                }}
              >
                Explore Opportunities
              </button>

              <div className="mt-5 flex items-center justify-center gap-6 text-white/40 text-xs">
                <div className="flex items-center gap-1.5">
                  <i className="ri-map-pin-line" />
                  <span>DACH-wide</span>
                </div>
                <div className="w-px h-3 bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <i className="ri-calendar-line" />
                  <span>Start anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
