export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20geometric%20pattern%20with%20diagonal%20lines%20modern%20minimalist%20design%20in%20dark%20charcoal%20and%20warm%20amber%20tones%20professional%20business%20aesthetic%20high%20contrast%20clean%20composition&width=1920&height=1080&seq=hero-bg-sonic&orientation=landscape"
          alt="Sonic Hero Background"
          className="w-full h-full object-cover object-top"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-24 md:py-32 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border border-sonic-lime/30 mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src="https://readdy.ai/api/search-image?query=wooden%20badge%20award%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=64&height=64&seq=wood-badge-hero-walnut&orientation=squarish"
              alt="Independent"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">
            Independent &amp; Healthy Since 2007
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight px-4">
          MARKEN IM HERZEN.<br />
          <span className="text-sonic-lime">ERFOLG IM FOKUS.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-4 md:mb-6 font-semibold px-4">
          20.000+ Promoter. €2 Mrd. Umsatz. Ihr DACH-Partner.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-white/75 max-w-3xl mx-auto mb-10 md:mb-12 px-4">
          Wir verbinden Marken mit über 20.000 Fachkräften in Deutschland, Österreich und der Schweiz. Echte Menschen. Echte Ergebnisse. Echtzeit-Daten.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-sonic-lime text-[#111] font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer border-2 border-transparent hover:border-sonic-lime hover:ring-4 hover:ring-sonic-lime/30">
            Jetzt starten
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 border-2 border-white/30 whitespace-nowrap cursor-pointer hover:border-sonic-lime hover:bg-white/20 hover:ring-4 hover:ring-sonic-lime/20">
            Fallbeispiele ansehen
          </button>
        </div>

        {/* Quick Stats - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
          {[
            { value: '20.000+', label: 'Fachkräfte', icon: 'https://readdy.ai/api/search-image?query=wooden%20team%20people%20group%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=60&height=60&seq=wood-team-hero-walnut&orientation=squarish' },
            { value: '€2B+', label: 'Umsatz beeinflusst', icon: 'https://readdy.ai/api/search-image?query=wooden%20euro%20currency%20money%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=60&height=60&seq=wood-euro-hero-walnut&orientation=squarish' },
            { value: '1,3 Mio.+', label: 'Einsätze getrackt', icon: 'https://readdy.ai/api/search-image?query=wooden%20chart%20analytics%20graph%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=60&height=60&seq=wood-chart-hero-walnut&orientation=squarish' },
            { value: '17 Jahre', label: 'Unabhängig', icon: 'https://readdy.ai/api/search-image?query=wooden%20calendar%20time%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=60&height=60&seq=wood-time-hero-walnut&orientation=squarish' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="relative bg-white/5 backdrop-blur-sm p-4 md:p-6 transition-all duration-500 group overflow-visible"
            >
              {/* Subtle green background highlight */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C8D400]/5 via-transparent to-[#C8D400]/8 pointer-events-none" />
              
              {/* Sketchy SVG Border Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient id={`hero-sketch-outer-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" className="transition-all duration-700" style={{ stopOpacity: 0.3 }} />
                    <stop offset="50%" stopColor="#a8b300" className="transition-all duration-700" style={{ stopOpacity: 0.2 }} />
                    <stop offset="100%" stopColor="#C8D400" className="transition-all duration-700" style={{ stopOpacity: 0.3 }} />
                  </linearGradient>
                  <linearGradient id={`hero-sketch-inner-${index}`} x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" className="transition-all duration-700" style={{ stopOpacity: 0.12 }} />
                    <stop offset="50%" stopColor="#a8b300" className="transition-all duration-700" style={{ stopOpacity: 0.08 }} />
                    <stop offset="100%" stopColor="#C8D400" className="transition-all duration-700" style={{ stopOpacity: 0.12 }} />
                  </linearGradient>
                </defs>
                
                {/* Outer sketchy line */}
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="0"
                  ry="0"
                  fill="none"
                  stroke={`url(#hero-sketch-outer-${index})`}
                  strokeWidth="0"
                  className="transition-all duration-700 ease-out group-hover:stroke-[2.5]"
                  style={{ filter: 'none' }}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-40"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="indefinite"
                    className="group-hover:begin-0"
                  />
                </rect>
                
                {/* Inner sketchy line */}
                <rect
                  x="6"
                  y="6"
                  width="calc(100% - 12px)"
                  height="calc(100% - 12px)"
                  rx="0"
                  ry="0"
                  fill="none"
                  stroke={`url(#hero-sketch-inner-${index})`}
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 10"
                  className="transition-all duration-700 ease-out group-hover:stroke-[1.5] group-hover:[stroke-dasharray:6_6_10_6_4_6]"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;40"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="indefinite"
                  />
                </rect>
              </svg>
              
              {/* Hover state overlay for SVG animation trigger */}
              <style>{`
                .group:hover #hero-sketch-outer-${index} stop:nth-child(1) { stop-opacity: 1 !important; }
                .group:hover #hero-sketch-outer-${index} stop:nth-child(2) { stop-opacity: 1 !important; }
                .group:hover #hero-sketch-outer-${index} stop:nth-child(3) { stop-opacity: 1 !important; }
                .group:hover #hero-sketch-inner-${index} stop:nth-child(1) { stop-opacity: 0.9 !important; }
                .group:hover #hero-sketch-inner-${index} stop:nth-child(2) { stop-opacity: 0.9 !important; }
                .group:hover #hero-sketch-inner-${index} stop:nth-child(3) { stop-opacity: 0.9 !important; }
                .group:hover svg rect:first-of-type { filter: drop-shadow(0 0 6px rgba(200, 212, 0, 0.5)) !important; }
                .group:hover svg rect:last-of-type { filter: drop-shadow(0 0 4px rgba(200, 212, 0, 0.4)) !important; }
              `}</style>
              
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 flex items-center justify-center relative z-10">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1 relative z-10 font-sans tabular-nums">{stat.value}</div>
              <div className="text-white/70 text-xs md:text-sm font-semibold relative z-10">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 flex items-start justify-center p-2" style={{ borderRadius: 0 }}>
          <div className="w-1.5 h-3 bg-sonic-lime" style={{ borderRadius: 0 }}></div>
        </div>
      </div>
    </section>
  );
}
