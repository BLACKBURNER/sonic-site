import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (location.pathname === href || (href === '/' && location.pathname === '/')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  };

  const scrollToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    setIsMobileMenuOpen(false);
  };

  const handleLosungenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/losungen#losungen-carousel');
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  };

  const leistungenCategories = [
    {
      title: 'AM POS VERKAUFEN',
      items: [
        { name: 'POS Full Service', href: '/leistungen/pos-full-service', icon: 'ri-store-line' },
        { name: 'Live Video Promotion', href: '/leistungen/live-video', icon: 'ri-live-line' },
        { name: 'Events & Messen', href: '/leistungen/events-messen', icon: 'ri-calendar-event-line' },
      ],
    },
    {
      title: 'TEAM AUFBAUEN',
      items: [
        { name: 'Staff as a Service', href: '/leistungen/staff-as-a-service', icon: 'ri-user-add-line' },
        { name: 'Talentepool', href: '/leistungen/talentpool', icon: 'ri-team-line' },
        { name: 'Warehouse & Logistik', href: '/leistungen/warehouse-logistik', icon: 'ri-archive-line' },
      ],
    },
    {
      title: 'DATEN & INSIGHTS',
      items: [
        { name: 'SRT — Sonic Reporting Tool', href: '/srt', icon: 'ri-pie-chart-2-line' },
        { name: 'Forecasting', href: '/leistungen/forecasting', icon: 'ri-line-chart-line' },
      ],
    },
    {
      title: 'MARKE AUFBAUEN',
      items: [
        { name: 'Kreation & Content', href: '/leistungen/kreation-content', icon: 'ri-palette-line' },
      ],
    },
  ];

  const aboutDropdownItems = [
    { name: 'Über uns', href: '/about', icon: 'ri-information-line' },
    { name: 'Sonic Reels', href: '/sonic-reels', icon: 'ri-film-line' },
  ];

  const textColor = isScrolled
    ? 'text-gray-700 hover:text-[#C8D400]'
    : 'text-white hover:text-[#C8D400]';

  return (
    <>
      <nav
        role="navigation"
        aria-label="Hauptnavigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
        style={isScrolled ? {
          boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNavClick('/')} className="flex items-center space-x-3 cursor-pointer flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2">
              <img
                src="https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/SONIC_GESAMTLOGO_LIME-q0lflz24exgoq4608jg9ggegh9pjfwmmc0m1jsee5i.png"
                alt="Sonic Group — Zur Startseite"
                className="h-8 md:h-10 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => handleNavClick('/')} className={`text-sm font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`}>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button onClick={handleLosungenClick} className={`text-sm font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`}>
                Lösungen
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Leistungen Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown('leistungen')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`text-sm font-medium transition-colors relative group flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`} aria-haspopup="true" aria-expanded={activeDropdown === 'leistungen'}>
                  Leistungen
                  <i className={`ri-arrow-down-s-line text-base transition-transform duration-300 ${activeDropdown === 'leistungen' ? 'rotate-180' : ''}`}></i>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
                </button>
                {activeDropdown === 'leistungen' && (
                  <div className="absolute top-full left-0 pt-4" style={{ zIndex: 200 }}>
                    <div className="w-80 bg-white border border-gray-200 py-3" style={{ borderRadius: 0, boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)' }}>
                    {/* Overview link */}
                    <button onClick={() => handleNavClick('/leistungen')}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-black text-gray-800 hover:text-[#C8D400] hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-1">
                      <i className="ri-grid-line text-base text-[#C8D400]"></i>
                      Alle Leistungen
                    </button>
                    {/* Categories */}
                    {leistungenCategories.map((cat, catIdx) => (
                      <div key={catIdx} className="mb-2">
                        <div className="px-4 py-1.5">
                          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">{cat.title}</span>
                        </div>
                        {cat.items.map((item, itemIdx) => (
                          <button key={itemIdx} onClick={() => handleNavClick(item.href)}
                            className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C8D400] hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-1">
                            <i className={`${item.icon} text-base text-[#C8D400]/60 flex-shrink-0`}></i>
                            <span className="truncate">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Über uns Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`text-sm font-medium transition-colors relative group flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`} aria-haspopup="true" aria-expanded={activeDropdown === 'about'}>
                  Über uns
                  <i className={`ri-arrow-down-s-line text-base transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}></i>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 pt-4" style={{ zIndex: 200 }}>
                    <div className="w-52 bg-white border border-gray-200 py-2" style={{ borderRadius: 0, boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)' }}>
                    <div className="px-4 pt-2 pb-1">
                      <span className="text-xs font-black tracking-[0.2em] uppercase text-sonic-lime">Über Sonic</span>
                    </div>
                    {aboutDropdownItems.map((item, index) => (
                      <button key={index} onClick={() => handleNavClick(item.href)}
                        className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#C8D400] hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-1">
                        <i className={`${item.icon} text-base text-[#C8D400]/60 flex-shrink-0`}></i>
                        <span className="truncate">{item.name}</span>
                      </button>
                    ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Fallbeispiele — simple link */}
              <button onClick={() => handleNavClick('/case-studies')} className={`text-sm font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`}>
                Fallbeispiele
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button onClick={() => handleNavClick('/blog')} className={`text-sm font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`}>
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button onClick={() => handleNavClick('/careers')} className={`text-sm font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 rounded-sm ${textColor}`}>
                Karriere
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8D400] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={() => handleNavClick('/kontakt')}
                className="px-6 py-2.5 bg-sonic-lime text-sonic-dark text-sm font-black hover:bg-white hover:text-sonic-dark transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 cursor-pointer"
                style={{ borderRadius: 0 }}>
                Kontakt
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors z-[60] relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 ${
                isMobileMenuOpen ? 'text-sonic-dark' : isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        id="mobile-menu-panel"
        className={`fixed top-0 right-0 bottom-0 z-[60] lg:hidden w-[70vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <img
            src="https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/SONIC_GESAMTLOGO_LIME-q0lflz24exgoq4608jg9ggegh9pjfwmmc0m1jsee5i.png"
            alt="Sonic Logo"
            className="h-8 w-auto"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
            aria-label="Menü schließen"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Scrollable Nav Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Primary links */}
          <div className="px-4 space-y-1">
            <button onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
              <i className="ri-home-line text-base w-5 text-center text-gray-400"></i>
              Home
            </button>

            <button onClick={handleLosungenClick}
              className="flex items-center gap-3 w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
              <i className="ri-lightbulb-line text-base w-5 text-center text-gray-400"></i>
              Lösungen
            </button>
          </div>

          {/* Divider */}
          <div className="my-3 mx-4 border-t border-gray-100" />

          {/* Leistungen accordion */}
          <div className="px-4">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'leistungen' ? null : 'leistungen')}
              className="flex items-center justify-between w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
              aria-expanded={mobileExpanded === 'leistungen'}
              aria-controls="mobile-leistungen-submenu"
            >
              <span className="flex items-center gap-3">
                <i className="ri-briefcase-line text-base w-5 text-center text-gray-400"></i>
                Leistungen
              </span>
              <i className={`ri-arrow-down-s-line text-base transition-transform duration-300 ${mobileExpanded === 'leistungen' ? 'rotate-180 text-[#C8D400]' : 'text-gray-400'}`}></i>
            </button>

            {mobileExpanded === 'leistungen' && (
              <div id="mobile-leistungen-submenu" className="mt-1 ml-8 space-y-0.5 pb-2">
                <button onClick={() => handleNavClick('/leistungen')}
                  className="flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm font-black text-gray-700 hover:text-[#C8D400] hover:bg-[#C8D400]/8 transition-colors cursor-pointer border-b border-gray-100 mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
                  <i className="ri-grid-line text-sm text-[#C8D400]"></i>
                  Alle Leistungen
                </button>
                {leistungenCategories.map((cat, catIdx) => (
                  <div key={catIdx} className="mb-1">
                    <div className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 px-3 py-1">{cat.title}</div>
                    {cat.items.map((item, itemIdx) => (
                      <button key={itemIdx} onClick={() => handleNavClick(item.href)}
                        className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#C8D400] hover:bg-[#C8D400]/8 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
                        <i className={`${item.icon} text-sm text-[#C8D400]/50`}></i>
                        {item.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Über uns accordion */}
          <div className="px-4 mt-1">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'about' ? null : 'about')}
              className="flex items-center justify-between w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
              aria-expanded={mobileExpanded === 'about'}
              aria-controls="mobile-about-submenu"
            >
              <span className="flex items-center gap-3">
                <i className="ri-information-line text-base w-5 text-center text-gray-400"></i>
                Über uns
              </span>
              <i className={`ri-arrow-down-s-line text-base transition-transform duration-300 ${mobileExpanded === 'about' ? 'rotate-180 text-[#C8D400]' : 'text-gray-400'}`}></i>
            </button>
            {mobileExpanded === 'about' && (
              <div id="mobile-about-submenu" className="mt-1 ml-8 space-y-0.5 pb-2">
                <div className="text-xs font-black tracking-[0.2em] uppercase text-sonic-lime px-3 py-1.5">Über Sonic</div>
                {aboutDropdownItems.map((item, index) => (
                  <button key={index} onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm text-gray-600 hover:text-[#C8D400] hover:bg-[#C8D400]/8 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
                    <i className={`${item.icon} text-sm text-[#C8D400]/50`}></i>
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="my-3 mx-4 border-t border-gray-100" />

          {/* Other links */}
          <div className="px-4 space-y-1">
            <button onClick={() => handleNavClick('/case-studies')}
              className="flex items-center gap-3 w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
              <i className="ri-file-chart-line text-base w-5 text-center text-gray-400"></i>
              Fallbeispiele
            </button>

            <button onClick={() => handleNavClick('/blog')}
              className="flex items-center gap-3 w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
              <i className="ri-article-line text-base w-5 text-center text-gray-400"></i>
              Blog
            </button>

            <button onClick={() => handleNavClick('/careers')}
              className="flex items-center gap-3 w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
              <i className="ri-user-add-line text-base w-5 text-center text-gray-400"></i>
              Karriere
            </button>

            <button onClick={() => handleNavClick('/kontakt')}
              className="flex items-center gap-3 w-full px-3 py-3 text-gray-800 hover:bg-[#C8D400]/10 hover:text-[#C8D400] font-semibold transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
              <i className="ri-mail-send-line text-base w-5 text-center text-gray-400"></i>
              Kontakt
            </button>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={() => handleNavClick('/kontakt')}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-sonic-lime text-sonic-dark text-sm font-black hover:bg-white hover:text-sonic-dark transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime cursor-pointer"
            style={{ borderRadius: 0 }}>
            <i className="ri-mail-line"></i>
            Kontakt
          </button>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a href="tel:+4921514794440" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#C8D400] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime rounded-sm">
              <i className="ri-phone-line"></i>
              +49 2151 479 444 0
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
