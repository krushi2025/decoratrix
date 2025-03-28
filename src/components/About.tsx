
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-auto">
            <div className="absolute -left-4 -top-4 w-2/3 h-2/3 border-2 border-accent z-0"></div>
            <div className="relative z-10 h-full overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop" 
                alt="Interior Designer Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">About the Designer</h2>
            
            <h3 className="text-xl font-medium mb-4">Sarah Johnson</h3>
            <p className="text-foreground/80 mb-6">
              With over 15 years of experience in the design industry, Sarah Johnson has established herself as a leading voice in contemporary interior design. Her approach balances aesthetics with functionality, creating spaces that are both beautiful and livable.
            </p>
            
            <p className="text-foreground/80 mb-6">
              After graduating from the prestigious Design Institute of London, Sarah worked with renowned design firms in New York and Paris before founding Decoratrix in 2012. Her work has been featured in Architectural Digest, Elle Decor, and House Beautiful.
            </p>
            
            <p className="text-foreground/80 mb-6">
              Sarah's design philosophy centers on creating personalized environments that reflect the unique personalities and lifestyles of her clients. She believes that successful design should tell a story and evoke emotion while meeting practical needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Work With Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
