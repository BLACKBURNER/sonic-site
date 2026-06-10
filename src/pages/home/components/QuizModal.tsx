import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuizStep {
  id: number;
  question: string;
  options: { label: string; icon: string; result: string; }[];
}

const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: 'What\'s your biggest challenge in the DACH market?',
    options: [
      { label: 'Breaking into the market', icon: 'ri-rocket-line', result: 'market-entry' },
      { label: 'Scaling retail presence', icon: 'ri-store-3-line', result: 'retail-pos' },
      { label: 'Finding qualified staff', icon: 'ri-team-line', result: 'staffing' },
      { label: 'Event & fair execution', icon: 'ri-calendar-event-line', result: 'events' },
    ],
  },
  {
    id: 2,
    question: 'What\'s your current stage?',
    options: [
      { label: 'Planning entry', icon: 'ri-lightbulb-line', result: 'planning' },
      { label: 'Already active', icon: 'ri-line-chart-line', result: 'active' },
      { label: 'Optimizing performance', icon: 'ri-settings-3-line', result: 'optimizing' },
      { label: 'Expanding operations', icon: 'ri-arrow-right-up-line', result: 'expanding' },
    ],
  },
  {
    id: 3,
    question: 'What\'s your priority right now?',
    options: [
      { label: 'Speed to market', icon: 'ri-flashlight-line', result: 'speed' },
      { label: 'Cost efficiency', icon: 'ri-money-euro-circle-line', result: 'cost' },
      { label: 'Quality & compliance', icon: 'ri-shield-check-line', result: 'quality' },
      { label: 'Data & insights', icon: 'ri-bar-chart-box-line', result: 'data' },
    ],
  },
];

