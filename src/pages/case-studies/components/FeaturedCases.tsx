import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const highlights = [
  { icon: 'ri-bar-chart-2-line', number: '01', title: 'Datenbasierte Optimierung', desc: 'Jede Kampagne wird durch Echtzeit-KPI gesteuert — Tagesumsätze, Outlet-Matching, Personalwahl.' },
  { icon: 'ri-team-line', number: '02', title: 'Eigene Field Force', desc: 'Über 2.000 geschulte Promoter aus unserem Talentpool — sofort verfügbar im gesamten DACH-Raum.' },
  { icon: 'ri-trophy-line', number: '03', title: 'Bewiesene Ergebnisse', desc: 'Über 500 Projekte, 1,35 Mio. Einsätze, 100.000+ POS-Umsetzungen — mit dokumentierten Wachstumskurven.' },
];

function HighlightCard({ item }: { item: typeof highlights[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden cursor-default transition-all duration-500"
      style={{
        borderRadius: 0,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        background: isHovered ? 'linear-gradient(145deg, #1a1a1a 0%, #111 100%)' : '#ffffff',
        boxShadow: isHovered
          ? '0 24px 50px rgba(0,0,0,0.18), 0 0 0 1px rgba(200,212,0,0.3)'
          : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 right-0 transition-all duration-500" style={{ height: isHovered ? '3px' : '2px', background: isHovered ? '#C8D400' : 'rgba(200,212,0,0.2)', boxShadow: isHovered ? '0 0 16px rgba(200,212,0,0.5)' : 'none' }} />
      <div className="absolute left-0 top-3 bottom-3 w-0.5 transition-all duration-500" style={{ background: isHovered ? '#C8D400' : 'transparent' }} />
      <div className={`absolute top-3 left-3 w-4 h-4 border-t border-l transition-all duration-300 ${isHovered ? 'opacity-100 border-[#C8D400]/50' : 'opacity-0 border-[#C8D400]'}`} />
      <div className={`absolute top-3 right-3 w-4 h-4 border-t border-r transition-all duration-300 ${isHovered ? 'opacity-100 border-[#C8D400]/50' : 'opacity-0 border-[#C8D400]'}`} />
      <div className={`absolute bottom-3 left-3 w-4 h-4 border-b border-l transition-all duration-300 ${isHovered ? 'opacity-100 border-[#C8D400]/50' : 'opacity-0 border-[#C8D400]'}`} />
      <div className={`absolute bottom-3 right-3 w-4 h-4 border-b border-r transition-all duration-300 ${isHovered ? 'opacity-100 border-[#C8D400]/50' : 'opacity-0 border-[#C8D400]'}`} />
      <div className="absolute bottom-4 right-5 font-black leading-none select-none pointer-events-none transition-all duration-500" style={{ fontSize: '4rem', opacity: 0.035, color: isHovered ? '#C8D400' : '#000', letterSpacing: '-0.04em' }}>{item.number}</div>
      <div className="p-8 relative z-10">
        <div className="w-13 h-13 flex items-center justify-center mb-5 transition-all duration-500" style={{ width: '52px', height: '52px', background: isHovered ? 'rgba(200,212,0,0.15)' : '#f5f5f0', boxShadow: isHovered ? '0 4px 16px rgba(200,212,0,0.2)' : 'inset 0 1px 0 rgba(255,255,255,0.8)' }}>
          <i className={`${item.icon} text-xl transition-colors duration-500`} style={{ color: '#C8D400' }}></i>
        </div>
        <h4 className="text-sm font-black mb-3 uppercase tracking-wide transition-colors duration-500" style={{ color: isHovered ? '#fff' : '#111' }}>{item.title}</h4>
        <div className="h-px mb-3 transition-all duration-500" style={{ background: isHovered ? 'rgba(200,212,0,0.15)' : 'rgba(0,0,0,0.07)' }} />
        <p className="text-sm leading-relaxed transition-colors duration-500" style={{ color: isHovered ? 'rgba(255,255,255,0.65)' : '#6B7280' }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function FeaturedCases() {
  const [activeCase, setActiveCase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cases = [
    {
      id: 'garmin',
      brand: 'Garmin',
      category: 'Retail Activation & POS Full-Service',
      since: '2021',
      challenge: 'Garmin benötigte eine starke Retail-Präsenz im DACH-Raum, um Wearables und GPS-Produkte erlebbar zu machen und Endkunden direkt am POS für die Marke zu begeistern.',
      solution: 'Sonic übernahm Full-Service-Promotions in Deutschland und Österreich, entwickelte interaktive POS-Möbel, schult Verkäufer-Teams in Krefeld und liefert komplette Lager- und Logistikleistungen.',
      results: [
        { label: 'Umsatzwachstum 2021–2024', value: '+116%' },
        { label: 'Märkte', value: 'DE + AT' },
        { label: 'Module', value: '5' },
      ],
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
      testimonial: 'Seit 2021 verbindet GARMIN und Sonic eine erfolgreiche Partnerschaft im Bereich Verkaufsunterstützung am POS. Besonders schätzen wir die partnerschaftliche Zusammenarbeit auf Augenhöhe — stets lösungsorientiert und engagiert.',
      author: 'Dana Eichinger',
      authorRole: 'Director Marketing DACH, Garmin Deutschland GmbH',
    },
    {
      id: 'groupe-seb',
      brand: 'Groupe SEB',
      category: 'Multi-Brand Field Force & Live-Video',
      since: '2019',
      challenge: 'Für vier Topmarken (Tefal, Rowenta, Krups, WMF) waren gleichzeitig Effizienz, Markenseparation und anhaltend hohe Abverkaufsleistung gefragt — mit klarer Datentransparenz.',
      solution: 'Sonic setzt auf Live-Video-Beratung aus dem eigenen Studio, Live-Cooking am POS, eine mehrmarkenfähige Airstream-Roadshow sowie tagesgenaues Reporting über das SRT-Tool.',
      results: [
        { label: 'Umsatzwachstum pro Einsatztag', value: '+130%' },
        { label: 'Marken', value: '4' },
        { label: 'Module', value: '6' },
      ],
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/9-1-1024x510.jpg',
      testimonial: 'Hier finde ich, ohne großes Excel Kung-Fu, das was ich für die Vorbereitung von Meetings benötige — mit wenigen Klicks und Exportfunktion. Das SRT ist ein nützliches Tool und erleichtert unsere tägliche Arbeit.',
      author: 'Ramin Dirinpur',
      authorRole: 'Sales Promotion & Sales Training Manager, Groupe SEB Deutschland GmbH',
    },
    {
      id: 'philips',
      brand: 'Philips',
      category: 'Field Force, Training & Digital',
      since: '2021',
      challenge: 'Philips TV & Sound benötigte einen End-to-End-Partner, der Schulungen, Field Force und digitale Kampagnen nahtlos bündelt — mit dem Ziel, Deutschland zum stärksten EU-Markt zu machen.',
      solution: 'Sonic liefert Cashback-Aktionen, saisonale POS-Promotions, die TVundSound.Academy, Messestandbau sowie einen digitalen 3D-Homeplaner — alles vollständig im Full-Service.',
      results: [
        { label: 'Absatzwachstum pro Einsatztag', value: '+54%' },
        { label: 'Marktposition Europa', value: '#1 EU' },
        { label: 'Module', value: '6' },
      ],
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
      testimonial: 'Durch das SRT können wir live in unsere Projekte mit Sonic reinschauen und jederzeit sehen, wie unsere Erwartungen erfüllt werden.',
      author: 'Murat Yatkin',
      authorRole: 'Managing Director DACH, Philips TV & Sound @TP Vision',
    },
    {
      id: 'avoury',
      brand: 'Avoury',
      category: 'Field Force, Recruiting & Datenoptimierung',
      since: '2021',
      challenge: 'Die Avoury One (Teemaschine von Melitta) brauchte beim Markteintritt eine Field Force mit maximaler Konversionsrate — aufgebaut aus Null, optimiert durch Daten.',
      solution: 'Sonic rekrutierte gezielt aus dem eigenen Talentpool, schulte auf dem Campus Krefeld und optimierte laufend: Personalauswahl, Outlet-Matching und Tagesplanung — alles datenbasiert via SRT.',
      results: [
        { label: 'Umsatzwachstum pro Einsatztag 2021–2023', value: '+1.187%' },
        { label: 'Marke', value: 'Melitta' },
        { label: 'Module', value: '5' },
      ],
      image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/NEXARO01.jpg',
      testimonial: 'Dank Tracking und Logging aller Einsätze und Umsätze im Sonic Reporting Tool werden Erfolge und Potenziale sichtbar — und gezielt ausgebaut.',
      author: 'Avoury by Melitta',
      authorRole: 'Projektteam, Sonic Group',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8D400]/6 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge text="Deep Dive" variant="dark" className="mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4 leading-tight">UNSERE 4 ERFOLGSPARTNERSCHAFTEN</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">Echte Zahlen, echte Zitate, echte Ergebnisse — aus laufenden Langzeitpartnerschaften im DACH-Raum</p>
        </div>

        {/* Brand Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cases.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 font-black text-sm uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCase === index
                  ? 'bg-[#C8D400] text-white scale-105'
                  : 'bg-white text-gray-700 hover:border-[#C8D400] hover:text-[#1a1a1a] border border-gray-200'
              }`}
              style={{ borderRadius: 0 }}
            >
              {item.brand}
            </button>
          ))}
        </div>

        {/* Main Showcase */}
        <div
          className="relative overflow-hidden group mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ borderRadius: 0 }}
        >
          <div className={`absolute inset-0 border-4 transition-all duration-500 pointer-events-none z-20 ${isHovered ? 'border-[#C8D400]' : 'border-gray-100'}`}></div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-[420px] lg:h-[520px]">
              <img
                src={cases[activeCase].image}
                alt={cases[activeCase].brand}
                className={`w-full h-full object-cover object-top transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20"></div>

              {/* Corner accents */}
              <div className={`absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#C8D400] transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#C8D400] transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-[#C8D400] text-white px-4 py-1.5 font-black text-xs uppercase tracking-wider mb-3" style={{ borderRadius: 0 }}>
                  {cases[activeCase].category}
                </div>
                <h3 className="text-4xl font-black text-white">{cases[activeCase].brand}</h3>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wide mt-1">Partnerschaft seit {cases[activeCase].since}</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-10 bg-white flex flex-col justify-between relative">
              <div className={`absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#C8D400] transition-all duration-500 hidden lg:block ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#C8D400] transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-black text-[#C8D400] uppercase tracking-widest mb-2">Die Herausforderung</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{cases[activeCase].challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#C8D400] uppercase tracking-widest mb-2">Unsere Lösung</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{cases[activeCase].solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xs font-black text-[#C8D400] uppercase tracking-widest mb-3">Ergebnisse</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {cases[activeCase].results.map((result, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 text-center border border-gray-100" style={{ borderRadius: 0 }}>
                        <div className="text-lg font-black text-[#1a1a1a] leading-tight font-sans tabular-nums">{result.value}</div>
                        <div className="text-[10px] text-gray-500 mt-1 leading-tight">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-[#C8D400]/8 p-5 border-l-4 border-[#C8D400]" style={{ borderRadius: 0 }}>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-3">"{cases[activeCase].testimonial}"</p>
                  <div>
                    <p className="text-xs font-black text-[#1a1a1a] uppercase tracking-wide">— {cases[activeCase].author}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{cases[activeCase].authorRole}</p>
                  </div>
                </div>
              </div>

              <a
                href="#case-studies-carousel"
                onClick={(e) => { e.preventDefault(); document.getElementById('case-studies-carousel')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-6 w-full bg-[#C8D400] text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap flex items-center justify-center cursor-pointer text-sm border-2 border-[#C8D400] hover:border-[#1a1a1a]"
                style={{ borderRadius: 0 }}
              >
                Vollständige Story lesen
                <i className="ri-arrow-down-line ml-2 animate-bounce"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <HighlightCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}