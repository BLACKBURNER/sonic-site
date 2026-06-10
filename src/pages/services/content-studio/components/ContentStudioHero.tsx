export default function ContentStudioHero() {
  const stats = [
    { value: '>500', label: 'Produktionen realisiert' },
    { value: '>50', label: 'Marken produziert' },
    { value: '4K', label: 'Video & Foto Qualität' },
    { value: '100 %', label: 'Inhouse – kein Outsourcing' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20video%20production%20studio%20with%20modern%20camera%20equipment%20lighting%20rigs%20creative%20workspace%20dark%20moody%20cinematic%20atmosphere%20high%20end%20photography%20studio%20with%20product%20display%20setup%20dramatic%20studio%20lighting%20premium%20production%20environment%20wide%20angle&width=1920&height=1080&seq=contentstudio-hero-v3&orientation=landscape"
            alt="Content Studio Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />
        </div>

        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sonic-lime/15 border border-sonic-lime/30 px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-sonic-lime animate-pulse" />
                <span className="text-xs font-black text-sonic-lime uppercase tracking-widest">Content Studio</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                PROFESSIONELLE INHALTE,<br />DIE VERKAUFEN
              </h1>
              <p className="text-lg text-[#C8D400] font-bold mb-3 drop-shadow-lg">
                Video, Foto & Live-Beratung aus einer Hand
              </p>
              <p className="text-base text-white/75 leading-relaxed drop-shadow max-w-xl">
                Von Produktfotografie bis Live-Video-Beratung – wir erstellen hochwertige Inhalte, die deine Marke zum Leben erwecken und deine Zielgruppe begeistern.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#how-it-works"
                  className="px-7 py-3 bg-sonic-lime text-sonic-dark font-black hover:bg-white hover:text-sonic-dark transition-all duration-300 whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider"
                >
                  Wie es funktioniert
                </a>
                <a
                  href="#gallery"
                  className="px-7 py-3 bg-white/10 text-white font-black border border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider backdrop-blur-sm"
                >
                  Portfolio ansehen
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm p-5 border border-white/15 hover:border-[#C8D400]/50 transition-all duration-300" style={{ borderRadius: 0 }}>
                  <div className="text-3xl font-black text-sonic-lime font-sans tabular-nums mb-1 leading-tight">{stat.value}</div>
                  <div className="text-white/65 text-xs font-bold uppercase tracking-wide leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
