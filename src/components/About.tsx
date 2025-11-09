import { Utensils, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-[#0b1517] to-[#1a2527]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#ca9c5e] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            ÜBER UNS
          </h2>
          <p className="text-[#ca9c5e] text-lg">Unsere Geschichte und Leidenschaft</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Vietnamese Restaurant"
              className="w-full h-[500px] object-cover shadow-2xl"
            />
          </div>

          <div className="text-white space-y-6">
            <h3 className="text-3xl font-bold text-[#ca9c5e]">
              Willkommen in unserem Restaurant
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Wir bringen Ihnen die authentischen Geschmäcker Vietnams direkt nach Deutschland.
              Unsere Küche vereint traditionelle Rezepte mit frischen, lokalen Zutaten.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              Jedes Gericht wird mit Liebe und Sorgfalt zubereitet, um Ihnen ein unvergessliches
              kulinarisches Erlebnis zu bieten. Von der klassischen Pho bis zu modernen
              vietnamesischen Fusionsgerichten – bei uns finden Sie die ganze Vielfalt der
              vietnamesischen Küche.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              Besuchen Sie uns und lassen Sie sich von den Aromen Südostasiens verzaubern.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-[#0b1517]/50 border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
            <div className="inline-block p-4 bg-[#ca9c5e]/10 rounded-full mb-6">
              <Utensils className="w-12 h-12 text-[#ca9c5e]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Authentische Rezepte</h3>
            <p className="text-white/70">
              Traditionelle vietnamesische Gerichte nach Familienrezepten
            </p>
          </div>

          <div className="text-center p-8 bg-[#0b1517]/50 border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
            <div className="inline-block p-4 bg-[#ca9c5e]/10 rounded-full mb-6">
              <Heart className="w-12 h-12 text-[#ca9c5e]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Frische Zutaten</h3>
            <p className="text-white/70">
              Täglich frische und qualitativ hochwertige Produkte
            </p>
          </div>

          <div className="text-center p-8 bg-[#0b1517]/50 border border-[#ca9c5e]/20 hover:border-[#ca9c5e] transition-all">
            <div className="inline-block p-4 bg-[#ca9c5e]/10 rounded-full mb-6">
              <Award className="w-12 h-12 text-[#ca9c5e]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Exzellenter Service</h3>
            <p className="text-white/70">
              Herzliche Gastfreundschaft und aufmerksamer Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
