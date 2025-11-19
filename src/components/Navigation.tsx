import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rzCleanSealLogo from "@/assets/rz-clean-seal-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Preços", path: "/precos" },
    { name: "A Ciência", path: "/ciencia" },
    { name: "Benefícios", path: "/beneficios" },
    { name: "Contactos", path: "/contactos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-md shadow-sm`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={rzCleanSealLogo} 
              alt="RZ-CLEAN-SEAL" 
              className="h-10 md:h-12 w-auto transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium relative text-white transition-all duration-200 ease-in-out transform hover:scale-110 hover:font-bold ${
                  location.pathname === link.path ? "font-extrabold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 animate-fade-in">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-body text-base font-medium py-2 text-white transition-all duration-200 ease-in-out transform hover:scale-105 hover:font-bold ${
                  location.pathname === link.path ? "font-extrabold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;