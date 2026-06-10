import { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact';

export default function DualAudienceCTA() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Lime green background glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8D400]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C8D400]/6 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-6">
            READY TO START?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to grow your brand or grow your career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Clients */}
          <AudienceCard
            index={0}
            isHovered={hoveredCard === 0}
            onHover={() => setHoveredCard(0)}
            onLeave={() => setHoveredCard(null)}
            icon="https://readdy.ai/api/search-image?query=wooden%20briefcase%20business%20icon%20carved%20from%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-brief-cta2&orientation=squarish"
            title="FOR BRANDS"
            description="Entering DACH? Scaling retail presence? Launching new products? Let's discuss how we can drive your success."
            features={['Market entry assessment', 'Custom solution design', 'Performance optimization']}
            primaryCTA={{ text: 'Request Consultation', href: 'mailto:${CONTACT_EMAIL}`' }}
            secondaryCTA={{ text: 'Call +49 2151 479 444 0', href: 'tel:+4921514794440' }}
            primaryStyle="bg-[#C8D400] text-white hover:bg-white hover:text-[#111]"
          />

          {/* For Candidates */}
          <AudienceCard
            index={1}
            isHovered={hoveredCard === 1}
            onHover={() => setHoveredCard(1)}
            onLeave={() => setHoveredCard(null)}
            icon="https://readdy.ai/api/search-image?query=wooden%20team%20people%20group%20icon%20carved%20from%20light%20oak%20wood%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background%20top%20view%20flat%20lay%20product%20photography&width=100&height=100&seq=wood-team-cta2&orientation=squarish"
            title="FOR TALENT"
            description="Passionate about brands? Love working with people? Join a team that values attitude over credentials."
            features={['Work with world-class brands', 'Continuous training & development', 'Team that feels like family']}
            primaryCTA={{ text: 'View Open Positions', href: '/careers' }}
            secondaryCTA={{ text: 'Explore Careers', href: '/careers' }}
            primaryStyle="bg-sonic-dark text-white hover:bg-[#C8D400]"
          />
        </div>
      </div>
    </section>
  );
}

interface AudienceCardProps {
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  icon: string;
  title: string;
  description: string;
  features: string[];
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  primaryStyle: string;
}

function AudienceCard({ index, isHovered, onHover, onLeave, icon, title, description, features, primaryCTA, secondaryCTA, primaryStyle }: AudienceCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-10 transition-all duration-500 group relative overflow-hidden flex flex-col cursor-pointer"
      style={{
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 32px 80px rgba(200,212,0,0.18), 0 12px 32px rgba(0,0,0,0.15)'
          : '0 8px 32px rgba(0,0,0,0.08)',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Top highlight bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500"
        style={{
          background: isHovered
            ? 'linear-gradient(90deg, transparent 0%, #C8D400 30%, #a8b300 70%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(200,212,0,0.25) 50%, transparent 100%)',
          boxShadow: isHovered ? '0 0 16px rgba(200,212,0,0.6)' : 'none',
        }}
      />

      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[3px] transition-all duration-500"
        style={{
          background: isHovered
            ? 'linear-gradient(180deg, #C8D400 0%, rgba(200,212,0,0.4) 70%, transparent 100%)'
            : 'rgba(200,212,0,0.15)',
        }}
      />

      {/* Lime tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(200,212,0,0.06) 0%, transparent 60%)',
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500 ring-2 ring-gray-200 group-hover:ring-[#C8D400] flex-shrink-0 relative z-10">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <h3 className="text-3xl font-black text-sonic-dark mb-4 relative z-10">
        {title}
      </h3>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed relative z-10">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8 flex-grow relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700">
            <div className="w-6 h-6 bg-[#C8D400] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-check-line text-white text-sm font-bold"></i>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-col gap-3 relative z-10">
        <a 
          href={primaryCTA.href} 
          className={`px-6 py-3 font-bold rounded-lg transition-all text-center whitespace-nowrap shadow-md cursor-pointer ${primaryStyle}`}
        >
          {primaryCTA.text}
        </a>
        <a 
          href={secondaryCTA.href} 
          className="px-6 py-3 bg-transparent border-2 border-gray-300 text-sonic-dark font-bold rounded-lg hover:bg-[#C8D400]/10 hover:border-[#C8D400] transition-all text-center whitespace-nowrap cursor-pointer"
        >
          {secondaryCTA.text}
        </a>
      </div>
    </div>
  );
}