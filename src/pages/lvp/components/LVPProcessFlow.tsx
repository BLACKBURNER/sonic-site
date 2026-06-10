import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    id: '01',
    icon: 'ri-qr-code-line',
    title: 'QR-Code scannen',
    subtitle: 'Am POS, Wobbler oder Verpackung',
    description: 'Der Kunde scannt den QR-Code direkt am Point of Sale — auf Displays, Wobblers, Aufklebern oder der Produktverpackung. Kein App-Download, keine Wartezeit.',
    tag: 'TRIGGER',
    highlights: ['Kein App-Download nötig', 'QR am Wobbler / Display', 'Sofortiger Start in < 1 Sek.'],
    color: '#C8D400',
  },
  {
    id: '02',
    icon: 'ri-smartphone-line',
    title: 'Live-Verbindung',
    subtitle: 'Direkt ins professionelle Studio',
    description: 'Das Smartphone verbindet sich sofort mit unserem Live-Studio — während der definierten Servicezeiten. Glasfaser-Qualität für jedes Gespräch.',
    tag: 'CONNECT',
    highlights: ['Glasfaser 1 Gbit/s', '< 2 Sek. Verbindungsaufbau', '99,9% Uptime garantiert'],
    color: '#C8D400',
  },
  {
    id: '03',
    icon: 'ri-customer-service-2-line',
    title: 'Live-Beratung',
    subtitle: 'Markenbotschafter in Echtzeit',
    description: 'Geschulte Produktexperten beantworten Fragen, demonstrieren live und verteilen Gutscheine. Jedes Gespräch wird protokolliert und ausgewertet.',
    tag: 'CONSULT',
    highlights: ['Zertifizierte Produktexperten', 'Live-Demo & Voucher möglich', 'Ø 6 Min. Beratungsdauer'],
    color: '#C8D400',
  },
  {
    id: '04',
    icon: 'ri-bar-chart-box-line',
    title: 'Messen & optimieren',
    subtitle: 'Echtzeit-Analytics via SRT',
    description: 'Jede Interaktion wird live getrackt: Viewer, Gesprächsdauer, Conversion-Rate und Kundenfeedback — alles in deinem Dashboard. Automatisch.',
    tag: 'ANALYSE',
    highlights: ['Echtzeit-Dashboard', 'Conversion-Tracking', 'Wöchentlicher Report'],
    color: '#C8D400',
  },
];

const metrics = [
  { value: 'Ø 6 Min.', label: 'Beratungsdauer', icon: 'ri-time-line' },
  { value: '>50.000', label: 'Live Calls p.a.', icon: 'ri-video-line' },
  { value: '100%', label: 'Managed Service', icon: 'ri-service-line' },
  { value: 'Echtzeit', label: 'Reporting via SRT', icon: 'ri-dashboard-line' },
];

