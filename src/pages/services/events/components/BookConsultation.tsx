export default function BookConsultation() {
  return (
    <section className="py-24 bg-[#f7f6f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-sonic-dark to-gray-900 overflow-hidden" style={{ borderRadius: 0 }}>
          {/* Lime Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#C8D400]"></div>
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
                  <i className="ri-calendar-line text-[#C8D400] text-sm" />
                  <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">JETZT TERMIN BUCHEN</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Bereit für Ihr<br />nächstes Event?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Buchen Sie ein kostenloses Beratungsgespräch, um Ihre Event-Ziele zu besprechen und ein individuelles Angebot zu erhalten.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Kostenfreie 30-Minuten Strategie-Session',
                    'Individueller Event-Plan und Budget',
                    'Venue-Empfehlungen',
                    'Zeitplan und Logistik-Übersicht',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <i className="ri-checkbox-circle-fill text-2xl text-[#C8D400]"></i>
                      <span className="text-lg text-white">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/sonic-group/beratungsgespraech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8D400] text-white font-black hover:bg-white hover:text-[#111] transition-all whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-calendar-check-line text-base"></i>
                  Beratungsgespräch vereinbaren
                </a>
              </div>

              <div className="relative">
                <div className="aspect-square overflow-hidden shadow-2xl" style={{ borderRadius: 0 }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20event%20planning%20consultation%20meeting%20with%20creative%20team%20discussing%20brand%20activation%20strategy%20in%20modern%20bright%20office%20space&width=800&height=800&seq=eventconsult001&orientation=squarish"
                    alt="Consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}