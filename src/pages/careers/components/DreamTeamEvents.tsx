import { useState } from 'react';

export default function DreamTeamEvents() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);

  const events = [
    {
      title: 'Jährlicher Team-Summit',
      description: 'Drei Tage Strategie, Feiern und Teambuilding an exklusiven Locations in der DACH-Region. Unser größtes Event bringt die gesamte Sonic Family zusammen.',
      image: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png',
      icon: 'ri-building-line',
      duration: '6:45',
      views: '15.2K',
      highlight: '500+ Teilnehmer',
    },
    {
      title: 'Quartals-Celebrations',
      description: 'Top-Performer auszeichnen, Erfolge feiern und gemeinsam bei gutem Essen und Entertainment genießen. Jedes Quartal kommen wir zusammen.',
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/7-1.jpg',
      icon: 'ri-trophy-line',
      duration: '4:22',
      views: '9.8K',
      highlight: 'Top Performer',
    },
    {
      title: 'Training & Workshops',
      description: 'Praxisnahe Lerneinheiten mit Branchenexperten, Produktdemos und Skill-Entwicklung. Kontinuierliches Lernen ist das Herzstück unserer Kultur.',
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/12.jpg',
      icon: 'ri-lightbulb-line',
      duration: '5:15',
      views: '12.1K',
      highlight: 'Expert-geführt',
    },
    {
      title: 'Team-Ausflüge',
      description: 'Von Kart-Fahren bis Escape Rooms — wir nehmen uns Zeit für Spaß und echte Verbindungen. Hard work, play harder ist unser Motto.',
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
      icon: 'ri-gamepad-line',
      duration: '3:48',
      views: '8.5K',
      highlight: 'Pure Fun',
    },
    {
      title: 'Weihnachtsfeiern',
      description: 'Jahresendfeiern, die die gesamte Sonic Family für unvergessliche Abende zusammenbringen. Eine Tradition, die unsere Kultur definiert.',
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
      icon: 'ri-gift-line',
      duration: '7:30',
      views: '18.3K',
      highlight: 'Unvergesslich',
    },
    {
      title: 'Behind the Scenes',
      description: 'Tägliche Momente, die Sonic besonders machen — Kaffeepausen, Mittagessen und spontane Feiern. Die echte Kultur passiert jeden Tag.',
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
      icon: 'ri-camera-line',
      duration: '2:55',
      views: '6.7K',
      highlight: 'Everyday Magic',
    },
  ];

  const currentEvent = events[activeEvent];

  return (
    <section className="py-24 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8D400]/8 blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8D400]/6 blur-3xl pointer-events-none" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sonic-dark/8 border border-sonic-dark/15 px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-sonic-dark animate-pulse" />
              <span className="text-xs font-black text-sonic-dark uppercase tracking-widest">Kultur & Events</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark leading-tight tracking-tight uppercase mb-1">
              ZUSAMMEN FEIERN.
            </h2>
            <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark leading-tight tracking-tight uppercase mb-5">
              GEMEINSAM WACHSEN.
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Wir arbeiten hart und feiern noch härter — und bauen echte Verbindungen jenseits des Büros auf.
            </p>
          </div>

          {/* Video Showcase Area */}
          <div
            className="relative flex justify-center"
            style={{ padding: '0 0 8px 0' }}
          >
            {/* ── POLAROID FRAME ── */}
            <div
              className="relative w-full"
              onMouseEnter={() => { setIsVideoHovered(true); setHoveredPolaroid(true); }}
              onMouseLeave={() => { setIsVideoHovered(false); setHoveredPolaroid(false); }}
              style={{
                background: '#f5f2ec',
                padding: '8px 8px 56px 8px',
                boxShadow: hoveredPolaroid
                  ? '0 28px 72px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12)'
                  : '0 14px 44px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08)',
                transform: hoveredPolaroid
                  ? 'rotate(0deg) translateY(-5px)'
                  : 'rotate(-0.4deg)',
                transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'pointer',
              }}
            >
              {/* Photo area */}
              <div
                className="relative overflow-hidden group"
                style={{ borderRadius: 0 }}
                role="region"
                aria-label={`Event-Showcase: ${currentEvent.title}`}
              >
                <div className="relative w-full h-[560px]">
                  <img
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${isVideoHovered ? 'scale-105' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 transition-opacity duration-500 ${isVideoHovered ? 'opacity-80' : 'opacity-100'}`} />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className={`w-24 h-24 bg-[#C8D400] flex items-center justify-center transform transition-all duration-500 cursor-pointer ${isVideoHovered ? 'scale-125 bg-[#b8c400]' : 'scale-100'}`} style={{ borderRadius: 0 }}>
                      <i className={`ri-play-fill text-5xl text-[#1a1a1a] ml-2`} />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#C8D400] flex items-center justify-center" style={{ borderRadius: 0 }}>
                        <i className={`${currentEvent.icon} text-xl text-[#1a1a1a]`} />
                      </div>
                      <span className="text-[#C8D400] font-bold">{currentEvent.highlight}</span>
                    </div>
                    <h3 className="text-3xl font-black mb-2">{currentEvent.title}</h3>
                    <p className="text-lg opacity-90 mb-4 max-w-2xl">{currentEvent.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2"><i className="ri-time-line" /><span>{currentEvent.duration}</span></div>
                      <div className="flex items-center gap-2"><i className="ri-eye-line" /><span>{currentEvent.views} Aufrufe</span></div>
                      <div className="flex items-center gap-2"><i className="ri-calendar-line" /><span>2024</span></div>
                    </div>
                  </div>

                  {/* Lime accent line at bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
                </div>
              </div>

              {/* Polaroid caption strip — paper grain */}
              <div className="flex flex-col items-center justify-center pt-3 pb-1 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                    backgroundSize: '120px 120px',
                    opacity: 0.6,
                    mixBlendMode: 'multiply',
                  }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(180,160,120,0.04) 3px, rgba(180,160,120,0.04) 4px)', opacity: 0.8 }} />
                <div className="relative z-10 text-[11px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{currentEvent.title}</div>
                <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">Sonic Events · 2024</div>
              </div>
            </div>
          </div>

          {/* Event Switcher Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8" role="tablist" aria-label="Event-Auswahl">
            {events.map((event, index) => (
              <button
                key={index}
                onClick={() => setActiveEvent(index)}
                role="tab"
                aria-selected={activeEvent === index}
                aria-controls={`event-panel-${index}`}
                id={`event-tab-${index}`}
                className={`flex items-center gap-3 px-5 py-3 font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                  activeEvent === index
                    ? 'bg-sonic-lime text-sonic-dark'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#C8D400]/50'
                }`}
                style={{ borderRadius: 0 }}
              >
                <i className={`${event.icon} text-lg`}></i>
                <span>{event.title}</span>
              </button>
            ))}
          </div>

          {/* Key Highlights Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'ri-calendar-check-line', title: '50+ Events pro Jahr', desc: 'Von intimen Team-Dinners bis zu unternehmensweiten Feiern' },
              { icon: 'ri-map-pin-line', title: 'Exklusive Locations', desc: 'Premium-Venues in Deutschland, Österreich und der Schweiz' },
              { icon: 'ri-emotion-happy-line', title: '98 % Zufriedenheit', desc: 'Unsere Events erhalten durchgehend herausragendes Feedback' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 border border-gray-100 hover:border-[#C8D400]/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{ borderRadius: 0 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} — ${item.desc}`}
                onFocus={() => setHoveredCard(index)}
                onBlur={() => setHoveredCard(null)}
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-[#C8D400] transition-all duration-500" style={{ width: hoveredCard === index ? '100%' : '0' }} />
                <div className="w-12 h-12 bg-[#C8D400]/15 flex items-center justify-center mb-4" style={{ borderRadius: 0 }}>
                  <i className={`${item.icon} text-2xl text-[#C8D400]`}></i>
                </div>
                <h4 className="text-base font-black text-[#1a1a1a] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Unsere Kultur geht weit über die Arbeit hinaus — es geht darum, eine Gemeinschaft aufzubauen, in der Menschen echte Verbindungen aufbauen. Das ist der Grund, warum unsere Betriebszugehörigkeit bei durchschnittlich 5,15 Jahren liegt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
