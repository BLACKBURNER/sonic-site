import { useEffect, useRef, useState } from 'react';

export default function PhygitalReality() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,212,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Phygital Reality</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-5 leading-tight">
            THE PHYGITAL GAP
          </h2>
          <p className="text-xl text-sonic-dark max-w-3xl mx-auto mb-4 font-semibold">
            Deine Kunden wählen nicht zwischen Digital ODER Physisch.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Sie erwarten beides — nahtlos integriert. Die meisten Marken scheitern genau hier.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mt-12">
          {/* Digital Side */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div
              className="relative overflow-hidden p-10 border border-gray-100"
              style={{ borderRadius: 0, background: '#fafaf7' }}
            >
              {/* Lime top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8D400]" />
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#C8D400]/50" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#C8D400]/50" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#C8D400]/50" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#C8D400]/50" />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#C8D400]" style={{ borderRadius: 0 }}>
                  <i className="ri-smartphone-line text-2xl text-[#111]"></i>
                </div>
                <h3 className="text-2xl font-black text-sonic-dark uppercase">Digital World</h3>
              </div>

              <div className="space-y-5 relative z-10">
                {[
                  { pct: '67%', title: 'Research Online First', desc: 'Kunden recherchieren Produkte digital, bevor sie Geschäfte besuchen' },
                  { pct: '58%', title: 'Omnichannel Demand', desc: 'Erwarten nahtlose Erfahrungen über alle Touchpoints hinweg' },
                  { pct: '73%', title: 'Social Proof Driven', desc: 'Lesen Bewertungen und vergleichen vor dem Kauf' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-20 h-20 flex items-center justify-center border border-[#C8D400]/30 bg-[#C8D400]/10"
                      style={{ borderRadius: 0 }}
                    >
                      <span className="text-3xl font-black text-[#1a1a1a] font-sans tabular-nums leading-none">{item.pct}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-sonic-dark font-bold mb-1 text-base">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Physical Side */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div
              className="relative overflow-hidden p-10 border border-gray-100"
              style={{ borderRadius: 0, background: '#fff' }}
            >
              {/* Dark top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a1a1a]" />
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#1a1a1a]/20" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#1a1a1a]/20" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#1a1a1a]/20" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#1a1a1a]/20" />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a]" style={{ borderRadius: 0 }}>
                  <i className="ri-store-2-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-black text-sonic-dark uppercase">Physical Reality</h3>
              </div>

              <div className="space-y-5 relative z-10">
                {[
                  { icon: 'ri-hand-heart-line', title: 'Touch & Feel', desc: 'Produkte physisch erleben, bevor man kauft' },
                  { icon: 'ri-user-smile-line', title: 'Expert Guidance', desc: 'Beratung durch geschulte Fachkräfte vor Ort' },
                  { icon: 'ri-shopping-bag-3-line', title: 'Instant Gratification', desc: 'Produkte sofort mitnehmen — kein Warten' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-20 h-20 flex items-center justify-center border border-gray-200 bg-[#f5f5f5]"
                      style={{ borderRadius: 0 }}
                    >
                      <i className={`${item.icon} text-3xl text-[#1a1a1a]`}></i>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-sonic-dark font-bold mb-1 text-base">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The Gap Visualization */}
        <div className="mt-16 text-center">
          <div
            className="inline-block bg-white p-10 border border-gray-100 max-w-4xl relative overflow-hidden"
            style={{ borderRadius: 0 }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#C8D400]/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#C8D400]/40" />

            <p className="text-gray-600 text-base font-semibold mb-6 relative z-10">
              Die meisten Agenturen spezialisieren sich auf eines von beiden:
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center mb-8 relative z-10">
              <div
                className="px-8 py-4 bg-[#C8D400]/15 text-[#1a1a1a] font-black text-lg border border-[#C8D400]/40"
                style={{ borderRadius: 0 }}
              >
                Digital Only
              </div>
              <div className="text-gray-500 text-2xl font-bold">ODER</div>
              <div
                className="px-8 py-4 bg-[#f5f5f5] text-[#1a1a1a] font-black text-lg border border-gray-200"
                style={{ borderRadius: 0 }}
              >
                Physical Only
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8D400] to-transparent mb-8 relative z-10"></div>
            <p className="text-sonic-dark text-lg font-bold mb-6 relative z-10">Sonic schließt diese Lücke:</p>
            <div
              className="px-12 py-6 bg-[#1a1a1a] relative z-10"
              style={{ borderRadius: 0 }}
            >
              <span className="text-white font-black text-2xl tracking-wider">PHYGITAL INTEGRATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
