export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-4">
            <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-sonic-dark mb-4">
            Let's Grow Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to enhance your retail presence? Get in touch with our POS experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 flex items-center justify-center bg-[#C8D400]/10 rounded-xl mb-6">
              <i className="ri-phone-line text-3xl text-[#C8D400]"></i>
            </div>
            <h3 className="text-2xl font-black text-sonic-dark mb-3">
              Call Us
            </h3>
            <p className="text-gray-600 mb-4">
              Speak with our retail team
            </p>
            <a href="tel:+491234567890" className="text-lg font-bold text-[#C8D400] hover:underline">
              +49 123 456 7890
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 flex items-center justify-center bg-[#C8D400]/10 rounded-xl mb-6">
              <i className="ri-mail-line text-3xl text-[#C8D400]"></i>
            </div>
            <h3 className="text-2xl font-black text-sonic-dark mb-3">
              Email Us
            </h3>
            <p className="text-gray-600 mb-4">
              Get a response within 24 hours
            </p>
            <a href="mailto:retail@sonic.com" className="text-lg font-bold text-[#C8D400] hover:underline">
              retail@sonic.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 flex items-center justify-center bg-[#C8D400]/10 rounded-xl mb-6">
              <i className="ri-map-pin-line text-3xl text-[#C8D400]"></i>
            </div>
            <h3 className="text-2xl font-black text-sonic-dark mb-3">
              Visit Us
            </h3>
            <p className="text-gray-600 mb-4">
              Meet our retail team
            </p>
            <p className="text-lg font-bold text-sonic-dark">
              Berlin, Germany
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
