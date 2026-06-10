import { useRef, useEffect, useState, useCallback } from 'react';
import { useSEO } from '@/hooks/useSEO';
import Navigation from '../../../components/feature/Navigation';
import LeistungenPageNav from '../../../components/feature/LeistungenPageNav';
import LeistungenKontakt from '../../../components/feature/LeistungenKontakt';
import ScrollToTopButton from '../../../components/feature/ScrollToTopButton';
import WoodenDivider from '../../../components/base/WoodenDivider';
import ClientProof from '../../../components/feature/ClientProof';
import KreationShowcase from './components/KreationShowcase';
import Carousel3D from './components/Carousel3D';
import SectionBadge from '../../../components/base/SectionBadge';
import ChallengeSection from '../../../components/feature/ChallengeSection';
import type { ChallengeItem } from '../../../components/feature/ChallengeSection';
import { CONTACT_EMAIL } from '@/lib/contact';

const NAV_ITEMS = [
  { id: 'loesung', label: 'Lösung', icon: 'ri-lightbulb-line' },
  { id: 'konzept', label: 'Konzept & Kreation', icon: 'ri-palette-line' },
  { id: 'content-creation', label: 'Content Creation', icon: 'ri-camera-line' },
  { id: 'cgi-3d', label: 'CGI & 3D', icon: 'ri-box-3-line' },
  { id: 'referenzen', label: 'Referenzen', icon: 'ri-chat-quote-line' },
  { id: 'kontakt', label: 'Kontakt', icon: 'ri-calendar-line' },
];

const KREATION_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-puzzle-line',
    title: 'Wenig Added Value',
    desc: 'Social Content, How-to-Videos, POS-Branding, Events: Oft aus verschiedenen Quellen, und nicht immer optimal aufeinander abgestimmt.',
    trigger: 'Auch bei euch so?',
  },
  {
    icon: 'ri-contrast-2-line',
    title: 'Uneinheitlicher Look',
    desc: 'Unterschiedliche Teams, Designer, Locations, Presenter, Herangehensweisen: Der Content wirkt nicht wie aus einem Guss.',
    trigger: 'Klingt vertraut?',
  },
  {
    icon: 'ri-time-line',
    title: 'Koordinationsaufwand',
    desc: 'Schwierig: Verschiedene Content-Lieferanten so zu koordinieren, dass die richtigen Botschaften zum richtigen Zeitpunkt fertig sind.',
    trigger: 'Schon frustriert?',
  },
];

const SOLUTIONS = [
  {
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20lightbulb%20idea%20concept%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-kreation-sol-bulb-01&orientation=squarish',
    num: '01',
    title: '(Kampagnen-)Konzeption',
    desc: 'Wir arbeiten heraus, wofür deine Marke steht und wie begeisternder Content aussehen könnte. From scratch oder adaptiert von deiner globalen Strategie.',
    tags: ['Strategie', 'Konzept', 'Kampagne'],
  },
  {
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20paintbrush%20palette%20design%20creative%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-kreation-sol-palette-02&orientation=squarish',
    num: '02',
    title: 'Content Creation & Design',
    desc: 'Wir erstellen die Vorlagen für die Realisierung: Gestaltung plus Briefings / Texte / Scripts. Für Print / Packaging / POS, Digital / Shop, Social / Video.',
    tags: ['Design', 'Print', 'Digital'],
  },
  {
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20camera%20photography%20video%20production%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-kreation-sol-camera-03&orientation=squarish',
    num: '03',
    title: 'Foto- & Video-Produktion',
    desc: 'Produktfotos und -filme, 3D / CGI / AI, Social Clips, Lifestyle-Shots, Event-Dokus, Imagefilme — in eigenen Studios und on Location.',
    tags: ['Foto', 'Video', 'CGI'],
  },
  {
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20document%20file%20copy%20asset%20production%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-kreation-sol-file-04&orientation=squarish',
    num: '04',
    title: 'Asset-Produktion',
    desc: 'Post Production, Reinzeichnungen, Druck, Möbel- und Messebau, Content einpflegen / ausspielen.',
    tags: ['Post-Pro', 'Druck', 'Rollout'],
  },
];

