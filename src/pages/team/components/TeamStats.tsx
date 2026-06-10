import { useState } from 'react';
import SectionBadge from '@/components/base/SectionBadge';

export default function TeamStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    {
      number: '650.000+',
      label: 'Man-Days Delivered',
      icon: 'ri-calendar-check-line'
    },
    {
      number: '500+',
      label: 'Successful Projects',
      icon: 'ri-trophy-line'
    },
    {
      number: '100.000+',
      label: 'POS Implementations',
      icon: 'ri-store-3-line'
    },
    {
      number: '13+',
      label: 'Years Experience',
      icon: 'ri-time-line'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge text="Our Numbers" variant="dark" className="mb-6" />
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-6 leading-tight tracking-tight">
            ZAHLEN, DIE <span className="relative inline-block">
              SPRECHEN
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#C8D400]/30 -z-10"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über ein Jahrzehnt Erfahrung mit den größten Marken
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative text-center p-8 bg-white transition-all border border-gray-100 cursor-pointer"
              style={{
                borderRadius: 0,
                transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? '0 20px 40px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Bottom Accent Bar on hover */}
              <div 
                className="absolute bottom-0 left-0 right-0 transition-all duration-300"
                style={{
                  height: hoveredIndex === index ? '3px' : '0px',
                  background: '#C8D400'
                }}
              />

              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
                style={{
                  borderRadius: 0,
                  background: hoveredIndex === index ? '#C8D400' : 'rgba(200,212,0,0.12)'
                }}
              >
                <i className={`${stat.icon} text-2xl transition-colors duration-300`}
                  style={{
                    color: hoveredIndex === index ? '#111' : '#C8D400'
                  }}
                ></i>
              </div>
              <div className="text-4xl md:text-5xl font-black mb-3 transition-colors duration-300"
                style={{
                  color: index % 2 === 0 ? '#C8D400' : '#111'
                }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}