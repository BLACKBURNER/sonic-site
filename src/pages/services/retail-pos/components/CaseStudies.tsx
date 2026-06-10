import { useState, useEffect } from 'react';

const cases = [
  {
    id: 1,
    client: 'UrbanStyle Boutique',
    category: 'Fashion Retail',
    image: 'https://readdy.ai/api/search-image?query=modern%20fashion%20boutique%20interior%20with%20elegant%20clothing%20displays%20stylish%20mannequins%20and%20contemporary%20retail%20design%20in%20upscale%20shopping%20district%20showcasing%20premium%20apparel%20merchandising&width=800&height=600&seq=rp1&orientation=landscape',
    challenge: 'Independent fashion boutique struggling with inventory management across 3 locations',
    solution: 'Implemented cloud POS with real-time inventory sync, mobile checkout, and customer loyalty program',
    results: [
      { label: 'Inventory Accuracy', value: '+98%' },
      { label: 'Checkout Time', value: '-60%' },
      { label: 'Repeat Customers', value: '+240%' }
    ]
  },
  {
    id: 2,
    client: 'FreshMarket Organic',
    category: 'Grocery Retail',
    image: 'https://readdy.ai/api/search-image?query=bright%20organic%20grocery%20store%20interior%20with%20fresh%20produce%20displays%20wooden%20shelving%20and%20natural%20lighting%20showcasing%20healthy%20food%20products%20in%20modern%20sustainable%20supermarket%20environment&width=800&height=600&seq=rp2&orientation=landscape',
    challenge: 'Organic grocery chain needed integrated POS for perishable inventory and supplier management',
    solution: 'Deployed POS with expiration tracking, automated reordering, and supplier portal integration',
    results: [
      { label: 'Food Waste', value: '-45%' },
      { label: 'Stock-outs', value: '-80%' },
      { label: 'Supplier Efficiency', value: '+320%' }
    ]
  },
  {
    id: 3,
    client: 'TechHub Electronics',
    category: 'Electronics Retail',
    image: 'https://readdy.ai/api/search-image?query=modern%20electronics%20retail%20store%20with%20sleek%20product%20displays%20smartphones%20laptops%20and%20gadgets%20on%20illuminated%20shelves%20in%20contemporary%20tech%20shop%20environment%20with%20digital%20signage&width=800&height=600&seq=rp3&orientation=landscape',
    challenge: 'Electronics retailer needed POS to handle complex warranties, repairs, and trade-ins',
    solution: 'Built custom POS with warranty tracking, repair workflow management, and trade-in valuation tools',
    results: [
      { label: 'Warranty Claims', value: '+95%' },
      { label: 'Repair Turnaround', value: '-50%' },
      { label: 'Trade-in Volume', value: '+380%' }
    ]
  },
  {
    id: 4,
    client: 'HomeDecor Gallery',
    category: 'Home Goods',
    image: 'https://readdy.ai/api/search-image?query=elegant%20home%20decor%20showroom%20with%20stylish%20furniture%20displays%20decorative%20accessories%20and%20modern%20interior%20design%20products%20in%20upscale%20home%20goods%20retail%20store%20environment&width=800&height=600&seq=rp4&orientation=landscape',
    challenge: 'Home goods store needed POS for custom orders, delivery scheduling, and installation tracking',
    solution: 'Implemented POS with custom order management, delivery calendar, and installer dispatch system',
    results: [
      { label: 'Custom Orders', value: '+280%' },
      { label: 'Delivery Accuracy', value: '99.2%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 5,
    client: 'BookNook Café',
    category: 'Bookstore & Café',
    image: 'https://readdy.ai/api/search-image?query=cozy%20independent%20bookstore%20cafe%20interior%20with%20wooden%20bookshelves%20reading%20nooks%20and%20coffee%20bar%20in%20warm%20inviting%20atmosphere%20showcasing%20literary%20culture%20and%20community%20gathering%20space&width=800&height=600&seq=rp5&orientation=landscape',
    challenge: 'Bookstore café needed unified POS for retail books and food service operations',
    solution: 'Deployed hybrid POS with split payment handling, table management, and book inventory integration',
    results: [
      { label: 'Transaction Speed', value: '+65%' },
      { label: 'Café Revenue', value: '+190%' },
      { label: 'Book Sales', value: '+140%' }
    ]
  },
  {
    id: 6,
    client: 'SportsPro Outfitters',
    category: 'Sports Retail',
    image: 'https://readdy.ai/api/search-image?query=modern%20sports%20equipment%20retail%20store%20with%20athletic%20gear%20displays%20running%20shoes%20fitness%20apparel%20and%20outdoor%20equipment%20in%20dynamic%20sporting%20goods%20shop%20environment&width=800&height=600&seq=rp6&orientation=landscape',
    challenge: 'Sports retailer needed POS for seasonal inventory, equipment rentals, and team orders',
    solution: 'Built POS with seasonal planning tools, rental management, and bulk order processing',
    results: [
      { label: 'Seasonal Turnover', value: '+95%' },
      { label: 'Rental Revenue', value: '+€240K' },
      { label: 'Team Orders', value: '+420%' }
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
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Retail Success Stories</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            POS Solutions That <span className="text-[#C8D400]">Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real retailers, real results. See how our POS solutions transform operations and boost profitability.
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