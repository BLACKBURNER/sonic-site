import { useState, useEffect, useRef } from 'react';
import PhoneFrame from '@/components/base/PhoneFrame';

const STUDIO_IMG = 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/f404951b-e9f8-4063-b803-e1145f43d540_DSC02106-Kopie.jpg';

interface Touchpoint {
  icon: string;
  label: string;
  tag: string;
  desc: string;
  angle: number;
  dist: number;
}

const TOUCHPOINTS: Touchpoint[] = [
  {
    icon: 'ri-global-line',
    label: 'Website-Button',
    tag: 'ONLINE',
    desc: 'Ein Klick auf der Homepage oder im Shop — Besucher verbinden sich direkt mit dem Live-Studio. Kein Download, kein Login. Nur ein Button, und die Beratung beginnt.',
    angle: -135,
    dist: 220,
  },
  {
    icon: 'ri-qr-code-line',
    label: 'QR-Codes',
    tag: 'SCAN',
    desc: 'Auf Displays, Flyern, Plakaten, Messeständen — überall scannbar. Die Kamera öffnen, scannen, und in unter 2 Sekunden ist der Kunde live mit einem Berater verbunden.',
    angle: -60,
    dist: 235,
  },
  {
    icon: 'ri-store-2-line',
    label: 'POS Material',
    tag: 'RETAIL',
    desc: 'Wobbler, Regalstopper, Aufsteller, Thekendisplays — physische Touchpoints am Point of Sale, die Shopper per QR-Code ins Live-Studio holen. Direkt am Regal.',
    angle: 20,
    dist: 250,
  },
  {
    icon: 'ri-layout-grid-line',
    label: 'POS Möbel',
    tag: 'FIXTURE',
    desc: 'Regalschienen, Displays, Theken — fest installierte Touchpoints für dauerhafte Studio-Erreichbarkeit. Die Marke ist immer nur einen Scan entfernt.',
    angle: 100,
    dist: 235,
  },
  {
    icon: 'ri-archive-line',
    label: 'Produktverpackung',
    tag: 'PACKAGE',
    desc: 'QR-Code direkt auf der Verpackung — der Kunde scannt das Produkt und wird sofort mit einem Produktexperten verbunden. Auch nach dem Kauf, für Support & Setup.',
    angle: 170,
    dist: 220,
  },
];

interface Outcome {
  icon: string;
  label: string;
  tag: string;
  desc: string;
}

const OUTCOMES: Outcome[] = [
  {
    icon: 'ri-ticket-2-line',
    label: 'Coupons',
    tag: 'CONVERT',
    desc: 'Live-Berater erstellen während des Calls personalisierte Rabatt-Codes — direkt aufs Smartphone. Steigert die Conversion-Rate am POS massiv und macht aus Interessenten Käufer.',
  },
  {
    icon: 'ri-customer-service-2-line',
    label: 'Service-Anfragen',
    tag: 'SUPPORT',
    desc: 'Kundenfragen werden live beantwortet oder strukturiert ans Customer Service Team weitergeleitet — in Echtzeit, mit vollständigem Gesprächsprotokoll. Keine Warteschleife, kein Ticket-Chaos.',
  },
  {
    icon: 'ri-bar-chart-box-line',
    label: 'Daten & Insights',
    tag: 'ANALYSE',
    desc: 'Jede Interaktion wird getrackt: Scan-Quelle, Gesprächsdauer, Conversion, Kundenfeedback, Retourenverhalten — alles live im SRT Dashboard. Automatisch. In Echtzeit.',
  },
];

