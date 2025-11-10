export default function Gallery() {
  const images = [
    {
      url: 'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250313281452.jpg',
      title: 'Phở'
    },
    {
      url: 'https://mia.vn/media/uploads/blog-du-lich/pho-cuon-ha-noi-o-sai-gon-06-1722820585.jpg',
      title: 'Frühlingsrollen'
    },
    {
      url: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_3_4_638135494683018162_cach-lam-bun-cha-bang-noi-chien-khong-dau-1.jpg',
      title: 'Bún Chả'
    },
    {
      url: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/banh_mi_man_3051eb6d27.jpg',
      title: 'Bánh Mì'
    },
    {
      url: 'https://www.gefu.com/media/9c/d2/28/1744285447/20230126_183231.jpg?ts=1746623102',
      title: 'Sommerrollen'
    },
    {
      url: 'https://emdoi.vn/wp-content/uploads/2025/04/com-tam-ngon-quan-1-0.webp',
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
