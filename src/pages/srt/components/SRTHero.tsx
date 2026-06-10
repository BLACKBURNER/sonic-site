import { CONTACT_EMAIL } from '@/lib/contact';
import SectionBadge from '@/components/base/SectionBadge';

interface SRTHeroProps {
  onScrollToFeatures: () => void;
}

const STATS = [
  { val: '>15', label: 'Versionen', sub: 'Laufend weiterentwickelt' },
  { val: '>1,3 Mio.', label: 'Erledigte Tasks', sub: 'Kumuliert seit Start' },
  { val: '>€100 Mio.', label: 'Gehälter ausgezahlt', sub: 'Gesamt verarbeitet' },
  { val: 'Seit 2008', label: 'In Betrieb', sub: 'Seit 2024 mit KI' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
}

export default function SRTHero({ onScrollToFeatures }: SRTHeroProps) {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#0e0f0a]" style={{ minHeight: '520px' }}>

      {/* ——— Diagonal lime slice ——— */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, rgba(200,212,0,0.04) 100%)',
          clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,212,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Top lime line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C8D400] via-[#C8D400]/60 to-transparent" />

      {/* ——— Main content — centered ——— */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center pt-12 md:pt-14 pb-6">

        {/* Badge row */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8D400]/30" />
          <SectionBadge text="Sonic-eigene Software" variant="light" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8D400]/30" />
        </div>

        {/* Headline — centered, compact */}
        <h1 className="font-black leading-none tracking-tight mb-4" style={{ fontSize: 'clamp(30px, 5vw, 56px)' }}>
          <span className="text-white">SONIC</span>{' '}
          <span className="text-[#C8D400]">REPORTING</span>{' '}
          <span className="text-white">TOOL.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mb-2 font-normal">
          Das SRT liefert Echtzeit-Zugriff auf Performance-Daten, Reportings und integriert
          Recruiting, Projektmanagement und Abrechnung — alles in einer Plattform.
        </p>
        <p className="text-white/25 text-[10px] uppercase tracking-[0.25em] font-black mb-6">
          Field-Force-ERP-System · Seit 2008 · Seit 2024 mit KI
        </p>

        {/* CTAs — centered */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=SRT%20Beratungsgespr%C3%A4ch`}
            className="inline-flex items-center gap-3 bg-[#C8D400] text-[#111] px-7 py-3 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer group"
          >
            <i className="ri-calendar-line text-base" />
            Beratungsgespräch buchen
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            onClick={onScrollToFeatures}
            className="inline-flex items-center gap-3 border border-white/15 text-white/60 px-7 py-3 font-bold text-xs hover:border-[#C8D400]/50 hover:text-[#C8D400] transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-play-circle-line text-base" />
            Features entdecken
          </button>
        </div>

        {/* Section nav chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-[10px] font-black text-white/15 uppercase tracking-[0.2em] mr-1">Direkt zu:</span>
          {[
            { id: 'features', label: 'All-in-Software' },
            { id: 'funktionsumfang', label: 'Funktionsumfang' },
            { id: 'team-app', label: 'Team-App' },
            { id: 'branchen', label: 'Branchen' },
            { id: 'kundenstimmen', label: 'Kundenstimmen' },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => scrollTo(chip.id)}
              className="px-3 py-1.5 border border-white/10 text-white/35 text-[10px] font-black hover:border-[#C8D400]/50 hover:text-[#C8D400] hover:bg-[#C8D400]/8 transition-all duration-200 cursor-pointer whitespace-nowrap uppercase tracking-wider"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* ——— Stats strip — full-width bottom panel ——— */}
      <div className="relative z-10 mt-auto border-t border-white/8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="px-6 py-5 group hover:bg-[#C8D400]/5 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8D400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className="text-2xl md:text-3xl font-black leading-none mb-1 tabular-nums"
                style={{ color: '#C8D400' }}
              >
                {s.val}
              </div>
              <div className="text-[10px] font-black text-white/60 uppercase tracking-widest leading-snug mb-0.5">
                {s.label}
              </div>
              <div className="text-[9px] text-white/20 leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}