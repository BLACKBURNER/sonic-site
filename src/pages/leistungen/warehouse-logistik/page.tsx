import { useState, useRef } from 'react';
import { useSEO } from '@/hooks/useSEO';
import Navigation from '../../../components/feature/Navigation';
import LeistungenPageNav from '../../../components/feature/LeistungenPageNav';
import LeistungenKontakt from '../../../components/feature/LeistungenKontakt';
import ScrollToTopButton from '../../../components/feature/ScrollToTopButton';
import WoodenDivider from '../../../components/base/WoodenDivider';
import ChallengeSection from '../../../components/feature/ChallengeSection';
import type { ChallengeItem } from '../../../components/feature/ChallengeSection';
import { CONTACT_EMAIL } from '@/lib/contact';

const NAV_ITEMS = [
  { id: 'loesung', label: 'Lösung', icon: 'ri-lightbulb-line' },
  { id: 'beispiele', label: 'Beispiele', icon: 'ri-image-line' },
  { id: 'full-service', label: 'Full Service', icon: 'ri-shield-check-line' },
  { id: 'kontakt', label: 'Kontakt', icon: 'ri-calendar-line' },
];


const SOLUTIONS = [
  { icon: 'ri-inbox-archive-line', num: '01', accent: 'Einlagerung & QS', title: 'Wareneingang & Qualitätskontrolle', desc: 'Bei Anlieferung: Qualitäts- und Mengenkontrolle, Einlagerung und Erfassung in unserer Lagersoftware.' },
  { icon: 'ri-archive-line', num: '02', accent: 'Lager & Bestand', title: 'Lagermanagement & Verwaltung', desc: 'POS-Werbemittel, Möbel, Pressemuster, Leihgeräte, Technik, Messestände: Alles sauber und sicher eingelagert, jederzeit abrufbar.' },
  { icon: 'ri-send-plane-line', num: '03', accent: 'Versand EU', title: 'Kommissionierung & Versand', desc: 'Abwicklung, Verbuchung, Kommissionierung und Auslieferung. Fristgerecht, europaweit. Mit Versandpartnern und eigenen Fahrern.' },
  { icon: 'ri-shopping-cart-line', num: '04', accent: 'E-Commerce', title: 'Fulfillment & Webshops', desc: 'Online-(Nach-)Bestellungen von Waren, Mustern und POS-Material wickeln wir komplett ab. Mit Schnittstellen zum E-Commerce, Billing, Bestandsführung, Analytics und Forecasts.' },
];

const STATS = [
  { val: '~500 qm', label: 'Lagerfläche' },
  { val: '250', label: 'Paletten-Stellplätze' },
  { val: '>22', label: 'Länder' },
];

const WAREHOUSE_ITEMS = [
  {
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/LAGER_OPENER.jpg',
    title: 'POS-Materialien & Displays',
    tag: 'POS',
    desc: 'Aufsteller, Displays, Regalstopper, Wobbler',
  },
  {
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/EVENT_NEU.jpg',
    title: 'Messestände & Module',
    tag: 'Messen',
    desc: 'Modulare Standsysteme, Rahmen, Displays',
  },
  {
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/10.jpg',
    title: 'Werbemittel & Give-aways',
    tag: 'Merchandise',
    desc: 'Hochwertige Werbeartikel, Streuartikel',
  },
  {
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/11/NEXARO01.jpg',
    title: 'Möbel & Shop-in-Shop',
    tag: 'Möbel',
    desc: 'Regale, Möbelsysteme, Roadshow-Module',
  },
  {
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/SRT_OPENER.jpg',
    title: 'Pressemuster & Leihgeräte',
    tag: 'Technik',
    desc: 'Geräte, Muster, Technik-Equipment',
  },
  {
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
    title: 'Fulfillment & Versand',
    tag: 'Logistik',
    desc: 'Kommissionierung, Verpackung, Versand',
  },
];

