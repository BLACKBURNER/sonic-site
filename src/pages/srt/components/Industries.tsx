import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import { CONTACT_EMAIL } from '@/lib/contact';

const USE_CASES = [
  {
    icon: 'ri-store-2-line',
    title: 'FMCG & Retail Execution',
    items: [
      'In-Store-Performance',
      'Regal-Audits, Planogramm-Compliance',
      'Koordination Merchandising-Teams',
      'POS-Material: Bestand & Platzierungstracking',
    ],
  },
  {
    icon: 'ri-heart-3-line',
    title: 'Beauty & Cosmetics',
    items: [
      'Einsätze von Beauty Advisors planen & steuern',
      'Für Retail und Events',
      'Tracking von Verbrauchsmaterial',
      'Performance-Messung',
    ],
  },
  {
    icon: 'ri-calendar-event-line',
    title: 'Event & Promotional Staffing',
    items: [
      'Personaleinsätze planen und steuern',
      'Material- und Warenflüsse steuern & tracken',
      'KPIs definieren',
      'Erfolge messen, vergleichen und bewerten',
    ],
  },
  {
    icon: 'ri-map-2-line',
    title: 'Field Sales & Territory Management',
    items: [
      'Regionen-basierte Einsatzplanung',
      'Routenplanung und -optimierung',
      'Besuchs- und Performance-Tracking',
      'Analytics zu Mitarbeitern & Regionen',
    ],
  },
  {
    icon: 'ri-tools-line',
    title: 'Technischer Support CE',
    items: [
      'Servicetechniker-Termin- und Tourenplanung',
      'Service Level Definition, Routenplanung',
      'Warenfluss tracken (Ersatzteile, Tauschgeräte...)',
      'Monitoring regionaler Abdeckung',
    ],
  },
  {
    icon: 'ri-hospital-line',
    title: 'Gesundheit & Pflege',
    items: [
      'Pharmaberater: Regionen managen & vergleichen',
      'Medizinprodukte: Produktdemo-Termine managen',
      'Pflege: Hausbesuche planen und routen',
      'Compliance / Dokumentationen',
    ],
  },
];

const STEP1_INDUSTRIES = [
  { icon: 'ri-tv-line', label: 'Consumer Electronics', color: '#C8D400' },
  { icon: 'ri-blaze-line', label: 'Haushaltsgeräte', color: '#C8D400' },
  { icon: 'ri-run-line', label: 'Sport & Outdoor', color: '#C8D400' },
  { icon: 'ri-heart-3-line', label: 'Kosmetik', color: '#C8D400' },
  { icon: 'ri-restaurant-line', label: 'Food & Beverages', color: '#C8D400' },
];

const STEP2_CHALLENGES = [
  { icon: 'ri-database-2-line', label: 'Datensilos zusammenführen' },
  { icon: 'ri-eye-off-line', label: 'Keine Live-Transparenz' },
  { icon: 'ri-time-line', label: 'Reports kommen zu spät' },
  { icon: 'ri-money-euro-circle-line', label: 'ROI schwer messbar' },
];

const STEP3_GOALS = [
  { icon: 'ri-dashboard-line', label: 'Live-Dashboard aufbauen' },
  { icon: 'ri-line-chart-line', label: 'Absatz steigern' },
  { icon: 'ri-team-line', label: 'Field Force steuern' },
  { icon: 'ri-file-chart-line', label: 'Reporting automatisieren' },
];

interface SelectionCardProps {
  icon: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

function SelectionCard({ icon, label, selected, onClick }: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-4 p-4 text-left cursor-pointer transition-all duration-300 group w-full"
      style={{
        background: '#fff',
        border: selected ? '2px solid #C8D400' : '2px solid #e5e7eb',
        borderRadius: 0,
        transform: selected ? 'translateY(-3px)' : 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLElement).style.border = '2px solid rgba(200,212,0,0.5)';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.border = '2px solid #e5e7eb';
        }
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: selected ? '#C8D400' : '#f3f4f6',
        }}
      >
        <i className={`${icon} text-xl ${selected ? 'text-[#111]' : 'text-gray-500'}`} />
      </div>

      {/* Label */}
      <span className={`font-bold text-sm flex-1 transition-colors duration-300 ${selected ? 'text-[#111]' : 'text-gray-700'}`}>
        {label}
      </span>

      {/* Check indicator */}
      <div
        className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: selected ? '#C8D400' : 'transparent',
          border: selected ? '2px solid #C8D400' : '2px solid #d1d5db',
        }}
      >
        {selected && <i className="ri-check-line text-[#111] text-xs font-black" />}
      </div>

      {/* Active left accent bar */}
      {selected && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: '#C8D400' }}
        />
      )}
    </button>
  );
}

