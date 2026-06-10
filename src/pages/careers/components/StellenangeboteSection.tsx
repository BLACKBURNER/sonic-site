import { useEffect } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

export default function StellenangeboteSection() {
  useEffect(() => {
    // Load B-ite Jobs API script
    const script = document.createElement('script');
    script.src = "https://static.b-ite.com/jobs-api/loader-v1/api-loader-v1.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="stellenangebote" className="py-14 md:py-20 px-4 md:px-6 bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
          <div>
            <SectionBadge text="Aktuelle Stellenangebote" variant="dark" className="mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-sonic-dark leading-tight tracking-tight">
              DEIN NÄCHSTER<br />
              <span className="text-[#C8D400]">KARRIERESCHRITT</span>
            </h2>
          </div>
        </div>

        {/* B-ite Jobs Widget */}
        <div className="bg-white border border-gray-100 p-6 md:p-8 min-h-[400px]" style={{ borderRadius: 0 }}>
          <div 
            className="jobWrapper-block" 
            data-bite-jobs-api-listing="sonic-sales-support-gmbh:main-listing"
          >
            {/* The widget will be injected here by the script */}
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <div className="w-10 h-10 border-4 border-[#C8D400]/30 border-t-[#C8D400] rounded-full animate-spin" />
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Stellenangebote werden geladen…</p>
            </div>
          </div>
        </div>

        {/* Combined Tanja + Initiativbewerbung CTA */}
        <div
          className="mt-4 bg-[#1a1a1a] p-6 md:p-8"
          style={{ borderRadius: 0 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Tanja section */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden flex items-center justify-center" style={{ borderRadius: 0 }}>
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20woman%20HR%20recruiter%20warm%20authentic%20smile%20modern%20office%20creative%20agency%20bright%20natural%20environment%20editorial%20portrait%20photography%20natural%20light%20clean%20background%20sharp%20detail%20professional%20yet%20approachable&width=96&height=96&seq=tanja-headshot-stellen&orientation=squarish"
                  alt="Tanja"
                  className="w-full h-full object-cover ring-2 ring-[#C8D400]/30"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <i className="ri-chat-smile-2-line text-[#C8D400]" />
                  <h3 className="text-sm font-black text-white">Unsicher, welche Stelle zu dir passt?</h3>
                </div>
                <p className="text-xs text-white/50 max-w-lg leading-relaxed">
                  Tanja aus unserem HR-Team nimmt sich gerne Zeit für ein unverbindliches Gespräch. Oder schick uns deine Initiativbewerbung — wir freuen uns immer über engagierte Talente.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
              <a
                href="https://calendly.com/sonic-group/tanja-15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C8D400] text-[#111] font-black text-xs uppercase tracking-wider hover:bg-white hover:text-[#C8D400] border-2 border-[#C8D400] hover:border-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{ borderRadius: 0 }}
              >
                <i className="ri-calendar-line text-sm" />
                Mit Tanja sprechen
              </a>
              <a
                href="mailto:karriere@sonic-group.de?subject=Initiativbewerbung"
                className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-white/20 text-white font-black text-xs uppercase tracking-wider hover:bg-white/10 hover:border-[#C8D400]/50 transition-all duration-300 whitespace-nowrap cursor-pointer"
                style={{ borderRadius: 0 }}
              >
                <i className="ri-send-plane-line text-sm" />
                Initiativbewerbung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
