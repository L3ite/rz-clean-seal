import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contacto brevemente.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="font-display text-6xl md:text-7xl font-bold">
              Contactos
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Estamos prontos para transformar a manutenção das suas condutas. 
              Entre em contacto connosco hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-slide-right">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      Solicitar Orçamento
                    </h2>
                    <p className="font-body text-muted-foreground">
                      Preencha o formulário abaixo e entraremos em contacto para discutir 
                      as suas necessidades específicas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-body text-sm font-medium mb-2 block"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="O seu nome"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="font-body text-sm font-medium mb-2 block"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="font-body text-sm font-medium mb-2 block"
                      >
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+351 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="font-body text-sm font-medium mb-2 block"
                      >
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-32"
                        placeholder="Descreva as suas necessidades e ajudaremos a encontrar a melhor solução..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-lg py-6"
                    >
                      {isSubmitting ? "A enviar..." : "Enviar Pedido"}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-slide-left">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-6">
                    Informações de Contacto
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        title: "Telefone",
                        content: "+44 (0)1924 856390",
                        subtitle: "Seg-Sex: 09:00 - 18:00",
                        link: "tel:+441924856390",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "enquiries@rz-clean-seal.com",
                        subtitle: "Resposta em 24h",
                        link: "mailto:enquiries@rz-clean-seal.com",
                      },
                      {
                        icon: MapPin,
                        title: "Localização",
                        content: "Unit 2a Brindley Way, Wakefield",
                        subtitle: "West Yorkshire WF2 0XQ",
                      },
                      {
                        icon: Clock,
                        title: "Horário",
                        content: "Segunda a Sexta-feira",
                        subtitle: "09:00 - 18:00",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-6 bg-secondary/50 rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                          <item.icon size={24} className="text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-display text-lg font-semibold mb-1">
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a href={item.link} className="font-body text-foreground mb-1 hover:text-accent transition-colors block">
                              {item.content}
                            </a>
                          ) : (
                            <p className="font-body text-foreground mb-1">
                              {item.content}
                            </p>
                          )}
                          <p className="font-body text-sm text-muted-foreground">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-blue-lighter/10 rounded-2xl p-8 space-y-4">
                  <h3 className="font-display text-xl font-bold">
                    Porquê Escolher-nos?
                  </h3>
                  <ul className="space-y-3 font-body text-muted-foreground">
                    {[
                      "Orçamento gratuito e sem compromisso",
                      "Resposta rápida em 24 horas",
                      "Avaliação técnica profissional",
                      "Soluções personalizadas",
                      "Equipa experiente e certificada",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Respostas rápidas às questões mais comuns.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Quanto tempo demora a instalação?",
                  answer: "O processo completo (inspeção, limpeza e selagem) normalmente demora 1-2 dias, dependendo do tamanho do sistema.",
                },
                {
                  question: "Com que frequência preciso de manutenção?",
                  answer: "Com o sistema RZ-CLEAN-SEAL, a manutenção é necessária apenas de 6 em 6 meses a 1 ano, comparado com mensal ou bimestral nos sistemas tradicionais.",
                },
                {
                  question: "Quanto posso poupar?",
                  answer: "Os nossos clientes reportam poupanças de 40-50% nos custos de manutenção de condutas, com o benefício adicional de menor disrupção operacional.",
                },
                {
                  question: "O sistema é seguro?",
                  answer: "Absolutamente. O revestimento RZ-CLEAN-SEAL é completamente seguro para contacto alimentar, resistente a altas temperaturas e certificado para uso em ambientes comerciais.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Pronto para Começar?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90">
              Entre em contacto hoje e descubra como o RZ-CLEAN-SEAL 
              pode transformar o seu negócio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
