import { useState } from 'react';
import PhoneFrame from '@/components/base/PhoneFrame';

type Variant = 'sales' | 'staff';

interface Props {
  variant: Variant;
}

const salesReviews = [
  {
    name: 'Lukas M.',
    position: 'Account Manager',
    quote: 'Bei Sonic habe ich gelernt, was echtes Teamwork bedeutet. In drei Jahren vom Promoter zum Account Manager – die Entwicklung ist real und wird aktiv gefördert.',
    metric: '3 Jahre Tenure',
    icon: 'ri-arrow-up-line',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/6.jpg',
    time: '14:32',
  },
  {
    name: 'Sofia K.',
    position: 'HR Business Partner',
    quote: 'Das ist kein Job – das ist eine echte Community. Die Sonic Family trägt dich auch durch schwierige Zeiten. Hier wird Mensch vor Kennzahl gestellt.',
    metric: '98% Zufriedenheit',
    icon: 'ri-heart-pulse-line',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/POS_NEU.jpg',
    time: '09:15',
  },
  {
    name: 'David R.',
    position: 'Regional Lead DACH',
    quote: 'Klare Ziele, ehrliches Feedback, echte Aufstiegsmöglichkeiten. Ich habe bei Sonic mehr gelernt als in den zehn Jahren davor – und das sage ich ohne Übertreibung.',
    metric: '+130% Umsatzwachstum',
    icon: 'ri-line-chart-line',
    image: 'https://www.sonic-group.de/wp-content/uploads/2022/04/SRT_OPENER.jpg',
    time: '16:45',
  },
];

const staffReviews = [
  {
    name: 'Aylin T.',
    position: 'Brand Promoterin – Garmin',
    quote: 'Ich arbeite wann ich will, verdiene gut und bekomme Produkte in die Hand, für die ich wirklich brenne. Sonic gibt mir Freiheit und gleichzeitig Rückhalt.',
    metric: 'Flex-Einsatzplanung',
    icon: 'ri-calendar-check-line',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/3-1-1024x448.jpg',
    time: '11:20',
  },
  {
    name: 'Marius S.',
    position: 'Event- & Messe-Promoter',
    quote: 'Sonic gibt mir die Freiheit, die ich brauche – und gleichzeitig das Netzwerk, das mich weiterbringt. 150+ Marken, echte Events, echter Spaß bei der Arbeit.',
    metric: '150+ Markenpartner',
    icon: 'ri-store-2-line',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/02/EVENT_NEU.jpg',
    time: '18:05',
  },
  {
    name: 'Jana W.',
    position: 'Field Sales Specialist',
    quote: 'Kein starres 9-to-5. Einfach performen, Boni kassieren und dabei wirklich Spaß haben. Die Incentive-Programme sind top – ich verdiene deutlich mehr als erwartet.',
    metric: 'Top-Incentive-Programm',
    icon: 'ri-trophy-line',
    image: 'https://www.sonic-group.de/wp-content/uploads/2023/01/7-1.jpg',
    time: '13:50',
  },
];

