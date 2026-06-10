import WoodenCard from '../../../components/base/WoodenCard';
import WoodenDivider from '../../../components/base/WoodenDivider';

export default function AudienceSelector() {
  const audiences = [
    {
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20rocket%20launch%20icon%20carved%20from%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-rocket-aud&orientation=squarish',
      title: 'Entering DACH?',
      description: 'Complete market entry solutions from strategy to execution',
      link: '/market-entry',
      badge: 'Most Popular',
      accent: 'sonic-lime',
    },
    {
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20growth%20chart%20icon%20carved%20from%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-chart-aud&orientation=squarish',
      title: 'Optimizing Performance?',
      description: 'Data-driven insights with our SRT technology platform',
      link: '/srt-technology',
      badge: null,
      accent: 'sonic-lime',
    },
    {
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20shopping%20bag%20retail%20icon%20carved%20from%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-shop-aud&orientation=squarish',
      title: 'Scaling Retail?',
      description: 'Transform digital presence into physical retail excellence',
      link: '/retail-solutions',
      badge: null,
      accent: 'sonic-lime',
    },
    {
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20handshake%20partnership%20icon%20carved%20from%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-hand-aud&orientation=squarish',
      title: 'Join Our Team?',
      description: 'Be part of 20,000+ talented professionals across DACH',
      link: '/careers',
      badge: 'Always Hiring',
      accent: 'sonic-lime',
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <WoodenDivider variant="diagonal" className="mb-16" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 bg-sonic-lime/20 px-6 py-3 rounded-lg border-2 border-[#D4A574]/40">
            <p className="text-sm font-semibold text-sonic-dark tracking-wide uppercase">
              Find Your Path
            </p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-6 leading-tight">
            WHAT'S YOUR GOAL?
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4 font-semibold">
            Every journey is different
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us where you're headed, and we'll show you the way forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-2 border-[#D4A574]/20"
            >
              {/* Wooden corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-[#D4A574] rounded-tl-2xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-[#D4A574] rounded-br-2xl opacity-40"></div>
              
              {/* Badge */}
              {audience.badge && (
                <div className="absolute -top-3 -right-3 bg-sonic-lime text-sonic-dark px-4 py-2 rounded-full text-xs font-black shadow-lg border-2 border-[#D4A574]/40">
                  {audience.badge}
                </div>
              )}

              {/* Wood Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden shadow-md ring-2 ring-[#D4A574]/30">
                <img
                  src={audience.woodIcon}
                  alt={audience.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-sonic-dark mb-3 text-center group-hover:text-sonic-lime transition-colors">
                {audience.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                {audience.description}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-center gap-2 text-sonic-dark font-bold group-hover:gap-4 transition-all">
                <span className="whitespace-nowrap text-sm">Get Started</span>
                <i className="ri-arrow-right-line text-lg"></i>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#D4A574] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which path fits your needs?
          </p>
          <button className="px-10 py-5 bg-sonic-lime text-[#111] font-bold text-lg rounded-xl hover:bg-sonic-lime/90 transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer">
            Talk to Our Team
          </button>
        </div>
      </div>
      
      <WoodenDivider variant="diagonal" className="mt-16" />
    </section>
  );
}