const resultMapping: Record<string, { title: string; description: string; service: string; link: string }> = {
  'market-entry': { title: 'Market Entry Strategy', description: 'You need a proven partner to navigate DACH regulations, retail relationships, and local market dynamics.', service: 'Market Entry Services', link: '/services/market-entry' },
  'retail-pos': { title: 'Retail & POS Excellence', description: 'Scale your retail presence with expert merchandising, POS execution, and in-store performance optimization.', service: 'Retail & POS Services', link: '/services/retail-pos' },
  staffing: { title: 'Staffing Solutions', description: 'Access qualified, trained sales promoters and brand ambassadors ready to represent your brand across DACH.', service: 'Staffing Services', link: '/services/staffing' },
  events: { title: 'Events & Fairs', description: 'Execute flawless events and trade fairs with experienced staff, logistics support, and real-time reporting.', service: 'Events Services', link: '/services/events' },
};

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [contactData, setContactData] = useState({ email: '', phone: '' });
  const [contactError, setContactError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // ── Focus trap ────────────────────────────────────────────────────────────
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setCurrentStep(0);
      setSelectedAnswers([]);
      setShowContactForm(false);
      setShowResult(false);
      setHoveredOption(null);
      setContactData({ email: '', phone: '' });
      setContactError('');
      // Auto-focus close button after modal animation
      const t = setTimeout(() => closeButtonRef.current?.focus(), 80);
      return () => clearTimeout(t);
    } else {
      // Restore focus to the element that triggered the modal
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Keep Tab focus inside the modal
  const handleModalKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, []);

  if (!isOpen) return null;

  const handleClose = () => { onClose(); };

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
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setShowContactForm(false);
    setShowResult(true);
  };

  const handleReset = () => { setCurrentStep(0); setSelectedAnswers([]); setShowContactForm(false); setShowResult(false); setContactData({ email: '', phone: '' }); };

  const getRecommendedService = () => {
    const primaryChallenge = selectedAnswers[0];
    return resultMapping[primaryChallenge] || resultMapping['market-entry'];
  };

  const progress = ((currentStep + (showContactForm ? 1 : 0) + (showResult ? 1 : 0)) / (quizSteps.length + 1)) * 100;

  return (
    <div
      className="fixed inset-0 z-system flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Sonic Lösungs-Quiz"
      onKeyDown={handleModalKeyDown}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" onClick={handleClose} aria-hidden="true" />
      <div ref={modalRef} className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl animate-[slideUp_0.3s_ease]" style={{ borderRadius: 0 }}>
        {/* Close — 44×44 minimum touch target */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-[#C8D400]/15 text-gray-500 hover:text-[#C8D400] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
          style={{ borderRadius: 0 }}
          aria-label="Quiz schließen"
        >
          <i className="ri-close-line text-lg" />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/15" style={{ borderRadius: 0 }}>
              <i className="ri-question-line text-xl text-[#111]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#C8D400] uppercase tracking-wider">Quick Quiz</p>
              <p className="text-sm text-gray-500">Find your perfect Sonic solution</p>
            </div>
          </div>
          {/* Progress */}
          <div className="h-1.5 bg-gray-100 overflow-hidden" style={{ borderRadius: 0 }}>
            <div className="h-full bg-[#C8D400] transition-all duration-500 ease-out" style={{ width: `${showResult ? 100 : progress}%` }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              {showResult ? 'Complete' : showContactForm ? 'Contact Details' : `Step ${currentStep + 1} of ${quizSteps.length}`}
            </span>
            <span className="text-xs font-bold text-sonic-lime">{Math.round(showResult ? 100 : progress)}%</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {!showContactForm && !showResult ? (
            <div>
              <h3 className="text-xl font-black text-[#111] mb-6">{quizSteps[currentStep].question}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizSteps[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option.result, currentStep)}
                    onMouseEnter={() => setHoveredOption(index)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className="group relative p-5 transition-all duration-300 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
                    style={{
                      background: '#fff',
                      border: hoveredOption === index ? '2px solid #C8D400' : '2px solid #f0f0f0',
                      borderRadius: 0,
                      boxShadow: hoveredOption === index
                        ? '0 10px 28px rgba(200,212,0,0.2), 0 4px 10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
                        : '0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)',
                      transform: hoveredOption === index ? 'translateY(-3px)' : 'translateY(0)',
                    }}
                  >
                    {/* Left lime accent on hover */}
                    <div
                      className="absolute left-0 top-0 bottom-0 transition-all duration-300"
                      style={{ width: hoveredOption === index ? '3px' : '0px', background: '#C8D400' }}
                    />
                    <div className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background: hoveredOption === index ? '#C8D400' : '#f3f4f6',
                          boxShadow: hoveredOption === index
                            ? '0 4px 12px rgba(200,212,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
                            : '0 2px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
                        }}
                      >
                        <i className={`${option.icon} text-xl transition-colors duration-300 ${hoveredOption === index ? 'text-[#111]' : 'text-gray-500'}`} />
                      </div>
                      <p className="font-bold text-[#111] text-sm flex-1">{option.label}</p>
                      <i className={`ri-arrow-right-line text-base transition-all duration-300 ${hoveredOption === index ? 'text-[#C8D400] translate-x-1' : 'text-gray-300'}`} />
                    </div>
                  </button>
                ))}
              </div>
              {currentStep > 0 && (
                <div className="text-center mt-5">
                  <button onClick={() => setCurrentStep(currentStep - 1)} className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C8D400] font-semibold text-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime">
                    <i className="ri-arrow-left-line" /> Back
                  </button>
                </div>
              )}
            </div>
          ) : showContactForm ? (
            // Contact capture step
            <div>
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-[#C8D400]/15 border-2 border-[#C8D400]/30 flex items-center justify-center mx-auto mb-4" style={{ borderRadius: 0 }}>
                  <i className="ri-user-line text-2xl text-[#C8D400]" />
                </div>
                <h3 className="text-xl font-black text-[#111] mb-2 uppercase">Almost there!</h3>
                <p className="text-gray-500 text-sm">Enter your contact details to see your personalized recommendation.</p>
              </div>

              <div className="space-y-4 mb-6">
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
                      className="w-full pl-9 pr-4 py-3 border-2 border-gray-200 text-sm text-[#111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2 focus:border-[#C8D400] transition-colors"
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
                      className="w-full pl-9 pr-4 py-3 border-2 border-gray-200 text-sm text-[#111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8D400] focus-visible:ring-offset-2 focus:border-[#C8D400] transition-colors"
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
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#111] text-white font-black text-sm uppercase tracking-widest hover:bg-[#C8D400] hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
                style={{ borderRadius: 0 }}
              >
                {submitting ? <><i className="ri-loader-4-line animate-spin" /> Processing…</> : <><i className="ri-lightbulb-flash-line" /> See My Recommendation</>}
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">No spam. We'll only reach out if relevant to your challenge.</p>
            </div>
          ) : (
            // Result
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C8D400]/15 flex items-center justify-center mx-auto mb-5" style={{ borderRadius: 0 }}>
                <i className="ri-lightbulb-flash-line text-3xl text-[#C8D400]" />
              </div>
              <h3 className="text-2xl font-black text-[#111] mb-3">
                We Recommend: <span className="text-[#C8D400]">{getRecommendedService().title}</span>
              </h3>
              <div className="bg-[#f7f7f5] border border-gray-200 p-5 mb-6 text-left">
                <p className="text-xs font-black text-[#C8D400] uppercase tracking-widest mb-2">Ihre Empfohlene Lösung</p>
                <h4 className="text-lg font-black text-[#111] mb-2">{getRecommendedService().title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{getRecommendedService().description}</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Buchen Sie jetzt ein kostenloses Beratungsgespräch, um Ihre passende Lösung im Detail zu besprechen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://calendly.com/sonic-group/beratungsgespraech"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8D400] text-white font-black text-sm transition-all duration-300 whitespace-nowrap cursor-pointer uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-calendar-check-line text-base mr-1"></i>
                  Beratungsgespräch buchen
                  <i className="ri-arrow-right-line text-lg" />
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#111] font-black text-sm transition-all duration-300 whitespace-nowrap cursor-pointer border-2 border-gray-200 hover:border-[#C8D400] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime active:scale-95"
                  style={{ borderRadius: 0 }}
                >
                  <i className="ri-refresh-line text-lg" /> Neu starten
                </button>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-2">Nicht ganz passend?</p>
                <a href="https://calendly.com/sonic-group/beratungsgespraech" target="_blank" rel="noopener noreferrer" onClick={handleClose} className="text-[#C8D400] hover:text-[#a8b300] font-semibold text-sm transition-colors cursor-pointer">
                  Direkt mit unserem Team sprechen →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
