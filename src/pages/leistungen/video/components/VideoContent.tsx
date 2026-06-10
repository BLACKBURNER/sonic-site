import { useState, useRef } from 'react';
import WoodenDivider from '../../../../components/base/WoodenDivider';
import LVPProcessFlow from '../../../lvp/components/LVPProcessFlow';
import VideoStudioPhone from './VideoStudioPhone';
import Lightbox, { LightboxItem } from '@/components/base/Lightbox';
import { CONTACT_EMAIL } from '@/lib/contact';
import ChallengeSection from '@/components/feature/ChallengeSection';
import type { ChallengeItem } from '@/components/feature/ChallengeSection';

const VIDEO_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-door-lock-line',
    title: 'Hohe Eintrittshürden',
    desc: 'Studio, Equipment, Technik, Presenter im Schichtbetrieb: Hohe Investitionskosten bzw. schwere Dienstleister-Suche.',
    trigger: 'Schon daran gescheitert?',
  },
  {
    icon: 'ri-question-line',
    title: 'Kosten völlig unklar',
    desc: 'Wie sieht die Kosten-Nutzen-Rechnung bei (Live-)Video-Kanälen aus? Ohne Erfahrungswerte drohen Nicht- bzw. Fehl-Investitionen.',
    trigger: 'Ungewisses Budget?',
  },
  {
    icon: 'ri-global-line',
    title: 'Omnichannel — komplexe Umsetzung',
    desc: '(Live) Video braucht man für E-Commerce, aber auch im Retail performt es stark. Die Umsetzung ist ohne Fach-Expertise schwierig.',
    trigger: 'Klingt bekannt?',
  },
];

const SOLUTIONS = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20shopping%20cart%20ecommerce%20online%20store%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-cart-video-sol-1&orientation=squarish', num: '01', accent: 'Online & E-Commerce', title: 'E-Commerce', desc: 'Live-Video bspw. von 8 bis 20 Uhr, danach Recordings. Kann auf Fokus-Produkte beschränkt werden. Lässt sich besonders gut im eigenen Shop einbinden.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20television%20screen%20display%20retail%20video%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-tv-video-sol-2&orientation=squarish', num: '02', accent: 'Retail Display', title: 'Retail: Video-Display', desc: 'Video-Screen im Handel: Live-Chat am POS mit dem Team im Studio. Plus: Abrufbarkeit von bereits aufgezeichneten Videos und Integration Text-Chatbot.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20QR%20code%20scan%20backup%20retail%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-qr-video-sol-3&orientation=squarish', num: '03', accent: 'QR Backup', title: 'Retail: QR-Code Backup', desc: 'Die Field Force ist bspw. an 2 Tagen pro Woche im Outlet? Per QR-Code am Regal bzw. auf der Packung kann das Studio-Team jeden Tag live erreicht werden.' },
];

const ADVANTAGES = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20map%20pin%20location%20purchase%20point%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-pin-video-adv-1&orientation=squarish', num: '01', accent: 'Kaufort', title: 'Am Einkaufsort', desc: 'Video für E-Commerce, Field Force für Retail: Kurz vor dem Kaufabschluss sprichst du mit deinen Kunden. Live.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20signal%20tower%20broadcast%20reach%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-signal-video-adv-2&orientation=squarish', num: '02', accent: 'Reichweite', title: 'Mehr Reichweite', desc: 'Erreiche mit Aufzeichnungen tausende potenzielle Kunden gleichzeitig, unabhängig vom Standort.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20bar%20chart%20analytics%20measurement%20results%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-chart-video-adv-3&orientation=squarish', num: '03', accent: 'Analytics', title: 'Messbare Ergebnisse', desc: 'Echtzeit-Analytics zu Viewern, Engagement und Conversions. Jeder Call wird getrackt: Dauer, Ergebnis, Kundenzufriedenheit.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20magnifying%20glass%20search%20market%20research%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-search-video-adv-4&orientation=squarish', num: '04', accent: 'Marktforschung', title: 'Marktforschung', desc: 'Aus den Fragen der Kunden lässt sich ableiten, wie gut die Kommunikationsstrategie (Ads, Shop) funktioniert.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20chat%20bubble%20interaction%20dialogue%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-chat-video-adv-5&orientation=squarish', num: '05', accent: 'Interaktion', title: 'Interaktivität', desc: 'Direkter Dialog mit Kunden durch Live-Chat, Q&A und Produktvorführungen in Echtzeit. Mit menschlicher Qualität.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20loop%20recycle%20reuse%20content%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-loop-video-adv-6&orientation=squarish', num: '06', accent: 'Content', title: 'Wiederverwendbar', desc: 'Aufgezeichnete Sessions können als On-Demand-Content weiterverwendet werden und so bei Beratung und Verkauf laufend unterstützen.' },
];

