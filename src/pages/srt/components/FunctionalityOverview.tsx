import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';
import { CONTACT_EMAIL } from '@/lib/contact';

interface Module {
  id: string;
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  detail: string;
  tags: string[];
  img: string;
}

const MODULES: Module[] = [
  {
    id: 'planung',
    number: '01',
    icon: 'ri-calendar-2-line',
    title: 'Planung von Aufgaben & Einsätzen',
    subtitle: 'Vollständige Einsatzplanung auf einen Blick',
    detail:
      'Plane Einsätze mit einem visuellen Drag-and-Drop-Kalender. Weise Aufgaben direkt Mitarbeitern zu, setze Prioritäten und verfolge den Status in Echtzeit. Saisonale Schwankungen, Sonderaktionen und wiederkehrende Einsätze werden einfach abgebildet.',
    tags: ['Einsatzplanung', 'Aufgaben', 'Kalender'],
    img: 'https://readdy.ai/api/search-image?query=professional%20field%20force%20planning%20dashboard%20software%20dark%20interface%20with%20calendar%20task%20scheduling%20beautiful%20modern%20UI%20design%20on%20laptop%20screen%20workspace%20with%20warm%20wood%20desk%20accessories%20organized%20workflow%20management%20enterprise%20software%20sleek%20minimal%20design%20warm%20studio%20lighting&width=1200&height=700&seq=srt-func-plan-v3&orientation=landscape',
  },
  {
    id: 'talentpool',
    number: '02',
    icon: 'ri-team-line',
    title: 'Verwaltung des Talentpools',
    subtitle: 'Von Recruiting bis Abrechnung — alles in einem',
    detail:
      'Von Bewerbung bis Abrechnung: Onboarding-Interviews, Fotos, Qualifikationen, Verfügbarkeiten und Gehaltsdaten liegen zentral im SRT. Kein Tool-Wechsel, keine Dateninseln.',
    tags: ['HR', 'Recruiting', 'Abrechnung'],
    img: 'https://readdy.ai/api/search-image?query=talent%20management%20HR%20employee%20profiles%20team%20database%20software%20beautiful%20modern%20dark%20interface%20with%20profile%20photos%20skills%20ratings%20analytics%20field%20force%20workforce%20management%20enterprise%20SaaS%20clean%20minimal%20design%20professional%20studio%20photography%20warm%20lighting&width=1200&height=700&seq=srt-func-talent-v3&orientation=landscape',
  },
  {
    id: 'gps',
    number: '03',
    icon: 'ri-map-pin-2-line',
    title: 'GPS-gestützter Einsatzort-Check-in',
    subtitle: 'Nur vor Ort — keine Umgehung möglich',
    detail:
      'Kein Fake-Check-in möglich: Das System prüft per GPS, ob der Mitarbeiter wirklich am Einsatzort ist. Erst dann wird die Zeiterfassung freigegeben. Transparenz für alle Seiten.',
    tags: ['GPS', 'Zeiterfassung', 'Check-in'],
    img: 'https://readdy.ai/api/search-image?query=GPS%20location%20tracking%20mobile%20app%20field%20service%20check-in%20map%20pins%20real%20time%20location%20monitoring%20beautiful%20dark%20interface%20smartphone%20screen%20showing%20store%20location%20verification%20map%20overlay%20retail%20field%20operations%20professional%20clean%20minimal%20design%20warm%20studio%20photography&width=1200&height=700&seq=srt-func-gps-v3&orientation=landscape',
  },
  {
    id: 'extdaten',
    number: '04',
    icon: 'ri-plug-line',
    title: 'Einbindung externer Daten',
    subtitle: 'ERP, WaWi, Hersteller-Apps und mehr',
    detail:
      'Verbinde ERP-Systeme, Warenwirtschaft, Hersteller-Apps und Handelsdaten nahtlos mit dem SRT. Planogramme, WKZ-Daten und externe Reports laufen in einer Oberfläche zusammen.',
    tags: ['ERP', 'WaWi', 'Integration'],
    img: 'https://readdy.ai/api/search-image?query=enterprise%20data%20integration%20API%20connections%20ERP%20system%20dashboard%20beautiful%20modern%20dark%20interface%20data%20flow%20visualization%20connecting%20multiple%20enterprise%20software%20platforms%20SAP%20integration%20real%20time%20sync%20professional%20minimal%20SaaS%20UI%20warm%20studio%20lighting%20clean%20design&width=1200&height=700&seq=srt-func-ext-v3&orientation=landscape',
  },
  {
    id: 'docintel',
    number: '05',
    icon: 'ri-file-text-line',
    title: 'Document Intelligence',
    subtitle: 'Automatische Verarbeitung von Dokumenten',
    detail:
      'KI-gestützte Dokumentenverarbeitung: Rechnungen, Lieferscheine und Reports werden automatisch erkannt, klassifiziert und den richtigen Projekten zugeordnet. Spart Stunden manueller Arbeit.',
    tags: ['KI', 'Rechnungen', 'Automatisierung'],
    img: 'https://readdy.ai/api/search-image?query=AI%20document%20processing%20intelligence%20automated%20invoice%20scanning%20classification%20machine%20learning%20document%20analysis%20beautiful%20dark%20software%20interface%20with%20document%20thumbnails%20automatic%20tagging%20routing%20professional%20enterprise%20SaaS%20minimal%20clean%20design%20warm%20studio%20photography&width=1200&height=700&seq=srt-func-doc-v3&orientation=landscape',
  },
  {
    id: 'route',
    number: '06',
    icon: 'ri-route-line',
    title: 'Routenplanung',
    subtitle: 'Optimierte Routen für den Außendienst',
    detail:
      'Das SRT berechnet automatisch die effizienteste Route für jeden Außendienstmitarbeiter — unter Berücksichtigung von Einsatzorten, Zeitfenstern und Verkehrslage.',
    tags: ['Routenoptimierung', 'Außendienst', 'Effizienz'],
    img: 'https://readdy.ai/api/search-image?query=route%20optimization%20software%20field%20service%20representatives%20map%20view%20with%20optimized%20travel%20routes%20colored%20path%20overlays%20beautiful%20dark%20interface%20enterprise%20logistics%20planning%20multiple%20stops%20map%20pins%20distance%20calculation%20professional%20minimal%20SaaS%20UI%20warm%20studio%20lighting&width=1200&height=700&seq=srt-func-route-v3&orientation=landscape',
  },
];