export default function MitarbeiterStimmen({ variant }: Props) {
  const [activeReview, setActiveReview] = useState(0);
  const [hoveredPortrait, setHoveredPortrait] = useState(false);
  const reviews = variant === 'sales' ? salesReviews : staffReviews;
  const active = reviews[activeReview];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8D400]/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#111] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Mitarbeiter-Stimmen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] mb-3 uppercase">
            WAS UNSERE LEUTE SAGEN
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Echte Menschen, echte Erfahrungen – keine Hochglanzbroschüre.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left: Chat-style phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneFrame width={300}>
              <div className="bg-[#111] flex flex-col" style={{ height: 488 }}>
                {/* Status bar */}
                <div className="h-6 bg-[#0d0d0d] flex items-center justify-between px-3 flex-shrink-0">
                  <span className="text-[7px] text-gray-500 font-bold">{active.time}</span>
                  <div className="flex items-center gap-1">
                    <i className="ri-signal-wifi-line text-gray-500 text-[8px]" />
                    <i className="ri-battery-fill text-[#C8D400] text-[8px]" />
                  </div>
                </div>
                {/* App header */}
                <div className="h-10 bg-[#0d0d0d] border-b border-white/5 flex items-center px-3 flex-shrink-0">
                  <div className="w-6 h-6 bg-[#C8D400] flex items-center justify-center mr-2">
                    <i className="ri-team-line text-[#111] text-[10px]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-white block leading-tight">Sonic Team Chat</span>
                    <span className="text-[7px] text-[#C8D400]">{reviews.length} Mitarbeiter online</span>
                  </div>
                </div>
                {/* Chat messages */}
                <div className="flex-1 overflow-hidden p-3 space-y-3">
                  {reviews.map((review, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveReview(i)}
                      role="tab"
                      aria-selected={activeReview === i}
                      aria-controls={`review-panel-${i}`}
                      id={`review-tab-${i}`}
                      className={`w-full text-left transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                        activeReview === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {/* Mini polaroid avatar */}
                        <div
                          className="flex-shrink-0 flex flex-col"
                          style={{
                            background: '#f5f2ec',
                            padding: '2px 2px 10px 2px',
                            width: '32px',
                            boxShadow: activeReview === i
                              ? '0 4px 12px rgba(0,0,0,0.5)'
                              : '0 2px 6px rgba(0,0,0,0.3)',
                            transform: activeReview === i ? 'rotate(0deg)' : 'rotate(-1.5deg)',
                            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
                            border: activeReview === i ? '1px solid rgba(200,212,0,0.5)' : '1px solid rgba(245,242,236,0.2)',
                          }}
                        >
                          <div className="relative overflow-hidden" style={{ height: '28px' }}>
                            <img src={review.image} alt={review.name} className="w-full h-full object-cover object-top" />
                            <div className="absolute bottom-0 left-0 right-0 h-[1.5px]" style={{ background: activeReview === i ? '#C8D400' : 'rgba(200,212,0,0.3)' }} />
                          </div>
                          {/* Tiny caption strip */}
                          <div className="flex items-center justify-center relative overflow-hidden" style={{ height: '8px', background: '#f5f2ec' }}>
                            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.1\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px', opacity: 0.5, mixBlendMode: 'multiply' }} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-xs font-bold text-white">{review.name}</span>
                            <span className="text-xs text-gray-500">{review.time}</span>
                          </div>
                          <div className={`inline-block max-w-full ${
                            activeReview === i
                              ? 'bg-[#C8D400]/15 border border-[#C8D400]/30'
                              : 'bg-white/5 border border-white/5'
                          } px-2.5 py-1.5`}>
                            <p className="text-xs text-gray-300 leading-snug line-clamp-2">{review.quote}</p>
                          </div>
                          {activeReview === i && (
                            <div className="flex items-center gap-1 mt-1">
                              <i className={`${review.icon} text-[#C8D400] text-[8px]`} />
                              <span className="text-xs text-[#C8D400] font-bold">{review.metric}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                {/* Input area */}
                <div className="h-10 bg-[#0d0d0d] border-t border-white/5 flex items-center px-3 gap-2 flex-shrink-0">
                  <div className="flex-1 h-6 bg-white/5 border border-white/10 flex items-center px-2">
                    <span className="text-xs text-gray-600">Nachricht schreiben...</span>
                  </div>
                  <div className="w-6 h-6 bg-[#C8D400] flex items-center justify-center cursor-pointer">
                    <i className="ri-send-plane-fill text-[#111] text-[10px]" />
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>

          {/* Right: Active review detail */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#111] border-2 border-[#C8D400]/20 p-8 relative overflow-hidden" role="tabpanel" id={`review-panel-${activeReview}`} aria-labelledby={`review-tab-${activeReview}`}>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C8D400 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              <div className="relative z-10">
                {/* Profile header — polaroid portrait */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Polaroid portrait */}
                  <div
                    className="flex-shrink-0 flex flex-col cursor-pointer"
                    onMouseEnter={() => setHoveredPortrait(true)}
                    onMouseLeave={() => setHoveredPortrait(false)}
                    style={{
                      background: '#f5f2ec',
                      padding: '4px 4px 28px 4px',
                      width: '72px',
                      boxShadow: hoveredPortrait
                        ? '0 12px 32px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5)'
                        : '0 6px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.35)',
                      transform: hoveredPortrait
                        ? 'rotate(0deg) translateY(-3px) scale(1.04)'
                        : 'rotate(-1.2deg) scale(1)',
                      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    <div className="relative overflow-hidden" style={{ height: '64px' }}>
                      <img src={active.image} alt={active.name} className="w-full h-full object-cover object-top" />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#C8D400' }} />
                    </div>
                    {/* Caption strip */}
                    <div className="flex flex-col items-center justify-center pt-1.5 pb-0.5 relative overflow-hidden" style={{ background: '#f5f2ec' }}>
                      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\' opacity=\'0.12\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px', opacity: 0.55, mixBlendMode: 'multiply' }} />
                      <div className="relative z-10 text-[7px] font-black uppercase tracking-[0.1em] text-[#111]/65 leading-none truncate w-full text-center">{active.name.split(' ')[0]}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{active.name}</h3>
                    <p className="text-sm text-[#C8D400]">{active.position}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <i className="ri-double-quotes-l text-3xl text-[#C8D400]/40 mb-3 block" />
                  <p className="text-base text-gray-300 leading-relaxed">{active.quote}</p>
                </div>

                {/* Metric */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 bg-[#C8D400]/15 border border-[#C8D400]/30 flex items-center justify-center">
                    <i className={`${active.icon} text-[#C8D400] text-lg`} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Highlight</span>
                    <p className="text-sm font-black text-[#C8D400]">{active.metric}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review selector dots */}
            <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Review-Navigation">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  aria-label={`Review ${i + 1} von ${reviews.length}`}
                  aria-selected={activeReview === i}
                  className={`transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime ${
                    activeReview === i ? 'w-6 h-1.5 bg-[#C8D400]' : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 py-6 border-t border-gray-100">
          {[
            { icon: 'ri-star-fill', label: '4.8 / 5 Bewertung auf Kununu' },
            { icon: 'ri-time-line', label: 'Ø 5,15 Jahre Betriebszugehörigkeit' },
            { icon: 'ri-emotion-happy-line', label: '98 % Mitarbeiterzufriedenheit' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <i className={`${item.icon} text-[#C8D400]`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}