const FORMATS = [
  {
    icon: 'ri-user-voice-line',
    title: 'Live-Video-Beratung',
    desc: '1:1-Calls zwischen Kunde und Produktexperte. Persönlich, als echter Dialog, mit dem Ziel Kaufabschluss bzw. Cross-/Upselling.',
    img: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/9aba7e4f-1f00-4f96-b6fc-90fc615b11b3_1-Kopie.jpg',
    tag: '1:1',
  },
  {
    icon: 'ri-broadcast-line',
    title: 'Sales Broadcast',
    desc: 'Video-Produktpräsentation in Kombination mit Online-Shop. Reichweite trifft Kaufimpuls. Live und/oder Recorded.',
    img: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/a1484e91-882b-498d-b849-e6655b3952c0_2-Kopie.jpg',
    tag: 'Broadcast',
  },
  {
    icon: 'ri-live-line',
    title: 'Live-Streaming',
    desc: 'Besondere, exklusive Shopping-Events als Livestream. Für Product Launches, Limited Editions, VIP-Aktionen, Deep Dives.',
    img: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/ec769083-996f-4f19-a1aa-f82558ce1c27_3-Kopie.jpg',
    tag: 'Live',
  },
  {
    icon: 'ri-instagram-line',
    title: 'Social Commerce',
    desc: 'Angebote auf Social Channels mit direkter Kaufoption. Reichweite und Conversion in einem Kanal.',
    img: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/21a65c0f-e370-4202-875f-8b9858903d15_4-Kopie.jpg',
    tag: 'Social',
  },
  {
    icon: 'ri-group-line',
    title: 'Group Buying',
    desc: 'Gemeinsam, früher, günstiger, exklusiver einkaufen. Interaktive Kauferlebnisse für Gruppen.',
    img: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/6d9e8360-acc8-4646-9d6a-ae6ab41d65e1_5-Kopie.jpg',
    tag: 'Group',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'After Sales',
    desc: 'Dienstleistung nach dem Kauf: Troubleshooting, Setup-Hilfe, Produktsupport per Video. Kann die Retourenquote senken.',
    img: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/25ab2718-26bf-4db4-b304-22c7d310a3e6_6-Kopie.jpg',
    tag: 'Support',
  },
];

const PHYGITAL_COMPARE = [
  { label: 'Erreicht Online-Shopper', video: true, field: false },
  { label: 'Erreicht Retail-Shopper', video: false, field: true },
  { label: 'Erhöht Conversion Rate', video: true, field: false },
  { label: 'Generiert Leads und Sales', video: true, field: true },
  { label: '24/7 abrufbar (als Aufnahme)', video: true, field: false },
  { label: 'Während Öffnungszeiten', video: false, field: true },
  { label: 'Nutzbar im Retail (QR-Code)', video: true, field: false },
  { label: 'Promoter nutzbar für Videos', video: false, field: true },
];

