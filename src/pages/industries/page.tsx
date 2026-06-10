import { useRef } from 'react';
import WoodenDivider from '../../components/base/WoodenDivider';
import LeistungenPageNav from '../../components/feature/LeistungenPageNav';
import SectionReveal from '../../components/feature/SectionReveal';
import IndustriesHero from './components/IndustriesHero';
import IndustryGrid from './components/IndustryGrid';
import IndustryExpertise from './components/IndustryExpertise';
import IndustryCTA from './components/IndustryCTA';

const INDUSTRIES_NAV_ITEMS = [
  { id: 'industries', label: 'Branchen', icon: 'ri-building-line' },
  { id: 'expertise', label: 'Expertise', icon: 'ri-award-line' },
  { id: 'contact', label: 'Kontakt', icon: 'ri-mail-line' },
];

export default function IndustriesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <LeistungenPageNav items={INDUSTRIES_NAV_ITEMS} heroRef={heroRef} />
      <div ref={heroRef}>
        <IndustriesHero />
      </div>
      <WoodenDivider />
      <SectionReveal direction="up" intensity="subtle">
        <div id="industries">
          <IndustryGrid />
        </div>
      </SectionReveal>
      <WoodenDivider />
      <SectionReveal direction="up" intensity="subtle" delay={60}>
        <div id="expertise">
          <IndustryExpertise />
        </div>
      </SectionReveal>
      <WoodenDivider />
      <SectionReveal direction="up" intensity="medium">
        <IndustryCTA />
      </SectionReveal>
    </div>
  );
}