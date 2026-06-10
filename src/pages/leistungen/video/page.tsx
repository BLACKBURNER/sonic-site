import { useState, useEffect, useRef } from 'react';
import { useSEO } from '@/hooks/useSEO';
import Navigation from '../../../components/feature/Navigation';
import ScrollToTopButton from '../../../components/feature/ScrollToTopButton';
import LeistungenPageNav from '../../../components/feature/LeistungenPageNav';
import WoodenDivider from '../../../components/base/WoodenDivider';
import LeistungenKontakt from '../../../components/feature/LeistungenKontakt';
import VideoHero from './components/VideoHero';
import VideoContent from './components/VideoContent';
import VideoReferenzen from './components/VideoReferenzen';

const NAV_ITEMS = [
  { id: 'loesung', label: 'Lösung', icon: 'ri-lightbulb-line' },
  { id: 'beispiele', label: 'Beispiele', icon: 'ri-live-line' },
  { id: 'process-flow', label: 'Prozess', icon: 'ri-flow-chart' },
  { id: 'vorteile', label: 'Vorteile', icon: 'ri-thumb-up-line' },
  { id: 'kostenrechner', label: 'Kostenrechner', icon: 'ri-calculator-line' },
  { id: 'phygital', label: 'Phygital', icon: 'ri-links-line' },
  { id: 'formate', label: 'Formate', icon: 'ri-film-line' },
  { id: 'referenzen', label: 'Referenzen', icon: 'ri-chat-quote-line' },
  { id: 'kontakt', label: 'Kontakt', icon: 'ri-calendar-line' },
];

export default function VideoPage() {
  useSEO({
    title: 'Live Video Promotion | Sonic Group — 1:1 Video-Beratung & Live Shopping DACH',
    description: 'Live Video Promotion von Sonic Group: 1:1 Video-Kaufberatung, Live Shopping Events und Phygital Retail für den DACH-Markt. Conversion steigern, Retouren senken.',
    keywords: 'Live Video Promotion, Video Kaufberatung, Live Shopping DACH, Phygital Retail, Video Commerce',
    canonical: 'https://sonic-group.de/leistungen/live-video',
    ogTitle: 'Live Video Promotion — Sonic Group',
    ogDescription: '1:1 Video-Beratung & Live Shopping für den DACH-Markt. Conversion +34%, Retouren -28%.',
  });

  const [showFloating, setShowFloating] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <LeistungenPageNav items={NAV_ITEMS} heroRef={heroRef} />
      <div ref={heroRef}>
        <VideoHero />
      </div>
      <WoodenDivider />
      <div style={{ background: 'linear-gradient(180deg, #FAFDF5 0%, #ffffff 100%)' }}>
        <VideoContent />
      </div>

      <WoodenDivider />

      <VideoReferenzen />

      <WoodenDivider />

      <LeistungenKontakt
        headline="Jetzt Video-Demo"
        headlineAccent="anfordern."
        subline="Lass uns besprechen, wie (Live) Video Promotion deine Marke weiterbringt."
        checkItems={[
          { text: 'Kostenfreies 30-Minuten-Strategiegespräch' },
          { text: 'Live-Demo in einem unserer Studios' },
          { text: 'Individuelle Kosten-Nutzen-Analyse' },
          { text: 'Erste Einschätzung zur Timeline' },
        ]}
        ctaLabel="Beratungsgespräch buchen"
        ctaMailSubject="Video Demo anfragen"
        ctaIcon="ri-video-line"
      />

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
      <ScrollToTopButton />
    </div>
  );
}
