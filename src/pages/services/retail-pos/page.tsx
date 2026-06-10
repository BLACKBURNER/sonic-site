import { useEffect, useRef } from 'react';
import RetailPOSHero from './components/RetailPOSHero';
import WhatWeDeliver from './components/WhatWeDeliver';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import Gallery from './components/Gallery';
import BookConsultation from './components/BookConsultation';
import ContactSection from './components/ContactSection';
import WoodenDivider from '../../../components/base/WoodenDivider';
import LeistungenPageNav from '../../../components/feature/LeistungenPageNav';

const NAV_ITEMS = [
  { id: 'what-we-deliver', label: 'Was wir liefern', icon: 'ri-service-line' },
  { id: 'how-it-works', label: 'Ablauf', icon: 'ri-settings-3-line' },
  { id: 'case-studies', label: 'Referenzen', icon: 'ri-file-list-3-line' },
  { id: 'gallery', label: 'Galerie', icon: 'ri-gallery-line' },
  { id: 'book', label: 'Beratung', icon: 'ri-calendar-line' },
  { id: 'contact', label: 'Kontakt', icon: 'ri-mail-line' },
];

export default function RetailPOSPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <div id="hero" ref={heroRef}>
        <RetailPOSHero />
      </div>

      <LeistungenPageNav items={NAV_ITEMS} heroRef={heroRef} />

      <WoodenDivider />

      <div id="what-we-deliver">
        <WhatWeDeliver />
      </div>
      <WoodenDivider />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <WoodenDivider />
      <div id="case-studies">
        <CaseStudies />
      </div>
      <WoodenDivider />
      <div id="gallery">
        <Gallery />
      </div>
      <WoodenDivider />
      <div id="book">
        <BookConsultation />
      </div>
      <WoodenDivider />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
