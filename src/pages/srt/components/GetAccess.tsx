import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import { submitContactForm, CONTACT_EMAIL } from '@/lib/contact';

export default function GetAccess() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const interests = [
    { value: 'demo', label: 'Demo anfragen', icon: 'ri-play-circle-line' },
    { value: 'beratung', label: 'Beratungsgespräch', icon: 'ri-calendar-line' },
    { value: 'partner', label: 'Sonic-Partner', icon: 'ri-shake-hands-line' },
    { value: 'info', label: 'Mehr Infos', icon: 'ri-information-line' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest) return;
    if (charCount > 500) return;
    setSubmitStatus('submitting');
    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        interest: formData.interest,
        message: formData.message,
        _subject: `SRT Anfrage von ${formData.name}`,
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', interest: '', message: '' });
      setCharCount(0);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <section id="get-access" className="bg-white relative overflow-hidden">

      {/* ——— Split band ——— */}
      <div className="grid lg:grid-cols-2 min-h-[640px]">

        {/* Left: dark pitch panel */}
        <div className="bg-[#111] px-8 md:px-16 py-20 relative overflow-hidden flex flex-col justify-center">
          {/* SRT watermark */}
          <div
            className="absolute -bottom-8 -right-8 select-none pointer-events-none font-black leading-none"
            style={{
              fontSize: '16rem',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(200,212,0,0.06)',
              letterSpacing: '-0.05em',
            }}
          >
            SRT
          </div>

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(200,212,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Top lime line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8D400] to-transparent" />

          <div className="relative z-10">
            <SectionBadge text="Zugang beantragen" variant="light" className="mb-8" />
            <h2
              className="font-black text-white leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(30px,3.5vw,46px)' }}
            >
              BEREIT FÜR<br />
              <span className="text-[#C8D400]">VOLLE</span><br />
              TRANSPARENZ?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xs">
              Kein Commitment. Nur ein Gespräch. Wir zeigen dir in 30 Minuten,
              wie das SRT für dein Projekt aussehen kann.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                { icon: 'ri-time-line', text: '30 Minuten — kostenlos & unverbindlich' },
                { icon: 'ri-shield-check-line', text: 'Keine automatische Vertragsbindung' },
                { icon: 'ri-user-star-line', text: 'Direkt mit deinem Account-Manager' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#C8D400]/10 border border-[#C8D400]/20 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-[#C8D400] text-sm`} />
                  </div>
                  <span className="text-white/40 text-xs font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-10 pt-8 border-t border-white/8">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">Direktkontakt</p>
              <div className="space-y-2.5">
                <a
                  href="tel:+4921514794440"
                  className="flex items-center gap-2 text-white/40 hover:text-[#C8D400] text-sm transition-colors cursor-pointer group"
                >
                  <i className="ri-phone-line text-base group-hover:text-[#C8D400]" />
                  +49 2151 479 444 0
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-white/40 hover:text-[#C8D400] text-sm transition-colors cursor-pointer group"
                >
                  <i className="ri-mail-line text-base group-hover:text-[#C8D400]" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: light form panel */}
        <div className="bg-[#f0efe9] px-8 md:px-14 py-20 relative">
          <div className="max-w-md mx-auto relative">

            {/* Success overlay */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 z-20 bg-[#f0efe9]/95 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C8D400]/20 border-2 border-[#C8D400]/30 flex items-center justify-center mx-auto mb-5">
                    <i className="ri-check-double-line text-3xl text-[#C8D400]" />
                  </div>
                  <h3 className="text-2xl font-black text-sonic-dark mb-2 leading-tight tracking-tight uppercase">Anfrage erhalten!</h3>
                  <p className="text-gray-500 text-sm">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
                </div>
              </div>
            )}

            {/* Error */}
            {submitStatus === 'error' && (
              <div className="mb-5 border border-red-200 bg-red-50 p-3 text-center text-red-600 text-sm font-semibold">
                Etwas ist schiefgelaufen. Bitte versuche es erneut.
              </div>
            )}

            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
              Anfrage stellen
            </p>

            <form id="srt-access-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-sm focus:outline-none focus:border-[#C8D400] transition-colors"
                    style={{ borderRadius: 0 }}
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-sm focus:outline-none focus:border-[#C8D400] transition-colors"
                    style={{ borderRadius: 0 }}
                    placeholder="max@unternehmen.de"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">
                  Unternehmen
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-sm focus:outline-none focus:border-[#C8D400] transition-colors"
                  style={{ borderRadius: 0 }}
                  placeholder="Dein Unternehmen GmbH"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                  Ich interessiere mich für *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((int) => (
                    <button
                      key={int.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: int.value })}
                      className={`p-3 text-center transition-all duration-200 cursor-pointer border-2 flex flex-col items-center gap-1.5 ${
                        formData.interest === int.value
                          ? 'border-[#C8D400] bg-[#C8D400]/8'
                          : 'border-gray-200 bg-white hover:border-[#C8D400]/40'
                      }`}
                      style={{ borderRadius: 0 }}
                    >
                      <i className={`${int.icon} text-xl ${formData.interest === int.value ? 'text-[#C8D400]' : 'text-gray-400'}`} />
                      <span className="text-xs font-black text-[#111] leading-tight">{int.label}</span>
                    </button>
                  ))}
                </div>
                <input type="hidden" name="interest" value={formData.interest} />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">
                  Deine Nachricht{' '}
                  <span className={`font-normal normal-case ${charCount > 480 ? 'text-red-400' : 'text-gray-400'}`}>
                    {charCount}/500
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setCharCount(e.target.value.length);
                  }}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-sm focus:outline-none focus:border-[#C8D400] transition-colors resize-none"
                  style={{ borderRadius: 0 }}
                  placeholder="Beschreibe kurz dein Projekt oder deine Frage..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'submitting' || charCount > 500}
                className="w-full flex items-center justify-center gap-3 bg-[#C8D400] text-[#0d0d0d] py-4 font-black hover:bg-[#0d0d0d] hover:text-[#C8D400] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest whitespace-nowrap"
                style={{ borderRadius: 0 }}
              >
                {submitStatus === 'submitting' ? (
                  <><i className="ri-loader-4-line animate-spin text-lg" />Wird gesendet...</>
                ) : (
                  <><i className="ri-calendar-line text-lg" />Beratungsgespräch buchen</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ——— Bottom Sonic-Partner strip ——— */}
      <div className="bg-[#C8D400] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-[#0d0d0d]/15 flex items-center justify-center flex-shrink-0">
            <i className="ri-shake-hands-line text-[#0d0d0d] text-lg" />
          </div>
          <div>
            <p className="font-black text-[#0d0d0d] text-sm uppercase tracking-wider leading-tight">Bereits Sonic-Partner?</p>
            <p className="text-[#0d0d0d]/60 text-xs mt-0.5">Das SRT ist in deiner Partnerschaft automatisch inklusive.</p>
          </div>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SRT%20Partnerschaft`}
          className="px-6 py-2.5 bg-[#0d0d0d] text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0d0d0d] transition-all duration-300 whitespace-nowrap cursor-pointer"
          style={{ borderRadius: 0 }}
        >
          Account-Manager kontaktieren
        </a>
      </div>

    </section>
  );
}