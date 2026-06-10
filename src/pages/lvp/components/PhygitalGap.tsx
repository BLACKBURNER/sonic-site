import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';

const DIGITAL_POINTS = [
  { icon: 'ri-bar-chart-line', label: 'Echtzeitdaten & Analytics' },
  { icon: 'ri-global-line', label: 'Sofortige Skalierbarkeit' },
  { icon: 'ri-time-line', label: '24 / 7 Verfügbarkeit' },
  { icon: 'ri-robot-line', label: 'Automatisierte Prozesse' },
];

const PHYSICAL_PROBLEMS = [
  { icon: 'ri-eye-off-line', label: 'Eingeschränkte Sichtbarkeit' },
  { icon: 'ri-user-unfollow-line', label: 'Personal-Engpässe' },
  { icon: 'ri-alert-line', label: 'Inkonsistente Umsetzung' },
  { icon: 'ri-money-euro-circle-line', label: 'Hohe Betriebskosten' },
];

const SOLUTION_CARDS = [
  { num: '01', icon: 'ri-video-line', accent: 'Digital Reach', title: 'Digitale Reichweite', desc: 'Verbinde jeden POS über QR-Codes direkt mit geschulten Brand Ambassadors im Studio.' },
  { num: '02', icon: 'ri-user-star-line', accent: 'Human Touch', title: 'Menschliche Note', desc: 'Echte Experten liefern persönliche 1:1-Beratung — kein Chatbot, kein Script.' },
  { num: '03', icon: 'ri-bar-chart-box-line', accent: 'Full Analytics', title: 'Volle Transparenz', desc: 'Jede Interaktion wird digital erfasst und ausgewertet — tagesaktuell im SRT-Dashboard.' },
  { num: '04', icon: 'ri-infinity-line', accent: 'Infinite Scale', title: 'Unbegrenzte Skalierung', desc: 'Ein Studio bedient beliebig viele Standorte gleichzeitig — ohne Personalkosten zu multiplizieren.' },
];

