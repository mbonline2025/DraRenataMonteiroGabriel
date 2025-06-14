
import { GraduationCap, Heart, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Quem Sou Eu</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou médica reumatologista com título de especialista pela Sociedade Brasileira de Reumatologia.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Nasci em Manaus/AM e iniciei minha trajetória médica na Universidade do Estado do Amazonas. Depois disso, mudei para São Paulo, onde fiz residência em Clínica Médica pela Secretaria Municipal de Saúde e, em seguida, especialização em Reumatologia no Hospital do Servidor Público Estadual de São Paulo (IAMSPE).
              </p>

              <p className="text-gray-600 leading-relaxed">
                Moro há 7 anos na zona sul de São Paulo, sou casada e mãe de duas meninas gêmeas de 2 anos e meio.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Como médica, busco unir ciência, empatia e escuta ativa. Quero que cada paciente se sinta acolhido, compreendido e tratado de forma integral.
              </p>

              <div className="bg-brand-light p-6 rounded-lg border border-brand-secondary/20">
                <div className="flex items-start gap-3">
                  <Heart className="text-brand-secondary mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-700 font-medium">
                    💡 Acredito que o cuidado vai além do diagnóstico: envolve confiança, clareza e construção conjunta do tratamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-brand-primary/10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Formação e Experiência</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Medicina</p>
                      <p className="text-sm text-gray-600">Universidade do Estado do Amazonas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="text-brand-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Residência em Clínica Médica</p>
                      <p className="text-sm text-gray-600">Secretaria Municipal de Saúde - SP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="text-brand-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Especialização em Reumatologia</p>
                      <p className="text-sm text-gray-600">Hospital do Servidor Público Estadual (IAMSPE)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Título de Especialista</p>
                      <p className="text-sm text-gray-600">Sociedade Brasileira de Reumatologia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">7 anos</h4>
                <p className="text-brand-light/90">morando na Zona Sul de São Paulo</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">👩‍👧‍👧 Mãe de gêmeas de 2 anos e meio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