export default function FunctionalityOverview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = MODULES[activeIdx];

  return (
    <section id="funktionsumfang" className="bg-[#0e0f0a] relative overflow-hidden py-24 px-4 md:px-6">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,212,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* SRT watermark */}
      <div
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-black leading-none"
        style={{
          fontSize: 'clamp(100px, 18vw, 280px)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(200,212,0,0.06)',
          letterSpacing: '-0.03em',
        }}
      >
        SRT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ——— Section header ——— */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="Funktionsumfang" variant="light" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest whitespace-nowrap hidden md:block">
              {MODULES.length} Module
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              ALLES, WAS<br />
              FIELD-FORCE-<br />
              <span className="text-[#C8D400]">MANAGEMENT</span><br />
              BRAUCHT.
            </h2>
            <div className="flex items-start gap-5 lg:pb-2">
              <div className="w-1 h-12 bg-[#C8D400] flex-shrink-0 mt-1" />
              <p className="text-white/75 text-base leading-relaxed">
                Von der Einsatzplanung bis zur KI-gestützten Dokumentenverarbeitung:
                alle {MODULES.length} SRT-Module — klick dich durch.
              </p>
            </div>
          </div>
        </div>

        {/* ——— Main split layout ——— */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-0">

          {/* ── LEFT: Module navigation ── */}
          <div className="flex flex-col divide-y divide-white/5">
            {MODULES.map((mod, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveIdx(idx)}
                  className="group relative flex items-start gap-4 px-5 py-5 text-left cursor-pointer transition-all duration-250"
                  style={{
                    background: isActive ? 'rgba(200,212,0,0.06)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {/* Active lime left border */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300"
                    style={{ background: isActive ? '#C8D400' : 'transparent' }}
                  />

                  {/* Number */}
                  <span
                    className="font-black tabular-nums flex-shrink-0 w-6 pt-0.5 text-sm transition-colors duration-200"
                    style={{ color: isActive ? '#C8D400' : 'rgba(255,255,255,0.2)' }}
                  >
                    {mod.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: isActive ? 'rgba(200,212,0,0.15)' : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    <i
                      className={`${mod.icon} text-sm`}
                      style={{ color: isActive ? '#C8D400' : 'rgba(255,255,255,0.35)' }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-black text-sm leading-snug mb-0.5 transition-colors duration-200"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.55)' }}
                    >
                      {mod.title}
                    </p>
                    <p
                      className="text-[11px] leading-snug transition-colors duration-200"
                      style={{ color: isActive ? 'rgba(200,212,0,0.7)' : 'rgba(255,255,255,0.25)' }}
                    >
                      {mod.subtitle}
                    </p>
                  </div>

                  {/* Active indicator arrow */}
                  <div
                    className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: isActive ? '#C8D400' : 'transparent',
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <i className="ri-arrow-right-s-line text-sm text-[#111]" />
                  </div>
                </button>
              );
            })}

            {/* CTA at bottom of nav */}
            <div className="px-5 py-6 bg-[#0d0d0d]">
              <p className="text-white/40 text-xs leading-relaxed mb-3">
                Alle Funktionen live erleben?
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=SRT%20Demo%20anfragen`}
                className="inline-flex items-center gap-2 bg-[#C8D400] text-[#111] px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all duration-300 cursor-pointer whitespace-nowrap group"
              >
                Demo anfragen
                <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Module detail panel ── */}
          <div className="relative overflow-hidden" style={{ minHeight: '520px' }}>
            {MODULES.map((mod, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={mod.id}
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? 'auto' : 'none' }}
                >
                  {/* Image */}
                  <img
                    src={mod.img}
                    alt={mod.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />

                  {/* Gradient overlay — stronger on left to blend with nav */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(17,17,17,0.5) 0%, transparent 35%), linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.1) 100%)',
                    }}
                  />

                  {/* Lime top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, transparent, #C8D400 30%, #C8D400 70%, transparent)' }}
                  />

                  {/* Number watermark */}
                  <div
                    className="absolute top-6 right-8 select-none pointer-events-none font-black"
                    style={{
                      fontSize: '8rem',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(200,212,0,0.12)',
                      lineHeight: 1,
                    }}
                  >
                    {mod.number}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {mod.tags.map((tag) => (
                        <Tag key={tag} variant="lime">{tag}</Tag>
                      ))}
                    </div>

                    {/* Subtitle */}
                    <p className="text-[#C8D400] text-xs font-black uppercase tracking-widest mb-2">
                      {mod.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-4 max-w-lg">
                      {mod.title}
                    </h3>

                    {/* Detail */}
                    <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-xl mb-5">
                      {mod.detail}
                    </p>

                    {/* Module counter */}
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 max-w-[60px] bg-[#C8D400]/30" />
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">
                        {mod.number} / {String(MODULES.length).padStart(2, '0')}
                      </span>

                      {/* Next button */}
                      <button
                        onClick={() => setActiveIdx((activeIdx + 1) % MODULES.length)}
                        className="ml-auto flex items-center gap-2 text-white/50 hover:text-[#C8D400] transition-colors duration-200 cursor-pointer"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest">Nächstes Modul</span>
                        <div className="w-7 h-7 flex items-center justify-center bg-[#C8D400]/15 hover:bg-[#C8D400] hover:text-[#111] transition-all duration-200">
                          <i className="ri-arrow-right-line text-sm text-[#C8D400]" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ——— Progress dots ——— */}
        <div className="flex items-center gap-1.5 mt-6">
          {MODULES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="cursor-pointer transition-all duration-300"
              style={{
                width: i === activeIdx ? '24px' : '6px',
                height: '3px',
                background: i === activeIdx ? '#C8D400' : 'rgba(255,255,255,0.15)',
                border: 'none',
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}