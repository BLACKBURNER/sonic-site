import { useState, useRef } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import Tag from '@/components/base/Tag';
import WoodenDivider from '../../../../components/base/WoodenDivider';
import ChallengeSection from '@/components/feature/ChallengeSection';
import type { ChallengeItem } from '@/components/feature/ChallengeSection';

const STAFF_CHALLENGES: ChallengeItem[] = [
  {
    icon: 'ri-user-search-line',
    title: 'Spezielle Talente — schwer zu finden',
    desc: 'Motivierbare Fachkräfte, die Lust auf wechselnde Einsätze haben, sind über reguläres Recruiting bzw. Personaldienstleister schwer zu finden.',
    trigger: 'Auch deine Erfahrung?',
  },
  {
    icon: 'ri-money-euro-circle-line',
    title: 'Payroll? Ein Horror für die Buchhaltung',
    desc: 'Stundenlöhne, Provisionen, Pauschalen, Sozialversicherung: für jede Person jeden Monat anders. Das Grauen für die interne Lohnbuchhaltung.',
    trigger: 'Klingt vertraut?',
  },
  {
    icon: 'ri-bar-chart-2-line',
    title: 'Erfolge schwer messbar — Optimierung blind',
    desc: 'Reportings lassen sich oft erst weit im Nachhinein erstellen, da die Daten zu Einsätzen, Absatz und Lohn-Vollkosten erst mit Verzögerung vorliegen.',
    trigger: 'Schon frustriert?',
  },
];

const SOLUTIONS = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20magnifying%20glass%20search%20talent%20recruiting%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-search-staff-sol-1&orientation=squarish', num: '01', accent: 'HR & Sourcing', title: 'Recruiting', desc: 'Wir finden Talente in unserem Pool und on top über bewährte Recruiting-Strategien. Passend für deine Aufgaben. Mit digitalen Arbeitsverträgen. Null Arbeit für deine HR-Abteilung.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20graduation%20cap%20education%20training%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-grad-staff-sol-2&orientation=squarish', num: '02', accent: 'Training', title: 'Onboarding & Schulungen', desc: 'Aufs Onboarding sind wir spezialisiert: Wir haben (Sales) Trainer und kennen uns sehr gut mit Produkt- und Markenschulungen aus.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20calculator%20finance%20payroll%20accounting%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-calc-staff-sol-3&orientation=squarish', num: '03', accent: 'Finance & Admin', title: 'Payroll', desc: 'Wer bekommt wofür wie viel Geld, basierend auf bspw. Arbeitszeiten und Erfolgsfaktoren? Wir managen die Payroll komplett, basierend auf den Daten unseres Sonic Reporting Tools (SRT).' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20eye%20transparency%20visibility%20insight%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-eye-staff-sol-4&orientation=squarish', num: '04', accent: 'Transparenz', title: 'Kosten-Nutzen-Transparenz', desc: 'Du kannst jederzeit alle Daten, u.a. (Lohn-)Kosten einsehen und dir reporten lassen.' },
];

const STEPS = [
  { num: '01', title: 'Bedarfsanalyse', desc: 'Wir verstehen dein Geschäft, deine Produkte und deinen Personalbedarf. Welche Rollen, welche Skills und welchen Umfang brauchst du?', time: '1–2 Tage' },
  { num: '02', title: 'Recruiting & Auswahl', desc: 'Erst gezielte Suche im Talentepool, plus ggf. Neurekrutierung. Interviews, Assessments, finale Auswahl, Arbeitsverträge. Alles in Abstimmung mit dir.', time: 'Ab 5–10 Tage' },
  { num: '03', title: 'Schulung & Onboarding', desc: 'Intensives Produkttraining, Marken-Briefing, Verkaufstechniken: Dein Team ist ab Tag 1 einsatzbereit.', time: '2–5 Tage' },
  { num: '04', title: 'Einsatz & Steuerung', desc: 'Koordinierte Einsatzplanung über das Sonic Reporting Tool (SRT). Dein Personal ist zur richtigen Zeit am richtigen Ort, und du hast darauf Live-Zugriff.', time: 'Ongoing' },
  { num: '05', title: 'Performance & Optimierung', desc: 'Laufendes Monitoring, Coaching, Team-Rotation bei Bedarf. Wir optimieren, bis die Zahlen stimmen.', time: 'Ongoing' },
  { num: '06', title: 'Abrechnung', desc: 'Wir erstellen für dich übersichtliche Rechnungen, die deine Buchhaltungs- und Controlling-Prozesse vereinfachen.', time: 'Ongoing' },
];

