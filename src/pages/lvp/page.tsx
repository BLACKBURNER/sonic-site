import { useEffect, useState, useRef } from 'react';
import WoodenDivider from '../../components/base/WoodenDivider';
import LVPHero from './components/LVPHero';
import LVPProcessFlow from './components/LVPProcessFlow';
import HowItWorks from './components/HowItWorks';
import PhygitalGap from './components/PhygitalGap';
import UseCases from './components/UseCases';
import CreativeShowcase from './components/CreativeShowcase';
import StudioCapabilities from './components/StudioCapabilities';
import LVPBenefits from './components/LVPBenefits';
import ContactCTA from './components/ContactCTA';
import PromoCalculator from './components/PromoCalculator';
import LVPStudioShowcase from './components/LVPStudioShowcase';
import LeistungenPageNav from '../../components/feature/LeistungenPageNav';

const NAV_ITEMS = [
  { id: 'benefits', label: 'Benefits', icon: 'ri-gift-line' },
  { id: 'process', label: 'Process', icon: 'ri-flow-chart' },
  { id: 'calculator', label: 'Calculator', icon: 'ri-calculator-line' },
  { id: 'howitworks', label: 'How It Works', icon: 'ri-settings-3-line' },
  { id: 'usecases', label: 'Use Cases', icon: 'ri-file-list-3-line' },
  { id: 'showcase', label: 'Showcase', icon: 'ri-gallery-line' },
  { id: 'contact', label: 'Contact', icon: 'ri-mail-line' },
];

export default function LVPPage() {
  const [showFloating, setShowFloating] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <LeistungenPageNav items={NAV_ITEMS} heroRef={heroRef} />

      <div ref={heroRef}>
        <LVPHero />
      </div>

      <div id="benefits">
        <LVPBenefits />
      </div>

      <WoodenDivider />

      <div id="process">
        <LVPProcessFlow />
      </div>

      <WoodenDivider />

      <div id="calculator">
        <PromoCalculator />
      </div>

      <WoodenDivider />

      <LVPStudioShowcase />

      <WoodenDivider />

      <div id="howitworks">
        <HowItWorks />
      </div>

      <PhygitalGap />

      <WoodenDivider />

      <div id="usecases">
        <UseCases />
      </div>

      <WoodenDivider />

      <div id="showcase">
        <CreativeShowcase />
      </div>

      <StudioCapabilities />

      <WoodenDivider />

      <div id="contact">
        <ContactCTA />
      </div>

      {/* ── STICKY FLOATING CTA BADGE ── */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-[#C8D400] animate-ping opacity-20" style={{ borderRadius: 0 }} />
          <a
            href="mailto:info@sonic-promo.de?subject=Live Video Promotion Anfrage"
            className="relative flex items-center gap-3 bg-[#C8D400] text-[#0d0d0d] px-5 py-4 font-black text-sm uppercase tracking-wider whitespace-nowrap cursor-pointer hover:bg-white transition-all duration-300 group-hover:gap-4"
            style={{ borderRadius: 0, boxShadow: '0 8px 32px rgba(200,212,0,0.4), 0 2px 8px rgba(0,0,0,0.3)' }}
          >
            <div className="w-8 h-8 bg-[#0d0d0d]/15 flex items-center justify-center flex-shrink-0" style={{ borderRadius: 0 }}>
              <i className="ri-video-line text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-70 leading-none mb-0.5">Live Video</span>
              <span className="text-sm font-black leading-none">Demo anfragen</span>
            </div>
            <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <div
            className="absolute -top-3 -left-3 bg-[#0d0d0d] text-[#C8D400] text-[9px] font-black uppercase tracking-widest px-2 py-1 border border-[#C8D400]/40"
            style={{ borderRadius: 0 }}
          >
            LVP
          </div>
        </div>
      </div>
    </div>
  );
}