export default function VideoContent() {
  const [solActive, setSolActive] = useState<number | null>(null);
  const [advActive, setAdvActive] = useState<number | null>(null);
  const solRef = useRef<HTMLDivElement>(null);
  const advRef = useRef<HTMLDivElement>(null);
  const scrollSol = (dir: 'left' | 'right') => { solRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' }); };
  const goToSol = (i: number) => { setSolActive(i); solRef.current?.scrollTo({ left: i * 376, behavior: 'smooth' }); };
  const scrollAdv = (dir: 'left' | 'right') => { advRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' }); };
  const goToAdv = (i: number) => { setAdvActive(i); advRef.current?.scrollTo({ left: i * 376, behavior: 'smooth' }); };
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [teamSize, setTeamSize] = useState(2);
  const [campaignDays, setCampaignDays] = useState(30);
  const [activeFormat, setActiveFormat] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [formatHovered, setFormatHovered] = useState(false);

  const lightboxItems: LightboxItem[] = FORMATS.map((f) => ({
    image: f.img,
    title: f.title,
    category: f.tag,
    description: f.desc,
  }));

  const openFormatLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const handleLbNext = () => setLightboxIndex((p) => (p + 1) % lightboxItems.length);
  const handleLbPrev = () => setLightboxIndex((p) => (p - 1 + lightboxItems.length) % lightboxItems.length);

  const avgCallMin = 6;
  const callsPerHour = 60 / avgCallMin;
  const totalHours = daysPerWeek * hoursPerDay * (campaignDays / 7);
  const maxCalls = Math.round(totalHours * callsPerHour * teamSize);
  const estimatedCostPerCall = 4.5;
  const totalCost = Math.round(maxCalls * estimatedCostPerCall);

  return (
    <>
      <ChallengeSection
        headline="Bewegtbild ist die Königsklasse."
        subline="Wenn (Live) Video Shopping einfach wäre, würde es jede Marke machen. Ist es aber nicht."
        challenges={VIDEO_CHALLENGES}
      />

      <WoodenDivider />

      {/* Solution */}
      <section id="loesung" className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/8 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5">
              <i className="ri-check-double-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Lösung</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#111] mb-3 leading-tight uppercase">Sonic (Live) Video<br /><span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>im Full Service.</span></h2>
            <p className="text-[#111]/55 text-base max-w-2xl mx-auto">Echte Menschen, geschult auf dein Produkt, beraten in Echtzeit. Plus: Aufgezeichneter Videocontent, der dauerhaft verkauft.</p>
          </div>
          <div className="flex items-center mb-6 gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#111]/30 flex-grow">{SOLUTIONS.length} Kanäle — scrollen</span>
            <button onClick={() => scrollSol('left')} className="w-10 h-10 flex items-center justify-center border border-[#111]/20 text-[#111]/40 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" aria-label="links"><i className="ri-arrow-left-s-line text-xl" /></button>
            <button onClick={() => scrollSol('right')} className="w-10 h-10 flex items-center justify-center border border-[#111]/20 text-[#111]/40 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" aria-label="rechts"><i className="ri-arrow-right-s-line text-xl" /></button>
          </div>
          <div ref={solRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {SOLUTIONS.map((s, idx) => {
              const isA = solActive === idx;
              return (
                <div key={idx} className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                  style={{ width: 'clamp(280px, 32vw, 380px)', minHeight: '340px', background: isA ? '#111' : '#ffffff', border: `1px solid ${isA ? 'rgba(200,212,0,0.5)' : 'rgba(0,0,0,0.09)'}`, transition: 'all 0.3s ease', transform: isA ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.3), 0 24px 48px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)' }}
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
                      <div className="w-7 h-7 flex items-center justify-center" style={{ background: isA ? '#C8D400' : 'rgba(0,0,0,0.07)', transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}><i className="ri-arrow-right-line text-sm" style={{ color: isA ? '#111' : 'rgba(0,0,0,0.45)' }} /></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6 mb-2">
            {SOLUTIONS.map((_, i) => (<button key={i} onClick={() => goToSol(i)} className="cursor-pointer" style={{ width: i === (solActive ?? 0) ? '22px' : '6px', height: '3px', background: i === (solActive ?? 0) ? '#C8D400' : 'rgba(0,0,0,0.2)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />))}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Live Studio Experience — Phone Mockup */}
      <VideoStudioPhone />

      <WoodenDivider />

      {/* Process Flow — 5th section */}
      <section id="process-flow">
        <LVPProcessFlow />
      </section>

      <WoodenDivider />

      {/* Advantages */}
      <section id="vorteile" className="bg-[#111] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-5">
              <i className="ri-thumb-up-line text-[#C8D400] text-sm"></i>
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Vorteile</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase">Darum (Live) Video Promotion</h2>
            <p className="text-white/45 text-sm mt-3">Chancen auf mehr Verkäufe und weniger Retouren.</p>
          </div>
          <div className="flex items-center mb-6 gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-white/20 flex-grow">{ADVANTAGES.length} Vorteile — scrollen</span>
            <button onClick={() => scrollAdv('left')} className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/40 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="links"><i className="ri-arrow-left-s-line text-xl" /></button>
            <button onClick={() => scrollAdv('right')} className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/40 hover:border-[#C8D400]/60 hover:text-[#C8D400] transition-all duration-200 cursor-pointer" aria-label="rechts"><i className="ri-arrow-right-s-line text-xl" /></button>
          </div>
          <div ref={advRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {ADVANTAGES.map((a, idx) => {
              const isA = advActive === idx;
              return (
                <div key={idx} className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
                  style={{ width: 'clamp(260px, 24vw, 320px)', minHeight: '300px', background: isA ? '#ffffff' : 'rgba(255,255,255,0.05)', border: `1px solid ${isA ? 'rgba(200,212,0,0.5)' : 'rgba(255,255,255,0.08)'}`, transition: 'all 0.3s ease', transform: isA ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.35), 0 24px 48px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)' }}
                  onMouseEnter={() => setAdvActive(idx)} onMouseLeave={() => setAdvActive(null)}
                >
                  <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? '#C8D400' : 'rgba(200,212,0,0.2)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.5)' : 'none', transition: 'all 0.3s ease' }} />
                  <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '5rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(255,255,255,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{a.num}</div>
                  <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: '300px' }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : 'rgba(200,212,0,0.4)', transition: 'background 0.3s ease' }} />
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : 'rgba(200,212,0,0.5)', transition: 'color 0.3s ease' }}>{a.accent}</span>
                    </div>
                    <div className="w-[52px] h-[52px] overflow-hidden mb-5 flex-shrink-0" style={{ boxShadow: isA ? '0 10px 24px rgba(139,90,43,0.35)' : '0 4px 14px rgba(139,90,43,0.22)', transition: 'all 0.35s ease', transform: isA ? 'scale(1.08)' : 'scale(1)' }}>
                      <img src={a.woodIcon} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-sm font-black mb-2 leading-snug uppercase" style={{ color: isA ? '#111' : '#fff', transition: 'color 0.3s ease' }}>{a.title}</h3>
                    <p className="text-xs leading-relaxed flex-grow" style={{ color: isA ? '#555' : 'rgba(255,255,255,0.5)', transition: 'color 0.3s ease' }}>{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {ADVANTAGES.map((_, i) => (<button key={i} onClick={() => goToAdv(i)} className="cursor-pointer" style={{ width: i === (advActive ?? 0) ? '22px' : '6px', height: '3px', background: i === (advActive ?? 0) ? '#C8D400' : 'rgba(255,255,255,0.2)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />))}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Cost Calculator */}
      <section id="kostenrechner" className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#111]/10 border border-[#111]/15 px-4 py-1.5 mb-5">
              <i className="ri-calculator-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Kostenrechner</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight uppercase">Live-Video: Kosten pro Jahr</h2>
          </div>

          <div className="border border-[#111]/15 bg-white p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { label: 'Tage pro Woche', value: daysPerWeek, min: 1, max: 7, setter: setDaysPerWeek },
                { label: 'Stunden pro Tag', value: hoursPerDay, min: 1, max: 12, setter: setHoursPerDay },
                { label: 'Teamgröße', value: teamSize, min: 1, max: 10, setter: setTeamSize },
                { label: 'Kampagnendauer (Tage)', value: campaignDays, min: 7, max: 365, setter: setCampaignDays },
              ].map((param, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[#111]/70 text-sm font-bold">{param.label}</label>
                    <span className="text-[#111] font-black text-lg font-mono">{param.value}</span>
                  </div>
                  <input
                    type="range"
                    min={param.min}
                    max={param.max}
                    value={param.value}
                    onChange={(e) => param.setter(Number(e.target.value))}
                    className="w-full h-1.5 appearance-none cursor-pointer"
                    style={{ accentColor: '#C8D400', background: `linear-gradient(to right, #C8D400 ${((param.value - param.min) / (param.max - param.min)) * 100}%, rgba(0,0,0,0.1) 0%)` }}
                  />
                  <div className="flex justify-between text-[#111]/25 text-xs mt-1">
                    <span>{param.min}</span>
                    <span>{param.max}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#111]/10 pt-8 grid md:grid-cols-3 gap-0 border border-[#111]/10">
              {[
                { val: maxCalls.toLocaleString('de-DE'), label: 'Max. mögliche Calls' },
                { val: `${avgCallMin} Min.`, label: 'Ø Beratungsdauer' },
                { val: `~${totalCost.toLocaleString('de-DE')} €`, label: 'Geschätzte Kosten' },
              ].map((stat, i) => (
                <div key={i} className={`p-6 text-center ${i < 2 ? 'border-r border-[#111]/10' : ''}`}>
                  <div className="text-3xl font-black text-[#111] font-mono mb-1">{stat.val}</div>
                  <div className="text-[#111]/45 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="mailto:${CONTACT_EMAIL}`?subject=Video-Konzept%20anfragen" className="inline-flex items-center gap-2 bg-[#111] text-white px-8 py-4 font-black hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm">
                <i className="ri-send-plane-line"></i>Video-Konzept anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Phygital */}
      <section id="phygital" className="bg-[#111] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-5">
              <i className="ri-links-line text-[#C8D400] text-sm"></i>
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Ideale Kombination</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight uppercase">Phygital optimal nutzen</h2>
            <p className="text-white/45 text-sm mt-3 max-w-xl mx-auto">Video und Field Force ergänzen sich wunderbar. Clever eingesetzt wird der ROI beider Maßnahmen im Omnichannel erhöht.</p>
          </div>

          <div className="border border-[#C8D400]/15 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 border-b border-[#C8D400]/15">
              <div className="p-4 text-white/40 text-xs font-black uppercase tracking-wider"></div>
              <div className="p-4 text-center border-l border-[#C8D400]/15">
                <div className="flex items-center justify-center gap-2">
                  <i className="ri-video-line text-[#C8D400] text-sm"></i>
                  <span className="text-[#C8D400] text-xs font-black uppercase tracking-wider">Video</span>
                </div>
              </div>
              <div className="p-4 text-center border-l border-[#C8D400]/15">
                <div className="flex items-center justify-center gap-2">
                  <i className="ri-user-line text-white/60 text-sm"></i>
                  <span className="text-white/60 text-xs font-black uppercase tracking-wider">Field Force</span>
                </div>
              </div>
            </div>
            {PHYGITAL_COMPARE.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                <div className="p-4 text-white/60 text-xs font-semibold">{row.label}</div>
                <div className="p-4 flex items-center justify-center border-l border-white/5">
                  {row.video
                    ? <div className="w-5 h-5 flex items-center justify-center bg-[#C8D400]"><i className="ri-check-line text-[#111] text-xs"></i></div>
                    : <div className="w-5 h-5 flex items-center justify-center bg-white/5"><i className="ri-close-line text-white/20 text-xs"></i></div>
                  }
                </div>
                <div className="p-4 flex items-center justify-center border-l border-white/5">
                  {row.field
                    ? <div className="w-5 h-5 flex items-center justify-center bg-[#C8D400]"><i className="ri-check-line text-[#111] text-xs"></i></div>
                    : <div className="w-5 h-5 flex items-center justify-center bg-white/5"><i className="ri-close-line text-white/20 text-xs"></i></div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Formats — dynamic with image backgrounds */}
      <section id="formate" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#111]/10 border border-[#111]/15 px-4 py-1.5 mb-5">
              <i className="ri-film-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Video-Formate</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight uppercase">6 Formate. Ein Partner.</h2>
          </div>

          {/* Format selector */}
          <div className="flex gap-0 border border-[#111]/15 mb-0 overflow-x-auto">
            {FORMATS.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFormat(i)}
                className={`flex-1 flex flex-col items-center gap-1 px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap border-r border-[#111]/15 last:border-r-0 ${
                  activeFormat === i ? 'bg-[#111] text-[#C8D400]' : 'bg-white text-[#111]/50 hover:text-[#111] hover:bg-white'
                }`}
              >
                <i className={`${f.icon} text-base`}></i>
                <span className="hidden sm:block">{f.tag}</span>
              </button>
            ))}
          </div>

          <div
            key={activeFormat}
            className="grid lg:grid-cols-12 border border-[#111]/15 border-t-0"
            style={{ animation: 'fadeIn 0.4s ease-out' }}
          >
            {/* Image — click to open fullscreen lightbox */}
            <div
              className="lg:col-span-7 relative overflow-hidden cursor-pointer group"
              style={{ minHeight: '360px' }}
              onClick={() => openFormatLightbox(activeFormat)}
              onMouseEnter={() => setFormatHovered(true)}
              onMouseLeave={() => setFormatHovered(false)}
              role="button"
              tabIndex={0}
              aria-label={`Bild vergrößern: ${FORMATS[activeFormat].title}`}
              onKeyDown={(e) => e.key === 'Enter' && openFormatLightbox(activeFormat)}
            >
              <img
                src={FORMATS[activeFormat].img}
                alt={FORMATS[activeFormat].title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: '360px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1">{FORMATS[activeFormat].tag}</span>
              </div>
              {/* Expand indicator */}
              <div className={`absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 transition-opacity duration-300 ${formatHovered ? 'opacity-100' : 'opacity-0'}`}>
                <i className="ri-fullscreen-line text-white text-sm"></i>
                <span className="text-white text-xs font-black uppercase tracking-wider">Vollbild</span>
              </div>
              <div className={`absolute inset-0 border-2 border-[#C8D400] transition-opacity duration-300 pointer-events-none ${formatHovered ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Info */}
            <div className="lg:col-span-5 bg-white p-8 flex flex-col justify-center border-l border-[#111]/15">
              <div className="w-12 h-12 flex items-center justify-center bg-[#111] mb-5">
                <i className={`${FORMATS[activeFormat].icon} text-xl text-[#C8D400]`}></i>
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-4 uppercase">{FORMATS[activeFormat].title}</h3>
              <p className="text-[#111]/65 text-base leading-relaxed mb-8">{FORMATS[activeFormat].desc}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(FORMATS[activeFormat].title + ' anfragen')}`}
                className="inline-flex items-center gap-2 bg-[#111] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer self-start"
              >
                Mehr erfahren <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          {/* Format pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {FORMATS.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFormat(i)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeFormat === i ? 'bg-[#111] text-[#C8D400]' : 'border border-[#111]/15 text-[#111]/50 hover:border-[#111]/40 hover:text-[#111]'
                }`}
              >
                <i className={`${f.icon} text-sm`}></i>
                {f.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — all 6 format images, keyboard nav + Esc to close */}
      <Lightbox
        items={lightboxItems}
        activeIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleLbNext}
        onPrev={handleLbPrev}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
