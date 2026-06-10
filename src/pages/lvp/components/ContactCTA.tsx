import { CONTACT_EMAIL } from '@/lib/contact';

export default function ContactCTA() {
  const contactCards = [
    { icon: 'ri-mail-line', title: 'E-Mail', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: 'ri-phone-line', title: 'Telefon', value: '+49 2151 479 444 0', href: 'tel:+4921514794440' },
    { icon: 'ri-map-pin-line', title: 'Adresse', value: 'Campus Fichtenhain 46, 47807 Krefeld', href: null },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f5f5] relative overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#C8D400]/30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#C8D400]/30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA block */}
        <div className="bg-[#C8D400] p-10 md:p-14 relative overflow-hidden mb-10">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/25 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/25 pointer-events-none" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-[#111]/15 border border-[#111]/15 px-4 py-1.5 mb-6">
              <i className="ri-live-line text-[#111] text-xs" />
              <span className="text-xs font-black text-[#111] uppercase tracking-widest">Phygital werden</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#111] mb-5 leading-tight tracking-tight">
              READY TO GO PHYGITAL?
            </h2>
            <p className="text-base text-[#111]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns besprechen, wie Live Video Promotion Ihre Retail-Präsenz transformiert und Ihre Markenexpertise auf alle Touchpoints skaliert.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Live Video Promotion Anfrage`}
                className="w-full sm:w-auto px-8 py-4 bg-[#111] text-white font-black text-sm uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Beratung anfragen
              </a>
              <a
                href="tel:+4921514794440"
                className="w-full sm:w-auto px-8 py-4 bg-white/25 border border-[#111]/25 text-[#111] font-black text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                +49 2151 479 444 0
              </a>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white p-6 border border-gray-100 group hover:border-[#C8D400]/40 transition-all duration-300 cursor-default"
            >
              {/* Left edge on hover */}
              <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-transparent group-hover:bg-[#C8D400] transition-all duration-300" />
              {/* Top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#C8D400] transition-all duration-300" />

              <div className="w-11 h-11 mx-auto mb-4 bg-[#C8D400] flex items-center justify-center">
                <i className={`${card.icon} text-xl text-[#111]`} />
              </div>
              <h3 className="font-black text-[#111] text-sm uppercase tracking-wider mb-1.5 text-center">{card.title}</h3>
              {card.href ? (
                <a href={card.href} className="block text-gray-500 hover:text-[#C8D400] transition-colors text-sm text-center cursor-pointer break-all">
                  {card.value}
                </a>
              ) : (
                <p className="text-gray-500 text-xs text-center leading-relaxed">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}