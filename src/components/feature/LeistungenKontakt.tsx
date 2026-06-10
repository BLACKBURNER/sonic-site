import { openCalendly } from '@/components/feature/CalendlyWidget';

interface CheckItem {
  text: string;
}

interface LeistungenKontaktProps {
  headline: string;
  headlineAccent: string;
  subline?: string;
  checkItems?: CheckItem[];
  ctaLabel: string;
  ctaMailSubject: string;
  ctaIcon?: string;
}

export default function LeistungenKontakt({
  headline,
  headlineAccent,
  subline,
  checkItems,
  ctaLabel,
  ctaMailSubject,
  ctaIcon = 'ri-calendar-line',
}: LeistungenKontaktProps) {
  return (
    <section id="kontakt" className="bg-[#f7f6f3] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border border-sonic-dark/15 bg-[#f7f7f5] p-10 md:p-14 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D400]/10 blur-3xl pointer-events-none translate-x-16 -translate-y-16" />
          {/* Accent line top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C8D400]/60 via-[#C8D400]/20 to-transparent" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-sonic-dark/8 border border-sonic-dark/12 px-3 py-1 mb-5">
                <i className="ri-calendar-check-line text-sonic-dark/50 text-xs"></i>
                <span className="text-xs font-black text-sonic-dark/50 uppercase tracking-widest">Jetzt starten</span>
              </div>

              <h2 className="text-3xl font-black text-sonic-dark mb-4 leading-tight">
                {headline}<br />
                <span className="text-[#C8D400]">{headlineAccent}</span>
              </h2>

              {subline && (
                <p className="text-sonic-dark/55 text-base mb-6 leading-relaxed">{subline}</p>
              )}

              {checkItems && checkItems.length > 0 && (
                <div className="space-y-3">
                  {checkItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center bg-[#C8D400] flex-shrink-0">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-sonic-dark/70 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center md:text-right">
              <button
                type="button"
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-3 bg-sonic-dark text-white px-10 py-5 font-black hover:bg-sonic-lime hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm rounded-none"
              >
                <i className={`${ctaIcon} text-base`}></i>
                {ctaLabel}
              </button>
              <p className="text-sonic-dark/30 text-xs mt-3 font-semibold">
                Kostenfreies 30-Min-Gespräch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
