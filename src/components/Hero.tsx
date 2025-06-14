
import { Calendar, MapPin, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5592812509912', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/renata-monteiro-3168091a9/', '_blank');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-brand-light to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Bem-vinda(o) ao <span className="text-brand-primary">ReumaVida</span>!
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou médica <span className="text-brand-primary font-semibold">reumatologista</span>, especialista no cuidado de pessoas que convivem com doenças autoimunes, dores crônicas e inflamações articulares.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Atendo de forma particular em consultório na zona sul de São Paulo, com escuta atenta, tratamento individualizado e foco em qualidade de vida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Agende sua consulta
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Conheça mais
              </button>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-brand-secondary" />
                <span>Consultório em Santo Amaro/SP</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                >
                  <Phone size={18} />
                  WhatsApp
                </button>
                <button 
                  onClick={handleLinkedIn}
                  className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-brand-light rounded-2xl p-8 relative overflow-hidden border border-brand-secondary/20">
              <div className="absolute top-4 right-4 w-24 h-24 bg-brand-secondary/20 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-brand-primary/20 rounded-full opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="/images/logo.png" 
                    alt="ReumaVida Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-32 h-32 bg-brand-primary rounded-full flex items-center justify-center text-white text-4xl font-bold hidden">
                    RV
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dra. Renata Monteiro Gabriel</h3>
                <p className="text-brand-secondary font-semibold mb-4">Médica Reumatologista</p>
                <div className="bg-white rounded-lg p-4 shadow-md border border-brand-secondary/10">
                  <p className="text-sm text-gray-600 mb-2">Título de Especialista</p>
                  <p className="text-brand-primary font-semibold">Sociedade Brasileira de Reumatologia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