export default function Industries() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (val: string) => {
    setSelected((prev) => ({ ...prev, [step]: val }));
  };

  const handleNext = () => {
    if (step < 4) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = () => setSubmitted(true);

  const currentList =
    step === 1 ? STEP1_INDUSTRIES :
    step === 2 ? STEP2_CHALLENGES :
    step === 3 ? STEP3_GOALS : [];

  const stepLabels = ['Branche', 'Challenge', 'Ziel', 'Abschluss'];

  return (
    <section id="branchen" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background grain/texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #111 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C8D400]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ——— Industry Use-Case Grid ——— */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <SectionBadge text="Branchen & Use Cases" variant="dark" />
              <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end mb-6">
              <h2
                className="font-black text-sonic-dark leading-tight tracking-tight"
                style={{ fontSize: 'clamp(26px,3.5vw,44px)' }}
              >
                VON RETAIL<br />
                EXECUTION BIS<br />
                <span className="text-[#C8D400]">HEALTHCARE.</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed lg:pb-2">
                Das SRT ist bereit für jedes Projekt, bei dem Menschen zielorientiert und koordiniert eingesetzt werden.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="bg-[#f5f5f5] border border-gray-100 p-6 group hover:border-[#C8D400]/30 hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/12 border border-[#C8D400]/20 group-hover:bg-[#C8D400]/20 transition-colors duration-300 flex-shrink-0">
                    <i className={`${uc.icon} text-[#C8D400] text-lg`} />
                  </div>
                  <h3 className="text-sm font-black text-sonic-dark leading-snug tracking-tight">{uc.title}</h3>
                </div>
                <ul className="space-y-2">
                  {uc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#C8D400] flex-shrink-0 mt-2" />
                      <span className="text-xs text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ——— Quiz / Funnel ——— */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-sonic-dark mb-3 leading-tight tracking-tight">
              Bereit für messbaren Erfolg?
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Lerne SRT für deine Branche kennen — in 30 Sekunden zur Lösung.
            </p>
          </div>

          {/* Step progress — elevated 3D pills */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="flex flex-col items-center">
                  <div
                    className="w-9 h-9 flex items-center justify-center font-black text-xs transition-all duration-400"
                    style={{
                      background: i + 1 <= step ? '#C8D400' : '#f3f4f6',
                      color: i + 1 <= step ? '#111' : '#9ca3af',
                      transform: i + 1 === step ? 'translateY(-2px)' : 'none',
                    }}
                  >
                    {i + 1 < step ? <i className="ri-check-line text-sm" /> : i + 1}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider mt-1.5 ${i + 1 === step ? 'text-[#C8D400]' : 'text-gray-400'}`}>
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div
                    className="w-10 h-px mb-4 transition-all duration-400"
                    style={{ background: i + 1 < step ? '#C8D400' : '#e5e7eb' }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Main card */}
          <div
            className="relative bg-[#fafaf8] overflow-hidden"
            style={{
              border: '2px solid #e5e7eb',
            }}
          >
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, #C8D400 30%, #C8D400 70%, transparent)' }} />

            <div className="p-8 md:p-12">
              <div className="absolute top-5 right-7 text-xs font-black text-gray-300 uppercase tracking-wider">
                {step} / 4
              </div>

              {submitted ? (
                <div className="text-center py-6">
                  <div
                    className="w-20 h-20 flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: 'linear-gradient(135deg, #C8D400 0%, #a8b200 100%)',
                      boxShadow: '0 12px 36px rgba(200,212,0,0.4), 0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    <i className="ri-check-double-line text-4xl text-[#111]" />
                  </div>
                  <h3 className="text-2xl font-black text-sonic-dark mb-3 leading-tight tracking-tight uppercase">Perfekt!</h3>
                  <p className="text-gray-600 mb-2 text-sm">
                    Branche: <strong>{selected[1]}</strong> · Challenge: <strong>{selected[2]}</strong> · Ziel: <strong>{selected[3]}</strong>
                  </p>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                    Wir haben eine passende SRT-Konfiguration für dich — lass uns in 30 Minuten darüber sprechen.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=SRT%20Beratung`}
                    className="inline-flex items-center gap-2 bg-[#C8D400] text-[#111] px-8 py-4 font-black hover:bg-[#111] hover:text-[#C8D400] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm"
                    style={{ boxShadow: '0 8px 24px rgba(200,212,0,0.35)' }}
                  >
                    <i className="ri-calendar-line" />
                    Beratungsgespräch buchen
                  </a>
                  <div className="mt-6">
                    <button
                      onClick={() => { setStep(1); setSelected({}); setSubmitted(false); }}
                      className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer transition-colors underline"
                    >
                      Von vorne starten
                    </button>
                  </div>
                </div>
              ) : step <= 3 ? (
                <div>
                  <h3 className="text-xl font-black text-sonic-dark mb-1 leading-tight tracking-tight">
                    {step === 1 && 'In welcher Branche bist du aktiv?'}
                    {step === 2 && 'Was ist deine größte Herausforderung?'}
                    {step === 3 && 'Was ist dein Hauptziel?'}
                  </h3>
                  <p className="text-sm text-gray-400 mb-7">Wähle eine Option aus — sie hebt sich direkt ab</p>

                  <div className="grid gap-3 mb-10">
                    {currentList.map((item) => (
                      <SelectionCard
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        selected={selected[step] === item.label}
                        onClick={() => handleSelect(item.label)}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleBack}
                      disabled={step === 1}
                      className="px-5 py-2.5 border-2 border-gray-200 font-bold text-sm text-gray-500 hover:border-gray-400 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      &larr; Zurück
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!selected[step]}
                      className="flex items-center gap-2 bg-[#C8D400] text-[#111] px-8 py-3 font-black transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap text-sm hover:bg-[#111] hover:text-[#C8D400]"
                      style={{ boxShadow: selected[step] ? '0 6px 20px rgba(200,212,0,0.35)' : 'none' }}
                    >
                      Weiter <i className="ri-arrow-right-line" />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-black text-sonic-dark mb-2 leading-tight tracking-tight uppercase">Und jetzt?</h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    Fast geschafft! Buche jetzt dein kostenloses SRT-Beratungsgespräch. In 30 Minuten zeigen wir dir, wie das SRT für <strong>{selected[1]}</strong> konkret aussehen kann.
                  </p>
                  <div className="space-y-3 mb-10">
                    {[
                      { label: 'Branche', val: selected[1] || '—', icon: 'ri-building-line' },
                      { label: 'Herausforderung', val: selected[2] || '—', icon: 'ri-error-warning-line' },
                      { label: 'Ziel', val: selected[3] || '—', icon: 'ri-flag-2-line' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-[#f5f5f5] border-2 border-[#f0f0ee]"
                      >
                        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-[#C8D400]">
                          <i className={`${item.icon} text-[#111] text-sm`} />
                        </div>
                        <div>
                          <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{item.label}</div>
                          <div className="text-sm font-bold text-[#111]">{item.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleBack}
                      className="px-5 py-2.5 border-2 border-gray-200 font-bold text-sm text-gray-500 hover:border-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      &larr; Zurück
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 bg-[#C8D400] text-[#111] px-8 py-3 font-black hover:bg-[#111] hover:text-[#C8D400] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm"
                      style={{ boxShadow: '0 6px 20px rgba(200,212,0,0.35)' }}
                    >
                      <i className="ri-calendar-line" />
                      Beratungsgespräch buchen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
