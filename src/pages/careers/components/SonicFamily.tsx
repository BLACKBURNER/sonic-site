import { useState, useEffect, useRef, useCallback } from 'react';
import SectionBadge from '@/components/base/SectionBadge';
import { CONTACT_EMAIL } from '@/lib/contact';

const FACES = [
  {
    id: 'hassibullah', ep: '01', dur: '3:47',
    name: 'Hassibullah', role: 'Sales Activator', location: 'Bayern', since: 'Seit 2016',
    tag: 'Field Sales',
    eyebrow: 'Gemacht. Gewachsen.',
    pullShort: '„Was möglich ist, wenn Potenzial auf Perspektive trifft."',
    pullFull: 'Hassibullah kam 2016 nach Deutschland ohne Deutschkenntnisse. Mit viel Ehrgeiz schaffte er die IHK-Ausbildung und wechselte mutig zu Sonic. Sonic hat ihm nicht nur einen Job gegeben — sie haben ihm gezeigt, was möglich ist, wenn Potenzial auf Perspektive trifft.',
    qa: [
      { q: 'Was hat dich zu Sonic gebracht?', a: 'Ich kam 2016 nach Deutschland ohne Deutschkenntnisse. Mit viel Ehrgeiz schaffte ich die IHK-Ausbildung und wechselte mutig zu Sonic — sogar mit Umzug nach Bayern.' },
      { q: 'Was macht deinen Alltag aus?', a: 'Jeder Tag ist anders. Ich bin beim Kunden, berate, präsentiere — und abends weiß ich, was ich erreicht habe.' },
      { q: 'Was gibst du neuen Bewerber:innen mit?', a: 'Deine Einstellung zählt mehr als dein Lebenslauf. Zeig was du willst, nicht nur was du kannst.' },
    ],
    metric: '127%', metricLabel: 'Zielerreichung',
    imageBg: 'linear-gradient(160deg,#181e0f,#0d110a)',
    image: 'https://readdy.ai/api/search-image?query=confident%20young%20man%20professional%20smart%20casual%20clothing%20modern%20retail%20agency%20environment%20authentic%20portrait%20warm%20smile%20editorial%20photography%20dark%20olive%20background%20natural%20light%20high%20contrast%20sharp%20commercial%20quality&width=600&height=800&seq=sf-face-hassibullah-v2&orientation=portrait',
  },
  {
    id: 'andrew', ep: '02', dur: '4:12',
    name: 'Andrew', role: 'Field Promoter', location: 'Bundesweit', since: 'Seit 2019',
    tag: 'Field Sales',
    eyebrow: 'Rückkehr mit Energie.',
    pullShort: '„Vertrauen ist keine Frage des Lebenslaufs."',
    pullFull: 'Nach einer gesundheitsbedingten Auszeit fand Andrew bei Sonic den Rückhalt, den er brauchte. Das Team hat ihn nicht bewertet — es hat ihn willkommen geheißen. Vertrauen ist keine Frage des Lebenslaufs.',
    qa: [
      { q: 'Wie bist du zu Sonic zurückgekehrt?', a: 'Nach einer gesundheitsbedingten Auszeit war ich unsicher. Sonic hat mich nicht bewertet — sie haben mich willkommen geheißen.' },
      { q: 'Was hat dir am meisten geholfen?', a: 'Das Team. Kein Druck, klare Erwartungen, und das Gefühl: hier zählt der Mensch, nicht nur die Leistung.' },
    ],
    metric: '22', metricLabel: 'Länder bereist',
    imageBg: 'linear-gradient(160deg,#0f1a18,#090e0d)',
    image: 'https://readdy.ai/api/search-image?query=professional%20man%20late%2030s%20event%20manager%20confident%20presence%20trade%20show%20exhibition%20modern%20creative%20agency%20atmosphere%20editorial%20portrait%20photography%20dark%20teal%20background%20sharp%20detail%20authentic%20natural%20expression&width=600&height=800&seq=sf-face-andrew-v2&orientation=portrait',
  },
  {
    id: 'peter', ep: '03', dur: '5:03',
    name: 'Peter', role: 'Regional Lead · Mentor', location: 'NRW', since: 'Seit 2018',
    tag: 'Leadership',
    eyebrow: 'Neu durchgestartet.',
    pullShort: '„Ein Rückschlag ist kein Endpunkt."',
    pullFull: 'Nach einem Karriere-Rückschlag hat Peter bei Sonic neu durchgestartet. Sonic hat auf die Person geschaut, nicht auf den Rückschlag. Heute ist er Regional Lead und mentort neue Talente — ein Beweis, dass Einstellung mehr zählt als Lebenslauf.',
    qa: [
      { q: 'Wie hast du dich nach dem Rückschlag neu aufgestellt?', a: 'Sonic hat auf die Person geschaut, nicht auf den Rückschlag. Ich hatte Raum, mich wieder aufzubauen — das war der Unterschied.' },
      { q: 'Was bedeutet dir die Mentor-Rolle?', a: 'Ich kann weitergeben, was mir geholfen hat. Wenn jemand durch eine Herausforderung wächst — das ist die größte Bestätigung.' },
    ],
    metric: '5J.', metricLabel: 'Regional Lead',
    imageBg: 'linear-gradient(160deg,#180f0f,#110a0a)',
    image: 'https://readdy.ai/api/search-image?query=mature%20confident%20man%2040s%20regional%20manager%20leader%20strong%20composed%20presence%20modern%20office%20building%20environment%20editorial%20portrait%20photography%20high%20contrast%20dramatic%20side%20lighting%20dark%20burgundy%20background%20sharp%20detail%20authoritative&width=600&height=800&seq=sf-face-peter-v2&orientation=portrait',
  },
  {
    id: 'tanja', ep: '04', dur: '3:28',
    name: 'Tanja', role: 'Recruiting Lead', location: 'Krefeld', since: 'Seit 2020',
    tag: 'People & Culture',
    eyebrow: 'Aufgebaut. Gefunden.',
    pullShort: '„Der Campus ist wie ein kleines Dorf — jeder kennt jeden."',
    pullFull: 'Tanja hat Sonics Recruiting-Prozess von Grund auf aufgebaut. Unter ihrer Leitung wurde Sonic fünfmal zur Kununu Top Company gewählt. Bei ihr durfte sie echte Verantwortung übernehmen — vom ersten Tag an.',
    qa: [
      { q: 'Was macht den Campus Krefeld besonders?', a: 'Die Atmosphäre. Kurze Wege, echte Gesichter. Du läufst morgens rein und weißt, wer du heute siehst.' },
      { q: 'Wie sieht dein Alltag aus?', a: 'Kein Tag ist gleich. Ich koordiniere, organisiere, bin Ansprechpartnerin — für das Team genauso wie für externe Partner.' },
    ],
    metric: '98%', metricLabel: 'Bewerberzufriedenheit',
    imageBg: 'linear-gradient(160deg,#0f1018,#090a11)',
    image: 'https://readdy.ai/api/search-image?query=professional%20woman%20HR%20recruiter%20warm%20authentic%20smile%20modern%20office%20creative%20agency%20bright%20natural%20environment%20editorial%20portrait%20photography%20natural%20light%20clean%20background%20sharp%20detail%20professional%20yet%20approachable&width=600&height=800&seq=sf-face-tanja-v2&orientation=portrait',
  },
  {
    id: 'janina', ep: '05', dur: '4:55',
    name: 'Janina', role: 'HR Director', location: 'Krefeld', since: 'Seit 2017',
    tag: 'HR & Strategy',
    eyebrow: 'Kultur gestaltet.',
    pullShort: '„Ich habe hier eine Kultur aufgebaut, auf die ich wirklich stolz bin."',
    pullFull: 'Unter Janinas Leitung stieg die durchschnittliche Betriebszugehörigkeit auf 5,15 Jahre — dreimal über dem Branchendurchschnitt. Sie hat bei Sonic eine Kultur aufgebaut, auf die alle stolz sind.',
    qa: [
      { q: 'Was war dein größter Erfolg bei Sonic?', a: 'Die Betriebszugehörigkeit dreimal über Branchenschnitt. Das ist kein Zufall — das ist das Ergebnis gelebter Kultur.' },
      { q: 'Was macht Sonic als Arbeitgeber einzigartig?', a: 'Hier darf man wirklich Verantwortung übernehmen. Von Anfang an. Das ist selten und wertvoll.' },
    ],
    metric: 'Ø 5,15J.', metricLabel: 'Betriebszugehörigkeit',
    imageBg: 'linear-gradient(160deg,#181410,#100d08)',
    image: 'https://readdy.ai/api/search-image?query=professional%20woman%20HR%20director%20executive%20poised%20elegant%20confident%20modern%20corporate%20environment%20editorial%20portrait%20photography%20dramatic%20soft%20studio%20lighting%20dark%20warm%20background%20sharp%20detail%20professional%20polished&width=600&height=800&seq=sf-face-janina-v2&orientation=portrait',
  },
];

