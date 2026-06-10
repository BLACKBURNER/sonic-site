import { useRef, useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';

const STEPS = [
  {
    number: '01',
    icon: 'ri-discuss-line',
    title: 'Bedarfsanalyse',
    description: 'Wir analysieren Ihre Produkte, Zielgruppe und POS-Anforderungen.',
    accent: 'Analyse',
    duration: '1–2 Tage',
  },
  {
    number: '02',
    icon: 'ri-lightbulb-line',
    title: 'Konzeptentwicklung',
    description: 'Kreative POS-Lösungen und Materialien für maximale Aufmerksamkeit.',
    accent: 'Kreation',
    duration: '3–5 Tage',
  },
  {
    number: '03',
    icon: 'ri-printer-line',
    title: 'Produktion',
    description: 'Herstellung aller POS-Materialien in höchster Qualität.',
    accent: 'Fertigung',
    duration: '1–2 Wochen',
  },
  {
    number: '04',
    icon: 'ri-team-line',
    title: 'Personal-Rekrutierung',
    description: 'Auswahl und Schulung qualifizierter Promoter für Ihre Kampagne.',
    accent: 'HR & Training',
    duration: '1 Woche',
  },
  {
    number: '05',
    icon: 'ri-truck-line',
    title: 'Rollout',
    description: 'Koordinierte Auslieferung und Platzierung in allen Verkaufsstellen.',
    accent: 'Logistik',
    duration: '1–2 Wochen',
  },
  {
    number: '06',
    icon: 'ri-line-chart-line',
    title: 'Monitoring & Reporting',
    description: 'Kontinuierliche Überwachung und detaillierte Performance-Auswertung.',
    accent: 'QM & Analyse',
    duration: 'Ongoing',
  },
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const goTo = (i: number) => {
    setActiveIdx(i);
    scrollRef.current?.scrollTo({ left: i * 396, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#f7f6f3] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8D400] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionBadge text="Unser Prozess" variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] leading-none mb-2">SO ARBEITEN WIR.</h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Von der Planung bis zur Umsetzung — professionell und effizient.
          </p>
        </div>

        <div className="flex items-center mb-6 gap-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#111]/25 flex-grow">
            {STEPS.length} Prozessschritte — scrollen
          </span>
          <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="links">
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="rechts">
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {STEPS.map((step, idx) => {
            const isA = activeIdx === idx;
            return (
              <div
                key={idx}
                className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                style={{
                  width: 'clamp(280px, 28vw, 340px)',
                  minHeight: '460px',
                  background: isA ? '#fafaf7' : '#fff',
                  border: `1px solid ${isA ? 'rgba(200,212,0,0.4)' : 'rgba(0,0,0,0.08)'}`,
                  transition: 'all 0.3s ease',
                  transform: isA ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.35), 0 28px 56px rgba(0,0,0,0.09)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? 'linear-gradient(90deg, transparent 0%, #C8D400 30%, #C8D400 70%, transparent 100%)' : 'rgba(0,0,0,0.05)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.45)' : 'none', transition: 'all 0.3s ease' }} />
                <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '7rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{step.number}</div>

                <div className="relative z-10 p-8 flex flex-col" style={{ minHeight: '460px' }}>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : '#ccc', transition: 'background 0.3s ease' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : '#aaa', transition: 'color 0.3s ease' }}>{step.accent}</span>
                  </div>
                  <div className="w-[64px] h-[64px] flex items-center justify-center mb-7 flex-shrink-0" style={{ background: isA ? 'linear-gradient(145deg, #d4e100, #C8D400)' : 'linear-gradient(145deg, #1c1c1c, #111)', boxShadow: isA ? '0 12px 28px rgba(200,212,0,0.35), inset 0 1px 0 rgba(255,255,255,0.4)' : '0 12px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)', transition: 'all 0.35s ease' }}>
                    <i className={`${step.icon} text-2xl`} style={{ color: isA ? '#111' : '#C8D400', transition: 'color 0.35s ease', textShadow: isA ? 'none' : '0 0 12px rgba(200,212,0,0.3)' }} />
                  </div>
                  <h3 className="text-xl font-black text-[#111] mb-3 leading-snug">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">{step.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <Tag variant={isA ? 'lime' : 'subtle'}>{step.duration}</Tag>
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${isA ? 'rgba(200,212,0,0.22)' : 'rgba(0,0,0,0.07)'}`, transition: 'border-color 0.3s ease' }}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{step.number} / {String(STEPS.length).padStart(2, '0')}</span>
                    <div className="w-7 h-7 flex items-center justify-center" style={{ background: isA ? '#C8D400' : 'rgba(0,0,0,0.05)', transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}>
                      <i className="ri-arrow-right-line text-sm" style={{ color: isA ? '#111' : '#bbb' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-6">
          {STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="cursor-pointer"
              style={{ width: i === (activeIdx ?? 0) ? '22px' : '6px', height: '3px', background: i === (activeIdx ?? 0) ? '#C8D400' : 'rgba(0,0,0,0.12)', border: 'none', padding: 0, transition: 'all 0.3s ease' }}
              aria-label={`Schritt ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
