import { useEffect, useRef, useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const clients = [
  { name: 'Philips', category: 'Unterhaltungselektronik', logo: 'https://cdn.brandfetch.io/philips.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Rowenta', category: 'Haushaltsgeräte', logo: 'https://cdn.brandfetch.io/rowenta.de/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Krups', category: 'Küchengeräte', logo: 'https://cdn.brandfetch.io/krups.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Vorwerk', category: 'Haushaltsgeräte', logo: 'https://cdn.brandfetch.io/vorwerk.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Canon', category: 'Bildgebung & Druck', logo: 'https://cdn.brandfetch.io/canon.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Garmin', category: 'Wearables & Navigation', logo: 'https://cdn.brandfetch.io/garmin.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: "L'Oréal", category: 'Beauty & Kosmetik', logo: 'https://cdn.brandfetch.io/loreal.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Nexaro', category: 'Robotik & Reinigungstechnologie', logo: 'https://cdn.brandfetch.io/id2dYOZ6uf/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1773621883167' },
  { name: 'Bosch', category: 'Haushaltsgeräte', logo: 'https://cdn.brandfetch.io/bosch.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Dyson', category: 'Premium Haushaltsgeräte', logo: 'https://cdn.brandfetch.io/dyson.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'Groupe SEB', category: 'Mehrmarken', logo: 'https://cdn.brandfetch.io/groupeseb.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  { name: 'WMF', category: 'Premium Küche', logo: 'https://cdn.brandfetch.io/wmf.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
];


export default function ValuesVisual() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center mb-6">
            <SectionBadge text="Referenzen" variant="dark" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-sonic-dark mb-4 leading-tight tracking-tight text-center">
            WER MIT SONIC<br />ERFOLGREICH IST
          </h2>
          <p className="text-black/45 text-sm md:text-[15px] max-w-xl mx-auto leading-relaxed text-center">
            Seit 2007 vertrauen führende Marken auf unsere Expertise am Point of Sale, in Studios und auf Events.
          </p>
        </div>

        {/* Hashtag badges */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {['#Doing new things', '#Doing things better', '#Doing things', 'Team'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 border border-black/12 text-xs font-black text-black/50 uppercase tracking-wider hover:border-[#C8D400] hover:text-black transition-all duration-200 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
              tabIndex={0}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Client grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-black/8 border border-black/8 overflow-hidden mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '150ms' }}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:bg-[#F5F4F0] transition-colors duration-200 min-h-[140px]"
              style={{
                transitionDelay: `${i * 40}ms`,
              }}
              role="button"
              tabIndex={0}
              aria-label={`${client.name} — ${client.category}`}
            >
              {client.logo ? (
                <div className="mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 w-auto max-w-[140px] object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const span = document.createElement('span');
                        span.className = 'text-sm font-black text-gray-400 tracking-wide';
                        span.textContent = client.name.toUpperCase();
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="text-base md:text-lg font-black text-black mb-1 group-hover:text-sonic-dark transition-colors duration-300">{client.name}</div>
              )}
              <div className="text-[10px] md:text-xs font-bold text-black/30 uppercase tracking-wider group-hover:text-sonic-lime transition-colors duration-200 mt-auto">{client.category}</div>
            </div>
          ))}
        </div>

        {/* Impact stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/8 border border-black/8 overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {[
            { value: '>500', label: 'Projekte erfolgreich abgeschlossen', woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20briefcase%20business%20portfolio%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-about-brief-v1&orientation=squarish' },
            { value: '1,35 Mio.', label: 'Einsätze durchgeführt', woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20person%20human%20user%20profile%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-about-user-v1&orientation=squarish' },
            { value: '>100.000', label: 'POS-Umsetzungen', woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20store%20shop%20retail%20building%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-about-store-v1&orientation=squarish' },
            { value: '17+', label: 'Jahre Erfahrung im Markt', woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20calendar%20date%20time%20schedule%20icon%20carved%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-about-cal-v1&orientation=squarish' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8">
              <div className="w-8 h-8 overflow-hidden mb-3">
                <img src={stat.woodIcon} alt={stat.label} className="w-full h-full object-cover" />
              </div>
              <div className="text-xl md:text-2xl font-black text-sonic-dark leading-none mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-black/40 uppercase tracking-wider leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
