
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3432&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-width px-4 relative z-10 text-white text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 animate-fade-in">
          Transforming Spaces<br />Into Experiences
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in">
          Award-winning interior design studio specializing in luxury residential and commercial spaces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button size="lg" asChild className="min-w-[160px]">
            <a href="#portfolio">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[160px] bg-transparent border-white text-white hover:bg-white/10">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
