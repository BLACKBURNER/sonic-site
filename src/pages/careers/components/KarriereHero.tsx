import { useNavigate } from 'react-router-dom';

export default function KarriereHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center pt-24 md:pt-28 pb-14 md:pb-20 px-4 md:px-6 bg-white overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(200,212,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,212,0,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* Right-side portrait image — subtle */}
      <div className="absolute right-0 top-0 h-full w-[45%] hidden lg:block z-0 overflow-hidden">
        <img
          src="https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg"
          alt="Sonic Team"
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.12 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 60%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7 bg-[#C8D400]/10 px-5 py-2 border border-[#C8D400]/30">
            <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" style={{ borderRadius: 0 }} />
            <p className="text-xs font-black tracking-widest uppercase text-[#111]/80">Karriere bei Sonic</p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-sonic-dark mb-4 leading-tight tracking-tight">
            MENSCHEN MIT
            <br />
            <span className="text-[#C8D400]">ENERGIE</span> GESUCHT
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Zeige was du kannst, und freue dich auf gemeinsame Erfolge. Wichtig ist für uns deine Einstellung zum Job — nicht nur das, was du schon erreicht hast.
          </p>

          <p className="text-sm text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Aktuelle Stellen am Sonic-Campus in Krefeld und deutschlandweite Einsätze für unsere Kundenprojekte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('stellenangebote');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8D400] text-[#111] font-black uppercase tracking-wider hover:bg-[#111] hover:text-[#C8D400] transition-all cursor-pointer whitespace-nowrap text-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2"
              style={{ borderRadius: 0 }}
            >
              <i className="ri-briefcase-line" />
              Alle Stellen ansehen
            </button>
            <a
              href="https://calendly.com/sonic-group/tanja-15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-gray-600 font-black uppercase tracking-wider border-2 border-gray-200 hover:border-[#C8D400] hover:text-[#C8D400] transition-all cursor-pointer whitespace-nowrap text-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2"
              style={{ borderRadius: 0 }}
            >
              <i className="ri-send-plane-line" />
              Initiativbewerbung
            </a>
          </div>

          {/* Trust micro stats */}
          <div className="flex flex-wrap gap-6 justify-center mt-10 pt-8 border-t border-gray-100">
            {[
              { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20star%20award%20rating%20quality%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20star%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=64&height=64&seq=wood-star-karriere-hero-01&orientation=squarish', value: '4.8/5', label: 'Kununu Score' },
              { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20clock%20time%20tenure%20loyalty%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20clock%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=64&height=64&seq=wood-clock-karriere-hero-02&orientation=squarish', value: 'Ø 5,15J.', label: 'Betriebszugehörigkeit' },
              { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20team%20people%20network%20talent%20pool%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20people%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=64&height=64&seq=wood-team-karriere-hero-03&orientation=squarish', value: '20.000+', label: 'Talente im Netzwerk' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 overflow-hidden flex-shrink-0"
                  style={{ borderRadius: 0, boxShadow: '0 2px 6px rgba(139,90,43,0.2)' }}
                >
                  <img src={stat.woodIcon} alt={stat.label} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#111] leading-none">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-bold mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}