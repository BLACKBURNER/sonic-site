import React from 'react';

interface ServiceDualCTAProps {
  primaryTitle: string;
  primaryDescription: string;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryTitle: string;
  secondaryDescription: string;
  secondaryButtonText: string;
  secondaryButtonAction: () => void;
  secondaryIcon?: string;
}

const ServiceDualCTA: React.FC<ServiceDualCTAProps> = ({
  primaryTitle,
  primaryDescription,
  primaryButtonText,
  primaryButtonAction,
  secondaryTitle,
  secondaryDescription,
  secondaryButtonText,
  secondaryButtonAction,
  secondaryIcon = 'ri-arrow-right-line'
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#C8D400]/5 to-white relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#C8D400]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C8D400]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Primary CTA - Book Consultation */}
          <div className="bg-[#1a1a1a] p-10 relative overflow-hidden group" style={{ borderRadius: 0 }}>
            {/* Animated Border Glow */}
            <div className="absolute inset-0 border-2 border-[#C8D400]/30 group-hover:border-[#C8D400]/60 transition-all duration-500" style={{ borderRadius: 0 }}></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(#C8D400 1px, transparent 1px), linear-gradient(90deg, #C8D400 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative z-10">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
                <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Spots Available</span>
              </div>

              {/* Calendar Icon */}
              <div className="w-16 h-16 bg-[#C8D400]/10 border-2 border-[#C8D400]/30 flex items-center justify-center mb-6" style={{ borderRadius: 0 }}>
                <i className="ri-calendar-check-line text-3xl text-[#C8D400]"></i>
              </div>

              <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                {primaryTitle}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {primaryDescription}
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-[#C8D400] text-xl"></i>
                  <span className="text-sm text-gray-400 font-semibold">30 Minutes Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-[#C8D400] text-xl"></i>
                  <span className="text-sm text-gray-400 font-semibold">No Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-check-line text-[#C8D400] text-xl"></i>
                  <span className="text-sm text-gray-400 font-semibold">Expert Insights</span>
                </div>
              </div>

              <button
                onClick={primaryButtonAction}
                className="w-full bg-sonic-lime text-sonic-dark px-8 py-5 font-black uppercase tracking-wider text-lg hover:bg-white hover:text-sonic-dark transition-all duration-300 flex items-center justify-center gap-3 group/btn"
              >
                <span>{primaryButtonText}</span>
                <i className="ri-arrow-right-line text-2xl group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>

          {/* Secondary CTA - Service Specific */}
          <div className="bg-white border-2 border-[#C8D400]/30 p-10 relative overflow-hidden group hover:border-[#C8D400]/60 transition-all duration-500" style={{ borderRadius: 0 }}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D400]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#C8D400]/10 border-2 border-[#C8D400]/30 flex items-center justify-center mb-6" style={{ borderRadius: 0 }}>
                <i className={`${secondaryIcon} text-3xl text-[#C8D400]`}></i>
              </div>

              <h3 className="text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tight">
                {secondaryTitle}
              </h3>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {secondaryDescription}
              </p>

              <button
                onClick={secondaryButtonAction}
                className="w-full border-2 border-[#C8D400] text-[#1a1a1a] px-8 py-5 font-black uppercase tracking-wider text-lg hover:bg-[#C8D400] transition-all duration-300 flex items-center justify-center gap-3 group/btn"
              >
                <span>{secondaryButtonText}</span>
                <i className="ri-arrow-right-line text-2xl group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDualCTA;