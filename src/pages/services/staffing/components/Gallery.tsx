import { useState } from 'react';
import Lightbox from '@/components/base/Lightbox';
import SectionBadge from '@/components/base/SectionBadge';

const categories = ['All', 'Brand Ambassadors', 'Live Activations', 'Event Staffing', 'Results'];

const galleryItems = [
  {
    id: 1,
    category: 'Brand Ambassadors',
    title: 'Professional Brand Representatives',
    description: 'Trained ambassadors embodying brand values and delivering exceptional experiences',
    image: 'https://readdy.ai/api/search-image?query=professional%20brand%20ambassadors%20in%20branded%20uniforms%20engaging%20with%20customers%20friendly%20approachable%20team%20members&width=800&height=600&seq=st1&orientation=landscape'
  },
  {
    id: 2,
    category: 'Live Activations',
    title: 'Product Demonstration',
    description: 'Engaging live demonstrations showcasing product features and benefits',
    image: 'https://readdy.ai/api/search-image?query=live%20product%20demonstration%20with%20brand%20ambassador%20showing%20features%20to%20engaged%20audience%20interactive%20presentation&width=800&height=600&seq=st2&orientation=landscape'
  },
  {
    id: 3,
    category: 'Event Staffing',
    title: 'Trade Show Team',
    description: 'Professional event staff managing booth operations and visitor engagement',
    image: 'https://readdy.ai/api/search-image?query=professional%20trade%20show%20staff%20team%20at%20branded%20booth%20welcoming%20visitors%20and%20managing%20event%20operations&width=800&height=600&seq=st3&orientation=landscape'
  },
  {
    id: 4,
    category: 'Results',
    title: 'Customer Engagement Success',
    description: 'High engagement rates and positive customer interactions driving results',
    image: 'https://readdy.ai/api/search-image?query=successful%20customer%20engagement%20with%20happy%20customers%20interacting%20with%20brand%20staff%20positive%20experiences%20and%20smiles&width=800&height=600&seq=st4&orientation=landscape'
  },
  {
    id: 5,
    category: 'Brand Ambassadors',
    title: 'Retail Store Promoters',
    description: 'In-store brand representatives driving product awareness and sales',
    image: 'https://readdy.ai/api/search-image?query=retail%20store%20brand%20promoters%20in%20uniform%20helping%20customers%20with%20product%20selection%20professional%20in%20store%20staff&width=800&height=600&seq=st5&orientation=landscape'
  },
  {
    id: 6,
    category: 'Live Activations',
    title: 'Sampling Campaign',
    description: 'Street team executing high-impact product sampling activations',
    image: 'https://readdy.ai/api/search-image?query=street%20team%20product%20sampling%20activation%20with%20branded%20uniforms%20distributing%20samples%20to%20public%20outdoor%20promotion&width=800&height=600&seq=st6&orientation=landscape'
  },
  {
    id: 7,
    category: 'Event Staffing',
    title: 'Conference Support',
    description: 'Professional conference staff ensuring smooth event operations',
    image: 'https://readdy.ai/api/search-image?query=professional%20conference%20staff%20with%20headsets%20and%20tablets%20coordinating%20event%20logistics%20and%20assisting%20attendees&width=800&height=600&seq=st7&orientation=landscape'
  },
  {
    id: 8,
    category: 'Results',
    title: 'Lead Generation',
    description: 'Qualified leads captured through strategic staff engagement',
    image: 'https://readdy.ai/api/search-image?query=successful%20lead%20generation%20with%20staff%20collecting%20contact%20information%20from%20interested%20customers%20using%20tablets&width=800&height=600&seq=st8&orientation=landscape'
  },
  {
    id: 9,
    category: 'Brand Ambassadors',
    title: 'Campus Ambassadors',
    description: 'Student brand representatives building awareness in university settings',
    image: 'https://readdy.ai/api/search-image?query=campus%20brand%20ambassadors%20engaging%20with%20students%20on%20university%20campus%20youthful%20energetic%20brand%20promotion&width=800&height=600&seq=st9&orientation=landscape'
  },
  {
    id: 10,
    category: 'Live Activations',
    title: 'Pop-Up Experience',
    description: 'Temporary brand experiences staffed with engaging team members',
    image: 'https://readdy.ai/api/search-image?query=pop%20up%20brand%20experience%20with%20staff%20managing%20interactive%20displays%20and%20engaging%20visitors%20temporary%20activation&width=800&height=600&seq=st10&orientation=landscape'
  },
  {
    id: 11,
    category: 'Event Staffing',
    title: 'Festival Team',
    description: 'Large-scale festival staffing with coordinated brand presence',
    image: 'https://readdy.ai/api/search-image?query=festival%20event%20staff%20team%20in%20branded%20gear%20managing%20booth%20at%20outdoor%20music%20festival%20large%20crowd&width=800&height=600&seq=st11&orientation=landscape'
  },
  {
    id: 12,
    category: 'Results',
    title: 'Brand Awareness Growth',
    description: 'Measurable increase in brand recognition through staff activations',
    image: 'https://readdy.ai/api/search-image?query=successful%20brand%20awareness%20campaign%20with%20crowds%20of%20people%20engaging%20with%20brand%20staff%20and%20taking%20photos&width=800&height=600&seq=st12&orientation=landscape'
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
          <SectionBadge text="Our Team In Action" variant="dark" className="mb-6" />
          <h2 className="text-5xl font-black mb-6 uppercase">Staffing Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our professional brand ambassadors and event staff delivering exceptional results
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