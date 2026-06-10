import { useState } from 'react';
import Lightbox from '@/components/base/Lightbox';
import SectionBadge from '@/components/base/SectionBadge';

const categories = ['All', 'Market Research', 'Strategy', 'Partnerships', 'Launch'];

const galleryItems = [
  {
    id: 1,
    category: 'Market Research',
    title: 'Consumer Insights Analysis',
    description: 'Deep market research revealing consumer behavior patterns and opportunities',
    image: 'https://readdy.ai/api/search-image?query=market%20research%20analysis%20with%20data%20charts%20consumer%20insights%20reports%20and%20business%20professionals%20reviewing%20findings&width=800&height=600&seq=me1&orientation=landscape'
  },
  {
    id: 2,
    category: 'Strategy',
    title: 'Go-to-Market Planning',
    description: 'Comprehensive market entry strategy with phased rollout plan',
    image: 'https://readdy.ai/api/search-image?query=business%20strategy%20planning%20session%20with%20team%20around%20table%20reviewing%20market%20entry%20plans%20and%20roadmap%20documents&width=800&height=600&seq=me2&orientation=landscape'
  },
  {
    id: 3,
    category: 'Partnerships',
    title: 'Distributor Network',
    description: 'Strategic partnerships with local distributors and retail channels',
    image: 'https://readdy.ai/api/search-image?query=business%20partnership%20meeting%20with%20executives%20shaking%20hands%20signing%20agreements%20professional%20corporate%20setting&width=800&height=600&seq=me3&orientation=landscape'
  },
  {
    id: 4,
    category: 'Launch',
    title: 'Market Launch Event',
    description: 'Successful market entry with high-impact launch campaign',
    image: 'https://readdy.ai/api/search-image?query=product%20market%20launch%20event%20with%20press%20coverage%20brand%20displays%20and%20excited%20audience%20celebrating%20new%20market%20entry&width=800&height=600&seq=me4&orientation=landscape'
  },
  {
    id: 5,
    category: 'Market Research',
    title: 'Competitive Landscape',
    description: 'Detailed competitor analysis and market positioning study',
    image: 'https://readdy.ai/api/search-image?query=competitive%20analysis%20presentation%20with%20market%20share%20charts%20competitor%20comparison%20matrices%20and%20strategic%20insights&width=800&height=600&seq=me5&orientation=landscape'
  },
  {
    id: 6,
    category: 'Strategy',
    title: 'Pricing & Positioning',
    description: 'Optimized pricing strategy aligned with market expectations',
    image: 'https://readdy.ai/api/search-image?query=pricing%20strategy%20workshop%20with%20financial%20models%20market%20positioning%20maps%20and%20business%20team%20collaborating&width=800&height=600&seq=me6&orientation=landscape'
  },
  {
    id: 7,
    category: 'Partnerships',
    title: 'Retail Channel Setup',
    description: 'Established presence in key retail locations and channels',
    image: 'https://readdy.ai/api/search-image?query=retail%20store%20partnership%20with%20branded%20product%20displays%20in%20premium%20retail%20location%20professional%20merchandising&width=800&height=600&seq=me7&orientation=landscape'
  },
  {
    id: 8,
    category: 'Launch',
    title: 'Media Campaign',
    description: 'Multi-channel marketing campaign driving market awareness',
    image: 'https://readdy.ai/api/search-image?query=marketing%20campaign%20launch%20with%20billboard%20advertisements%20social%20media%20displays%20and%20brand%20visibility%20in%20urban%20setting&width=800&height=600&seq=me8&orientation=landscape'
  },
  {
    id: 9,
    category: 'Market Research',
    title: 'Regulatory Compliance',
    description: 'Complete regulatory assessment and compliance roadmap',
    image: 'https://readdy.ai/api/search-image?query=regulatory%20compliance%20review%20with%20legal%20documents%20certification%20stamps%20and%20business%20professionals%20ensuring%20standards&width=800&height=600&seq=me9&orientation=landscape'
  },
  {
    id: 10,
    category: 'Strategy',
    title: 'Localization Plan',
    description: 'Cultural adaptation strategy for local market resonance',
    image: 'https://readdy.ai/api/search-image?query=localization%20strategy%20planning%20with%20cultural%20adaptation%20materials%20translated%20content%20and%20local%20market%20insights&width=800&height=600&seq=me10&orientation=landscape'
  },
  {
    id: 11,
    category: 'Partnerships',
    title: 'Logistics Network',
    description: 'Efficient supply chain and distribution infrastructure',
    image: 'https://readdy.ai/api/search-image?query=logistics%20network%20operations%20with%20warehouse%20distribution%20center%20and%20supply%20chain%20management%20systems&width=800&height=600&seq=me11&orientation=landscape'
  },
  {
    id: 12,
    category: 'Launch',
    title: 'First Sales Success',
    description: 'Strong initial market traction with growing customer base',
    image: 'https://readdy.ai/api/search-image?query=successful%20sales%20results%20with%20customers%20purchasing%20products%20busy%20retail%20environment%20and%20positive%20market%20reception&width=800&height=600&seq=me12&orientation=landscape'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mainImage, setMainImage] = useState(galleryItems[0]);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const visibleThumbnails = filteredItems.slice(thumbnailStart, thumbnailStart + 4);
  const gridItems = filteredItems.slice(4);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setThumbnailStart(0);
    const newFiltered = category === 'All' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === category);
    setMainImage(newFiltered[0]);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const lightboxItems = filteredItems.map(item => ({
    image: item.image,
    title: item.title,
    category: item.category,
    description: item.description,
  }));

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-[#C8D400]/5 to-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8D400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C8D400]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionBadge text="Market Entry Journey" variant="dark" className="mb-6" />
          <h2 className="text-5xl font-black mb-6 uppercase">Market Entry Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our proven market entry process from research to successful launch
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 font-black uppercase tracking-wider text-sm transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-[#C8D400] text-[#1a1a1a] border-2 border-[#C8D400]'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#C8D400]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Hero Image */}
        <div 
          className="relative w-full h-[500px] mb-8 overflow-hidden border-2 border-gray-200 group cursor-pointer"
          onClick={() => openLightbox(filteredItems.findIndex(item => item.id === mainImage.id))}
        >
          <img
            src={mainImage.image}
            alt={mainImage.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-[#C8D400]/20 backdrop-blur-sm border border-[#C8D400]/40 px-4 py-1 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-white">{mainImage.category}</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-2">{mainImage.title}</h3>
              <p className="text-white/90 text-lg">{mainImage.description}</p>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-[#C8D400] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {visibleThumbnails.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setMainImage(item);
                openLightbox(filteredItems.findIndex(i => i.id === item.id));
              }}
              className={`relative h-40 overflow-hidden cursor-pointer group ${
                mainImage.id === item.id ? 'ring-4 ring-[#C8D400]' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-black text-sm uppercase tracking-wider">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-4 gap-6">
          {gridItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(filteredItems.findIndex(i => i.id === item.id))}
              className="relative h-64 overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-block bg-[#C8D400]/20 backdrop-blur-sm border border-[#C8D400]/40 px-3 py-1 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-white">{item.category}</span>
                  </div>
                  <h4 className="text-white font-black text-sm">{item.title}</h4>
                </div>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(200,212,0,0.5))' }}>
                <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="none" stroke="#C8D400" strokeWidth="2" />
                <rect x="8" y="8" width="calc(100% - 16px)" height="calc(100% - 16px)" fill="none" stroke="#C8D400" strokeWidth="1" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        activeIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}