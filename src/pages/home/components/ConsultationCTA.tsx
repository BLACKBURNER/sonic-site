import { useState } from 'react';

export default function ConsultationCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-16 px-6 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8D400]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="relative rounded-2xl overflow-visible p-10 md:p-14"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* SVG Border - Hidden at rest, solid on hover */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ borderRadius: '1.5rem' }}
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="24"
              ry="24"
              fill="none"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="0"
              className="transition-all duration-300"
              style={{
                strokeWidth: '0',
                transition: 'stroke-width 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.strokeWidth = '2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.strokeWidth = '0';
              }}
            />
          </svg>

          {/* Inner background */}
          <div className="absolute inset-0 rounded-2xl bg-white/[0.03]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left — Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 rounded-lg px-4 py-2 mb-5">
                <div className="w-2 h-2 bg-[#C8D400] rounded-full animate-pulse"></div>
                <span className="text-[#C8D400] text-xs font-bold uppercase tracking-wider">
                  Kostenfrei — Kein Commitment
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                KOSTENFREIES<br />
                <span className="text-[#C8D400]">30-MIN-BERATUNGSGESPRÄCH</span>
              </h2>

              <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                Sprechen Sie direkt mit einem Sonic-Strategen. Wir analysieren Ihre DACH-Marktchancen,
                identifizieren Quick Wins und zeigen Ihnen genau, wie wir Ihre Ziele erreichen — ohne Druck,
                mit echtem Mehrwert.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 mt-6 justify-center lg:justify-start">
                {[
                  { icon: 'ri-time-line', text: '30 Minuten, kein Blabla' },
                  { icon: 'ri-user-star-line', text: 'Nur Senior-Strategen' },
                  { icon: 'ri-shield-check-line', text: 'NDA auf Wunsch' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-5 h-5 flex items-center justify-center text-[#C8D400]">
                      <i className={`${item.icon} text-base`}></i>
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA Card */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="relative rounded-xl bg-[#C8D400] p-8 text-center min-w-[280px] shadow-2xl shadow-[#C8D400]/20 hover:scale-[1.02] transition-transform duration-300">
                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-5">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-black uppercase tracking-wider">
                    Termine diese Woche verfügbar
                  </span>
                </div>

                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-calendar-check-line text-3xl text-white"></i>
                </div>

                <p className="text-white font-black text-xl mb-1">Kostenfreies Strategie-Gespräch</p>
                <p className="text-white/70 text-sm mb-6">30 Minuten · Online · Deutsch / Englisch</p>

                <a
                  href="#sonic-contact-form"
                  className="block w-full bg-[#1a1a1a] text-white font-black text-sm py-4 rounded-xl hover:bg-[#333] transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
                >
                  Jetzt Termin buchen
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>

                <p className="text-white/60 text-xs mt-4">
                  Antwort in der Regel innerhalb von 2 Stunden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
