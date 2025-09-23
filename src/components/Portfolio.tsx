import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Users, Utensils } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Unimanage",
      subtitle: "Student Management System",
      description: "A comprehensive student management system for educational institutions featuring student registration, search functionality, and complete student listing. Built with modern web technologies for efficient data management.",
      image: "/projects/Unimanage_home_page.png",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "pgAdmin"],
      features: [
        "Student Registration System",
        "Advanced Search Functionality", 
        "Complete Student Database",
        "Responsive Design"
      ],
      links: {
        live: "https://unimanage.onrender.com/",
        github: "https://github.com/Ayan-Khan79/Class-Student-Infromation"
      },
      icon: <Users className="w-8 h-8 text-primary" />,
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Ingreedy",
      subtitle: "Recipe Discovery Web App",
      description: "An innovative recipe web application that fetches recipes based on available ingredients, promotes minimal food waste, and provides seasonal cooking suggestions. Perfect for sustainable cooking practices.",
      image: "/projects/ingreedy_home_page.png",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      features: [
        "Ingredient-Based Recipe Search",
        "Food Waste Reduction Focus",
        "Seasonal Recipe Suggestions",
        "User-Friendly Interface"
      ],
      links: {
        live: "https://recipe-finder1-l4g8.onrender.com/",
        github: "https://github.com/Ayan-Khan79/Recipe-Finder"
      },
      icon: <Utensils className="w-8 h-8 text-secondary" />,
      gradient: "from-secondary/10 to-secondary/5"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing projects that demonstrate technical skills and problem-solving abilities
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="border-0 shadow-xl overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-video flex items-center justify-center overflow-hidden rounded-lg">
                      {/* Project Image */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>


              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button className="btn-primary-gradient border-0 text-primary-foreground" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and create innovative web solutions. 
                Let's discuss your project and bring your ideas to life.
              </p>
              <Button 
                size="lg" 
                className="btn-secondary-gradient border-0 text-secondary-foreground"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;