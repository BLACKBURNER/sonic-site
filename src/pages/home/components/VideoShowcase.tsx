export default function VideoShowcase() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Subtle highlight glow for video section */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Sonic in Action</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-5 leading-tight">
            ERLEBE SONIC DOINGS<br />
            <span className="text-[#C8D400]">IN 2 MINUTEN.</span>
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-3 leading-relaxed">
            Schau dir an, wie Sonic die Omnichannel-Lücke im echten Retail schließt — mit Menschen, die Marken erlebbar machen, und Aktionen, die sichtbar Umsatz bewegen.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Von POS und Field Sales über Activations, Events und Community Outreach bis hin zu echten Markenerlebnissen: So wird aus Strategie reale Wirkung.
          </p>
          <p className="text-sm font-bold text-[#111] mt-4 tracking-wide">People powered. Data proven.</p>
        </div>

        {/* Video Player - YouTube Embed */}
        <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: 0 }} role="region" aria-label="Sonic Retail Activation Video">
          {/* Border */}
          <div className="absolute inset-0 border-4 border-[#C8D400]/30 pointer-events-none z-20" style={{ borderRadius: 0 }} aria-hidden="true"></div>

          {/* YouTube Video Embed */}
          <div className="relative w-full h-[480px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&loop=1&playlist=jfKfPfyJRdk"
              title="Sonic Retail Activation Excellence"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Wooden icon strip */}
        <div className="flex items-center justify-center gap-5 sm:gap-10 mt-8 flex-wrap">
          {[
            { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20team%20people%20group%20promoters%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20people%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=72&height=72&seq=wood-team-video-strip-01&orientation=squarish', label: '20.000+ Promoter' },
            { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20store%20shop%20building%20retail%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20store%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=72&height=72&seq=wood-store-video-strip-02&orientation=squarish', label: 'DACH-weit' },
            { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20euro%20coin%20currency%20money%20sales%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20euro%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=72&height=72&seq=wood-euro-video-strip-03&orientation=squarish', label: '€2,19 Mrd. Umsatz' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              <div
                className="w-9 h-9 overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: '0 2px 8px rgba(139,90,43,0.2)',
                }}
              >
                <img
                  src={item.woodIcon}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-bold text-gray-600 group-hover:text-sonic-dark transition-colors duration-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
