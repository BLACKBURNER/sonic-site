import { useState } from 'react';
import { Link } from 'react-router-dom';

interface QuizStep {
  id: number;
  question: string;
  options: {
    label: string;
    icon: string;
    result: string;
  }[];
}

const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: 'What\u2019s your biggest challenge in the DACH market?',
    options: [
      { label: 'Breaking into the market', icon: 'ri-rocket-line', result: 'market-entry' },
      { label: 'Scaling retail presence', icon: 'ri-store-3-line', result: 'retail-pos' },
      { label: 'Finding qualified staff', icon: 'ri-team-line', result: 'staffing' },
      { label: 'Event & fair execution', icon: 'ri-calendar-event-line', result: 'events' },
    ],
  },
  {
    id: 2,
    question: 'What\u2019s your current stage?',
    options: [
      { label: 'Planning entry', icon: 'ri-lightbulb-line', result: 'planning' },
      { label: 'Already active', icon: 'ri-line-chart-line', result: 'active' },
      { label: 'Optimizing performance', icon: 'ri-settings-3-line', result: 'optimizing' },
      { label: 'Expanding operations', icon: 'ri-arrow-right-up-line', result: 'expanding' },
    ],
  },
  {
    id: 3,
    question: 'What\u2019s your priority right now?',
    options: [
      { label: 'Speed to market', icon: 'ri-flashlight-line', result: 'speed' },
      { label: 'Cost efficiency', icon: 'ri-money-euro-circle-line', result: 'cost' },
      { label: 'Quality & compliance', icon: 'ri-shield-check-line', result: 'quality' },
      { label: 'Data & insights', icon: 'ri-bar-chart-box-line', result: 'data' },
    ],
  },
];

const resultMapping: Record<string, { title: string; description: string; service: string; link: string }> = {
  'market-entry': {
    title: 'Market Entry Strategy',
    description: 'You need a proven partner to navigate DACH regulations, retail relationships, and local market dynamics.',
    service: 'Market Entry Services',
    link: '/services/market-entry',
  },
  'retail-pos': {
    title: 'Retail & POS Excellence',
    description: 'Scale your retail presence with expert merchandising, POS execution, and in-store performance optimization.',
    service: 'Retail & POS Services',
    link: '/services/retail-pos',
  },
  staffing: {
    title: 'Staffing Solutions',
    description: 'Access qualified, trained sales promoters and brand ambassadors ready to represent your brand across DACH.',
    service: 'Staffing Services',
    link: '/services/staffing',
  },
  events: {
    title: 'Events & Fairs',
    description: 'Execute flawless events and trade fairs with experienced staff, logistics support, and real-time reporting.',
    service: 'Events Services',
    link: '/services/events',
  },
};

