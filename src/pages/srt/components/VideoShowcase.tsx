import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const VIDEOS = [
  {
    id: 'live-reporting',
    icon: 'ri-live-line',
    title: 'Live Reporting',
    description:
      'Sieh Feld-Performance-Daten in Echtzeit fließen. Keine Verzögerungen, kein manuelles Hochladen, kein Warten auf End-of-Day-Reports.',
    videoId: 'jfKfPfyJRdk',
    tag: 'Echtzeit',
  },
  {
    id: 'dashboard',
    icon: 'ri-dashboard-3-line',
    title: 'Dashboard',
    description:
      'Navigiere deinen gesamten Betrieb von einem Bildschirm aus. Custom-Views, exportierbare Reports und KPIs, die für dein Business wirklich zählen.',
    videoId: 'jfKfPfyJRdk',
    tag: 'Überblick',
  },
  {
    id: 'team-performance',
    icon: 'ri-team-line',
    title: 'Team-Performance',
    description:
      'Verfolge individuelle und Team-Metriken. Identifiziere Top-Performer, erkenne Schulungsbedarf und optimiere Standortbesetzungen.',
    videoId: 'jfKfPfyJRdk',
    tag: 'HR & Teams',
  },
  {
    id: 'einsatzplanung',
    icon: 'ri-map-pin-2-line',
    title: 'Einsatzplanung',
    description:
      'Standorte, Zeitfenster, Personalstärke — datenbasiert optimiert. Das SRT berücksichtigt Saisonalität und Standort-Historie.',
    videoId: 'jfKfPfyJRdk',
    tag: 'Planung',
  },
  {
    id: 'forecasting',
    icon: 'ri-line-chart-line',
    title: 'Forecasting',
    description:
      'Prognosen bevor der erste Einsatz startet. Belastbare Sell-out-Vorhersagen auf Basis historischer Daten aus über 1,35 Mio. Einsätzen.',
    videoId: 'jfKfPfyJRdk',
    tag: 'Prognose',
  },
  {
    id: 'analytics',
    icon: 'ri-bar-chart-grouped-line',
    title: 'Analytics',
    description:
      'Baue die Reports, die du wirklich brauchst. Definiere Parameter, setze KPIs und bekomme Antworten auf deine spezifischen Fragen.',
    videoId: 'jfKfPfyJRdk',
    tag: 'Analyse',
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section id="srt-in-aktion" className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="SRT in Aktion" variant="dark" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-black text-sonic-dark leading-none tracking-tight"
              style={{ fontSize: 'clamp(36px,5vw,68px)' }}
            >
              SIEH DAS<br />
              <span className="text-[#C8D400]">SRT LIVE.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed lg:pb-2">
              Jede Funktion demonstriert — kein Sales-Pitch, nur das Tool das macht, wofür es gebaut wurde. Wähle eine Funktion links.
            </p>
          </div>
        </div>

        {/* Main layout: tabs left + video right */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Left: Tab list */}
          <div className="lg:col-span-2 flex flex-col gap-px">
            {VIDEOS.map((v, i) => {
              const isActive = activeVideo === i;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveVideo(i)}
                  className={`group flex items-center gap-4 px-5 py-3.5 text-left transition-all duration-200 cursor-pointer border-l-4 flex-1 ${
                    isActive
                      ? 'bg-[#111] border-[#C8D400]'
                      : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-[#C8D400]/30'
                  }`}
                >
                  <div
                    className={`w-9 h-9 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isActive ? 'text-[#C8D400]' : 'text-gray-400 group-hover:text-[#C8D400]/70'
                    }`}
                  >
                    <i className={`${v.icon} text-xl`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-black text-sm uppercase tracking-wide leading-tight transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-[#111]'
                      }`}
                    >
                      {v.title}
                    </p>
                    <p
                      className={`text-[10px] font-semibold mt-0.5 transition-colors duration-200 ${
                        isActive ? 'text-gray-400' : 'text-gray-400'
                      }`}
                    >
                      {v.tag}
                    </p>
                  </div>
                  {isActive && (
                    <i className="ri-arrow-right-s-line text-[#C8D400] text-lg flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Video panel */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="relative bg-[#111] overflow-hidden border-2 border-[#C8D400]/20 flex-1">
              {/* Video embed */}
              <div className="relative aspect-video">
                <iframe
                  key={VIDEOS[activeVideo].videoId + activeVideo}
                  src={`https://www.youtube.com/embed/${VIDEOS[activeVideo].videoId}?autoplay=1&mute=1&loop=1&playlist=${VIDEOS[activeVideo].videoId}`}
                  title={VIDEOS[activeVideo].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
              </div>

              {/* Description bar below video */}
              <div className="px-7 pb-7 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8D400]/10 border border-[#C8D400]/20 flex items-center justify-center flex-shrink-0">
                    <i className={`${VIDEOS[activeVideo].icon} text-[#C8D400] text-2xl`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-lg font-black text-white">{VIDEOS[activeVideo].title}</h3>
                      <span className="text-[10px] font-bold text-[#C8D400] bg-[#C8D400]/10 border border-[#C8D400]/20 px-2 py-0.5 uppercase tracking-wider whitespace-nowrap">
                        {VIDEOS[activeVideo].tag}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{VIDEOS[activeVideo].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step indicator below panel */}
            <div className="mt-3 flex items-center gap-2 justify-end">
              {VIDEOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`transition-all duration-200 cursor-pointer ${
                    activeVideo === i
                      ? 'w-6 h-1.5 bg-[#C8D400]'
                      : 'w-1.5 h-1.5 bg-gray-200 hover:bg-[#C8D400]/40'
                  }`}
                  aria-label={`Video ${i + 1} — ${VIDEOS[i].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}