import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#0b1517]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#ca9c5e] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            KONTAKT & ÖFFNUNGSZEITEN
          </h2>
          <p className="text-[#ca9c5e] text-lg">Besuchen Sie uns oder reservieren Sie einen Tisch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 bg-[#1a2527] border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
              <MapPin className="w-8 h-8 text-[#ca9c5e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ADRESSE</h3>
                <p className="text-white/70 leading-relaxed">
                  Kupferstraße 17<br />
                  85049 Ingolstadt<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-[#1a2527] border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
              <Phone className="w-8 h-8 text-[#ca9c5e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">TELEFON</h3>
                <p className="text-white/70">0841 99474559</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-[#1a2527] border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
              <Mail className="w-8 h-8 text-[#ca9c5e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">EMAIL</h3>
                <p className="text-white/70">info@gocviet17.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-[#1a2527] border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
              <Clock className="w-8 h-8 text-[#ca9c5e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ÖFFNUNGSZEITEN</h3>
                <div className="text-white/70 space-y-1">
                  <p>Montag - Freitag: 11:00 - 14:30, 17:00 - 21:30</p>
                  <p>Samstag: 17:00 - 21:30</p>
                  <p>Sonntag: 12:00 - 15:00 & 17:00 - 21:30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a2527] p-8 border border-[#ca9c5e]/20">
            <h3 className="text-2xl font-bold text-white mb-6">TISCH RESERVIEREN</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-white/70 mb-2">Name *</label>
                <input
                  type="text"
                  className="w-full bg-[#0b1517] border border-[#ca9c5e]/30 focus:border-[#ca9c5e] text-white px-4 py-3 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full bg-[#0b1517] border border-[#ca9c5e]/30 focus:border-[#ca9c5e] text-white px-4 py-3 outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-2">Datum *</label>
                  <input
                    type="date"
                    className="w-full bg-[#0b1517] border border-[#ca9c5e]/30 focus:border-[#ca9c5e] text-white px-4 py-3 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-2">Zeit *</label>
                  <input
                    type="time"
                    className="w-full bg-[#0b1517] border border-[#ca9c5e]/30 focus:border-[#ca9c5e] text-white px-4 py-3 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-2">Anzahl der Personen *</label>
                <select
                  className="w-full bg-[#0b1517] border border-[#ca9c5e]/30 focus:border-[#ca9c5e] text-white px-4 py-3 outline-none transition-colors"
                  required
                >
                  <option>1 Person</option>
                  <option>2 Personen</option>
                  <option>3 Personen</option>
                  <option>4 Personen</option>
                  <option>5+ Personen</option>
                </select>
              </div>

              <div>
                <label className="block text-white/70 mb-2">Anmerkungen</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0b1517] border border-[#ca9c5e]/30 focus:border-[#ca9c5e] text-white px-4 py-3 outline-none transition-colors resize-none"
                />
              </div>

              <a
                type="button" href="https://www.foodbooking.com/ordering/restaurant/menu/reservation?restaurant_uid=6e9f4105-5397-4941-a6e1-8efb64dd7df0&reservation=true&client_is_mobile=true" target="_blank"
                className="w-full bg-[#ca9c5e] hover:bg-[#b8894e] text-white py-4 text-lg font-semibold tracking-wider transition-all transform hover:scale-105"
              >
                RESERVIERUNG SENDEN
              </a>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-[#ca9c5e]/20 pt-8">
          <p className="text-white/60">
            © 2025 Gocviet17.Com. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </section>
  );
}