function PhoneStudio() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      <img
        src={STUDIO_IMG}
        alt="LVP Studio"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      {/* LIVE badge */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-red-500 px-2 py-1">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        <span className="text-white text-[9px] font-black uppercase tracking-widest">LIVE</span>
      </div>
      {/* Signal quality */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
        {[3, 5, 7, 9].map((h, i) => (
          <div key={i} className="w-1 bg-[#C8D400]" style={{ height: `${h}px` }} />
        ))}
      </div>
      {/* Advisor info + chat */}
      <div className="absolute bottom-14 left-2.5 right-2.5 bg-black/70 backdrop-blur-sm p-2">
        <div className="text-white/60 text-[8px] font-semibold mb-0.5">Berater · Sarah K.</div>
        <div className="text-white text-[9px] font-medium leading-tight">
          &ldquo;Willkommen im LVP Studio! Wie kann ich helfen?&rdquo;
        </div>
      </div>
      {/* Outcome pills floating inside phone */}
      <div className="absolute top-12 right-2 flex flex-col gap-1">
        <div className="bg-[#C8D400] text-[#111] text-[7px] font-black uppercase tracking-wider px-1.5 py-0.5">
          <i className="ri-ticket-2-line mr-0.5 text-[8px]" />-15% Coupon
        </div>
        <div className="bg-white/20 backdrop-blur-sm text-white text-[7px] font-black uppercase tracking-wider px-1.5 py-0.5">
          <i className="ri-bar-chart-box-line mr-0.5 text-[8px]" />Getrackt
        </div>
      </div>
      {/* Call controls */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
        <div className="w-9 h-9 bg-[#333]/90 flex items-center justify-center cursor-pointer rounded-full">
          <i className="ri-mic-line text-white text-sm" />
        </div>
        <div className="w-9 h-9 bg-[#C8D400] flex items-center justify-center cursor-pointer rounded-full">
          <i className="ri-play-fill text-[#111] text-sm ml-0.5" />
        </div>
        <div className="w-9 h-9 bg-red-500 flex items-center justify-center cursor-pointer rounded-full">
          <i className="ri-phone-line text-white text-sm" />
        </div>
      </div>
    </div>
  );
}

/* Animated dashed orbit ring using CSS animation */
function OrbitRing({ radius, dashed = true, speed = 30, opacity = 0.15 }: { radius: number; dashed?: boolean; speed?: number; opacity?: number }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: dashed
            ? `1px dashed rgba(200,212,0,${opacity})`
            : `1px solid rgba(200,212,0,${opacity})`,
          animation: `spinOrbit ${speed}s linear infinite`,
        }}
      />
    </div>
  );
}

/* Animated connection line from touchpoint to center */
function ConnectionLine({ angle, dist, active }: { angle: number; dist: number; active: boolean }) {
  const rad = (angle * Math.PI) / 180;
  const cx = 0;
  const cy = 0;
  const x2 = Math.cos(rad) * dist;
  const y2 = Math.sin(rad) * dist;

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        overflow: 'visible',
        zIndex: 2,
        transform: 'translate(-50%, -50%)',
        width: '1px',
        height: '1px',
      }}
    >
      <line
        x1={cx}
        y1={cy}
        x2={x2}
        y2={y2}
        stroke={active ? 'rgba(200,212,0,0.7)' : 'rgba(200,212,0,0.12)'}
        strokeWidth={active ? 1.5 : 1}
        strokeDasharray={active ? 'none' : '4 6'}
        style={{ transition: 'all 0.4s ease' }}
      />
      {active && (
        <>
          {/* Animated pulse dot traveling along line */}
          <circle r="3" fill="#C8D400" opacity="0.9">
            <animateMotion dur="1.2s" repeatCount="indefinite">
              <mpath href="#DUMMY" />
              <animateMotion
                dur="1.2s"
                repeatCount="indefinite"
                path={`M ${x2},${y2} L ${cx},${cy}`}
              />
            </animateMotion>
          </circle>
        </>
      )}
    </svg>
  );
}