const AUTO_MS = 5500;

function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

export default function SonicFamily() {
  const [idx, setIdx] = useState(0);
  const [prog, setProg] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(false);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const headerReveal = useReveal(0.05);
  const bodyReveal = useReveal(0.03);

  const face = FACES[idx];
  const next = FACES[(idx + 1) % FACES.length];

  const goTo = useCallback((i: number) => {
    if (i === idx) return;
    setTransitioning(true); setProg(0);
    setTimeout(() => { setIdx(i); setTransitioning(false); }, 240);
  }, [idx]);

  const advance = useCallback(() => {
    setTransitioning(true); setProg(0);
    setTimeout(() => { setIdx(p => (p + 1) % FACES.length); setTransitioning(false); }, 240);
  }, []);

  useEffect(() => {
    if (paused) { if (progRef.current) clearInterval(progRef.current); return; }
    setProg(0);
    progRef.current = setInterval(() => {
      setProg(p => {
        if (p >= 100) { advance(); return 0; }
        return p + (100 / (AUTO_MS / 50));
      });
    }, 50);
    return () => { if (progRef.current) clearInterval(progRef.current); };
  }, [idx, paused, advance]);

  return (
    <section
      id="sonic-family"
      className="relative overflow-hidden bg-white"
    >
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(200,212,0,0.4) 25%,rgba(200,212,0,0.4) 75%,transparent 100%)' }} />

      {/* ── HEADER ── */}
      <div
        ref={headerReveal.ref}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10"
        style={{ opacity: headerReveal.vis ? 1 : 0, transform: headerReveal.vis ? 'none' : 'translateY(28px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-5 h-px bg-[#C8D400]" />
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#C8D400]">Original Interview Series</span>
            </div>
            <SectionBadge text="Echte Menschen. Echte Stimmen." variant="dark" className="mb-4" />
            <h2 className="text-5xl md:text-7xl font-black text-[#1a1a1a] leading-[0.9] tracking-tight uppercase">
              Sonic<br /><span className="text-[#C8D400]">Faces</span>
            </h2>
            <p className="text-sm font-light leading-relaxed mt-3 max-w-sm text-gray-500">
              Kurze Video-Interviews mit den Menschen, die Sonic ausmachen — ihre Wege, ihre Arbeit, ihre ehrliche Meinung.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1.5 flex-shrink-0">
            <div className="text-5xl font-black leading-none tracking-tight text-[#1a1a1a]">
              <span className="text-[#C8D400]">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-black/20 mx-1">/</span>
              <span className="text-black/20">{String(FACES.length).padStart(2, '0')}</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400">Episoden</span>
          </div>
        </div>
      </div>

      {/* ── MAIN PLAYER AREA ── */}
      <div
        ref={bodyReveal.ref}
        className="max-w-7xl mx-auto px-6 md:px-10"
        style={{ opacity: bodyReveal.vis ? 1 : 0, transform: bodyReveal.vis ? 'none' : 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s' }}
      >

        {/* Video panel + Info panel side by side */}
        <div className="grid gap-[3px]" style={{ gridTemplateColumns: '1fr 1fr' }}>

          {/* ── LEFT: Video Panel (dark) ── */}
          <div
            className="relative overflow-hidden flex flex-col cursor-pointer group"
            style={{ minHeight: '480px', background: '#111' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Background */}
            <div className="absolute inset-0" style={{ background: face.imageBg, transition: 'background 0.4s ease' }} />

            {/* ── POLAROID FRAME (centered in panel) ── */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div
                className="relative flex flex-col pointer-events-auto"
                onMouseEnter={() => setHoveredPolaroid(true)}
                onMouseLeave={() => setHoveredPolaroid(false)}
                style={{
                  background: '#f5f2ec',
                  padding: '8px 8px 44px 8px',
                  width: hoveredPolaroid ? 'calc(100% - 48px)' : '78%',
                  maxWidth: hoveredPolaroid ? '400px' : '360px',
                  boxShadow: hoveredPolaroid
                    ? '0 28px 72px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.7)'
                    : '0 18px 52px rgba(0,0,0,0.75), 0 4px 14px rgba(0,0,0,0.5)',
                  transform: transitioning
                    ? 'scale(0.97) rotate(0deg)'
                    : hoveredPolaroid
                    ? 'rotate(0deg) scale(1.01) translateY(-5px)'
                    : 'rotate(-1deg) scale(1)',
                  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), width 0.45s cubic-bezier(0.16,1,0.3,1), max-width 0.45s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                }}
              >
                {/* Photo area */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    key={face.id}
                    src={face.image}
                    alt={face.name}
                    className="w-full h-full object-cover object-top"
                    style={{
                      opacity: transitioning ? 0 : 0.55,
                      transform: transitioning ? 'scale(1.04)' : 'scale(1)',
                      transition: 'opacity 0.24s ease, transform 0.24s ease',
                      mixBlendMode: 'luminosity',
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 100%)' }} />
                  {/* Lime accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
                </div>
                {/* Polaroid caption strip — paper grain */}
                <div className="flex flex-col items-center justify-center pt-2.5 pb-1 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")',
                      backgroundSize: '120px 120px',
                      opacity: 0.6,
                      mixBlendMode: 'multiply',
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(180,160,120,0.04) 3px, rgba(180,160,120,0.04) 4px)', opacity: 0.8 }} />
                  <div className="relative z-10 text-[10px] font-black uppercase tracking-[0.14em] text-[#111]/70 leading-none">{face.name}</div>
                  <div className="relative z-10 text-[8px] font-medium uppercase tracking-[0.1em] text-[#111]/40 mt-0.5">{face.tag}</div>
                </div>
              </div>
            </div>

            {/* Corner accents framing the polaroid */}
            <div className="absolute top-5 left-5 w-10 h-10 z-20 pointer-events-none" style={{ borderTop: '1.5px solid rgba(200,212,0,0.45)', borderLeft: '1.5px solid rgba(200,212,0,0.45)' }} />
            <div className="absolute top-5 right-5 w-10 h-10 z-20 pointer-events-none" style={{ borderTop: '1.5px solid rgba(200,212,0,0.45)', borderRight: '1.5px solid rgba(200,212,0,0.45)' }} />
            <div className="absolute bottom-5 left-5 w-10 h-10 z-20 pointer-events-none" style={{ borderBottom: '1.5px solid rgba(200,212,0,0.2)', borderLeft: '1.5px solid rgba(200,212,0,0.2)' }} />
            <div className="absolute bottom-5 right-5 w-10 h-10 z-20 pointer-events-none" style={{ borderBottom: '1.5px solid rgba(200,212,0,0.2)', borderRight: '1.5px solid rgba(200,212,0,0.2)' }} />

            {/* Scanline texture */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(197,229,46,0.012) 3px,rgba(197,229,46,0.012) 4px)' }} />

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 z-30" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div className="h-full bg-[#C8D400] transition-none" style={{ width: `${prog}%` }} />
            </div>

            {/* EP badge top-left */}
            <div className="absolute top-5 left-5 z-20">
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-2.5 py-1.5 bg-[#C8D400] text-[#111]">EP. {face.ep}</span>
            </div>
            {/* Duration top-right */}
            <div className="absolute top-5 right-5 z-20 px-2.5 py-1.5" style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
              <span className="text-[10px] font-mono text-white/60">{face.dur}</span>
            </div>

            {/* Lower content */}
            <div
              className="relative z-20 mt-auto p-7"
              style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.96) 0%, rgba(17,17,17,0.6) 60%, transparent 100%)' }}
            >
              <p
                className="text-sm font-light italic leading-relaxed mb-4"
                style={{ color: 'rgba(255,255,255,0.75)', borderLeft: '2px solid #C8D400', paddingLeft: '14px', opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(6px)' : 'none', transition: 'opacity 0.24s ease, transform 0.24s ease' }}
              >
                {face.pullShort}
              </p>
              <div
                className="text-2xl font-black text-white leading-none tracking-tight"
                style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.24s ease' }}
              >{face.name}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.08em] mt-1 mb-3 text-white/40">{face.role}</div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.08em] px-2.5 py-1" style={{ background: 'rgba(200,212,0,0.12)', border: '0.5px solid rgba(200,212,0,0.3)', color: '#C8D400' }}>{face.since}</span>
                <span className="text-[9px] font-black uppercase tracking-[0.08em] px-2.5 py-1" style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>{face.tag}</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Info Panel (light) ── */}
          <div
            className="flex flex-col gap-0"
            style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.09)', padding: '40px' }}
          >
            <div className="pb-6 mb-6" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.09)' }}>
              <div className="text-[9px] font-black uppercase tracking-[0.16em] text-[#C8D400] mb-2">
                Sonic Faces · Episode {face.ep}
              </div>
              <div
                className="text-4xl font-black text-[#1a1a1a] leading-none tracking-tight mb-1"
                style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.24s ease' }}
              >{face.name}</div>
              <div className="text-xs font-black uppercase tracking-[0.06em] text-gray-500">{face.role}</div>
            </div>

            {/* Pull quote */}
            <p
              className="text-sm font-light leading-relaxed mb-6 text-gray-600"
              style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateX(8px)' : 'none', transition: 'opacity 0.24s ease, transform 0.24s ease' }}
            >
              {face.pullFull}
            </p>

            {/* Q&A */}
            <div className="flex flex-col flex-1" style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.24s ease 0.05s' }}>
              {face.qa.map((item, qi) => (
                <div key={qi} className="py-4" style={{ borderBottom: qi < face.qa.length - 1 ? '0.5px solid rgba(0,0,0,0.09)' : 'none' }}>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex-shrink-0 px-1.5 py-0.5 text-[8px] font-black" style={{ background: 'rgba(200,212,0,0.1)', border: '0.5px solid rgba(200,212,0,0.25)', color: '#C8D400' }}>Q</div>
                    <span className="text-[11px] font-black uppercase tracking-[0.06em] text-[#C8D400]">{item.q}</span>
                  </div>
                  <p className="text-xs font-light leading-relaxed pl-6 text-gray-500">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Footer nav */}
            <div className="flex items-center justify-between pt-6 mt-auto" style={{ borderTop: '0.5px solid rgba(0,0,0,0.09)' }}>
              <button
                onClick={() => setPaused(p => !p)}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer hover:bg-[#C8D400] hover:text-[#111] whitespace-nowrap"
                style={{ background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: 0 }}
              >
                ▶ &nbsp;Interview ansehen
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goTo((idx - 1 + FACES.length) % FACES.length)}
                  className="w-9 h-9 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 hover:bg-[#1a1a1a] hover:text-white"
                  style={{ background: '#f5f5f5', border: '0.5px solid rgba(0,0,0,0.14)', borderRadius: 0, color: '#555' }}
                >←</button>
                <span className="text-[11px] font-mono text-gray-400" style={{ minWidth: '40px', textAlign: 'center' }}>{idx + 1} / {FACES.length}</span>
                <button
                  onClick={() => goTo((idx + 1) % FACES.length)}
                  className="w-9 h-9 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 hover:bg-[#1a1a1a] hover:text-white"
                  style={{ background: '#f5f5f5', border: '0.5px solid rgba(0,0,0,0.14)', borderRadius: 0, color: '#555' }}
                >→</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── THUMBNAIL STRIP ── */}
        <div className="grid gap-[3px] mt-[3px]" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {FACES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => goTo(i)}
              className="relative overflow-hidden cursor-pointer group transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]"
              style={{ border: i === idx ? '1.5px solid #C8D400' : '0.5px solid rgba(0,0,0,0.09)', borderRadius: 0, background: '#f5f5f5' }}
            >
              {i === idx && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8D400]" />}
              {/* Thumbnail image area */}
              <div className="h-[110px] relative overflow-hidden flex items-center justify-center" style={{ background: f.imageBg }}>
                <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" style={{ opacity: 0.5, mixBlendMode: 'luminosity' }} />
                <div className="absolute inset-0" style={{ background: 'rgba(17,17,17,0.35)' }} />
                {/* Play hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(17,17,17,0.4)' }}>
                  <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'rgba(200,212,0,0.2)', border: '1px solid rgba(200,212,0,0.5)' }}>
                    <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '6px 0 6px 11px', borderColor: 'transparent transparent transparent #C8D400', marginLeft: '2px' }} />
                  </div>
                </div>
                {/* EP badge */}
                <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5" style={{ background: 'rgba(0,0,0,0.7)', fontSize: '8px', letterSpacing: '0.1em', color: '#C8D400', fontFamily: 'monospace' }}>EP. {f.ep}</div>
                <div className="absolute bottom-2 right-2 z-10 px-1.5 py-0.5 text-[8px]" style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.6)', fontFamily: 'monospace' }}>{f.dur}</div>
              </div>
              <div className="p-3">
                <div className="text-base font-black text-[#1a1a1a] leading-none mb-0.5 tracking-tight">{f.name}</div>
                <div className="text-[9px] font-black uppercase tracking-[0.08em] text-gray-400">{f.role.split(' · ')[0]}</div>
              </div>
            </button>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="grid gap-[3px] mt-[3px]" style={{ gridTemplateColumns: '1fr auto' }}>
          {/* CTA */}
          <div className="flex items-center justify-between gap-6 px-8 py-6" style={{ background: '#111' }}>
            <div>
              <h4 className="text-sm font-black mb-1.5 text-white">Dein Gesicht bei Sonic Faces?</h4>
              <p className="text-xs font-light leading-relaxed max-w-md text-white/35">Wir suchen Sonic-Mitarbeiter:innen, die ihre Geschichte teilen möchten — 15 Minuten, ehrliche Fragen, keine Schminke.</p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 px-5 py-3 text-[11px] font-black uppercase tracking-[0.08em] cursor-pointer transition-all duration-200 hover:bg-[#d4f040] hover:-translate-y-px whitespace-nowrap"
              style={{ background: '#C8D400', color: '#111', borderRadius: 0, flexShrink: 0 }}
            >
              Mitmachen →
            </a>
          </div>
          {/* Next episode */}
          <div className="flex flex-col justify-center gap-1.5 px-8 py-6 min-w-[180px]" style={{ background: '#f5f5f5', border: '0.5px solid rgba(0,0,0,0.09)' }}>
            <div className="text-[8px] font-black uppercase tracking-[0.14em] text-gray-400">Nächste Episode</div>
            <div className="text-xl font-black text-[#1a1a1a] leading-none tracking-tight">{next.name}</div>
            <div className="text-[10px] font-medium text-gray-400">{next.role.split(' · ')[0]}</div>
          </div>
        </div>

      </div>

      <div className="h-0" />
    </section>
  );
}
