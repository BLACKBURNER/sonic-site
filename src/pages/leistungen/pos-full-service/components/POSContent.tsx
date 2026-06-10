import { useState, useRef } from 'react';
import WoodenDivider from '../../../../components/base/WoodenDivider';
import ChallengeSection from '@/components/feature/ChallengeSection';
import type { ChallengeItem } from '@/components/feature/ChallengeSection';

const POS_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-links-line',
    trigger: 'Zu viele Ansprechpartner?',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20chain%20link%20connection%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20chain%20links%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-chain-pos-challenge-1&orientation=squarish',
    title: 'Reibungsverluste durch zu viele Anbieter',
    desc: 'Wenn Design, Druck, Ladenbau, Logistik, Personal etc. von verschiedenen Anbietern kommen, steigt der interne Aufwand erheblich.',
  },
  {
    icon: 'ri-alert-line',
    trigger: 'Schon passiert?',
    title: 'Teure Überraschungen im Rollout',
    desc: 'Manches POS-Material sieht in der Präsentation super aus, ist aber bspw. teuer in der Produktion oder in zu wenigen Outlets einsetzbar.',
  },
  {
    icon: 'ri-tools-line',
    trigger: 'Klingt vertraut?',
    title: 'Pflegeaufwand ohne Ende',
    desc: 'Der POS-Auftritt muss gepflegt werden. Das gelingt in den Outlets nur mit bestens geschulten und motivierten Mitarbeitern.',
  },
];

const SOLUTIONS = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20display%20stand%20retail%20shelf%20layout%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-display-pos-sol-1&orientation=squarish', num: '01', accent: 'Kreation & Print', title: 'POS-Materialien', desc: 'Möbel, Displays, Aufsteller, Regalstopper, Wobbler, Plakate, Flyer, Beklebungen, Gebäudebanner uvm.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20person%20star%20talent%20team%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-person-pos-sol-2&orientation=squarish', num: '02', accent: 'Team & Talent', title: 'Geschultes Personal', desc: 'Professionelle Promoter für Produktvorführungen, Verkaufsunterstützung, Sales-Außendienst und Regalpflege.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20map%20location%20pin%20area%20management%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-map-pos-sol-3&orientation=squarish', num: '03', accent: 'Flächenmanagement', title: 'Flächenmanagement', desc: 'Optimale Platzierung deiner Produkte im Handel, dauerhaft. Zweitplatzierungen, Warenpräsentation, Regalpflege.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20dashboard%20analytics%20chart%20performance%20tracking%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-dash-pos-sol-4&orientation=squarish', num: '04', accent: 'Analytics & SRT', title: 'Performance-Tracking', desc: 'Detaillierte Auswertung von Verkaufszahlen und ROI deiner POS-Aktivitäten. Tagesaktuell im Sonic Reporting Tool (SRT).' },
];

const ASSETS = [
  {
    category: 'Gedrucktes & Gebautes',
    icon: 'ri-printer-line',
    items: ['POS-Design und Kampagnenadaption', 'Aufsteller, Plakate, Flyer, Beklebungen, Gebäudebanner', 'Standequipment und Promotion-Tools', 'Produktion, Aufbau, Logistik und Lager'],
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/11/NEXARO02.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/06/10.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/2a.jpg',
    ],
  },
  {
    category: 'E-Commerce Marketing',
    icon: 'ri-shopping-bag-line',
    items: ['Shop-Optimierung, inkl. Web-Design', 'PDPs, A+ Content', 'Performance-Marketing, inkl. Ads, Media und Newslettern', 'Social Commerce, inkl. Community Management'],
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/LVP_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/03/TPV.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/2b.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/2f.jpg',
    ],
  },
  {
    category: 'Möbelsysteme & Shop-in-Shop',
    icon: 'ri-building-4-line',
    items: ['Architektur, Design, Technik und Warensicherung', 'Möbel, Regale, Shop-in-Shop-Systeme, Roadshow-Module', 'Interaktive Displaykonzepte', 'Produktion, Warehousing, Aufbau, Ausstattung, Pflege'],
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/11/NEXARO01.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/01/10-1.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/01/12.jpg',
    ],
  },
  {
    category: 'Retail-Video',
    icon: 'ri-video-line',
    items: ['Live-Video-Promotion / Beratung', 'Für E-Commerce und über Displays am POS'],
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/LVP_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/5-1-1024x576.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/01/2-1-1024x706.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/03/shower.jpg',
    ],
  },
  {
    category: 'Give-aways',
    icon: 'ri-gift-line',
    items: ['Hochwertige Werbeartikel', 'Kosteneffiziente Streuartikel', 'Merchandise'],
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/03/OPPOX5Pro_unboxing.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/2e.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/1_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/01/4.jpg',
    ],
  },
];

