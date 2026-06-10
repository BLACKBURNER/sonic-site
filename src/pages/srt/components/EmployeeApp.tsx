import { useState, useEffect, useCallback } from 'react';
import PhoneFrame from '@/components/base/PhoneFrame';
import SectionBadge from '@/components/base/SectionBadge';
import FloatingBadge from '@/components/base/FloatingBadge';

const STEPS = [
  {
    number: '01',
    tag: 'SCHICHT',
    icon: 'ri-calendar-check-line',
    title: 'Aufgaben einsehen',
    desc: 'Die Mitarbeiterin sieht auf den ersten Blick, wann und wo der nächste Einsatz eingeplant ist.',
    screen: 'shift',
  },
  {
    number: '02',
    tag: 'CHECK-IN',
    icon: 'ri-map-pin-2-line',
    title: 'Vor Ort einchecken',
    desc: 'GPS-gestützte Eincheckung nur vor Ort möglich. Arbeitszeiterfassung startet automatisch.',
    screen: 'checkin',
  },
  {
    number: '03',
    tag: 'ZIELE',
    icon: 'ri-focus-3-line',
    title: 'Zielerreichung tracken',
    desc: 'Ziele und Status der Zielerreichung einsehen. Verkaufstaktiken, die funktionieren, direkt sichtbar.',
    screen: 'targets',
  },
  {
    number: '04',
    tag: 'PAYROLL',
    icon: 'ri-money-euro-circle-line',
    title: 'Abrechnung erhalten',
    desc: 'Transparente Gehaltsabrechnung direkt in der App. Provisionen, Boni, Zielerreichung — alles nachvollziehbar.',
    screen: 'payroll',
  },
];

