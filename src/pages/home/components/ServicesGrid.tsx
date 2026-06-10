import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lightbox, { LightboxItem } from '@/components/base/Lightbox';

const services = [
  {
    title: 'MENSCHEN FÜR EVENTS & MESSEN',
    lead: 'Dediziert geschultes Personal für bestimmte Funktionen – Moderation, Musik, Catering, Logistik und Aufbau.',
    description: 'Wir präsentieren deine Marke da, wo deine Zielgruppe ist: Events, Messen, Roadshows und hybride Formate. Von Konzept über Personal bis Logistik — alles aus einer Hand.',
    tagline: 'Vor Ort. Auf Tour. Mit Wirkung.',
    icon: 'https://readdy.ai/api/search-image?query=crowd%20silhouettes%20cheering%20at%20live%20event%20stage%20carved%20in%20high%20relief%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20sculptural%20minimalist%20icon%20warm%20rich%20brown%20grain%20artisan%20handcrafted%20clean%20white%20background%20top%20view%20studio%20lighting%20product%20photography&width=120&height=120&seq=wood-events-stage-crowd-v8&orientation=squarish',
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/EVENT_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/06/LAGER_OPENER.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/06/6.jpg',
    ],
    link: '/services/events',
  },
  {
    title: 'MENSCHEN FÜR CONTENT',
    lead: 'Ausdrucksstarkes Personal mit Fokus auf Content Produktion.',
    description: 'Videocontent und Live-Video-Kanäle mit unseren Markenbotschaftern — für Produktberatung, Sales und Service-Support. QR-Code auf der Verpackung, Widget im Online-Shop oder Display am POS: Fachberatung auf Knopfdruck.',
    tagline: 'Von Social Content bis Livestreams und Produktvideos — Content mit Retail-DNA.',
    icon: 'https://readdy.ai/api/search-image?query=professional%20film%20clapperboard%20director%20slate%20with%20live%20dot%20carved%20in%20high%20relief%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20sculptural%20minimalist%20icon%20warm%20rich%20brown%20grain%20artisan%20handcrafted%20clean%20white%20background%20top%20view%20studio%20lighting%20product%20photography&width=120&height=120&seq=wood-clapperboard-live-v8&orientation=squarish',
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/LVP_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/06/10.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/6-1-1024x570.jpg',
    ],
    link: '/services/content-studio',
  },
  {
    title: 'MENSCHEN FÜR SCHULUNGEN',
    lead: 'Für Marken-, Produkt- und Verkaufs-Training.',
    description: 'Menschen, die Marken erklären. Trainings, die Wissen direkt in Performance verwandeln — offline, hybrid oder online. Mit Personal und Technik aus einem System.',
    tagline: 'Strategisch geplant. Praxisnah umgesetzt.',
    icon: 'https://readdy.ai/api/search-image?query=open%20book%20with%20rising%20arrow%20growth%20lines%20training%20knowledge%20icon%20carved%20in%20high%20relief%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20sculptural%20minimalist%20symbol%20warm%20rich%20brown%20grain%20artisan%20handcrafted%20clean%20white%20background%20top%20view%20studio%20lighting%20product%20photography&width=120&height=120&seq=wood-book-arrow-training-v8&orientation=squarish',
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/6.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
    ],
    link: '/losungen',
  },
  {
    title: 'MENSCHEN FÜR DEN POINT OF SALE',
    lead: 'Geschultes Personal mit Augenmerk auf Marken- und / oder Produkt-Inszenierung.',
    description: 'End-to-End-Partner für den Point of Sale: Design, Displays, Möbel, Collateral, Give-aways, Logistik und Montage. Wir gestalten und bestücken deine Fläche — datenbasiert geplant, live reportet und messbar erfolgreich.',
    tagline: 'Über 20.000 Stores. Über 1.300.000 Einsätze/Aufgaben. Über 2 Milliarden Umsatz €.',
    icon: 'https://readdy.ai/api/search-image?query=retail%20display%20shelf%20with%20spotlit%20product%20podium%20and%20brand%20flag%20icon%20carved%20in%20high%20relief%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20sculptural%20minimalist%20symbol%20warm%20rich%20brown%20grain%20artisan%20handcrafted%20clean%20white%20background%20top%20view%20studio%20lighting%20product%20photography&width=120&height=120&seq=wood-pos-display-shelf-v8&orientation=squarish',
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/06/10.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
    ],
    link: '/services/retail-pos',
  },
  {
    title: 'MENSCHEN FÜR UNSERE STUDIOS',
    lead: 'All In One: Regisseur, Moderator, Verkäufer.',
    description: 'Erlebbar werden: Produktberatung, Sales und Service-Support direkt aus unseren Studio-Setups. Für Livestreams, Video-Commerce, digitale Beratung und Content-Produktion.',
    tagline: 'Wir richten uns nach den Usern — kanalübergreifend, skalierbar und immer nah an der echten Customer Journey.',
    icon: 'https://readdy.ai/api/search-image?query=broadcast%20studio%20camera%20on%20tripod%20with%20recording%20light%20and%20monitor%20screen%20icon%20carved%20in%20high%20relief%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20sculptural%20minimalist%20symbol%20warm%20rich%20brown%20grain%20artisan%20handcrafted%20clean%20white%20background%20top%20view%20studio%20lighting%20product%20photography&width=120&height=120&seq=wood-studio-camera-monitor-v8&orientation=squarish',
    images: [
      'https://www.sonic-group.de/wp-content/uploads/2023/06/LVP_NEU.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/02/5-1-1024x576.jpg',
      'https://www.sonic-group.de/wp-content/uploads/2023/06/10.jpg',
    ],
    link: '/leistungen/video',
  },
];

