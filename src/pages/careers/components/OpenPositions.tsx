import { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact';

export default function OpenPositions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const positions = [
    {
      title: 'Senior Sales Representative',
      category: 'Sales',
      location: 'Krefeld, Deutschland',
      type: 'Vollzeit',
      description: 'Steigere den Umsatz für Premium-Marken im DACH-Einzelhandel und bring deine Verkaufsstärke ein.',
      requirements: ['3+ Jahre B2B-Vertriebserfahrung', 'Fließend Deutsch & Englisch', 'Führerschein Klasse B'],
    },
    {
      title: 'Account Manager – Consumer Electronics',
      category: 'Sales',
      location: 'Wien, Österreich',
      type: 'Vollzeit',
      description: 'Betreue wichtige Handelspartnerschaften und führe strategische Kampagnen für führende Tech-Marken durch.',
      requirements: ['Erfahrung im Account Management', 'Kenntnisse der Retail-Branche', 'Starke Kommunikationsfähigkeiten'],
    },
    {
      title: 'Recruiting Specialist',
      category: 'HR',
      location: 'Krefeld, Deutschland',
      type: 'Vollzeit',
      description: 'Verstärke unser Recruiting-Team und finde, begeistere und onboarde Top-Talente in der DACH-Region.',
      requirements: ['HR- oder Recruiting-Erfahrung', 'Ausgezeichnete Menschenkenntnis', 'Fließend Deutsch & Englisch'],
    },
    {
      title: 'Data Analyst – SRT Platform',
      category: 'Technologie',
      location: 'Remote (DACH)',
      type: 'Vollzeit',
      description: 'Analysiere Performance-Daten aus unserem SRT-Tool und leite Optimierungsmaßnahmen ab.',
      requirements: ['SQL & Datenvisualisierung', 'Analytisches Denkvermögen', 'Business Intelligence-Erfahrung'],
    },
    {
      title: 'Marketing Coordinator',
      category: 'Marketing',
      location: 'Krefeld, Deutschland',
      type: 'Vollzeit',
      description: 'Unterstütze Kampagnenumsetzung, Content-Erstellung und Markenpartnerschaften im DACH-Raum.',
      requirements: ['Marketing-Erfahrung', 'Kreatives Denken', 'Projektmanagement-Skills'],
    },
    {
      title: 'Field Sales Trainer',
      category: 'Training',
      location: 'Mehrere Standorte',
      type: 'Vollzeit',
      description: 'Entwickle und führe Schulungsprogramme für unser wachsendes Sales-Team in der DACH-Region durch.',
      requirements: ['Erfahrung im Vertriebstraining', 'Ausgezeichnete Präsentationsfähigkeiten', 'Reisebereitschaft'],
    },
  ];

  const categories = ['all', 'Sales', 'HR', 'Technologie', 'Marketing', 'Training'];
  const locations = ['all', 'Krefeld, Deutschland', 'Wien, Österreich', 'Remote (DACH)', 'Mehrere Standorte'];

  const filteredPositions = positions.filter(
    (pos) =>
      (selectedCategory === 'all' || pos.category === selectedCategory) &&
      (selectedLocation === 'all' || pos.location === selectedLocation)
  );

  return (
    <section id="positions" className="py-20 px-6 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#111]/8 border border-[#111]/15 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#111] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Offene Stellen</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-none mb-1 uppercase">
            JETZT EINSTEIGEN
          </h2>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-none mb-5 uppercase">
            BEI SONIC.
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Finde deine nächste Karrierechance in unserem Team.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <div>
            <label htmlFor="category-filter" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Kategorie</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 font-medium text-gray-700 cursor-pointer hover:border-[#C8D400] focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 focus:border-[#C8D400] transition-all text-sm"
              style={{ borderRadius: 0 }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat === 'all' ? 'Alle Kategorien' : cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="location-filter" className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Standort</label>
            <select
              id="location-filter"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 font-medium text-gray-700 cursor-pointer hover:border-[#C8D400] focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime focus-visible:ring-offset-2 focus:border-[#C8D400] transition-all bg-white text-sm"
              style={{ borderRadius: 0 }}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc === 'all' ? 'Alle Standorte' : loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Positions List */}
        <div className="space-y-4">
          {filteredPositions.length > 0 ? (
            filteredPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-8 border-2 border-gray-100 hover:border-[#C8D400]/50 transition-all duration-300 group relative"
                style={{ borderRadius: 0 }}
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-[#C8D400] transition-all duration-500" />
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-black text-[#1a1a1a]">{position.title}</h3>
                      <span className="px-3 py-1 bg-[#C8D400] text-[#111] text-xs font-black uppercase tracking-wider" style={{ borderRadius: 0 }}>{position.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <i className="ri-map-pin-line text-[#C8D400]"></i>
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-briefcase-line text-[#C8D400]"></i>
                        <span>{position.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{position.description}</p>
                    <div className="space-y-1.5">
                      <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Voraussetzungen:</div>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <i className="ri-checkbox-circle-line text-[#C8D400] mt-0.5 flex-shrink-0"></i>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Bewerbung: ${position.title}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111] text-white font-black hover:bg-[#C8D400] hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
                      style={{ borderRadius: 0 }}
                    >
                      Jetzt bewerben
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <i className="ri-inbox-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-base text-gray-500">Keine Stellen entsprechen deinen Filtern</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#111] p-12 text-center relative overflow-hidden" style={{ borderRadius: 0 }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8D400]" />
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Initiativbewerbung</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white leading-none mb-1 uppercase">
            KEINE PASSENDE
          </h3>
          <h3 className="text-3xl md:text-4xl font-black leading-none mb-6 uppercase text-[#C8D400]">
            STELLE DABEI?
          </h3>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">
            Wir suchen immer nach außergewöhnlichen Talenten. Schick uns deinen Lebenslauf und zeig uns, wie du die Sonic Family bereichern kannst.
          </p>
          <a
            href="mailto:${CONTACT_EMAIL}`?subject=Initiativbewerbung"
            className="inline-flex items-center gap-3 px-7 py-3 bg-[#C8D400] text-[#111] font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-lime"
            style={{ borderRadius: 0 }}
          >
            Initiativbewerbung senden
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