export default function PhygitalGap() {
  const [solActive, setSolActive] = useState<number | null>(null);
  const [challengeHover, setChallengeHover] = useState<number | null>(null);
  const solRef = useRef<HTMLDivElement>(null);

  const scrollSol = (dir: 'left' | 'right') => {
    solRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };
  const goTo = (i: number) => {
    setSolActive(i);
    solRef.current?.scrollTo({ left: i * 376, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8D400] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge text="The Challenge" variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] leading-tight tracking-tight mb-4">
            THE PHYGITAL GAP.
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Bridging the disconnect between digital strategy and physical retail execution.
          </p>
        </div>

        {/* Digital vs Physical comparison */}
        <div className="grid lg:grid-cols-2 gap-5 mb-16">
          {/* Digital */}
          {[
            { label: 'DIGITAL', color: '#C8D400', textColor: '#111', bg: '#fafaf7', points: DIGITAL_POINTS, isPos: true, idx: 0 },
            { label: 'PHYSICAL', color: 'rgba(239,68,68,0.8)', textColor: '#ef4444', bg: '#fff5f5', points: PHYSICAL_PROBLEMS, isPos: false, idx: 1 },
          ].map((col) => {
            const isH = challengeHover === col.idx;
            return (
              <div
                key={col.idx}
                className="relative overflow-hidden transition-all duration-500 cursor-default"
                style={{
                  background: isH ? (col.isPos ? '#fafaf7' : '#fff5f5') : col.bg,
                  border: `1px solid ${isH ? (col.isPos ? 'rgba(200,212,0,0.5)' : 'rgba(239,68,68,0.3)') : 'rgba(0,0,0,0.08)'}`,
                  transform: isH ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isH ? (col.isPos ? '0 0 0 1px rgba(200,212,0,0.3), 0 20px 40px rgba(0,0,0,0.07)' : '0 0 0 1px rgba(239,68,68,0.2), 0 20px 40px rgba(0,0,0,0.07)') : '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={() => setChallengeHover(col.idx)}
                onMouseLeave={() => setChallengeHover(null)}
              >
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500" style={{ background: isH ? col.color : 'rgba(0,0,0,0.06)' }} />
                {/* Left edge */}
                <div className="absolute top-0 left-0 bottom-0 w-0.5 transition-all duration-500" style={{ background: isH ? col.color : 'transparent' }} />
                {/* Corner brackets */}
                {isH && <>
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10 transition-all duration-300" style={{ borderColor: col.isPos ? 'rgba(200,212,0,0.5)' : 'rgba(239,68,68,0.4)' }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10 transition-all duration-300" style={{ borderColor: col.isPos ? 'rgba(200,212,0,0.5)' : 'rgba(239,68,68,0.4)' }} />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10 transition-all duration-300" style={{ borderColor: col.isPos ? 'rgba(200,212,0,0.5)' : 'rgba(239,68,68,0.4)' }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10 transition-all duration-300" style={{ borderColor: col.isPos ? 'rgba(200,212,0,0.5)' : 'rgba(239,68,68,0.4)' }} />
                </>}

                <div className="p-8 md:p-10 relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center" style={{ background: col.isPos ? '#C8D400' : 'rgba(239,68,68,0.1)', border: col.isPos ? 'none' : '1px solid rgba(239,68,68,0.2)' }}>
                      <i className={`${col.isPos ? 'ri-smartphone-line' : 'ri-store-2-line'} text-xl`} style={{ color: col.isPos ? '#111' : '#ef4444' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black" style={{ color: col.isPos ? '#111' : '#ef4444' }}>{col.label}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{col.isPos ? 'Stärken' : 'Schwachpunkte'}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {col.points.map((p, pi) => (
                      <div key={pi} className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0" style={{ background: col.isPos ? 'rgba(200,212,0,0.15)' : 'rgba(239,68,68,0.1)' }}>
                          <i className={`${col.isPos ? 'ri-check-line' : 'ri-close-line'} text-xs`} style={{ color: col.isPos ? '#C8D400' : '#ef4444' }} />
                        </div>
                        <div className="flex items-center gap-2">
                          <i className={`${p.icon} text-sm`} style={{ color: col.isPos ? '#C8D400' : '#ef4444' }} />
                          <span className="text-sm font-semibold" style={{ color: col.isPos ? '#111' : '#374151' }}>{p.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Sonic Solution */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8D400]" />
          <div className="bg-[#111] py-14 px-8 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(200,212,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#C8D400]/6 blur-[80px] pointer-events-none" />
            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
                    <i className="ri-lightbulb-flash-line text-[#C8D400] text-sm" />
                    <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">The Sonic Solution</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                    LIVE VIDEO PROMOTION<br /><span className="text-[#C8D400]">BRIDGES THIS GAP.</span>
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => scrollSol('left')} className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/40 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="links"><i className="ri-arrow-left-s-line text-xl" /></button>
                  <button onClick={() => scrollSol('right')} className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/40 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="rechts"><i className="ri-arrow-right-s-line text-xl" /></button>
                </div>
              </div>

              <div ref={solRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {SOLUTION_CARDS.map((s, idx) => {
                  const isA = solActive === idx;
                  return (
                    <div key={idx} className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                      style={{ width: 'clamp(250px, 24vw, 300px)', minHeight: '320px', background: isA ? '#ffffff' : 'rgba(255,255,255,0.06)', border: `1px solid ${isA ? 'rgba(200,212,0,0.5)' : 'rgba(255,255,255,0.08)'}`, transition: 'all 0.3s ease', transform: isA ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.35), 0 24px 48px rgba(0,0,0,0.5)' : 'none' }}
                      onMouseEnter={() => setSolActive(idx)} onMouseLeave={() => setSolActive(null)}
                    >
                      <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? '#C8D400' : 'rgba(200,212,0,0.2)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.5)' : 'none', transition: 'all 0.3s ease' }} />
                      <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                      <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '5rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(255,255,255,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{s.num}</div>
                      <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: '320px' }}>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : 'rgba(200,212,0,0.4)', transition: 'background 0.3s ease' }} />
                          <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : 'rgba(200,212,0,0.5)', transition: 'color 0.3s ease' }}>{s.accent}</span>
                        </div>
                        <div className="w-[52px] h-[52px] flex items-center justify-center mb-5 flex-shrink-0" style={{ background: isA ? 'linear-gradient(145deg, #d4e100, #C8D400)' : 'linear-gradient(145deg, #1c1c1c, #0d0d0d)', boxShadow: isA ? '0 10px 24px rgba(200,212,0,0.35), inset 0 1px 0 rgba(255,255,255,0.4)' : '0 8px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)', transition: 'all 0.35s ease' }}>
                          <i className={`${s.icon} text-xl`} style={{ color: isA ? '#111' : '#C8D400', transition: 'color 0.35s ease' }} />
                        </div>
                        <h4 className="text-sm font-black mb-2 leading-snug uppercase tracking-wide" style={{ color: isA ? '#111' : '#fff', transition: 'color 0.3s ease' }}>{s.title}</h4>
                        <p className="text-xs leading-relaxed flex-grow" style={{ color: isA ? '#555' : 'rgba(255,255,255,0.5)', transition: 'color 0.3s ease' }}>{s.desc}</p>
                        <div className="flex items-center justify-between pt-3 mt-3" style={{ borderTop: `1px solid ${isA ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 0.3s ease' }}>
                          <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#999' : 'rgba(255,255,255,0.25)' }}>{s.num} / 04</span>
                          <div className="w-6 h-6 flex items-center justify-center" style={{ background: isA ? '#C8D400' : 'rgba(255,255,255,0.06)', transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}>
                            <i className="ri-arrow-right-line text-xs" style={{ color: isA ? '#111' : 'rgba(255,255,255,0.4)' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-1.5 mt-6">
                {SOLUTION_CARDS.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} className="cursor-pointer" style={{ width: i === (solActive ?? 0) ? '22px' : '6px', height: '3px', background: i === (solActive ?? 0) ? '#C8D400' : 'rgba(255,255,255,0.2)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8D400]/30" />
        </div>
      </div>
    </section>
  );
}
