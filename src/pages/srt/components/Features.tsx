import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';
import { CONTACT_EMAIL } from '@/lib/contact';

const FEATURES = [
  {
    number: '01',
    icon: 'ri-dashboard-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20dashboard%20monitor%20screen%20display%20analytics%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-srt-dashboard-v1&orientation=squarish',
    title: 'Echtzeit-Dashboard',
    description: 'Alle gewünschten Metriken auf einen Blick — live und übersichtlich dargestellt. So ist schneller Erkenntnisgewinn jederzeit möglich.',
    tags: ['Live-Daten', 'KPIs', 'Übersicht'],
    accent: 'Metriken & Monitoring',
  },
  {
    number: '02',
    icon: 'ri-bar-chart-grouped-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20bar%20chart%20performance%20analytics%20graph%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-srt-chart-v1&orientation=squarish',
    title: 'Performance-Tracking',
    description: 'Detaillierte Auswertung von Verkaufszahlen, Kampagnen-/Standort-/Mitarbeiter-Performance, Top-/Flop-Listen und Low-Performer-Index.',
    tags: ['Verkaufszahlen', 'Top/Flop-Listen', 'KPI-Analyse'],
    accent: 'Daten & Analyse',
  },
  {
    number: '03',
    icon: 'ri-team-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20team%20people%20group%20management%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-srt-team-v1&orientation=squarish',
    title: 'Team-Management',
    description: 'Zentrale Verwaltung von Mitarbeiter-Recruiting, Einsätzen, Zielerreichung und Abrechnung. GPS-genaue Standortprüfung inklusive.',
    tags: ['HR App', 'Recruiting', 'GPS-Standorte'],
    accent: 'HR & Organisation',
  },
  {
    number: '04',
    icon: 'ri-file-chart-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20document%20file%20report%20paper%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-srt-report-v1&orientation=squarish',
    title: 'Reportings nach Wunsch',
    description: 'Automatisch generierte Berichte als Excel, PowerPoint oder SQL. Visualisierte Reports werden gemeinsam definiert und programmiert.',
    tags: ['Excel / PPT', 'SQL-Export', 'Custom Reports'],
    accent: 'Export & Automatisierung',
  },
  {
    number: '05',
    icon: 'ri-smartphone-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20smartphone%20mobile%20phone%20app%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-srt-mobile-v1&orientation=squarish',
    title: 'Mobile App',
    description: 'Zugriff auf alle Daten mit angepassten Ansichten — für dich, für Mitarbeiter und für Sonic. iOS & Android, offline-fähig.',
    tags: ['Mobile', 'Angepasste Ansichten', 'Offline-Fähig'],
    accent: 'iOS & Android',
  },
  {
    number: '06',
    icon: 'ri-shield-check-line',
    woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20shield%20security%20protection%20lock%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-srt-shield-v1&orientation=squarish',
    title: 'Datensicherheit',
    description: 'Höchste Sicherheitsstandards für sensible Geschäftsdaten. End-to-End-Verschlüsselung, rollenbasierter Zugriff und vollständige Audit-Trails.',
    tags: ['Verschlüsselung', 'Rollenbasiert', 'Audit-Trails'],
    accent: 'Compliance & Security',
  },
];

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="Die Lösung" variant="dark" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest hidden md:block">
              Seit 2008 · 15+ Versionen
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-black text-sonic-dark leading-tight tracking-tight"
              style={{ fontSize: 'clamp(28px,4vw,48px)' }}
            >
              SRT: DIE<br />
              <span className="text-[#C8D400]">ALL-IN-ONE</span><br />
              SOFTWARE.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed lg:pb-2">
              Seit 2008 laufend weiterentwickelt, für maximalen Nutzwert.
              Seit 2024 mit KI-Features. Sechs Kernfunktionen — eine Plattform.
            </p>
          </div>
        </div>

        {/* 2×3 Feature grid — all content immediately visible */}
        <div
          ref={scrollRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100"
        >
          {FEATURES.map((feat, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                className="relative overflow-hidden bg-[#fafaf8] cursor-default group"
                style={{
                  transition: 'background 0.25s ease',
                  background: isHovered ? '#f7f6f3' : '#fafaf8',
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top lime accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 z-20"
                  style={{
                    height: '3px',
                    background: isHovered
                      ? 'linear-gradient(90deg, transparent 0%, #C8D400 30%, #C8D400 70%, transparent 100%)'
                      : 'transparent',
                    transition: 'background 0.25s ease',
                  }}
                />

                {/* Left edge-lit border (E1) */}
                <div
                  className="absolute top-0 left-0 bottom-0 z-20 w-0.5 transition-all duration-300"
                  style={{ background: isHovered ? '#C8D400' : 'transparent' }}
                />

                {/* Corner brackets (E2) */}
                <div
                  className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10 transition-all duration-300"
                  style={{ borderColor: isHovered ? 'rgba(200,212,0,0.5)' : 'transparent' }}
                />
                <div
                  className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10 transition-all duration-300"
                  style={{ borderColor: isHovered ? 'rgba(200,212,0,0.5)' : 'transparent' }}
                />
                <div
                  className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10 transition-all duration-300"
                  style={{ borderColor: isHovered ? 'rgba(200,212,0,0.5)' : 'transparent' }}
                />
                <div
                  className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10 transition-all duration-300"
                  style={{ borderColor: isHovered ? 'rgba(200,212,0,0.5)' : 'transparent' }}
                />

                {/* Number watermark (E4) */}
                <div
                  className="absolute bottom-4 right-5 font-black leading-none select-none pointer-events-none z-0 transition-colors duration-300"
                  style={{
                    fontSize: '6rem',
                    color: isHovered ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)',
                    lineHeight: 1,
                  }}
                >
                  {feat.number}
                </div>

                {/* Card content — always fully visible */}
                <div className="relative z-10 p-8 flex flex-col" style={{ minHeight: '340px' }}>
                  {/* Accent label */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="w-1.5 h-1.5 transition-colors duration-300"
                      style={{ background: isHovered ? '#C8D400' : '#d1d5db' }}
                    />
                    <span
                      className="text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
                      style={{ color: isHovered ? '#C8D400' : '#9ca3af' }}
                    >
                      {feat.accent}
                    </span>
                  </div>

                  {/* Icon box — wooden icon */}
                  <div
                    className="w-[60px] h-[60px] overflow-hidden mb-6 flex-shrink-0 transition-all duration-300"
                    style={{
                      outline: isHovered
                        ? '2px solid rgba(200,212,0,0.5)'
                        : '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <img
                      src={feat.woodIcon}
                      alt={feat.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg font-black text-sonic-dark mb-3 leading-snug tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
                    {feat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {feat.tags.map((tag, ti) => (
                      <Tag key={ti} variant={isHovered ? 'lime' : 'subtle'}>{tag}</Tag>
                    ))}
                  </div>

                  {/* Bottom strip */}
                  <div
                    className="flex items-center justify-between pt-4 transition-colors duration-300"
                    style={{
                      borderTop: `1px solid ${isHovered ? 'rgba(200,212,0,0.22)' : 'rgba(0,0,0,0.07)'}`,
                    }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {feat.number} / {String(FEATURES.length).padStart(2, '0')}
                    </span>
                    <div
                      className="w-7 h-7 flex items-center justify-center transition-all duration-250"
                      style={{
                        background: isHovered ? '#C8D400' : 'rgba(0,0,0,0.05)',
                        transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                      }}
                    >
                      <i
                        className="ri-arrow-right-line text-sm"
                        style={{ color: isHovered ? '#111' : '#ccc' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-px bg-[#f5f5f5] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
          <div>
            <p className="text-[#1a1a1a] font-black text-sm mb-0.5">Noch Fragen zum Funktionsumfang?</p>
            <p className="text-gray-500 text-xs">Wir zeigen dir das SRT live — kostenlos und unverbindlich.</p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=SRT%20Demo`}
            className="flex items-center gap-2 px-6 py-3 font-black text-[#111] text-xs uppercase tracking-widest cursor-pointer whitespace-nowrap hover:scale-105 transition-all duration-300 group flex-shrink-0"
            style={{ background: '#C8D400' }}
          >
            SRT Demo anfragen
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}