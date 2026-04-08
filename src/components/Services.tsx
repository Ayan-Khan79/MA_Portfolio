import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Server, Zap, ArrowRight, BrainCircuit, ShieldCheck, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "Full-Stack Web Apps",
      description: "Developing robust, end-to-end applications using the MERN stack. I focus on building scalable backends and highly interactive frontends that solve real business problems.",
      features: [
        "MERN Stack Integration",
        "RESTful API Development",
        "JWT & Role-based Auth",
        "Real-time Data Sync"
      ],
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-secondary" />,
      title: "Freelance Solutions",
      description: "Providing production-ready deliverables for clients. From secure cloud infrastructure with Firebase to high-conversion UI, I deliver complete products tailored to your brand.",
      features: [
        "Firebase Cloud Integration",
        "OTP Authentication",
        "Secure Payment Flow",
        "Client Admin Dashboards"
      ],
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-accent" />,
      title: "Data-Driven Insights",
      description: "Leveraging Python and Machine Learning to turn data into decisions. I help integrate intelligent features and data visualizations into existing web platforms.",
      features: [
        "Predictive Modeling",
        "Data Visualization",
        "Python Backend Integration",
        "Insights & Analytics"
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
            Expert <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional web development and data services designed to scale your vision
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg group bg-card">
              <CardContent className="p-8 h-full flex flex-col">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 mb-6 inline-block w-fit`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Start Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-[3rem] p-12 lg:p-16">
          <h3 className="text-3xl font-bold text-center mb-16">My Strategic Process</h3>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
            
            {[
              {
                step: "01",
                title: "Discovery & Architecture",
                description: "Defining user personas and mapping out the technical infrastructure for scale.",
                icon: <BarChart3 className="w-6 h-6 text-primary" />
              },
              {
                step: "02", 
                title: "Agile Development",
                description: "Building with rapid iterations, clean code, and consistent client feedback loops.",
                icon: <Code2 className="w-6 h-6 text-secondary" />
              },
              {
                step: "03",
                title: "Deployment & Growth",
                description: "Launching on high-availability cloud platforms and monitoring performance.",
                icon: <Zap className="w-6 h-6 text-accent" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-background rounded-2xl rotate-3 shadow-xl flex items-center justify-center mx-auto mb-4 border border-border group-hover:rotate-0 transition-transform">
                    {process.icon}
                  </div>
                  <div className="absolute -top-3 left-1/2 transform translate-x-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{process.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Required for the Step 02 icon
import { Code2 } from 'lucide-react';

export default Services;