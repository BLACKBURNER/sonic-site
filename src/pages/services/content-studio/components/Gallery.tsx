import { useState } from 'react';
import Lightbox from '@/components/base/Lightbox';
import SectionBadge from '@/components/base/SectionBadge';

const categories = ['All', 'Product Photography', 'Video Production', 'Social Content', 'Brand Campaigns'];

const galleryItems = [
  {
    id: 1,
    category: 'Product Photography',
    title: 'Premium Product Showcase',
    description: 'High-end product photography with studio lighting and professional styling',
    image: 'https://readdy.ai/api/search-image?query=professional%20product%20photography%20studio%20setup%20with%20premium%20lighting%20equipment%20and%20styled%20products%20on%20clean%20white%20background%20commercial%20quality&width=800&height=600&seq=cs1&orientation=landscape'
  },
  {
    id: 2,
    category: 'Video Production',
    title: 'Brand Story Video',
    description: 'Cinematic brand storytelling with professional crew and equipment',
    image: 'https://readdy.ai/api/search-image?query=professional%20video%20production%20crew%20filming%20brand%20commercial%20with%20cinema%20cameras%20lighting%20setup%20and%20director%20on%20modern%20set&width=800&height=600&seq=cs2&orientation=landscape'
  },
  {
    id: 3,
    category: 'Social Content',
    title: 'Social Media Content',
    description: 'Engaging social media content optimized for platform performance',
    image: 'https://readdy.ai/api/search-image?query=creative%20social%20media%20content%20creation%20setup%20with%20ring%20lights%20smartphone%20tripods%20and%20colorful%20props%20for%20instagram%20tiktok%20content&width=800&height=600&seq=cs3&orientation=landscape'
  },
  {
    id: 4,
    category: 'Brand Campaigns',
    title: 'Campaign Launch',
    description: 'Full-scale brand campaign production with multiple touchpoints',
    image: 'https://readdy.ai/api/search-image?query=large%20scale%20brand%20campaign%20photoshoot%20with%20models%20creative%20team%20and%20elaborate%20set%20design%20professional%20advertising%20production&width=800&height=600&seq=cs4&orientation=landscape'
  },
  {
    id: 5,
    category: 'Product Photography',
    title: 'Lifestyle Product Shots',
    description: 'Products in real-world contexts with authentic lifestyle settings',
    image: 'https://readdy.ai/api/search-image?query=lifestyle%20product%20photography%20with%20natural%20settings%20authentic%20environments%20and%20styled%20scenes%20showing%20products%20in%20use&width=800&height=600&seq=cs5&orientation=landscape'
  },
  {
    id: 6,
    category: 'Video Production',
    title: 'Behind The Scenes',
    description: 'Documentary-style BTS content showing production process',
    image: 'https://readdy.ai/api/search-image?query=behind%20the%20scenes%20video%20production%20showing%20crew%20working%20with%20cameras%20lighting%20and%20talent%20on%20professional%20film%20set&width=800&height=600&seq=cs6&orientation=landscape'
  },
  {
    id: 7,
    category: 'Social Content',
    title: 'Influencer Collaboration',
    description: 'Co-created content with brand ambassadors and influencers',
    image: 'https://readdy.ai/api/search-image?query=influencer%20content%20creation%20session%20with%20professional%20setup%20ring%20lights%20and%20brand%20products%20modern%20studio%20environment&width=800&height=600&seq=cs7&orientation=landscape'
  },
  {
    id: 8,
    category: 'Brand Campaigns',
    title: 'Multi-Channel Assets',
    description: 'Comprehensive asset library for omnichannel campaigns',
    image: 'https://readdy.ai/api/search-image?query=diverse%20marketing%20assets%20collection%20showing%20print%20digital%20and%20video%20content%20organized%20professional%20brand%20campaign%20materials&width=800&height=600&seq=cs8&orientation=landscape'
  },
  {
    id: 9,
    category: 'Product Photography',
    title: 'E-commerce Optimization',
    description: 'Product images optimized for online retail performance',
    image: 'https://readdy.ai/api/search-image?query=ecommerce%20product%20photography%20with%20multiple%20angles%20white%20background%20and%20detail%20shots%20professional%20online%20retail%20images&width=800&height=600&seq=cs9&orientation=landscape'
  },
  {
    id: 10,
    category: 'Video Production',
    title: 'Tutorial & How-To',
    description: 'Educational video content with clear step-by-step demonstrations',
    image: 'https://readdy.ai/api/search-image?query=professional%20tutorial%20video%20filming%20with%20overhead%20camera%20setup%20hands%20demonstrating%20product%20use%20clean%20instructional%20content&width=800&height=600&seq=cs10&orientation=landscape'
  },
  {
    id: 11,
    category: 'Social Content',
    title: 'User-Generated Style',
    description: 'Authentic UGC-style content that drives engagement',
    image: 'https://readdy.ai/api/search-image?query=authentic%20user%20generated%20content%20style%20photography%20casual%20natural%20lighting%20real%20people%20using%20products%20genuine%20moments&width=800&height=600&seq=cs11&orientation=landscape'
  },
  {
    id: 12,
    category: 'Brand Campaigns',
    title: 'Seasonal Campaign',
    description: 'Themed seasonal content with cohesive visual storytelling',
    image: 'https://readdy.ai/api/search-image?query=seasonal%20brand%20campaign%20photoshoot%20with%20themed%20decorations%20professional%20models%20and%20coordinated%20styling%20festive%20commercial%20production&width=800&height=600&seq=cs12&orientation=landscape'
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
          <SectionBadge text="Our Work" variant="dark" className="mb-6" />
          <h2 className="text-5xl font-black mb-6 uppercase">Content Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of professional content creation across multiple formats and industries
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
          {visibleThumbnails.map((item, index) => (
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
          {gridItems.map((item, index) => (
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