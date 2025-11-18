import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">RZ-CLEAN-SEAL</h3>
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
              Sistema inovador de limpeza e selagem de condutas de extração. 
              Proteção garantida para o seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/ciencia"
                  className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  A Ciência
                </Link>
              </li>
              <li>
                <Link
                  to="/beneficios"
                  className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Benefícios
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-primary-foreground/80">
                Inspeção de Condutas
              </li>
              <li className="font-body text-sm text-primary-foreground/80">
                Limpeza Profissional
              </li>
              <li className="font-body text-sm text-primary-foreground/80">
                Selagem Inovadora
              </li>
              <li className="font-body text-sm text-primary-foreground/80">
                Manutenção Preventiva
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/80">
                  +351 XXX XXX XXX
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/80">
                  info@rz-clean-seal.pt
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/80">
                  Portugal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm text-primary-foreground/60">
              © {currentYear} RZ-CLEAN-SEAL. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="#"
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
