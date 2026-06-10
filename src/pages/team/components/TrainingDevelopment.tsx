import SectionBadge from '@/components/base/SectionBadge';

export default function TrainingDevelopment() {
  const programs = [
    {
      title: 'Brand Training',
      description: 'Intensive Schulungen zu Produkten, Markenidentität und Verkaufstechniken',
      icon: 'ri-book-open-line'
    },
    {
      title: 'Career Development',
      description: 'Klare Entwicklungspfade und Aufstiegsmöglichkeiten innerhalb des Unternehmens',
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Continuous Learning',
      description: 'Regelmäßige Weiterbildungen und Zugang zu modernen Lernplattformen',
      icon: 'ri-graduation-cap-line'
    },
    {
      title: 'Mentorship',
      description: 'Erfahrene Kollegen als Mentoren für persönliche und berufliche Entwicklung',
      icon: 'ri-user-star-line'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <SectionBadge text="Growth & Development" variant="light" className="mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-sonic-dark mb-5 leading-tight tracking-tight">
              TRAINING &<br />ENTWICKLUNG
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
              Wir investieren kontinuierlich in die Entwicklung unserer Mitarbeiter.
              Von der ersten Schulung bis zur Führungsposition – wir begleiten dich auf deinem Weg.
            </p>

            <div className="space-y-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 bg-[#f5f5f5] border border-gray-100 hover:border-[#C8D400]/40 hover:bg-white transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/15 flex-shrink-0" style={{ borderRadius: 0 }}>
                    <i className={`${program.icon} text-lg text-[#C8D400]`}></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-sonic-dark mb-1 uppercase tracking-wide leading-tight">{program.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-gray-200" style={{ borderRadius: 0, aspectRatio: '4/5' }}>
              <img
                src="https://readdy.ai/api/search-image?query=professional%20training%20session%20with%20instructor%20teaching%20group%20of%20engaged%20employees%20in%20modern%20bright%20classroom%20setting%20collaborative%20learning%20environment%20minimal%20design%20clean&width=800&height=1000&seq=team-training-v2&orientation=portrait"
                alt="Training Session"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Lime accent corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#C8D400]/15 border-2 border-[#C8D400]/30 -z-10" style={{ borderRadius: 0 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