const STEPS = [
  {
    num: '01', title: 'Bedarfsanalyse', desc: 'Wir analysieren Marke, Produkte, Zielgruppen und POS-Anforderungen.', time: '1–2 Tage',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/01/3.jpg',
  },
  {
    num: '02', title: 'Konzeptentwicklung', desc: 'Kreative POS-Lösungen und Materialien für maximale Aufmerksamkeit: Kampagnenkreation oder -adaption, Design, Materialauswahl.', time: '1–4 Wochen',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/01/2.jpg',
  },
  {
    num: '03', title: 'Produktion', desc: 'Herstellung aller POS-Materialien in der passenden Qualität: Print, Displays, Möbelsysteme.', time: '1–4 Wochen',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
  },
  {
    num: '04', title: 'Personal-Recruiting', desc: 'Auswahl und Schulung qualifizierter Promoter bzw. Sales Supporter für deine Kampagne.', time: '1–2 Wochen',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
  },
  {
    num: '05', title: 'Rollout', desc: 'Koordinierte Auslieferung und Platzierung in allen Verkaufsstellen. Logistik über unser eigenes Warehouse.', time: '1–4 Wochen',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/EVENT_NEU.jpg',
  },
  {
    num: '06', title: 'Monitoring & Reporting', desc: 'Kontinuierliche Überwachung und detaillierte Performance-Auswertung. Im SRT, tagesaktuell.', time: 'Ongoing',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/SRT_OPENER.jpg',
  },
];

