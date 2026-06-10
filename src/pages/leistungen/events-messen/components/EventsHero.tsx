import React from 'react';
import { CONTACT_EMAIL } from '@/lib/contact';

export default function EventsHero() {
  return (
    <section
      className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-black"
      style={{ paddingTop: '80px', paddingBottom: '60px' }}
    >
      <img
        src="https://www.sonic-group.de/wp-content/uploads/2023/06/EVENT_NEU.jpg"
        alt="Events und Messen"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.85) 100%)',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8D400]/7 blur-[100px] pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-60">
          <span className="text-white/50 text-xs font-bold">Leistungen</span>
          <i className="ri-arrow-right-s-line text-white/40 text-sm" />
          <span className="text-white/50 text-xs font-bold">Events &amp; Logistik</span>
          <i className="ri-arrow-right-s-line text-white/40 text-sm" />
          <span className="text-[#C8D400] text-xs font-bold">Events &amp; Messen</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
          <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">
            Events &amp; Messen
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-none">
          Live‑Kommunikation,<br />
          <span className="text-[#C8D400]">die begeistert.</span>
        </h1>

        <p className="text-xl text-white/80 mb-4 font-semibold">
          Konzept. Personal. Logistik. Wir präsentieren deine Marke da, wo deine Zielgruppe ist.
        </p>

        <p className="text-sm text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
          Events, Messen, Roadshows und mehr. Vor Ort, auf Tour und hybrid.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {[
            { val: '>500', label: 'Großevents' },
            { val: '>30.000', label: 'Kontakte' },
            { val: '100 %', label: 'Full Service' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-[#C8D400] font-mono">{s.val}</div>
              <div className="text-white/45 text-xs font-bold uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:${CONTACT_EMAIL}`?subject=Events%20Messen%20Beratung"
            className="inline-flex items-center gap-2 bg-[#C8D400] text-white px-7 py-3 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
          >
            <i className="ri-calendar-line" />
            Beratung buchen
          </a>

          <a
            href="/services/events"
            onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
            className="inline-flex items-center gap-2 border-2 border-white/25 text-white px-6 py-3 font-black hover:border-[#C8D400] hover:text-[#C8D400] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
          >
            Events Service
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}