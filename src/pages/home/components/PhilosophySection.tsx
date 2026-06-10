export default function PhilosophySection() {
  const principles = [
    {
      number: '01',
      title: 'BASICS',
      description: 'Foundation first. We master the fundamentals before adding complexity.',
      icon: 'ri-building-line',
    },
    {
      number: '02',
      title: 'QUALITÄT',
      description: 'Quality over quantity. Every interaction, every data point, every person matters.',
      icon: 'ri-star-line',
    },
    {
      number: '03',
      title: 'INNOVATION',
      description: 'Technology serves people. Our SRT platform proves data transparency works.',
      icon: 'ri-lightbulb-line',
    },
  ];

  return (
    <section className="py-32 px-6 bg-sonic-gray relative">
      {/* Wooden Separator Top */}
      <div className="absolute top-0 left-0 w-full h-3">
        <img
          src="https://readdy.ai/api/search-image?query=seamless%20wooden%20plank%20texture%20light%20oak%20wood%20grain%20natural%20material%20horizontal%20pattern%20simple%20clean%20design&width=1920&height=12&seq=wood-sep-phil-top&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 bg-sonic-lime/20 px-6 py-3 rounded-lg border border-sonic-lime/30">
            <p className="text-sm font-semibold text-sonic-dark tracking-wide uppercase">
              Our Philosophy
            </p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-6 leading-tight">
            THREE PRINCIPLES
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4 font-semibold">
            Simple rules that guide everything we do
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Since 2007, these principles have kept us independent, healthy, and growing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="relative">
              {/* Wooden Divider Between Cards */}
              {index < principles.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-32 transform -translate-y-1/2">
                  <img
                    src="https://readdy.ai/api/search-image?query=vertical%20wooden%20plank%20divider%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20clean%20design&width=32&height=128&seq=wood-divider-${index}&orientation=portrait"
                    alt=""
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
              )}

              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 h-full">
                {/* Number Badge */}
                <div className="text-6xl font-black text-sonic-lime/20 mb-4">
                  {principle.number}
                </div>

                {/* Wooden styled icon */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <i className={`${principle.icon} text-7xl text-[#8B5A2B]`} style={{
                    filter: 'drop-shadow(0 2px 4px rgba(139, 90, 43, 0.5))',
                    color: 'rgba(101, 67, 33, 0.15)'
                  }}></i>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black text-sonic-dark mb-4 text-center">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-center text-lg">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center">
              <i className="ri-compass-line text-6xl text-[#8B5A2B]" style={{
                filter: 'drop-shadow(0 2px 4px rgba(139, 90, 43, 0.5))',
                WebkitTextStroke: '0.5px rgba(101, 67, 33, 0.3)'
              }}></i>
            </div>
            <div className="text-left">
              <p className="text-gray-600 mb-2">Want to know more about our approach?</p>
              <button className="text-sonic-dark font-bold hover:text-sonic-orange transition-colors flex items-center gap-2 whitespace-nowrap">
                <span>Read Our Story</span>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wooden Separator Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-3">
        <img
          src="https://readdy.ai/api/search-image?query=seamless%20wooden%20plank%20texture%20light%20oak%20wood%20grain%20natural%20material%20horizontal%20pattern%20simple%20clean%20design&width=1920&height=12&seq=wood-sep-phil-bottom&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
