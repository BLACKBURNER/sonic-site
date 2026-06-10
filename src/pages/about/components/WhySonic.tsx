import { useEffect, useRef, useState } from 'react';
import LeistungenKontakt from '@/components/feature/LeistungenKontakt';

export default function WhySonic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <LeistungenKontakt
        headline="Lass uns besprechen, wie Sonic deine"
        headlineAccent="Marke unterstützen kann."
        subline="Ob POS-Aktivierung, Eventproduktion, Live Video Promotion oder datenbasiertes Reporting – wir finden den richtigen Ansatz für deine Ziele."
        ctaLabel="Beratungsgespräch buchen"
        ctaMailSubject="Anfrage: Sonic kennenlernen"
        checkItems={[
          { text: 'Unabhängige Agentur — kein Konzerndenken' },
          { text: 'Eigene Software & Infrastruktur' },
          { text: 'Über 500 erfolgreich abgeschlossene Projekte' },
          { text: 'B2B, B2B2C und D2C Expertise' },
        ]}
      />
    </div>
  );
}
