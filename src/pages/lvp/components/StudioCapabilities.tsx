import { useState } from 'react';

export default function StudioCapabilities() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const capabilities = [
    {
      title: 'PROFESSIONAL STUDIO SETUP',
      items: [
        'Broadcast-quality cameras and lighting',
        'Green screen and virtual backgrounds',
        'Multi-camera angles for product demos',
        'Professional audio equipment'
      ]
    },
    {
      title: 'TECHNISCHE INFRASTRUKTUR',
      items: [
        'Glasfaser-Hochgeschwindigkeitsanbindung',
        'Redundante Systeme für maximale Zuverlässigkeit',
        'Echtzeit-Analytics-Dashboard',
        'CRM-Integration möglich'
      ]
    },
    {
      title: 'MARKEN-TRAINING',
      items: [
        'Produktwissen-Zertifizierung',
        'Brand Voice &amp; Messaging',
        'Verkaufstechniken und Einwandbehandlung',
        'Exzellenter Kundenservice'
      ]
    },
    {
      title: 'CONTENT MANAGEMENT',
      items: [
        'Session-Aufzeichnung und -Archivierung',
        'Performance-Metriken-Tracking',
        'Kundenfeedback-Erfassung',
        'Kontinuierlicher Verbesserungsprozess'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#111] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(200,212,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.8) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#C8D400]/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#C8D400]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/12 border border-[#C8D400]/25 px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Studio-Infrastruktur</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tight">
              UNSERE STUDIO-AUSSTATTUNG
            </h2>
            <p className="text-sm md:text-base text-white/55 mb-8 leading-relaxed">
              Unsere State-of-the-Art-Studioinfrastruktur garantiert professionelle, zuverlässige und ansprechende Kundenkontakte in großem Maßstab.
            </p>

            <div className="space-y-3 md:space-y-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/8 p-5 md:p-6 relative overflow-hidden cursor-default group transition-all duration-300 hover:bg-white/8 hover:border-[#C8D400]/30"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Left edge accent */}
                  <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-transparent group-hover:bg-[#C8D400] transition-all duration-300" />

                  <h3 className="text-sm md:text-base font-black text-white mb-3 flex items-center gap-3 uppercase tracking-wide">
                    <span className="w-7 h-7 bg-[#C8D400] flex items-center justify-center text-[#111] font-black text-xs flex-shrink-0">
                      {index + 1}
                    </span>
                    {capability.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="text-white/60 flex items-start gap-2.5">
                        <i className="ri-check-line text-[#C8D400] text-base flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20broadcast%20studio%20setup%20with%20multiple%20cameras%20lighting%20equipment%20and%20modern%20technology%20for%20live%20streaming%20clean%20organized%20space%20with%20white%20walls%20and%20professional%20equipment%20elegant%20dark%20atmosphere%20high%20end%20video%20production&width=800&height=1000&seq=lvp-studio-main-v2&orientation=portrait"
                alt="Professional Studio Ausstattung"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent squares */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C8D400]/15 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/4 -z-10" />

            {/* Floating metric badge */}
            <div className="absolute bottom-6 -left-4 md:-left-8 bg-[#111] border border-[#C8D400]/30 p-4">
              <div className="text-2xl font-black text-[#C8D400] leading-none mb-0.5">&gt;50.000</div>
              <div className="text-[10px] font-black text-white/50 uppercase tracking-widest">Live Calls p.a.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}