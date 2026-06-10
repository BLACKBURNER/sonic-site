import { useState } from 'react';

export default function CreativeShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const categories = ['All', 'Photography', 'Video', 'Live Stream', 'Post-Production'];

  const creativeWorks = [
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/774643dc-aa00-41f1-a3f4-864433b097da_13.jpg',
      title: 'LED Volume Production Studio',
      description: 'Immersive LED wall technology for virtual production and real-time backgrounds',
      category: 'Video'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/f404951b-e9f8-4063-b803-e1145f43d540_DSC02106-Kopie.jpg',
      title: 'Multi-Camera Live Streaming',
      description: 'Professional live streaming setup with real-time production capabilities',
      category: 'Live Stream'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/0e8828e1-d3a5-4684-88de-96afb301c607_15.jpg',
      title: 'Product Photography Studio',
      description: 'High-end product photography with perfect lighting and backgrounds',
      category: 'Photography'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/e42ec9f6-575b-488c-9c8a-d42be497eb96_DSC02133-Kopie.jpg',
      title: 'Post-Production Suite',
      description: 'Cinema-quality editing and color grading for polished content',
      category: 'Post-Production'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/9aba7e4f-1f00-4f96-b6fc-90fc615b11b3_1-Kopie.jpg',
      title: 'Virtual Backgrounds',
      description: 'Real-time virtual environments on LED walls',
      category: 'Video'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/a1484e91-882b-498d-b849-e6655b3952c0_2-Kopie.jpg',
      title: 'Cinema-Grade Video',
      description: 'Professional video production with cinema cameras',
      category: 'Video'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/ec769083-996f-4f19-a1aa-f82558ce1c27_3-Kopie.jpg',
      title: 'Live Shopping Streams',
      description: 'Interactive live shopping experiences',
      category: 'Live Stream'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/21a65c0f-e370-4202-875f-8b9858903d15_4-Kopie.jpg',
      title: 'Event Broadcasting',
      description: 'Real-time streaming for events and launches',
      category: 'Live Stream'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/6d9e8360-acc8-4646-9d6a-ae6ab41d65e1_5-Kopie.jpg',
      title: 'Commercial Photography',
      description: 'High-quality product and commercial shots',
      category: 'Photography'
    },
    {
      url: 'https://storage.readdy-site.link/project_files/904b87b8-ea75-4880-a50b-adb150b0e454/25ab2718-26bf-4db4-b304-22c7d310a3e6_6-Kopie.jpg',
      title: 'Lifestyle Content',
      description: 'Authentic lifestyle photography and video',
      category: 'Photography'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=video%20editor%20working%20on%20timeline%20with%20color%20correction%20professional%20editing%20workstation%20multiple%20monitors%20modern%20post%20production%20suite&width=400&height=400&seq=lvp-post-thumb-001&orientation=squarish',
      title: 'Professional Editing',
      description: 'Precision editing for seamless storytelling',
      category: 'Post-Production'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=color%20grading%20suite%20with%20calibrated%20monitors%20professional%20colorist%20workspace%20cinema%20quality%20post%20production%20modern%20dark%20studio%20environment&width=400&height=400&seq=lvp-post-thumb-002&orientation=squarish',
      title: 'Color Grading',
      description: 'Cinema-quality color correction and grading',
      category: 'Post-Production'
    }
  ];

  const filteredWorks = activeCategory === 'All'
    ? creativeWorks
    : creativeWorks.filter(work => work.category === activeCategory);

  const heroWorks = filteredWorks.slice(0, 4);
  const thumbnailWorks = filteredWorks.slice(4);

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#C8D400]/5 blur-3xl" style={{ borderRadius: 0 }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C8D400]/5 blur-3xl" style={{ borderRadius: 0 }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/20 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Kreative Leistungen</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#111] mb-4 leading-tight tracking-tight">
            KREATIVE <span className="text-[#C8D400]">FÄHIGKEITEN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            From concept to execution, we create everything you need for successful phygital campaigns
          </p>
          <p className="text-base text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Our in-house creative team delivers LED volume production, live streaming, photography, and complete post-production services
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveHeroIndex(0);
              }}
              className={`px-6 py-3 font-bold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#C8D400] text-sonic-dark'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#C8D400]/50'
              }`}
              style={{ borderRadius: 0 }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Hero Slot */}
        <div className="relative mb-8 group">
          <div className="relative h-[500px] bg-gray-100 overflow-hidden">
            {heroWorks.map((work, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeHeroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={work.url}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#C8D400] flex items-center justify-center">
                        <i className="ri-arrow-right-up-line text-xl text-sonic-dark"></i>
                      </div>
                      <span className="text-xs font-bold text-[#C8D400] uppercase tracking-wider">{work.category}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">{work.title}</h3>
                    <p className="text-base text-gray-200 max-w-2xl">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SVG Dual-Line Border on Hover */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
            <defs>
              <linearGradient id="lvp-hero-outer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8D400" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a8b300" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C8D400" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="lvp-hero-inner" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C8D400" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#C8D400" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C8D400" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke="url(#lvp-hero-outer)"
              strokeWidth="3"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ filter: 'drop-shadow(0 0 8px rgba(200, 212, 0, 0.5))' }}
            />
            <rect
              x="6"
              y="6"
              width="calc(100% - 12px)"
              height="calc(100% - 12px)"
              fill="none"
              stroke="url(#lvp-hero-inner)"
              strokeWidth="2"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ filter: 'drop-shadow(0 0 6px rgba(200, 212, 0, 0.4))' }}
            />
          </svg>
        </div>

        {/* Thumbnail Strip */}
        {heroWorks.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {heroWorks.map((work, index) => (
              <button
                key={index}
                onClick={() => setActiveHeroIndex(index)}
                className={`relative h-32 bg-gray-100 overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === activeHeroIndex
                    ? 'border-2 border-[#C8D400]'
                    : 'border-2 border-transparent hover:border-[#C8D400]/50'
                }`}
                style={{ borderRadius: 0 }}
              >
                <img
                  src={work.url}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  index === activeHeroIndex ? 'opacity-0' : 'opacity-60 hover:opacity-30'
                }`}></div>
                {index === activeHeroIndex && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#C8D400] flex items-center justify-center">
                    <i className="ri-check-line text-sm text-sonic-dark font-bold"></i>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Additional Gallery Grid */}
        {thumbnailWorks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thumbnailWorks.map((work, index) => (
              <div
                key={index}
                className="group relative h-[300px] bg-gray-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={work.url}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-[#C8D400] flex items-center justify-center">
                        <i className="ri-arrow-right-up-line text-base text-sonic-dark"></i>
                      </div>
                    </div>
                    <h3 className="text-base font-black text-white mb-1 uppercase tracking-wide">{work.title}</h3>
                    <p className="text-xs text-gray-300">{work.description}</p>
                  </div>
                </div>

                {/* SVG Border on Hover */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="#C8D400"
                    strokeWidth="2"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(200, 212, 0, 0.5))' }}
                  />
                  <rect
                    x="4"
                    y="4"
                    width="calc(100% - 8px)"
                    height="calc(100% - 8px)"
                    fill="none"
                    stroke="#C8D400"
                    strokeWidth="1"
                    opacity="0.6"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </svg>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#C8D400] text-sonic-dark font-bold hover:bg-white hover:text-sonic-dark transition-all hover:scale-105 whitespace-nowrap cursor-pointer border-2 border-[#C8D400]"
            style={{ borderRadius: 0 }}
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
