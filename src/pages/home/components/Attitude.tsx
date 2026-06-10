import { CONTACT_EMAIL } from '@/lib/contact';

export default function Attitude() {
  const jobs = [
    { title: 'Canon Academy Trainer:in', location: 'bundesweit' },
    { title: 'Initiativbewerbung', location: 'Krefeld' },
    { title: 'Projektleiter TCL', location: 'Krefeld' },
    { title: 'React Frontend-Entwickler:in', location: 'Krefeld' },
    { title: 'Sales Activator für Garmin', location: 'Lübeck' },
    { title: 'Sales Activator für Gorenje', location: 'München' },
    { title: 'Sales Activator für TCL', location: 'Bundesweit' },
    {
      title: 'Sales Activator SEB/ Rowenta/ Tefal / Krups und WMF',
      location: 'Dresden / Neuss / Essen / Köln / Osnabrück',
    },
    { title: 'Verkäufer:in für Sky', location: 'Essen / Potsdam' },
  ];

  return (
    <section id="karriere" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative mb-20 py-32 px-6 rounded-lg overflow-hidden"
          style={{
            backgroundImage:
              'url(https://www.sonic-group.de/wp-content/uploads/2023/01/11.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">WELCOME</h2>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="h-1 w-32 bg-[#C8FF00] mx-auto mb-4"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-8">
            ATTITUDE IS EVERYTHING
          </h2>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Zur Sonic passen energiegeladene Persönlichkeiten, die gerne die Ärmel hochkrempeln und
            mit anpacken – denn wir lieben und leben Marken. Ob am Point of Sale, auf Messen oder
            Events: Wir bieten namhaften Kunden die Bühne für einen beeindruckenden Auftritt. Als
            Full-Service-Agentur mit Sitz am Campus Krefeld kümmern wir uns um die Konzeption
            Kreation, die Koordination der Sales-Promotion-Teams und vieles mehr. Zeig bei
            herausfordernden Projekten, was Du kannst, und verstärke unser Team.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Wir als Team heißen dich in unserer SONIC Welt willkommen. Erfahre mehr über uns,
            unsere Art zu arbeiten und unsere Art miteinander umzugehen. Bei Fragen sind wir gerne
            für dich da.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Schreib uns einfach unter{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-900 font-semibold underline">
              info@sonic-group.de
            </a>{' '}
            oder ruf uns an <strong>+49 2151 479 444 0</strong>. Du kannst uns natürlich auch eine
            WhatsApp Nachricht senden – Klick dazu einfach auf den Button rechts unten auf der
            Seite.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Wir suchen Leute, die zusammen mit uns anpacken wollen. Dabei ist uns deine Einstellung
            zum Job wichtiger als die Aufstellung deiner beruflichen Stationen. Was du erreichen
            willst ist entscheidender, als was in deinem Zeugnis steht – Und die Lücke in deinem
            Lebenslauf egal, wenn du der perfekte Baustein für unser Team bist.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Wenn du also Lust hast, bei uns wirklich etwas zu bewegen und du für deine Kunden und
            Projekte brennst – willkommen bei der Sonic!
          </p>
        </div>

        <div className="text-center mb-16">
          <button className="bg-[#C8FF00] text-gray-900 px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#b3e600] transition-colors whitespace-nowrap">
            ERFAHRE HIER MEHR ÜBER DIE SONIC ALS ARBEITGEBER
          </button>
        </div>

        <div className="mb-12">
          <div className="inline-block mb-6">
            <div className="h-1 w-32 bg-[#C8FF00] mb-4"></div>
          </div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">
            IST ETWAS FÜR DICH DABEI?
          </h3>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#C8FF00] transition-colors mb-2 sm:mb-0">
                {job.title}
              </h4>
              <span className="text-sm text-gray-600">{job.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
