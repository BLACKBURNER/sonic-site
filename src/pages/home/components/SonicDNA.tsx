import { useState } from 'react';

export default function SonicDNA() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dnaCards = [
    {
      number: '01',
      woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20bridge%20connection%20link%20phygital%20digital%20physical%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20bridge%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-bridge-dna-card-01&orientation=squarish',
      title: 'Phygital Pioneers',
      description: 'We bridge digital innovation with physical experiences, creating seamless brand moments that resonate across all touchpoints.',
      features: ['Hybrid Event Design', 'Omnichannel Strategy', 'Immersive Activations']
    },
    {
      number: '02',
      woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20lightbulb%20idea%20creative%20execution%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20lightbulb%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-bulb-dna-card-02&orientation=squarish',
      title: 'Creative Execution',
      description: 'From concept to completion, we deliver bold ideas with precision, ensuring every detail amplifies your brand story.',
      features: ['End-to-End Production', 'Brand Storytelling', 'Visual Excellence']
    },
    {
      number: '03',
      woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20rising%20bar%20chart%20data%20analytics%20results%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20chart%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-chart-dna-card-03&orientation=squarish',
      title: 'Data-Driven Results',
      description: 'Every campaign is measured, optimized, and refined. We turn insights into action and action into measurable growth.',
      features: ['Performance Analytics', 'ROI Optimization', 'Strategic Insights']
    },
    {
      number: '04',
      woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20globe%20world%20map%20market%20expertise%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20globe%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-globe-dna-card-04&orientation=squarish',
      title: 'Market Expertise',
      description: 'Deep knowledge of DACH markets combined with global best practices. We know what works, where, and why.',
      features: ['Local Market Intelligence', 'Cultural Adaptation', 'Regional Networks']
    }
  ];

  return (
    <section className="py-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20open%20plan%20corporate%20office%20interior%20with%20large%20windows%20natural%20light%20bright%20workspace%20desks%20meeting%20areas%20clean%20minimal%20professional%20environment%20wide%20angle%20architectural%20photography&width=1440&height=600&seq=dna-office-bg-v3&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Light overlay so cards remain readable */}
        <div className="absolute inset-0 bg-white/55"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header — pill removed */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-sonic-dark mb-3 leading-tight tracking-tight uppercase">
            Was uns auszeichnet
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Vier Säulen, die unsere Arbeitsweise definieren und jeden Erfolg möglich machen
          </p>
        </div>

        {/* DNA Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {dnaCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-transparent"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top Highlight Bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400 transition-all duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Left Accent Bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-lime-400 via-lime-500 to-lime-400 transition-all duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Lime Tint Overlay */}
              <div className={`absolute inset-0 bg-lime-500/5 transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              <div className="relative p-4">
                {/* Ghost Number */}
                <div className="absolute top-2 right-2 text-[60px] font-bold text-gray-100 leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-lime-500/20">
                  {card.number}
                </div>

                {/* Wooden Icon */}
                <div className="relative mb-3">
                  <div
                    className="w-10 h-10 overflow-hidden transition-all duration-500"
                    style={{
                      boxShadow: hoveredIndex === index
                        ? '0 6px 18px rgba(139,90,43,0.4), 0 0 10px rgba(200,212,0,0.2)'
                        : '0 2px 8px rgba(139,90,43,0.2)',
                      transform: hoveredIndex === index ? 'scale(1.1) rotate(-3deg)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={(card as typeof card & { woodIcon: string }).woodIcon}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-sonic-dark mb-2 relative z-10">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed relative z-10">
                  {card.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 relative z-10">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <i className={`ri-checkbox-circle-fill text-sm mt-0.5 transition-colors duration-500 ${
                        hoveredIndex === index ? 'text-lime-500' : 'text-gray-400'
                      }`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