/* Touchpoint node — positioned absolutely using angle+dist */
function TouchpointNode({
  tp,
  active,
  onClick,
}: {
  tp: Touchpoint;
  active: boolean;
  onClick: () => void;
}) {
  const rad = (tp.angle * Math.PI) / 180;
  const x = Math.cos(rad) * tp.dist;
  const y = Math.sin(rad) * tp.dist;

  return (
    <>
      {/* Animated connection line */}
      <svg
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          overflow: 'visible',
          zIndex: 2,
          width: '1px',
          height: '1px',
        }}
      >
        <line
          x1={0}
          y1={0}
          x2={x}
          y2={y}
          stroke={active ? 'rgba(200,212,0,0.6)' : 'rgba(200,212,0,0.1)'}
          strokeWidth={active ? 1.5 : 1}
          strokeDasharray="4 6"
          style={{ transition: 'stroke 0.3s ease, stroke-width 0.3s ease' }}
        />
        {active && (
          <circle fill="#C8D400" r="2.5" opacity="0.9">
            <animateMotion
              dur="1.4s"
              repeatCount="indefinite"
              path={`M ${x},${y} L 0,0`}
            />
          </circle>
        )}
      </svg>

      {/* Node button */}
      <div
        className="absolute z-20 cursor-pointer group"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={onClick}
        onMouseEnter={onClick}
      >
        {/* Outer glow on active */}
        {active && (
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(200,212,0,0.2)', transform: 'scale(2.5)' }}
          />
        )}

        <div
          className="flex items-center gap-2 px-3 py-1.5 border transition-all duration-300 whitespace-nowrap"
          style={{
            background: active ? 'rgba(200,212,0,0.2)' : 'rgba(20,20,20,0.9)',
            borderColor: active ? 'rgba(200,212,0,0.7)' : 'rgba(255,255,255,0.12)',
            transform: active ? 'scale(1.05)' : 'scale(1)',
            boxShadow: active ? '0 0 20px rgba(200,212,0,0.35)' : 'none',
          }}
        >
          <div
            className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{ background: active ? '#C8D400' : 'rgba(255,255,255,0.08)' }}
          >
            <i
              className={`${tp.icon} text-[9px]`}
              style={{ color: active ? '#111' : 'rgba(255,255,255,0.5)' }}
            />
          </div>
          <span
            className="text-[9px] font-black uppercase tracking-widest transition-colors duration-300"
            style={{ color: active ? '#C8D400' : 'rgba(255,255,255,0.45)' }}
          >
            {tp.label}
          </span>
        </div>
      </div>
    </>
  );
}