export default function ProblemQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [contactData, setContactData] = useState({ email: '', phone: '' });
  const [contactError, setContactError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleOptionClick = (result: string, stepIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[stepIndex] = result;
    setSelectedAnswers(newAnswers);
    setTimeout(() => {
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowContactForm(true);
      }
    }, 300);
  };

  const handleContactSubmit = async () => {
    if (!contactData.email || !contactData.email.includes('@')) {
      setContactError('Please enter a valid email address.');
      return;
    }
    setContactError('');
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setShowContactForm(false);
    setShowResult(true);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setShowContactForm(false);
    setShowResult(false);
    setContactData({ email: '', phone: '' });
    setContactError('');
  };

  const getRecommendedService = () => {
    const primaryChallenge = selectedAnswers[0];
    return resultMapping[primaryChallenge] || resultMapping['market-entry'];
  };

  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#C8D400]/4 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 flex items-center justify-center">
              <i className="ri-question-line text-3xl text-[#C8D400]" />
            </div>
            <div className="bg-[#C8D400]/15 px-4 py-1.5 border border-[#C8D400]/25" style={{ borderRadius: 0 }}>
              <p className="text-xs font-bold text-[#111] tracking-wider uppercase">Find Your Solution</p>
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#111] mb-4 leading-tight">
            IDENTIFY YOUR{' '}
            <span className="inline-block">CHALLENGE</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Answer 3 quick questions to discover the right Sonic solution for your business
          </p>
        </div>

        {!showContactForm && !showResult ? (
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
            {/* Left — Steps Overview */}
            <div className="space-y-4">
              {quizSteps.map((step, idx) => {
                const isActive = idx === currentStep;
                const isCompleted = idx < currentStep;
                return (
                  <div key={idx} className={`relative p-5 transition-all duration-500 ${isActive ? 'bg-white shadow-lg' : isCompleted ? 'bg-[#C8D400]/5' : 'bg-white/60'}`} style={{ borderRadius: 0 }}>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ borderRadius: 0 }}>
                      <defs>
                        <linearGradient id={`quiz-step-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C8D400" stopOpacity={isActive ? 1 : isCompleted ? 0.6 : 0.15} />
                          <stop offset="100%" stopColor="#C8D400" stopOpacity={isActive ? 1 : isCompleted ? 0.6 : 0.15} />
                        </linearGradient>
                      </defs>
                      <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="0" ry="0" fill="none" stroke={`url(#quiz-step-grad-${idx})`} strokeWidth={isActive ? 2 : 0.8} style={{ filter: isActive ? 'drop-shadow(0 0 6px rgba(200,212,0,0.5))' : 'none', transitionDuration: '1.2s' }} />
                    </svg>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 font-black text-sm transition-all duration-300 ${isCompleted ? 'bg-[#C8D400] text-white' : isActive ? 'bg-[#C8D400]/20 text-[#C8D400] ring-2 ring-[#C8D400]/40' : 'bg-gray-100 text-gray-400'}`} style={{ borderRadius: 0 }}>
                        {isCompleted ? <i className="ri-check-line text-lg" /> : idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${isActive ? 'text-[#C8D400]' : 'text-gray-400'}`}>Step {idx + 1}</p>
                        <p className={`font-bold text-sm ${isActive ? 'text-[#111]' : isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>{step.question}</p>
                        {isCompleted && selectedAnswers[idx] && (
                          <p className="text-xs text-[#C8D400] font-semibold mt-1"><i className="ri-check-line mr-1" />{step.options.find(o => o.result === selectedAnswers[idx])?.label}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Progress */}
              <div className="px-2 pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Progress</span>
                  <span className="text-xs font-bold text-[#C8D400]">{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 overflow-hidden" style={{ borderRadius: 0 }}>
                  <div className="h-full bg-[#C8D400] transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>

            {/* Right — Active Question Card */}
            <div className="relative bg-white p-8 shadow-xl overflow-visible" style={{ borderRadius: 0 }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient id="quiz-main-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8D400" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#C8D400" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="0" ry="0" fill="none" stroke="url(#quiz-main-grad)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 4px rgba(200,212,0,0.3))' }} />
              </svg>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-[#111] mb-8">{quizSteps[currentStep].question}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {quizSteps[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option.result, currentStep)}
                      onMouseEnter={() => setHoveredOption(index)}
                      onMouseLeave={() => setHoveredOption(null)}
                      className="group relative bg-gradient-to-br from-gray-50 to-white p-6 transition-all duration-300 cursor-pointer text-left hover:shadow-lg hover:scale-[1.02] overflow-visible"
                      style={{ borderRadius: 0 }}
                    >
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="0" ry="0" fill="none" stroke={hoveredOption === index ? '#C8D400' : 'rgba(200,212,0,0.2)'} strokeWidth={hoveredOption === index ? 2 : 0.8} style={{ filter: hoveredOption === index ? 'drop-shadow(0 0 6px rgba(200,212,0,0.5))' : 'none', transitionDuration: '0.3s' }} />
                      </svg>
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-[#C8D400]/10 group-hover:bg-[#C8D400]/20 transition-all duration-300" style={{ borderRadius: 0 }}>
                          <i className={`${option.icon} text-2xl text-[#C8D400]`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#111] text-sm group-hover:text-[#C8D400] transition-colors">{option.label}</p>
                        </div>
                        <i className="ri-arrow-right-line text-lg text-gray-400 group-hover:text-[#C8D400] group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
                {currentStep > 0 && (
                  <div className="text-center mt-6">
                    <button onClick={() => setCurrentStep(currentStep - 1)} className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C8D400] font-semibold text-sm transition-colors cursor-pointer">
                      <i className="ri-arrow-left-line" /> Back to previous question
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : showContactForm ? (
          /* Contact capture */
          <div className="relative bg-white p-10 shadow-2xl overflow-visible max-w-2xl mx-auto" style={{ borderRadius: 0 }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="0" ry="0" fill="none" stroke="rgba(200,212,0,0.6)" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 8px rgba(200,212,0,0.4))' }} />
            </svg>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-[#C8D400]/15 border-2 border-[#C8D400]/30 flex items-center justify-center mx-auto mb-5" style={{ borderRadius: 0 }}>
                <i className="ri-user-line text-3xl text-[#C8D400]" />
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-2 uppercase">Almost there!</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md mx-auto">Enter your contact details so we can send you a personalized recommendation.</p>

              <div className="space-y-4 mb-6 text-left">
                <div>
                  <label className="block text-xs font-black text-[#111] uppercase tracking-widest mb-2">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <i className="ri-mail-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="your@company.com"
                      className="w-full pl-9 pr-4 py-3.5 border-2 border-gray-200 text-sm text-[#111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2 focus:border-[#C8D400] transition-colors"
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-[#111] uppercase tracking-widest mb-2">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <div className="relative">
                    <i className="ri-phone-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="tel"
                      name="phone"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="+49 000 000 0000"
                      className="w-full pl-9 pr-4 py-3.5 border-2 border-gray-200 text-sm text-[#111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2 focus:border-[#C8D400] transition-colors"
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                </div>
                {contactError && (
                  <p className="text-red-500 text-xs font-semibold flex items-center gap-1"><i className="ri-error-warning-line" />{contactError}</p>
                )}
              </div>

              <button
                onClick={handleContactSubmit}
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#111] text-white font-black text-sm uppercase tracking-widest hover:bg-[#C8D400] hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 whitespace-nowrap"
                style={{ borderRadius: 0 }}
              >
                {submitting ? <><i className="ri-loader-4-line animate-spin" /> Processing…</> : <><i className="ri-lightbulb-flash-line" /> See My Recommendation</>}
              </button>
              <p className="text-xs text-gray-400 mt-3">No spam. We\'ll only reach out with relevant insights for your market.</p>
            </div>
          </div>
        ) : (
          /* Result */
          <div className="relative bg-white p-10 shadow-2xl overflow-visible" style={{ borderRadius: 0 }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="0" ry="0" fill="none" stroke="rgba(200,212,0,0.7)" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 8px rgba(200,212,0,0.5))' }} />
            </svg>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-[#C8D400]/20 flex items-center justify-center mx-auto mb-6" style={{ borderRadius: 0 }}>
                <i className="ri-lightbulb-flash-line text-4xl text-[#C8D400]" />
              </div>
              <h3 className="text-3xl font-black text-[#111] mb-4">
                We Recommend:{' '}
                <span className="inline-block text-[#C8D400]">{getRecommendedService().title}</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{getRecommendedService().description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={getRecommendedService().link}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8D400] text-[#111] font-black text-sm transition-all duration-300 hover:bg-white hover:text-[#111] whitespace-nowrap cursor-pointer uppercase tracking-wide"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-arrow-right-line text-lg" /> Explore {getRecommendedService().service}
                </Link>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111] font-bold text-sm transition-all duration-300 hover:bg-gray-50 shadow-md whitespace-nowrap cursor-pointer border-2 border-gray-200 hover:border-[#C8D400] uppercase tracking-wide"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-refresh-line text-lg" /> Retake Quiz
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Not quite right?</p>
                <a href="#sonic-contact-form" className="text-[#C8D400] hover:text-[#a8b300] font-semibold text-sm transition-colors cursor-pointer">
                  Talk to our team directly →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}