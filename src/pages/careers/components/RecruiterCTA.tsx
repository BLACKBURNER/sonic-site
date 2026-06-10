// ... existing code ...
export default function RecruiterCTA() {
  return (
    <section className="py-16 px-6 bg-[#111] relative overflow-hidden">
      {/* Lime glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#C8D400]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
          <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Quick Connect</span>
        </div>

        <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight uppercase">
          Lerne uns kennen:
        </h3>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Buche deinen <strong className="text-white">15-Minuten-Call</strong> mit unserem Recruiting-Team –
          kein Druck, keine Verpflichtung, nur ein echtes Gespräch.
        </p>

        {/* Recruiter card */}
        <div
          className="inline-flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-5 mb-10"
          style={{ borderRadius: 0 }}
        >
          {/* Polaroid avatar */}
          <div
            className="flex-shrink-0 flex flex-col"
            style={{
              background: '#f5f2ec',
              padding: '3px 3px 18px 3px',
              width: '60px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
              transform: 'rotate(-1.2deg)',
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="relative overflow-hidden" style={{ height: '54px' }}>
              <img
                src="https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg"
                alt="Recruiting Team"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
            </div>
            {/* Caption strip */}
            <div className="flex flex-col items-center justify-center pt-1 pb-0.5 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
                  backgroundSize: '40px 40px',
                  opacity: 0.5,
                  mixBlendMode: 'multiply',
                }}
              />
              <div className="relative z-10 text-[6px] font-black uppercase tracking-[0.08em] text-[#111]/60 leading-none truncate w-full text-center">Tanja</div>
            </div>
          </div>

          <div className="text-left">
            <p className="font-black text-white text-sm">Tanja & Team</p>
            <p className="text-xs text-white/60">Sonic Recruiting</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 bg-[#C8D400] rounded-full animate-pulse"></div>
              <span className="text-xs text-[#C8D400] font-black">Jetzt verfügbar</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-white/50">
            <span className="flex items-center gap-1">
              <i className="ri-time-line text-[#C8D400]"></i>
              15 Min.
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-video-line text-[#C8D400]"></i>
              Video-Call
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-calendar-line text-[#C8D400]"></i>
              Flexibel
            </span>
          </div>
        </div>

        <div>
          <a
            href="mailto:recruiting@sonic-group.de?subject=15-Minuten-Call Anfrage"
            className="inline-flex items-center gap-3 px-7 py-3 bg-[#C8D400] text-[#111] font-black text-sm hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
            style={{ borderRadius: 0 }}
          >
            <i className="ri-calendar-schedule-line text-base"></i>
            TERMIN VEREINBAREN
            <i className="ri-arrow-right-line text-base"></i>
          </a>
          <p className="mt-4 text-xs text-white/40">Antwort innerhalb von 24 Stunden garantiert.</p>
        </div>
      </div>
    </section>
  );
}
