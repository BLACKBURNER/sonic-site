import SectionBadge from '@/components/base/SectionBadge';

export default function HowWeHire() {
  const weeks = [
    {
      week: 'Woche 1',
      title: 'Bewerbungscheck',
      description: 'Wir prüfen deine Bewerbung innerhalb von 48 Stunden. Bei einem Match meldet sich Tanja oder ihr Team.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20document%20file%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-file-chestnut&orientation=squarish',
    },
    {
      week: 'Woche 2',
      title: 'Erstgespräch',
      description: '30-minütiger Video-Call über deinen Hintergrund, deine Ziele und was du dir von deiner nächsten Stelle erwartest.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20video%20chat%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-video-chestnut&orientation=squarish',
    },
    {
      week: 'Woche 3',
      title: 'Skills-Check',
      description: 'Positionsabhängige Aufgabe — Sales-Simulation, technischer Test oder Case Study.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20pencil%20edit%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-pencil-chestnut&orientation=squarish',
    },
    {
      week: 'Woche 4',
      title: 'Team-Interview',
      description: 'Lern dein potenzielles Team und deinen Vorgesetzten kennen. Wir möchten, dass du siehst, ob Sonic zu dir passt.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20team%20group%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-team-chestnut&orientation=squarish',
    },
    {
      week: 'Woche 5',
      title: 'Leadership-Gespräch',
      description: 'Abschlussgespräch mit der Führungsebene über Vision, Kultur und langfristige Perspektiven.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20star%20person%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-leader-chestnut&orientation=squarish',
    },
    {
      week: 'Woche 6',
      title: 'Angebot & Verhandlung',
      description: 'Wir unterbreiten unser Angebot und arbeiten gemeinsam daran, dass es deinen Vorstellungen entspricht.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20handshake%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-handshake-chestnut&orientation=squarish',
    },
    {
      week: 'Woche 7',
      title: 'Willkommen im Team',
      description: 'Onboarding beginnt! Du erhältst Equipment, Trainingsplan und lernst das gesamte Team kennen.',
      woodIcon: 'https://readdy.ai/api/search-image?query=wooden%20rocket%20launch%20icon%20carved%20from%20dark%20chestnut%20wood%20rich%20brown%20grain%20texture%20natural%20material%20simple%20minimalist%20design%20on%20white%20background&width=48&height=48&seq=wood-rocket-chestnut&orientation=squarish',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge text="Unser Prozess" variant="dark" className="mb-6" aria-label="Hiring-Prozess" />
          <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark leading-tight tracking-tight mb-1 uppercase">
            SO LÄUFT
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark leading-tight tracking-tight mb-5 uppercase">
            DAS HIRING AB.
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent, respektvoll und darauf ausgelegt, die richtige gegenseitige Passung zu finden.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#C8D400] px-6 py-3">
            <i className="ri-emotion-happy-line text-xl text-sonic-dark"></i>
            <span className="font-bold text-sonic-dark text-sm">98 % Kandidatenzufriedenheit</span>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C8D400] via-gray-200 to-[#C8D400] hidden md:block"></div>

          <div className="space-y-8">
            {weeks.map((week, index) => (
              <div key={index} className="relative pl-0 md:pl-24">
                {/* Week Badge with wooden icon */}
                <div className="absolute left-0 top-0 w-16 h-16 overflow-hidden hidden md:flex ring-2 ring-[#8B5A2B]/30" style={{ borderRadius: 0 }}>
                  <img src={week.woodIcon} alt={week.title} className="w-full h-full object-cover" />
                </div>

                {/* Content Card */}
                <div
                  className="bg-[#f9f9f7] p-6 border border-gray-200 hover:border-[#C8D400]/50 transition-all"
                  style={{ borderRadius: 0 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 overflow-hidden md:hidden ring-2 ring-[#8B5A2B]/30" style={{ borderRadius: 0 }}>
                      <img src={week.woodIcon} alt={week.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-black text-[#C8D400] mb-1 uppercase tracking-widest">{week.week}</div>
                      <h3 className="text-xl font-black text-sonic-dark mb-2 leading-tight">{week.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{week.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
            Der gesamte Prozess dauert in der Regel 6–7 Wochen. Wir arbeiten zügig und geben dabei beiden Seiten genug Zeit für eine fundierte Entscheidung.
          </p>
          <a
            href="#positions"
            className="inline-flex items-center gap-2 px-10 py-5 bg-sonic-lime text-sonic-dark font-black text-sm hover:bg-sonic-dark hover:text-sonic-lime transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
            style={{ borderRadius: 0 }}
          >
            Alle Stellen ansehen
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
