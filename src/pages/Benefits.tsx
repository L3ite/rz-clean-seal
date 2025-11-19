import {
  Shield,
  TrendingDown,
  Clock,
  Leaf,
  CheckCircle,
  AlertTriangle,
  Zap,
  Heart,
  Award,
  Users,
  FileCheck,
  ThumbsUp,
} from "lucide-react";

const Benefits = () => {
  const mainBenefits = [
    {
      icon: TrendingDown,
      title: "Redução de Custos até 50%",
      description: "Poupe significativamente nos custos de limpeza contínua. O nosso sistema de selagem reduz drasticamente a frequência de limpezas necessárias, resultando em poupanças substanciais a longo prazo.",
      color: "from-accent to-teal-lighter",
    },
    {
      icon: Shield,
      color: "from-teal-lighter to-accent",
    },
    {
      icon: Clock,
      title: "Menos Disrupção Operacional",
      description: "Reduza a frequência de intervenções e o tempo necessário para limpezas. O seu negócio pode operar normalmente sem paragens prolongadas para manutenção de condutas.",
      color: "from-accent to-teal-lighter",
    },
    {
      icon: Leaf,
      title: "Solução Ecológica",
      description: "Reduza significativamente o uso de produtos químicos agressivos e água nas limpezas. Contribua para um futuro mais sustentável enquanto mantém os mais altos padrões de higiene.",
      color: "from-teal-lighter to-accent",
    },
  ];

  const additionalBenefits = [
    {
      icon: Zap,
      title: "Eficiência Energética",
      description: "Sistemas mais limpos operam com maior eficiência, reduzindo o consumo de energia e os custos associados.",
    },
    {
      icon: Heart,
      title: "Ambiente Mais Saudável",
      description: "Melhor qualidade do ar na cozinha, reduzindo exposição a fumos e odores para a sua equipa.",
    },
    {
      icon: Award,
      title: "Conformidade Regulamentar",
      description: "Garanta conformidade total com todas as regulamentações de segurança alimentar e prevenção de incêndios.",
    },
    {
      icon: Users,
      title: "Imagem Profissional",
      description: "Demonstre o compromisso com altos padrões de higiene e segurança aos seus clientes e autoridades.",
    },
    {
      icon: FileCheck,
      title: "Documentação Completa",
      description: "Receba certificados e relatórios detalhados para auditorias e inspeções regulares.",
    },
    {
      icon: ThumbsUp,
      title: "Tranquilidade",
      description: "Tenha paz de espírito sabendo que o seu sistema de extração está protegido e em conformidade.",
    },
  ];

  const comparisonData = [
    {
      aspect: "Frequência de Limpeza",
      traditional: "Mensal ou bimestral",
      rzCleanSeal: "Semestral ou anual",
    },
    {
      aspect: "Custo Anual Médio",
      traditional: "€5.000 - €15.000",
      rzCleanSeal: "€2.500 - €7.500",
    },
    {
      aspect: "Tempo de Intervenção",
      traditional: "6-8 horas por limpeza",
      rzCleanSeal: "2-3 horas por manutenção",
    },
    {
      aspect: "Risco de Incêndio",
      traditional: "Elevado entre limpezas",
      rzCleanSeal: "Minimizado continuamente",
    },
    {
      aspect: "Disrupção Operacional",
      traditional: "Frequente e prolongada",
      rzCleanSeal: "Mínima e espaçada",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold">
              Benefícios
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Descubra como o RZ-CLEAN-SEAL transforma a manutenção de condutas 
              e traz vantagens reais e mensuráveis para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl p-8 bg-secondary/50 hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative space-y-4">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon size={32} className="text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-3xl font-bold">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Mais Vantagens
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                O RZ-CLEAN-SEAL oferece benefícios abrangentes que vão além da simples limpeza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <benefit.icon size={24} className="text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Comparação com Métodos Tradicionais
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Veja a diferença real que o RZ-CLEAN-SEAL faz.
              </p>
            </div>

            <div className="bg-secondary/50 rounded-3xl overflow-hidden animate-fade-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left font-display text-lg font-semibold">
                        Aspecto
                      </th>
                      <th className="px-6 py-4 text-left font-display text-lg font-semibold">
                        Métodos Tradicionais
                      </th>
                      <th className="px-6 py-4 text-left font-display text-lg font-semibold text-accent">
                        RZ-CLEAN-SEAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-border last:border-0 hover:bg-background/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-body font-medium">
                          {row.aspect}
                        </td>
                        <td className="px-6 py-4 font-body text-muted-foreground">
                          {row.traditional}
                        </td>
                        <td className="px-6 py-4 font-body font-semibold text-accent">
                          {row.rzCleanSeal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Impacto Real no Seu Negócio
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Retorno sobre Investimento",
                  description: "O investimento inicial no sistema RZ-CLEAN-SEAL compensa rapidamente através de poupanças contínuas. A maioria dos clientes recupera o investimento em 12-18 meses, beneficiando depois de anos de custos reduzidos.",
                },
                {
                  icon: Shield,
                  title: "Tranquilidade e Conformidade",
                  description: "Durma descansado sabendo que o seu sistema está protegido contra acumulação perigosa. Passe inspeções e auditorias com confiança, mantendo sempre a conformidade com regulamentações.",
                },
                {
                  icon: Clock,
                  title: "Foco no Negócio",
                  description: "Com menos preocupações sobre manutenção de condutas, pode concentrar-se no que realmente importa: servir os seus clientes e fazer crescer o seu negócio.",
                },
              ].map((impact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-background p-8 rounded-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                    <impact.icon size={28} className="text-accent-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold">
                      {impact.title}
                    </h3>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
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
              Experimente os Benefícios
            </h2>
            <p className="font-body text-xl text-primary-foreground/90">
              Junte-se aos muitos estabelecimentos que já transformaram 
              a sua manutenção com o RZ-CLEAN-SEAL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/contactos">
                <button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 py-3 rounded-lg transition-all hover:scale-105">
                  Solicitar Orçamento
                </button>
              </a>
              <a href="/precos">
                <button className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 py-3 rounded-lg backdrop-blur-sm transition-all">
                  Ver Preços
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
