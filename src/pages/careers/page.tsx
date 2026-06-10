import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import { useSEO } from '@/hooks/useSEO';
import WoodenDivider from '../../components/base/WoodenDivider';
import ModernDNA from '../home/components/ModernDNA';
import KarriereHero from './components/KarriereHero';
import StellenangeboteSection from './components/StellenangeboteSection';
import KarriereCulture from './components/KarriereCulture';
import KarrierepfadeSection from './components/KarrierepfadeSection';
import GeschichtenSection from './components/GeschichtenSection';
import SonicFamily from './components/SonicFamily';
import SonicTeamEvents from './components/SonicTeamEvents';
import KarriereInPageNav from './components/KarriereInPageNav';


export default function CareersGatewayPage() {
  useSEO({
    title: 'Karriere | Sonic Group — Jobs in Sales & Field Promotion DACH',
    description: 'Karriere bei Sonic Group: Interne Sales-Positionen in Krefeld oder flexible Field-Promotion-Jobs im DACH-Raum. Menschen mit Energie gesucht. Jetzt bewerben.',
    keywords: 'Karriere Sonic Group, Jobs Retail Promotion, Sales Jobs Deutschland, Field Promoter Jobs DACH, Stellenangebote Krefeld',
    canonical: 'https://sonic-group.de/careers',
    ogTitle: 'Karriere bei Sonic Group — Menschen mit Energie gesucht',
    ogDescription: 'Zeige was du kannst. Interne Sales-Karriere am Campus Krefeld oder flexibler Field-Einsatz im DACH-Raum.',
  });

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">

      {/* ── In-Page Navigation ── */}
      <KarriereInPageNav heroRef={heroRef} />

      {/* ── Hero ── */}
      <div ref={heroRef}>
        <KarriereHero />
      </div>

      <WoodenDivider />

      {/* ── AKTUELLE STELLENANGEBOTE — immediately after hero ── */}
      <StellenangeboteSection />

      <WoodenDivider />

      {/* ── Darum Sonic + Ausgezeichnet + Werte ── */}
      <KarriereCulture />

      <WoodenDivider />

      {/* ── DIE SONIC DNA ── */}
      <section id="sonic-dna">
        <ModernDNA />
      </section>

      <WoodenDivider />

      {/* ── KARRIEREPFADE ── */}
      <KarrierepfadeSection />

      <WoodenDivider />

      {/* ── GESCHICHTEN — Der Sonic Spirit ── */}
      <GeschichtenSection />

      <WoodenDivider />

      {/* ── SONIC FAMILY ── */}
      <section id="sonic-family">
        <SonicFamily />
      </section>

      <WoodenDivider />

      {/* ── SONIC TEAM EVENTS ── */}
      <div id="sonic-events">
        <SonicTeamEvents />
      </div>

      <WoodenDivider />

      {/* ── CAMPUS TOUR ── */}
      <section id="campus" className="py-12 md:py-16 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">

          <div className="mb-7">
            <SectionBadge text="Unser Campus" variant="dark" className="mb-3" />
            <h2 className="text-2xl md:text-3xl font-black text-[#111] mb-1.5 leading-tight">
              BÜRO ERKUNDEN
            </h2>
            <p className="text-xs text-gray-500 max-w-md">
              360°-Rundgang durch unseren Hauptsitz in Krefeld — Campus Fichtenhain 46.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/10 hover:border-[#C8D400]/40 transition-colors duration-300" style={{ borderRadius: 0 }}>
            <div className="relative w-full" style={{ paddingBottom: '50%' }}>
              <iframe
                src="https://my.matterport.com/show/?m=NUpWzUwWfMQ"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                title="Sonic Office Virtual Tour"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { icon: 'ri-drag-move-line', label: 'Klicken & Ziehen zum Umsehen' },
              { icon: 'ri-walk-line', label: 'Kreise klicken zum Bewegen' },
              { icon: 'ri-fullscreen-line', label: 'Vollbild für beste Erfahrung' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200" style={{ borderRadius: 0 }}>
                <i className={`${item.icon} text-sm text-[#C8D400]`} />
                <span className="text-xs font-bold text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 border border-gray-200" style={{ borderRadius: 0 }}>
              <i className="ri-map-pin-line text-lg text-[#C8D400]" />
              <div>
                <p className="font-black text-sm text-[#111]">Campus Fichtenhain 46</p>
                <p className="text-xs text-gray-400">47807 Krefeld, Deutschland</p>
              </div>
              <a
                href="https://maps.google.com/?q=Campus+Fichtenhain+46,+47807+Krefeld"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-4 py-2 bg-[#C8D400] text-[#111] text-xs font-black hover:bg-white transition-all whitespace-nowrap cursor-pointer"
                style={{ borderRadius: 0 }}
              >
                Route planen
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>

    </div>
  );
}
