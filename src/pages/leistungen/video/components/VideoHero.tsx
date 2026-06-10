export default function VideoHero() {
  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-black" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      <img
        src="https://www.sonic-group.de/wp-content/uploads/2023/06/LVP_NEU.jpg"
        alt="Live Video Produktion"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.85) 100%)' }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8D400]/6 blur-[100px] pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-60">
          <span className="text-white/50 text-xs font-bold">Leistungen</span>
          <i className="ri-arrow-right-s-line text-white/40 text-sm"></i>
          <span className="text-white/50 text-xs font-bold">POS & Live Video</span>
          <i className="ri-arrow-right-s-line text-white/40 text-sm"></i>
          <span className="text-[#C8D400] text-xs font-bold">(Live) Video</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
          <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">(Live) Video</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-none">
          Live verkaufen.<br />
          <span className="text-[#C8D400]">Digital begeistern.</span>
        </h1>
        <p className="text-xl text-white/80 mb-4 font-semibold">
          Erlebbar werden — Videocontent und Live-Video-Kanäle mit unseren Markenbotschaftern.
        </p>
        <p className="text-sm text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
          Für Produktberatung, Sales und Service-Support. E-Commerce, Retail-Display, QR-Code — alles aus einer Hand.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {[
            { val: '>50.000', label: '1:1 Live Video Calls' },
            { val: 'Ø 6 Min.', label: 'Beratungsdauer' },
            { val: '100 %', label: 'Managed Service' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-[#C8D400] font-mono">{s.val}</div>
              <div className="text-white/45 text-xs font-bold uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:${CONTACT_EMAIL}`?subject=Video%20Demo%20anfragen"
            className="inline-flex items-center gap-2 bg-[#C8D400] text-white font-black px-7 py-3 hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
            style={{ borderRadius: 0 }}
          >
            <i className="ri-video-line"></i>
            Video-Demo anfordern
          </a>
          <a
            href="mailto:${CONTACT_EMAIL}`?subject=Live%20Video%20Beratung"
            className="inline-flex items-center gap-2 border-2 border-white/25 text-white px-6 py-3 font-black hover:border-[#C8D400] hover:text-[#C8D400] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
            style={{ borderRadius: 0 }}
          >
            Beratung anfragen
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}