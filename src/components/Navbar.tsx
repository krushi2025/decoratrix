
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-width flex items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-medium tracking-tight">
            <span className="text-primary">Decoratrix</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            About
          </a>
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col">
          <nav className="flex flex-col items-center justify-center space-y-8 h-full">
            <a 
              href="#services"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#about"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button asChild onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
