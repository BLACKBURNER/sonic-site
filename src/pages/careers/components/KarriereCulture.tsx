import { useState, useEffect } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

const values = [
  {
    num: '01',
    title: 'Gemeinschaftlich',
    desc: 'Nur als Team sind wir Sonic. Wir unterstützen uns gegenseitig und lernen voneinander.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20team%20people%20group%20community%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20team%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-team-culture-01&orientation=squarish',
  },
  {
    num: '02',
    title: 'Menschlich',
    desc: 'Wir wollen, dass du erfolgreich sein kannst. Das beginnt bei uns mit gegenseitiger Wertschätzung.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20heart%20love%20care%20human%20warmth%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20heart%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-heart-culture-02&orientation=squarish',
  },
  {
    num: '03',
    title: 'Flexibel',
    desc: 'Wir finden uns gern in neue Situationen ein und bestärken uns darin, Neues auszuprobieren.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20arrows%20refresh%20cycle%20flexibility%20adaptability%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20arrows%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-flex-culture-03&orientation=squarish',
  },
  {
    num: '04',
    title: 'Einfachheit',
    desc: 'Klarer Fokus auf das Wesentliche: gute Strukturen, kurze Wege, praktische Tools.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20target%20focus%20simplicity%20clarity%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20target%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-focus-culture-04&orientation=squarish',
  },
  {
    num: '05',
    title: 'Verantwortung',
    desc: 'Unsere Stärken und Fähigkeiten setzen wir verantwortungsbewusst ein. So ergänzen wir uns perfekt.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20shield%20protection%20responsibility%20accountability%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20shield%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-shield-culture-05&orientation=squarish',
  },
  {
    num: '06',
    title: 'Arbeitsumfeld',
    desc: 'Aufgaben, die zu deiner Persönlichkeit passen. Menschen, mit denen man gerne zusammenarbeitet.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20building%20office%20workplace%20environment%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20building%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=80&height=80&seq=wood-building-culture-06&orientation=squarish',
  },
];