function PhoneScreen({ screen }: { screen: string }) {
  switch (screen) {
    case 'shift':
      return (
        <div className="h-full flex flex-col p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[8px] font-black text-[#C8D400] uppercase tracking-wider">Meine Einsätze</span>
            <span className="text-[8px] text-gray-500">KW 16 · Apr 2026</span>
          </div>
          <div className="flex-1 space-y-2 overflow-hidden">
            {/* Active today */}
            <div className="bg-[#1a1a1a] border border-[#C8D400]/30 p-2.5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-[#C8D400]" />
              <div className="flex items-center gap-2 mb-1.5 pl-1.5">
                <div className="w-5 h-5 bg-[#C8D400]/20 flex items-center justify-center">
                  <i className="ri-store-2-line text-[#C8D400] text-[10px]" />
                </div>
                <span className="text-[9px] font-bold text-white">MediaMarkt Berlin-Mitte</span>
                <span className="ml-auto text-[8px] text-[#C8D400] font-black">10:00–18:00</span>
              </div>
              <div className="flex gap-1.5 pl-1.5">
                <span className="text-[7px] bg-[#C8D400]/15 text-[#C8D400] px-1.5 py-0.5 font-bold">Samsung S25</span>
                <span className="text-[7px] bg-white/5 text-gray-400 px-1.5 py-0.5">Brand Promoter</span>
                <span className="text-[7px] bg-green-500/15 text-green-400 px-1.5 py-0.5 font-bold ml-auto">Heute</span>
              </div>
            </div>
            {/* Upcoming */}
            <div className="bg-[#1a1a1a] border border-white/8 p-2.5 opacity-60">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-white/5 flex items-center justify-center">
                  <i className="ri-store-2-line text-gray-500 text-[10px]" />
                </div>
                <span className="text-[9px] font-bold text-gray-300">Saturn Altona, Hamburg</span>
                <span className="ml-auto text-[8px] text-gray-500">Mo, 17.04</span>
              </div>
              <div className="flex gap-1.5">
                <span className="text-[7px] bg-white/5 text-gray-500 px-1.5 py-0.5">Dyson V15</span>
                <span className="text-[7px] bg-white/5 text-gray-500 px-1.5 py-0.5">10:00–17:00</span>
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-2.5 opacity-35">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-white/5 flex items-center justify-center">
                  <i className="ri-store-2-line text-gray-600 text-[10px]" />
                </div>
                <span className="text-[9px] font-bold text-gray-500">Expert Theresienstr., München</span>
                <span className="ml-auto text-[8px] text-gray-600">Mi, 19.04</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/8 flex items-center justify-between">
            <span className="text-[7px] text-gray-500">3 Einsätze diese Woche · 3 Städte</span>
            <span className="text-[7px] text-[#C8D400] font-bold">24,0 Std geplant</span>
          </div>
        </div>
      );
    case 'checkin':
      return (
        <div className="h-full flex flex-col p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-black text-[#C8D400] uppercase tracking-wider">GPS Check-in</span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-green-400 animate-pulse" />
              <span className="text-[7px] text-green-400">Signal stark</span>
            </div>
          </div>
          <div className="flex-1 bg-[#1a1a1a] border border-[#C8D400]/20 relative overflow-hidden">
            {/* Map grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            {/* Store marker */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-white/10 border border-white/20 flex items-center justify-center">
                <i className="ri-store-2-line text-white/60 text-[9px]" />
              </div>
            </div>
            {/* User pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-[#C8D400]/20 flex items-center justify-center border border-[#C8D400]/40">
                <i className="ri-map-pin-2-fill text-[#C8D400] text-sm" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#C8D400]/40" />
            </div>
            {/* GPS accuracy ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#C8D400]/10 animate-pulse" />
            {/* Distance line */}
            <div className="absolute bottom-2 left-2 right-2">
              <div className="bg-black/60 px-2 py-1 flex items-center justify-between">
                <span className="text-[7px] text-gray-400">MediaMarkt Berlin-Mitte</span>
                <span className="text-[7px] text-[#C8D400] font-bold">12 m</span>
              </div>
            </div>
          </div>
          <div className="mt-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#C8D400]" />
                <span className="text-[8px] text-gray-400">Accuracy: ±8 m</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#C8D400]" />
                <span className="text-[8px] text-gray-400">09:58 Uhr</span>
              </div>
            </div>
            <button className="w-full bg-[#C8D400] text-[#111] py-2.5 text-[10px] font-black uppercase tracking-wider hover:bg-white transition-colors cursor-pointer">
              JETZT EINCHECKEN
            </button>
          </div>
        </div>
      );
    case 'targets':
      return (
        <div className="h-full flex flex-col p-3">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[8px] font-black text-[#C8D400] uppercase tracking-wider">Ziele KW 16</span>
            <div className="bg-[#C8D400]/15 px-1.5 py-0.5">
              <span className="text-[7px] text-[#C8D400] font-black">94,7% erreicht</span>
            </div>
          </div>
          <div className="flex-1 space-y-2.5 overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] text-white font-bold">Verkäufe (Woche)</span>
                <span className="text-[8px] text-[#C8D400] font-black">18 / 25</span>
              </div>
              <div className="h-1.5 bg-white/10 overflow-hidden">
                <div className="h-full bg-[#C8D400]" style={{ width: '72%' }} />
              </div>
              <span className="text-[7px] text-gray-500">72% — Δ +3 seit gestern</span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] text-white font-bold">Upsell-Quote</span>
                <span className="text-[8px] text-[#C8D400] font-black">34% <span className="text-green-400 text-[7px]">+8%</span></span>
              </div>
              <div className="h-1.5 bg-white/10 overflow-hidden">
                <div className="h-full bg-[#C8D400]" style={{ width: '68%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] text-white font-bold">Kundenbewertung</span>
                <span className="text-[8px] text-[#C8D400] font-black">4,8 / 5,0</span>
              </div>
              <div className="h-1.5 bg-white/10 overflow-hidden">
                <div className="h-full bg-[#C8D400]" style={{ width: '96%' }} />
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#C8D400]/20 p-2 mt-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <i className="ri-lightbulb-line text-[#C8D400] text-[9px]" />
                <div className="text-[7px] text-[#C8D400] font-black uppercase tracking-wider">KI-Tipp</div>
              </div>
              <div className="text-[8px] text-white/75 leading-snug">Bundle S25 + SmartTag2 erhöht Upsell um x23%</div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[7px] text-gray-500">Rang 4 / 128 Mitarbeiter</span>
            <span className="text-[7px] text-[#C8D400] font-black">▲ Top 5%</span>
          </div>
        </div>
      );
    case 'payroll':
      return (
        <div className="h-full flex flex-col p-3">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[8px] font-black text-[#C8D400] uppercase tracking-wider">Lohnabrechnung</span>
            <span className="text-[8px] text-gray-500">April 2026</span>
          </div>
          <div className="flex-1 space-y-1.5 overflow-hidden">
            <div className="bg-[#1a1a1a] border border-white/8 p-2 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-white font-bold">Grundgehalt</div>
                <div className="text-[7px] text-gray-500">96,0 Std × €14,50 brutto</div>
              </div>
              <span className="text-[10px] text-white font-black">€1.392,00</span>
            </div>
            <div className="bg-[#1a1a1a] border border-white/8 p-2 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-white font-bold">Provision Samsung</div>
                <div className="text-[7px] text-gray-500">18 Verkäufe × €12,00</div>
              </div>
              <span className="text-[10px] text-[#C8D400] font-black">€216,00</span>
            </div>
            <div className="bg-[#1a1a1a] border border-white/8 p-2 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-white font-bold">Zielerreichungsbonus</div>
                <div className="text-[7px] text-gray-500">94,7% → Stufe Silber</div>
              </div>
              <span className="text-[10px] text-[#C8D400] font-black">€142,50</span>
            </div>
            <div className="bg-[#1a1a1a] border border-white/8 p-2 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-white font-bold">Fahrtkosten</div>
                <div className="text-[7px] text-gray-500">3 Einsätze × €18,00</div>
              </div>
              <span className="text-[10px] text-gray-300 font-black">€54,00</span>
            </div>
            <div className="border-t border-[#C8D400]/30 pt-1.5 flex items-center justify-between">
              <span className="text-[9px] text-white font-black uppercase">Brutto-Gesamt</span>
              <span className="text-sm text-[#C8D400] font-black">€1.804,50</span>
            </div>
            <div className="bg-[#C8D400]/10 border border-[#C8D400]/20 p-1.5">
              <div className="flex items-center gap-1.5">
                <i className="ri-check-double-line text-[#C8D400] text-[10px]" />
                <span className="text-[8px] text-[#C8D400] font-bold">Ausgezahlt 30.04.2026 · SEPA</span>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function EmployeeApp() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveStep((p) => (p + 1) % STEPS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const i = setInterval(nextStep, 5000);
    return () => clearInterval(i);
  }, [isPaused, nextStep]);

  return (
    <section
      id="team-app"
      className="py-24 px-6 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#C8D400]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="SRT aus Mitarbeitersicht" variant="dark" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-black text-sonic-dark leading-tight tracking-tight"
              style={{ fontSize: 'clamp(28px,4vw,48px)' }}
            >
              DIE EINSATZ-<br />
              APP FÜR DIE<br />
              <span className="text-[#C8D400]">FIELD FORCE.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed lg:pb-2">
              Alles, was Außendienstmitarbeiter im Einsatz brauchen — direkt auf dem Smartphone. iOS &amp; Android, offline-fähig.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Step selector */}
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
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    activeStep === i
                      ? 'bg-[#C8D400] text-[#111]'
                      : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                  }`}
                >
                  <i className={`${step.icon} text-xl`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                        activeStep === i ? 'text-[#C8D400]' : 'text-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3
                      className={`text-base font-black transition-colors ${
                        activeStep === i ? 'text-[#111]' : 'text-gray-700'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      activeStep === i
                        ? 'text-gray-600 max-h-20 opacity-100'
                        : 'text-gray-400 max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center">
            {/* Phone frame — skeuomorphic dark titanium */}
            <PhoneFrame width={260}>
              <div className="bg-[#111]" style={{ height: 450 }}>
                {/* Status bar */}
                <div className="h-6 bg-[#0d0d0d] flex items-center justify-between px-3">
                  <span className="text-[7px] text-gray-500 font-bold">9:41</span>
                  <div className="flex items-center gap-1">
                    <i className="ri-signal-wifi-line text-gray-500 text-[8px]" />
                    <i className="ri-battery-fill text-[#C8D400] text-[8px]" />
                  </div>
                </div>
                {/* App header */}
                <div className="h-8 bg-[#0d0d0d] border-b border-white/5 flex items-center px-3">
                  <div className="w-5 h-5 bg-[#C8D400] flex items-center justify-center mr-2">
                    <i className="ri-cpu-line text-[#111] text-[10px]" />
                  </div>
                  <span className="text-[9px] font-black text-white uppercase tracking-wider">SRT Team</span>
                  <span className="ml-auto text-[7px] text-[#C8D400] font-bold uppercase">{STEPS[activeStep].tag}</span>
                </div>
                {/* Screen content */}
                <div style={{ height: 'calc(100% - 56px)' }}>
                  <PhoneScreen screen={STEPS[activeStep].screen} />
                </div>
              </div>
            </PhoneFrame>

            <FloatingBadge icon="ri-smartphone-line" text="iOS & Android" className="-top-2 -right-4" />

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
                        : 'w-1.5 h-1.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}