
import { Activity, Bone, Heart, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Activity className="text-brand-primary" size={24} />,
      title: "Artrite Reumatoide",
      description: "Diagnóstico e tratamento da inflamação crônica das articulações"
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Lúpus Eritematoso Sistêmico",
      description: "Acompanhamento especializado de doença autoimune sistêmica"
    },
    {
      icon: <Activity className="text-purple-600" size={24} />,
      title: "Fibromialgia",
      description: "Tratamento da síndrome de dor muscular generalizada"
    },
    {
      icon: <Bone className="text-brand-secondary" size={24} />,
      title: "Artrose",
      description: "Manejo do desgaste articular e preservação da mobilidade"
    },
    {
      icon: <Activity className="text-green-600" size={24} />,
      title: "Espondilite Anquilosante",
      description: "Tratamento da inflamação da coluna vertebral"
    },
    {
      icon: <ShieldCheck className="text-brand-primary" size={24} />,
      title: "Gota e Hiperuricemia",
      description: "Controle do ácido úrico e prevenção de crises"
    },
    {
      icon: <Bone className="text-gray-600" size={24} />,
      title: "Osteoporose",
      description: "Prevenção e tratamento da perda de massa óssea"
    },
    {
      icon: <ShieldCheck className="text-brand-secondary" size={24} />,
      title: "Doenças Autoimunes",
      description: "Diagnóstico e acompanhamento de diversas condições autoimunes"
    },
    {
      icon: <Heart className="text-pink-600" size={24} />,
      title: "Reumatologia da Mulher",
      description: "Cuidado especializado durante gestação e menopausa"
    }
  ];

  return (
    <section id="services" className="py-16 bg-brand-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Áreas de Atuação</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofereço atendimento especializado com escuta atenta, exames atualizados e condutas baseadas em evidências científicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-brand-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-brand-light rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-brand-primary text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Abordagem Personalizada</h3>
              <p className="text-brand-light/90 text-lg leading-relaxed">
                Cada caso é avaliado com escuta atenta, exames atualizados e condutas baseadas em evidências científicas. 
                O objetivo é sempre proporcionar alívio dos sintomas e melhoria da qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
