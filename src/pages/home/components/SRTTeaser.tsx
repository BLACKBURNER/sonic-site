import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const modules = [
  { icon: 'ri-user-star-line', label: 'Sonic Agentur' },
  { icon: 'ri-global-line', label: 'Externe Daten' },
  { icon: 'ri-file-list-3-line', label: 'Kunde' },
  { icon: 'ri-smartphone-line', label: 'Mitarbeiter' },
];

const nodes = [
  {
    id: 'agentur',
    label: 'SONIC AGENTUR',
    icon: 'ri-user-star-line',
    position: 'top',
    detail: {
      title: 'Sonic Agentur',
      desc: 'Direkte Anbindung an alle Sonic-Agenturdaten — Einsatzplanung, Teamleistung und Kampagnenstatus in Echtzeit.',
      tags: ['Einsatzplanung', 'Teamleistung', 'Kampagnenstatus'],
    },
  },
  {
    id: 'daten',
    label: 'EXTERNE DATEN',
    icon: 'ri-global-line',
    position: 'left',
    detail: {
      title: 'Externe Daten',
      desc: 'Integration externer Marktdaten, POS-Systeme und Drittanbieter-Feeds für ein vollständiges Bild.',
      tags: ['Marktdaten', 'POS-Integration', 'API-Feeds'],
    },
  },
  {
    id: 'kunde',
    label: 'KUNDE',
    icon: 'ri-file-list-3-line',
    position: 'right',
    detail: {
      title: 'Kunde',
      desc: 'Kunden erhalten maßgeschneiderte Dashboards mit Live-KPIs, Abverkaufsdaten und Forecasting.',
      tags: ['Live-KPIs', 'Abverkauf', 'Forecasting'],
    },
  },
  {
    id: 'mitarbeiter',
    label: 'MITARBEITER',
    icon: 'ri-smartphone-line',
    position: 'bottom',
    detail: {
      title: 'Mitarbeiter',
      desc: 'Außendienstmitarbeiter tracken Einsätze, Zielerreichung und Abrechnung direkt über die mobile App.',
      tags: ['Einsatztracking', 'Zielerreichung', 'Abrechnung'],
    },
  },
];

const SVG_WIDTH = 600;
const SVG_HEIGHT = 500;
const CENTER_NODE = { cx: 300, cy: 250, r: 62 };
const OUTER_NODES = {
  top: { cx: 300, cy: 60, r: 34 },
  left: { cx: 75, cy: 250, r: 34 },
  right: { cx: 525, cy: 250, r: 34 },
  bottom: { cx: 300, cy: 440, r: 34 },
};

function getLineCoords(
  outerNode: { cx: number; cy: number; r: number },
  centerNode: { cx: number; cy: number; r: number }
) {
  const dx = centerNode.cx - outerNode.cx;
  const dy = centerNode.cy - outerNode.cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / dist;
  const uy = dy / dist;
  return {
    x1: outerNode.cx + ux * outerNode.r,
    y1: outerNode.cy + uy * outerNode.r,
    x2: centerNode.cx - ux * centerNode.r,
    y2: centerNode.cy - uy * centerNode.r,
  };
}

const LINE_TOP = getLineCoords(OUTER_NODES.top, CENTER_NODE);
const LINE_LEFT = getLineCoords(OUTER_NODES.left, CENTER_NODE);
const LINE_RIGHT = getLineCoords(OUTER_NODES.right, CENTER_NODE);
const LINE_BOTTOM = getLineCoords(OUTER_NODES.bottom, CENTER_NODE);