export default function KarriereCulture() {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const [hoveredPolaroid1, setHoveredPolaroid1] = useState(false);
  const [hoveredPolaroid2, setHoveredPolaroid2] = useState(false);

  // Dynamically load Google Reviews widget script
  useEffect(() => {
    if (document.querySelector('script[src*="grwapi.net"]')) return;
    const script = document.createElement('script');
    script.src = 'https://grwapi.net/widget.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* ── DARUM SONIC ── */}
      <section id="kultur" className="py-14 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8D400]/5 blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <SectionBadge text="Darum Sonic" variant="light" className="mb-5" />
              <h2 className="text-4xl md:text-5xl font-black text-sonic-dark leading-tight tracking-tight mb-1">
                STARKE MENSCHEN
              </h2>
              <h2 className="text-4xl md:text-5xl font-black text-sonic-dark leading-tight tracking-tight mb-5">
                FÜR STARKE MARKEN
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Wir lieben und leben Marken, insbesondere am Point of Sale, auf Messen, bei Events, auf Roadshows und per Video aus unseren Studios an unserem Campus in Krefeld.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                Energiegeladen und sympathisch: Diese Beschreibung passt auf die Menschen, die bei Sonic arbeiten. Passt sie auch auf dich? Dann sollten wir uns kennenlernen. Uns interessiert, wie du an Dinge herangehst, welche Talente du hast und was deine Stärken sind. Ärmel hochkrempeln und anpacken gehört zu unserem Alltag genauso wie im Team über neue Ideen nachdenken.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Energie', 'Sympathie', 'Anpacken', 'Teamgeist', 'Kreativität'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-[#C8D400]/10 text-sonic-dark font-black text-xs uppercase tracking-wide border border-[#C8D400]/30"
                    style={{ borderRadius: 0 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Image collage */}
            <div className="grid grid-cols-2 gap-3">
              {/* Full-width polaroid */}
              <div
                className="col-span-2 relative"
                onMouseEnter={() => setHoveredPolaroid1(true)}
                onMouseLeave={() => setHoveredPolaroid1(false)}
                style={{
                  background: '#f5f2ec',
                  padding: '6px 6px 40px 6px',
                  boxShadow: hoveredPolaroid1
                    ? '0 20px 56px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)'
                    : '0 10px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)',
                  transform: hoveredPolaroid1
                    ? 'rotate(0deg) translateY(-4px)'
                    : 'rotate(-0.6deg)',
                  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                }}
              >
                <div className="relative overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://www.sonic-group.de/wp-content/uploads/2025/10/image002Sonic-Hp.png"
                    alt="Sonic Team am Campus Krefeld"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
                </div>
                {/* Caption strip */}
                <div className="flex flex-col items-center justify-center pt-2 pb-0.5 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")', backgroundSize: '120px 120px', opacity: 0.55, mixBlendMode: 'multiply' }} />
                  <div className="relative z-10 text-[9px] font-black uppercase tracking-[0.14em] text-[#111]/65 leading-none">Sonic Campus Krefeld</div>
                  <div className="relative z-10 text-[7px] font-medium uppercase tracking-[0.1em] text-[#111]/35 mt-0.5">Team & Kultur</div>
                </div>
              </div>

              {/* Second polaroid */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredPolaroid2(true)}
                onMouseLeave={() => setHoveredPolaroid2(false)}
                style={{
                  background: '#f5f2ec',
                  padding: '5px 5px 36px 5px',
                  boxShadow: hoveredPolaroid2
                    ? '0 16px 44px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)'
                    : '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.07)',
                  transform: hoveredPolaroid2
                    ? 'rotate(0deg) translateY(-3px)'
                    : 'rotate(0.8deg)',
                  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                }}
              >
                <div className="relative overflow-hidden" style={{ height: '130px' }}>
                  <img
                    src="https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg"
                    alt="Sonic Team Präsentation"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
                </div>
                {/* Caption strip */}
                <div className="flex flex-col items-center justify-center pt-2 pb-0.5 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px', opacity: 0.5, mixBlendMode: 'multiply' }} />
                  <div className="relative z-10 text-[8px] font-black uppercase tracking-[0.12em] text-[#111]/65 leading-none">Team Präsentation</div>
                  <div className="relative z-10 text-[7px] font-medium uppercase tracking-[0.1em] text-[#111]/35 mt-0.5">Sonic Sales</div>
                </div>
              </div>

              {/* Stat block stays as-is */}
              <div className="h-36 overflow-hidden bg-[#f7f6f3] flex items-center justify-center p-5" style={{ borderRadius: 0 }} role="img" aria-label="Durchschnittliche Betriebszugehörigkeit: 5,15 Jahre">
                <div className="text-center">
                  <div className="text-3xl font-black text-sonic-lime font-sans tabular-nums mb-1">Ø 5,15 J.</div>
                  <div className="text-gray-600 text-xs font-bold uppercase tracking-wide">Betriebs&shy;zugehörigkeit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUSGEZEICHNET ── */}
      <section id="ausgezeichnet" className="py-12 md:py-16 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-[1fr_560px] gap-10 md:gap-14 items-start">
            {/* Left: text — NO Kununu here anymore */}
            <div>
              <SectionBadge text="Ausgezeichnet" variant="light" className="mb-5" />
              <h2 className="text-3xl lg:text-4xl font-black text-sonic-dark mb-4 leading-tight tracking-tight uppercase">
                Kultur? Leben wir.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-6">
                Wir geben jeden Tag unser Bestes, damit unsere Agentur ein erstklassiger Ort zum Arbeiten ist. Die Auszeichnung zur „Kununu Top Company" haben wir 2022, 2023, 2024, 2025 und 2026 erhalten. Auch die Bewertungen bei Google sind durchgehend sehr positiv.
              </p>
              {/* Platform badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'ri-star-fill', label: 'Kununu', sub: 'Top Company 2022–2026' },
                  { icon: 'ri-star-fill', label: 'Google', sub: 'Sehr positiv' },
                  { icon: 'ri-star-fill', label: 'Glassdoor', sub: 'Sehr positiv' },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-[#f7f6f3] border border-gray-200 hover:border-[#C8D400]/40 transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    <div className="w-7 h-7 flex items-center justify-center bg-[#C8D400]/15" style={{ borderRadius: 0 }}>
                      <i className={`${b.icon} text-sm text-[#C8D400]`} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#111] uppercase tracking-wide">{b.label}</div>
                      <div className="text-xs text-gray-400 font-bold">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: two columns side by side — Award Siegel + Google Reviews */}
            <div className="grid grid-cols-2 gap-4 items-start">

              {/* Column A — Top Company Siegel + Kununu badge below */}
              <div className="flex flex-col items-center gap-3">
                {/* Siegel image — prominently showcased */}
                <div
                  className="relative w-full bg-white border border-gray-100 flex items-center justify-center p-4 overflow-hidden"
                  style={{ borderRadius: 0 }}
                >
                  {/* Corner lime accents */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#C8D400]/50" />
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#C8D400]/50" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#C8D400]/50" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#C8D400]/50" />
                  <img
                    src="https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/300d4ef6-7bf4-4959-8eb1-a129d4aea934_top-company-siegel-5-jahre-in-folge-scaled.jpg?v=5ae539f36ba3abceac53aa630e585931"
                    alt="Kununu Top Company Siegel — 5 Jahre in Folge"
                    className="w-full object-contain"
                    style={{ maxHeight: '220px' }}
                  />
                </div>

                {/* Label */}
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
                  Arbeitgeber-Profil
                </p>

                {/* Kununu badge — directly under the siegel */}
                <a
                  href="https://kununu.com/de/sonic-sales-support1?rfr=affiliate_widget&utm_content=widget_logo&utm_medium=affiliate_widget"
                  rel="nofollow noopener"
                  target="_blank"
                  className="inline-block hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <img
                    alt="kununu Top Company — Sonic Group"
                    src="https://widgets.kununu.com/widget_logo/profiles/71cce505-4438-43a5-8cd5-f09a2ac33372"
                    className="h-14 object-contain"
                  />
                </a>
              </div>

              {/* Column B — Live Google Reviews widget */}
              <div className="relative">
                {/* Lime accent bar top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8D400] z-10" style={{ borderRadius: 0 }} />
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#C8D400]/60 z-10" />
                <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#C8D400]/60 z-10" />

                <div
                  className="overflow-hidden border border-gray-100 bg-white pt-3"
                  style={{ borderRadius: 0 }}
                >
                  {/* Widget header */}
                  <div className="px-4 pb-3 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center bg-[#C8D400]/15" style={{ borderRadius: 0 }}>
                        <i className="ri-google-line text-sm text-[#C8D400]" />
                      </div>
                      <span className="text-xs font-black text-[#1a1a1a] uppercase tracking-wide">Google Bewertungen</span>
                    </div>
                    <span className="text-xs font-black text-[#C8D400]">★ ★ ★ ★ ★</span>
                  </div>

                  {/* Live Google Reviews embed */}
                  <div className="p-2" style={{ minHeight: '260px' }}>
                    <div
                      className="review-widget_net"
                      data-uuid="7dbbb497-b790-469b-8003-19ea58b8a80e"
                      data-template="10"
                      data-lang="de"
                      data-theme="light"
                    />
                  </div>

                  {/* Footer strip */}
                  <div className="px-4 py-2.5 bg-[#f7f6f3] flex items-center justify-between">
                    <span className="text-xs font-black text-gray-600 uppercase tracking-widest">Echte Bewertungen</span>
                    <span className="text-xs font-black text-[#C8D400]">Verifiziert</span>
                  </div>
                </div>

                {/* Bottom corner accents */}
                <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#C8D400]/60 z-10" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#C8D400]/60 z-10" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SONIC WERTE ── */}
      <section id="werte" className="py-14 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8D400]/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <SectionBadge text="Sonic-Werte" variant="light" className="mb-5" />
            <h2 className="text-4xl md:text-5xl font-black text-sonic-dark leading-tight tracking-tight mb-2">
              DIESE WERTE
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-sonic-dark leading-tight tracking-tight mb-4">
              LEBEN WIR
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              Wir stellen uns auf dich ein, wenn du dich auf unsere Werte einstellen kannst.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
            {values.map((val, idx) => (
              <div
                key={val.num}
                className="group relative overflow-hidden border-r border-b border-gray-200 cursor-pointer transition-all duration-300"
                style={{
                  borderRadius: 0,
                  background: activeValue === idx ? '#f7f6f3' : 'transparent',
                  minHeight: '200px',
                }}
                onMouseEnter={() => setActiveValue(idx)}
                onMouseLeave={() => setActiveValue(null)}
                role="button"
                tabIndex={0}
                aria-label={`${val.title} — ${val.desc}`}
                onFocus={() => setActiveValue(idx)}
                onBlur={() => setActiveValue(null)}
              >
                {/* Number watermark */}
                <div
                  className="absolute top-3 right-3 text-6xl font-black leading-none pointer-events-none select-none transition-colors duration-300"
                  style={{ color: activeValue === idx ? 'rgba(200,212,0,0.25)' : 'rgba(0,0,0,0.04)', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {val.num}
                </div>

                <div className="relative z-10 p-6 md:p-8">
                  <div
                    className="w-10 h-10 overflow-hidden mb-4 transition-all duration-300"
                    style={{
                      borderRadius: 0,
                      boxShadow: activeValue === idx
                        ? '0 4px 14px rgba(139,90,43,0.35), 0 0 8px rgba(200,212,0,0.15)'
                        : '0 2px 6px rgba(139,90,43,0.18)',
                      transform: activeValue === idx ? 'scale(1.08)' : 'scale(1)',
                    }}
                  >
                    <img
                      src={(val as typeof val & { woodIcon: string }).woodIcon}
                      alt={val.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C8D400] font-black text-xs tracking-widest">{val.num}</span>
                    <div className="flex-1 h-px bg-white/8 group-hover:bg-[#C8D400]/30 transition-colors"></div>
                  </div>
                  <h3
                    className="text-base font-black uppercase tracking-wide mb-2 transition-colors duration-300 text-sonic-dark"
                  >
                    {val.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed transition-colors duration-300 text-gray-500"
                  >
                    {val.desc}
                  </p>
                </div>
                {/* Bottom lime accent on hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#C8D400] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
