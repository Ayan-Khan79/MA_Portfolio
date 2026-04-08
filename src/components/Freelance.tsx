import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Briefcase, CheckCircle2, Globe, Lock } from 'lucide-react';

const Freelance = () => {
  const freelanceProjects = [
    {
      title: "Meetoomeat",
      subtitle: "Full-Stack Delivery & Cloud Infrastructure",
      client: "Meetoomeat Hospitality",
      description:
        "A comprehensive freelance solution for a meat distribution business. I architected the entire backend using Firebase, focusing on secure user onboarding via OTP and real-time inventory management. The platform handles high-resolution product imagery and secure customer data, providing a seamless 'farm-to-table' digital experience.",
      image: "/projects/MeeTooMeat_Home.png",
      tech: [
        "React.js",
        "Firebase Auth",
        "Firestore",
        "Firebase Storage",
        "Tailwind CSS",
        "Framer Motion"
      ],
      features: [
        "Secure OTP-based Phone Authentication for mobile-first users.",
        "Real-time data synchronization using Firestore for order tracking.",
        "Cloud Storage integration for high-quality product image hosting.",
        "Role-based access control for client administration and customers.",
        "Responsive, high-conversion UI optimized for food industry sales.",
      ],
      links: {
        live: "https://meetoomeat.com",
        github: "#"
      },
      icon: <Globe className="w-8 h-8 text-orange-500" />,
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Freelance Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Deliverables</span>
          </h2>
        </div>

        <div className="space-y-20">
          {freelanceProjects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* FIXED IMAGE CONTAINER */}
              <div className="order-1 lg:sticky lg:top-24">
                <Card className="border-0 shadow-2xl overflow-hidden group bg-slate-900 aspect-video rounded-3xl"> {/* Aspect set on Card */}
                  <CardContent className="p-0 w-full h-full relative"> {/* Container fills Card */}
                    {/* FIXED IMAGE:
                      w-full h-full ensures it fills CardContent.
                      object-cover is CRITICAL: it scales the image to fill the space
                      without stretching, cropping if necessary.
                    */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="lg" variant="secondary" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Visit Live Site
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Details */}
              <div className="space-y-6 order-2 lg:order-2">
                <div className="inline-flex p-3 rounded-2xl bg-orange-500/10 mb-2">
                  {project.icon}
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-primary font-medium mb-4 text-sm md:text-base">
                    <span>{project.subtitle}</span>
                    <span className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></span>
                    <span className="text-muted-foreground">Client: {project.client}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Key Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack - FIXED CONTRAST */}
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-100 border border-slate-700 rounded-md text-xs font-bold shadow-sm">
                        {t}
                        </span>
                    ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Button className="btn-primary-gradient px-8 border-0 shadow-lg" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium bg-muted/50 px-3 py-1 rounded-full">
                    <Lock className="w-4 h-4" />
                    <span>Private Repository</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;