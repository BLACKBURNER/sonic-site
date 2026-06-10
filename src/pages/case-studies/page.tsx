import { useState, useEffect, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import WoodenDivider from '@/components/base/WoodenDivider';
import Lightbox, { LightboxItem } from '@/components/base/Lightbox';

/* ─────────────────────────────────────────
   LEISTUNGEN IM EINSATZ — split image + content panel
───────────────────────────────────────── */
function LeistungenImEinsatz({ modules, brand }: { modules: ServiceModule[]; brand: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const handleChange = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setActiveIdx(idx);
      setFade(true);
    }, 200);
  };

  const mod = modules[activeIdx];

  return (
    <div className="mb-14">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-8 bg-[#C8D400]"></div>
        <div>
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">Leistungen im Einsatz</p>
          <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-wide">{brand} — Was wir eingesetzt haben</h3>
        </div>
      </div>

      {/* Tab buttons */}
      <div
        className="flex gap-0 overflow-x-auto mb-0 border border-b-0 border-gray-200"
        style={{ scrollbarWidth: 'none' }}
        role="tablist"
        aria-label={`Leistungen im Einsatz — ${brand}`}
      >
        {modules.map((d, idx) => (
          <button
            key={idx}
            onClick={() => handleChange(idx)}
            role="tab"
            aria-selected={activeIdx === idx}
            aria-controls={`module-panel-${idx}`}
            id={`module-tab-${idx}`}
            className={`flex items-center gap-2 px-4 md:px-5 py-3 transition-all duration-200 cursor-pointer text-xs md:text-sm font-bold whitespace-nowrap flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] border-r border-gray-200 last:border-r-0 ${
              activeIdx === idx
                ? 'bg-[#1a1a1a] text-[#C8D400] border-b-2 border-b-[#C8D400]'
                : 'bg-white text-gray-500 hover:bg-[#f9f9f7] hover:text-[#1a1a1a]'
            }`}
            style={{ borderRadius: 0 }}
          >
            <span
              className={`inline-flex items-center justify-center w-5 h-5 text-[10px] font-black flex-shrink-0 ${
                activeIdx === idx ? 'bg-[#C8D400] text-[#1a1a1a]' : 'bg-gray-200 text-gray-500'
              }`}
              style={{ borderRadius: 0 }}
            >
              {d.num}
            </span>
            <span className="hidden sm:inline">{d.title}</span>
            <span className="sm:hidden">{d.num}</span>
          </button>
        ))}
      </div>

      {/* Split panel */}
      <div
        id={`module-panel-${activeIdx}`}
        role="tabpanel"
        aria-labelledby={`module-tab-${activeIdx}`}
        className="grid grid-cols-1 lg:grid-cols-5 border border-gray-200 overflow-hidden"
        style={{ borderRadius: 0, transition: 'opacity 0.2s ease', opacity: fade ? 1 : 0, minHeight: '380px' }}
      >
        {/* LEFT — image (3 cols) */}
        <div className="lg:col-span-3 relative overflow-hidden" style={{ minHeight: '280px' }}>
          <img
            src={mod.img}
            alt={`${mod.title} — ${brand}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Tag chips bottom-left */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 z-10">
            {mod.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-[#1a1a1a]/75 border border-white/20 text-white"
                style={{ borderRadius: 0 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — content panel (2 cols) */}
        <div className="lg:col-span-2 bg-[#1a1a1a] flex flex-col justify-between p-6 md:p-8">
          <div>
            {/* Module number + title */}
            <div className="flex items-start gap-3 mb-5">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#C8D400] mt-0.5"
                style={{ borderRadius: 0 }}
              >
                <span className="text-[#1a1a1a] font-black text-sm tabular-nums">{mod.num}</span>
              </div>
              <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-wide leading-snug">
                {mod.title}
              </h4>
            </div>

            {/* Lime divider */}
            <div className="w-10 h-0.5 bg-[#C8D400] mb-5"></div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              {mod.desc}
            </p>
          </div>

          {/* Dot navigator + counter */}
          <div className="flex items-center gap-2 mt-8">
            <div className="flex items-center gap-1.5 flex-1 flex-wrap">
              {modules.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChange(idx)}
                  role="tab"
                  aria-selected={activeIdx === idx}
                  aria-label={`Modul ${m.num}: ${m.title}`}
                  className={`transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8D400] ${
                    activeIdx === idx
                      ? 'w-7 h-2 bg-[#C8D400]'
                      : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                  }`}
                  style={{ borderRadius: 0 }}
                  title={m.title}
                />
              ))}
            </div>
            <span className="text-[11px] font-black text-white/35 uppercase tracking-widest tabular-nums flex-shrink-0">
              {activeIdx + 1}/{modules.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceModule {
  num: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

interface CaseStudy {
  id: string;
  slug: string;
  brand: string;
  woodIcon: string;
  metric: string;
  metricLabel: string;
  headline: string;
  subline: string;
  campaignType: string;
  since: string;
  quote: string;
  author: string;
  role: string;
  woodStats: { label: string; value: string; progress: number }[];
  woodPills: { label: string; value: string }[];
  monthlyTrend: number[];
  overview: string;
  modules: ServiceModule[];
  gallery: string[];
  bentoImages: { src: string; span: string; label: string }[];
  relatedStories: string[];
}

export default function CaseStudiesPage() {
  useSEO({
    title: 'Fallbeispiele | Sonic Group — Garmin, Philips, Groupe SEB, Avoury',
    description: 'Bewiesene Ergebnisse: Sonic Group Fallbeispiele — Garmin +116%, Philips +54%, Groupe SEB +130%, Avoury +1.187% Umsatzwachstum im DACH-Raum.',
    keywords: 'Sonic Group Fallbeispiele, Garmin Retail Activation, Philips TV Sound, Groupe SEB, Avoury, DACH Retail Ergebnisse',
    canonical: 'https://sonic-group.de/fallbeispiele',
    ogTitle: 'Fallbeispiele — Sonic Group DACH',
    ogDescription: 'Garmin +116%, Philips +54%, Groupe SEB +130%, Avoury +1.187% — echte Markenerfolge mit Sonic Group.',
  });

  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedStory, setExpandedStory] = useState<string | null>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'garmin',
      slug: 'garmin',
      brand: 'Garmin',
      woodIcon: 'https://cdn.brandfetch.io/garmin.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX',
      metric: '+116%',
      metricLabel: 'Umsatzwachstum 2021–2024',
      headline: 'Sportlich nach vorn',
      subline: '#beatyesterday: Seit 2021 — Retail-Partnerschaft mit Garmin im DACH-Raum',
      campaignType: 'Retail Activation & POS Full-Service',
      since: '2021',
      quote: 'Seit 2021 verbindet GARMIN und Sonic eine erfolgreiche Partnerschaft im Bereich Verkaufsunterstützung am POS. Im Jahr 2024 entwickelte und realisierte Sonic ein innovatives, interaktives POS-Möbel- und Servicekonzept für GARMIN. Mit hoher Qualität, Professionalität und einem ausgeprägten Markenverständnis überzeugt Sonic auf ganzer Linie. Besonders schätzen wir die partnerschaftliche Zusammenarbeit auf Augenhöhe – stets lösungsorientiert und engagiert. Wir empfehlen Sonic uneingeschränkt weiter und freuen uns auf die weitere gemeinsame Erfolgsgeschichte.',
      author: 'Dana Eichinger',
      role: 'Director Marketing DACH, Garmin Deutschland GmbH',
      woodStats: [
        { label: 'Umsatzwachstum 2021–2024', value: '+116%', progress: 87 },
        { label: 'Märkte', value: 'DE + AT + Sport', progress: 70 },
        { label: 'Partnerschaft seit', value: '2021', progress: 55 },
      ],
      woodPills: [
        { label: 'Start', value: '2021' },
        { label: 'Märkte', value: 'DE + AT' },
        { label: 'Module', value: '5' },
      ],
      monthlyTrend: [42, 48, 50, 55, 60, 62, 68, 72, 70, 78, 82, 88],
      overview: 'Seit 2021 unterstützen wir mit unseren Team Garmin im Retail dabei, Endkunden für Wearables zu begeistern und Verkäufe zu steigern: als erfolgreiche Partnerschaft mit gebündeltem Know-how, klarer Kommunikation und einem gemeinsamen Fokus auf Qualität und Innovation. Start: Promotions in Deutschland. Heute zusätzlich: Promotions Österreich und Sport, POS OneWorld, POS Service, Lager.',
      modules: [
        { num: '01', title: 'Promotions', desc: 'Beispiel: Aktivierung am POS per Rabatt-Aktion. Full-Service-Umsetzung durch unsere Field Force.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', tags: ['POS', 'Field Force', 'DACH'] },
        { num: '02', title: 'Aktionen', desc: 'Beispiel: Smoothie-Verkostungsaktion am POS als niederschwelliger Gesprächseinstieg.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg', tags: ['Live-Aktion', 'Verkostung', 'POS'] },
        { num: '03', title: 'POS-Möbel', desc: 'Eigens entwickeltes, modulares Präsentationsmöbel mit digitalen Elementen.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg', tags: ['Design', 'Modular', 'Digital'] },
        { num: '04', title: 'Training', desc: 'Wir schulen die Sales-Teams, bei uns in Krefeld und mobil in ganz Deutschland.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', tags: ['Schulung', 'Krefeld', 'Zertifizierung'] },
        { num: '05', title: 'Lager & Logistik', desc: 'POS-Ausstattung wird bei Sonic produziert, gelagert und versendet.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg', tags: ['Lager', 'Logistik', 'Versand'] },
      ],
      gallery: [
        'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png',
        'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
      ],
      bentoImages: [
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg', span: 'col-span-2 row-span-2', label: 'POS Activation' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg', span: 'col-span-1 row-span-1', label: 'POS-Möbel 2024' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', span: 'col-span-1 row-span-1', label: 'Training Krefeld' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', span: 'col-span-2 row-span-1', label: 'Lager & Logistik' },
      ],
      relatedStories: ['philips', 'groupe-seb'],
    },
    {
      id: 'groupe-seb',
      slug: 'groupe-seb',
      brand: 'Groupe SEB',
      woodIcon: 'https://cdn.brandfetch.io/groupeseb.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX',
      metric: '+130%',
      metricLabel: 'Umsatzwachstum pro Einsatztag 2019–2024',
      headline: 'Partnerschaft mit Performance',
      subline: 'Tefal, Rowenta, Krups, WMF — Multi-Brand-Aktivierung seit 2019',
      campaignType: 'Multi-Brand Field Force & Live-Video',
      since: '2019',
      quote: 'Hier finde ich, ohne großes Excel Kung-Fu, dass was ich für die Vorbereitung von Meetings benötige, das Ganze mit wenigen Klicks und mit Exportfunktion. Das SRT ist ein nützliches Tool und erleichtert unsere tägliche Arbeit.',
      author: 'Ramin Dirinpur',
      role: 'Sales Promotion & Sales Training Manager, Groupe SEB Deutschland GmbH',
      woodStats: [
        { label: 'Umsatzwachstum pro Einsatztag', value: '+130%', progress: 88 },
        { label: 'Laufzeit', value: '2019–2024', progress: 75 },
        { label: 'Marken', value: '4', progress: 60 },
      ],
      woodPills: [
        { label: 'Start', value: '2019' },
        { label: 'Marken', value: '4' },
        { label: 'Module', value: '6' },
      ],
      monthlyTrend: [38, 44, 48, 52, 58, 62, 66, 70, 74, 78, 84, 90],
      overview: 'Die Zusammenarbeit zwischen Sonic und Groupe SEB ist ein echtes Erfolgsmodell, seit 2019: Mit Vertrauen, Effizienz sowie Leidenschaft für starke Marken und zufriedene Kunden begeistern wir Kunden für Top-Marken wie Tefal, Rowenta, Krups und WMF. Ausdauer lohnt sich: Dank laufender Optimierung ist der Tagesumsatz der Promoter massiv gestiegen.',
      modules: [
        { num: '01', title: 'Live-Video-Beratung', desc: 'Aus den Sonic-Studios. Digital am POS und im Online-Shop. Für Rowenta, Tefal, Krups und WMF.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', tags: ['Live-Video', 'Studio', 'Digital'] },
        { num: '02', title: 'Aktionen', desc: 'Beispiel: verkaufsstarkes Live-Cooking am POS, betreut von unseren Foodies in der Field Force.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg', tags: ['Live-Cooking', 'POS', 'Field Force'] },
        { num: '03', title: 'Roadshow', desc: 'Die rollende mehrmarkenfähige Trainings-Roadshow mit Foodtruck-Funktion: Airstream-Trailer als Showmobil.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg', tags: ['Roadshow', 'Airstream', 'Mobile'] },
        { num: '04', title: 'Verkauf, POS-Pflege, Warenpräsentation', desc: 'Unsere Sales-Activation-Fachleute als Markenbotschafter, Verkäufer und Servicekräfte am POS.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg', tags: ['POS-Pflege', 'Präsentation', 'Verkauf'] },
        { num: '05', title: 'Sales-Training', desc: 'Wir schulen Verkäufer der Handelsketten und unsere Field Force an unserem Campus in Krefeld sowie per Video-Webinar.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', tags: ['Training', 'Krefeld', 'Zertifizierung'] },
        { num: '06', title: 'Reporting', desc: 'Tägliche Einsatzkosten und generierte Umsätze sind tag- und standortgenau auswertbar.', img: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', tags: ['SRT', 'Analytics', 'KPI'] },
      ],
      gallery: [
        'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
      ],
      bentoImages: [
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg', span: 'col-span-2 row-span-2', label: 'Live-Video Studio' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', span: 'col-span-1 row-span-1', label: 'Airstream Roadshow' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', span: 'col-span-1 row-span-1', label: 'Live-Cooking' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', span: 'col-span-2 row-span-1', label: 'Tägliches Reporting' },
      ],
      relatedStories: ['garmin', 'avoury'],
    },
    {
      id: 'philips',
      slug: 'philips',
      brand: 'Philips',
      woodIcon: 'https://cdn.brandfetch.io/philips.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX',
      metric: '+54%',
      metricLabel: 'Absatzwachstum pro Einsatztag 2021–2024',
      headline: 'Erfolgreichster europäischer Markt',
      subline: 'End-to-End von Schulung über Field Force bis Digital — seit 2021',
      campaignType: 'Field Force, Training & Digital',
      since: '2021',
      quote: 'Durch das SRT können wir live in unsere Projekte mit Sonic reinschauen und jederzeit sehen, wie unsere Erwartungen erfüllt werden.',
      author: 'Murat Yatkin',
      role: 'Managing Director DACH, Philips TV & Sound @TP Vision',
      woodStats: [
        { label: 'Absatzwachstum pro Einsatztag 2021–2024', value: '+54%', progress: 82 },
        { label: 'Marktposition Europa', value: '#1', progress: 95 },
        { label: 'Aktivierungsmodule', value: '6', progress: 90 },
      ],
      woodPills: [
        { label: 'Start', value: '2021' },
        { label: 'Markt', value: '#1 EU' },
        { label: 'Module', value: '6' },
      ],
      monthlyTrend: [48, 52, 55, 58, 60, 63, 65, 68, 70, 73, 76, 82],
      overview: 'Seit 2021 unterstützen wir Philips TV & Sound beim Verkaufserfolg, End-to-End von der Schulung von Handelsmitarbeitern über den Einsatz von Field Force bis zu digitalen Projekten und Saleskampagnen. Mittels ständig optimierter Strategien stieg der Geräteabsatz je Promotiontag deutlich an, für ein spürbares Absatzplus.',
      modules: [
        { num: '01', title: 'Kampagnen', desc: '(Online-)Gewinnspiele, Zugabe-Promotions, Cashback-Aktionen: komplett umgesetzt durch Sonic.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg', tags: ['Online', 'Cashback', 'Promotion'] },
        { num: '02', title: 'Promotion', desc: 'Beispiel: Saisonale Abverkaufspromotion am POS im Rahmen großer Fußballereignisse.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg', tags: ['POS', 'Seasonal', 'Football'] },
        { num: '03', title: '(Sales) Content Creation', desc: 'Beispiel: TVundSound.Academy, das ist (Live) Premium-Video-Schulungs-Infotainment für Mitarbeiter des Handels.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg', tags: ['Academy', 'Video', 'Retail-Training'] },
        { num: '04', title: 'Messen', desc: 'Messestände, durch uns konzipiert, gebaut, geliefert und bespielt. Im Full Service, eingebunden in die Markenwelt.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', tags: ['Messe', 'Full Service', 'Stand-Bau'] },
        { num: '05', title: 'Sales-Training', desc: 'Schulungen für Verkäufer der Handelsketten und unsere Field Force, bei uns und regional.', img: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', tags: ['Training', 'Regional', 'Zertifizierung'] },
        { num: '06', title: 'Digitaler Homeplaner', desc: 'Durch Sonic erstellt: Ein digitaler Online-3D-Raumplaner für ein Preview, wie das TV-Gerät zuhause aussehen wird.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', tags: ['Digital', '3D', 'UX'] },
      ],
      gallery: [
        'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
      ],
      bentoImages: [
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', span: 'col-span-2 row-span-2', label: 'POS Promotion' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', span: 'col-span-1 row-span-1', label: 'TVundSound Academy' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', span: 'col-span-1 row-span-1', label: 'Messen' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg', span: 'col-span-2 row-span-1', label: 'Digitaler Homeplaner' },
      ],
      relatedStories: ['garmin', 'avoury'],
    },
    {
      id: 'avoury',
      slug: 'avoury',
      brand: 'Avoury',
      woodIcon: 'https://readdy.ai/api/search-image?query=Avoury%20tea%20machine%20Melitta%20premium%20brand%20logo%20clean%20white%20background%20minimal%20modern%20branding&width=200&height=80&seq=avoury-logo-001&orientation=landscape',
      metric: '+1.187%',
      metricLabel: 'Umsatzwachstum pro Einsatztag 2021–2023',
      headline: 'Heißes Wachstum mit Tee',
      subline: 'Avoury One by Melitta — datenbasiertes Matching für maximalen Absatz',
      campaignType: 'Field Force, Recruiting & Datenoptimierung',
      since: '2021',
      quote: 'Dank datenbasierter Optimierungen und dem Sonic SRT konnten wir Geräteabsatz und Gesamtumsatz massiv steigern. Die Ergebnisse haben unsere Erwartungen weit übertroffen.',
      author: 'Projektteam Avoury by Melitta',
      role: 'In Zusammenarbeit mit der Sonic Group',
      woodStats: [
        { label: 'Umsatzwachstum pro Einsatztag 2021–2023', value: '+1.187%', progress: 99 },
        { label: 'Optimierungsmodule', value: '5', progress: 85 },
        { label: 'Partnerschaft seit', value: '2021', progress: 70 },
      ],
      woodPills: [
        { label: 'Start', value: '2021' },
        { label: 'Marke', value: 'Melitta' },
        { label: 'Module', value: '5' },
      ],
      monthlyTrend: [20, 30, 42, 55, 65, 72, 78, 84, 88, 92, 96, 99],
      overview: 'Seit der Einführung der Avoury One, einer Teemaschine von Melitta Single Portions, konnten erhebliche Wachstumsimpulse gesetzt werden. Die Schlüssel zum Erfolg: Das gewinnbringende Matching von Verkäufern, Einsatzorten und Einsatztagen, plus Cross-Selling. Dank datengestützter Optimierungen konnten Geräteabsatz und Gesamtumsatz massiv gesteigert werden.',
      modules: [
        { num: '01', title: 'Recruiting', desc: 'Zum Start: Zusammenstellung Field Force Team aus eigenem Pool plus aus Recruiting.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg', tags: ['Recruiting', 'Talentpool', 'Matching'] },
        { num: '02', title: 'Schulungen', desc: 'Vor den Einsätzen: Schulungen der Fachberater an unserem Campus in Krefeld.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg', tags: ['Campus Krefeld', 'Schulung', 'Zertifizierung'] },
        { num: '03', title: 'Sales Promotions', desc: 'Umsetzung des Field-Force-Einsatzes mit unseren Fachberatern.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', tags: ['POS', 'Fachberater', 'Sales'] },
        { num: '04', title: 'Reporting', desc: 'Dank Tracking und Logging aller Einsätze und Umsätze im Sonic Reporting Tool werden Erfolge und Potenziale sichtbar.', img: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', tags: ['SRT', 'Daten', 'KPI'] },
        { num: '05', title: 'Laufende Optimierungen', desc: 'Personalauswahl, Outlet- und Tagesauswahl, Einsatzplanung etc. wurden erfolgreich datenbasiert optimiert.', img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', tags: ['Optimierung', 'Datenbasiert', 'Matching'] },
      ],
      gallery: [
        'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
        'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
      ],
      bentoImages: [
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg', span: 'col-span-2 row-span-2', label: 'POS Demo' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png', span: 'col-span-1 row-span-1', label: 'Schulungen Krefeld' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg', span: 'col-span-1 row-span-1', label: 'Reporting & Daten' },
        { src: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg', span: 'col-span-2 row-span-1', label: 'Avoury One — Melitta' },
      ],
      relatedStories: ['groupe-seb', 'philips'],
    },
  ];

  // Manual navigation only — no auto-advance
  // Users control their own reading pace

  const handleBrandClick = (index: number) => {
    setCurrentSlide(index);
    setExpandedStory(null);
    const el = document.getElementById('case-studies-carousel');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleReadFullStory = (slug: string) => {
    const idx = caseStudies.findIndex((s) => s.slug === slug);
    if (idx !== -1) setCurrentSlide(idx);
    setExpandedStory(slug);
    setTimeout(() => {
      if (expandedRef.current) expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    setExpandedStory(null);
  };

  const handleCollapseStory = () => {
    setExpandedStory(null);
    const el = document.getElementById('case-studies-carousel');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[]>([]);

  // Wood card dimensions for wavy SVG border
  const carouselCardRef = useRef<HTMLDivElement>(null);
  const [cardDims, setCardDims] = useState({ width: 900, height: 400 });

  useEffect(() => {
    if (!carouselCardRef.current) return;
    const update = () => {
      if (carouselCardRef.current) {
        setCardDims({
          width: carouselCardRef.current.offsetWidth,
          height: carouselCardRef.current.offsetHeight,
        });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(carouselCardRef.current);
    return () => ro.disconnect();
  }, []);

  const generateWavyPath = (w: number, h: number, inset: number, amp: number, freq: number) => {
    const segsH = Math.max(Math.floor((w - 2 * inset) / 30), 14);
    const segsV = Math.max(Math.floor((h - 2 * inset) / 30), 10);
    let path = `M ${inset},${inset}`;
    for (let i = 1; i <= segsH; i++) {
      const x = inset + ((w - 2 * inset) * i / segsH);
      const wave = Math.sin(i * freq) * amp;
      const prevX = inset + ((w - 2 * inset) * (i - 1) / segsH);
      const cpWave = Math.sin((i - 0.5) * freq) * amp * 1.2;
      path += ` Q ${(prevX + x) / 2},${inset + cpWave} ${x},${inset + wave}`;
    }
    for (let i = 1; i <= segsV; i++) {
      const y = inset + ((h - 2 * inset) * i / segsV);
      const wave = Math.sin(i * freq + 1) * amp;
      const prevY = inset + ((h - 2 * inset) * (i - 1) / segsV);
      const cpWave = Math.sin((i - 0.5) * freq + 1) * amp * 1.2;
      path += ` Q ${w - inset + cpWave},${(prevY + y) / 2} ${w - inset + wave},${y}`;
    }
    for (let i = 1; i <= segsH; i++) {
      const x = w - inset - ((w - 2 * inset) * i / segsH);
      const wave = Math.sin(i * freq + 2) * amp;
      const prevX = w - inset - ((w - 2 * inset) * (i - 1) / segsH);
      const cpWave = Math.sin((i - 0.5) * freq + 2) * amp * 1.2;
      path += ` Q ${(prevX + x) / 2},${h - inset + cpWave} ${x},${h - inset + wave}`;
    }
    for (let i = 1; i <= segsV; i++) {
      const y = h - inset - ((h - 2 * inset) * i / segsV);
      const wave = Math.sin(i * freq + 3) * amp;
      const prevY = h - inset - ((h - 2 * inset) * (i - 1) / segsV);
      const cpWave = Math.sin((i - 0.5) * freq + 3) * amp * 1.2;
      path += ` Q ${inset + cpWave},${(prevY + y) / 2} ${inset + wave},${y}`;
    }
    path += ' Z';
    return path;
  };

  const openLightbox = (items: LightboxItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const current = caseStudies[currentSlide];
  const expanded = caseStudies.find((s) => s.id === expandedStory);

  return (
    <div className="min-h-screen bg-white">

      {/* Lightbox */}
      <Lightbox
        items={lightboxItems}
        activeIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxItems.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length)}
      />

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 'clamp(320px, 50vw, 440px)' }}>
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/80 to-[#1a1a1a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center h-full" style={{ minHeight: 'clamp(320px, 50vw, 440px)', paddingTop: '5rem', paddingBottom: '3rem' }}>
          <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 flex items-center justify-center bg-[#C8D400]/20">
              <i className="ri-trophy-line text-xl text-[#C8D400]"></i>
            </div>
            <span className="text-[#C8D400] text-xs font-black uppercase tracking-widest">Fallbeispiele</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 md:mb-5">
            ERFOLGS<span className="text-[#C8D400]">GESCHICHTEN</span>
          </h1>
          <p className="text-2xl md:text-3xl font-black text-white/90 mb-3">Sonic performt</p>
        </div>
      </section>


      <WoodenDivider />

      {/* ── INTRO TEXT BLOCK ── */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-[#C8D400]"></div>
                <span className="text-xs font-black uppercase tracking-widest text-[#C8D400]">Performance Marketing für Retail</span>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                Das bedeutet für uns, gemeinsam mit und für unsere Kunden messbare Erfolge zu erzielen. Da unsere Arbeitsweise datengetrieben ist und dadurch Optimierungen ermöglicht, werden die Erfolge in jedem weiteren Jahr der Zusammenarbeit noch größer.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '>500', label: 'Projekte', icon: 'ri-folder-chart-line' },
                { value: '>1,35 Mio.', label: 'Einsätze', icon: 'ri-user-star-line' },
                { value: '>100.000', label: 'POS-Umsetzungen', icon: 'ri-store-2-line' },
                { value: 'Seit 2007', label: 'Erfahrung', icon: 'ri-award-line' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#f9f9f7] p-5 border border-gray-100" style={{ borderRadius: 0 }}>
                  <div className="w-9 h-9 flex items-center justify-center bg-[#C8D400]/15 mb-3">
                    <i className={`${stat.icon} text-xl text-[#C8D400]`}></i>
                  </div>
                  <div className="text-xl font-black text-[#1a1a1a] font-sans tabular-nums mb-0.5">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* ── BRAND TABS ── */}
      <section className="py-5 md:py-8 bg-[#111] border-b border-[#C8D400]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 flex-nowrap md:flex-wrap overflow-x-auto pb-2 md:pb-0 scrollbar-hide" role="tablist" aria-label="Fallbeispiele nach Marke">
            {caseStudies.map((study, index) => (
              <button
                key={study.brand}
                onClick={() => handleBrandClick(index)}
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`${study.brand} — ${study.metric} ${study.metricLabel}`}
                className={`px-5 md:px-8 py-2.5 font-black uppercase tracking-wider text-xs md:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0 truncate max-w-[200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                  currentSlide === index
                    ? 'bg-[#C8D400] text-white'
                    : 'bg-white/5 text-white/70 border border-white/15 hover:border-[#C8D400]/60 hover:text-white'
                }`}
                style={{ borderRadius: 0 }}
                title={study.brand}
              >
                {study.brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── WOODEN CAROUSEL ── */}
      <section id="case-studies-carousel" className="relative py-8 md:py-12 overflow-hidden bg-white">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C8D400]/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#C8D400]/7 blur-3xl pointer-events-none"></div>
        <div className="relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
          <div
            ref={carouselCardRef}
            className="w-full relative overflow-hidden"
            style={{ borderRadius: 0, boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}
          >
            {/* Wood texture background */}
            <div className="absolute inset-0">
              <img
                src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=1920&height=700&seq=case-study-wood-bg-v1&orientation=landscape"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Wavy lime SVG border — same as Lösungen WoodCard */}
            <svg
              className="absolute inset-0 pointer-events-none overflow-visible"
              viewBox={`0 0 ${cardDims.width} ${cardDims.height}`}
              width={cardDims.width}
              height={cardDims.height}
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="wb-case" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8D400" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#a8b300" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#C8D400" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <path
                d={generateWavyPath(cardDims.width, cardDims.height, 2, 3.5, 0.42)}
                fill="none"
                stroke="url(#wb-case)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 10px rgba(200,212,0,0.55)) drop-shadow(0 0 3px rgba(200,212,0,0.30))' }}
              />
            </svg>

            <div className="relative p-5 md:p-10" style={{ zIndex: 2 }}>
              <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 items-start gap-6">

                {/* LEFT — Brand + headline + metric */}
                <div className="w-full lg:col-span-3 flex flex-col gap-4 md:gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden border-2 border-[#C8D400]/50 flex-shrink-0" style={{ borderRadius: 0 }}>
                      <img src={current.woodIcon} alt={`${current.brand} Logo`} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl md:text-2xl font-black text-white leading-tight">{current.brand}</h2>
                      <p className="text-[#C8D400] font-bold text-xs uppercase tracking-wide">{current.campaignType}</p>
                    </div>
                  </div>

                  <div>
                    <div className="text-5xl md:text-6xl font-black text-[#C8D400] font-sans tabular-nums mb-1 leading-none drop-shadow-lg">{current.metric}</div>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-wide">{current.metricLabel}</p>
                  </div>

                  <div>
                    <p className="text-white text-base font-black leading-snug mb-1">{current.headline}</p>
                    <p className="text-white/60 text-xs leading-relaxed">{current.subline}</p>
                  </div>

                  {/* Overview snippet instead of quote */}
                  <div className="hidden md:block bg-white/10 backdrop-blur-sm p-4 border border-white/15" style={{ borderRadius: 0 }}>
                    <p className="text-white/80 text-xs leading-relaxed font-medium">{current.overview.slice(0, 160)}…</p>
                  </div>
                </div>

                {/* MID — Stats bars + pills + CTA */}
                <div className="w-full lg:col-span-5 flex flex-col gap-4">
                  <div className="space-y-3">
                    {current.woodStats.map((stat, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-3 border border-white/15" style={{ borderRadius: 0 }}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/75 text-xs font-bold">{stat.label}</span>
                          <span className="text-white font-sans tabular-nums font-black text-sm">{stat.value}</span>
                        </div>
                        <div className="h-2 bg-white/20 overflow-hidden" style={{ borderRadius: 0 }}>
                          <div className="h-full bg-gradient-to-r from-[#C8D400] to-[#a8b300] transition-all duration-1000" style={{ width: `${stat.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {current.woodPills.map((pill, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm p-3 border border-white/15 text-center" style={{ borderRadius: 0 }}>
                        <div className="text-[#C8D400] font-sans tabular-nums font-black text-base mb-0.5">{pill.value}</div>
                        <div className="text-white/65 text-xs font-bold">{pill.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-1">
                    <button
                      onClick={() => handleReadFullStory(current.slug)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#C8D400] text-white font-black uppercase tracking-wider hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 shadow-xl cursor-pointer whitespace-nowrap text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      style={{ borderRadius: 0 }}
                    >
                      <span className="hidden sm:inline">Vollständige Story</span>
                      <span className="sm:hidden">Full Story</span>
                      <i className="ri-arrow-down-line text-sm animate-bounce"></i>
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 flex items-center justify-center bg-white/20 border border-white/30 hover:bg-white/30 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      style={{ borderRadius: 0 }}
                      aria-label="Nächste Erfolgsgeschichte"
                    >
                      <i className="ri-arrow-right-line text-lg text-white"></i>
                    </button>
                  </div>
                </div>

                {/* RIGHT — Trend chart + nav dots */}
                <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/15" style={{ borderRadius: 0 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-white/80 text-xs font-black uppercase tracking-wide">Performance-Trend</span>
                      <span className="text-sonic-lime text-xs font-sans tabular-nums font-black bg-white/10 px-2 py-0.5">{current.since} →</span>
                    </div>
                    <div className="h-28 flex items-end gap-0.5">
                      {current.monthlyTrend.map((h, i) => (
                        <div key={i} className="flex-1">
                          <div className="w-full bg-gradient-to-t from-white/20 to-[#C8D400] transition-all duration-700" style={{ height: `${(h / 100) * 112}px` }}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                        <span key={i} className="text-white/40 flex-1 text-center text-xs">{m}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/15 text-center" style={{ borderRadius: 0 }}>
                      <div className="w-9 h-9 flex items-center justify-center bg-[#C8D400]/20 mx-auto mb-2">
                        <i className="ri-medal-line text-xl text-[#C8D400]"></i>
                      </div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-wide leading-tight">{current.campaignType}</p>
                    </div>
                    <div className="bg-[#C8D400]/20 backdrop-blur-sm p-4 border border-[#C8D400]/30 text-center" style={{ borderRadius: 0 }}>
                      <div className="text-sonic-lime font-sans tabular-nums font-black text-2xl mb-1">{current.metric}</div>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-wide">Seit {current.since}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Story-Navigation">
                    {caseStudies.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setCurrentSlide(i); setExpandedStory(null); }}
                        role="tab"
                        aria-selected={currentSlide === i}
                        aria-label={`${caseStudies[i].brand} anzeigen`}
                        className={`h-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${currentSlide === i ? 'bg-[#C8D400] w-6' : 'bg-white/30 w-2 hover:bg-[#C8D400]/60'}`}
                        style={{ borderRadius: 0 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile nav dots */}
                <div className="flex lg:hidden items-center justify-center gap-2 w-full" role="tablist" aria-label="Story-Navigation">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentSlide(i); setExpandedStory(null); }}
                      role="tab"
                      aria-selected={currentSlide === i}
                      aria-label={`${caseStudies[i].brand} anzeigen`}
                      className={`h-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${currentSlide === i ? 'bg-[#C8D400] w-6' : 'bg-white/30 w-2'}`}
                      style={{ borderRadius: 0 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPANDED STORY ── */}
      {expanded && (
        <section
          ref={expandedRef}
          className="bg-white"
          style={{ animation: 'expandIn 0.4s ease-out' }}
        >
          {/* Dark hero */}
          <div className="relative bg-[#1a1a1a] overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              <img
                src="https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-10 bg-[#C8D400]"></div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                  {expanded.brand} <span className="text-[#C8D400]">Fallstudie</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-white/80 font-bold mb-6 max-w-2xl">{expanded.headline}</p>
              <div className="max-w-3xl">
                <p className="text-gray-400 leading-relaxed text-lg">{expanded.overview}</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">

            {/* ── LEISTUNGEN IM EINSATZ ── */}
            <LeistungenImEinsatz modules={expanded.modules} brand={expanded.brand} />

            {/* Bento Grid */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#C8D400]"></div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">Bildergalerie</p>
                  <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-wide">{expanded.brand} — Impressionen</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14" style={{ minHeight: '160px' }}>
              {expanded.bentoImages.map((item, i) => {
                  const bentoLightboxItems: LightboxItem[] = expanded.bentoImages.map((b) => ({
                    image: b.src,
                    title: b.label,
                    category: expanded.brand,
                    description: `${b.label} — ${expanded.brand} Fallbeispiel`,
                  }));
                  return (
                    <div
                      key={i}
                      className={`relative overflow-hidden group cursor-pointer ${item.span}`}
                      style={{ borderRadius: 0 }}
                      onClick={() => openLightbox(bentoLightboxItems, i)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.label} vergrößern — ${expanded.brand} Fallbeispiel`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(bentoLightboxItems, i);
                        }
                      }}
                    >
                      <img
                        src={item.src}
                        alt={`${item.label} — ${expanded.brand} Fallbeispiel`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400"></div>
                      {/* Expand icon on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/90 backdrop-blur-sm">
                          <i className="ri-zoom-in-line text-white text-lg"></i>
                        </div>
                      </div>
                      {/* Label chip */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-[#C8D400] text-white text-xs font-black px-3 py-1 uppercase tracking-wide">{item.label}</span>
                      </div>
                      {/* Lime corner accent */}
                      <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#C8D400] group-hover:w-12 transition-all duration-500"></div>
                      <div className="absolute top-0 left-0 w-0.5 h-0 bg-[#C8D400] group-hover:h-12 transition-all duration-500"></div>
                    </div>
                  );
                })}
              </div>
            {/* The wrapper div continues below to include related stories and CTA */}

            {/* Related stories */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-[#C8D400]"></div>
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-wide">Weitere Erfolgsgeschichten</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {expanded.relatedStories.map((relSlug) => {
                  const rel = caseStudies.find((s) => s.id === relSlug);
                  if (!rel) return null;
                  return (
                    <div
                      key={relSlug}
                      onClick={() => handleReadFullStory(relSlug)}
                      className="flex items-center gap-5 p-5 border-2 border-gray-100 hover:border-[#C8D400] transition-all duration-300 cursor-pointer group bg-white hover:bg-[#fafef0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
                      style={{ borderRadius: 0 }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleReadFullStory(relSlug); }}
                    >
                      <div className="flex-shrink-0 text-center">
                        <div className="text-2xl font-black text-[#C8D400] font-sans tabular-nums">{rel.metric}</div>
                        <div className="text-xs text-gray-500 font-bold mt-0.5 max-w-20 leading-tight">{rel.metricLabel}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-[#1a1a1a] group-hover:text-[#C8D400] transition-colors text-base mb-1">{rel.brand}</h4>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-2">{rel.campaignType}</p>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{rel.headline} — {rel.subline}</p>
                      </div>
                      <i className="ri-arrow-right-line text-[#C8D400] text-xl group-hover:translate-x-1 transition-transform flex-shrink-0"></i>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inline CTA — convert impressed readers */}
            <div className="mb-10 bg-[#1a1a1a] border-2 border-[#C8D400]/30 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-[#C8D400] text-xs font-black uppercase tracking-widest mb-2">{expanded.metric} {expanded.metricLabel}</p>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                    Auch für Ihre Marke möglich?
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Lassen Sie uns besprechen, wie Sonic ähnliche Ergebnisse für Ihr Unternehmen erzielen kann.
                  </p>
                </div>
                <a
                  href="https://calendly.com/sonic-group/beratungsgespraech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#C8D400] text-white font-black uppercase tracking-wider hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-calendar-line text-base"></i>
                  Beratungsgespräch buchen
                </a>
              </div>
            </div>

            {/* Next story CTA */}
            <div className="text-center pt-6 border-t border-gray-100">
              <button
                onClick={() => {
                  const nextIdx = (caseStudies.findIndex((s) => s.id === expanded.id) + 1) % caseStudies.length;
                  handleReadFullStory(caseStudies[nextIdx].slug);
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-black uppercase tracking-wider hover:bg-[#C8D400] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
                style={{ borderRadius: 0 }}
              >
                Nächste Story
                <i className="ri-arrow-right-line text-lg"></i>
              </button>
            </div>
          </div>
        </section>
      )}

      <WoodenDivider />

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-8 flex items-center justify-center bg-[#C8D400]/15">
              <i className="ri-rocket-line text-xl text-[#C8D400]"></i>
            </div>
            <span className="text-[#C8D400] text-xs font-black uppercase tracking-widest">Lass uns sprechen</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#1a1a1a] mb-4">DEINE MARKE. UNSER EINSATZ.</h2>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Wir bringen deine Marke dort zum Leuchten, wo die Kaufentscheidung fällt — am POS, auf Events und digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 300); }}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8D400] text-white font-black uppercase tracking-wider hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 shadow-xl cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
              style={{ borderRadius: 0 }}
            >
              Beratungsgespräch buchen
            </button>
            <button
              onClick={() => navigate('/leistungen')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#1a1a1a] font-black uppercase tracking-wider border-2 border-[#1a1a1a] hover:border-[#C8D400] hover:bg-[#C8D400]/10 transition-all duration-300 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
              style={{ borderRadius: 0 }}
            >
              Leistungen ansehen
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes expandIn { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .group:hover .group-hover\\:scale-108 { transform: scale(1.08); }
      `}</style>
    </div>
  );
}
