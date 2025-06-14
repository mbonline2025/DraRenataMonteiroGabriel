
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  const whatsappNumber = "5592081250912";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta com a Dra. Renata Monteiro Gabriel.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:+55${whatsappNumber.slice(2)}`, '_self');
  };

  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-40">
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        title="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp
        </span>
      </button>

      {/* Telefone */}
      <button
        onClick={handlePhoneClick}
        className="bg-brand-primary hover:bg-brand-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        title="Ligar agora"
      >
        <Phone size={24} />
        <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ligar
        </span>
      </button>
    </div>
  );
};

export default FloatingContact;
