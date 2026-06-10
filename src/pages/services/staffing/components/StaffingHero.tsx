export default function StaffingHero() {
  const stats = [
    { value: '>2.000', label: 'Talente im Pool' },
    { value: '>120', label: 'Marken betreut' },
    { value: '>1,35 Mio.', label: 'Einsätze durchgeführt' },
    { value: '100 %', label: 'Festangestellt, keine Freelancer' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20brand%20ambassador%20team%20at%20retail%20store%20energetic%20motivated%20sales%20promoters%20group%20photo%20modern%20retail%20environment%20corporate%20team%20portrait%20diverse%20workforce%20engaged%20smiling%20confident%20professional%20staffing%20agency%20wide%20angle%20cinematic%20lighting&width=1920&height=1080&seq=staffing-hero-v3&orientation=landscape"
            alt="Staffing Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />
        </div>

        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
                <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Staffing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                DAS PERFEKTE TEAM<br />FÜR DEINEN ERFOLG
              </h1>
              <p className="text-lg text-[#C8D400] font-bold mb-3 drop-shadow-lg">
                Festangestellt. Geschult. Leidenschaftlich.
              </p>
              <p className="text-base text-white/75 leading-relaxed drop-shadow max-w-xl">
                Professionelle Promoter und Markenbotschafter aus unserem Pool von 2.000 Talenten – handverlesen, intensiv geschult und mit vollem Einsatz für deine Marke.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#how-it-works"
                  className="px-7 py-3.5 bg-[#C8D400] text-[#111] font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  Wie es funktioniert
                </a>
                <a
                  href="#gallery"
                  className="px-7 py-3.5 bg-white/10 text-white font-black border border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider backdrop-blur-sm"
                  style={{ borderRadius: 0 }}
                >
                  Unser Team
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm p-5 border border-white/15 hover:border-[#C8D400]/50 transition-all duration-300" style={{ borderRadius: 0 }}>
                  <div className="text-3xl font-black text-[#C8D400] font-mono mb-1 leading-tight">{stat.value}</div>
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
