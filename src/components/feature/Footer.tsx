import { useNavigate } from 'react-router-dom';
import FooterTopologyField from './FooterTopologyField';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href.slice(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    navigate(href);
  };

  const footerLinks = {
    solutions: [
      { label: 'Staff as a Service', href: '/leistungen/staff-as-a-service' },
      { label: 'POS Full Service', href: '/leistungen/pos-full-service' },
      { label: 'Events & Messen', href: '/leistungen/events-messen' },
      { label: 'Kreation & Content', href: '/leistungen/kreation-content' },
      { label: 'Warehouse & Logistik', href: '/leistungen/warehouse-logistik' },
      { label: 'SRT Technologie', href: '/srt' },
      { label: 'Live Video Promotion', href: '/leistungen/live-video' },
    ],
    company: [
      { label: '\u00dcber uns', href: '/about' },
      { label: 'Karriere', href: '/careers' },
      { label: 'Sonic Sales \u2013 Jobs', href: '/careers/sonic-sales' },
      { label: 'Sonic Staff \u2013 Jobs', href: '/careers/sonic-staff' },
      { label: 'Fallbeispiele', href: '/case-studies' },
      { label: 'Sonic Reels', href: '/sonic-reels' },
    ],
    legal: [
      { label: 'Kontakt', href: '/#contact' },
      { label: 'Impressum', href: 'https://www.sonic-group.de/impressum/' },
      { label: 'Datenschutz', href: 'https://www.sonic-group.de/datenschutz/' },
    ],
  };

  return (
    <footer className="relative" style={{ background: '#181818' }}>

      {/* ── Footer Content ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-6 md:py-8 relative z-10">
        {/* Main grid: brand takes full width on mobile, 3 cols on tablet, 2/5 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-4 md:mb-6">

          {/* Brand Column — full width on mobile/tablet, 2 cols on desktop */}
          <div className="md:col-span-3 lg:col-span-2">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 mb-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181818]"
            >
              <img
                src="https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/SONIC_GESAMTLOGO_LIME-q0lflz24exgoq4608jg9ggegh9pjfwmmc0m1jsee5i.png"
                alt="Sonic Group"
                className="h-9 md:h-11 w-auto"
              />
            </button>

            <div className="mb-3">
              <p className="text-[#9a9a8e] text-[12px] leading-relaxed">
                Sonic Sales Support GmbH<br />
                Campus Fichtenhain 46<br />
                47807 Krefeld, Germany
              </p>
            </div>

            <div className="space-y-1 mb-3">
              <a
                href="tel:+4921514794440"
                className="flex items-center gap-2.5 text-[#9a9a8e] hover:text-[#C8D400] transition-colors text-[12px] cursor-pointer"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-[#C8D400] text-sm"></i>
                </span>
                +49 2151 479 444 0
              </a>
              <a
                href="mailto:info@sonic-group.de"
                className="flex items-center gap-2.5 text-[#9a9a8e] hover:text-[#C8D400] transition-colors text-[12px] cursor-pointer"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-[#C8D400] text-sm"></i>
                </span>
                info@sonic-group.de
              </a>
            </div>

            {/* Social icons — compact dark squares */}
            <div className="flex items-center gap-1.5 mb-3">
              <a
                href="https://www.linkedin.com/company/sonic-sales-support/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-7 h-7 bg-[#252525] border border-[#333] flex items-center justify-center hover:bg-[#333] hover:border-[#444] transition-all duration-300 cursor-pointer"
                aria-label="Sonic Group on LinkedIn"
              >
                <i className="ri-linkedin-fill text-[#b0b0a4] text-xs"></i>
              </a>
              <a
                href="https://www.instagram.com/sonic_group/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-7 h-7 bg-[#252525] border border-[#333] flex items-center justify-center hover:bg-[#333] hover:border-[#444] transition-all duration-300 cursor-pointer"
                aria-label="Sonic Group on Instagram"
              >
                <i className="ri-instagram-line text-[#b0b0a4] text-xs"></i>
              </a>
              <a
                href="https://www.facebook.com/SonicSalesSupport/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-7 h-7 bg-[#252525] border border-[#333] flex items-center justify-center hover:bg-[#333] hover:border-[#444] transition-all duration-300 cursor-pointer"
                aria-label="Sonic Group on Facebook"
              >
                <i className="ri-facebook-fill text-[#b0b0a4] text-xs"></i>
              </a>
            </div>

            {/* Sales badge */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#C8D400]/10 border border-[#C8D400]/25 flex items-center justify-center flex-shrink-0">
                <i className="ri-trophy-line text-[#C8D400] text-xs"></i>
              </div>
              <p className="text-[12px] text-[#9a9a8e]">
                Part of &euro;2B+ in influenced sales
              </p>
            </div>
          </div>

          {/* Leistungen */}
          <div className="pt-3 md:pt-0 border-t border-white/6 md:border-t-0">
            <h4 className="text-white mb-2 md:mb-3 text-[12px] font-semibold uppercase tracking-[0.10em]">
              &mdash; Leistungen
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#88887a] hover:text-[#C8D400] transition-colors text-[12px] whitespace-nowrap cursor-pointer block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="pt-3 md:pt-0 border-t border-white/6 md:border-t-0">
            <h4 className="text-white mb-2 md:mb-3 text-[12px] font-semibold uppercase tracking-[0.10em]">
              &mdash; Unternehmen
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#88887a] hover:text-[#C8D400] transition-colors text-[12px] whitespace-nowrap cursor-pointer block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="pt-3 md:pt-0 border-t border-white/6 md:border-t-0">
            <h4 className="text-white mb-2 md:mb-3 text-[12px] font-semibold uppercase tracking-[0.10em]">
              &mdash; Rechtliches
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-[#88887a] hover:text-[#C8D400] transition-colors text-[12px] whitespace-nowrap cursor-pointer block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-[#88887a] hover:text-[#C8D400] transition-colors text-[12px] whitespace-nowrap cursor-pointer block text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar — full-width, not constrained by max-w-7xl */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[#666] text-xs text-center">
              <p>&copy; {currentYear} Sonic Sales Support GmbH. Alle Rechte vorbehalten.</p>
              <span className="hidden sm:inline text-white/15">|</span>
              <a
                href="https://reezandigital.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-[#666] hover:text-[#C8D400] transition-colors cursor-pointer text-xs"
              >
                Built by Reezan Digital
              </a>
            </div>
            <div className="flex items-center gap-4 md:gap-5">
              <span className="flex items-center gap-1 text-xs text-[#666]">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-shield-check-line text-[#7a7a6e] text-xs"></i>
                </span>
                ISO Certified
              </span>
              <span className="flex items-center gap-1 text-xs text-[#666]">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-lock-line text-[#7a7a6e] text-xs"></i>
                </span>
                GDPR Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer Topology Field — waves start AFTER content, below the fold ─── */}
      <FooterTopologyField />
    </footer>
  );
}