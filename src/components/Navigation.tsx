import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1517]/95 backdrop-blur-sm border-b border-[#ca9c5e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-[#ca9c5e] tracking-wider">
            VIETNAM RESTAURANT
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#ca9c5e] transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#ca9c5e] transition-colors">
              ÜBER UNS
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-white hover:text-[#ca9c5e] transition-colors">
              SPEISEKARTE
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-[#ca9c5e] transition-colors">
              GALERIE
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#ca9c5e] transition-colors">
              KONTAKT
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b1517] border-t border-[#ca9c5e]/20">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-white hover:text-[#ca9c5e] py-2 transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-[#ca9c5e] py-2 transition-colors">
              ÜBER UNS
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-white hover:text-[#ca9c5e] py-2 transition-colors">
              SPEISEKARTE
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-white hover:text-[#ca9c5e] py-2 transition-colors">
              GALERIE
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-[#ca9c5e] py-2 transition-colors">
              KONTAKT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
