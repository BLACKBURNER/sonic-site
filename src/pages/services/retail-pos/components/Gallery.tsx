import { useState } from 'react';
import Lightbox from '@/components/base/Lightbox';
import SectionBadge from '@/components/base/SectionBadge';

const categories = ['All', 'Store Design', 'POS Materials', 'Brand Activation', 'Merchandising'];

const galleryItems = [
  {
    id: 1,
    category: 'Store Design',
    title: 'Flagship Store Layout',
    description: 'Premium retail space design with optimized customer flow and brand experience',
    image: 'https://readdy.ai/api/search-image?query=modern%20flagship%20retail%20store%20interior%20with%20premium%20design%20branded%20displays%20and%20optimized%20customer%20flow%20layout&width=800&height=600&seq=rp1&orientation=landscape'
  },
  {
    id: 2,
    category: 'POS Materials',
    title: 'Point of Sale Displays',
    description: 'Eye-catching POS materials driving impulse purchases and brand visibility',
    image: 'https://readdy.ai/api/search-image?query=professional%20point%20of%20sale%20displays%20with%20branded%20materials%20product%20stands%20and%20promotional%20signage%20in%20retail%20environment&width=800&height=600&seq=rp2&orientation=landscape'
  },
  {
    id: 3,
    category: 'Brand Activation',
    title: 'In-Store Experience',
    description: 'Interactive brand activations creating memorable shopping experiences',
    image: 'https://readdy.ai/api/search-image?query=interactive%20in%20store%20brand%20activation%20with%20customers%20engaging%20with%20product%20demonstrations%20and%20experiential%20displays&width=800&height=600&seq=rp3&orientation=landscape'
  },
  {
    id: 4,
    category: 'Merchandising',
    title: 'Visual Merchandising',
    description: 'Strategic product placement maximizing visibility and sales conversion',
    image: 'https://readdy.ai/api/search-image?query=professional%20visual%20merchandising%20with%20styled%20product%20displays%20coordinated%20color%20schemes%20and%20attractive%20retail%20presentation&width=800&height=600&seq=rp4&orientation=landscape'
  },
  {
    id: 5,
    category: 'Store Design',
    title: 'Window Display',
    description: 'Captivating window displays attracting foot traffic and showcasing brand identity',
    image: 'https://readdy.ai/api/search-image?query=stunning%20retail%20window%20display%20with%20creative%20product%20arrangement%20dramatic%20lighting%20and%20brand%20storytelling%20elements&width=800&height=600&seq=rp5&orientation=landscape'
  },
  {
    id: 6,
    category: 'POS Materials',
    title: 'Promotional Signage',
    description: 'Clear promotional messaging driving customer action and sales',
    image: 'https://readdy.ai/api/search-image?query=retail%20promotional%20signage%20with%20sale%20offers%20clear%20pricing%20displays%20and%20branded%20marketing%20materials%20in%20store&width=800&height=600&seq=rp6&orientation=landscape'
  },
  {
    id: 7,
    category: 'Brand Activation',
    title: 'Product Sampling',
    description: 'Engaging product sampling stations converting trials to purchases',
    image: 'https://readdy.ai/api/search-image?query=product%20sampling%20station%20in%20retail%20store%20with%20brand%20ambassadors%20offering%20samples%20to%20customers%20professional%20setup&width=800&height=600&seq=rp7&orientation=landscape'
  },
  {
    id: 8,
    category: 'Merchandising',
    title: 'Seasonal Display',
    description: 'Themed seasonal merchandising creating urgency and relevance',
    image: 'https://readdy.ai/api/search-image?query=seasonal%20retail%20merchandising%20display%20with%20themed%20decorations%20coordinated%20products%20and%20festive%20store%20atmosphere&width=800&height=600&seq=rp8&orientation=landscape'
  },
  {
    id: 9,
    category: 'Store Design',
    title: 'Checkout Experience',
    description: 'Optimized checkout area design reducing friction and encouraging add-ons',
    image: 'https://readdy.ai/api/search-image?query=modern%20retail%20checkout%20counter%20design%20with%20impulse%20purchase%20displays%20efficient%20layout%20and%20branded%20elements&width=800&height=600&seq=rp9&orientation=landscape'
  },
  {
    id: 10,
    category: 'POS Materials',
    title: 'Shelf Talkers',
    description: 'Attention-grabbing shelf communication highlighting key products',
    image: 'https://readdy.ai/api/search-image?query=retail%20shelf%20talkers%20and%20product%20tags%20with%20promotional%20messages%20pricing%20and%20brand%20highlights%20on%20store%20shelves&width=800&height=600&seq=rp10&orientation=landscape'
  },
  {
    id: 11,
    category: 'Brand Activation',
    title: 'Launch Event',
    description: 'In-store product launch events generating buzz and immediate sales',
    image: 'https://readdy.ai/api/search-image?query=in%20store%20product%20launch%20event%20with%20crowd%20of%20customers%20brand%20representatives%20and%20promotional%20activities%20in%20retail%20space&width=800&height=600&seq=rp11&orientation=landscape'
  },
  {
    id: 12,
    category: 'Merchandising',
    title: 'Cross-Merchandising',
    description: 'Strategic product pairing increasing basket size and customer value',
    image: 'https://readdy.ai/api/search-image?query=cross%20merchandising%20display%20showing%20complementary%20products%20grouped%20together%20strategic%20retail%20product%20placement&width=800&height=600&seq=rp12&orientation=landscape'
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
          <SectionBadge text="Retail Excellence" variant="dark" className="mb-6" />
          <h2 className="text-5xl font-black mb-6 uppercase">Retail &amp; POS Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our retail design and point-of-sale solutions that drive sales
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