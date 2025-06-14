
import { AlertCircle, HelpCircle, Pill, Stethoscope } from 'lucide-react';

const UsefulInfo = () => {
  return (
    <section id="info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Informações Úteis</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Quando procurar */}
          <div className="bg-brand-light p-8 rounded-lg border border-brand-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-brand-primary" size={28} />
              <h3 className="text-xl font-bold text-gray-800">Quando procurar um reumatologista?</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Dor articular persistente</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Cansaço excessivo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Rigidez matinal</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Inchaço nas articulações</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Suspeita de doença autoimune</span>
              </li>
            </ul>
          </div>

          {/* Diferença entre especialistas */}
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="text-green-600" size={28} />
              <h3 className="text-xl font-bold text-gray-800">Ortopedista vs Reumatologista</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Ortopedista</h4>
                <p className="text-sm text-gray-600">Trata lesões agudas e cirúrgicas do sistema musculoesquelético</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Reumatologista</h4>
                <p className="text-sm text-gray-600">Trata inflamações, doenças autoimunes e dores crônicas com abordagem clínica</p>
              </div>
            </div>
          </div>

          {/* Cuidado com automedicação */}
          <div className="bg-red-50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Pill className="text-red-600" size={28} />
              <h3 className="text-xl font-bold text-gray-800">Cuidado com a Automedicação</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Analgésicos e anti-inflamatórios não resolvem a causa da dor.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <div className="flex items-start gap-2">
                  <Stethoscope className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-gray-600">
                    Uma avaliação adequada pode prevenir danos articulares e sistêmicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Diagnóstico Precoce Salva Vidas</h3>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              O tratamento adequado e precoce das doenças reumatológicas pode prevenir danos irreversíveis 
              e melhorar significativamente a qualidade de vida.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5511928125091', '_blank')}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Agende sua Avaliação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfo;
