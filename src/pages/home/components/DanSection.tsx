
import { useState } from 'react';

export default function DanSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-4 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Corner Accents */}
          <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C8D400] rounded-tl-lg transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C8D400] rounded-tr-lg transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C8D400] rounded-bl-lg transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C8D400] rounded-br-lg transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

          {/* Border Glow */}
          <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 pointer-events-none ${isHovered ? 'border-[#C8D400] shadow-[0_0_20px_rgba(200,212,0,0.3)]' : 'border-gray-200'}`}></div>

          <div className="relative z-10 flex items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-black text-sonic-dark mb-1">
                BOOK A 30-MINUTE FREE CONSULTATION
              </h3>
              <p className="text-gray-600 text-sm">
                Let's discuss how we can help you succeed in the DACH market
              </p>
            </div>
            <a 
              href="tel:+4921514794440"
              className="relative w-14 h-14 rounded-xl overflow-hidden shadow-lg ring-4 ring-[#C8D400]/30 hover:ring-[#C8D400] transition-all duration-500 hover:scale-110 cursor-pointer flex-shrink-0"
            >
              <div className="absolute inset-0">
                <img
                  src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=56&height=56&seq=wood-icon-consultation&orientation=squarish"
                  alt="Wood texture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <i className="ri-phone-line text-[#C8D400] text-2xl drop-shadow-lg"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
