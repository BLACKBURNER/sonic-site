import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';

const DELIVERABLES = [
  {
    number: '01',
    icon: 'ri-search-line',
    title: 'Marktanalyse',
    description: 'Umfassende Analyse des Zielmarktes, Wettbewerb und Kundenbedürfnisse. Klare Handlungsempfehlungen für Ihre Markteintrittsstrategie.',
    tags: ['Research', 'Wettbewerb', 'Insights'],
    accent: 'Research & Analyse',
  },
  {
    number: '02',
    icon: 'ri-road-map-line',
    title: 'Go-to-Market Strategie',
    description: 'Maßgeschneiderter Plan für Ihren erfolgreichen Markteintritt — mit klaren Meilensteinen, Budgetplanung und Erfolgskennzahlen.',
    tags: ['Strategie', 'Roadmap', 'Planung'],
    accent: 'Strategie & Konzept',
  },
  {
    number: '03',
    icon: 'ri-team-line',
    title: 'Lokales Netzwerk',
    description: 'Zugang zu Partnern, Distributoren und wichtigen Kontakten vor Ort. Wir öffnen Türen, die sonst verschlossen bleiben.',
    tags: ['Partner', 'Netzwerk', 'Kontakte'],
    accent: 'Netzwerk & Kontakte',
  },
  {
    number: '04',
    icon: 'ri-rocket-line',
    title: 'Launch-Unterstützung',
    description: 'Operative Begleitung bei der Markteinführung und ersten Kampagnen. Von der ersten Aktivierung bis zum skalierten Rollout.',
    tags: ['Launch', 'Kampagnen', 'Support'],
    accent: 'Launch & Rollout',
  },
];

export default function WhatWeDeliver() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f7f6f3] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8D400] to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionBadge text="Was wir liefern" variant="dark" className="mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] mb-4 leading-tight">
            Ihr Market Entry-Paket.
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Alles für einen erfolgreichen Start in neuen Märkten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {DELIVERABLES.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                className="relative overflow-hidden cursor-pointer"
                style={{
                  background: isActive ? '#fafaf7' : '#fff',
                  border: `1px solid ${isActive ? 'rgba(200,212,0,0.4)' : 'rgba(0,0,0,0.08)'}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isActive
                    ? '0 0 0 1px rgba(200,212,0,0.3), 0 20px 48px rgba(0,0,0,0.08), 0 6px 16px rgba(200,212,0,0.07)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isActive ? '3px' : '2px', background: isActive ? 'linear-gradient(90deg, transparent, #C8D400, transparent)' : 'rgba(0,0,0,0.05)', boxShadow: isActive ? '0 0 12px rgba(200,212,0,0.4)' : 'none', transition: 'all 0.3s ease' }} />
                <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isActive ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isActive ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isActive ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isActive ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isActive ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                <div className="absolute bottom-3 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '6rem', color: isActive ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{item.number}</div>

                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5" style={{ background: isActive ? '#C8D400' : '#ccc', transition: 'background 0.3s ease' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isActive ? '#C8D400' : '#aaa', transition: 'color 0.3s ease' }}>{item.accent}</span>
                  </div>
                  <div
                    className="w-[60px] h-[60px] flex items-center justify-center mb-6"
                    style={{
                      background: isActive ? 'linear-gradient(145deg, #d4e100, #C8D400)' : 'linear-gradient(145deg, #1c1c1c, #111)',
                      boxShadow: isActive ? '0 10px 24px rgba(200,212,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)' : '0 10px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
                      transition: 'all 0.35s ease',
                    }}
                  >
                    <i className={`${item.icon} text-xl`} style={{ color: isActive ? '#111' : '#C8D400', transition: 'color 0.35s ease' }} />
                  </div>
                  <h3 className="text-xl font-black text-[#111] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag, ti) => <Tag key={ti} variant={isActive ? 'lime' : 'subtle'}>{tag}</Tag>)}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${isActive ? 'rgba(200,212,0,0.2)' : 'rgba(0,0,0,0.07)'}`, transition: 'border-color 0.3s ease' }}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mehr erfahren</span>
                    <div className="w-7 h-7 flex items-center justify-center" style={{ background: isActive ? '#C8D400' : 'rgba(0,0,0,0.05)', transform: isActive ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}>
                      <i className="ri-arrow-right-line text-sm" style={{ color: isActive ? '#111' : '#bbb' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