export default function ServicesGrid() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState(false);

  const startRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % 3);
        setFade(true);
      }, 300);
    }, 3000);
  };

  useEffect(() => {
    setImageIndex(0);
    setFade(true);
    startRotation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedIndex]);

  const handleDotClick = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setImageIndex(idx);
      setFade(true);
    }, 200);
    startRotation();
  };

  const handleGetStarted = (link: string) => {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxItems: LightboxItem[] = services[selectedIndex].images.map((img, i) => ({
    image: img,
    title: services[selectedIndex].title,
    category: `Impression ${i + 1}`,
    description: services[selectedIndex].description,
  }));

  const currentService = services[selectedIndex];

  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-7 md:mb-9 pt-4">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-5 leading-tight px-4">
            MANPOWER TRIFFT{' '}
            <span className="relative inline-block">
              ROI
              <span
                className="absolute inset-0 -z-10 bg-[#C8D400]/40"
                style={{ transform: 'skewX(-9deg) scaleX(1.08)', borderRadius: '2px' }}
                aria-hidden="true"
              />
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto font-semibold px-4">
            Die Full-Service-Leistungen von Sonic: Vertriebsagentur, Personalagentur, Performanceagentur und Eventagentur in einem.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-5 md:mb-7 px-2" role="tablist" aria-label="Leistungsbereiche">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              role="tab"
              aria-selected={selectedIndex === index}
              aria-controls={`service-panel-${index}`}
              id={`service-tab-${index}`}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 transition-all duration-400 cursor-pointer group relative text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                selectedIndex === index
                  ? 'bg-white ring-2 ring-[#C8D400]'
                  : 'bg-white/60 hover:bg-white ring-1 ring-gray-200 hover:ring-[#C8D400]/50'
              }`}
              style={{
                borderRadius: 0,
                boxShadow: selectedIndex === index
                  ? 'inset 3px 3px 8px rgba(0,0,0,0.08), inset -1px -1px 4px rgba(255,255,255,0.7)'
                  : '3px 3px 8px rgba(0,0,0,0.07), -2px -2px 6px rgba(255,255,255,0.85), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              {selectedIndex === index && (
                <div className="absolute inset-0 bg-[#C8D400]/8 pointer-events-none" style={{ borderRadius: 0 }} aria-hidden="true" />
              )}
              <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 relative z-10">
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    selectedIndex === index ? 'opacity-100 scale-110' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'
                  }`}
                  style={{
                    filter: selectedIndex === index
                      ? 'drop-shadow(0 2px 4px rgba(200, 212, 0, 0.4))'
                      : 'drop-shadow(0 1px 2px rgba(139, 90, 43, 0.3))',
                  }}
                />
              </div>
              <span className={`text-xs font-black transition-colors duration-300 relative z-10 whitespace-nowrap tracking-wide ${
                selectedIndex === index ? 'text-[#C8D400]' : 'text-sonic-dark group-hover:text-[#C8D400]'
              }`}>
                {service.title}
              </span>
              {selectedIndex === index && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white ring-2 ring-[#C8D400] rotate-45 z-0 shadow-sm" aria-hidden="true"></div>
              )}
            </button>
          ))}
        </div>

        {/* Full Image Display Panel */}
        <div
          id={`service-panel-${selectedIndex}`}
          role="tabpanel"
          aria-labelledby={`service-tab-${selectedIndex}`}
          className="relative shadow-2xl overflow-hidden cursor-pointer"
          style={{ minHeight: '520px', borderRadius: 0 }}
          onClick={() => openLightbox(imageIndex)}
          onMouseEnter={() => setHoveredPanel(true)}
          onMouseLeave={() => setHoveredPanel(false)}
          aria-label="Bild vergrößern"
        >
          {/* Images with crossfade */}
          <div className="absolute inset-0 w-full h-full">
            {currentService.images.map((img, idx) => (
              <img
                key={`${selectedIndex}-${idx}`}
                src={img}
                alt={`${currentService.title} — Impression ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500"
                style={{ opacity: imageIndex === idx && fade ? 1 : 0 }}
              />
            ))}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"></div>
          </div>

          {/* Expand hint — top right */}
          <div
            className={`absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 px-3 py-1.5 transition-opacity duration-300 ${hoveredPanel ? 'opacity-100' : 'opacity-0'}`}
          >
            <i className="ri-zoom-in-line text-white text-sm"></i>
            <span className="text-white text-xs font-bold">Vollbild</span>
          </div>

          {/* Overlaid Content */}
          <div
            className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8"
            style={{ minHeight: '520px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lead line */}
            <p className="text-[#C8D400] text-xs md:text-sm font-bold uppercase tracking-widest mb-2 drop-shadow-lg">
              {currentService.lead}
            </p>

            {/* Title Row */}
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
                <img
                  src={currentService.icon}
                  alt={currentService.title}
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 12px rgba(200, 212, 0, 0.6))',
                  }}
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-2xl leading-tight">
                {currentService.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/90 leading-relaxed text-sm md:text-base max-w-3xl mb-2 drop-shadow-lg">
              {currentService.description}
            </p>

            {/* Tagline */}
            <p className="text-white/60 text-xs md:text-sm italic mb-4 drop-shadow-lg">
              {currentService.tagline}
            </p>

            {/* CTA + Dots Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <button
                onClick={() => handleGetStarted(currentService.link)}
                className="inline-flex items-center gap-2 bg-[#C8D400] text-white px-7 py-3 font-black hover:bg-white hover:text-sonic-dark transition-all duration-300 whitespace-nowrap cursor-pointer text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                style={{ borderRadius: 0 }}
              >
                <span>Mehr dazu</span>
                <i className="ri-arrow-right-line text-sm md:text-base"></i>
              </button>

              {/* Image Dots */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Bild-Navigation">
                {currentService.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); handleDotClick(idx); }}
                    role="tab"
                    aria-selected={imageIndex === idx}
                    aria-label={`Bild ${idx + 1} von ${currentService.title}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      imageIndex === idx
                        ? 'w-6 h-2.5 bg-[#C8D400]'
                        : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Lightbox trigger */}
              <button
                onClick={(e) => { e.stopPropagation(); openLightbox(imageIndex); }}
                className="ml-auto flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none"
                aria-label="Bild im Vollbild öffnen"
              >
                <i className="ri-fullscreen-line text-base"></i>
                <span className="text-xs font-bold hidden sm:inline">Vollbild</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Bridge → SRT Section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20" aria-hidden="true">
        <div className="h-16 bg-gradient-to-b from-transparent via-white/60 to-[#111]"></div>
        <div className="relative h-px bg-[#111]">
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-px h-[2px] w-32"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #C8D400 40%, #C8D400 60%, transparent 100%)',
              boxShadow: '0 0 12px rgba(200,212,0,0.6)',
            }}
          />
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={lightboxItems}
        activeIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxItems.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length)}
      />
    </section>
  );
}
