import { useState, useEffect } from 'react';

export default function BrandIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/2024-qlkw343jjajbp7yuruxndjxesrz4qldhpslvbjoqpy.jpg',
    'https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/2023-qlkw335pcgi1dm07xcj0t25y7e3riw9rdnydu9q4x0.jpg',
    'https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/2022-qlkw335pcgi1dm07xcj0t25y7e3riw9rdnydu9q4x0.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="h-1 w-32 bg-[#C8FF00] mx-auto mb-4"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-sonic-dark mb-4">
            MARKEN IM HERZEN.
            <br />
            ERFOLG IM FOKUS.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-700">
              Wir sind eine unabhängige Marketing- und Sales-Agentur mit Schwerpunkten rund um die
              Konzeption, Kreation und Koordination von Kundenprojekten – ob am Point of Sale, im
              Studio, auf Messen oder Events in den Bereichen B2B, B2B2C und D2C. Seit 2007 leben
              wir Marken und machen sie erfolgreich – unabhängig von Größe, Branche und Zielgruppe.
              Dabei arbeiten wir stets geprägt von den Werten Mensch, Motivation, Daten und
              Werkzeug. Wir glauben daran, dass der Mensch den Unterschied macht, und leben eine
              familiäre, persönliche Firmenkultur.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Unsere Strategie: Ärmel hoch und anpacken! Echtes Handwerk – von Anfang bis Ende mit
              100 % Leidenschaft und vollem Einsatz für die Ziele unserer Kunden. Mit Partnern wie
              Philips, Rowenta, Krups, Nexaro, Vorwerk, Canon, Garmin oder L'Oréal. Mit der
              Erfahrung aus über 500 Projekten, 650.000 Manntagen und mehr als 100.000 Umsetzungen
              am POS. Mit einem Team aus Experten aller Bereiche – und mit dem Erfolg deiner Marke
              jederzeit im Fokus.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    index === currentSlide ? 'bg-[#C8FF00] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