export default function POSContent() {
  const [activeAsset, setActiveAsset] = useState(0);
  const [activeAssetImg, setActiveAssetImg] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [solActive, setSolActive] = useState<number | null>(null);
  const solRef = useRef<HTMLDivElement>(null);

  const scrollSol = (dir: 'left' | 'right') => {
    solRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };
  const goToSol = (i: number) => {
    setSolActive(i);
    solRef.current?.scrollTo({ left: i * 376, behavior: 'smooth' });
  };

  const handleAssetChange = (idx: number) => {
    setActiveAsset(idx);
    setActiveAssetImg(0);
  };

  return (
    <>
      <ChallengeSection
        headline="POS-Qualität sichern ist aufwändig."
        subline="Warum es die Big Idea nicht immer bis ins Outlet schafft."
        challenges={POS_CHALLENGES}
      />

      <WoodenDivider />

      {/* Solution */}
      <section id="loesung" className="bg-white py-14 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#C8D400]/6 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14 text-center">
            <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5">
              <i className="ri-check-double-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Lösung</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#111] mb-3 leading-tight uppercase">Dein POS-<br /><span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>Komplettpaket.</span></h2>
            <p className="text-[#111]/55 text-sm md:text-base max-w-2xl mx-auto">Von der Kreation bis zum letzten Handgriff übernehmen wir alle Leistungen.</p>
          </div>
          <div className="flex items-center mb-6 gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#111]/30 flex-grow">{SOLUTIONS.length} Leistungen — scrollen</span>
            <button onClick={() => scrollSol('left')} className="w-10 h-10 flex items-center justify-center border border-[#111]/20 text-[#111]/40 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" aria-label="links"><i className="ri-arrow-left-s-line text-xl" /></button>
            <button onClick={() => scrollSol('right')} className="w-10 h-10 flex items-center justify-center border border-[#111]/20 text-[#111]/40 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" aria-label="rechts"><i className="ri-arrow-right-s-line text-xl" /></button>
          </div>
          <div ref={solRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {SOLUTIONS.map((s, idx) => {
              const isA = solActive === idx;
              return (
                <div key={idx} className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                  style={{ width: 'clamp(280px, 28vw, 340px)', minHeight: '340px', background: isA ? '#111' : '#ffffff', border: `1px solid ${isA ? 'rgba(200,212,0,0.5)' : 'rgba(0,0,0,0.09)'}`, transition: 'all 0.3s ease', transform: isA ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.3), 0 24px 48px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)' }}
                  onMouseEnter={() => setSolActive(idx)} onMouseLeave={() => setSolActive(null)}
                >
                  <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? '#C8D400' : 'rgba(0,0,0,0.08)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.5)' : 'none', transition: 'all 0.3s ease' }} />
                  <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '6rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{s.num}</div>
                  <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: '340px' }}>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : 'rgba(200,212,0,0.6)', transition: 'background 0.3s ease' }} />
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : 'rgba(139,110,0,0.7)', transition: 'color 0.3s ease' }}>{s.accent}</span>
                    </div>
                    <div className="w-[56px] h-[56px] overflow-hidden mb-6 flex-shrink-0" style={{ boxShadow: isA ? '0 10px 24px rgba(139,90,43,0.35)' : '0 4px 14px rgba(139,90,43,0.18)', transition: 'all 0.35s ease', transform: isA ? 'scale(1.08)' : 'scale(1)' }}>
                      <img src={s.woodIcon} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-black mb-3 leading-snug uppercase" style={{ color: isA ? '#fff' : '#111', transition: 'color 0.3s ease' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed flex-grow" style={{ color: isA ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)', transition: 'color 0.3s ease' }}>{s.desc}</p>
                    <div className="flex items-center justify-between pt-4 mt-4" style={{ borderTop: `1px solid ${isA ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`, transition: 'border-color 0.3s ease' }}>
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>{s.num} / {String(SOLUTIONS.length).padStart(2, '0')}</span>
                      <div className="w-7 h-7 flex items-center justify-center" style={{ background: isA ? '#C8D400' : 'rgba(0,0,0,0.07)', transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}>
                        <i className="ri-arrow-right-line text-sm" style={{ color: isA ? '#111' : 'rgba(0,0,0,0.45)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {SOLUTIONS.map((_, i) => (
              <button key={i} onClick={() => goToSol(i)} className="cursor-pointer" style={{ width: i === (solActive ?? 0) ? '22px' : '6px', height: '3px', background: i === (solActive ?? 0) ? '#C8D400' : 'rgba(0,0,0,0.2)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Assets with scrollable images */}
      <section id="beispiele" className="bg-white py-14 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#111]/10 border border-[#111]/15 px-4 py-1.5 mb-5">
              <i className="ri-stack-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Alle Assets</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#111] leading-tight uppercase">POS-Materialien &amp; Branding</h2>
            <p className="text-[#111]/45 text-sm mt-3">Wir setzen deine Vorstellung vom idealen POS-Auftritt um.</p>
          </div>

          {/* Category tabs — scrollable on mobile */}
          <div className="flex gap-0 border border-[#111]/15 mb-0 overflow-x-auto">
            {ASSETS.map((a, i) => (
              <button
                key={i}
                onClick={() => handleAssetChange(i)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 cursor-pointer border-r border-[#111]/15 last:border-r-0 flex-shrink-0 ${
                  activeAsset === i ? 'bg-[#111] text-[#C8D400]' : 'bg-white text-[#111]/50 hover:text-[#111] hover:bg-[#111]/5'
                }`}
              >
                <i className={`${a.icon} text-sm`}></i>
                <span className="hidden sm:inline">{a.category}</span>
              </button>
            ))}
          </div>

          <div key={activeAsset} className="border border-[#111]/15 border-t-0" style={{ animation: 'fadeIn 0.35s ease-out' }}>
            {/* Image strip — 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#111]/10">
              {ASSETS[activeAsset].images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAssetImg(i)}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 ${activeAssetImg === i ? 'ring-2 ring-inset ring-[#C8D400]' : 'opacity-60 hover:opacity-90'}`}
                  style={{ minHeight: '90px' }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-top" style={{ minHeight: '90px' }} />
                  <div className="absolute inset-0 bg-black/20" />
                  {activeAssetImg === i && (
                    <div className="absolute bottom-2 right-2 w-4 h-4 flex items-center justify-center bg-[#C8D400]">
                      <i className="ri-check-line text-[#111] text-xs"></i>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Main image + items — stacks on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative overflow-hidden" style={{ minHeight: '220px' }}>
                <img
                  key={activeAssetImg}
                  src={ASSETS[activeAsset].images[activeAssetImg]}
                  alt={ASSETS[activeAsset].category}
                  className="w-full h-full object-cover object-top"
                  style={{ animation: 'fadeIn 0.3s ease-out', minHeight: '220px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-2 py-1">{ASSETS[activeAsset].category}</span>
                </div>
              </div>
              <div className="lg:col-span-5 bg-white p-5 md:p-8 border-t lg:border-t-0 lg:border-l border-[#111]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-[#111]">
                    <i className={`${ASSETS[activeAsset].icon} text-base text-[#C8D400]`}></i>
                  </div>
                  <h3 className="text-base font-black text-[#111] uppercase">{ASSETS[activeAsset].category}</h3>
                </div>
                <div className="space-y-2.5">
                  {ASSETS[activeAsset].items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 flex items-center justify-center bg-[#C8D400] flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-[#111] text-xs"></i>
                      </div>
                      <span className="text-[#111]/70 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Process with images */}
      <section id="arbeitsweise" className="bg-[#111] py-14 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C8D400]/4 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-5">
              <i className="ri-route-line text-[#C8D400] text-sm"></i>
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Ablauf</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase">So arbeiten wir</h2>
            <p className="text-white/45 text-sm mt-3">Von der Planung bis zur Umsetzung: professionell und effizient.</p>
          </div>

          {/* Step tabs — scrollable on mobile */}
          <div className="flex gap-0 border border-[#C8D400]/15 mb-0 overflow-x-auto">
            {STEPS.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex-shrink-0 px-3 md:px-4 py-3 font-black text-xs whitespace-nowrap transition-all duration-300 cursor-pointer border-r border-[#C8D400]/15 last:border-r-0 ${
                  activeStep === i ? 'bg-[#C8D400] text-[#111]' : 'bg-white/3 text-white/50 hover:text-white hover:bg-white/7'
                }`}
              >
                <span className="block text-[10px] opacity-60 mb-0.5">{step.num}</span>
                {step.title}
              </button>
            ))}
          </div>

          {/* Step panel — stacks on mobile */}
          <div key={activeStep} className="grid grid-cols-1 lg:grid-cols-12 border border-[#C8D400]/15 border-t-0" style={{ animation: 'fadeIn 0.35s ease-out' }}>
            <div className="lg:col-span-7 relative overflow-hidden" style={{ minHeight: '200px' }}>
              <img
                src={STEPS[activeStep].img}
                alt={STEPS[activeStep].title}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: '200px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-2 py-1">Schritt {STEPS[activeStep].num}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 p-6 md:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#C8D400]/15 relative">
              <div className="absolute top-0 left-0 text-7xl md:text-9xl font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(200,212,0,0.04)', lineHeight: 1 }}>
                {STEPS[activeStep].num}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#C8D400] font-black text-xs uppercase tracking-widest">Schritt {STEPS[activeStep].num}</div>
                <div className="px-3 py-1 bg-[#C8D400] text-[#111] text-xs font-black">{STEPS[activeStep].time}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase">{STEPS[activeStep].title}</h3>
              <p className="text-white/65 text-sm md:text-base leading-relaxed">{STEPS[activeStep].desc}</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
