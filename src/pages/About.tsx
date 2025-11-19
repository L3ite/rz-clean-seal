import { Target, Eye, Heart, Users } from "lucide-react";
import inspectionIcon from "@/assets/inspection-icon.jpg";
import cleaningIcon from "@/assets/cleaning-icon.jpg";
import sealingIcon from "@/assets/sealing-icon.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold">
              Sobre Nós
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Nascido de anos de investigação e testes com clientes de alto perfil, 
              o RZ-CLEAN-SEAL revoluciona a manutenção de condutas de extração.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6 animate-slide-right">
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                  A Nossa História
                </h2>
                <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O RZ-CLEAN-SEAL foi desenvolvido após anos de investigação dedicada e 
                    colaboração estreita com alguns dos estabelecimentos mais exigentes 
                    do setor hoteleiro e de restauração.
                  </p>
                  <p>
                    Reconhecemos que a manutenção tradicional de condutas de extração era 
                    dispendiosa, disruptiva e frequentemente inadequada. As limpezas regulares 
                    eram necessárias, mas temporárias — a gordura acumulava-se rapidamente, 
                    criando riscos de segurança e aumentando custos operacionais.
                  </p>
                  <p>
                    Foi assim que desenvolvemos uma solução inovadora: um sistema de selagem 
                    que não apenas limpa, mas protege as condutas contra acumulação futura. 
                    Esta tecnologia revolucionária reduz drasticamente a frequência de limpezas 
                    necessárias, poupando até 50% em custos de manutenção.
                  </p>
                </div>
              </div>

              <div className="relative animate-slide-left">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-teal-lighter/20 rounded-3xl blur-2xl" />
                <div className="relative bg-secondary p-8 rounded-2xl space-y-8">
                  <div className="space-y-3">
                    <div className="text-accent font-display text-5xl font-bold">50%</div>
                    <p className="font-body text-lg">Redução de custos de limpeza</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-accent font-display text-5xl font-bold">100%</div>
                    <p className="font-body text-lg">Conformidade com regulamentações</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-accent font-display text-5xl font-bold">4</div>
                    <p className="font-body text-lg">Etapas para proteção total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  description: "Fornecer soluções inovadoras e sustentáveis que transformam a manutenção de sistemas de extração, garantindo segurança máxima e eficiência operacional para os nossos clientes.",
                },
                {
                  icon: Eye,
                  title: "Visão",
                  description: "Ser o líder global em tecnologia de selagem de condutas, definindo novos padrões de qualidade, segurança e sustentabilidade na indústria de manutenção de sistemas de ventilação.",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  description: "Inovação constante, compromisso com a excelência, integridade profissional, sustentabilidade ambiental e dedicação absoluta à satisfação e segurança dos nossos clientes.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-8 rounded-2xl space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                    <item.icon size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                O Processo RZ-CLEAN-SEAL
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Um sistema completo e comprovado que transforma a manutenção das suas condutas.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Inspeção Técnica",
                  description: "Realizamos uma avaliação completa do sistema de condutas existente, identificando áreas problemáticas, medindo acumulação de gordura e avaliando riscos potenciais. Esta inspeção detalhada permite-nos criar um plano de ação personalizado.",
                  image: inspectionIcon,
                },
                {
                  number: "02",
                  title: "Limpeza Profissional",
                  description: "Efetuamos uma limpeza profunda e meticulosa de todas as condutas, utilizando equipamento especializado e técnicas avançadas. Removemos toda a acumulação de gordura, detritos e contaminantes, preparando as superfícies para a fase de selagem.",
                  image: cleaningIcon,
                },
                {
                  number: "03",
                  title: "Aplicação de Selagem",
                  description: "Aplicamos o nosso revestimento inovador RZ-CLEAN-SEAL que cria uma barreira protetora nas paredes internas das condutas. Esta tecnologia única impede que a gordura e outros resíduos adiram às superfícies, facilitando limpezas futuras e reduzindo drasticamente a frequência necessária.",
                  image: sealingIcon,
                },
                {
                  number: "04",
                  title: "Manutenção Simplificada",
                  description: "Com as condutas seladas, o programa de manutenção torna-se significativamente mais simples e económico. As limpezas são mais rápidas, menos frequentes e menos disruptivas para as suas operações, resultando em poupanças substanciais a longo prazo.",
                  image: null,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-accent font-display text-6xl font-bold opacity-30">
                        {step.number}
                      </div>
                      <h3 className="font-display text-3xl font-bold">{step.title}</h3>
                    </div>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {step.image ? (
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-teal-lighter/10 rounded-3xl blur-xl" />
                        <img
                          src={step.image}
                          alt={step.title}
                          className="relative rounded-2xl w-full h-auto object-cover shadow-lg"
                        />
                      </div>
                    ) : (
                      <div className="bg-secondary/50 rounded-2xl p-12 text-center">
                        <Users size={80} className="mx-auto text-accent mb-4" />
                        <p className="font-body text-lg text-muted-foreground">
                          Apoio contínuo e manutenção simplificada
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Porquê Confiar na RZ-CLEAN-SEAL?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                "Anos de investigação e desenvolvimento",
                "Tecnologia patenteada e comprovada",
                "Equipa de técnicos especializados",
                "Clientes de alto perfil satisfeitos",
                "Certificações e conformidade total",
                "Suporte e acompanhamento contínuo",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-left"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                  </div>
                  <span className="font-body text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
