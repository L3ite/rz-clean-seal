import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingDown, Leaf, CheckCircle } from "lucide-react";
import kitchenImage from "@/assets/kitchen-system.jpg";
import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const logos = [
    { src: "https://irp.cdn-website.com/e0c98fb4/dms3rep/multi/WAGAMAMA.svg", alt: "Wagamama Logo" },
    { src: "https://irp.cdn-website.com/e0c98fb4/dms3rep/multi/BLACKLOCK.svg", alt: "Blacklock Logo" },
    { src: "https://irp.cdn-website.com/e0c98fb4/dms3rep/multi/HAWKSMOOR+2.svg", alt: "Hawksmoor Logo" },
    { src: "https://irp.cdn-website.com/e0c98fb4/dms3rep/multi/FIVE+GUYS+3.svg", alt: "Five Guys Logo" },
    { src: "https://irp.cdn-website.com/e0c98fb4/dms3rep/multi/TGI+FRIDAYS+2.svg", alt: "TGI Fridays Logo" },
    { src: "https://irp.cdn-website.com/e0c98fb4/dms3rep/multi/PICCOLINO+LOGO+1.svg", alt: "Piccolino Logo" },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-display text-5xl font-bold leading-8 text-foreground mb-12">
            Alguns dos nossos <span className="text-accent">Clientes Valiosos</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className={`p-4 transition-all duration-500 ease-in-out transform hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  className="w-full h-52 object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://vid.cdn-website.com/e0c98fb4/videos/vLMbVNgsRzeOqhKRIpWC_UPDATED+RZ+VID-v.mp4" type="video/mp4" />
        </video>
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
              <Link to="/beneficios" className="block pt-8">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-teal-lighter/20 rounded-3xl blur-2xl" />
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
                  className="border-2 font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Conhecer a Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

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
            <Link to="/contactos" className="block pt-8">
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