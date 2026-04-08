import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Users,
  Utensils,
  Activity,
  Rocket,
  Code2,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "HabitFlow",
      subtitle: "Personal Habit Tracking Web App",
      status: "Personal Project",
      description:
        "A sophisticated full-stack habit tracking application designed to empower users to establish sustainable routines. It features high-performance data visualization and secure session management, providing a reliable platform for personal growth and habit consistency.",
      image: "/projects/LogIn_Habitflow.png",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "Shadcn UI",
        "JWT Auth",
        "PostgreSQL",
      ],
      features: [
        "Streak visualization for behavioral motivation.",
        "Insightful dashboard with completion analytics.",
        "Secure JWT-based authentication protocol.",
        "Responsive UI optimized for all devices.",
      ],
      links: {
        live: "https://habitflow-1-4x1z.onrender.com/",
        github: "https://github.com/Ayan-Khan79/Habitflow",
      },
      icon: <Activity className="w-8 h-8 text-green-500" />,
      gradient: "from-green-500/10 to-green-500/5",
    },
    {
      title: "Bitebox",
      subtitle: "Premium Restaurant UX Showcase",
      status: "Client Concept",
      description:
        "A modern, fully responsive restaurant platform built with a focus on conversion optimization and premium branding. It delivers a seamless single-page navigation experience, featuring dynamic menu management and integrated table reservation flows.",
      image: "/projects/Bitebox.png",
      tech: ["React.js", "Tailwind CSS", "React Router", "Framer Motion"],
      features: [
        "Dynamic menu categories with real-time display.",
        "Guided table reservation booking system.",
        "Premium aesthetic with smooth micro-interactions.",
        "Performance-optimized image loading.",
      ],
      links: {
        live: "https://bitebox-1ly7.onrender.com",
        github: "https://github.com/Ayan-Khan79/Bitebox",
      },
      icon: <Utensils className="w-8 h-8 text-red-500" />,
      gradient: "from-red-500/10 to-red-500/5",
    },
    {
      title: "Unimanage",
      subtitle: "Student Management System",
      status: "Academic Project",
      description:
        "A comprehensive student management system for educational institutions featuring advanced search functionality and a structured database schema. Built to handle efficient data management and listing for large datasets.",
      image: "/projects/Unimanage_home_page.png",
      tech: ["Node.js", "Express.js", "PostgreSQL", "pgAdmin", "JavaScript"],
      features: [
        "Advanced PostgreSQL search queries.",
        "Complete CRUD system for student records.",
        "Scalable database architecture.",
        "Administrative data listing views.",
      ],
      links: {
        live: "https://unimanage.onrender.com/",
        github: "https://github.com/Ayan-Khan79/Class-Student-Infromation",
      },
      icon: <Users className="w-8 h-8 text-primary" />,
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "Ingreedy",
      subtitle: "Recipe Discovery Web App",
      status: "Personal Project",
      description:
        "An innovative recipe web application that promotes sustainable cooking by fetching recipes based on available ingredients. It integrates external APIs to provide seasonal cooking suggestions and waste reduction tips.",
      image: "/projects/ingreedy_home_page.png",
      tech: ["HTML", "CSS", "JavaScript", "REST API Integration"],
      features: [
        "Ingredient-based search algorithm.",
        "External API data synchronization.",
        "Sustainable cooking focus.",
        "Lightweight and fast user interface.",
      ],
      links: {
        live: "https://recipe-finder1-l4g8.onrender.com/",
        github: "https://github.com/Ayan-Khan79/Recipe-Finder",
      },
      icon: <Utensils className="w-8 h-8 text-secondary" />,
      gradient: "from-secondary/10 to-secondary/5",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Rocket className="w-3 h-3" />
            <span>Project Showcases</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of technical solutions solving real problems through
            code and design.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image Section */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Card className="border-0 shadow-2xl overflow-hidden group rounded-3xl relative">
                  <CardContent className="p-0">
                    <div className="relative aspect-video flex items-center justify-center overflow-hidden">
                      {/* The Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* HOVER OVERLAY: 
            - opacity-0: Hidden by default
            - group-hover:opacity-100: Visible when cursor enters the Card
            - backdrop-blur-sm: Adds a premium frosted glass effect to the background on hover
        */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
                          asChild
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full border-white text-white hover:bg-white hover:text-black font-bold shadow-xl hover:scale-105 transition-transform"
                          asChild
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Details */}
              <div
                className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-card border border-border shadow-sm">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">
                        {project.status}
                      </span>
                      <h3 className="text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    Technical Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-800 text-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