export default function VideoStudioPhone() {
  const [activeTouchpoint, setActiveTouchpoint] = useState(0);
  const [activeOutcome, setActiveOutcome] = useState(0);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle touchpoints
  useEffect(() => {
    if (isPaused) return;
    cycleRef.current = setInterval(() => {
      setActiveTouchpoint((prev) => (prev + 1) % TOUCHPOINTS.length);
    }, 2600);
    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [isPaused]);

  const handleTouchpointClick = (i: number) => {
    setActiveTouchpoint(i);
    setIsPaused(true);
    // Resume auto-cycle after 5s of user interaction pause
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = setTimeout(() => setIsPaused(false), 5000) as unknown as ReturnType<typeof setInterval>;
  };

  return (
    <section id="beispiele" className="bg-[#111] py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#C8D400]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#C8D400]/3 blur-[100px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,212,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1.5 h-1.5 bg-[#C8D400]" />
            <span className="text-[#C8D400] text-xs font-black uppercase tracking-[0.25em]">LVP Ökosystem — Unendliche Möglichkeiten</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3 uppercase">
            Ein Scan. Unendlich viele
            <span className="block text-[#C8D400]">Berührungspunkte.</span>
          </h2>
          <p className="text-white/45 text-base max-w-2xl">
            Vom Website-Button über QR-Codes am POS bis zum Code auf der Verpackung — deine Marke ist überall nur einen Scan vom Live-Studio entfernt. Und dort passiert die Magie: Beratung, Coupons, Service, Daten.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-0 border border-[#C8D400]/15">

          {/* LEFT: Phone + Touchpoint ecosystem */}
          <div
            className="bg-[#1a1a1a] flex items-center justify-center border-r border-[#C8D400]/15 relative overflow-hidden"
            style={{ minHeight: '680px' }}
          >
            {/* Pulsing center glow behind phone */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '460px',
                height: '460px',
                background: 'radial-gradient(ellipse at center, rgba(200,212,0,0.07) 0%, transparent 65%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />

            {/* Orbit rings */}
            <OrbitRing radius={170} dashed={false} opacity={0.06} speed={60} />
            <OrbitRing radius={240} dashed speed={45} opacity={0.10} />
            <OrbitRing radius={310} dashed speed={80} opacity={0.06} />

            {/* Touchpoint nodes (positioned radially) */}
            {TOUCHPOINTS.map((tp, i) => (
              <TouchpointNode
                key={i}
                tp={tp}
                active={activeTouchpoint === i}
                onClick={() => handleTouchpointClick(i)}
              />
            ))}

            {/* Center: Phone mockup */}
            <div className="relative z-10" style={{ width: '300px' }}>
              {/* Inner glow halo */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-32px',
                  background: 'radial-gradient(ellipse at center, rgba(200,212,0,0.14) 0%, transparent 70%)',
                  zIndex: -1,
                  animation: 'glowPulse 3s ease-in-out infinite',
                }}
              />
              <PhoneFrame width={300}>
                <div className="bg-[#111] relative" style={{ height: 508 }}>
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-3 pt-2 pb-1 bg-[#0d0d0d] relative z-10">
                    <span className="text-white text-[9px] font-bold">9:41</span>
                    <div className="flex items-center gap-1 text-white">
                      <i className="ri-signal-tower-fill text-[9px]" />
                      <i className="ri-wifi-fill text-[9px]" />
                      <i className="ri-battery-fill text-[#C8D400] text-[9px]" />
                    </div>
                  </div>
                  {/* Screen content */}
                  <div className="absolute bottom-0 left-0 right-0" style={{ top: '30px' }}>
                    <PhoneStudio />
                  </div>
                </div>
              </PhoneFrame>

              {/* Scan beam animation across phone */}
              <div
                className="absolute pointer-events-none overflow-hidden"
                style={{ inset: '10px 0', zIndex: 5, borderRadius: '20px' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, rgba(200,212,0,0.6), transparent)',
                    animation: 'scanBeam 3s ease-in-out infinite',
                  }}
                />
              </div>
            </div>

            {/* "All paths lead to the studio" */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
              <div className="flex items-center gap-2 text-[#C8D400]/35 text-[9px] font-black uppercase tracking-widest">
                <i className="ri-arrow-down-double-line text-xs" />
                <span>Alle Wege führen ins Studio</span>
                <i className="ri-arrow-down-double-line text-xs" />
              </div>
            </div>

            {/* Auto-cycle indicator dots */}
            <div className="absolute bottom-5 right-5 flex gap-1.5 z-20">
              {TOUCHPOINTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleTouchpointClick(i)}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    width: activeTouchpoint === i ? '16px' : '5px',
                    height: '4px',
                    background: activeTouchpoint === i ? '#C8D400' : 'rgba(200,212,0,0.25)',
                    border: 'none',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Ecosystem Explanation */}
          <div className="p-8 md:p-10 flex flex-col" style={{ minHeight: '600px' }}>

            {/* ── Touchpoints Section ── */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#C8D400]/15 flex items-center justify-center border border-[#C8D400]/30">
                  <i className="ri-focus-2-line text-sm text-[#C8D400]" />
                </div>
                <div>
                  <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-0.5">Einstiegspunkte</div>
                  <div className="text-white text-sm font-black uppercase">5 Touchpoints. Überall.</div>
                </div>
              </div>

              {/* Touchpoint tabs */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {TOUCHPOINTS.map((tp, i) => (
                  <button
                    key={i}
                    onClick={() => handleTouchpointClick(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider cursor-pointer transition-all duration-200 border ${activeTouchpoint === i ? 'bg-[#C8D400]/20 border-[#C8D400]/50 text-[#C8D400]' : 'bg-transparent border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'}`}
                  >
                    <i className={`${tp.icon} text-xs`} />
                    {tp.label}
                  </button>
                ))}
              </div>

              {/* Active touchpoint description */}
              <div
                key={activeTouchpoint}
                className="bg-[#C8D400]/5 border border-[#C8D400]/10 p-4 transition-all duration-300"
                style={{ animation: 'fadeSlideIn 0.3s ease-out' }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#111] flex items-center justify-center flex-shrink-0 border border-[#C8D400]/30">
                    <i className={`${TOUCHPOINTS[activeTouchpoint].icon} text-lg text-[#C8D400]`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#C8D400] text-[9px] font-black uppercase tracking-widest">{TOUCHPOINTS[activeTouchpoint].tag}</span>
                      <span className="text-white text-sm font-black">{TOUCHPOINTS[activeTouchpoint].label}</span>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">{TOUCHPOINTS[activeTouchpoint].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Flow Arrow ── */}
            <div className="flex items-center justify-center py-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-[#C8D400]/30" />
                <div className="w-6 h-6 rounded-full border border-[#C8D400]/40 flex items-center justify-center bg-[#111]">
                  <i className="ri-arrow-down-line text-xs text-[#C8D400]" />
                </div>
                <div className="w-px h-6 bg-[#C8D400]/30" />
              </div>
            </div>

            {/* ── LVP Studio Hub ── */}
            <div className="mb-8 border border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-500/20 flex items-center justify-center border border-red-500/40">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-0.5">LVP Studio</div>
                  <div className="text-white text-sm font-black uppercase">Live. Persönlich. In Sekunden.</div>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  {[
                    { val: '1 Gbit/s', label: 'Glasfaser' },
                    { val: '99.9%', label: 'Uptime' },
                    { val: '<2s', label: 'Connect' },
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[#C8D400] text-[10px] font-black">{m.val}</div>
                      <div className="text-white/25 text-[8px] uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white/40 text-xs leading-relaxed pl-11">
                Geschulte Markenbotschafter antworten in Echtzeit per Video. Vom ersten Scan bis zum Gespräch vergehen unter 2 Sekunden.
              </p>
            </div>

            {/* ── Flow Arrow ── */}
            <div className="flex items-center justify-center py-2">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-[#C8D400]/30" />
                <div className="w-6 h-6 rounded-full border border-[#C8D400]/40 flex items-center justify-center bg-[#111]">
                  <i className="ri-arrow-down-line text-xs text-[#C8D400]" />
                </div>
                <div className="w-px h-6 bg-[#C8D400]/30" />
              </div>
            </div>

            {/* ── Outcomes Section ── */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#C8D400]/15 flex items-center justify-center border border-[#C8D400]/30">
                  <i className="ri-sparkling-line text-sm text-[#C8D400]" />
                </div>
                <div>
                  <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-0.5">Ergebnisse</div>
                  <div className="text-white text-sm font-black uppercase">3 Outcomes aus jedem Call</div>
                </div>
              </div>

              {/* Outcome tabs */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {OUTCOMES.map((o, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveOutcome(i)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider cursor-pointer transition-all duration-200 border ${activeOutcome === i ? 'bg-[#C8D400]/20 border-[#C8D400]/50 text-[#C8D400]' : 'bg-transparent border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'}`}
                  >
                    <i className={`${o.icon} text-xs`} />
                    {o.label}
                  </button>
                ))}
              </div>

              {/* Active outcome description */}
              <div
                key={`outcome-${activeOutcome}`}
                className="bg-[#C8D400]/5 border border-[#C8D400]/10 p-4"
                style={{ animation: 'fadeSlideIn 0.3s ease-out' }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#111] flex items-center justify-center flex-shrink-0 border border-[#C8D400]/30">
                    <i className={`${OUTCOMES[activeOutcome].icon} text-lg text-[#C8D400]`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#C8D400] text-[9px] font-black uppercase tracking-widest">{OUTCOMES[activeOutcome].tag}</span>
                      <span className="text-white text-sm font-black">{OUTCOMES[activeOutcome].label}</span>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">{OUTCOMES[activeOutcome].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-auto">
              <a
                href="mailto:info@sonic-promo.de?subject=Live-Demo anfragen"
                className="flex-1 flex items-center justify-center gap-2 bg-[#C8D400] text-[#111] py-4 font-black text-sm uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Live-Demo anfragen
                <i className="ri-arrow-right-line" />
              </a>
              <a
                href="/case-studies"
                className="px-6 py-4 border border-white/20 text-white font-black text-sm uppercase tracking-wider hover:border-[#C8D400] hover:text-[#C8D400] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes scanBeam {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}