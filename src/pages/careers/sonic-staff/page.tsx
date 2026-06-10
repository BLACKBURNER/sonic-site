import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WoodenDivider from '../../../components/base/WoodenDivider';
import SonicFamily from '../components/SonicFamily';
import SalesPromo101 from '../components/SalesPromo101';
import PerksSection from '../components/PerksSection';
import OpenPositions from '../components/OpenPositions';
import MitarbeiterStimmen from '../components/MitarbeiterStimmen';
import RecruiterCTA from '../components/RecruiterCTA';
import { CONTACT_EMAIL } from '@/lib/contact';

type TabId = 'family' | 'promo101' | 'perks' | 'stimmen' | 'positions';

export default function SonicStaffPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('family');
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const [switcherVisible, setSwitcherVisible] = useState(false);
  const [switcherHovered, setSwitcherHovered] = useState<'back' | 'switch' | null>(null);
  const [applyHovered, setApplyHovered] = useState(false);
  const tabSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSwitcherVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  const handleApplyClick = () => {
    setActiveTab('positions');
    setTimeout(() => {
      tabSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'family', label: 'Sonic Family', icon: 'ri-team-line' },
    { id: 'promo101', label: 'Sales Promo 101', icon: 'ri-lightbulb-line' },
    { id: 'perks', label: 'Benefits', icon: 'ri-gift-line' },
    { id: 'stimmen', label: 'Mitarbeiter-Stimmen', icon: 'ri-chat-quote-line' },
    { id: 'positions', label: 'Open Positions', icon: 'ri-briefcase-line' },
  ];

  const partnerBrands = [
    { name: 'Garmin' },
    { name: 'Samsung' },
    { name: 'Philips' },
    { name: 'Dyson' },
    { name: 'Sony' },
    { name: 'Bose' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Floating path-switcher pill (appears on scroll) ─────────────── */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          switcherVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-0 overflow-hidden shadow-2xl border border-[#C8D400]/30" style={{ borderRadius: 0 }}>
          <button
            onClick={() => goTo('/careers')}
            onMouseEnter={() => setSwitcherHovered('back')}
            onMouseLeave={() => setSwitcherHovered(null)}
            className="flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer"
            style={{ background: switcherHovered === 'back' ? '#C8D400' : '#111', color: switcherHovered === 'back' ? '#111' : 'rgba(255,255,255,0.6)' }}
          >
            <i className="ri-arrow-left-line"></i>
            Alle Pfade
          </button>
          <div className="flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wide" style={{ background: '#C8D400', color: '#111' }}>
            <div className="w-1.5 h-1.5 bg-[#111] rounded-full animate-pulse"></div>
            Sonic Staff
          </div>
          <button
            onClick={() => goTo('/careers/sonic-sales')}
            onMouseEnter={() => setSwitcherHovered('switch')}
            onMouseLeave={() => setSwitcherHovered(null)}
            className="flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer"
            style={{ background: switcherHovered === 'switch' ? '#C8D400' : '#1a1a1a', color: switcherHovered === 'switch' ? '#111' : 'rgba(255,255,255,0.6)' }}
          >
            Sonic Sales
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      {/* ── Floating "Jetzt bewerben" FAB ─────────────────────────────── */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          switcherVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <button
          onClick={handleApplyClick}
          onMouseEnter={() => setApplyHovered(true)}
          onMouseLeave={() => setApplyHovered(false)}
          className="flex items-center gap-2.5 px-5 py-3.5 font-black text-xs uppercase tracking-wide shadow-2xl transition-all duration-300 whitespace-nowrap cursor-pointer border-2"
          style={{
            borderRadius: 0,
            background: applyHovered ? '#111' : '#C8D400',
            color: applyHovered ? '#C8D400' : '#111',
            borderColor: applyHovered ? '#C8D400' : '#C8D400',
            transform: applyHovered ? 'translateY(-2px)' : 'translateY(0)',
          }}
        >
          <i className="ri-briefcase-line text-sm"></i>
          Jetzt bewerben
        </button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.sonic-group.de/wp-content/uploads/2023/02/POS_NEU.jpg"
            alt="Sonic Staff Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/65"></div>
        </div>

        {/* Back breadcrumb */}
        <button
          onClick={() => goTo('/careers')}
          className="absolute top-28 left-6 z-20 flex items-center gap-2 text-white/60 hover:text-[#C8D400] transition-colors text-xs font-bold uppercase tracking-wide cursor-pointer group"
        >
          <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform"></i>
          Alle Karrierepfade
        </button>

        {/* Path switch top-right */}
        <button
          onClick={() => goTo('/careers/sonic-sales')}
          className="absolute top-28 right-6 z-20 flex items-center gap-2 text-white/60 hover:text-[#C8D400] transition-colors text-xs font-bold uppercase tracking-wide cursor-pointer group"
        >
          Zu Sonic Sales
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center w-full">
          <div className="inline-flex items-center gap-2 mb-6 bg-[#C8D400]/20 px-5 py-2 border-2 border-[#C8D400]/40">
            <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
            <p className="text-xs font-bold tracking-wide uppercase text-[#C8D400]">Sonic Staff · Field Team</p>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-5 leading-tight">
            LERNE DIE<br /><span className="text-[#C8D400]">SONIC STAFF</span><br />FAMILY KENNEN
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-2 font-semibold">Flexibel. Fair. Wirkungsvoll – direkt an der Verkaufsfläche.</p>
          <p className="text-base text-white/75 max-w-xl mx-auto mb-10">150+ Premium-Brands · Flexibler Einsatz · Top-Incentive-Programme</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('positions')}
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#C8D400] text-[#111] font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
              style={{ borderRadius: 0 }}
            >
              Jetzt bewerben <i className="ri-arrow-right-line text-base" />
            </button>
            <button
              onClick={() => goTo('/careers/sonic-sales')}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border-2 border-white/30 text-white font-black hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
              style={{ borderRadius: 0 }}
            >
              Sonic Sales entdecken <i className="ri-swap-line text-base" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <i className="ri-arrow-down-line text-4xl text-[#C8D400]"></i>
        </div>
      </section>

      {/* Partner brands */}
      <section className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Du arbeitest mit weltbekannten Marken</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnerBrands.map((brand, index) => (
              <div
                key={index}
                className={`relative p-4 transition-all duration-300 cursor-pointer ${hoveredBrand === index ? 'bg-[#C8D400]/10 scale-110' : 'bg-transparent hover:bg-gray-50'}`}
                style={{ borderRadius: 0 }}
                onMouseEnter={() => setHoveredBrand(index)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div className={`absolute inset-0 border-2 transition-all duration-300 ${hoveredBrand === index ? 'border-[#C8D400]' : 'border-transparent'}`} style={{ borderRadius: 0 }}></div>
                <div className="w-28 h-10 flex items-center justify-center">
                  <span className={`font-black text-sm uppercase tracking-widest transition-all duration-300 ${hoveredBrand === index ? 'text-[#111] opacity-100' : 'text-[#111]/40'}`}>{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* Tab Navigation */}
      <div ref={tabSectionRef}>
        <section className="py-4 px-6 bg-white sticky top-14 z-40 shadow-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-white shadow-lg ring-2 ring-[#C8D400] text-[#C8D400]'
                        : 'bg-white/60 hover:bg-white hover:shadow-md ring-1 ring-gray-200 hover:ring-[#C8D400]/50 text-gray-600'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    <i className={`${tab.icon} text-base`}></i>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => goTo('/careers/sonic-sales')}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#111] text-white font-black text-xs uppercase tracking-wide hover:bg-[#C8D400] hover:text-[#111] transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ borderRadius: 0 }}
              >
                <i className="ri-swap-line"></i>
                Sonic Sales
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {activeTab === 'family' && <SonicFamily />}
        {activeTab === 'promo101' && <SalesPromo101 />}
        {activeTab === 'perks' && <PerksSection variant="staff" />}
        {activeTab === 'stimmen' && <MitarbeiterStimmen variant="staff" />}
        {activeTab === 'positions' && <OpenPositions />}
      </div>

      <WoodenDivider />
      <RecruiterCTA />
      <WoodenDivider />

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-[#111] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Dein nächster Schritt</span>
          </div>
          <h3 className="text-4xl font-black text-[#111] mb-4 uppercase">Bereit für die Sonic Staff Family?</h3>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">150+ Marken, flexible Einsätze, faire Bezahlung. Starte jetzt.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:${CONTACT_EMAIL}`?subject=Bewerbung Sonic Staff"
              className="inline-flex items-center gap-3 px-7 py-3 bg-[#C8D400] text-[#111] font-black hover:bg-[#111] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
              style={{ borderRadius: 0 }}
            >
              Jetzt bewerben <i className="ri-arrow-right-line text-base" />
            </a>
            <button
              onClick={() => goTo('/careers/sonic-sales')}
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-200 text-gray-600 font-black hover:border-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
              style={{ borderRadius: 0 }}
            >
              <i className="ri-swap-line text-base" /> Lieber Sonic Sales?
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