export default function SRTTeaser() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeModule, setActiveModule] = useState(0);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulseCenter, setPulseCenter] = useState(false);
  const [scanY, setScanY] = useState(0);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      setPulseCenter(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setPulseCenter(true), 600);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Static module display — no auto-cycle
  // Users can explore modules at their own pace via hover

  // Scan line animation
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) % 3200;
      setScanY(elapsed / 3200);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const activeNodeData = nodes.find((n) => n.id === activeNode);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-6 bg-[#111] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(17,17,17,0.72) 0%, rgba(17,17,17,0.30) 25%, rgba(17,17,17,0.30) 75%, rgba(17,17,17,0.80) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#C8D400]/8 rounded-full blur-[120px] pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#C8D400]/5 rounded-full blur-[100px] pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 md:gap-12 xl:gap-20 items-center">
          {/* ── Left ── */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}


            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-5 leading-tight">
              SRT: SONIC
              <br />
              <span className="text-[#C8D400]">REPORTING TOOL</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-lg">
              Unser Field‑Force‑ERP‑System: Marktforschung, Forecasting, Einsatzplanung,
              Einsatztracking, Zielerreichung, Abrechnung, Dashboards. Alles in einem Tool,
              angedockt an eure Software.
            </p>

            {/* Module tags */}
            <div className="flex flex-wrap gap-2 md:gap-2.5 mb-8 md:mb-10">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 transition-all duration-500 cursor-default ${
                    activeModule === i
                      ? 'bg-[#C8D400]/20 border border-[#C8D400]/50 shadow-lg shadow-[#C8D400]/10'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div
                    className={`w-5 h-5 flex items-center justify-center transition-colors duration-500 ${
                      activeModule === i ? 'text-[#C8D400]' : 'text-gray-500'
                    }`}
                  >
                    <i className={`${mod.icon} text-base`} />
                  </div>
                  <span
                    className={`text-xs md:text-sm font-semibold transition-colors duration-500 whitespace-nowrap ${
                      activeModule === i ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {mod.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => handleNav('/srt')}
                className="inline-flex items-center gap-3 bg-[#C8D400] text-white px-6 md:px-7 py-3 md:py-3.5 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Mehr dazu
                <i className="ri-arrow-right-line text-lg" />
              </button>
            </div>
          </div>

          {/* ── Right – Diagram + Mini Phone ── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Main diagram panel */}
              <div
                className="relative border border-[#C8D400]/20 bg-[#0d0d0d]/92 backdrop-blur-sm overflow-hidden p-4 md:p-8 shadow-2xl shadow-[#C8D400]/5"
                role="region"
                aria-label="SRT Field-Force ERP System-Diagramm"
              >
                {/* Grid background */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(200,212,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.6) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                  aria-hidden="true"
                />

                {/* Scan line */}
                <div
                  className="absolute left-0 right-0 h-px pointer-events-none"
                  style={{
                    top: `${scanY * 100}%`,
                    background:
                      'linear-gradient(90deg, transparent, rgba(200,212,0,0.35) 30%, rgba(200,212,0,0.55) 50%, rgba(200,212,0,0.35) 70%, transparent)',
                    zIndex: 3,
                  }}
                  aria-hidden="true"
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-[#C8D400]/40 pointer-events-none" aria-hidden="true" />
                <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-[#C8D400]/40 pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-[#C8D400]/40 pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-[#C8D400]/40 pointer-events-none" aria-hidden="true" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
                    <span className="text-[10px] text-[#C8D400]/70 font-black uppercase tracking-[0.25em]">
                      Field‑Force ERP — Live
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
                    <span className="text-[9px] text-[#C8D400]/50 font-bold uppercase tracking-widest">
                      Angedockt
                    </span>
                  </div>
                </div>

                {/* Floating stat badges */}
                <div className="absolute top-[60px] left-5 z-20 bg-[#111]/90 border border-[#C8D400]/25 px-2.5 py-1.5">
                  <div className="text-[9px] text-[#C8D400]/60 font-bold uppercase tracking-wider">
                    Einsätze / Monat
                  </div>
                  <div className="text-base font-black text-white leading-tight">12.400+</div>
                </div>

                <div className="absolute top-[60px] right-5 z-20 bg-[#111]/90 border border-[#C8D400]/25 px-2.5 py-1.5">
                  <div className="text-[9px] text-[#C8D400]/60 font-bold uppercase tracking-wider">
                    Ø Zielerreichung
                  </div>
                  <div className="text-base font-black text-[#C8D400] leading-tight">94.7%</div>
                </div>

                {/* Node diagram */}
                <div
                  className="relative z-10 flex items-center justify-center"
                  style={{ height: 'clamp(360px, 60vw, 460px)' }}
                >
                  {/* SVG lines & packets */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                  >
                    <defs>
                      <filter id="srt-glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C8D400" stopOpacity="0.15" />
                        <stop offset="50%" stopColor="#C8D400" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#C8D400" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>

                    {/* Connection lines */}
                    {[
                      { line: LINE_TOP, id: 'agentur' },
                      { line: LINE_LEFT, id: 'daten' },
                      { line: LINE_RIGHT, id: 'kunde' },
                      { line: LINE_BOTTOM, id: 'mitarbeiter' },
                    ].map(({ line, id }) => (
                      <line
                        key={id}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="#C8D400"
                        strokeWidth="1.5"
                        strokeDasharray="5 5"
                        opacity={activeNode === id ? 1 : 0.22}
                        className="transition-all duration-300"
                        filter={activeNode === id ? 'url(#srt-glow)' : undefined}
                      />
                    ))}

                    {/* Travelling data packets */}
                    {[
                      { line: LINE_TOP, dur: '2s', delay: '0s' },
                      { line: LINE_LEFT, dur: '2.5s', delay: '0.6s' },
                      { line: LINE_RIGHT, dur: '2.2s', delay: '1.1s' },
                      { line: LINE_BOTTOM, dur: '2.8s', delay: '0.3s' },
                    ].map(({ line, dur, delay }, i) => (
                      <g key={i}>
                        <circle r="3.5" fill="#C8D400" opacity="0.95" filter="url(#srt-glow)">
                          <animateMotion
                            dur={dur}
                            begin={delay}
                            repeatCount="indefinite"
                            path={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
                          />
                        </circle>
                        <circle r="2" fill="#C8D400" opacity="0.35">
                          <animateMotion
                            dur={dur}
                            begin={`calc(${delay} + 0.08s)`}
                            repeatCount="indefinite"
                            path={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
                          />
                        </circle>
                      </g>
                    ))}
                  </svg>

                  {/* HTML nodes */}
                  <div className="absolute inset-0">
                    {/* Center node */}
                    <button
                      onClick={() => {
                        setActiveNode(activeNode === 'center' ? null : 'center');
                      }}
                      className={`absolute z-20 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer
                      ${pulseCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                      ${activeNode === 'center' ? 'ring-4 ring-[#C8D400]/70 shadow-2xl shadow-[#C8D400]/40' : 'hover:ring-2 hover:ring-[#C8D400]/50'}
                      focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C8D400]`}
                      style={{
                        width: 124,
                        height: 124,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#C8D400',
                        boxShadow:
                          '0 0 60px rgba(200,212,0,0.32), 0 0 20px rgba(200,212,0,0.18) inset, inset 0 0 0 2px rgba(255,255,255,0.12)',
                      }}
                      aria-label="Sonic Reporting Tool — Zentrales ERP-System"
                      aria-expanded={activeNode === 'center'}
                      aria-controls="srt-detail-panel"
                    >
                      <div className="w-9 h-9 flex items-center justify-center text-white">
                        <i className="ri-cpu-line text-2xl" />
                      </div>
                      <span className="text-white text-[8px] font-black uppercase tracking-wider text-center leading-tight mt-0.5 px-1">
                        SONIC
                        <br />
                        REPORT
                        <br />
                        TOOL
                      </span>
                      {pulseCenter && (
                        <>
                          <span className="absolute inset-0 animate-ping bg-[#C8D400]/18 pointer-events-none" />
                          <span
                            className="absolute animate-ping bg-[#C8D400]/8 pointer-events-none"
                            style={{ inset: '-14px', animationDuration: '2.4s' }}
                          />
                        </>
                      )}
                    </button>

                    {/* Outer nodes */}
                    {[
                      { node: nodes[0], coords: OUTER_NODES.top },
                      { node: nodes[1], coords: OUTER_NODES.left },
                      { node: nodes[2], coords: OUTER_NODES.right },
                      { node: nodes[3], coords: OUTER_NODES.bottom },
                    ].map(({ node, coords }) => (
                      <NodeButton
                        key={node.id}
                        node={node}
                        activeNode={activeNode}
                        onClick={setActiveNode}
                        svgCoords={coords}
                        containerWidth={SVG_WIDTH}
                        containerHeight={SVG_HEIGHT}
                      />
                    ))}
                  </div>
                </div>

                {/* Detail panel */}
                <div
                  id="srt-detail-panel"
                  className={`relative z-10 transition-all duration-300 overflow-hidden ${
                    activeNodeData ? 'max-h-44 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  {activeNodeData && (
                    <div className="border border-[#C8D400]/30 bg-[#C8D400]/5 px-5 py-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[#C8D400] text-xs font-black uppercase tracking-wider mb-1">
                            {activeNodeData.detail.title}
                          </p>
                          <p className="text-gray-400 text-xs leading-relaxed mb-3">
                            {activeNodeData.detail.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {activeNodeData.detail.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold text-[#C8D400]/80 bg-[#C8D400]/10 border border-[#C8D400]/20 px-2.5 py-0.5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveNode(null)}
                          className="text-gray-600 hover:text-[#C8D400] transition-colors cursor-pointer flex-shrink-0 w-11 h-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] active:scale-95"
                          aria-label="Detail-Panel schließen"
                        >
                          <i className="ri-close-line text-base" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {!activeNode && (
                  <div className="relative z-10 text-center mt-3">
                    <p className="text-[10px] text-gray-600 font-semibold animate-pulse">
                      ○ Klicke auf ein Modul für Details
                    </p>
                  </div>
                )}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── NodeButton ──────────────────────────────────────────────────────────────
interface NodeButtonProps {
  node: { id: string; label: string; icon: string };
  activeNode: string | null;
  onClick: (id: string | null) => void;
  svgCoords: { cx: number; cy: number; r: number };
  containerWidth: number;
  containerHeight: number;
}

function NodeButton({
  node,
  activeNode,
  onClick,
  svgCoords,
  containerWidth,
  containerHeight,
}: NodeButtonProps) {
  const isActive = activeNode === node.id;
  const leftPct = (svgCoords.cx / containerWidth) * 100;
  const topPct = (svgCoords.cy / containerHeight) * 100;

  return (
    <button
      onClick={() => {
        onClick(isActive ? null : node.id);
      }}
      className={`absolute z-20 flex flex-col items-center gap-1.5 cursor-pointer group transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${isActive ? 'scale-110' : 'hover:scale-105'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400]`}
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
      aria-label={`${node.label} — Modul im SRT System`}
      aria-expanded={isActive}
      aria-controls="srt-detail-panel"
    >
      {/* Outer ring decoration */}
      <div className="relative">
        {isActive && (
          <div
            className="absolute inset-0 animate-ping"
            style={{ background: 'rgba(200,212,0,0.12)', inset: '-6px' }}
          />
        )}
        <div
          className={`w-[68px] h-[68px] flex items-center justify-center transition-all duration-300 border-2 ${
            isActive
              ? 'bg-[#C8D400]/18 border-[#C8D400] shadow-lg shadow-[#C8D400]/40'
              : 'bg-[#181818] border-[#C8D400]/30 group-hover:border-[#C8D400]/75 group-hover:bg-[#C8D400]/8'
          }`}
          style={isActive ? { boxShadow: '0 0 24px rgba(200,212,0,0.32)' } : {}}
        >
          {/* Inner accent */}
          <div
            className={`w-[46px] h-[46px] flex items-center justify-center border transition-all duration-300 ${
              isActive ? 'border-[#C8D400]/40 bg-[#C8D400]/10' : 'border-[#C8D400]/12 bg-transparent'
            }`}
          >
            <div
              className={`w-7 h-7 flex items-center justify-center transition-colors duration-300 ${
                isActive ? 'text-[#C8D400]' : 'text-[#C8D400]/50 group-hover:text-[#C8D400]/85'
              }`}
            >
              <i className={`${node.icon} text-xl`} />
            </div>
          </div>
        </div>
      </div>

      <span
        className={`text-[9px] font-black uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${
          isActive ? 'text-[#C8D400]' : 'text-gray-600 group-hover:text-gray-300'
        }`}
      >
        {node.label}
      </span>
    </button>
  );
}