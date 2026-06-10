import { CONTACT_EMAIL } from '@/lib/contact';

export default function OfficeVisit() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-sonic-lime via-sonic-lime to-yellow-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6">
              <div className="h-1 w-32 bg-gray-900 mb-4"></div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">
              KOMM AUF EINEN<br />KAFFEE VORBEI!
            </h2>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Unser Campus in Krefeld ist mehr als nur ein Büro – es ist der Ort, 
              wo Ideen entstehen, Teams zusammenwachsen und Marken zum Leben erweckt werden.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-sonic-lime"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-base text-gray-800">
                    Campus Fichtenhain 46<br />47807 Krefeld, Germany
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-coffee-line text-2xl text-sonic-lime"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">What to Expect</h3>
                  <p className="text-base text-gray-800">
                    Tour our creative studio, meet the team, and experience the Sonic culture firsthand
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-calendar-line text-2xl text-sonic-lime"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Schedule a Visit</h3>
                  <p className="text-base text-gray-800">
                    Whether you're a potential client, partner, or future team member – you're welcome!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all hover:scale-105 text-center whitespace-nowrap"
              >
                Schedule Visit
              </a>
              <a 
                href="tel:+4921514794440" 
                className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all text-center whitespace-nowrap"
              >
                Call Us
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20creative%20office%20space%20with%20team%20members%20collaborating%20in%20bright%20open%20workspace%20with%20coffee%20area%20and%20welcoming%20atmosphere%20professional%20business%20environment&width=800&height=1000&seq=office-visit-main&orientation=portrait"
                alt="Sonic Office"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-900 rounded-2xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-white rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
