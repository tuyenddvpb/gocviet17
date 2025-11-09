export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Phở'
    },
    {
      url: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Frühlingsrollen'
    },
    {
      url: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bún Chả'
    },
    {
      url: 'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bánh Mì'
    },
    {
      url: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sommerrollen'
    },
    {
      url: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cơm Tấm'
    }
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-[#1a2527] to-[#0b1517]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#ca9c5e] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            GALERIE
          </h2>
          <p className="text-[#ca9c5e] text-lg">Ein Blick auf unsere Spezialitäten</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1517] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                <div className="w-12 h-1 bg-[#ca9c5e] mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
