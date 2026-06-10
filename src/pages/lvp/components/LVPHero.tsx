import { Link } from 'react-router-dom';

export default function LVPHero() {
  return (
    <section className="relative min-h-[560px] md:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#111]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/774643dc-aa00-41f1-a3f4-864433b097da_13.jpg"
          alt="Sonic Live Video Promotion Studio — Professional Live Streaming Setup"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,212,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#C8D400]/40 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#C8D400]/40 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-12 h-12 border-b-2 border-l-2 border-[#C8D400]/40 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-12 h-12 border-b-2 border-r-2 border-[#C8D400]/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/35 px-4 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
          <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Live Video Promotion</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-5 md:mb-6 leading-tight tracking-tight">
          LIVE VERKAUFEN,<br />
          <span className="text-[#C8D400]">DIGITAL BEGEISTERN</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-xl text-white/75 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Nutzen Sie die Kraft von Live-Video-Promotion, um Ihre Produkte authentisch zu präsentieren und in Echtzeit mit Ihrer Zielgruppe zu interagieren. Mehr Reichweite, mehr Engagement, mehr Umsatz.
        </p>

        {/* Stats Strip */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {[
            { value: '>50.000', label: 'Live Calls p.a.' },
            { value: 'Ø 6 Min.', label: 'Beratungsdauer' },
            { value: '99,9%', label: 'Uptime garantiert' },
            { value: '100%', label: 'Managed Service' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[#C8D400] font-black text-base md:text-lg leading-none">{s.value}</span>
              <span className="text-white/50 text-xs font-bold uppercase tracking-wider">{s.label}</span>
              {i < 3 && <div className="hidden sm:block w-px h-4 bg-white/20 ml-2" />}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <a
            href="mailto:info@sonic-promo.de?subject=Live Video Promotion Anfrage"
            className="w-full sm:w-auto px-8 py-4 bg-[#C8D400] text-[#111] font-black text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 whitespace-nowrap text-center"
          >
            Live-Demo anfragen
          </a>
          <Link
            to="/case-studies"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-[#C8D400]/30 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/20 hover:border-[#C8D400] transition-all duration-300 whitespace-nowrap text-center"
          >
            Erfolgsbeispiele ansehen
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Mehr erfahren</span>
        <div className="w-5 h-8 border-2 border-[#C8D400]/50 flex items-start justify-center p-1.5">
          <div className="w-1 h-1 bg-[#C8D400] animate-pulse" />
        </div>
      </div>
    </section>
  );
}