import { useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from './components/ContactForm';
import ImpressumSection from './components/ImpressumSection';
import { CONTACT_EMAIL } from '@/lib/contact';

const CALENDLY_URL = 'https://calendly.com/sonic-group-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=c8d300';

function CalendlyInline() {
  useEffect(() => {
    // If Calendly script is already loaded, init inline widgets
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}

const contactDetails = [
  {
    icon: 'ri-map-pin-line',
    label: 'Adresse',
    value: 'Campus Fichtenhain 46\n47807 Krefeld, Deutschland',
    href: 'https://maps.google.com/?q=Campus+Fichtenhain+46+47807+Krefeld',
    external: true,
  },
  {
    icon: 'ri-phone-line',
    label: 'Telefon',
    value: '+49 2151 479 444 0',
    href: 'tel:+4921514794440',
    external: false,
  },
  {
    icon: 'ri-mail-line',
    label: 'E-Mail',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: 'ri-time-line',
    label: 'Erreichbarkeit',
    value: 'Mo–Fr: 09:00–17:00 Uhr',
    href: undefined,
    external: false,
  },
];

export default function KontaktPage() {
  useSEO({
    title: 'Kontakt | Sonic Group — Krefeld DACH Market Activation Agentur',
    description:
      'Kontaktiere die Sonic Group direkt. Campus Fichtenhain 46, 47807 Krefeld. Tel: +49 2151 479 444 0 — Anfragen zu POS, Staffing, SRT & Retail Activation.',
    keywords: 'Sonic Group Kontakt, Krefeld Agentur, POS Promotion Anfrage, Retail Activation DACH',
    canonical: 'https://sonic-group.de/kontakt',
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-6 bg-[#111] overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,212,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#C8D400]/6 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-7">
                <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
                <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">
                  Kein Commitment. Nur ein gutes Gespräch.
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
                LASS UNS
                <br />
                <span className="text-[#C8D400]">REDEN.</span>
              </h1>

              <p className="text-base text-gray-400 leading-relaxed max-w-lg mb-10">
                Ob Produktlaunch, Markteintritt im DACH-Raum oder Retail-Activation — wir hören
                zu und liefern Lösungen. Schreib uns oder ruf direkt an.
              </p>

              {/* Contact detail cards */}
              <div className="grid sm:grid-cols-2 gap-px bg-white/5">
                {contactDetails.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#191919] px-5 py-5 hover:bg-[#1e1e00] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 flex items-center justify-center bg-[#C8D400]/10 border border-[#C8D400]/20 flex-shrink-0">
                        <i className={`${item.icon} text-base text-[#C8D400]`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="text-sm text-gray-300 hover:text-[#C8D400] transition-colors whitespace-pre-line break-all leading-relaxed block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Calendly Inline Embed */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-6">
              {/* Header label */}
              <div className="w-full flex items-center gap-3 px-1">
                <div className="w-8 h-8 flex items-center justify-center bg-[#C8D400]/15 border border-[#C8D400]/30">
                  <i className="ri-calendar-check-line text-sm text-[#C8D400]" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.28em] text-[#C8D400]">Direkt Termin wählen</p>
                  <p className="text-xs text-gray-500">Kostenlos · Unverbindlich · 30 Minuten</p>
                </div>
              </div>
              {/* Inline calendar */}
              <div className="w-full border border-[#C8D400]/20 overflow-hidden">
                <CalendlyInline />
              </div>
              {/* Quick stats */}
              <div className="w-full grid grid-cols-3 gap-px bg-white/5">
                {[
                  { val: '< 24h', label: 'Antwortzeit' },
                  { val: '20+', label: 'Jahre Erfahrung' },
                  { val: '100+', label: 'Kunden' },
                ].map((s, i) => (
                  <div key={i} className="bg-[#191919] px-4 py-4 text-center">
                    <p className="text-xl font-black text-[#C8D400] leading-tight">{s.val}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Map ───────────────────────────────────── */}
      <section className="py-0 bg-[#f4f4f2] relative">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-px bg-gray-200">

            {/* Contact Form — KEY ELEMENT */}
            <div>
              <ContactForm />
            </div>

            {/* Map + info sidebar */}
            <div className="bg-white flex flex-col">
              {/* Map */}
              <div className="flex-1 min-h-[320px] relative">
                <iframe
                  title="Sonic Group Standort — Campus Fichtenhain 46, Krefeld"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.8!2d6.545!3d51.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bde4ef4c8a1b%3A0x1!2sCampus+Fichtenhain+46%2C+47807+Krefeld!5e0!3m2!1sde!2sde!4v1700000000000"
                  className="w-full h-full absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
                  allowFullScreen
                />
              </div>

              {/* Office info */}
              <div className="px-10 py-10 border-t border-gray-100">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C8D400] mb-4">
                  Unser Standort
                </p>
                <h3 className="text-xl font-black text-[#111] mb-1 uppercase">Sonic Group</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Campus Fichtenhain 46<br />
                  47807 Krefeld, Deutschland
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Campus+Fichtenhain+46+47807+Krefeld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#C8D400]/40 text-[#C8D400] px-5 py-2.5 font-black text-xs uppercase tracking-wider hover:bg-[#C8D400] hover:text-white transition-all duration-300 whitespace-nowrap"
                    style={{ borderRadius: 0 }}
                  >
                    <i className="ri-map-pin-line" />
                    Route planen
                  </a>
                  <a
                    href="tel:+4921514794440"
                    className="inline-flex items-center gap-2 bg-[#111] text-white px-5 py-2.5 font-black text-xs uppercase tracking-wider hover:bg-[#C8D400] hover:text-white transition-all duration-300 whitespace-nowrap"
                    style={{ borderRadius: 0 }}
                  >
                    <i className="ri-phone-line" />
                    Anrufen
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Impressum ─────────────────────────────────────────────────── */}
      <ImpressumSection />

    </div>
  );
}