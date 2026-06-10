import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DYNAMIC_KEYWORDS = [
  'THINGS',
  'RETAIL',
  'POS',
  'EVENTS',
  'ACTIVATIONS',
  'COMMUNITY OUTREACH',
  'FORECASTING',
  'FIELD SALES',
  'BRAND EXPERIENCE',
  'MERCHANDISING',
  'TRADE MARKETING',
];

interface ExplosionParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  birthTime: number;
  lifetime: number;
  size: number;
  hue: number;
}

interface HeroRevampProps {
  scrolled?: boolean;
}

function useCountUp(target: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    setCount(0);
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroRevamp({ scrolled }: HeroRevampProps) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  // Parallax: normalized mouse offset (-0.5 to 0.5) relative to viewport
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const parallaxRaf = useRef<number | null>(null);
  const targetParallax = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetParallax.current = {
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      };
    };

    // Smooth lerp towards target each frame
    let running = true;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      if (!running) return;
      setParallaxOffset((prev) => {
        const nx = lerp(prev.x, targetParallax.current.x, 0.06);
        const ny = lerp(prev.y, targetParallax.current.y, 0.06);
        return Math.abs(nx - prev.x) < 0.0001 && Math.abs(ny - prev.y) < 0.0001
          ? prev
          : { x: nx, y: ny };
      });
      parallaxRaf.current = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', handleMouseMove);
    parallaxRaf.current = requestAnimationFrame(tick);
    return () => {
      running = false;
      window.removeEventListener('mousemove', handleMouseMove);
      if (parallaxRaf.current) cancelAnimationFrame(parallaxRaf.current);
    };
  }, []);

  // Depth factors per card — each moves at a slightly different rate
  const PARALLAX_DEPTHS = [5, 8, 6, 10];

  const navigate = useNavigate();

  const [keywordIndex, setKeywordIndex] = useState(0);
  const [keywordVisible, setKeywordVisible] = useState(true);
  const [phase, setPhase] = useState<'initial' | 'exploding' | 'cycling'>('initial');
  const [isShaking, setIsShaking] = useState(false);
  const keywordRef = useRef<HTMLSpanElement>(null);
  const explosionCanvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<ExplosionParticle[]>([]);
  const explosionRafRef = useRef<number>(0);

  const cycleKeyword = useCallback(() => {
    setKeywordVisible(false);
    setTimeout(() => {
      setKeywordIndex((prev) => (prev + 1) % DYNAMIC_KEYWORDS.length);
      setKeywordVisible(true);
    }, 350);
  }, []);

  useEffect(() => {
    if (phase !== 'cycling') return;
    const id = setInterval(cycleKeyword, 2400);
    return () => clearInterval(id);
  }, [cycleKeyword, phase]);

  /* ── Initial THINGS hold → explosion → start cycling ── */
  useEffect(() => {
    if (phase !== 'initial') return;

    /* Hold THINGS for 3.5 seconds */
    const holdTimer = setTimeout(() => {
      setPhase('exploding');
    }, 3500);

    return () => clearTimeout(holdTimer);
  }, [phase]);

  /* ── Explosion particle animation ── */
  useEffect(() => {
    if (phase !== 'exploding') return;

    /* Trigger subtle screen shake */
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 520);

    const canvas = explosionCanvasRef.current;
    const keywordEl = keywordRef.current;
    if (!canvas || !keywordEl) return;

    const rect = keywordEl.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    /* Size canvas to cover the keyword area plus splash radius — clamped on mobile */
    const paddingX = Math.min(120, Math.max(40, window.innerWidth * 0.12));
    const paddingY = Math.min(100, Math.max(30, window.innerHeight * 0.08));
    const cw = rect.width + paddingX * 2;
    const ch = rect.height + paddingY * 2;
    canvas.style.position = 'fixed';
    canvas.style.left = (rect.left - paddingX) + 'px';
    canvas.style.top = (rect.top - paddingY) + 'px';
    canvas.style.width = cw + 'px';
    canvas.style.height = ch + 'px';
    canvas.style.zIndex = '50';
    canvas.style.pointerEvents = 'none';
    canvas.style.display = 'block';
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const GRAVITY = 280;
    const centerX = cw / 2;
    const centerY = ch / 2 + rect.height * 0.1;

    /* Spawn particles */
    const particleCount = 45 + Math.floor(Math.random() * 20);
    const spawnTime = performance.now();
    const newParticles: ExplosionParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 180;
      newParticles.push({
        x: centerX + (Math.random() - 0.5) * rect.width * 0.9,
        y: centerY + (Math.random() - 0.5) * rect.height * 0.6,
        vx: Math.cos(angle) * speed * (0.4 + Math.random() * 0.6),
        vy: -Math.abs(Math.sin(angle)) * speed * 0.7 - Math.random() * 60,
        birthTime: spawnTime,
        lifetime: 0.65 + Math.random() * 0.7,
        size: 1.0 + Math.random() * 2.5,
        hue: 70 + Math.random() * 30,
      });
    }
    particlesRef.current = newParticles;

    /* Immediately hide the text keyword */
    setKeywordVisible(false);

    const draw = (ts: number) => {
      /* Fade-trail overlay — leaves ghostly afterglow instead of hard-clearing */
      ctx.fillStyle = 'rgba(240,235,220, 0.04)';
      ctx.fillRect(0, 0, cw, ch);

      let anyAlive = false;

      for (const p of particlesRef.current) {
        const pAge = (ts - p.birthTime) / 1000;
        const progress = pAge / p.lifetime;
        if (progress > 1) continue;
        anyAlive = true;

        const px = p.x + p.vx * pAge;
        const py = p.y + p.vy * pAge + 0.5 * GRAVITY * pAge * pAge;
        const alpha = (1 - progress) * (1 - progress) * 0.8;
        const hue = p.hue + progress * 25;

        /* glow aura */
        const glow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 2.5);
        glow.addColorStop(0, `hsla(${hue}, 45%, 88%, ${alpha * 0.55})`);
        glow.addColorStop(0.5, `hsla(${hue}, 35%, 78%, ${alpha * 0.14})`);
        glow.addColorStop(1, 'rgba(240,245,225,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        /* bright core */
        ctx.beginPath();
        ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,252,240,${alpha * 0.75})`;
        ctx.fill();
      }

      if (anyAlive) {
        explosionRafRef.current = requestAnimationFrame(draw);
      } else {
        /* Explosion done — switch to cycling */
        canvas.style.display = 'none';
        setKeywordIndex(1);
        setKeywordVisible(true);
        setPhase('cycling');
      }
    };

    explosionRafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(explosionRafRef.current);
      if (canvas) canvas.style.display = 'none';
    };
  }, [phase]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setStatsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(false);
          setTimeout(() => setStatsVisible(true), 50);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const scrollToLosungen = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('losungen');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleJoinSonic = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/careers');
  };

  const formatNumber = (num: number) => new Intl.NumberFormat('de-DE').format(num);

  const produkte = useCountUp(3700000, 1800, statsVisible);
  const umsatz = useCountUp(2000, 1600, statsVisible);
  const einsaetze = useCountUp(1350000, 1700, statsVisible);
  const videoCalls = useCountUp(50000, 1500, statsVisible);

  const statsData = [
    {
      value: produkte,
      display: (v: number) => `>${(v / 1_000_000).toFixed(1).replace('.', ',')} Mio.`,
      label: 'Produkte verkauft',
      woodIcon: 'https://readdy.ai/api/search-image?query=finely%20hand%20carved%20walnut%20wood%20victory%20laurel%20wreath%20encircling%20an%20upward%20arrow%20sculptural%20relief%20carving%20deep%20shadow%20casting%20warm%20dark%20amber%20brown%20wood%20grain%20visible%20rich%20three%20dimensional%20craftsmanship%20museum%20quality%20artisan%20object%20centered%20on%20pure%20white%20matte%20background%20studio%20product%20photography%20sharp%20focus%20dramatic%20side%20lighting&width=120&height=120&seq=wood-icon-stat-laurel-v3&orientation=squarish',
      color: '#C8D400',
    },
    {
      value: umsatz,
      display: (v: number) => `>${v >= 2000 ? '2' : (v / 1000).toFixed(1)} Mrd. €`,
      label: 'Umsatz generiert',
      woodIcon: 'https://readdy.ai/api/search-image?query=precision%20hand%20carved%20solid%20walnut%20wood%20balance%20scale%20with%20two%20equal%20pans%20sculptural%20three%20dimensional%20relief%20deep%20wood%20grain%20texture%20warm%20amber%20honey%20brown%20tone%20high%20contrast%20dramatic%20lighting%20centered%20museum%20quality%20artisan%20piece%20pure%20white%20studio%20background%20sharp%20product%20photography%20minimal&width=120&height=120&seq=wood-icon-stat-scale-v3&orientation=squarish',
      color: '#111111',
    },
    {
      value: einsaetze,
      display: (v: number) => `>${(v / 1_000_000).toFixed(2).replace('.', ',')} Mio.`,
      label: 'Einsätze',
      woodIcon: 'https://readdy.ai/api/search-image?query=hand%20carved%20solid%20walnut%20wood%20precision%20compass%20rose%20eight%20point%20navigation%20star%20deeply%20incised%20relief%20carving%20rich%20dark%20amber%20brown%20grain%20highly%20detailed%20three%20dimensional%20military%20instrument%20quality%20centered%20on%20clean%20white%20studio%20background%20dramatic%20directional%20lighting%20sharp%20focus%20artisan%20craft&width=120&height=120&seq=wood-icon-stat-compass-v3&orientation=squarish',
      color: '#C8D400',
    },
    {
      value: videoCalls,
      display: (v: number) => `>${v >= 50000 ? '50.000' : v.toLocaleString('de-DE')}`,
      label: '1:1 Live Video Calls',
      woodIcon: 'https://readdy.ai/api/search-image?query=hand%20carved%20solid%20walnut%20wood%20broadcast%20antenna%20tower%20with%20three%20concentric%20signal%20arcs%20radiating%20outward%20sculptural%20relief%20deep%20precision%20carving%20warm%20honey%20amber%20brown%20wood%20grain%20three%20dimensional%20high%20contrast%20centered%20on%20white%20studio%20background%20dramatic%20side%20lighting%20museum%20quality%20artisan%20object%20minimal&width=120&height=120&seq=wood-icon-stat-antenna-v3&orientation=squarish',
      color: '#111111',
    },
  ];

  return (
    <section className="relative pt-16 md:pt-20 pb-10 md:pb-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        {/* Hero Headline */}
        <div className={`text-center pt-8 md:pt-14 pb-8 md:pb-14 px-2 ${isShaking ? '[animation:shake_0.5s_cubic-bezier(.36,.07,.19,.97)_both]' : ''}`}>
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translate(0, 0); }
              10% { transform: translate(-2px, -1px); }
              20% { transform: translate(3px, 2px); }
              30% { transform: translate(-4px, -1px); }
              40% { transform: translate(2px, -2px); }
              50% { transform: translate(-2px, 3px); }
              60% { transform: translate(3px, 0px); }
              70% { transform: translate(-3px, -2px); }
              80% { transform: translate(1px, 2px); }
              90% { transform: translate(-1px, -1px); }
            }
          `}</style>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-sonic-dark mb-4 md:mb-6 leading-[1.05] tracking-tight">
            WE HAVE A<br />
            STRATEGIC PLAN.<br />
            {/* DOING + keyword bounce in unison */}
            <span
              className="inline-block"
              style={{
                opacity: keywordVisible ? 1 : 0,
                transform: keywordVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: phase === 'initial' ? 'none' : 'opacity 0.35s ease, transform 0.35s ease',
              }}
            >
              <span className="text-sonic-dark">IT&apos;S CALLED DOING</span>
              <br />
              <span
                ref={keywordRef}
                className="text-sonic-lime inline-block relative text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.08)',
                }}
              >
                {DYNAMIC_KEYWORDS[keywordIndex]}
              </span>
            </span>
            <canvas ref={explosionCanvasRef} style={{ display: 'none' }} aria-hidden="true" />
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-0 leading-relaxed max-w-3xl mx-auto">
            People powered. Data proven.
          </p>
        </div>

        {/* Modern Dual CTA */}
        <div
          ref={ctaRef}
          className="max-w-6xl mx-auto relative"
          onMouseMove={handleMouseMove}
        >
          {/* Cursor-following glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl transition-all duration-700 ease-out z-0"
            style={{
              background:
                hoveredSide === 'left'
                  ? 'radial-gradient(circle, #1A1A1A 0%, transparent 70%)'
                  : hoveredSide === 'right'
                  ? 'radial-gradient(circle, #C8D400 0%, transparent 70%)'
                  : 'none',
              left: `${mousePos.x}%`,
              top: `${mousePos.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] overflow-hidden shadow-2xl ring-1 ring-black/5">
            {/* LEFT — For Brands — DARK GLASS */}
            <a
              href="#losungen"
              onClick={scrollToLosungen}
              className="relative group cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2"
              onMouseEnter={() => setHoveredSide('left')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              {/* Solid dark glass */}
              <div className="absolute inset-0 transition-all duration-700" style={{ background: '#111111' }} />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(200,212,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#C8D400]/10 via-transparent to-[#C8D400]/5 transition-opacity duration-700 ${
                  hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className={`absolute top-0 left-0 w-24 h-24 transition-all duration-700 ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8D400] to-transparent" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-[#C8D400] to-transparent" />
              </div>
              <div className={`absolute bottom-0 right-0 w-24 h-24 transition-all duration-700 ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#C8D400] to-transparent" />
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-[#C8D400] to-transparent" />
              </div>

              <div className="relative z-10 p-7 md:p-10 lg:p-12 flex flex-col" style={{ minHeight: 'clamp(280px, 50vw, 420px)' }}>
                <div className="flex items-center gap-2 mb-5 md:mb-8">
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 ${hoveredSide === 'left' ? 'bg-[#C8D400] shadow-lg shadow-[#C8D400]/50 scale-125' : 'bg-[#C8D400]/50'}`} />
                  <span className="text-sonic-lime/70 text-xs font-bold tracking-widest uppercase">Daten Liefern Fakten.</span>
                </div>
                <div className={`w-12 h-12 md:w-16 md:h-16 overflow-hidden mb-5 md:mb-8 transition-all duration-500 ring-1 ring-white/10 ${hoveredSide === 'left' ? 'scale-110 ring-sonic-lime/40 shadow-xl shadow-sonic-lime/20' : ''}`}>
                  <img
                    src="https://readdy.ai/api/search-image?query=carved%20wooden%20chart%20icon%20rising%20bar%20graph%20symbol%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20brown%20color%20simple%20minimalist%20business%20growth%20icon%20handcrafted%20artisan%20quality%20on%20white%20background%20top%20view%20product%20photography&width=120&height=120&seq=wood-carved-chart-icon-walnut&orientation=squarish"
                    alt="Datenicon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight tracking-tight">
                  SUCHST DU EINE<br />
                  <span className={`transition-colors duration-500 ${hoveredSide === 'left' ? 'text-[#C8D400]' : 'text-white/60'}`}>
                    AGENTUR
                  </span>
                  <br />
                  MIT POWER?
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
                  Dein Full-Service-Partner für Performance Marketing, Retail-Aktivierung und nachhaltiges Markenwachstum.
                </p>
                <div className="flex-grow" />
                <div className="flex items-center gap-4">
                  <span className="relative inline-flex items-center gap-2 font-bold text-xs sm:text-sm transition-all duration-500 whitespace-nowrap max-w-full">
                    <span className="absolute inset-0 overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=400&height=80&seq=wood-texture-btn-left-1&orientation=landscape"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <span className={`absolute inset-0 transition-all duration-500 ${hoveredSide === 'left' ? 'bg-[#C8D400]/90' : 'bg-black/50'}`} />
                    </span>
                    <span className="relative z-10 flex items-center gap-2 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 transition-all duration-500 text-white text-xs sm:text-sm whitespace-nowrap">
                      Starte deinen Markteintritt
                      <i className={`ri-arrow-right-line transition-transform duration-300 ${hoveredSide === 'left' ? 'translate-x-1' : ''}`} />
                    </span>
                    <span className={`absolute inset-0 ring-2 transition-all duration-500 ${hoveredSide === 'left' ? 'ring-[#C8D400]/60 shadow-lg shadow-[#C8D400]/20' : 'ring-white/10'}`} />
                  </span>
                </div>
              </div>
            </a>

            {/* CENTER — Wood Divider — hidden on mobile, shown as horizontal line */}
            <div className="relative w-full h-1 md:w-6 md:h-auto hidden md:block z-20" aria-hidden="true">
              <img
                src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=60&height=600&seq=wood-texture-divider-vertical-1&orientation=portrait"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8D400]/40 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8D400]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
            </div>

            {/* RIGHT — For Talent — LIGHT GLASS */}
            <a
              href="/careers"
              onClick={handleJoinSonic}
              className="relative group cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2"
              onMouseEnter={() => setHoveredSide('right')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              {/* Frosted light glass */}
              <div className="absolute inset-0 bg-white transition-all duration-700" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #1A1A1A 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br from-[#C8D400]/8 via-transparent to-[#C8D400]/5 transition-opacity duration-700 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`absolute top-0 right-0 w-24 h-24 transition-all duration-700 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#C8D400] to-transparent" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#C8D400] to-transparent" />
              </div>
              <div className={`absolute bottom-0 left-0 w-24 h-24 transition-all duration-700 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8D400] to-transparent" />
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[#C8D400] to-transparent" />
              </div>

              <div className="relative z-10 p-7 md:p-10 lg:p-12 flex flex-col" style={{ minHeight: 'clamp(280px, 50vw, 420px)' }}>
                <div className="flex items-center gap-2 mb-5 md:mb-8">
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 ${hoveredSide === 'right' ? 'bg-[#C8D400] shadow-lg shadow-[#C8D400]/50 scale-125' : 'bg-gray-300'}`} />
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Mensch. Der Unterschied.</span>
                </div>
                <div className={`w-12 h-12 md:w-16 md:h-16 overflow-hidden mb-5 md:mb-8 transition-all duration-500 ring-1 ring-gray-200 ${hoveredSide === 'right' ? 'scale-110 ring-sonic-lime/40 shadow-xl shadow-sonic-lime/20' : ''}`}>
                  <img
                    src="https://readdy.ai/api/search-image?query=carved%20wooden%20people%20icon%20team%20group%20symbol%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20brown%20color%20simple%20minimalist%20human%20figures%20icon%20handcrafted%20artisan%20quality%20on%20white%20background%20top%20view%20product%20photography&width=120&height=120&seq=wood-carved-team-icon-walnut&orientation=squarish"
                    alt="Sonic Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-sonic-dark mb-3 leading-tight tracking-tight">
                  SUCHST DU EINEN<br />
                  <span className={`transition-colors duration-500 ${hoveredSide === 'right' ? 'text-[#C8D400]' : 'text-gray-400'}`}>
                    JOB
                  </span>
                  <br />
                  MIT ENERGIE?
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
                  Arbeite für die größten Marken Deutschlands — und mach sie noch erfolgreicher.
                </p>
                <div className="flex-grow" />
                <div className="flex items-center gap-4">
                  <span className="relative inline-flex items-center gap-2 font-bold text-xs sm:text-sm transition-all duration-500 whitespace-nowrap max-w-full">
                    <span className="absolute inset-0 overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=400&height=80&seq=wood-texture-btn-right-1&orientation=landscape"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <span className={`absolute inset-0 transition-all duration-500 ${hoveredSide === 'right' ? 'bg-[#C8D400]/90' : 'bg-black/40'}`} />
                    </span>
                    <span className="relative z-10 flex items-center gap-2 px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 transition-all duration-500 text-white text-xs sm:text-sm whitespace-nowrap">
                      Komm zu Sonic
                      <i className={`ri-arrow-right-line transition-transform duration-300 ${hoveredSide === 'right' ? 'translate-x-1' : ''}`} />
                    </span>
                    <span className={`absolute inset-0 ring-2 transition-all duration-500 ${hoveredSide === 'right' ? 'ring-[#C8D400]/60 shadow-lg shadow-[#C8D400]/20' : 'ring-gray-200/40'}`} />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* ── Stats Strip ── */}
          <div ref={statsRef} className="mt-6 md:mt-8">

            {/* 4 Stat Cards — aria-live for count-up announcements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4" aria-live="polite" aria-atomic="true">
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  className="relative bg-white/60 backdrop-blur-md px-4 md:px-6 py-5 md:py-7 text-center ring-1 ring-gray-200/60 hover:ring-[#C8D400]/50 hover:bg-white/75 hover:shadow-xl transition-all duration-400 group cursor-default overflow-hidden"
                  style={{
                    borderRadius: 0,
                    transform: `translateX(${parallaxOffset.x * PARALLAX_DEPTHS[i]}px) translateY(${parallaxOffset.y * PARALLAX_DEPTHS[i] * 0.6}px)`,
                    transition: 'transform 0.08s linear, ring-color 0.4s, background-color 0.4s, box-shadow 0.4s',
                    willChange: 'transform',
                  }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#C8D400]/5 to-transparent transition-opacity duration-400 ${hoveredStat === i ? 'opacity-100' : 'opacity-0'}`} />

                  <div
                    className="w-10 h-10 md:w-14 md:h-14 overflow-hidden mx-auto mb-2 md:mb-3 shadow-md transition-all duration-400 ring-2"
                    style={{
                      borderRadius: 0,
                      transform: hoveredStat === i ? 'scale(1.12)' : 'scale(1)',
                      boxShadow: hoveredStat === i
                        ? '0 6px 20px rgba(139,90,43,0.35), 0 0 12px rgba(200,212,0,0.2)'
                        : '0 2px 8px rgba(139,90,43,0.18)',
                      outline: hoveredStat === i ? '2px solid rgba(200,212,0,0.5)' : '2px solid transparent',
                    }}
                  >
                    <img
                      src={stat.woodIcon}
                      alt={stat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className="text-xl md:text-2xl lg:text-3xl font-black font-sans tabular-nums mb-1 leading-tight transition-all duration-400 group-hover:scale-105"
                    style={{ color: i % 2 === 0 ? '#C8D400' : '#1A1A1A' }}
                  >
                    {stat.display(stat.value)}
                  </div>

                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider leading-tight line-clamp-2">
                    {stat.label}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-[3px] bg-[#C8D400] transition-all duration-500 ${hoveredStat === i ? 'w-full' : 'w-0'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
