export default function Menu() {
  const menuItems = [
    {
      category: 'VORSPEISEN',
      items: [
        { name: 'Gỏi Cuốn', description: 'Sommerrollen mit Reispapier, frischen viet. Kräutern, Koriander, Reisnudeln dazu Hoisin-Soße', price: '5,20' },
        { name: 'Gà rang muối', description: 'Salzige gebratene chickenwings mit Limettenblätter Zitronengras, Zwiebeln, Kloblauch', price: '6,20' },
        { name: 'Edemame', description: 'gedämpfte Sojabohnen am Zweig im Bambustopf', price: '4,90' },
        { name: 'Nem chay', description: '6 Mini vegetarische Frühlingsrollen mit Salat und süß scharfe Soße', price: '4,90' },
        { name: 'Chả giò', description: '2 Knusprige Frühlingsrollen mit Hühnerfleisch, Morcheln, Glasnudeln & Karotten', price: '5,90' },
        { name: 'Há cảo', description: '4 gedämpfte Teigtaschen aus Reismehlteig gefüllt mit Garnelen dazu Salt und Sojasoße', price: '5,20' },
      ]
    },
    {
      category: 'SUPPEN',
      items: [
        { name: 'Súp hoành thánh', description: 'Suppe mit Wantan gefüllt mit Garnelen und Hähnchen dazu Pak Choi', price: '5,90' },
        { name: 'Canh chua tôm', description: 'Garnelensuppe mit Tomaten, Sojasprossen, Basilikum', price: '6,20' },
        { name: 'Canh chua cá', description: 'Suppe mit Lachs, Tomaten, Sojasprossen, Basilikum', price: '5,90' },
      ]
    },
    {
      category: 'HAUPTGERICHTE',
      items: [
        { name: 'Phở Hà Nội', description: 'Rindfleischsuppe wird einen tag lang unter Tygabe von Starnanis, Kardamon mit gerillten zwiebeln eingekocht. Sie wird mit Reisbandnudeln und Rindfleisch serviert', price: '14,90' },
        { name: 'Chả cá Lã Vọng', description: 'Gegrillt Fisch nach Lã Vọng -Art : Fisch, Kurkuma, Dill, Frühlingszwiebeln, Galgant, Garnelenpaste, Fischsoße, Erdnuss, Reisnudeln)', price: '21,90' },
        { name: 'Cá om Chuối Đậu', description: 'Geschmorte Fisch mit grünen Bananen und Tofu besteht aus folgenden Zutaten: Fisch, Grüne Bananen, Tofu, Frühlingszwiebeln, Perillablätter, Pfefferblätter, Galgant, Schalotten, Knoblauch Kurkuma Shrimp-Paste,', price: '21,90' },
        { name: 'Bun bo Hue', description: 'Reisnudeln Suppe mit Rind. , Schweinerfleisch, Garnelen ,Salat und frische Kräuter', price: '15,90' },
      ]
    },
    {
      category: 'SUSHI MENÜ',
      items: [
        { name: 'Für 3 Personen', description: '6 Crunchy Ebi Rolls, 8 Tuna Maki, 8 Lachs Maki, 8 Avocado Maki, 8 inside out Sake Philadelphia Rolls, 8 Samolskill inside out, 1 Lachs Sashimi, 7 Nigiri', price: '60,90' },
        { name: 'Für 2 Personen', description: '4 Lachs Maki, 4 Tekka Maki, 4 Avocado Maki, 4 Gurken Maki, 5 Nigiri, 8 Tuna inside out, 8 Sake inside out', price: '36,90' },
        { name: 'Otawa Menü', description: '6 Crunchy Ebi, 8 Avocado Maki, 2 Sake Nigiri, 2 Avocado Nigiri', price: '19,90' },
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 px-4 bg-[#0b1517]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#ca9c5e] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            UNSERE SPEISEKARTE
          </h2>
          <p className="text-[#ca9c5e] text-lg">Entdecken Sie unsere kulinarischen Köstlichkeiten</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-[#ca9c5e] border-b-2 border-[#ca9c5e]/30 pb-3 tracking-wider">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-white group-hover:text-[#ca9c5e] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[#ca9c5e] font-bold text-lg ml-4">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 mb-8 text-lg">
            Alle Gerichte können auch vegetarisch oder vegan zubereitet werden
          </p>
          <a type="button" href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=6e9f4105-5397-4941-a6e1-8efb64dd7df0&client_is_mobile=true" target="_blank" className="bg-[#ca9c5e] hover:bg-[#b8894e] text-white px-10 py-4 text-lg font-semibold tracking-wider transition-all transform hover:scale-105">
            VOLLSTÄNDIGE KARTE ANSEHEN
          </a>
        </div>
      </div>
    </section>
  );
}
