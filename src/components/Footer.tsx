
import { Heart, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                DR
              </div>
              <div>
                <h3 className="text-lg font-bold">Dra. Renata Monteiro Gabriel</h3>
                <p className="text-sm text-brand-light/80">Reumatologista</p>
              </div>
            </div>
            <p className="text-brand-light/90 text-sm leading-relaxed">
              Especialista em doenças autoimunes, dores crônicas e inflamações articulares. 
              Atendimento humanizado na Zona Sul de São Paulo.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-brand-secondary" />
                <span>(92) 812-5091</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-brand-secondary" />
                <span>contato@drarenatamonteiro.com.br</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                <span>Av. Adolfo Pinheiro<br />Santo Amaro - SP</span>
              </div>
            </div>
          </div>

          {/* Especialidades */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Principais Especialidades</h4>
            <ul className="text-sm space-y-1 text-brand-light/90">
              <li>• Artrite Reumatoide</li>
              <li>• Lúpus Eritematoso Sistêmico</li>
              <li>• Fibromialgia</li>
              <li>• Artrose</li>
              <li>• Osteoporose</li>
              <li>• Gota e Hiperuricemia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-brand-light/70">
              © 2024 Dra. Renata Monteiro Gabriel. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-brand-light/70">
              <span>Feito com</span>
              <Heart size={16} className="text-red-400" />
              <span>para cuidar da sua saúde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
