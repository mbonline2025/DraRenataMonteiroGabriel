
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+55 92 8125-0912</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Santo Amaro - Zona Sul SP</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Atendimento com hora marcada</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="ReumaVida Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg hidden">
                RV
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ReumaVida</h1>
                <p className="text-sm text-brand-secondary">Dra. Renata Monteiro Gabriel - Reumatologista CRM-SP</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-brand-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-primary transition-colors">
                Quem Sou
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-primary transition-colors">
                Áreas de Atuação
              </button>
              <button onClick={() => scrollToSection('info')} className="text-gray-700 hover:text-brand-primary transition-colors">
                Informações
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-primary transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-brand-primary">
                  Início
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-brand-primary">
                  Quem Sou
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-brand-primary">
                  Áreas de Atuação
                </button>
                <button onClick={() => scrollToSection('info')} className="text-left py-2 text-gray-700 hover:text-brand-primary">
                  Informações
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-brand-primary">
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
