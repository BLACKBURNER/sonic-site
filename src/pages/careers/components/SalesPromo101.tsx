import { useState } from 'react';

export default function SalesPromo101() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'what' | 'myths'>('what');

  const mythsVsFacts = [
    {
      myth: 'Sales promo is just handing out flyers',
      fact: 'Modern sales promotion combines psychology, data analytics, and experiential marketing to create memorable brand interactions that drive measurable results.',
      icon: 'ri-file-paper-line',
    },
    {
      myth: 'Anyone can do it without training',
      fact: 'Professional promoters undergo extensive training in product knowledge, sales techniques, customer psychology, and brand representation—averaging 40+ hours before deployment.',
      icon: 'ri-graduation-cap-line',
    },
    {
      myth: 'It\'s a dying industry replaced by digital',
      fact: 'Physical retail still accounts for 85% of sales. The human touch in sales promotion creates emotional connections that digital alone cannot replicate.',
      icon: 'ri-store-line',
    },
    {
      myth: 'Results can\'t be measured',
      fact: 'With real-time dashboards, POS integration, and conversion tracking, every interaction is measured—from foot traffic to final purchase.',
      icon: 'ri-bar-chart-box-line',
    },
    {
      myth: 'It\'s just a temporary job for students',
      fact: 'Sales promotion offers genuine career paths. Our average tenure is 5.15 years, with clear progression from promoter to team lead to account manager.',
      icon: 'ri-briefcase-line',
    },
    {
      myth: 'Brands don\'t take it seriously',
      fact: 'Fortune 500 companies invest billions annually in field marketing. Apple, Samsung, Dyson, and Nike all rely on professional sales promotion teams.',
      icon: 'ri-building-line',
    },
  ];

  const whatIsSalesPromo = [
    {
      title: 'Brand Ambassadorship',
      desc: 'Trained professionals who embody brand values and create authentic connections with customers at the point of purchase.',
      icon: 'ri-user-star-line',
      stat: '20,000+',
      statLabel: 'Active Ambassadors',
    },
    {
      title: 'Live Product Demonstrations',
      desc: 'Hands-on experiences that let customers touch, feel, and understand products—converting curiosity into confidence.',
      icon: 'ri-live-line',
      stat: '€2.19B',
      statLabel: 'Sales Generated',
    },
    {
      title: 'Experiential Marketing',
      desc: 'Creating memorable moments that transform passive shoppers into engaged brand advocates through immersive experiences.',
      icon: 'ri-magic-line',
      stat: '150+',
      statLabel: 'Brand Partners',
    },
    {
      title: 'Data-Driven Insights',
      desc: 'Real-time analytics and customer feedback that help brands understand their audience and optimize strategies.',
      icon: 'ri-pie-chart-line',
      stat: '98%',
      statLabel: 'Client Satisfaction',
    },
  ];

  const promoTypes = [
    { name: 'In-Store Promotion', icon: 'ri-store-2-line', desc: 'Direct engagement at retail locations' },
    { name: 'Event Marketing', icon: 'ri-calendar-event-line', desc: 'Trade shows, launches, and activations' },
    { name: 'Roadshows', icon: 'ri-truck-line', desc: 'Mobile brand experiences across regions' },
    { name: 'Sampling Campaigns', icon: 'ri-gift-line', desc: 'Product trials that drive conversion' },
    { name: 'Mystery Shopping', icon: 'ri-spy-line', desc: 'Quality assurance and competitor insights' },
    { name: 'Training & Coaching', icon: 'ri-presentation-line', desc: 'Retail staff education programs' },
  ];

  return (
    <section className="py-24 px-6 bg-[#f9f9f7] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8D400]/8 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8D400]/6 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#111] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Branchenwissen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-none mb-1 uppercase">
            SALES PROMO
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-none mb-5 uppercase">
            GRUNDLAGEN.
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Die Kunst und Wissenschaft des Field Marketings verstehen
          </p>
        </div>

        {/* Section Toggle */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveSection('what')}
            className={`flex items-center gap-3 px-8 py-4 font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'what'
                ? 'bg-[#C8D400] text-[#111]'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
            style={{ borderRadius: 0 }}
          >
            <i className="ri-question-line text-xl"></i>
            <span>Was ist Sales Promo?</span>
          </button>
          <button
            onClick={() => setActiveSection('myths')}
            className={`flex items-center gap-3 px-8 py-4 font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
              activeSection === 'myths'
                ? 'bg-[#C8D400] text-[#111]'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
            style={{ borderRadius: 0 }}
          >
            <i className="ri-contrast-2-line text-xl"></i>
            <span>Mythen vs. Fakten</span>
          </button>
        </div>

        {/* What is Sales Promo Section */}
        {activeSection === 'what' && (
          <div className="space-y-16">
            <div className="bg-white p-10 relative overflow-hidden border border-gray-100" style={{ borderRadius: 0 }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D400]/10 blur-3xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8D400]" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[#1a1a1a] mb-6">
                  Die Brücke zwischen Marken und Käufern
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  <strong>Sales Promotion</strong> ist der strategische Einsatz geschulter Profis, um bedeutungsvolle, persönliche Interaktionen zwischen Marken und Konsumenten am Point of Purchase zu schaffen. Hier trifft Marketing auf Realität — Markenbotschaften werden in erlebbare Erfahrungen verwandelt, die sofortige Kaufentscheidungen und langfristige Loyalität fördern.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {whatIsSalesPromo.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-black text-[#C8D400] mb-1">{item.stat}</div>
                      <div className="text-sm text-gray-600">{item.statLabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatIsSalesPromo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 border border-gray-100 hover:border-[#C8D400]/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
                  style={{ borderRadius: 0 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C8D400] transition-all duration-500" style={{ width: hoveredCard === index ? '100%' : '0' }} />
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#C8D400]/15 flex items-center justify-center flex-shrink-0" style={{ borderRadius: 0 }}>
                      <i className={`${item.icon} text-3xl text-[#C8D400]`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#1a1a1a] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-8 text-center uppercase">Arten der Sales Promotion</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {promoTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="bg-white p-5 text-center border border-gray-100 hover:border-[#C8D400]/40 transition-all hover:-translate-y-1 cursor-pointer group"
                    style={{ borderRadius: 0 }}
                  >
                    <div className="w-12 h-12 bg-[#C8D400]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C8D400]/20 transition-colors" style={{ borderRadius: 0 }}>
                      <i className={`${type.icon} text-2xl text-[#C8D400]`}></i>
                    </div>
                    <h5 className="font-black text-[#1a1a1a] text-xs mb-1 uppercase">{type.name}</h5>
                    <p className="text-xs text-gray-500">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Myths vs Facts Section */}
        {activeSection === 'myths' && (
          <div className="space-y-6">
            {mythsVsFacts.map((item, index) => (
              <div 
                key={index}
                className="bg-white overflow-hidden border border-gray-100 hover:border-[#C8D400]/40 transition-all duration-300 relative cursor-pointer"
                style={{ borderRadius: 0 }}
                onMouseEnter={() => setHoveredCard(index + 100)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C8D400] transition-all duration-500" style={{ width: hoveredCard === index + 100 ? '100%' : '0' }} />
                <div className="grid md:grid-cols-2 relative z-10">
                  {/* Myth Side */}
                  <div className="p-8 bg-red-50 border-b md:border-b-0 md:border-r border-red-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0" style={{ borderRadius: 0 }}>
                        <i className="ri-close-circle-line text-2xl text-red-500"></i>
                      </div>
                      <div>
                        <span className="text-xs font-black text-red-500 uppercase tracking-wider">Mythos</span>
                        <p className="text-base font-semibold text-gray-800 mt-1">&quot;{item.myth}&quot;</p>
                      </div>
                    </div>
                  </div>
                  {/* Fact Side */}
                  <div className="p-8 bg-[#C8D400]/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C8D400]/20 flex items-center justify-center flex-shrink-0" style={{ borderRadius: 0 }}>
                        <i className="ri-checkbox-circle-line text-2xl text-[#C8D400]"></i>
                      </div>
                      <div>
                        <span className="text-xs font-black text-[#C8D400] uppercase tracking-wider">Fakt</span>
                        <p className="text-gray-700 mt-1 text-sm">{item.fact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Stats */}
            <div className="mt-12 bg-[#111] p-10 text-white relative overflow-hidden" style={{ borderRadius: 0 }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8D400]" />
              <h3 className="text-2xl font-black mb-8 text-center uppercase">Die Realität der Sales Promotion</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { stat: '€50 Mrd.+', label: 'Globaler Marktwert', icon: 'ri-global-line' },
                  { stat: '85 %', label: 'Retail weiterhin physisch', icon: 'ri-store-line' },
                  { stat: '3×', label: 'ROI vs. digitale Werbung', icon: 'ri-funds-line' },
                  { stat: '72 %', label: 'Bevorzugen menschliche Interaktion', icon: 'ri-user-heart-line' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-[#C8D400]/20 flex items-center justify-center mx-auto mb-3" style={{ borderRadius: 0 }}>
                      <i className={`${item.icon} text-2xl text-[#C8D400]`}></i>
                    </div>
                    <div className="text-3xl font-black text-[#C8D400] mb-1">{item.stat}</div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
