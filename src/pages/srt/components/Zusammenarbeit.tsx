import { useState, useRef, useEffect } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const STEPS = [
  {
    number: '01',
    title: 'KPI-Definition',
    icon: 'ri-focus-3-line',
    short: 'Erfolgskennzahlen definieren',
    description:
      'Gemeinsam definieren wir die Erfolgskennzahlen, die für dein Projekt entscheidend sind. Welche Metriken zählen wirklich — Abverkauf, Standort-Performance, Mitarbeiter-KPIs?',
    deliverable: 'KPI-Framework',
    details: [
      'Workshop zur Zieldefinition',
      'Festlegung primärer & sekundärer KPIs',
      'Benchmark-Referenzwerte vereinbaren',
      'Reporting-Frequenz und -Format abstimmen',
    ],
    accent: '#C8D400',
  },
  {
    number: '02',
    title: 'Datenintegration',
    icon: 'ri-database-2-line',
    short: 'Systeme verknüpfen',
    description:
      'Unsere Daten zu Branchen, Outlets und Mitarbeitern werden mit deinen ERP-Daten und evtl. externen Daten verknüpft, damit das SRT zur Single Source of Truth wird.',
    deliverable: 'Daten-Mapping',
    details: [
      'ERP- & WaWi-Anbindung',
      'Externe Datenfeeds (Marktforschung, POS)',
      'Historische Daten migrieren',
      'End-to-End-Verschlüsselung einrichten',
    ],
    accent: '#C8D400',
  },
  {
    number: '03',
    title: 'Dashboard-Setup',
    icon: 'ri-layout-grid-line',
    short: 'Visualisierung aufsetzen',
    description:
      'Optisch sauber aufbereitet für den schnellen Überblick und/oder Rohdaten-Stream für deine Tools. Für laufende Kontrolle und für\'s Controlling.',
    deliverable: 'Live Dashboard',
    details: [
      'Custom-View nach deinen Anforderungen',
      'KPI-Tiles, Charts, Ranking-Listen',
      'Export-Formate: Excel, PowerPoint, SQL',
      'Rollenbasierte Zugriffsrechte',
    ],
    accent: '#C8D400',
  },
  {
    number: '04',
    title: 'Team-Management',
    icon: 'ri-team-line',
    short: 'Field Force aufbauen',
    description:
      'Wir stellen in Absprache mit dir das Field-Team zusammen, erstellen den Einsatzkalender und buchen die Mitarbeiter ein.',
    deliverable: 'Einsatzplan',
    details: [
      'Talentpool-Matching nach Profil',
      'Einsatzkalender & Schichtplanung',
      'Briefing & Onboarding der Mitarbeiter',
      'GPS-Check-in-Konfiguration je Standort',
    ],
    accent: '#C8D400',
  },
  {
    number: '05',
    title: 'Abrechnung',
    icon: 'ri-money-euro-circle-line',
    short: 'Transparent & automatisch',
    description:
      'Wir rechnen die Einsätze inkl. Prämien mit den Mitarbeitern ab und buchen u.a. Fremdkosten ein. So werden alle Ausgaben zentral erfasst.',
    deliverable: 'Abrechnung',
    details: [
      'Automatische Gehaltsabrechnung',
      'Prämien & Boni-Berechnung',
      'Fremdkosten-Buchung & Übersicht',
      'Vollständige Audit-Trails',
    ],
    accent: '#C8D400',
  },
  {
    number: '06',
    title: 'Reportings',
    icon: 'ri-file-chart-2-line',
    short: 'Performance kontinuierlich tracken',
    description:
      'Auf Basis aller Daten zu Absatz, Umsatz, Kosten etc. erhältst du aktuelle Reportings, mit denen du die Performance tracken kannst.',
    deliverable: 'Report-Paket',
    details: [
      'Automatisch generierte Berichte',
      'Abverkauf, Umsatz & Kostenanalyse',
      'Top-/Flop-Listen & Low-Performer-Index',
      'Prognosen für Folge-Kampagnen',
    ],
    accent: '#C8D400',
  },
];

