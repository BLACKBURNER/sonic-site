import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Hero' },
  { id: 'trust', label: 'Trust' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'video', label: 'Video' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'services', label: 'Services' },
  { id: 'srt-teaser', label: 'SRT' },
  { id: 'client-proof', label: 'Trust' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-30">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end cursor-pointer"
            aria-label={`Navigate to ${section.label}`}
          >
            <span
              className="absolute right-6 whitespace-nowrap bg-white text-black px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border-2 border-[#C8D400]"
              style={{ borderRadius: 0 }}
            >
              {section.label}
            </span>
            <div
              className={`w-2 h-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-[#C8D400] w-3 h-3'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              style={{ borderRadius: 0 }}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}