export default function LVPProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef(autoPlay);
  autoPlayRef.current = autoPlay;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay || !visible) return;
    const t = setInterval(() => {
      setActiveStep((p) => (p + 1) % steps.length);
    }, 4000);
    return () => clearInterval(t);
  }, [autoPlay, visible]);

  const step = steps[activeStep];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#C8D400]/5 blur-[80px] pointer-events-none" />

      <div
        className="max-w-7xl mx-auto px-4 md:px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/10 border border-[#C8D400]/25 px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Der Prozess</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#111] mb-3 leading-tight tracking-tight">
            So funktioniert{' '}
            <span className="text-[#C8D400]">Live Video Promotion</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Vier Schritte — vom ersten Scan bis zur messbaren Conversion. Vollständig managed.
          </p>
        </div>

        {/* Step progress indicators */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((s, i) => {
            const isActive = activeStep === i;
            const isPast = i < activeStep;
            return (
              <div key={i} className="flex items-center gap-0">
                <button
                  onClick={() => { setActiveStep(i); setAutoPlay(false); }}
                  className="flex flex-col items-center gap-1.5 cursor-pointer group transition-all duration-300"
                  style={{ opacity: isActive ? 1 : 0.5, transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-xs transition-all duration-300 ${
                      isActive ? 'bg-[#C8D400] text-[#111]' : isPast ? 'bg-[#C8D400]/20 text-[#C8D400]' : 'bg-gray-100 text-gray-400'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {isPast ? <i className="ri-check-line text-sm" /> : s.id}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-[#C8D400]' : 'text-gray-400'}`}>
                    {s.tag}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div className="flex items-center mx-1 md:mx-2 mb-5">
                    <div className={`w-6 md:w-10 h-px transition-all duration-300 ${isPast ? 'bg-[#C8D400]' : 'bg-gray-200'}`} />
                    <div className={`w-0 h-0 border-l-[5px] border-l-transparent border-t-[4px] border-b-[4px] border-b-transparent ml-[-1px] transition-all duration-300 ${isPast ? 'border-t-[#C8D400]' : 'border-t-gray-200'}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active step detail card */}
        <div
          key={activeStep}
          className="relative bg-white border border-gray-100 overflow-hidden"
          style={{ animation: 'processStepIn 0.35s ease-out' }}
        >
          {/* Top lime bar */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#C8D400] to-transparent" />

          <div className="grid lg:grid-cols-[1fr_320px]">
            {/* Left: content */}
            <div className="p-8 md:p-10 relative">
              {/* Large watermark number */}
              <div
                className="absolute -top-2 -left-2 text-[120px] md:text-[150px] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(200,212,0,0.05)' }}
              >
                {step.id}
              </div>

              <div className="relative z-10">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-[#C8D400]/10 border border-[#C8D400]/20 px-3 py-1 mb-5">
                  <i className={`${step.icon} text-[#C8D400] text-xs`} />
                  <span className="text-[10px] font-black text-[#C8D400] uppercase tracking-widest">{step.tag} — SCHRITT {activeStep + 1}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-[#111] mb-1.5 leading-tight tracking-tight uppercase">{step.title}</h3>
                <p className="text-[#C8D400] text-sm font-semibold mb-4">{step.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">{step.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-100">
                      <div className="w-4 h-4 flex items-center justify-center bg-[#C8D400] flex-shrink-0" style={{ borderRadius: 0 }}>
                        <i className="ri-check-line text-white text-[10px]" />
                      </div>
                      <span className="text-gray-600 text-xs font-semibold">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: navigation panel */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-100 p-8 md:p-10 bg-[#fafaf8] flex flex-col justify-between">
              {/* Step timeline */}
              <div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Fortschritt</div>
                <div className="space-y-2.5">
                  {steps.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveStep(i); setAutoPlay(false); }}
                      className="w-full flex items-center gap-3 cursor-pointer group text-left"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center font-black text-[9px] transition-all duration-300 ${
                        i === activeStep ? 'bg-[#C8D400] text-[#111]' :
                        i < activeStep ? 'bg-[#C8D400]/20 text-[#C8D400]' : 'bg-gray-100 text-gray-400'
                      }`} style={{ borderRadius: 0 }}>
                        {i < activeStep ? <i className="ri-check-line text-[10px]" /> : s.id}
                      </div>
                      <div className={`flex-1 h-px transition-all duration-300 ${i < activeStep ? 'bg-[#C8D400]/50' : i === activeStep ? 'bg-[#C8D400]/30' : 'bg-gray-200'}`} />
                      <span className={`text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${
                        i === activeStep ? 'text-[#C8D400]' : i < activeStep ? 'text-gray-400' : 'text-gray-300'
                      }`}>
                        {s.tag}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-5 h-1 bg-gray-200">
                  <div
                    className="h-full bg-[#C8D400] transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-gray-400 font-bold">SCHRITT {activeStep + 1} VON {steps.length}</span>
                  <span className="text-[10px] text-[#C8D400] font-black">{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { setActiveStep((p) => Math.max(0, p - 1)); setAutoPlay(false); }}
                    disabled={activeStep === 0}
                    className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C8D400] hover:text-[#C8D400] transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                    style={{ borderRadius: 0 }}
                  >
                    <i className="ri-arrow-left-line text-sm" />
                  </button>
                  <button
                    onClick={() => { setActiveStep((p) => Math.min(steps.length - 1, p + 1)); setAutoPlay(false); }}
                    disabled={activeStep === steps.length - 1}
                    className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C8D400] hover:text-[#C8D400] transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                    style={{ borderRadius: 0 }}
                  >
                    <i className="ri-arrow-right-line text-sm" />
                  </button>
                  <button
                    onClick={() => setAutoPlay((p) => !p)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider border transition-all cursor-pointer ${
                      autoPlay ? 'border-[#C8D400]/40 text-[#C8D400] bg-[#C8D400]/8' : 'border-gray-200 text-gray-400'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    <i className={autoPlay ? 'ri-pause-line' : 'ri-play-line text-[10px]'} />
                    {autoPlay ? 'Auto' : 'Play'}
                  </button>
                </div>

                <a
                  href="mailto:info@sonic-promo.de?subject=Live Video Promotion Demo"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#C8D400] text-[#111] font-black text-xs uppercase tracking-widest hover:bg-[#111] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-video-line text-base" />
                  Live-Demo anfragen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 border-t-0 bg-white mt-0">
          {metrics.map((m, idx) => (
            <div key={idx} className="px-5 py-4 flex items-center gap-3 border-r border-gray-100 last:border-r-0 group hover:bg-[#fafaf8] transition-colors">
              <div className="w-8 h-8 flex items-center justify-center bg-[#C8D400]/10 flex-shrink-0 group-hover:bg-[#C8D400]/20 transition-colors">
                <i className={`${m.icon} text-[#C8D400] text-sm`} />
              </div>
              <div>
                <div className="text-lg font-black text-sonic-dark leading-none">{m.value}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes processStepIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}