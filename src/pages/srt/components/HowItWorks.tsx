import { useState, useEffect, useCallback } from 'react';
import PhoneFrame from '@/components/base/PhoneFrame';
import SectionBadge from '@/components/base/SectionBadge';
import FloatingBadge from '@/components/base/FloatingBadge';

const STEPS = [
  {
    number: '01',
    tag: 'SCAN',
    title: 'QR-Code scannen',
    desc: 'Der Kunde scannt den QR-Code am Produkt oder der Verpackung. Keine App-Installation nötig.',
    screen: 'scan',
    metrics: ['< 2 Sek.', 'Kein Download', '24/7 Verfügbar'],
  },
  {
    number: '02',
    tag: 'CONNECT',
    title: 'Sofort verbinden',
    desc: 'WebRTC-Verbindung wird in Echtzeit aufgebaut. Keine Wartezeit, keine Registrierung.',
    screen: 'connect',
    metrics: ['1 Gbit/s', '99,9% Uptime', '4K HD'],
  },
  {
    number: '03',
    tag: 'LIVE',
    title: 'Live-Beratung',
    desc: 'Produktexperte berät live per Video. Fragen beantworten, Demos zeigen, Kauf abschließen.',
    screen: 'live',
    metrics: ['2 847 Scans', '38,2% Conversion', '2:14 Ø Dauer'],
  },
  {
    number: '04',
    tag: 'DATA',
    title: 'Daten fließen',
    desc: 'Jede Interaktion wird anonymisiert erfasst. Insights für Marketing, Produkt und Vertrieb.',
    screen: 'data',
    metrics: ['>50K Calls', '4.8/5 Rating', '−28% Retouren'],
  },
];

