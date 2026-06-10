import { useEffect, useRef } from 'react';
import { useSEO } from '@/hooks/useSEO';
import WoodenDivider from '@/components/base/WoodenDivider';
import LeistungenPageNav from '@/components/feature/LeistungenPageNav';
import OriginStory from './components/OriginStory';
import Timeline from './components/Timeline';
import ValuesVisual from './components/ValuesVisual';
import LeadershipTeam from './components/LeadershipTeam';
import WhySonic from './components/WhySonic';
import ManagementVoices from './components/ManagementVoices';
import { StackedSectionReveal } from '@/components/feature/SectionReveal';

const ABOUT_NAV_ITEMS = [
  { id: 'uber-uns', label: 'Über uns', icon: 'ri-home-heart-line' },
  { id: 'referenzen', label: 'Referenzen', icon: 'ri-medal-line' },
  { id: 'innovation', label: 'Timeline', icon: 'ri-history-line' },
  { id: 'team', label: 'Team', icon: 'ri-group-line' },
  { id: 'management-voices', label: 'Management', icon: 'ri-mic-line' },
  { id: 'kontakt', label: 'Kontakt', icon: 'ri-mail-send-line' },
];

export default function AboutPage() {
  useSEO({
    title: 'Über uns | Sonic Group — Sales- & Marketing-Agentur seit 2007',
    description: 'Sonic Group: Unabhängige Marketing- und Sales-Agentur seit 2007. Über 500 Projekte, 1,35 Mio. Einsätze. Partner von Philips, Rowenta, Krups, Canon, Garmin & mehr.',
    keywords: 'Sonic Group, Sales Promotion Agentur Deutschland, Marketing Agentur seit 2007, POS Agentur',
    canonical: 'https://sonic-group.de/about',
    ogTitle: 'Über Sonic Group — Marken im Herzen, Erfolg im Fokus',
    ogDescription: 'Unabhängige Marketing- und Sales-Agentur mit Schwerpunkten rund um Konzeption, Kreation und Koordination von Kundenprojekten seit 2007.',
  });

  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    const contentSection = document.getElementById('uber-uns');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <main id="main-content">
      {/* ── IN-PAGE NAV — self-manages visibility via heroRef ── */}
      <LeistungenPageNav items={ABOUT_NAV_ITEMS} heroRef={heroRef} />

      {/* Hero Section */}
      <div ref={heroRef}>
        <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png"
              alt="Sonic Group — Über uns"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
          </div>

          {/* Lime ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C8D400]/6 rounded-full blur-[120px] pointer-events-none z-10" />

          {/* Hero content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center w-full">
            <div className="inline-flex items-center gap-2 bg-sonic-lime/15 border border-sonic-lime/30 px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-sonic-lime animate-pulse" />
              <span className="text-xs font-black text-sonic-lime uppercase tracking-widest">Über Sonic</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              MARKEN IM HERZEN.<br />ERFOLG IM FOKUS.
            </h1>

            <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Unabhängige Marketing- und Sales-Agentur — von Konzeption bis Koordination, am POS, im Studio, auf Messen und Events. Seit 2007 mit vollem Einsatz für deine Marke.
            </p>

            <button
              onClick={scrollToContent}
              className="group inline-flex flex-col items-center gap-3 cursor-pointer"
            >
              <span className="text-white/50 text-xs font-black tracking-widest uppercase">Unsere Geschichte</span>
              <div className="w-10 h-10 border border-white/25 flex items-center justify-center group-hover:border-[#C8D400] transition-colors" style={{ borderRadius: 0 }}>
                <i className="ri-arrow-down-line text-white/50 group-hover:text-[#C8D400] transition-colors animate-bounce" />
              </div>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
            <i className="ri-arrow-down-line text-3xl text-[#C8D400]" />
          </div>
        </section>
      </div>

      {/* ── SECTIONS ── */}
      <div id="uber-uns">
        <StackedSectionReveal index={0} totalSections={5}>
          <OriginStory />
        </StackedSectionReveal>
      </div>

      <WoodenDivider />

      <div id="referenzen">
        <StackedSectionReveal index={1} totalSections={5}>
          <ValuesVisual />
        </StackedSectionReveal>
      </div>

      <WoodenDivider />

      <div id="innovation">
        <StackedSectionReveal index={2} totalSections={5}>
          <Timeline />
        </StackedSectionReveal>
      </div>

      <WoodenDivider />

      <div id="team">
        <StackedSectionReveal index={3} totalSections={6}>
          <LeadershipTeam />
        </StackedSectionReveal>
      </div>

      <WoodenDivider />

      <div id="management-voices">
        <StackedSectionReveal index={4} totalSections={6}>
          <ManagementVoices />
        </StackedSectionReveal>
      </div>

      <WoodenDivider />

      <div id="kontakt">
        <StackedSectionReveal index={5} totalSections={6}>
          <WhySonic />
        </StackedSectionReveal>
      </div>

      <WoodenDivider />
      </main>
    </div>
  );
}
