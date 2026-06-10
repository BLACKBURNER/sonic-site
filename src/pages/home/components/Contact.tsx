import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const handleNav = (path: string) => navigate(path);

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Subtle texture lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 64px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-px bg-gray-200">

          {/* ── Box 1: ÜBER DIE SONIC GROUP — BLACK ──────────────────────── */}
          <div className="group bg-[#111] px-6 sm:px-10 md:px-14 py-10 md:py-16 flex flex-col justify-between min-h-[420px] md:min-h-[520px] transition-all duration-500 hover:bg-[#161600] relative overflow-hidden">
            {/* Glow orb */}
            <div
              className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8D400]/6 rounded-full blur-[90px] pointer-events-none"
              aria-hidden="true"
            />
            {/* Top lime bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8D400] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            {/* Left accent */}
            <div
              className="absolute top-0 left-0 bottom-0 w-[3px]"
              style={{ background: 'linear-gradient(180deg, #C8D400 0%, rgba(200,212,0,0.2) 100%)' }}
              aria-hidden="true"
            />

            <div>
              {/* Eyebrow */}
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8D400] mb-6">
                Was uns antreibt
              </p>

              {/* Headline */}
              <h2 className="text-4xl xl:text-5xl font-black text-white leading-[1.05] mb-2 relative inline-block">
                ÜBER DIE
                <br />
                SONIC GROUP
                <span
                  className="absolute left-0 bottom-[-4px] h-[5px] w-full"
                  style={{ background: 'linear-gradient(90deg, #C8D400 0%, rgba(200,212,0,0.3) 100%)' }}
                  aria-hidden="true"
                />
              </h2>

              {/* Divider */}
              <div className="mt-8 mb-7 h-px bg-white/10" aria-hidden="true" />

              {/* Body */}
              <p className="text-[15px] text-gray-400 leading-relaxed max-w-xl">
                Als Sales- und Marketing-Agentur mit Schwerpunkten rund um Personalprojekte
                sowie mit eigener Software verbinden wir Kreativität mit Performance, Daten mit
                Menschen und Marken mit Konsumenten. Für deinen messbaren Markenerfolg.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['#Doing new things', '#Doing things better', '#Doing things'].map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-bold text-white/70 border border-white/15 px-4 py-2 transition-all duration-300 group-hover:border-[#C8D400]/50 group-hover:text-[#C8D400] cursor-default"
                    style={{ borderRadius: 0 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ── DarumSonic integration: Daten Liefern Fakten ─────────── */}
              <div className="mt-8 pt-7 border-t border-white/8">
                <div className="flex items-start gap-4">
                  <span
                    className="text-[34px] font-black leading-none flex-shrink-0"
                    style={{ color: 'rgba(200,212,0,0.12)' }}
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C8D400] mb-1">
                      Daten Liefern Fakten
                    </p>
                    <p className="text-sm font-black text-white leading-tight mb-2">
                      Datenbasierte Vorhersagen
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Absatzprognosen auf Basis echter Marktdaten, Sell-out-Historien
                      und KI-Modellen — angedockt an deine Software.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {['Forecasting', 'Marktdaten', 'Performance'].map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold text-[#C8D400]/40 border border-[#C8D400]/15 px-2 py-0.5 transition-all duration-300 group-hover:text-[#C8D400]/70 group-hover:border-[#C8D400]/35"
                          style={{ borderRadius: 0 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() => handleNav('/about')}
                className="inline-flex items-center gap-3 border-2 border-[#C8D400] text-[#C8D400] px-8 py-3.5 font-black text-sm uppercase tracking-wider hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 active:scale-95"
                style={{ borderRadius: 0 }}
              >
                Mehr über Sonic
                <i className="ri-arrow-right-line text-base" />
              </button>
            </div>
          </div>

          {/* ── Box 2: KARRIERE — WHITE ───────────────────────────────────── */}
          <div className="group bg-white px-6 sm:px-10 md:px-14 py-10 md:py-16 flex flex-col justify-between min-h-[420px] md:min-h-[520px] transition-all duration-500 hover:bg-[#fafff0] relative overflow-hidden">
            {/* Top lime bar on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8D400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            {/* Right accent */}
            <div
              className="absolute top-0 right-0 bottom-0 w-[3px]"
              style={{ background: 'linear-gradient(180deg, #C8D400 0%, rgba(200,212,0,0.2) 100%)' }}
              aria-hidden="true"
            />

            <div>
              {/* Eyebrow */}
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8D400] mb-6">
                Menschen mit Energie gesucht
              </p>

              {/* Headline */}
              <h2 className="text-4xl xl:text-5xl font-black text-[#111] leading-[1.05] mb-2 relative inline-block">
                KARRIERE
                <span
                  className="absolute left-0 bottom-[-4px] h-[5px] w-full"
                  style={{ background: 'linear-gradient(90deg, #C8D400 0%, rgba(200,212,0,0.3) 100%)' }}
                  aria-hidden="true"
                />
              </h2>

              {/* Divider */}
              <div className="mt-8 mb-7 h-px bg-gray-100" aria-hidden="true" />

              {/* Body */}
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-xl">
                Zeige was du kannst, und freue dich auf gemeinsame Erfolge. Wichtig ist für uns
                deine Einstellung zum Job und was du erreichen willst – nicht nur das, was du
                schon erreicht hast.
              </p>

              {/* Feature pills */}
              <div className="flex flex-col gap-3 mt-8">
                {[
                  { icon: 'ri-star-line', text: 'Work with world-class brands' },
                  { icon: 'ri-rocket-2-line', text: 'Attitude over credentials' },
                  { icon: 'ri-team-line', text: 'Ein Team, das wie Familie ist' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center text-[#C8D400] flex-shrink-0">
                      <i className={`${item.icon} text-base`} />
                    </div>
                    <span className="text-sm text-gray-500">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* ── DarumSonic integration: Mensch. Der Unterschied. ──────── */}
              <div className="mt-8 pt-7 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  <span
                    className="text-[34px] font-black leading-none flex-shrink-0 transition-colors duration-500"
                    style={{ color: 'rgba(200,212,0,0.18)' }}
                    aria-hidden="true"
                  >
                    02
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C8D400] mb-1">
                      Mensch. Der Unterschied.
                    </p>
                    <p className="text-sm font-black text-[#111] leading-tight mb-2">
                      2.000 Talente im Pool
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Festangestellt, leidenschaftlich und mit Live-Einblick in die
                      Zielerreichung — deine Marke in besten Händen.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {['Festangestellt', 'Live-Einblick', 'Motivation'].map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold text-[#C8D400]/60 border border-[#C8D400]/20 px-2 py-0.5 transition-all duration-300 group-hover:text-[#C8D400] group-hover:border-[#C8D400]/40"
                          style={{ borderRadius: 0 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() => handleNav('/careers')}
                className="inline-flex items-center gap-3 bg-[#C8D400] text-white px-8 py-3.5 font-black text-sm uppercase tracking-wider hover:bg-[#111] hover:text-[#C8D400] transition-all duration-300 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2"
                style={{ borderRadius: 0 }}
              >
                Mehr dazu
                <i className="ri-arrow-right-line text-base" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}