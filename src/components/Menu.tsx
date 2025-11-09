export default function Menu() {
  const menuItems = [
    {
      category: 'VORSPEISEN',
      items: [
        { name: 'Gỏi Cuốn', description: 'Frische Sommerrollen mit Garnelen & Kräutern', price: '8.50' },
        { name: 'Nem Rán', description: 'Knusprige Frühlingsrollen mit Schweinefleisch', price: '7.90' },
        { name: 'Bánh Bao Chiên', description: 'Gebackene Teigtaschen mit Gemüse', price: '7.50' },
      ]
    },
    {
      category: 'SUPPEN',
      items: [
        { name: 'Phở Bò', description: 'Klassische Rindfleisch-Nudelsuppe', price: '13.90' },
        { name: 'Bún Bò Huế', description: 'Scharfe Rindsuppe nach Huế-Art', price: '14.50' },
        { name: 'Phở Gà', description: 'Hühner-Nudelsuppe mit frischen Kräutern', price: '12.90' },
      ]
    },
    {
      category: 'HAUPTGERICHTE',
      items: [
        { name: 'Bún Chả', description: 'Gegrilltes Schweinefleisch mit Reisnudeln', price: '14.90' },
        { name: 'Cơm Tấm', description: 'Gebrochener Reis mit gegrilltem Schweinekotelett', price: '13.90' },
        { name: 'Bò Lúc Lắc', description: 'Würziges Rindfleisch mit Gemüse', price: '16.50' },
        { name: 'Cá Kho Tộ', description: 'Karamellisierter Fisch im Tontopf', price: '15.90' },
      ]
    },
    {
      category: 'DESSERTS',
      items: [
        { name: 'Chè Ba Màu', description: 'Dreifarbiges Dessert mit Kokosmilch', price: '5.50' },
        { name: 'Bánh Flan', description: 'Vietnamesischer Karamell-Pudding', price: '5.90' },
        { name: 'Chè Chuối', description: 'Warmes Bananen-Dessert', price: '5.50' },
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
          <button className="bg-[#ca9c5e] hover:bg-[#b8894e] text-white px-10 py-4 text-lg font-semibold tracking-wider transition-all transform hover:scale-105">
            VOLLSTÄNDIGE KARTE ANSEHEN
          </button>
        </div>
      </div>
    </section>
  );
}
