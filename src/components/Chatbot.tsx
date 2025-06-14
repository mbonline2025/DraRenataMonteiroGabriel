
import { useState } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou a assistente virtual da Dra. Renata Monteiro Gabriel. Como posso ajudá-lo hoje?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const botResponses = {
    'ola': 'Olá! Bem-vindo ao ReumaVida. Sou especialista em Reumatologia e atendo na Zona Sul de São Paulo.',
    'especialidades': 'Minhas especialidades incluem: Artrite Reumatoide, Lúpus Eritematoso Sistêmico, Fibromialgia, Artrose, Espondilite Anquilosante, Gota, Osteoporose e outras doenças autoimunes.',
    'consulta': 'Para agendar uma consulta, entre em contato pelo WhatsApp: +55 92 8125-0912 ou pelo LinkedIn. Atendo em consultório na Av. Adolfo Pinheiro, Santo Amaro - SP.',
    'local': 'Meu consultório fica na Av. Adolfo Pinheiro, Santo Amaro, Zona Sul de São Paulo. Atendimento com hora marcada.',
    'contato': 'Você pode me contatar pelo WhatsApp: +55 92 8125-0912 ou pelo LinkedIn. Email: contato@reumavida.com.br',
    'reumatologista': 'Quando procurar um reumatologista: dor articular persistente, cansaço excessivo, rigidez matinal, inchaço nas articulações ou suspeita de doença autoimune.',
    'diferenca': 'O ortopedista trata lesões agudas e cirúrgicas. O reumatologista trata inflamações, doenças autoimunes e dores crônicas com abordagem clínica.',
    'medicacao': 'Cuidado com a automedicação. Analgésicos e anti-inflamatórios não resolvem a causa da dor. Uma avaliação adequada pode prevenir danos.',
    'default': 'Desculpe, não entendi sua pergunta. Você pode perguntar sobre especialidades, consultas, localização ou contato. Para atendimento personalizado, entre em contato pelo WhatsApp: +55 92 8125-0912'
  };

  const findBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('bom dia') || lowerMessage.includes('boa tarde')) {
      return botResponses['ola'];
    }
    if (lowerMessage.includes('especialidade') || lowerMessage.includes('doença') || lowerMessage.includes('artrite') || lowerMessage.includes('lupus')) {
      return botResponses['especialidades'];
    }
    if (lowerMessage.includes('consulta') || lowerMessage.includes('agendar') || lowerMessage.includes('marcar')) {
      return botResponses['consulta'];
    }
    if (lowerMessage.includes('onde') || lowerMessage.includes('local') || lowerMessage.includes('endereço')) {
      return botResponses['local'];
    }
    if (lowerMessage.includes('contato') || lowerMessage.includes('telefone') || lowerMessage.includes('whatsapp')) {
      return botResponses['contato'];
    }
    if (lowerMessage.includes('quando') || lowerMessage.includes('procurar') || lowerMessage.includes('sintoma')) {
      return botResponses['reumatologista'];
    }
    if (lowerMessage.includes('diferença') || lowerMessage.includes('ortopedista')) {
      return botResponses['diferenca'];
    }
    if (lowerMessage.includes('medicação') || lowerMessage.includes('remédio')) {
      return botResponses['medicacao'];
    }
    
    return botResponses['default'];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-primary hover:bg-brand-primary/90 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-brand-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <h3 className="font-semibold">Assistente ReumaVida</h3>
                <p className="text-xs text-brand-light/80">Dra. Renata Monteiro Gabriel</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-brand-primary text-white'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.isBot && <Bot size={16} className="mt-1 flex-shrink-0" />}
                    {!message.isBot && <User size={16} className="mt-1 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-brand-primary hover:bg-brand-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
