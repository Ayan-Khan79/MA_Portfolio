import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import profileImage from '@/assets/mohammad-ayan-profile.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full floating-delayed"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full floating"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-secondary/30 rounded-full floating-delayed"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-white text-sm">Final Year CS Student</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="hero-text-glow bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Mohammad Ayan
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-4 font-medium">
              Web Developer
            </p>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Final-year Computer Science student at Galgotias University, skilled in Web Development, 
              seeking opportunities to apply and grow technical expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="btn-secondary-gradient border-0 text-secondary-foreground hover:scale-105 transition-transform px-8 py-6 text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToAbout}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/mohammadayan79" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://github.com/Ayan-Khan79" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:mohammad.ayan9450@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full blur-2xl opacity-60 scale-110"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Mohammad Ayan" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary rounded-full px-6 py-3 shadow-lg border-4 border-white">
                <div className="text-white font-bold text-lg">8+ Years</div>
                <div className="text-white text-sm">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;