const WAREHOUSE_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-eye-off-line',
    title: 'Überblick fehlt',
    desc: 'Wenn POS-, Messe- und Event-Materialien an verschiedenen Standorten gelagert werden, fehlt schnell ein umfassender Überblick.',
    trigger: 'Auch bei euch so?',
  },
  {
    icon: 'ri-truck-line',
    title: 'Logistik schwierig',
    desc: 'Wenn die Materialien fristgerecht ausgeliefert werden müssen, steigt bei der Nutzung verschiedener Standorte der Logistik-Aufwand.',
    trigger: 'Klingt vertraut?',
  },
  {
    icon: 'ri-alert-line',
    title: 'Schäden unsichtbar',
    desc: 'Wenn Materialien wieder ins Lager zurückkommen, müssen sie auf Schäden kontrolliert werden, damit diese nachweislich behoben werden können.',
    trigger: 'Schon passiert?',
  },
];

export default function WarehouseLogistikPage() {
  useSEO({
    title: 'Warehouse & Logistik | Sonic Group — POS-Lagerung & Fulfillment DACH',
    description: 'Warehouse & Logistik von Sonic Group: ~500 qm Lagerfläche, 250 Palettenstellplätze, Fulfillment und europaweite Lieferung für POS-Materialien, Messestände und Werbemittel.',
    keywords: 'Warehouse Logistik DACH, POS Material Lagerung, Fulfillment Service, Messestand Lagerung, Werbemittel Logistik',
    canonical: 'https://sonic-group.de/leistungen/warehouse-logistik',
    ogTitle: 'Warehouse & Logistik — Sonic Group DACH',
    ogDescription: '~500 qm Lager, Fulfillment & europaweite Lieferung für POS-Materialien und Messestände.',
  });

  const [activeItem, setActiveItem] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [solActive, setSolActive] = useState<number | null>(null);
  const solRef = useRef<HTMLDivElement>(null);
  const scrollSol = (dir: 'left' | 'right') => { solRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' }); };
  const goToSol = (i: number) => { setSolActive(i); solRef.current?.scrollTo({ left: i * 376, behavior: 'smooth' }); };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <LeistungenPageNav items={NAV_ITEMS} heroRef={heroRef} />

      {/* Hero */}
      <div ref={heroRef}>
        <section className="relative flex items-center justify-center overflow-hidden bg-black" style={{ minHeight: '480px', paddingTop: '80px', paddingBottom: '60px' }}>
          <img
            src="https://www.sonic-group.de/wp-content/uploads/2023/06/LAGER_OPENER.jpg"
            alt="Warehouse und Logistik"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.85) 100%)' }} />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8D400]/7 blur-[100px] pointer-events-none z-10" />
          <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-5 md:mb-6 opacity-60">
              <span className="text-white/50 text-xs font-bold">Leistungen</span>
              <i className="ri-arrow-right-s-line text-white/40 text-sm"></i>
              <span className="text-[#C8D400] text-xs font-bold">Warehouse & Logistik</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-6 md:mb-8">
              <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Warehouse & Logistik</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-none">
              Ware zur richtigen Zeit<br /><span className="text-[#C8D400]">am richtigen Ort.</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-3 md:mb-4 font-semibold">Phygital? Können wir. Mit 250 eigenen Paletten-Stellplätzen für Assets, Messestände und Ware.</p>
            <p className="text-sm text-white/55 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">Mit Fulfillment-Services und Schnittstellen. Europaweit.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 md:mb-10">
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl md:text-2xl font-black text-[#C8D400]">{s.val}</div>
                  <div className="text-white/45 text-xs font-bold uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Warehouse%20Logistik%20Beratung`} className="inline-flex items-center gap-2 bg-[#C8D400] text-white px-7 py-3 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm" style={{ borderRadius: 0 }}>
              <i className="ri-calendar-line"></i>Termin finden
            </a>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </section>
      </div>

      <WoodenDivider />

      {/* Challenge — shared dark component */}
      <ChallengeSection
        id="herausforderung"
        headline="Kampagnen und Logistik sind oft getrennt."
        subline="Warum es beim Roll-out nicht immer optimal läuft."
        challenges={WAREHOUSE_CHALLENGES}
      />

      <WoodenDivider />

      {/* Solution — light warm bg (directly after dark ChallengeSection), subtle tint matching homepage */}
      <section id="loesung" className="py-14 md:py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAFDF5 0%, #ffffff 100%)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/8 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5">
              <i className="ri-check-double-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Lösung</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-3 leading-tight uppercase">Warehousing und Logistik als<br /><span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>integraler Baustein.</span></h2>
            <p className="text-[#111]/50 text-sm md:text-base max-w-2xl">Einlagerung, Bereitstellung, Auslagerung, Anlieferung und Aufbau deiner Produkte, Werbematerialien, Messestände etc. Als Teil des Sonic Gesamtpakts.</p>
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
                  style={{ width: 'clamp(280px, 28vw, 340px)', minHeight: '320px', background: isA ? '#111' : '#ffffff', border: `1px solid ${isA ? 'rgba(200,212,0,0.5)' : 'rgba(0,0,0,0.09)'}`, transition: 'all 0.3s ease', transform: isA ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isA ? '0 0 0 1px rgba(200,212,0,0.35), 0 24px 48px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)' }}
                  onMouseEnter={() => setSolActive(idx)} onMouseLeave={() => setSolActive(null)}
                >
                  <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: isA ? '#C8D400' : 'rgba(0,0,0,0.08)', boxShadow: isA ? '0 0 14px rgba(200,212,0,0.5)' : 'none', transition: 'all 0.3s ease' }} />
                  <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
                  <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '5.5rem', color: isA ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)', lineHeight: 1, transition: 'color 0.3s ease' }}>{s.num}</div>
                  <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: '320px' }}>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1.5 h-1.5" style={{ background: isA ? '#C8D400' : 'rgba(200,212,0,0.6)', transition: 'background 0.3s ease' }} />
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? '#C8D400' : 'rgba(139,110,0,0.7)', transition: 'color 0.3s ease' }}>{s.accent}</span>
                    </div>
                    <div className="w-[56px] h-[56px] flex items-center justify-center mb-5 flex-shrink-0" style={{ background: isA ? 'linear-gradient(145deg, #d4e100, #C8D400)' : 'rgba(0,0,0,0.07)', boxShadow: isA ? '0 10px 24px rgba(200,212,0,0.35), inset 0 1px 0 rgba(255,255,255,0.4)' : '0 2px 8px rgba(0,0,0,0.08)', transition: 'all 0.35s ease' }}>
                      <i className={`${s.icon} text-xl`} style={{ color: isA ? '#111' : 'rgba(0,0,0,0.5)', transition: 'color 0.35s ease' }} />
                    </div>
                    <h3 className="text-sm font-black mb-2 leading-snug uppercase" style={{ color: isA ? '#fff' : '#111', transition: 'color 0.3s ease' }}>{s.title}</h3>
                    <p className="text-xs leading-relaxed flex-grow" style={{ color: isA ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)', transition: 'color 0.3s ease' }}>{s.desc}</p>
                    <div className="flex items-center justify-between pt-4 mt-3" style={{ borderTop: `1px solid ${isA ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`, transition: 'border-color 0.3s ease' }}>
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: isA ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>{s.num} / 04</span>
                      <div className="w-7 h-7 flex items-center justify-center" style={{ background: isA ? '#C8D400' : 'rgba(0,0,0,0.07)', transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}><i className="ri-arrow-right-line text-sm" style={{ color: isA ? '#111' : 'rgba(0,0,0,0.45)' }} /></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {SOLUTIONS.map((_, i) => (<button key={i} onClick={() => goToSol(i)} className="cursor-pointer" style={{ width: i === (solActive ?? 0) ? '22px' : '6px', height: '3px', background: i === (solActive ?? 0) ? '#C8D400' : 'rgba(0,0,0,0.2)', border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />))}
          </div>
        </div>
      </section>

      {/* Was wir lagern */}
      <section id="beispiele" className="bg-white py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/12 px-4 py-1.5 mb-5">
              <i className="ri-image-line text-[#111] text-sm"></i>
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Was wir lagern</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-tight mb-2 uppercase">
              Alles unter einem Dach.
            </h2>
            <p className="text-[#111]/50 text-sm md:text-base">Jederzeit abrufbar. Europaweit lieferbar.</p>
          </div>

          {/* Pill tabs */}
          <div className="flex flex-wrap gap-2 mb-0">
            {WAREHOUSE_ITEMS.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveItem(i)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 font-bold text-xs md:text-sm transition-all whitespace-nowrap cursor-pointer ${
                  activeItem === i
                    ? 'bg-[#111] text-[#C8D400]'
                    : 'bg-white hover:bg-white text-[#111]/60 border border-[#111]/10'
                }`}
                style={{ borderRadius: 0 }}
              >
                <span>{item.tag}</span>
              </button>
            ))}
          </div>

          {/* Main image panel */}
          <div
            key={activeItem}
            className="grid lg:grid-cols-12 border border-[#111]/10 border-t-0"
            style={{ animation: 'fadeIn 0.4s ease-out' }}
          >
            <div className="lg:col-span-8 relative overflow-hidden" style={{ minHeight: '280px' }}>
              <img
                src={WAREHOUSE_ITEMS[activeItem].img}
                alt={WAREHOUSE_ITEMS[activeItem].title}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: '280px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1">{WAREHOUSE_ITEMS[activeItem].tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-black text-white mb-1 uppercase">{WAREHOUSE_ITEMS[activeItem].title}</h3>
                <p className="text-white/65 text-sm">{WAREHOUSE_ITEMS[activeItem].desc}</p>
              </div>
            </div>
            <div className="lg:col-span-4 bg-white border-t lg:border-t-0 lg:border-l border-[#111]/10 p-6 md:p-8 flex flex-col justify-center">
              <div className="text-[10px] font-black text-[#111]/40 uppercase tracking-widest mb-4">Alle Kategorien</div>
              <div className="space-y-2">
                {WAREHOUSE_ITEMS.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveItem(i)}
                    className={`w-full flex items-center gap-3 p-3 text-left transition-all duration-200 cursor-pointer ${activeItem === i ? 'bg-[#111] text-white' : 'bg-white text-[#111]/70 hover:bg-white'}`}
                    style={{ borderRadius: 0, outline: activeItem === i ? 'none' : '1px solid rgba(0,0,0,0.08)' }}
                  >
                    {activeItem === i && (
                      <div className="w-4 h-4 flex items-center justify-center bg-[#C8D400] flex-shrink-0">
                        <i className="ri-check-line text-[#111] text-[9px]"></i>
                      </div>
                    )}
                    <span className="text-xs font-bold">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Full Service */}
      <section id="full-service" className="bg-[#111] py-14 md:py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/4 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-5 md:mb-6">
                <i className="ri-shield-check-line text-[#C8D400] text-sm"></i>
                <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Full Service</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-tight uppercase">Darum Warehouse<br /><span className="text-[#C8D400]">bei Sonic.</span></h2>
              <p className="text-white/65 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Unsere Lager- und Logistikleistungen dienen einem Zweck: Dein Projekt erfolgreich realisieren. POS-Material, Give-aways, Möbel und Equipment werden von uns produziert und unterliegen unserer Qualitätskontrolle. Diese gelingt effizient, wenn wir das Lager direkt nebenan haben.
              </p>
              <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Für deine Ware, also Muster etc., ist es ebenfalls ideal, wenn wir ein Auge darauf haben. So stellen wir sicher, dass alle physischen Bausteine deines Projekts zur richtigen Zeit an den richtigen Ort gelangen können.
              </p>
              <div className="grid grid-cols-3 gap-0 border border-[#C8D400]/15">
                {STATS.map((s, i) => (
                  <div key={i} className={`p-4 md:p-5 text-center ${i < 2 ? 'border-r border-[#C8D400]/15' : ''}`}>
                    <div className="text-base md:text-xl font-black text-[#C8D400]">{s.val}</div>
                    <div className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.sonic-group.de/wp-content/uploads/2023/01/12.jpg"
                alt="Sonic Warehouse"
                className="w-full object-cover object-top"
                style={{ minHeight: '300px' }}
              />
              <div className="absolute top-4 left-4 bg-[#C8D400] px-3 md:px-4 py-2">
                <span className="text-[#111] text-xs font-black uppercase tracking-widest">~500 qm Lagerfläche</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeistungenKontakt
        headline="Beratungsgespräch"
        headlineAccent="buchen."
        subline="Wir zeigen dir in 30 Minuten, welchen Mehrwert unser Warehousing- und Logistik-Angebot im Rahmen deiner Gesamtstrategie bietet."
        checkItems={[
          { text: 'Lagerkonzept & Kapazitäten' },
          { text: 'Logistik-Prozesse & Schnittstellen' },
          { text: 'Fulfillment & Webshop-Integration' },
        ]}
        ctaLabel="Termin finden"
        ctaMailSubject="Warehouse Logistik Beratung"
        ctaIcon="ri-calendar-line"
      />

      <ScrollToTopButton />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}