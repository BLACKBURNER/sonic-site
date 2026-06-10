import SectionBadge from '@/components/base/SectionBadge';

export default function LosungenHero() {
  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=dramatic%20retail%20store%20environment%20with%20bold%20product%20displays%20modern%20consumer%20electronics%20showcase%20dark%20cinematic%20atmosphere%20confident%20sales%20team%20in%20action%20premium%20brand%20activation%20point%20of%20sale%20wide%20angle%20editorial%20photography%20deep%20moody%20lighting&width=1920&height=1080&seq=losungen-hero-bg-v2&orientation=landscape"
          alt="Lösungen Hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      </div>

      {/* Lime ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C8D400]/6 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 text-center w-full">
        <div className="mb-8">
          <SectionBadge text="Lösungen" variant="light" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          DREI WEGE DURCH DIE<br />
          <span className="text-[#C8D400]">RETAIL-SCHALLMAUER</span>
        </h1>

        <p className="text-xl text-white/75 mb-4 font-semibold max-w-3xl mx-auto">
          Die richtige Lösung für jede Phase deiner Retail-Strategie.
        </p>

        <p className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-12">
          Ganz gleich ob du neu im Markt bist, deinen Absatz skalieren willst oder deine
          Omnichannel-Strategie zum Fliegen bringen musst: Wir haben die Menschen, die
          Daten und die Erfolgslösungen.
        </p>

        {/* Three pillars navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#markteintritt"
            className="inline-flex items-center gap-2 bg-sonic-lime text-[#111] px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-white hover:text-sonic-dark transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderRadius: 0 }}
          >
            <i className="ri-rocket-line"></i>
            Markteintritt
          </a>
          <a
            href="#absatz-steigern"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-black text-sm uppercase tracking-wider hover:border-sonic-lime hover:text-sonic-lime transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderRadius: 0 }}
          >
            <i className="ri-line-chart-line"></i>
            Absatz steigern
          </a>
          <a
            href="#omnichannel"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-black text-sm uppercase tracking-wider hover:border-sonic-lime hover:text-sonic-lime transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderRadius: 0 }}
          >
            <i className="ri-global-line"></i>
            Omnichannel
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}