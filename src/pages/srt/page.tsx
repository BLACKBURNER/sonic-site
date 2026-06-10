import { useSEO } from '@/hooks/useSEO';
import { useRef } from 'react';
import SRTHero from './components/SRTHero';
import TheProblem from './components/TheProblem';
import Features from './components/Features';
import VideoShowcase from './components/VideoShowcase';
import FunctionalityOverview from './components/FunctionalityOverview';
import EmployeeApp from './components/EmployeeApp';
import DataPaths from './components/DataPaths';
import Zusammenarbeit from './components/Zusammenarbeit';
import Proof from './components/Proof';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import GetAccess from './components/GetAccess';
import WoodenDivider from '../../components/base/WoodenDivider';
import Navigation from '../../components/feature/Navigation';
import LeistungenPageNav from '../../components/feature/LeistungenPageNav';

const NAV_ITEMS = [
  { id: 'das-problem', label: 'Das Problem', icon: 'ri-error-warning-line' },
  { id: 'features', label: 'All-in-Software', icon: 'ri-apps-line' },
  { id: 'srt-in-aktion', label: 'In Aktion', icon: 'ri-play-circle-line' },
  { id: 'funktionsumfang', label: 'Funktionsumfang', icon: 'ri-list-check-2' },
  { id: 'team-app', label: 'Team-App', icon: 'ri-smartphone-line' },
  { id: 'zusammenarbeit', label: 'Zusammenarbeit', icon: 'ri-git-merge-line' },
  { id: 'datenfluss', label: 'Datenfluss', icon: 'ri-flow-chart' },
  { id: 'branchen', label: 'Branchen', icon: 'ri-building-line' },
  { id: 'kundenstimmen', label: 'Kundenstimmen', icon: 'ri-chat-quote-line' },
  { id: 'preise', label: 'Preise', icon: 'ri-price-tag-3-line' },
  { id: 'get-access', label: 'Zugang', icon: 'ri-key-line' },
];

export default function SRTPage() {
  useSEO({
    title: 'SRT — Sonic Reporting Tool | Echtzeit-Retail-Software für Field Force DACH',
    description: 'Das Sonic Reporting Tool (SRT): Echtzeit-Dashboards, GPS-Tracking, Forecasting und Live-KPIs für Field Force und Retail Activation im DACH-Raum. Jetzt Zugang anfragen.',
    keywords: 'Sonic Reporting Tool, SRT Software, Field Force Tracking, Retail Echtzeit Dashboard, Promoter Software',
    canonical: 'https://sonic-group.de/srt',
    ogTitle: 'SRT — Sonic Reporting Tool für Retail Activation',
    ogDescription: 'Echtzeit-Dashboards, GPS-Tracking & Forecasting für Field Force im DACH-Raum.',
  });

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white">
      <Navigation />
      <LeistungenPageNav items={NAV_ITEMS} heroRef={heroRef} />

      {/* Hero */}
      <div ref={heroRef} id="overview">
        <SRTHero onScrollToFeatures={() => {
          const el = document.getElementById('features');
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
        }} />
      </div>

      <WoodenDivider />

      {/* Problem — sets context before solution */}
      <div id="das-problem">
        <TheProblem />
      </div>

      <WoodenDivider />

      {/* Solution: features */}
      <div id="features">
        <Features />
      </div>

      <WoodenDivider />

      {/* See it in action */}
      <div id="srt-in-aktion">
        <VideoShowcase />
      </div>

      <WoodenDivider />

      {/* Full function overview */}
      <div id="funktionsumfang">
        <FunctionalityOverview />
      </div>

      <WoodenDivider />

      {/* Team / employee app */}
      <div id="team-app">
        <EmployeeApp />
      </div>

      <WoodenDivider />

      {/* 6-step collaboration process */}
      <div id="zusammenarbeit">
        <Zusammenarbeit />
      </div>

      <WoodenDivider />

      {/* Interactive data paths — the SRT data flow diagram */}
      <div id="datenfluss">
        <DataPaths />
      </div>

      <WoodenDivider />

      {/* Industry fit selector */}
      <div id="branchen">
        <Industries />
      </div>

      <WoodenDivider />

      {/* Social proof */}
      <div id="kundenstimmen">
        <Proof />
      </div>

      <WoodenDivider />

      {/* Pricing */}
      <div id="preise">
        <Pricing />
      </div>

      <WoodenDivider />

      {/* Access / contact */}
      <div id="get-access">
        <GetAccess />
      </div>
    </div>
  );
}