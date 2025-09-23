import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin, MapPin, Star, Sparkles } from 'lucide-react';
import profileImage from '@/assets/mohammad-ayan-portrait.jpg';

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

  // Generate particles for background animation
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full floating modern-hover"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full floating-delayed modern-hover"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full floating modern-hover"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-secondary/30 rounded-full floating-delayed modern-hover"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-32 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-secondary/40 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-16 w-1 h-1 bg-white/80 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge with glassmorphism */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8 border border-white/20 modern-hover">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-white text-sm font-medium">Available for Work</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>
            
            {/* Enhanced Heading with Animation */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm{' '}
              <div className="relative inline-block">
                <span className="hero-text-glow bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
                  Mohammad Ayan
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-20 animate-pulse-slow"></div>
              </div>
            </h1>
            
            {/* Enhanced Role with typing effect styling */}
            <div className="mb-4">
              <p className="text-xl lg:text-2xl text-white/90 font-medium inline-block">
                Web Developer
                <span className="ml-1 animate-pulse text-secondary"> | </span>
                Learner
                <span className="ml-1 animate-pulse text-secondary"> | </span>

              </p>
            </div>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Final-year Computer Science student at Galgotias University, skilled in Web Development, 
              seeking opportunities to apply and grow technical expertise through innovative solutions.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="btn-secondary-gradient border-0 text-secondary-foreground modern-hover px-8 py-6 text-lg font-semibold group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
                <Star className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToAbout}
                className="glass-button text-white hover:text-white px-8 py-6 text-lg font-semibold group"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/mohammadayan79", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Ayan-Khan79", label: "GitHub" },
                { icon: Mail, href: "mailto:mohammad.ayan9450@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 glass-button rounded-full modern-hover group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image with Modern Effects */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Multiple Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent rounded-full blur-3xl opacity-60 scale-110 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary rounded-full blur-xl opacity-40 scale-125 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Animated Border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 animated-border">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl modern-hover">
                  <img 
                    src={profileImage} 
                    alt="Mohammad Ayan" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Enhanced Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-6 py-4 shadow-xl border-4 border-white/30 modern-hover group">
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary group-hover:rotate-12 transition-transform" />
                  CS Student
                </div>
                <div className="text-white/90 text-sm">CGPA 8.36</div>
              </div>

              {/* Additional floating elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary/80 rounded-full flex items-center justify-center animate-pulse-slow">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-accent/80 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="glass-button p-4 rounded-full modern-hover group animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
        </button>
        <div className="text-white/60 text-xs text-center mt-2 font-medium">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;