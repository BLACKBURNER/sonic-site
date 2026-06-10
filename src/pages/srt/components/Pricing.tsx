import SectionBadge from '@/components/base/SectionBadge';
import { CONTACT_EMAIL } from '@/lib/contact';

export default function Pricing() {
  const TIERS = [
    {
      name: 'Starter',
      price: 'Individuell',
      desc: 'Für Marken, die den deutschen Markt testen oder fokussierte Kampagnen fahren.',
      features: ['Live-Dashboard-Zugang', 'Bis zu 3 Custom Reports', 'Wöchentliche Performance-Zusammenfassung', 'E-Mail-Support', 'Datenexport (CSV)', '1 User-Lizenz'],
      cta: 'Anfrage stellen',
      highlight: false,
    },
    {
      name: 'Professional',
      price: 'Individuell',
      desc: 'Für etablierte Marken, die ihre Retail-Präsenz skalieren.',
      features: ['Alles aus Starter', 'Unbegrenzte Custom Reports', 'Tägliche Performance-Updates', 'Prioritäts-Support', 'API-Zugang', 'Bis zu 5 User-Lizenzen', 'Forecasting-Modul', 'Einsatzplanung'],
      cta: 'Anfrage stellen',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Auf Anfrage',
      desc: 'Für Sonic-Partner und Marken mit komplexen Multi-Market-Projekten.',
      features: ['Alles aus Professional', 'Dedizierter Account-Manager', 'White-Label-Reporting', 'Unbegrenzte User-Lizenzen', 'SLA-Garantien', 'Onboarding & Schulung', 'Bereits inkludiert für Sonic-Partner'],
      cta: 'Kontakt aufnehmen',
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#C8D400] blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#C8D400] blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <SectionBadge text="Transparente Preise" variant="dark" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8D400]/30 to-transparent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-black text-sonic-dark leading-tight tracking-tight"
              style={{ fontSize: 'clamp(28px,4vw,48px)' }}
            >
              SKALIERT MIT<br />
              <span className="text-[#C8D400]">DEINEM</span><br />
              PROJEKT.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed lg:pb-2">
              Drei Stufen. Klarer Mehrwert. Keine versteckten Kosten.
              Sonic-Partner erhalten Enterprise-Zugang automatisch inklusive.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {TIERS.map((tier, i) => (
            <div
              key={i}
              className={`relative p-8 transition-all duration-300 ${tier.highlight ? 'scale-105 lg:-mt-6 lg:mb-6' : 'hover:-translate-y-1'}`}
              style={{
                borderRadius: 0,
                background: tier.highlight ? '#0d0d0d' : '#fff',
                border: tier.highlight ? '2px solid #C8D400' : '2px solid #f0f0ee',
                boxShadow: tier.highlight ? '0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(200,212,0,0.2)' : 'none',
              }}
            >
              {tier.highlight && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8D400] text-[#0d0d0d] px-6 py-2 font-black text-xs whitespace-nowrap" style={{ borderRadius: 0 }}>
                    Empfohlen
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8D400] to-transparent" />
                </>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-black mb-2 ${tier.highlight ? 'text-white' : 'text-sonic-dark'}`}>{tier.name}</h3>
                <div className="text-3xl font-black text-[#C8D400] mb-3">{tier.price}</div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-white/50' : 'text-gray-500'}`}>{tier.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#C8D400] text-base flex-shrink-0 mt-0.5"></i>
                    <span className={`text-sm ${tier.highlight ? 'text-white/70' : 'text-gray-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=SRT%20Anfrage`}
                className={`flex items-center justify-center gap-2 w-full py-3.5 font-black transition-all duration-300 cursor-pointer whitespace-nowrap text-sm ${
                  tier.highlight
                    ? 'bg-[#C8D400] text-[#0d0d0d] hover:bg-white hover:text-[#0d0d0d]'
                    : 'border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white'
                }`}
                style={{ borderRadius: 0 }}
              >
                <i className="ri-calendar-line"></i>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-[#111] border border-[#111] p-6 max-w-xl" style={{ borderRadius: 0 }}>
            <div className="flex items-start gap-4">
              <i className="ri-information-line text-2xl text-[#C8D400] flex-shrink-0"></i>
              <div className="text-left">
                <p className="text-white font-black text-sm mb-1">Bereits Sonic-Partner?</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Das SRT ist in deiner Partnerschaft inklusive. Kontaktiere deinen Account-Manager für den Zugang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
