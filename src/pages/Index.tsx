import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingDown, Leaf, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-ducts.jpg";
import kitchenImage from "@/assets/kitchen-system.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-0" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl">
            <div className="space-y-8 animate-fade-up">
              <p className="font-display text-xl md:text-2xl text-accent uppercase tracking-wider mb-4">
                Selar Condutas. Proteger Negócios.
              </p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-none">
                O Futuro da Manutenção
                <br />
                <span className="text-blue-light">de Extrações de Cozinha</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                Solução inovadora para reduzir custos de limpeza de extrações de cozinha até <strong>50%</strong>, apoiando um futuro mais limpo e sustentável para o sector da restauração.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contactos">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-lg px-8 transition-all hover:scale-105 group"
                  >
                    Pedir Orçamento Gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/ciencia">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium text-lg px-8 backdrop-blur-sm"
                  >
                    Descobrir a Ciência
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Video Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Veja o Sistema em Ação
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Caso de Estudo: Five Guys Stoke-On-Trent - Selagem Completa do Sistema
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video animate-scale-in">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/umGHDpn_IBQ"
                title="Case Study: Five Guys Stoke-On-Trent"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              O Que é o RZ-Clean-Seal?
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              O RZ-Clean-Seal é uma solução inovadora para reduzir os custos de limpeza de extrações de cozinha até <strong>50%</strong>, apoiando ao mesmo tempo um futuro mais limpo e sustentável para o sector da restauração.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mt-4">
              O nosso sistema único ajuda restaurantes, hotéis e cozinhas comerciais a manter operações seguras, conformes e eficientes, reduzindo a frequência e o custo da limpeza de condutas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inspeção",
                description: "Avaliação técnica completa do sistema de condutas existente com relatório detalhado.",
              },
              {
                step: "02",
                title: "Limpar",
                description: "Limpeza profissional profunda de todas as condutas, removendo toda a acumulação de gordura e resíduos.",
              },
              {
                step: "03",
                title: "Selar",
                description: "Aplicação do nosso revestimento inovador que cria uma barreira protetora contra a acumulação futura de gordura.",
              },
              {
                step: "04",
                title: "Manter",
                description: "Programa de manutenção preventiva simplificado que reduz custos operacionais significativamente.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-secondary/50 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-accent font-display text-5xl font-bold mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Highlight */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-right">
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Quanto Poderá
                <br />
                <span className="text-accent">Poupar?</span>
              </h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Com a solução RZ-Clean-Seal poderá poupar até <strong>50%</strong> dos seus custos totais de limpeza!
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingDown,
                    title: "Redução de Custos até 50%",
                    description: "Poupe significativamente nos custos de limpeza contínua e manutenção com o nosso sistema de selagem inovador.",
                  },
                  {
                    icon: Shield,
                    title: "Segurança e Conformidade",
                    description: "Reduza riscos de incêndio, melhore a eficiência e prolongue a vida útil do sistema, garantindo total conformidade com regulamentações.",
                  },
                  {
                    icon: Leaf,
                    title: "Sustentabilidade",
                    description: "Solução com sustentabilidade no coração - reduz consumo de energia, uso de químicos agressivos e impacto ambiental.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/beneficios">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium group"
                >
                  Ver Todos os Benefícios
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </div>

            <div className="relative animate-slide-left">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-blue-lighter/20 rounded-3xl blur-2xl" />
              <img
                src={kitchenImage}
                alt="Sistema de ventilação em cozinha comercial"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              A Nossa Abordagem Comprovada
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              A nossa abordagem de três etapas — <strong>Limpar, Selar, Manter</strong> — construiu uma sólida reputação internacional por <strong>reduzir o consumo de energia, melhorar a eficiência, prolongar a vida útil dos sistemas e diminuir os riscos de incêndio</strong>, tudo isto oferecendo um valor excecional aos clientes.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              O sistema RZ-CLEAN-SEAL baseia-se em anos de investigação e testes com clientes de alto perfil. A nossa tecnologia de selagem única cria uma barreira que impede a acumulação de gordura, transformando a manutenção de condutas para sempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/ciencia">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                >
                  Explorar a Tecnologia
                </Button>
              </Link>
              <Link to="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 font-medium"
                >
                  Conhecer a Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Entre no Futuro
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
              Junte-se a centenas de restaurantes, hotéis e cozinhas comerciais que já reduziram custos e aumentaram a segurança com o RZ-CLEAN-SEAL. A escolha inteligente para empresas que pensam no futuro em toda a indústria de food service.
            </p>
            <Link to="/contactos">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-lg px-10 transition-all hover:scale-105"
              >
                Solicitar Orçamento Gratuito
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
