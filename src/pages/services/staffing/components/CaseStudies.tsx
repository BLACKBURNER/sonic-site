import { useState, useEffect } from 'react';

const cases = [
  {
    id: 1,
    client: 'AutoExpo Frankfurt',
    category: 'Trade Show Staffing',
    image: 'https://readdy.ai/api/search-image?query=professional%20trade%20show%20staff%20team%20in%20branded%20uniforms%20assisting%20visitors%20at%20modern%20exhibition%20booth%20with%20automotive%20displays%20in%20large%20convention%20center%20environment&width=800&height=600&seq=st1&orientation=landscape',
    challenge: 'Automotive expo needed 120 multilingual brand ambassadors across 40 booths in 2 weeks',
    solution: 'Recruited and trained 140 staff (German, English, French speakers), provided on-site coordination and real-time support',
    results: [
      { label: 'Staff Deployed', value: '140' },
      { label: 'Languages Covered', value: '8' },
      { label: 'Client Satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 2,
    client: 'TechLaunch Berlin',
    category: 'Product Launch',
    image: 'https://readdy.ai/api/search-image?query=energetic%20product%20launch%20event%20with%20professional%20promotional%20staff%20demonstrating%20new%20technology%20products%20to%20engaged%20audience%20in%20modern%20tech%20showcase%20venue%20with%20dynamic%20atmosphere&width=800&height=600&seq=st2&orientation=landscape',
    challenge: 'Tech startup launching flagship product needed expert product demonstrators for 3-city tour',
    solution: 'Provided 25 tech-savvy demonstrators with product training, demo scripts, and lead capture tools',
    results: [
      { label: 'Demos Delivered', value: '2,400+' },
      { label: 'Leads Generated', value: '1,840' },
      { label: 'Conversion Rate', value: '34%' }
    ]
  },
  {
    id: 3,
    client: 'RetailWeek München',
    category: 'Retail Event',
    image: 'https://readdy.ai/api/search-image?query=busy%20retail%20promotional%20event%20with%20friendly%20staff%20engaging%20shoppers%20at%20pop-up%20store%20displays%20in%20modern%20shopping%20mall%20with%20vibrant%20product%20demonstrations%20and%20customer%20interactions&width=800&height=600&seq=st3&orientation=landscape',
    challenge: 'Fashion retailer needed 60 sales staff for pop-up stores during holiday season rush',
    solution: 'Deployed experienced retail staff with POS training, styling expertise, and customer service excellence',
    results: [
      { label: 'Sales Generated', value: '€840K' },
      { label: 'Avg. Transaction', value: '€180' },
      { label: 'Customer Rating', value: '4.8/5' }
    ]
  },
  {
    id: 4,
    client: 'FoodFest Hamburg',
    category: 'Festival Staffing',
    image: 'https://readdy.ai/api/search-image?query=outdoor%20food%20festival%20with%20staff%20serving%20customers%20at%20gourmet%20food%20stalls%20and%20beverage%20stations%20in%20lively%20summer%20event%20atmosphere%20with%20crowds%20enjoying%20culinary%20experiences&width=800&height=600&seq=st4&orientation=landscape',
    challenge: 'Food festival needed 200 hospitality staff for 4-day event with complex shift scheduling',
    solution: 'Provided trained food service staff, shift managers, and mobile coordination app for real-time adjustments',
    results: [
      { label: 'Staff Managed', value: '220' },
      { label: 'Shifts Covered', value: '880' },
      { label: 'Zero No-shows', value: '100%' }
    ]
  },
  {
    id: 5,
    client: 'PharmaCon Düsseldorf',
    category: 'Conference Support',
    image: 'https://readdy.ai/api/search-image?query=professional%20conference%20staff%20assisting%20attendees%20at%20registration%20desk%20and%20information%20booth%20in%20modern%20medical%20convention%20center%20with%20organized%20event%20management%20atmosphere&width=800&height=600&seq=st5&orientation=landscape',
    challenge: 'Medical conference needed specialized staff for registration, translation, and technical support',
    solution: 'Deployed bilingual registration team, medical translators, and AV technicians with healthcare experience',
    results: [
      { label: 'Attendees Processed', value: '3,200' },
      { label: 'Translation Hours', value: '480' },
      { label: 'Technical Issues', value: '0' }
    ]
  },
  {
    id: 6,
    client: 'SportEvent Köln',
    category: 'Sports Event',
    image: 'https://readdy.ai/api/search-image?query=large%20sports%20event%20with%20uniformed%20staff%20managing%20crowds%20at%20stadium%20entrance%20gates%20and%20concession%20stands%20in%20energetic%20athletic%20competition%20environment%20with%20spectators&width=800&height=600&seq=st6&orientation=landscape',
    challenge: 'Marathon event needed 300 volunteers coordinated across 15 stations for race day operations',
    solution: 'Recruited, trained, and managed volunteer teams with role-specific briefings and on-site supervisors',
    results: [
      { label: 'Volunteers Managed', value: '320' },
      { label: 'Runners Supported', value: '8,500' },
      { label: 'Event Rating', value: '4.9/5' }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8D400]/20 border-2 border-[#C8D400]/40 mb-6">
            <i className="ri-trophy-line text-xl text-[#C8D400]"></i>
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Staffing Excellence</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Teams That <span className="text-[#C8D400]">Deliver Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real events, real professionals. See how our staffing solutions power successful activations and experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Spotlight Card */}
          <div className="relative bg-white border-2 border-[#C8D400] shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src={activeCase.image} 
                  alt={activeCase.client}
                  className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-white text-sm font-bold border border-white/20">
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
                    <div key={idx} className="px-4 py-3 bg-[#C8D400]/10 border-2 border-[#C8D400]/30">
                      <div className="text-2xl font-black text-[#C8D400]">{result.value}</div>
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-200 overflow-hidden">
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8D400] text-gray-900 font-bold hover:bg-[#B8C400] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>View All Case Studies</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}