import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizModal from './QuizModal';
import Tag from '@/components/base/Tag';

const challenges = [
  {
    id: 'markteintritt',
    number: '01',
    tag: 'MARKTEINTRITT',
    heading: 'MARKTEINTRITT',
    desc: 'Neue Marken und Produkte sind erklärungsbedürftig. Wir machen deine Botschaft am POS, per Video und per Live-Kommunikation erlebbar.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20rocket%20launch%20icon%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20rocket%20ship%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-carved-rocket-challenge-1&orientation=squarish',
    solutionKey: 'markteintritt',
    cta: 'MEHR DAZU',
    tags: ['Markteinführung', 'POS', 'Live-Kommunikation'],
  },
  {
    id: 'absatz',
    number: '02',
    tag: 'ABSATZ STEIGERN',
    heading: 'ABSATZ STEIGERN',
    desc: 'Unsere Field-Force-Teams sorgen dafür, dass euer Produkt im Retail stärker verkauft wird. Planbar. Profitabel. Immer im Blick: Zielerreichung und ROI.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20bar%20chart%20growth%20arrow%20upward%20icon%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20rising%20graph%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-carved-chart-challenge-2&orientation=squarish',
    solutionKey: 'absatz',
    cta: 'MEHR DAZU',
    tags: ['Field Force', 'Retail', 'ROI'],
  },
  {
    id: 'omnichannel',
    number: '03',
    tag: 'OMNICHANNEL OPTIMIEREN',
    heading: 'OMNICHANNEL OPTIMIEREN',
    desc: 'Bereichert Packaging und Online-Shop mit Zugang zu Live-Video-Kaufberatung: Conversions steigern, Retouren vermeiden.',
    woodIcon: 'https://readdy.ai/api/search-image?query=carved%20wooden%20store%20shop%20building%20icon%20made%20from%20solid%20walnut%20wood%20three%20dimensional%20relief%20carving%20natural%20wood%20grain%20texture%20warm%20rich%20brown%20color%20simple%20minimalist%20retail%20storefront%20symbol%20handcrafted%20artisan%20quality%20on%20clean%20white%20background%20top%20view%20product%20photography%20studio%20lighting&width=120&height=120&seq=wood-carved-store-challenge-3&orientation=squarish',
    solutionKey: 'omnichannel',
    cta: 'MEHR DAZU',
    tags: ['Live-Video', 'E-Commerce', 'Conversions'],
  },
];

export default function ChallengeSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const navigate = useNavigate();

  const handleMehrDazu = (solutionKey: string) => {
    navigate(`/losungen?open=${solutionKey}`);
  };

  const isActive = (id: string) => hoveredCard === id || focusedCard === id;

  return (
    <>
      <section id="losungen" className="py-16 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8D400]/3 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8D400]/2 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 bg-[#C8D400] rounded-full animate-pulse"></div>
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Deine Challenge</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-sonic-dark leading-tight mb-5">
              DEINE CHALLENGE
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              An welchem Punkt stehst du?
            </p>
          </div>

          {/* Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {challenges.map((challenge) => {
              const active = isActive(challenge.id);

              return (
                <div
                  key={challenge.id}
                  role="button"
                  tabIndex={0}
                  className="relative overflow-hidden cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
                  style={{
                    transform: active ? 'translateY(-6px)' : 'translateY(0)',
                    background: active
                      ? 'linear-gradient(145deg, #1a1a1a 0%, #111 100%)'
                      : '#ffffff',
                    boxShadow: active
                      ? '0 28px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(200,212,0,0.3)'
                      : '0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06)',
                    borderRadius: 0,
                  }}
                  onMouseEnter={() => setHoveredCard(challenge.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onFocus={() => setFocusedCard(challenge.id)}
                  onBlur={() => setFocusedCard(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMehrDazu(challenge.solutionKey);
                    }
                  }}
                  aria-label={`${challenge.heading}: ${challenge.desc}`}
                >
                  {/* Lime accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 transition-all duration-500"
                    style={{
                      height: active ? '3px' : '2px',
                      background: active ? '#C8D400' : 'rgba(200,212,0,0.2)',
                      boxShadow: active ? '0 0 20px rgba(200,212,0,0.6)' : 'none',
                    }}
                    aria-hidden="true"
                  />

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex flex-col h-full min-h-[280px] md:min-h-[320px]">
                    {/* Number + Icon row */}
                    <div className="flex items-start justify-between mb-7">
                      <span
                        className="font-black leading-none transition-all duration-500 select-none"
                        style={{
                          fontSize: 'clamp(3rem, 12vw, 4rem)',
                          color: active ? 'rgba(200,212,0,0.15)' : 'rgba(0,0,0,0.06)',
                          letterSpacing: '-0.04em',
                          lineHeight: 1,
                        }}
                        aria-hidden="true"
                      >
                        {challenge.number}
                      </span>
                      <div
                        className="w-14 h-14 overflow-hidden transition-all duration-500 flex-shrink-0"
                        style={{
                          transform: active ? 'scale(1.1) rotate(-3deg)' : 'scale(1)',
                          boxShadow: active
                            ? '0 8px 24px rgba(139,90,43,0.35), 0 0 16px rgba(200,212,0,0.2)'
                            : '0 2px 8px rgba(139,90,43,0.15)',
                        }}
                      >
                        <img
                          src={challenge.woodIcon}
                          alt={challenge.heading}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Heading */}
                    <h3
                      className="text-xl font-black mb-3 leading-tight transition-colors duration-500"
                      style={{ color: active ? '#ffffff' : '#1a1a1a' }}
                    >
                      {challenge.heading}
                    </h3>

                    {/* Divider line */}
                    <div
                      className="mb-4 transition-all duration-500"
                      style={{
                        height: '1px',
                        background: active ? 'rgba(200,212,0,0.25)' : 'rgba(0,0,0,0.08)',
                      }}
                      aria-hidden="true"
                    />

                    <p
                      className="text-sm leading-relaxed flex-1 mb-6 transition-colors duration-500"
                      style={{ color: active ? 'rgba(255,255,255,0.7)' : '#6B7280' }}
                    >
                      {challenge.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {challenge.tags.map((tag) => (
                        <Tag key={tag} variant={active ? 'lime' : 'subtle'}>{tag}</Tag>
                      ))}
                    </div>

                    {/* CTA — navigates to Lösungen and opens the matching solution */}
                    <button
                      onClick={() => handleMehrDazu(challenge.solutionKey)}
                      className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 whitespace-nowrap w-fit cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
                      style={{
                        background: active ? '#C8D400' : 'rgba(0,0,0,0.07)',
                        color: active ? '#ffffff' : '#6B7280',
                        boxShadow: active ? '0 4px 20px rgba(200,212,0,0.4)' : 'none',
                      }}
                    >
                      {challenge.cta}
                      <i
                        className="ri-arrow-down-line text-sm transition-transform duration-300"
                        style={{ transform: active ? 'translateY(3px)' : 'translateY(0)' }}
                      ></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
