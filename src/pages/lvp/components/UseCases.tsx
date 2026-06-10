import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';

const CASES = [
  {
    number: '01',
    title: 'Product Launches',
    accent: 'Launch & Activation',
    description: 'Create buzz and drive trial with immersive live video launch experiences that reach both in-store and online shoppers simultaneously.',
    image: 'https://readdy.ai/api/search-image?query=modern%20minimalist%20product%20launch%20event%20with%20sleek%20displays%20and%20ambient%20lighting%20in%20a%20contemporary%20retail%20space%20featuring%20clean%20lines%20and%20professional%20atmosphere%20studio%20quality&width=800&height=500&seq=lvp-launch-1&orientation=landscape',
    stats: ['3× higher engagement', '67% trial rate', '2.4× ROI'],
  },
  {
    number: '02',
    title: 'Seasonal Campaigns',
    accent: 'Peak Season',
    description: 'Maximize peak season sales with targeted in-store and online activations backed by live video experts who know your product inside out.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20seasonal%20retail%20campaign%20display%20with%20sophisticated%20product%20presentation%20in%20modern%20store%20environment%20with%20warm%20ambient%20lighting%20clean%20aesthetic%20professional&width=800&height=500&seq=lvp-seasonal-1&orientation=landscape',
    stats: ['45% sales lift', '89% brand recall', '4.2× ROAS'],
  },
  {
    number: '03',
    title: 'Brand Repositioning',
    accent: 'Brand Strategy',
    description: 'Transform brand perception through strategic live video touchpoints — experts as the human face of your repositioning strategy.',
    image: 'https://readdy.ai/api/search-image?query=contemporary%20brand%20experience%20center%20with%20minimalist%20design%20featuring%20interactive%20displays%20and%20modern%20architecture%20in%20sophisticated%20retail%20setting%20professional&width=800&height=500&seq=lvp-reposition-1&orientation=landscape',
    stats: ['58% perception shift', '3.1× consideration', '92% positive sentiment'],
  },
];

export default function UseCases() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };
  const goTo = (i: number) => {
    setActiveIdx(i);
    scrollRef.current?.scrollTo({ left: i * 420, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#f5f5f5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8D400] to-transparent opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8D400]/4 blur-3xl pointer-events-none" style={{ borderRadius: 0 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <SectionBadge text="Use Cases" variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] leading-tight tracking-tight mb-1">
            ECHTE SZENARIEN.<br />
            <span className="text-[#C8D400]">ECHTE ERGEBNISSE.</span>
          </h2>
          <div className="mb-5" />
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            See how Live Video Promotion transforms retail execution across categories.
          </p>
        </div>

        <div className="flex items-center mb-6 gap-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#111]/25 flex-grow">
            {CASES.length} use cases — scroll to explore
          </span>
          <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="left"><i className="ri-arrow-left-s-line text-xl" /></button>
          <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="right"><i className="ri-arrow-right-s-line text-xl" /></button>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {CASES.map((uc, idx) => {
            const isA = activeIdx === idx;
            return (
              <div
                key={idx}
                className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                style={{
                  width: 'clamp(320px, 36vw, 420px)',
                  minHeight: '560px',
                  background: isA ? '#fafaf7' : '#fff',
                  border: `1px solid ${isA ? 'rgba(200,212,0,0.4)' : 'rgba(0,0,0,0.08)'}`,
                  transition: 'all 0.3s ease',
                  transform: isA ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.35), 0 28px 56px rgba(0,0,0,0.09)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {/* Top lime bar */}
                <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? 'linear-gradient(90deg, transparent 0%, #C8D400 30%, #C8D400 70%, transparent 100%)' : 'rgba(0,0,0,0.05)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.45)' : 'none', transition: 'all 0.3s ease' }} />
                {/* Left edge */}
                <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-30" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-30" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                {/* Watermark */}
                <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '6rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{uc.number}</div>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img src={uc.image} alt={uc.title} className="w-full h-full object-cover object-top transition-transform duration-700" style={{ transform: isA ? 'scale(1.05)' : 'scale(1)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-2 py-1">{uc.number}</span>
                  </div>
                </div>

                <div className="relative z-10 p-7 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : '#ccc', transition: 'background 0.3s ease' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : '#aaa', transition: 'color 0.3s ease' }}>{uc.accent}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#111] mb-3 leading-snug tracking-tight uppercase">{uc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">{uc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {uc.stats.map((stat, si) => <Tag key={si} variant={isA ? 'lime' : 'subtle'}>{stat}</Tag>)}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${isA ? 'rgba(200,212,0,0.2)' : 'rgba(0,0,0,0.07)'}`, transition: 'border-color 0.3s ease' }}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{uc.number} / 03</span>
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
          {CASES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="cursor-pointer" style={{ width: i === (activeIdx ?? 0) ? '22px' : '6px', height: '3px', background: i === (activeIdx ?? 0) ? '#C8D400' : 'rgba(0,0,0,0.12)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`Case ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