function PhoneScreen({ screen }: { screen: string }) {
  switch (screen) {
    case 'scan':
      return (
        <div className="h-full flex flex-col items-center justify-center p-4">
          <div className="w-32 h-32 bg-white flex items-center justify-center mb-4 relative">
            {/* QR code pattern */}
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-0.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className={`${[0,1,2,5,6,7,10,11,12,14,17,19,20,22,23,24].includes(i) ? 'bg-[#111]' : 'bg-white'}`} />
                ))}
              </div>
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-6 h-6 border-2 border-[#C8D400]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-2 border-[#C8D400]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-2 border-[#C8D400]" />
            </div>
            {/* Scan frame */}
            <div className="absolute inset-0 border-2 border-[#C8D400]/60">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C8D400]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C8D400]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C8D400]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C8D400]" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-black text-[#C8D400] uppercase tracking-wider mb-1">QR-Code scannen</div>
            <div className="text-[8px] text-gray-500">Halte dein Smartphone über den Code</div>
          </div>
          {/* Scan line animation */}
          <div className="absolute top-1/4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#C8D400]/60 to-transparent animate-pulse" />
        </div>
      );
    case 'connect':
      return (
        <div className="h-full flex flex-col items-center justify-center p-4">
          <div className="relative mb-4">
            <div className="w-16 h-16 border-2 border-[#C8D400]/30 flex items-center justify-center">
              <i className="ri-link text-[#C8D400] text-2xl" />
            </div>
            {/* Pulse rings */}
            <div className="absolute inset-0 border border-[#C8D400]/20 animate-ping" />
            <div className="absolute -inset-2 border border-[#C8D400]/10 animate-ping" style={{ animationDuration: '2s' }} />
          </div>
          <div className="text-center mb-4">
            <div className="text-[10px] font-black text-[#C8D400] uppercase tracking-wider mb-1">Verbindung wird aufgebaut...</div>
            <div className="text-[8px] text-gray-500">WebRTC · Ende-zu-Ende verschlüsselt</div>
          </div>
          {/* Progress dots */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#C8D400]" />
            <div className="w-8 h-px bg-[#C8D400]/40" />
            <div className="w-2 h-2 bg-[#C8D400] animate-pulse" />
            <div className="w-8 h-px bg-[#C8D400]/20" />
            <div className="w-2 h-2 bg-white/20" />
          </div>
        </div>
      );
    case 'live':
      return (
        <div className="h-full flex flex-col">
          {/* Video feed area */}
          <div className="flex-1 bg-[#1a1a1a] relative overflow-hidden">
            {/* Simulated video background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#1a1a1a]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #C8D400 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {/* Advisor avatar */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C8D400]/20 border border-[#C8D400]/40 flex items-center justify-center">
                <i className="ri-user-3-line text-[#C8D400] text-sm" />
              </div>
              <div>
                <div className="text-[8px] text-white font-bold">Sarah M.</div>
                <div className="text-[7px] text-[#C8D400]">Produktexpertin · Online</div>
              </div>
            </div>
            {/* Live badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 px-2 py-0.5">
              <div className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
              <span className="text-[7px] text-red-400 font-black uppercase">Live</span>
            </div>
            {/* Customer self-view */}
            <div className="absolute bottom-3 right-3 w-16 h-20 bg-[#111] border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-user-line text-gray-600 text-lg" />
                </div>
              </div>
            {/* Chat bubble */}
            <div className="absolute bottom-3 left-3 max-w-[70%]">
              <div className="bg-[#C8D400]/15 border border-[#C8D400]/30 px-2.5 py-1.5">
                <p className="text-[8px] text-white/75 leading-snug">"Welches Modell passt zu meinem Budget?"</p>
              </div>
            </div>
          </div>
          {/* Controls */}
          <div className="h-10 bg-[#0d0d0d] border-t border-white/5 flex items-center justify-center gap-4">
            <div className="w-7 h-7 bg-white/10 flex items-center justify-center cursor-pointer hover:bg-red-500/20">
              <i className="ri-phone-line text-gray-400 text-xs" />
            </div>
            <div className="w-7 h-7 bg-[#C8D400] flex items-center justify-center cursor-pointer">
              <i className="ri-shopping-cart-line text-[#111] text-xs" />
            </div>
            <div className="w-7 h-7 bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
              <i className="ri-mic-line text-gray-400 text-xs" />
            </div>
          </div>
        </div>
      );
    case 'data':
      return (
        <div className="h-full flex flex-col p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[8px] font-black text-[#C8D400] uppercase tracking-wider">SRT Analytics</span>
            <span className="text-[7px] text-gray-500">Live</span>
          </div>
          <div className="flex-1 space-y-2 overflow-hidden">
            {/* Mini chart */}
            <div className="bg-[#1a1a1a] border border-white/5 p-2.5">
              <div className="text-[8px] text-gray-500 mb-2">Calls / Stunde</div>
              <div className="flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#C8D400]/30 hover:bg-[#C8D400]/60 transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[6px] text-gray-600">08:00</span>
                <span className="text-[6px] text-gray-600">20:00</span>
              </div>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1a1a1a] border border-white/5 p-2">
                <div className="text-[7px] text-gray-500 mb-0.5">Conversion</div>
                <div className="text-[12px] font-black text-[#C8D400]">38.2%</div>
                <div className="text-[6px] text-gray-600">+4.1% vs. letzte Woche</div>
              </div>
              <div className="bg-[#1a1a1a] border border-white/5 p-2">
                <div className="text-[7px] text-gray-500 mb-0.5">Ø Dauer</div>
                <div className="text-[12px] font-black text-white">2:14</div>
                <div className="text-[6px] text-gray-600">−0:18 vs. letzte Woche</div>
              </div>
            </div>
            {/* Top products */}
            <div className="bg-[#1a1a1a] border border-white/5 p-2.5">
              <div className="text-[8px] text-gray-500 mb-1.5">Top-Produkte (heute)</div>
              <div className="space-y-1">
                {['Galaxy S25 Ultra', 'Tefal Ingenio', 'Dyson V15'].map((p, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[7px] text-[#C8D400] font-black w-3">{i + 1}</span>
                    <div className="flex-1 h-1 bg-white/5 overflow-hidden">
                      <div className="h-full bg-[#C8D400]/40" style={{ width: `${100 - i * 25}%` }} />
                    </div>
                    <span className="text-[7px] text-gray-400">{124 - i * 32}x</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveStep((p) => (p + 1) % STEPS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const i = setInterval(nextStep, 5500);
    return () => clearInterval(i);
  }, [isPaused, nextStep]);

  return (
    <section
      id="datenfluss"
      className="py-24 px-6 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8D400]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8D400]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="Kunden-Journey" variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark mb-4 leading-tight tracking-tight">
            So funktioniert
            <br />
            <span className="text-[#C8D400]">Live-Video-Beratung</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vom QR-Code zum Live-Call in unter 2 Sekunden. Keine App, keine Registrierung.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Phone frame — skeuomorphic dark titanium */}
            <PhoneFrame width={260}>
              <div className="bg-[#111]" style={{ height: 450 }}>
                <div className="h-6 bg-[#0d0d0d] flex items-center justify-between px-3">
                  <span className="text-[7px] text-gray-500 font-bold">9:41</span>
                  <div className="flex items-center gap-1">
                    <i className="ri-signal-wifi-line text-gray-500 text-[8px]" />
                    <i className="ri-battery-fill text-[#C8D400] text-[8px]" />
                  </div>
                </div>
                <div className="h-8 bg-[#0d0d0d] border-b border-white/5 flex items-center px-3">
                  <div className="w-5 h-5 bg-[#C8D400] flex items-center justify-center mr-2">
                    <i className="ri-live-line text-[#111] text-[10px]" />
                  </div>
                  <span className="text-[9px] font-black text-white uppercase tracking-wider">SRT Live</span>
                  <span className="ml-auto text-[7px] text-[#C8D400] font-bold uppercase">{STEPS[activeStep].tag}</span>
                </div>
                <div style={{ height: 'calc(100% - 56px)' }} className="relative">
                  <PhoneScreen screen={STEPS[activeStep].screen} />
                </div>
              </div>
            </PhoneFrame>

            <FloatingBadge icon="ri-flashlight-line" text="< 2 Sekunden" className="-top-2 -right-4" />

            {/* Step indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`transition-all duration-300 cursor-pointer ${
                    activeStep === i
                      ? 'w-6 h-1.5 bg-[#C8D400]'
                      : i < activeStep
                        ? 'w-1.5 h-1.5 bg-[#C8D400]/50'
                        : 'w-1.5 h-1.5 bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Step details */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left flex items-start gap-5 p-6 border-2 transition-all duration-300 cursor-pointer group ${
                    activeStep === i
                      ? 'border-[#C8D400] bg-white'
                      : 'border-gray-200 bg-white hover:border-[#C8D400]/40'
                  }`}
                  style={{
                    boxShadow: activeStep === i
                      ? '0 8px 32px rgba(200,212,0,0.15), 0 2px 8px rgba(0,0,0,0.06)'
                      : '0 2px 8px rgba(0,0,0,0.04)',
                    transform: activeStep === i ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      activeStep === i
                        ? 'bg-[#C8D400] text-[#111]'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-[#C8D400]/10 group-hover:text-[#C8D400]'
                    }`}
                  >
                    <span className="text-sm font-black">{step.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base font-black transition-colors mb-1 ${
                        activeStep === i ? 'text-sonic-dark' : 'text-gray-700'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-all duration-300 ${
                        activeStep === i
                          ? 'text-gray-600 max-h-20 opacity-100'
                          : 'text-gray-400 max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {step.desc}
                    </p>
                    {activeStep === i && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {step.metrics.map((m, j) => (
                          <span
                            key={j}
                            className="text-[10px] font-black text-[#C8D400] bg-[#C8D400]/10 border border-[#C8D400]/30 px-2 py-1 uppercase tracking-wider"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}