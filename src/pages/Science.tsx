import { Microscope, Droplet, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Science = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold">
              A Ciência
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Descubra a tecnologia revolucionária por detrás do sistema RZ-CLEAN-SEAL 
              e como transforma a manutenção de condutas de extração.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
                O Problema com Condutas Tradicionais
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Acumulação de Gordura",
                  description: "As partículas de gordura aérea aderem rapidamente às superfícies internas das condutas, criando camadas espessas que são difíceis de remover e representam riscos graves de incêndio.",
                },
                {
                  title: "Limpezas Frequentes",
                  description: "Sem proteção adequada, as condutas requerem limpezas frequentes e disruptivas que são dispendiosas e interferem com as operações normais do estabelecimento.",
                },
                {
                  title: "Riscos de Segurança",
                  description: "A acumulação de gordura não apenas aumenta o risco de incêndio, mas também reduz a eficiência do sistema de ventilação, comprometendo a qualidade do ar.",
                },
                {
                  title: "Custos Elevados",
                  description: "Entre limpezas regulares, produtos químicos, mão-de-obra especializada e potenciais paragens operacionais, os custos acumulam rapidamente.",
                },
              ].map((problem, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 p-8 rounded-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    {problem.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                A Solução <span className="text-accent">RZ-CLEAN-SEAL</span>
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Uma tecnologia de selagem inovadora que cria uma barreira protetora, 
                impedindo a aderência de gordura e transformando a manutenção.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  icon: Microscope,
                  title: "Tecnologia de Revestimento Avançada",
                  description: "O nosso revestimento patenteado é aplicado nas superfícies internas das condutas, criando uma camada ultra-fina mas altamente eficaz. Esta barreira molecular utiliza propriedades anti-aderentes avançadas que impedem as partículas de gordura de se fixarem às paredes das condutas.",
                  points: [
                    "Resistente a altas temperaturas",
                    "Durabilidade comprovada por anos",
                    "Completamente seguro para contacto alimentar",
                    "Não altera o fluxo de ar do sistema",
                  ],
                },
                {
                  icon: Droplet,
                  title: "Propriedades Hidrofóbicas e Oleofóbicas",
                  description: "O revestimento RZ-CLEAN-SEAL possui propriedades tanto hidrofóbicas (repele água) como oleofóbicas (repele óleos e gorduras). Esta dupla ação garante que os resíduos de cozinha simplesmente não conseguem aderir às superfícies tratadas.",
                  points: [
                    "Reduz aderência de gordura em até 95%",
                    "Facilita limpezas futuras significativamente",
                    "Mantém eficácia mesmo com uso intensivo",
                    "Testado em ambientes comerciais exigentes",
                  ],
                },
                {
                  icon: Shield,
                  title: "Proteção de Longa Duração",
                  description: "Ao contrário de limpezas tradicionais que oferecem apenas solução temporária, o sistema RZ-CLEAN-SEAL proporciona proteção contínua. A selagem mantém-se eficaz durante anos, reduzindo drasticamente a necessidade de intervenções frequentes.",
                  points: [
                    "Garantia de proteção até 3 anos",
                    "Resistente a produtos químicos de limpeza",
                    "Não descama nem deteriora",
                    "Mantém conformidade com regulamentações",
                  ],
                },
                {
                  icon: TrendingUp,
                  title: "Eficiência Operacional Melhorada",
                  description: "Com a acumulação de gordura minimizada, o sistema de ventilação opera com máxima eficiência. Isto não apenas melhora a extração de fumos e odores, mas também reduz o consumo energético do sistema.",
                  points: [
                    "Melhor qualidade do ar na cozinha",
                    "Redução no consumo de energia",
                    "Menor desgaste do equipamento",
                    "Operação mais silenciosa do sistema",
                  ],
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                  <div className="lg:col-span-1">
                    <div className="flex flex-col items-start space-y-4">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                        <solution.icon size={32} className="text-accent-foreground" />
                      </div>
                      <h3 className="font-display text-2xl font-bold">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-3">
                      {solution.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
                          <span className="font-body text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Como Funciona na Prática
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

              <div className="space-y-12">
                {[
                  {
                    step: "Fase 1",
                    title: "Inspeção e Diagnóstico",
                    description: "Técnicos especializados inspecionam minuciosamente todo o sistema de condutas, utilizando equipamento de vídeo e medição. Identificamos áreas problemáticas, avaliamos o estado atual e definimos o plano de ação ideal.",
                    duration: "1-2 horas",
                  },
                  {
                    step: "Fase 2",
                    title: "Limpeza Intensiva",
                    description: "Procedemos à limpeza profissional completa, removendo toda a acumulação de gordura, fuligem e detritos. Utilizamos técnicas e produtos especializados que preparam as superfícies para receberem o revestimento.",
                    duration: "4-8 horas",
                  },
                  {
                    step: "Fase 3",
                    title: "Aplicação do Revestimento",
                    description: "Aplicamos o revestimento RZ-CLEAN-SEAL de forma uniforme em todas as superfícies internas das condutas. Este processo requer precisão técnica para garantir cobertura total e aderência perfeita.",
                    duration: "3-6 horas",
                  },
                  {
                    step: "Fase 4",
                    title: "Cura e Ativação",
                    description: "O revestimento passa por um processo de cura controlada que ativa as suas propriedades protetoras. Após este período, o sistema está pronto para uso normal com proteção total.",
                    duration: "12-24 horas",
                  },
                  {
                    step: "Fase 5",
                    title: "Verificação e Certificação",
                    description: "Realizamos testes finais para confirmar a eficácia do revestimento e a operação perfeita do sistema. Fornecemos certificação completa e documentação de conformidade.",
                    duration: "1 hora",
                  },
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-8 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-accent rounded-full items-center justify-center font-display font-bold text-accent-foreground relative z-10">
                      {index + 1}
                    </div>
                    <div className="flex-grow bg-secondary/50 p-8 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-accent font-display text-sm font-semibold mb-1">
                            {phase.step}
                          </div>
                          <h3 className="font-display text-2xl font-bold">
                            {phase.title}
                          </h3>
                        </div>
                        <div className="text-muted-foreground font-body text-sm">
                          {phase.duration}
                        </div>
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Backing */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Comprovado Cientificamente
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O sistema RZ-CLEAN-SEAL foi desenvolvido através de anos de investigação 
              e testado exaustivamente em ambientes comerciais reais com clientes de alto perfil.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { value: "95%", label: "Redução de Aderência" },
                { value: "50%", label: "Poupança em Custos" },
                { value: "3 Anos", label: "Proteção Garantida" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="font-display text-5xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="font-body text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Experimente a Diferença
            </h2>
            <p className="font-body text-xl text-primary-foreground/90">
              Veja como a tecnologia RZ-CLEAN-SEAL pode transformar 
              a manutenção das suas condutas e proteger o seu negócio.
            </p>
            <Link to="/contactos">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-lg px-10"
              >
                Solicitar Demonstração
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