const SPECIALIZATIONS = [
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20store%20retail%20shop%20building%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-store-staff-spec-1&orientation=squarish', num: '01', accent: 'POS & Retail', title: 'Sales Activation', desc: 'Sales-Profis, geschult auf zielgerichtete Beratung. Sie vermitteln Features, stärken deine Marktposition und machen aus Interessenten Käufer.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20briefcase%20business%20sales%20field%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-brief-staff-spec-2&orientation=squarish', num: '02', accent: 'B2B Vertrieb', title: 'Sales Außendienst', desc: 'Mit kundenexklusiven Vertriebsaußendienst-Mitarbeitern stellen wir den Erfolg auch im mehrstufigen Vertrieb sicher. Multifunktional einsetzbar.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20megaphone%20brand%20activation%20announcement%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-mega-staff-spec-3&orientation=squarish', num: '03', accent: 'Markenbildung', title: 'Brand Activation', desc: 'Brand-Activation-Mitarbeiter geben deiner Marke ein Gesicht. Als Verbindung zwischen Interessenten und Marke schaffen sie eine Vertrauensbasis.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20grid%20layout%20shelf%20merchandising%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-grid-staff-spec-4&orientation=squarish', num: '04', accent: 'Handel & Regal', title: 'Merchandising', desc: 'Perfekte Warenpräsentation am POS braucht fleißige Hände und Doing-Things-Mentalität. Ob 360-Grad-Außendienst oder spezialisierte Teams.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20building%20shop%20in%20shop%20outlet%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-build-staff-spec-5&orientation=squarish', num: '05', accent: 'Shop-in-Shop', title: 'Shop-in-Shop Staff', desc: 'Wir finden die passenden Menschen für Shop-in-Shop-Outlets: Beratung, Demos, Verkauf, Regalpflege und mehr. Mit Schichtsystem und Plan B.' },
  { woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20presentation%20board%20training%20knowledge%20icon%20made%20from%20solid%20dark%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=112&height=112&seq=wood-pres-staff-spec-6&orientation=squarish', num: '06', accent: 'Know-how', title: 'Training', desc: 'Regelmäßige Trainings stellen sicher, dass dein Team und die Teams deiner Handelspartner immer über aktuelles Know-how verfügen.' },
];

const SOCKS = [
  {
    letter: 'S', title: 'Selection',
    desc: 'Die Gewissheit, den besten Kanal, die beste Region, den besten Shop und den besten Tag gewählt zu haben, um die meisten Produkte mit dem höchsten ROI zu verkaufen.',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/SRT_OPENER.jpg',
  },
  {
    letter: 'O', title: 'Orientation',
    desc: 'Sicherstellen, dass der Besucher das gewünschte Produkt auf einfachste Weise im Shop findet oder auf das Produkt aufmerksam wird.',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/POS_NEU.jpg',
  },
  {
    letter: 'C', title: 'Condition',
    desc: 'Sicherstellen, dass das Produkt so dargestellt ist, dass es kaufenswert erscheint. Begehrlich.',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/06/6.jpg',
  },
  {
    letter: 'K', title: 'Knowledge',
    desc: 'Sicherstellen, dass die Empfehler das Produkt mit all seinen Vorteilen kennen. Sie fühlen sich sicher, den Besucher nach seinen Bedürfnissen zu fragen.',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/4-1-1024x444.jpg',
  },
  {
    letter: 'S', title: 'Sellout',
    desc: 'Das einzig mögliche Ergebnis, wenn alle Schritte perfekt ausgeführt wurden: Der Empfehler wird zum Verkäufer, der Besucher zum Käufer.',
    img: 'https://www.sonic-group.de/wp-content/uploads/2023/02/6-1-1024x570.jpg',
  },
];

interface ScrollCardData {
  woodIcon: string;
  num: string;
  accent: string;
  title: string;
  desc: string;
}

function DarkScrollSection({
  data,
  scrollRef,
  activeIdx,
  setActiveIdx,
  label,
  theme = 'dark',
}: {
  data: ScrollCardData[];
  scrollRef: React.RefObject<HTMLDivElement>;
  activeIdx: number | null;
  setActiveIdx: (i: number | null) => void;
  label: string;
  theme?: 'dark' | 'light';
}) {
  const isDark = theme === 'dark';
  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };
  const goTo = (i: number) => {
    setActiveIdx(i);
    scrollRef.current?.scrollTo({ left: i * 380, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex items-center mb-6 gap-3">
        <span className={`text-[11px] font-black uppercase tracking-widest flex-grow ${isDark ? 'text-white/20' : 'text-[#111]/30'}`}>{label}</span>
        <button onClick={() => scroll('left')} className={`w-10 h-10 flex items-center justify-center border transition-all duration-200 cursor-pointer ${isDark ? 'border-white/15 text-white/40' : 'border-[#111]/20 text-[#111]/40'} hover:border-[#C8D400]/60 hover:text-[#C8D400]`} aria-label="links">
          <i className="ri-arrow-left-s-line text-xl" />
        </button>
        <button onClick={() => scroll('right')} className={`w-10 h-10 flex items-center justify-center border transition-all duration-200 cursor-pointer ${isDark ? 'border-white/15 text-white/40' : 'border-[#111]/20 text-[#111]/40'} hover:border-[#C8D400]/60 hover:text-[#C8D400]`} aria-label="rechts">
          <i className="ri-arrow-right-s-line text-xl" />
        </button>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {data.map((s, idx) => {
          const isA = activeIdx === idx;
          const cardBg = isDark
            ? (isA ? '#ffffff' : 'rgba(255,255,255,0.05)')
            : (isA ? '#111' : '#ffffff');
          const cardBorder = isDark
            ? (isA ? 'rgba(200,212,0,0.5)' : 'rgba(255,255,255,0.08)')
            : (isA ? 'rgba(200,212,0,0.5)' : 'rgba(0,0,0,0.09)');
          const titleColor = isDark ? (isA ? '#111' : '#fff') : (isA ? '#fff' : '#111');
          const descColor = isDark ? (isA ? '#555' : 'rgba(255,255,255,0.5)') : (isA ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)');
          const accentColor = isDark
            ? (isA ? '#C8D400' : 'rgba(200,212,0,0.5)')
            : (isA ? '#C8D400' : 'rgba(139,110,0,0.7)');
          const numWatermarkColor = isDark
            ? (isA ? 'rgba(200,212,0,0.07)' : 'rgba(255,255,255,0.04)')
            : (isA ? 'rgba(200,212,0,0.07)' : 'rgba(0,0,0,0.04)');
          const borderTopColor = isDark
            ? (isA ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)')
            : (isA ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)');
          const countColor = isDark
            ? (isA ? '#999' : 'rgba(255,255,255,0.25)')
            : (isA ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)');
          const arrowBg = isDark
            ? (isA ? '#C8D400' : 'rgba(255,255,255,0.06)')
            : (isA ? '#C8D400' : 'rgba(0,0,0,0.07)');
          const arrowColor = isDark
            ? (isA ? '#111' : 'rgba(255,255,255,0.4)')
            : (isA ? '#111' : 'rgba(0,0,0,0.45)');
          const topBarBg = isDark
            ? (isA ? '#C8D400' : 'rgba(200,212,0,0.2)')
            : (isA ? '#C8D400' : 'rgba(0,0,0,0.08)');
          const dotPipBg = isDark
            ? (isA ? '#C8D400' : 'rgba(200,212,0,0.4)')
            : (isA ? '#C8D400' : 'rgba(200,212,0,0.6)');

          return (
            <div
              key={idx}
              className="flex-shrink-0 snap-start relative overflow-hidden cursor-default"
              style={{
                width: 'clamp(280px, 26vw, 340px)',
                minHeight: '380px',
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                transition: 'all 0.3s ease',
                transform: isA ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isA
                  ? (isDark ? '0 0 0 1px rgba(200,212,0,0.35), 0 24px 48px rgba(0,0,0,0.4)' : '0 0 0 1px rgba(200,212,0,0.3), 0 24px 48px rgba(0,0,0,0.18)')
                  : (isDark ? '0 2px 8px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.04)'),
              }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <div className="absolute top-0 left-0 right-0 z-20" style={{ height: isA ? '3px' : '2px', background: topBarBg, boxShadow: isA ? '0 0 14px rgba(200,212,0,0.5)' : 'none', transition: 'all 0.3s ease' }} />
              <div className="absolute top-0 left-0 bottom-0 z-20 w-0.5" style={{ background: isA ? '#C8D400' : 'transparent', transition: 'background 0.3s ease' }} />
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 z-10" style={{ borderColor: isA ? 'rgba(200,212,0,0.5)' : 'transparent', transition: 'border-color 0.3s ease' }} />
              <div className="absolute bottom-4 right-4 font-black leading-none select-none pointer-events-none z-0" style={{ fontSize: '6rem', color: numWatermarkColor, lineHeight: 1, transition: 'color 0.3s ease' }}>{s.num}</div>

              <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: '380px' }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5" style={{ background: dotPipBg, transition: 'background 0.3s ease' }} />
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: accentColor, transition: 'color 0.3s ease' }}>{s.accent}</span>
                </div>
                <div className="w-[56px] h-[56px] overflow-hidden mb-6 flex-shrink-0" style={{ boxShadow: isA ? '0 10px 24px rgba(139,90,43,0.35)' : '0 4px 14px rgba(139,90,43,0.22)', transition: 'all 0.35s ease', transform: isA ? 'scale(1.08)' : 'scale(1)' }}>
                  <img src={s.woodIcon} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-black mb-3 leading-snug uppercase" style={{ color: titleColor, transition: 'color 0.3s ease' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: descColor, transition: 'color 0.3s ease' }}>{s.desc}</p>
                <div className="flex items-center justify-between pt-4 mt-4" style={{ borderTop: `1px solid ${borderTopColor}`, transition: 'border-color 0.3s ease' }}>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: countColor }}>{s.num} / {String(data.length).padStart(2, '0')}</span>
                  <div className="w-7 h-7 flex items-center justify-center" style={{ background: arrowBg, transform: isA ? 'translateX(3px)' : 'translateX(0)', transition: 'all 0.25s ease' }}>
                    <i className="ri-arrow-right-line text-sm" style={{ color: arrowColor }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {data.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className="cursor-pointer" style={{ width: i === (activeIdx ?? 0) ? '22px' : '6px', height: '3px', background: i === (activeIdx ?? 0) ? '#C8D400' : (isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'), border: 'none', padding: 0, transition: 'all 0.3s ease' }} aria-label={`${i + 1}`} />
        ))}
      </div>
    </>
  );
}

export default function StaffContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSocks, setActiveSocks] = useState(0);
  const [solActive, setSolActive] = useState<number | null>(null);
  const [specActive, setSpecActive] = useState<number | null>(null);
  const solRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ChallengeSection
        headline="Staffing flexibilisieren ist komplex."
        subline="Im Bereich Sales und Promotion kommt klassisches Recruiting ans Limit."
        challenges={STAFF_CHALLENGES}
      />

      <WoodenDivider />

      {/* ── Solution (horizontal scroll) ── */}
      <section id="loesung" className="bg-white py-14 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8D400]/8 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-5">
                <i className="ri-check-double-line text-[#111] text-sm" />
                <span className="text-xs font-black text-[#111] uppercase tracking-widest">Die Lösung</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-none uppercase">
                PERSONALDIENSTLEISTUNG ALS<br /><span className="text-[#C8D400]" style={{ WebkitTextStroke: '1px #9ea800' }}>DIGITALISIERTER SERVICE.</span>
              </h2>
            </div>
            <p className="text-[#111]/45 text-sm leading-relaxed max-w-xs lg:text-right">Recruiting Task Force — Auswahl, Betreuung und Abrechnung aus einer Hand.</p>
          </div>
          <DarkScrollSection data={SOLUTIONS} scrollRef={solRef} activeIdx={solActive} setActiveIdx={setSolActive} label={`${SOLUTIONS.length} Leistungen — scrollen`} theme="light" />
        </div>
      </section>

      <WoodenDivider />

      {/* ── Process ── */}
      <section id="ablauf" className="bg-white py-14 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <SectionBadge text="Ablauf" variant="dark" className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight uppercase">So läuft die Personalbeschaffung<br />mit Sonic</h2>
            <p className="text-[#111]/45 text-sm mt-3">Volle Kostenkontrolle, volle Flexibilität, volle Performance, volle Entlastung.</p>
          </div>
          <div className="flex gap-0 mb-0 overflow-x-auto border border-[#111]/10">
            {STEPS.map((step, i) => (
              <button key={i} onClick={() => setActiveStep(i)} className={`flex-shrink-0 px-3 md:px-4 py-3 font-black text-xs whitespace-nowrap transition-all duration-300 cursor-pointer border-r border-[#111]/10 last:border-r-0 ${activeStep === i ? 'bg-[#111] text-[#C8D400]' : 'bg-white text-[#111]/50 hover:text-[#111] hover:bg-[#111]/5'}`}>
                <span className="block text-[10px] opacity-60 mb-0.5">{step.num}</span>
                {step.title}
              </button>
            ))}
          </div>
          <div key={activeStep} className="border border-[#111]/10 border-t-0 bg-white p-6 md:p-10 relative overflow-hidden" style={{ animation: 'fadeIn 0.35s ease-out' }}>
            <div className="absolute top-0 left-0 text-7xl md:text-9xl font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(200,212,0,0.08)', lineHeight: 1 }}>{STEPS[activeStep].num}</div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#111] font-black text-xs uppercase tracking-widest">Schritt {STEPS[activeStep].num}</div>
                <div className="px-3 py-1 bg-[#C8D400] text-[#111] text-xs font-black">{STEPS[activeStep].time}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#111] mb-3 uppercase">{STEPS[activeStep].title}</h3>
              <p className="text-[#111]/65 text-sm md:text-base leading-relaxed">{STEPS[activeStep].desc}</p>
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* ── Specializations (horizontal scroll, dark bg) ── */}
      <section id="aufgabenbereiche" className="bg-[#111] py-14 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(200,212,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C8D400]/4 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-5">
                <i className="ri-focus-3-line text-[#C8D400] text-sm" />
                <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Unsere Spezialisierung</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none">
                ARBEITNEHMERÜBERLASSUNG<br /><span className="text-[#C8D400]">FÜR DEINE FIELD FORCE.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs lg:text-right">6 Einsatzbereiche — ein Ansprechpartner bei Sonic.</p>
          </div>
          <DarkScrollSection data={SPECIALIZATIONS} scrollRef={specRef} activeIdx={specActive} setActiveIdx={setSpecActive} label={`${SPECIALIZATIONS.length} Einsatzbereiche — scrollen`} theme="dark" />
        </div>
      </section>

      <WoodenDivider />

      {/* ── S.O.C.K.S. ── */}
      <section id="socks" className="bg-white py-14 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <SectionBadge text="Sell-out mit System" variant="dark" className="mb-5" />
            <h2 className="text-3xl lg:text-4xl font-black text-[#111] leading-tight">
              Das <span className="text-[#C8D400]">S.O.C.K.S.</span>-Prinzip
            </h2>
            <p className="text-[#111]/45 text-sm mt-3 max-w-xl mx-auto">Unsere Qualitätsstrategie für Planung und Umsetzung von Sell-out-Maßnahmen.</p>
          </div>

          {/* Mobile */}
          <div className="flex gap-2 mb-4 lg:hidden overflow-x-auto">
            {SOCKS.map((s, i) => (
              <button key={i} onClick={() => setActiveSocks(i)} className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 font-black text-sm transition-all duration-300 cursor-pointer border border-[#111]/15 ${activeSocks === i ? 'bg-[#111] text-[#C8D400] border-[#111]' : 'bg-white text-[#111]/50 hover:text-[#111]'}`}>
                <span className="text-xl font-black">{s.letter}</span>
                <span className="text-xs">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="lg:hidden border border-[#111]/10 bg-white overflow-hidden mb-4">
            <div className="relative overflow-hidden" style={{ height: '200px' }}>
              <img key={activeSocks} src={SOCKS[activeSocks].img} alt={SOCKS[activeSocks].title} className="w-full h-full object-cover object-top" style={{ animation: 'fadeIn 0.4s ease-out' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-2 py-1">{SOCKS[activeSocks].letter} — {SOCKS[activeSocks].title}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="text-[#C8D400] text-xs font-black uppercase tracking-widest mb-2">{SOCKS[activeSocks].letter} — {SOCKS[activeSocks].title}</div>
              <p className="text-[#111]/70 text-sm leading-relaxed">{SOCKS[activeSocks].desc}</p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-0 border border-[#111]/10">
            <div className="lg:col-span-2 border-r border-[#111]/10">
              {SOCKS.map((s, i) => (
                <button key={i} onClick={() => setActiveSocks(i)} className={`w-full flex items-center gap-4 p-5 transition-all duration-300 cursor-pointer border-b border-[#111]/10 last:border-b-0 ${activeSocks === i ? 'bg-[#111] text-[#C8D400]' : 'bg-white text-[#111]/40 hover:bg-white hover:text-[#111]'}`}>
                  <span className="text-3xl font-black leading-none">{s.letter}</span>
                  <span className="text-xs font-black uppercase tracking-widest">{s.title}</span>
                </button>
              ))}
            </div>
            <div className="lg:col-span-6 relative overflow-hidden" style={{ minHeight: '400px' }}>
              <img key={activeSocks} src={SOCKS[activeSocks].img} alt={SOCKS[activeSocks].title} className="w-full h-full object-cover object-top" style={{ animation: 'fadeIn 0.4s ease-out', minHeight: '400px' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#C8D400] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1">{SOCKS[activeSocks].letter} — {SOCKS[activeSocks].title}</span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-1.5">
                {SOCKS.map((_, i) => (
                  <button key={i} onClick={() => setActiveSocks(i)} className={`h-1 transition-all duration-300 cursor-pointer ${activeSocks === i ? 'w-8 bg-[#C8D400]' : 'w-3 bg-white/40'}`} />
                ))}
              </div>
            </div>
            <div key={activeSocks} className="lg:col-span-4 bg-white p-8 flex flex-col justify-center border-l border-[#111]/10" style={{ animation: 'fadeIn 0.4s ease-out' }}>
              <div className="text-[120px] font-black leading-none text-[#C8D400]/10 select-none mb-2">{SOCKS[activeSocks].letter}</div>
              <div className="text-[#C8D400] text-xs font-black uppercase tracking-widest mb-3">{SOCKS[activeSocks].letter} — {SOCKS[activeSocks].title}</div>
              <p className="text-[#111]/70 text-base leading-relaxed">{SOCKS[activeSocks].desc}</p>
              <div className="mt-8 flex gap-2">
                {SOCKS.map((s, i) => (
                  <button key={i} onClick={() => setActiveSocks(i)} className={`w-9 h-9 flex items-center justify-center font-black text-sm transition-all duration-300 cursor-pointer ${activeSocks === i ? 'bg-[#111] text-[#C8D400]' : 'border border-[#111]/15 text-[#111]/40 hover:border-[#111]/40 hover:text-[#111]'}`}>{s.letter}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
