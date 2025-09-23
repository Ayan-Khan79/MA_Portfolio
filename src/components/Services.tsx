import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Website Development",
      description: "Building functional and responsive websites using modern web technologies. From concept to deployment, I create web solutions that deliver excellent user experiences.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimized",
        "SEO Friendly"
      ],
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <Code className="w-12 h-12 text-secondary" />,
      title: "Full-Stack Development",
      description: "Complete web application development with both frontend and backend expertise. Creating seamless integration between user interface and server-side functionality.",
      features: [
        "Frontend Development",
        "Backend APIs",
        "Database Integration",
        "Authentication Systems"
      ],
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Web Optimization",
      description: "Enhancing website performance through database query optimization, API improvements, and code optimization for faster loading times and better user experience.",
      features: [
        "Database Optimization",
        "API Performance",
        "Code Optimization",
        "Speed Enhancement"
      ],
      gradient: "from-accent/10 to-accent/5"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg group">
              <CardContent className="p-8 h-full">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 mb-6 inline-block`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">My Working Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Analysis",
                description: "Understanding requirements and creating a detailed project plan",
                icon: <Code className="w-6 h-6 text-primary" />
              },
              {
                step: "02", 
                title: "Development & Testing",
                description: "Building the solution with clean code and thorough testing",
                icon: <Smartphone className="w-6 h-6 text-secondary" />
              },
              {
                step: "03",
                title: "Deployment & Support",
                description: "Launching the project and providing ongoing support",
                icon: <Zap className="w-6 h-6 text-accent" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;