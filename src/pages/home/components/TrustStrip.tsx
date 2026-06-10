export default function TrustStrip() {
  // Exact 12 brands from ValuesVisual reference — split into 2 rows of 6
  const row1 = [
    { name: 'Philips', logo: 'https://cdn.brandfetch.io/philips.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Rowenta', logo: 'https://cdn.brandfetch.io/rowenta.de/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Krups', logo: 'https://cdn.brandfetch.io/krups.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Nexaro', logo: 'https://cdn.brandfetch.io/id2dYOZ6uf/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1773621883167' },
    { name: 'Vorwerk', logo: 'https://cdn.brandfetch.io/vorwerk.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Canon', logo: 'https://cdn.brandfetch.io/canon.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  ];

  const row2 = [
    { name: 'Garmin', logo: 'https://cdn.brandfetch.io/garmin.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: "L'Oréal", logo: 'https://cdn.brandfetch.io/loreal.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Samsung', logo: 'https://cdn.brandfetch.io/samsung.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Bosch', logo: 'https://cdn.brandfetch.io/bosch.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Dyson', logo: 'https://cdn.brandfetch.io/dyson.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
    { name: 'Groupe SEB', logo: 'https://cdn.brandfetch.io/groupeseb.com/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX' },
  ];

  const LogoCard = ({ brand }: { brand: { name: string; logo: string } }) => (
    <div
      className="flex items-center justify-center p-5 bg-white/85 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer border border-gray-100/60 hover:border-[#C8D400]/30 group"
      style={{ borderRadius: 0, height: '72px', minHeight: '72px', maxHeight: '72px' }}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-w-full h-8 object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const span = document.createElement('span');
              span.className = 'text-sm font-black text-gray-400 tracking-wide';
              span.textContent = brand.name.toUpperCase();
              parent.appendChild(span);
            }
          }}
        />
      ) : (
        <span className="text-sm font-black text-gray-400 tracking-wide group-hover:text-[#1a1a1a] transition-colors duration-300">
          {brand.name.toUpperCase()}
        </span>
      )}
    </div>
  );

  return (
    <section className="py-12 md:py-14 px-4 md:px-6 bg-transparent relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="border-t border-gray-200 pt-14">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Industry Leaders</span>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
            {row1.map((brand, i) => (
              <LogoCard key={i} brand={brand} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {row2.map((brand, i) => (
              <LogoCard key={i} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
