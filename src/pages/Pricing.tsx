import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Perfeito para pequenos estabelecimentos",
      price: "Sob Consulta",
      features: [
        "Inspeção técnica inicial completa",
        "Limpeza profissional das condutas",
        "Aplicação de selagem RZ-CLEAN-SEAL",
        "Relatório detalhado de intervenção",
        "Garantia de 12 meses",
        "1 manutenção anual incluída",
      ],
      popular: false,
    },
    {
      name: "Profissional",
      description: "Ideal para restaurantes e hotéis",
      price: "Sob Consulta",
      features: [
        "Tudo do plano Essencial",
        "Inspeções trimestrais",
        "2 manutenções anuais incluídas",
        "Garantia de 24 meses",
        "Suporte prioritário 24/7",
        "Relatórios de conformidade regulares",
        "Certificação de segurança",
        "Consultoria técnica incluída",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      description: "Solução completa para grandes operações",
      price: "Sob Consulta",
      features: [
        "Tudo do plano Profissional",
        "Inspeções mensais",
        "Manutenções ilimitadas",
        "Garantia de 36 meses",
        "Gestor de conta dedicado",
        "SLA garantido",
        "Formação de equipa incluída",
        "Cobertura multi-localização",
        "Relatórios executivos detalhados",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold">
              Opções de Preços
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Planos flexíveis adaptados às necessidades do seu negócio. 
              Todos incluem o nosso sistema revolucionário RZ-CLEAN-SEAL.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group animate-fade-up ${
                  plan.popular
                    ? "lg:-mt-8 lg:mb-8"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                    <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-display font-semibold text-sm">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div
                  className={`h-full bg-background rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-accent shadow-2xl scale-105"
                      : "border border-border hover:border-accent/50 hover:shadow-lg"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3 pb-6 border-b border-border">
                      <h3 className="font-display text-3xl font-bold">
                        {plan.name}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="py-6">
                      <div className="font-display text-4xl font-bold text-accent">
                        {plan.price}
                      </div>
                      <p className="font-body text-sm text-muted-foreground mt-2">
                        Orçamento personalizado para o seu negócio
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 pb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="font-body text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to="/contactos" className="block">
                      <Button
                        className={`w-full group ${
                          plan.popular
                            ? "bg-accent text-accent-foreground hover:bg-accent/90"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                        size="lg"
                      >
                        Solicitar Orçamento
                        <ArrowRight
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                          size={18}
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pricing Varies */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Porquê Preços Personalizados?
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Cada sistema de condutas é único. Os nossos preços refletem as necessidades específicas do seu estabelecimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Dimensão do Sistema",
                  description: "O tamanho e extensão das condutas influencia o trabalho necessário e materiais utilizados.",
                },
                {
                  title: "Estado Atual",
                  description: "Condutas com maior acumulação requerem limpeza mais intensiva antes da selagem.",
                },
                {
                  title: "Acessibilidade",
                  description: "A facilidade de acesso às condutas afeta o tempo e equipamento necessário.",
                },
                {
                  title: "Frequência de Uso",
                  description: "Estabelecimentos com uso intensivo podem beneficiar de manutenção mais frequente.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Reminder */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-teal-lighter/10 rounded-3xl p-12 text-center space-y-6 animate-fade-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Investimento que se Paga a Si Próprio
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Com poupanças de até 50% nos custos de limpeza e manutenção, 
                o sistema RZ-CLEAN-SEAL rapidamente compensa o investimento inicial, 
                proporcionando retorno contínuo ano após ano.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {[
                  { value: "50%", label: "Redução de Custos" },
                  { value: "75%", label: "Menos Disrupção" },
                  { value: "100%", label: "Conformidade Garantida" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="font-display text-5xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Pronto para Começar?
            </h2>
            <p className="font-body text-xl text-primary-foreground/90">
              Contacte-nos hoje para receber um orçamento personalizado sem compromisso. 
              A nossa equipa irá avaliar as suas necessidades e propor a melhor solução.
            </p>
            <Link to="/contactos">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-lg px-10"
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

export default Pricing;
