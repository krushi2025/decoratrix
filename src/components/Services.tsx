
import { Armchair, Building, Wallpaper, House } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary that reflects your lifestyle and enhances your daily living experience.",
    icon: House,
  },
  {
    title: "Commercial Spaces",
    description: "Create impactful work environments that boost productivity, impress clients, and embody your brand's unique identity.",
    icon: Building,
  },
  {
    title: "Custom Furniture",
    description: "Commission bespoke furniture pieces designed to perfectly complement your space and meet your specific needs.",
    icon: Armchair,
  },
  {
    title: "Material Consulting",
    description: "Expert guidance on selecting the perfect materials, textures, and finishes to bring your design vision to life.",
    icon: Wallpaper,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive design solutions tailored to your unique vision, lifestyle, and space requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