export default function Zusammenarbeit() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="zusammenarbeit"
      className="py-24 px-4 md:px-6 bg-white relative overflow-hidden"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="Zusammenarbeit" variant="dark" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest hidden md:block">6 Schritte</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2
              className="font-black text-sonic-dark leading-tight tracking-tight"
              style={{ fontSize: 'clamp(28px,4vw,48px)' }}
            >
              SO FUNK&shy;TIONIERT<br />
              <span className="text-[#C8D400]">DAS SRT.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed lg:pb-2">
              Von der ersten KPI-Definition bis zum laufenden Reporting — in 6 strukturierten Schritten wird das SRT zur zentralen Datenbasis deines Projekts. Kein Datenchaos. Kein manuelles Hochladen. Nur echte Erkenntnisse.
            </p>
          </div>
        </div>

        {/* Step list — editorial reading layout */}
        <div className="space-y-px">
          {STEPS.map((step, i) => {
            const isOpen = activeStep === i;
            return (
              <div key={step.number} className="group">
                <button
                  onClick={() => setActiveStep(isOpen ? null : i)}
                  className={`w-full flex items-center gap-6 px-6 py-5 transition-all duration-200 cursor-pointer text-left border-l-4 ${
                    isOpen
                      ? 'bg-[#111] border-[#C8D400]'
                      : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-[#C8D400]/40'
                  }`}
                >
                  {/* Step number */}
                  <span
                    className={`text-3xl font-black leading-none tabular-nums flex-shrink-0 w-12 transition-colors duration-200 ${
                      isOpen ? 'text-[#C8D400]' : 'text-gray-200 group-hover:text-[#C8D400]/50'
                    }`}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#C8D400]/15 text-[#C8D400]'
                        : 'bg-white text-gray-400 group-hover:text-[#C8D400]/70'
                    }`}
                  >
                    <i className={`${step.icon} text-lg`} />
                  </div>

                  {/* Title + short */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className={`font-black text-base uppercase tracking-wide transition-colors duration-200 ${
                          isOpen ? 'text-white' : 'text-sonic-dark'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold transition-colors duration-200 hidden sm:block ${
                          isOpen ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        — {step.short}
                      </span>
                    </div>
                  </div>

                  {/* Deliverable badge */}
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border flex-shrink-0 hidden md:block transition-all duration-200 ${
                      isOpen
                        ? 'border-[#C8D400]/40 text-[#C8D400] bg-[#C8D400]/10'
                        : 'border-gray-200 text-gray-400 bg-white'
                    }`}
                  >
                    {step.deliverable}
                  </span>

                  {/* Chevron */}
                  <div
                    className={`w-6 h-6 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'text-[#C8D400] rotate-180' : 'text-gray-400'
                    }`}
                  >
                    <i className="ri-arrow-down-s-line text-lg" />
                  </div>
                </button>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-[#111] border-l-4 border-[#C8D400] px-6 pb-7 pt-2">
                    <div className="ml-0 md:ml-[128px] grid md:grid-cols-2 gap-6">
                      {/* Description */}
                      <div>
                        <p className="text-white/75 text-sm leading-relaxed mb-5">{step.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {step.details.slice(0, 2).map((d) => (
                            <span
                              key={d}
                              className="text-[10px] font-bold text-[#C8D400] bg-[#C8D400]/10 border border-[#C8D400]/20 px-2.5 py-1"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Detail list */}
                      <div className="border-l border-white/10 pl-6">
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">Inhalte</p>
                        <ul className="space-y-2">
                          {step.details.map((d, di) => (
                            <li key={di} className="flex items-start gap-2.5 text-white/60 text-xs">
                              <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i className="ri-check-line text-[#C8D400] text-xs" />
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom progress strip */}
        <div className="mt-12 border border-gray-100 bg-gray-50 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs font-black uppercase tracking-widest text-[#111] flex-shrink-0">
              Schritt-für-Schritt zum laufenden Betrieb:
            </p>
            <div className="flex flex-wrap gap-2 flex-1">
              {STEPS.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 border text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeStep === i
                      ? 'bg-[#111] text-[#C8D400] border-[#111]'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-[#C8D400]/50 hover:text-[#111]'
                  }`}
                >
                  <span className={activeStep === i ? 'text-[#C8D400]' : 'text-gray-300'}>{s.number}</span>
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}