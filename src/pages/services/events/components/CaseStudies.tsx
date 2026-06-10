import { useState, useEffect } from 'react';

const cases = [
  {
    id: 1,
    client: 'AutoExpo Berlin',
    category: 'Trade Show',
    image: 'https://readdy.ai/api/search-image?query=large%20modern%20automotive%20trade%20show%20exhibition%20hall%20with%20sleek%20car%20displays%20professional%20booth%20designs%20and%20crowds%20of%20business%20visitors%20in%20bright%20spacious%20convention%20center%20environment&width=800&height=600&seq=ev1&orientation=landscape',
    challenge: 'Coordinate 200+ exhibitors across 50,000 sqm venue with tight 3-week setup timeline',
    solution: 'Deployed modular booth systems, digital floor planning, and 24/7 on-site coordination team',
    results: [
      { label: 'Exhibitors', value: '240' },
      { label: 'Visitors', value: '68K+' },
      { label: 'Setup Time', value: '-40%' }
    ]
  },
  {
    id: 2,
    client: 'TechSummit 2024',
    category: 'Conference',
    image: 'https://readdy.ai/api/search-image?query=modern%20technology%20conference%20stage%20with%20large%20LED%20screens%20professional%20lighting%20and%20audience%20seating%20in%20contemporary%20event%20venue%20showcasing%20keynote%20presentation%20setup%20for%20corporate%20tech%20summit&width=800&height=600&seq=ev2&orientation=landscape',
    challenge: 'Launch hybrid event format with seamless virtual integration for 5,000 attendees',
    solution: 'Built custom streaming platform, interactive Q&A system, and virtual networking lounges',
    results: [
      { label: 'Total Reach', value: '12K+' },
      { label: 'Engagement', value: '+380%' },
      { label: 'Satisfaction', value: '4.8/5' }
    ]
  },
  {
    id: 3,
    client: 'FashionWeek München',
    category: 'Fashion Event',
    image: 'https://readdy.ai/api/search-image?query=elegant%20fashion%20runway%20show%20with%20dramatic%20catwalk%20lighting%20professional%20models%20and%20stylish%20audience%20seating%20in%20upscale%20venue%20showcasing%20luxury%20fashion%20week%20event%20production%20quality&width=800&height=600&seq=ev3&orientation=landscape',
    challenge: 'Produce 12 runway shows over 4 days with rapid stage transformations',
    solution: 'Designed modular runway system with programmable lighting and automated set changes',
    results: [
      { label: 'Shows Delivered', value: '12' },
      { label: 'Media Coverage', value: '€2.4M' },
      { label: 'Designer Satisfaction', value: '100%' }
    ]
  },
  {
    id: 4,
    client: 'GreenTech Expo',
    category: 'Sustainability Event',
    image: 'https://readdy.ai/api/search-image?query=eco-friendly%20green%20technology%20exhibition%20with%20sustainable%20booth%20designs%20solar%20panels%20and%20natural%20materials%20in%20modern%20convention%20space%20highlighting%20environmental%20innovation%20and%20clean%20energy%20solutions&width=800&height=600&seq=ev4&orientation=landscape',
    challenge: 'Create zero-waste event with carbon-neutral operations and sustainable materials',
    solution: 'Implemented reusable booth structures, digital signage, composting stations, and carbon offsetting',
    results: [
      { label: 'Waste Diverted', value: '94%' },
      { label: 'Carbon Offset', value: '100%' },
      { label: 'Industry Award', value: 'Gold' }
    ]
  },
  {
    id: 5,
    client: 'StartupPitch Night',
    category: 'Networking Event',
    image: 'https://readdy.ai/api/search-image?query=dynamic%20startup%20pitch%20event%20with%20entrepreneurs%20presenting%20on%20stage%20to%20investors%20in%20modern%20coworking%20space%20with%20casual%20networking%20atmosphere%20and%20innovative%20tech%20startup%20culture%20vibe&width=800&height=600&seq=ev5&orientation=landscape',
    challenge: 'Facilitate meaningful connections between 80 startups and 200 investors in 4 hours',
    solution: 'Created AI-powered matchmaking app, speed-pitching rounds, and curated breakout sessions',
    results: [
      { label: 'Connections', value: '1,240' },
      { label: 'Funding Secured', value: '€8.2M' },
      { label: 'Follow-ups', value: '520+' }
    ]
  },
  {
    id: 6,
    client: 'Gourmet Festival',
    category: 'Food & Beverage',
    image: 'https://readdy.ai/api/search-image?query=upscale%20gourmet%20food%20festival%20with%20chef%20cooking%20demonstrations%20elegant%20tasting%20stations%20and%20crowds%20enjoying%20culinary%20experiences%20in%20outdoor%20venue%20with%20festive%20atmosphere%20and%20premium%20dining%20setup&width=800&height=600&seq=ev6&orientation=landscape',
    challenge: 'Manage 40 chef stations, live cooking demos, and 15,000 daily visitors across 3 days',
    solution: 'Deployed modular kitchen units, crowd flow optimization, and real-time inventory tracking',
    results: [
      { label: 'Daily Visitors', value: '18K+' },
      { label: 'Chef Satisfaction', value: '4.9/5' },
      { label: 'Revenue', value: '+€420K' }
    ]
  }
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % cases.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + cases.length) % cases.length);
    setProgress(0);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % cases.length);
    setProgress(0);
  };

  const activeCase = cases[activeIndex];

  return (
    <section id="case-studies" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C8D400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#C8D400]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8D400]/20 border-2 border-[#C8D400]/40 rounded-full mb-6">
            <i className="ri-trophy-line text-xl text-[#C8D400]"></i>
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Event Excellence</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Events That <span className="text-[#C8D400]">Make an Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, see how we deliver unforgettable experiences that exceed expectations.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Spotlight Card */}
          <div className="relative bg-white rounded-2xl border-2 border-[#C8D400] shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src={activeCase.image} 
                  alt={activeCase.client}
                  className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">
                    {activeCase.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-gray-900 mb-4">{activeCase.client}</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-error-warning-line text-red-500"></i>
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Challenge</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{activeCase.challenge}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-lightbulb-line text-[#C8D400]"></i>
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Solution</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{activeCase.solution}</p>
                  </div>
                </div>

                {/* Results Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {activeCase.results.map((result, idx) => (
                    <div key={idx} className="px-4 py-3 bg-[#C8D400]/10 border-2 border-[#C8D400]/30 rounded-xl">
                      <div className="text-2xl font-black text-[#C8D400]">{result.value}</div>
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#C8D400] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-[#C8D400] flex items-center justify-center text-gray-900 hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 z-10 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-[#C8D400] flex items-center justify-center text-gray-900 hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 z-10 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex 
                    ? 'bg-[#C8D400] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8D400] text-gray-900 font-bold rounded-full hover:bg-[#B8C400] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>View All Case Studies</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}