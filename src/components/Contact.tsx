
import { MapPin, Clock, Phone, Mail, Instagram, Linkedin, Calendar } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/55928125091', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-brand-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Consultório e Contato</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Entre em contato para agendar sua consulta
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-brand-primary/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">Av. Adolfo Pinheiro</p>
                    <p className="text-gray-600">Santo Amaro - Zona Sul de São Paulo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-brand-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Atendimento com hora marcada</p>
                    <p className="text-sm text-gray-500">Segunda à Sexta</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-brand-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 92812-5091</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-brand-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@drarenatamonteiro.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-brand-primary/10">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                  <Instagram size={24} />
                  <span className="font-medium">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-brand-primary text-white rounded-lg hover:shadow-lg transition-shadow">
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de agendamento */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-brand-primary/10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Agende sua Consulta</h3>
            
            <div className="space-y-6">
              <div className="bg-brand-light p-6 rounded-lg text-center border border-brand-secondary/20">
                <Calendar className="text-brand-secondary mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h4>
                <p className="text-gray-600 mb-4">
                  A forma mais rápida de agendar sua consulta
                </p>
                <button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  Agendar via WhatsApp
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-800 mb-4">Ou preencha o formulário:</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Descreva brevemente o motivo da consulta"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
