export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          filter: 'brightness(0.4)'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="w-24 h-1 bg-[#ca9c5e] mx-auto mb-8" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
          AUTHENTISCHE
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-[#ca9c5e] mb-8 tracking-wide">
          VIETNAMESISCHE KÜCHE
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
          Erleben Sie die Aromen Vietnams in Deutschland
        </p>

        <button
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#ca9c5e] hover:bg-[#b8894e] text-white px-10 py-4 text-lg font-semibold tracking-wider transition-all transform hover:scale-105"
        >
          UNSERE SPEISEKARTE
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
