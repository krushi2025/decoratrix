
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Sample portfolio projects
const projects = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Boutique Hotel Lobby",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=3027&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scandinavian-Inspired Kitchen",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Contemporary Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1769&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Mid-Century Modern Living Room",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Urban Café Design",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground">
            Explore our curated collection of completed design projects spanning residential and commercial spaces.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-10 flex-wrap gap-2">
          {["All", "Residential", "Commercial"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all h-72"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 w-full">
                  <h3 className="text-white text-xl font-medium mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4">{project.category}</p>
                  <Button size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
