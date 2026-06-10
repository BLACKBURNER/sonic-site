import { useState } from 'react';

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'STAFF SERVICE',
      shortTitle: 'Staff',
      description: 'Rundum-Service beim Personal. Beim Personal für deine Aktivitäten übernehmen wir den kompletten Service: Wir suchen die passenden Leute aus, koordinieren die Teams und schicken sie ins Feld.',
      detail: 'Dein Personal steht noch nicht einmal auf deinem Payroll, das übernehmen wir. So hast du jederzeit volle Kostenkontrolle und volle Flexibilität.',
      image: 'https://readdy.ai/api/search-image?query=professional%20brand%20ambassadors%20team%20in%20modern%20retail%20environment%20coordinating%20sales%20promotion%20activities%20bright%20contemporary%20store%20setting%20with%20product%20displays%20clean%20minimalist%20design%20warm%20lighting&width=1200&height=800&seq=staff-service-001&orientation=landscape',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20team%20people%20group%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-team-walnut&orientation=squarish',
      stats: [
        { label: 'Trained Promoters', value: '20,000+' },
        { label: 'Avg. Tenure', value: '5.15 yrs' },
        { label: 'Coverage', value: 'DACH' },
      ]
    },
    {
      title: 'POINT OF SALE',
      shortTitle: 'POS',
      description: 'POS: Immer auf den Punkt. Egal, ob du einen Wobbler fürs Regal, interaktive Displays oder einen ganzen Shop im Shop benötigst.',
      detail: 'Wir übernehmen die komplette Abwicklung von Kreation über Produktion und Organisation bis hin zur Pflege und Logistik. Jedes Detail wird von uns sorgfältig geplant und umgesetzt.',
      image: 'https://readdy.ai/api/search-image?query=modern%20point%20of%20sale%20retail%20display%20with%20interactive%20digital%20screens%20product%20showcases%20in%20contemporary%20store%20environment%20professional%20merchandising%20setup%20bright%20lighting%20clean%20design&width=1200&height=800&seq=pos-service-001&orientation=landscape',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20store%20shop%20retail%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-store-walnut&orientation=squarish',
      stats: [
        { label: 'POS Implementations', value: '100K+' },
        { label: 'Retail Partners', value: '500+' },
        { label: 'Success Rate', value: '98%' },
      ]
    },
    {
      title: 'SONIC REPORTING TOOL',
      shortTitle: 'SRT',
      description: 'Wir sind „Lower Funnel". Mit der SRT ermöglichen wir ein Live-Zugriff auf die Daten unserer Performance.',
      detail: 'Ob tägliche, wöchentliche oder monatliche Auswertungen, wir liefern Handlungsempfehlungen basierend auf Echtzeit-Daten.',
      image: 'https://readdy.ai/api/search-image?query=modern%20analytics%20dashboard%20on%20large%20screen%20showing%20retail%20performance%20metrics%20data%20visualization%20charts%20graphs%20in%20contemporary%20office%20environment%20professional%20business%20intelligence%20setup%20clean%20design&width=1200&height=800&seq=srt-service-001&orientation=landscape',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20bar%20chart%20analytics%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-analytics-walnut&orientation=squarish',
      stats: [
        { label: 'Data Points', value: '1M+' },
        { label: 'Real-time', value: '24/7' },
        { label: 'Accuracy', value: '99.9%' },
      ]
    },
    {
      title: 'LIVE VIDEO SERVICE',
      shortTitle: 'LVP',
      description: 'Über den Tellerrand hinausschauen. Genau das machen wir. Warum sich ausschließlich auf den stationären Verkauf konzentrieren?',
      detail: 'Daher haben wir unseren Live Video Service ins Leben gerufen - die Brücke zwischen physischem und digitalem Retail.',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20video%20streaming%20studio%20setup%20with%20presenter%20demonstrating%20products%20on%20camera%20modern%20broadcast%20equipment%20contemporary%20studio%20environment%20bright%20lighting%20clean%20design&width=1200&height=800&seq=lvp-service-001&orientation=landscape',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20video%20camera%20play%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-video-walnut&orientation=squarish',
      stats: [
        { label: 'Live Sessions', value: '5,000+' },
        { label: 'Conversion', value: '+340%' },
        { label: 'Reach', value: '2M+' },
      ]
    },
    {
      title: 'MESSE & EVENT',
      shortTitle: 'Events',
      description: 'Nach dem Event ist vor dem Event. Bei Events und Messen zählt jede Gelegenheit, um sich zu präsentieren.',
      detail: 'Wir verstehen das und setzen alles daran, dass dein Stand oder Event eine echte Erfolgsgeschichte wird.',
      image: 'https://readdy.ai/api/search-image?query=impressive%20trade%20show%20exhibition%20booth%20with%20modern%20design%20interactive%20displays%20brand%20presentation%20area%20professional%20event%20setup%20contemporary%20exhibition%20hall%20bright%20lighting%20clean%20aesthetic&width=1200&height=800&seq=event-service-001&orientation=landscape',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20calendar%20event%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-event-walnut&orientation=squarish',
      stats: [
        { label: 'Events/Year', value: '200+' },
        { label: 'Visitors Engaged', value: '500K+' },
        { label: 'Satisfaction', value: '97%' },
      ]
    },
  ];

  return (
    <section id="showcase" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#C8D400]/20 rounded-lg">
              <i className="ri-service-line text-3xl text-[#C8D400]"></i>
            </div>
            <div className="bg-[#C8D400]/20 px-6 py-3 rounded-lg border border-[#C8D400]/30">
              <p className="text-sm font-black text-sonic-dark tracking-wide uppercase">
                Our Services
              </p>
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-4 leading-tight">
            LASSEN WIR TATEN SPRECHEN
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-semibold">
            Ein Einblick in das, was rauskommt, wenn du bei uns reinschaust
          </p>
        </div>

        {/* Main Showcase Area */}
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated lime highlight glow */}
          <div 
            className={`absolute -inset-1 bg-gradient-to-r from-[#C8D400]/30 via-[#a8b300]/20 to-[#C8D400]/30 rounded-2xl blur-sm transition-all duration-500 pointer-events-none ${isHovered ? 'opacity-100 scale-[1.02]' : 'opacity-0'}`}
          ></div>
          
          {/* Border that animates on hover */}
          <div 
            className={`absolute inset-0 rounded-2xl border-4 transition-all duration-500 pointer-events-none z-20 ${isHovered ? 'border-[#C8D400] shadow-[0_0_30px_rgba(200,212,0,0.4)]' : 'border-gray-200'}`}
          ></div>

          <div className="grid lg:grid-cols-2 gap-0 relative">
            {/* Image Side */}
            <div className="relative h-[500px] lg:h-[600px]">
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-100'}`}></div>
              
              {/* Icon indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-24 h-24 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 ${isHovered ? 'scale-125 shadow-[0_0_40px_rgba(200,212,0,0.6)]' : 'scale-100'}`}>
                  <img
                    src={services[activeIndex].woodIcon}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Animated corner accents on hover */}
              <div className={`absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-[#C8D400] rounded-tl-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
              <div className={`absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#C8D400] rounded-tr-xl transition-all duration-500 lg:hidden ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
              <div className={`absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-[#C8D400] rounded-bl-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>

              {/* Title badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#C8D400] text-[#111] px-4 py-2 inline-block font-black text-sm mb-3">
                  Service
                </div>
                <h3 className="text-4xl font-black text-white">{services[activeIndex].title}</h3>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 bg-white relative">
              {/* Corner accents for content side */}
              <div className={`absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#C8D400] rounded-tr-xl transition-all duration-500 hidden lg:block ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
              <div className={`absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-[#C8D400] rounded-br-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">{services[activeIndex].description}</p>
                <p className="text-gray-600 leading-relaxed">{services[activeIndex].detail}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-[#C8D400] uppercase tracking-wide mb-4">Key Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {services[activeIndex].stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-[#C8D400]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <i className="ri-bar-chart-line text-2xl text-[#C8D400]"></i>
                      </div>
                      <div className="text-2xl font-black text-sonic-dark mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#C8D400] text-[#111] px-8 py-4 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer">
                Learn More
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Switcher Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 font-black transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeIndex === index
                  ? 'bg-[#C8D400] text-[#111]'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {service.shortTitle}
            </button>
          ))}
        </div>

        {/* Key Highlights - 3 cards with 2-line wavy borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'ri-team-line', title: 'Expert Talent Network', desc: '20,000+ trained promoters ready to represent your brand' },
            { icon: 'ri-store-line', title: 'Nationwide Coverage', desc: 'Seamless execution across all major retail channels in DACH' },
            { icon: 'ri-line-chart-line', title: 'Proven Results', desc: '€2.19B in sales generated for our brand partners' },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 relative overflow-visible cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle green background highlight */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C8D400]/3 via-transparent to-[#C8D400]/5 pointer-events-none" />
              
              {/* 2 Wavy SVG Border Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-xl">
                <defs>
                  <linearGradient id={`showcase-outer-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 1 : 0.2} />
                    <stop offset="50%" stopColor="#a8b300" stopOpacity={hoveredCard === index ? 1 : 0.12} />
                    <stop offset="100%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 1 : 0.2} />
                  </linearGradient>
                  <linearGradient id={`showcase-inner-${index}`} x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.7 : 0.08} />
                    <stop offset="50%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.85 : 0.05} />
                    <stop offset="100%" stopColor="#C8D400" stopOpacity={hoveredCard === index ? 0.7 : 0.08} />
                  </linearGradient>
                </defs>
                
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="10"
                  ry="10"
                  fill="none"
                  stroke={`url(#showcase-outer-${index})`}
                  strokeWidth={hoveredCard === index ? 2 : 0.8}
                  strokeDasharray={hoveredCard === index ? "12 6 16 6" : "4 12"}
                  className="transition-all ease-out"
                  style={{
                    filter: hoveredCard === index ? 'drop-shadow(0 0 6px rgba(200, 212, 0, 0.5))' : 'none',
                    transitionDuration: '1.2s',
                  }}
                >
                  {hoveredCard === index && (
                    <animate attributeName="stroke-dashoffset" values="0;-60" dur="4s" repeatCount="indefinite" />
                  )}
                </rect>
                
                <rect
                  x="6"
                  y="6"
                  width="calc(100% - 12px)"
                  height="calc(100% - 12px)"
                  rx="7"
                  ry="7"
                  fill="none"
                  stroke={`url(#showcase-inner-${index})`}
                  strokeWidth={hoveredCard === index ? 1.4 : 0.5}
                  strokeDasharray={hoveredCard === index ? "10 8 14 8" : "3 14"}
                  className="transition-all ease-out"
                  style={{
                    filter: hoveredCard === index ? 'drop-shadow(0 0 4px rgba(200, 212, 0, 0.4))' : 'none',
                    transitionDuration: '1.2s',
                  }}
                >
                  {hoveredCard === index && (
                    <animate attributeName="stroke-dashoffset" values="0;60" dur="5s" repeatCount="indefinite" />
                  )}
                </rect>
              </svg>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#C8D400]/20 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-2xl text-[#C8D400]`}></i>
                </div>
                <h4 className="text-lg font-bold text-sonic-dark mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
