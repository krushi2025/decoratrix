
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Decoratrix</h3>
            <p className="text-primary-foreground/80 mb-6">
              Transforming spaces into beautiful, functional environments that reflect your unique style and personality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <span className="sr-only">Pinterest</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="12" x2="12" y1="8" y2="16"/><line x1="18" x2="18" y1="12" y2="16"/><line x1="6" x2="6" y1="12" y2="16"/><line x1="6" x2="6" y1="8" y2="8"/><path d="M6 8a6 6 0 0 1 12 0c0 4.97-6 8-6 8"/><circle cx="18" cy="8" r="0"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-primary-foreground/80">Email:</span>
                <a href="mailto:hello@decoratrix.com" className="ml-2 text-primary-foreground/80 hover:text-primary-foreground">
                  hello@decoratrix.com
                </a>
              </li>
              <li className="flex">
                <span className="text-primary-foreground/80">Phone:</span>
                <a href="tel:+15551234567" className="ml-2 text-primary-foreground/80 hover:text-primary-foreground">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <span className="text-primary-foreground/80">
                  123 Design Avenue<br />
                  New York, NY 10001<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for design tips, trends, and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="secondary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Decoratrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
