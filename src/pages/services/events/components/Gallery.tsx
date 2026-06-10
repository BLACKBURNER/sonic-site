import { useState } from 'react';
import Lightbox from '@/components/base/Lightbox';
import SectionBadge from '@/components/base/SectionBadge';

const categories = ['All', 'Setup', 'Live Action', 'Team', 'Results'];

const galleryItems = [
  {
    id: 1,
    category: 'Setup',
    title: 'Event Space Transformation',
    description: 'Complete venue setup with branded elements and professional staging',
    image: 'https://readdy.ai/api/search-image?query=professional%20event%20setup%20with%20branded%20booth%20displays%20lighting%20equipment%20and%20staging%20being%20installed%20in%20modern%20venue%20space&width=800&height=600&seq=ev1&orientation=landscape'
  },
  {
    id: 2,
    category: 'Live Action',
    title: 'Product Launch Event',
    description: 'High-energy product reveal with audience engagement and live demonstrations',
    image: 'https://readdy.ai/api/search-image?query=exciting%20product%20launch%20event%20with%20large%20audience%20stage%20presentation%20dramatic%20lighting%20and%20brand%20displays%20corporate%20event&width=800&height=600&seq=ev2&orientation=landscape'
  },
  {
    id: 3,
    category: 'Team',
    title: 'Professional Event Staff',
    description: 'Trained brand ambassadors delivering exceptional attendee experiences',
    image: 'https://readdy.ai/api/search-image?query=professional%20event%20staff%20team%20in%20branded%20uniforms%20interacting%20with%20guests%20at%20corporate%20event%20friendly%20service&width=800&height=600&seq=ev3&orientation=landscape'
  },
  {
    id: 4,
    category: 'Results',
    title: 'Engagement Metrics',
    description: 'Measurable success with high attendee satisfaction and brand impact',
    image: 'https://readdy.ai/api/search-image?query=successful%20event%20results%20showing%20engaged%20crowd%20happy%20attendees%20and%20busy%20branded%20booth%20with%20people%20interacting&width=800&height=600&seq=ev4&orientation=landscape'
  },
  {
    id: 5,
    category: 'Setup',
    title: 'Trade Show Booth Build',
    description: 'Custom booth construction with modular design and brand integration',
    image: 'https://readdy.ai/api/search-image?query=trade%20show%20booth%20construction%20with%20modular%20displays%20branded%20graphics%20and%20professional%20setup%20crew%20working&width=800&height=600&seq=ev5&orientation=landscape'
  },
  {
    id: 6,
    category: 'Live Action',
    title: 'Interactive Demonstrations',
    description: 'Live product demos creating memorable brand experiences',
    image: 'https://readdy.ai/api/search-image?query=interactive%20product%20demonstration%20at%20event%20with%20presenter%20showing%20features%20to%20engaged%20audience%20hands%20on%20experience&width=800&height=600&seq=ev6&orientation=landscape'
  },
  {
    id: 7,
    category: 'Team',
    title: 'Event Coordination',
    description: 'Behind-the-scenes coordination ensuring flawless execution',
    image: 'https://readdy.ai/api/search-image?query=event%20coordination%20team%20with%20headsets%20and%20tablets%20managing%20logistics%20backstage%20at%20professional%20corporate%20event&width=800&height=600&seq=ev7&orientation=landscape'
  },
  {
    id: 8,
    category: 'Results',
    title: 'Lead Generation Success',
    description: 'Qualified leads captured through strategic event engagement',
    image: 'https://readdy.ai/api/search-image?query=successful%20lead%20generation%20at%20event%20with%20attendees%20signing%20up%20scanning%20badges%20and%20engaging%20with%20brand%20representatives&width=800&height=600&seq=ev8&orientation=landscape'
  },
  {
    id: 9,
    category: 'Setup',
    title: 'Audio Visual Integration',
    description: 'Professional AV setup with screens, sound, and lighting systems',
    image: 'https://readdy.ai/api/search-image?query=professional%20audio%20visual%20setup%20with%20large%20led%20screens%20sound%20systems%20and%20stage%20lighting%20being%20installed%20for%20event&width=800&height=600&seq=ev9&orientation=landscape'
  },
  {
    id: 10,
    category: 'Live Action',
    title: 'Networking Reception',
    description: 'Curated networking experiences fostering business connections',
    image: 'https://readdy.ai/api/search-image?query=professional%20networking%20reception%20with%20business%20people%20mingling%20branded%20environment%20and%20elegant%20catering%20setup&width=800&height=600&seq=ev10&orientation=landscape'
  },
  {
    id: 11,
    category: 'Team',
    title: 'Registration & Check-in',
    description: 'Efficient attendee management with professional registration staff',
    image: 'https://readdy.ai/api/search-image?query=professional%20event%20registration%20desk%20with%20staff%20checking%20in%20attendees%20using%20tablets%20and%20badge%20printing%20equipment&width=800&height=600&seq=ev11&orientation=landscape'
  },
  {
    id: 12,
    category: 'Results',
    title: 'Social Media Buzz',
    description: 'Viral event moments generating organic social engagement',
    image: 'https://readdy.ai/api/search-image?query=event%20attendees%20taking%20photos%20and%20selfies%20at%20branded%20photo%20wall%20social%20media%20moment%20with%20hashtag%20display&width=800&height=600&seq=ev12&orientation=landscape'
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
          <SectionBadge text="Event Showcase" variant="dark" className="mb-6" />
          <h2 className="text-5xl font-black mb-6 uppercase">Events Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our event execution excellence through real project documentation
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