const STATS = [
  { val: 480, suffix: '+', label: 'Kampagnen' },
  { val: 12000, suffix: '+', label: 'Assets produziert' },
  { val: 6, suffix: '', label: 'Inhouse-Studios' },
];

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  const run = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    let startTime: number | null = null;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.round(easeOutQuart(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (start) run();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, run]);

  return count;
}

/* ── Animated stat item ── */
function AnimatedStat({
  val, suffix, label, delay, triggered,
}: {
  val: number; suffix: string; label: string; delay: number; triggered: boolean;
}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [triggered, delay]);
  const count = useCountUp(val, 1400, active);

  return (
    <div className="text-center">
      <div className="text-3xl font-black text-[#1A1A1A] tabular-nums">
        {active ? count.toLocaleString('de-DE') : '0'}{suffix}
      </div>
      <div className="text-black/30 text-xs font-black uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

const WOOD_ICONS = [
  {
    img: 'https://readdy.ai/api/search-image?query=wooden%20paintbrush%20creative%20design%20palette%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=120&height=120&seq=wood-kreation-icon&orientation=squarish',
    label: 'Kreation',
  },
  {
    img: 'https://readdy.ai/api/search-image?query=wooden%20tools%20production%20gear%20workshop%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=120&height=120&seq=wood-produktion-icon&orientation=squarish',
    label: 'Produktion',
  },
  {
    img: 'https://readdy.ai/api/search-image?query=wooden%20cube%20box%203D%20geometric%20design%20icon%20carved%20from%20dark%20walnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=120&height=120&seq=wood-cgi-3d-icon&orientation=squarish',
    label: 'CGI & 3D',
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Wooden icons strip with stagger scroll reveal ── */
function WoodIconsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-14 px-6 border-b border-[#111]/8">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="grid grid-cols-3 gap-8">
          {WOOD_ICONS.map((w, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`,
              }}
            >
              {/* Icon with subtle lift on hover */}
              <div
                className="w-16 h-16 overflow-hidden group cursor-default"
                style={{
                  borderRadius: 0,
                  transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.06)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'; }}
              >
                <img src={w.img} alt={w.label} className="w-full h-full object-cover" />
              </div>
              {/* Label with animated underline */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-black text-[#111]/55 uppercase tracking-widest">{w.label}</span>
                {/* Thin lime underline draws in after icon appears */}
                <div
                  style={{
                    height: '1px',
                    background: '#C8D400',
                    width: visible ? '24px' : '0px',
                    transition: `width 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 120 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function KreationContentPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionScroll = useRef<HTMLDivElement>(null);
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const solutionReveal = useReveal();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsTriggered(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useSEO({
    title: 'Kreation & Content | Sonic Group — Inhouse Foto, Video & CGI DACH',
    description: 'Kreation & Content von Sonic Group: Inhouse Foto- und Videoproduktion, CGI & 3D, Social Content und POS-Design für Marken im DACH-Raum. Alles aus einer Hand.',
    keywords: 'Content Produktion DACH, Inhouse Studio, CGI 3D Produktion, POS Design, Social Content Agentur',
    canonical: 'https://sonic-group.de/leistungen/kreation-content',
    ogTitle: 'Kreation & Content — Sonic Group DACH',
    ogDescription: 'Inhouse Foto, Video, CGI & POS-Design für Marken im DACH-Raum.',
  });

  const scrollCards = (ref: React.RefObject<HTMLDivElement>, dir: 'left' | 'right') => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <LeistungenPageNav items={NAV_ITEMS} heroRef={heroRef} />

      {/* ── HERO + CAROUSEL — one unified composition on warm background ── */}
      <div ref={heroRef}>
        <section
          className="relative w-full overflow-hidden"
          style={{ background: '#ffffff', paddingTop: '120px', paddingBottom: '0' }}
        >
          {/* Lime radial glow — very subtle, behind headline */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '1000px',
              height: '600px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(200,212,0,0.09) 0%, transparent 65%)',
            }}
          />

          {/* Hero copy */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-black/30 text-xs font-bold uppercase tracking-widest">Leistungen</span>
              <i className="ri-arrow-right-s-line text-black/25 text-sm"></i>
              <span className="text-[#C8D400] text-xs font-black uppercase tracking-widest">Kreation &amp; Content</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-[#C8D400]/10 border border-[#C8D400]/25 px-4 py-1.5 mb-10"
              style={{ borderRadius: 0 }}
            >
              <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" style={{ borderRadius: 0 }} />
              <span className="text-xs font-black text-[#1A1A1A] uppercase tracking-widest">Inhouse Kreation &amp; Content</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-6 leading-tight tracking-tight">
              Kreation,<br />
              <span style={{ color: '#C8D400' }}>die verkauft.</span>
            </h1>

            <p className="text-base md:text-lg text-black/50 max-w-2xl mx-auto leading-relaxed mb-10">
              Von Kampagnenkonzept bis Rollout — Foto, Video, CGI und POS-Design aus einer Hand.
            </p>

            {/* Stats — count-up on scroll into view */}
            <div ref={statsRef} className="flex flex-wrap items-center justify-center gap-10 mb-12">
              {STATS.map((s, i) => (
                <AnimatedStat
                  key={i}
                  val={s.val}
                  suffix={s.suffix}
                  label={s.label}
                  delay={i * 120}
                  triggered={statsTriggered}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="mailto:${CONTACT_EMAIL}`?subject=Kreation%20Content%20Beratung"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-7 py-3 font-black hover:bg-[#C8D400] hover:text-[#1A1A1A] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                style={{ borderRadius: 0 }}
              >
                <i className="ri-calendar-line"></i>Content-Beratung buchen
              </a>
              <a
                href="/leistungen/live-video"
                className="inline-flex items-center gap-2 border-2 border-black/12 text-black/60 px-6 py-3 font-black hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                style={{ borderRadius: 0 }}
              >
                Live Video<i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          </div>

          {/* Carousel — same background, flows directly below copy */}
          <Carousel3D />
        </section>
      </div>

      <WoodenDivider />

      {/* Wooden icons strip — stagger reveal on scroll */}
      <WoodIconsStrip />

      {/* ── CHALLENGE — shared dark component ── */}
      <ChallengeSection
        id="loesung"
        headline="Content aus zu vielen Einzelteilen."
        subline="Assets kommen oft aus verschiedenen Quellen."
        challenges={KREATION_CHALLENGES}
      />

      <WoodenDivider />

      {/* ── SOLUTION — light warm bg (directly after dark ChallengeSection), subtle tint matching homepage ── */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAFDF5 0%, #ffffff 100%)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/8 blur-[120px] pointer-events-none" />
        <div
          ref={solutionReveal.ref}
          className="relative max-w-7xl mx-auto"
          style={{
            opacity: solutionReveal.visible ? 1 : 0,
            transform: solutionReveal.visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5" style={{ borderRadius: 0 }}>
                <i className="ri-check-double-line text-[#111] text-sm" />
                <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Lösung</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-3 leading-tight uppercase">
                Content aus einer Hand.<br /><span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>Inhouse.</span>
              </h2>
              <p className="text-[#111]/50 text-base max-w-2xl">Von Kampagnenkonzept bis Design und Roll-out, von Fotografie bis zu (Live) Video.</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => scrollCards(solutionScroll, 'left')} className="w-10 h-10 flex items-center justify-center border border-[#111]/15 text-[#111]/50 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" style={{ borderRadius: 0 }}>
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button onClick={() => scrollCards(solutionScroll, 'right')} className="w-10 h-10 flex items-center justify-center border border-[#111]/15 text-[#111]/50 hover:border-[#111] hover:text-[#111] transition-all duration-200 cursor-pointer" style={{ borderRadius: 0 }}>
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </div>
          </div>

          <div
            ref={solutionScroll}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SOLUTIONS.map((s, i) => {
              const isHov = hoveredSolution === i;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 snap-start relative overflow-hidden group cursor-default"
                  style={{
                    width: 'clamp(280px, 30vw, 360px)',
                    minHeight: '300px',
                    background: isHov ? '#111' : '#ffffff',
                    border: `1px solid ${isHov ? 'rgba(200,212,0,0.5)' : 'rgba(0,0,0,0.09)'}`,
                    borderRadius: 0,
                    transition: 'background 0.35s ease, border-color 0.35s ease',
                  }}
                  onMouseEnter={() => setHoveredSolution(i)}
                  onMouseLeave={() => setHoveredSolution(null)}
                >
                  <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-[3px] bg-[#C8D400] transition-all duration-300" />
                  <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[2px] transition-all duration-500" style={{ background: 'rgba(200,212,0,0.7)' }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C8D400]/0 group-hover:border-[#C8D400]/60 transition-all duration-300" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C8D400]/0 group-hover:border-[#C8D400]/60 transition-all duration-300" />
                  <div
                    className="absolute top-2 right-4 text-7xl font-black pointer-events-none select-none leading-none"
                    style={{ color: isHov ? 'rgba(200,212,0,0.08)' : 'rgba(0,0,0,0.04)' }}
                  >
                    {s.num}
                  </div>
                  <div className="relative z-10 p-7">
                    <div
                      className="w-12 h-12 overflow-hidden mb-6 flex-shrink-0 transition-all duration-500"
                      style={{
                        borderRadius: 0,
                        transform: isHov ? 'scale(1.1) rotate(-3deg)' : 'scale(1)',
                      }}
                    >
                      <img src={s.woodIcon} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono font-black text-xs text-[#C8D400]">{s.num}</span>
                      <div className="flex-1 h-px" style={{ background: isHov ? 'rgba(200,212,0,0.25)' : 'rgba(0,0,0,0.08)' }} />
                    </div>
                    <h3 className="font-black text-base uppercase tracking-wide mb-3 transition-colors duration-300" style={{ color: isHov ? '#fff' : '#111' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 transition-colors duration-300" style={{ color: isHov ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)' }}>
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300"
                          style={{
                            color: isHov ? '#fff' : '#111',
                            background: isHov ? 'rgba(200,212,0,0.12)' : 'rgba(200,212,0,0.08)',
                            border: `1px solid ${isHov ? 'rgba(200,212,0,0.3)' : 'rgba(200,212,0,0.2)'}`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-6">
            {SOLUTIONS.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300"
                style={{ width: i === 0 ? '20px' : '6px', height: '4px', borderRadius: 0, background: i === 0 ? '#C8D400' : 'rgba(0,0,0,0.15)' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bento Showcase */}
      <KreationShowcase />

      <WoodenDivider />

      <section id="referenzen">
        <ClientProof />
      </section>

      <WoodenDivider />

      <LeistungenKontakt
        headline="Content-Beratung"
        headlineAccent="buchen."
        subline="Wir zeigen dir in 30 Minuten, wie wir im Bereich Kreation und Content arbeiten — von Konzept bis Produktion."
        checkItems={[
          { text: 'Strategische Herangehensweise' },
          { text: 'Deine Ziele, unsere Beispiele' },
          { text: 'Studio-Tour' },
        ]}
        ctaLabel="Beratung buchen"
        ctaMailSubject="Kreation Content Beratung"
        ctaIcon="ri-calendar-line"
      />
      <ScrollToTopButton />
    </div>
  );
}
