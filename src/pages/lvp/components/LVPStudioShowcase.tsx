import { CONTACT_EMAIL } from '@/lib/contact';
import VideoStudioPhone from '../../leistungen/video/components/VideoStudioPhone';

export default function LVPStudioShowcase() {
  return (
    <section className="bg-[#f5f5f0] py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/12 px-4 py-1.5 mb-5">
            <i className="ri-live-line text-[#111] text-sm" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Erlebbar werden</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-tight tracking-tight mb-3">
            ERLEBE UNSERE STUDIOS
            <br />
            <span className="text-[#C8D400]">LIVE &amp; IN AKTION.</span>
          </h2>
          <p className="text-[#111]/55 text-sm md:text-base max-w-2xl leading-relaxed">
            Videocontent und Live-Video-Kanäle mit unseren Markenbotschaftern, für Produktberatung, Sales und Service-Support. Buche eine Live-Demo in einem unserer Studios.
          </p>
        </div>

        {/* Phone mockup journey */}
        <VideoStudioPhone />

        {/* Studio info cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-[#111]/10 p-8 group hover:border-[#C8D400] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#C8D400] transition-all duration-300" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#111] flex items-center justify-center group-hover:bg-[#C8D400] transition-colors duration-300">
                <i className="ri-camera-3-line text-[#C8D400] text-lg group-hover:text-[#111] transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#111] leading-tight tracking-tight uppercase">Studio A</h3>
                <p className="text-xs text-gray-400 font-semibold">Consumer Electronics · 4K Multikamera</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {['4K Multikamera', 'Glasfaser 1 Gbit/s', 'Redundante Systeme', '99,9% Uptime'].map((spec, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#C8D400] flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-[#111] text-[10px]" />
                  </div>
                  <span className="text-sm text-[#111]/65">{spec}</span>
                </div>
              ))}
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Studio%20A%20Demo%20buchen`}
              className="inline-flex items-center gap-2 bg-[#111] text-white px-5 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-video-line" />
              Studio A Demo buchen
            </a>
          </div>

          <div className="bg-white border border-[#111]/10 p-8 group hover:border-[#C8D400] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#C8D400] transition-all duration-300" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#111] flex items-center justify-center group-hover:bg-[#C8D400] transition-colors duration-300">
                <i className="ri-magic-line text-[#C8D400] text-lg group-hover:text-[#111] transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#111] leading-tight tracking-tight uppercase">Studio B</h3>
                <p className="text-xs text-gray-400 font-semibold">Lifestyle &amp; Beauty · Flexibles Set</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {['Flexibles Set-Design', 'Softbox-Beleuchtung', 'Teleprompter', 'Greenscreen-Option'].map((spec, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#C8D400] flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-[#111] text-[10px]" />
                  </div>
                  <span className="text-sm text-[#111]/65">{spec}</span>
                </div>
              ))}
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Studio%20B%20Demo%20buchen`}
              className="inline-flex items-center gap-2 bg-[#111] text-white px-5 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-video-line" />
              Studio B Demo buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}