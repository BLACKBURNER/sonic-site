import { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact';

const STEPS = [
  {
    question: 'In welcher Branche bist du aktiv?',
    options: [
      { label: 'Consumer Electronics', icon: 'ri-tv-line' },
      { label: 'Haushaltsgeräte', icon: 'ri-blaze-line' },
      { label: 'Beauty & Kosmetik', icon: 'ri-seedling-line' },
      { label: 'Sport & Outdoor', icon: 'ri-run-line' },
      { label: 'Food & Beverages', icon: 'ri-restaurant-line' },
      { label: 'Pharma & Health', icon: 'ri-heart-pulse-line' },
    ],
  },
  {
    question: 'Was ist dein primäres Ziel?',
    options: [
      { label: 'Markteintritt', icon: 'ri-rocket-line' },
      { label: 'Absatz steigern', icon: 'ri-line-chart-line' },
      { label: 'Omnichannel', icon: 'ri-global-line' },
      { label: 'Markenbekanntheit', icon: 'ri-megaphone-line' },
      { label: 'Kundenbindung', icon: 'ri-heart-line' },
      { label: 'Sell-in-Support', icon: 'ri-store-line' },
    ],
  },
  {
    question: 'Wie viele POS-Standorte planst du?',
    options: [
      { label: '1–10', icon: 'ri-map-pin-line' },
      { label: '11–50', icon: 'ri-map-2-line' },
      { label: '51–200', icon: 'ri-earth-line' },
      { label: '200+', icon: 'ri-global-line' },
      { label: 'Noch unklar', icon: 'ri-question-line' },
      { label: 'National', icon: 'ri-flag-line' },
    ],
  },
  {
    question: 'Wann möchtest du starten?',
    options: [
      { label: 'Sofort', icon: 'ri-flashlight-line' },
      { label: 'In 1–3 Monaten', icon: 'ri-calendar-2-line' },
      { label: 'In 3–6 Monaten', icon: 'ri-calendar-check-line' },
      { label: 'In 6+ Monaten', icon: 'ri-calendar-line' },
      { label: 'Noch in Planung', icon: 'ri-draft-line' },
    ],
  },
];

export default function IndustrySelector() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (option: string) => {
    const next = [...answers, option];
    setAnswers(next);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setDone(false); };

  return (
    <section className="py-14 md:py-16 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8D400]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        {/* Label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#111] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Projekt in 60 Sekunden</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-3 leading-tight uppercase">
            Bereit für messbaren Erfolg?
          </h2>
          <p className="text-gray-500 text-sm">Beantworte 4 Fragen — wir zeigen dir den richtigen Weg.</p>
        </div>

        {/* Card */}
        <div
          className="overflow-hidden rounded-none"
          style={{
            background: '#ffffff',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
          }}
        >
          {/* Lime top bar */}
          <div className="h-[3px] bg-[#C8D400]" style={{ boxShadow: '0 0 20px rgba(200,212,0,0.6)' }} />

          {!done ? (
            <div className="p-8 md:p-10">
              {/* Progress */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#1a1a1a] text-xs font-black uppercase tracking-widest">
                  Schritt {step + 1} / {STEPS.length}
                </span>
                <div className="flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 rounded-full transition-all duration-400"
                      style={{ width: i <= step ? '28px' : '10px', background: i <= step ? '#C8D400' : 'rgba(0,0,0,0.1)' }}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-[#C8D400] rounded-full transition-all duration-600"
                  style={{ width: `${(step / STEPS.length) * 100}%` }}
                />
              </div>

              <h3 className="text-xl font-black text-[#1a1a1a] mb-6 leading-snug uppercase">
                {STEPS[step].question}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {STEPS[step].options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => handleAnswer(opt.label)}
                    className="flex items-center gap-3 bg-gray-50 hover:bg-[#C8D400]/10 border border-gray-200 hover:border-[#C8D400]/50 px-4 py-3.5 text-left transition-all duration-250 group cursor-pointer rounded-none"
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors duration-250"
                      style={{ background: 'rgba(0,0,0,0.05)' }}
                    >
                      <i className={`${opt.icon} text-sm text-gray-400 group-hover:text-[#1a1a1a] transition-colors duration-250`}></i>
                    </div>
                    <span className="text-gray-600 font-semibold text-sm group-hover:text-[#1a1a1a] transition-colors duration-250">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)); }}
                  className="mt-6 flex items-center gap-1.5 text-gray-400 hover:text-[#1a1a1a] transition-colors cursor-pointer text-xs font-bold"
                >
                  <i className="ri-arrow-left-line text-sm"></i>
                  Zurück
                </button>
              )}
            </div>
          ) : (
            <div className="p-10 text-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#C8D400]/20 mx-auto mb-6 border-2 border-[#C8D400]/40 rounded-none"
              >
                <i className="ri-check-double-line text-3xl text-[#1a1a1a]"></i>
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-2 uppercase">Perfekt, danke!</h3>
              <p className="text-gray-500 text-sm mb-2 leading-relaxed">
                <strong className="text-[#1a1a1a]">Branche:</strong> {answers[0]} &nbsp;·&nbsp; <strong className="text-[#1a1a1a]">Ziel:</strong> {answers[1]}
              </p>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                <strong className="text-[#1a1a1a]">Standorte:</strong> {answers[2]} &nbsp;·&nbsp; <strong className="text-[#1a1a1a]">Start:</strong> {answers[3]}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Beratungsanfrage%20%E2%80%94%20${encodeURIComponent(answers[0])}&body=Branche%3A%20${encodeURIComponent(answers[0])}%0AZiel%3A%20${encodeURIComponent(answers[1])}%0AStandorte%3A%20${encodeURIComponent(answers[2])}%0AStart%3A%20${encodeURIComponent(answers[3])}`}
                  className="inline-flex items-center gap-2 bg-[#C8D400] text-[#111] px-8 py-3.5 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm rounded-none"
                >
                  <i className="ri-calendar-line"></i>
                  Beratungsgespräch buchen
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-500 hover:text-[#1a1a1a] px-6 py-3.5 font-black hover:border-gray-400 transition-all duration-300 whitespace-nowrap cursor-pointer text-sm rounded-none"
                >
                  <i className="ri-refresh-line"></i>
                  Neu starten
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
