import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin, MapPin, Star, Sparkles, BrainCircuit } from 'lucide-react';
import profileImage from '@/assets/mohammad-ayan-portrait.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full bg-white/20"
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

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8 border border-white/20 shadow-xl backdrop-blur-md">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-white text-sm font-medium">Available for Opportunities</span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm{' '}
              <div className="relative inline-block">
                <span className="hero-text-glow bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
                  Mohammad Ayan
                </span>
              </div>
            </h1>
            
            {/* UPDATED ROLES: Reflecting Data Science & ML */}
            <div className="mb-4">
              <p className="text-xl lg:text-2xl text-white/90 font-medium flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                Full-Stack Developer
                <span className="text-secondary opacity-50">|</span>
                Data Science Enthusiast
                <span className="text-secondary opacity-50">|</span>
                ML Learner
              </p>
            </div>
            
            {/* UPDATED DESCRIPTION: Mentioning Python & Data Stack */}
            <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
              Final-year CSE student at Galgotias University. I specialize in the <b>MERN stack</b>and <b>Firebase</b> while actively exploring <b>Data Science with Python (NumPy, Pandas, ML)</b>  to build 
              intelligent, data-driven web solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="btn-secondary-gradient border-0 text-secondary-foreground px-8 py-7 text-lg font-bold group shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToAbout}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-7 text-lg font-bold group transition-all"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/mohammadayan79", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Ayan-Khan79", label: "GitHub" },
                { icon: Mail, href: "mailto:mohammad.ayan9450@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all group shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent rounded-full blur-3xl opacity-40 scale-110 animate-pulse-slow"></div>
              
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Mohammad Ayan" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* UPDATED CGPA & ICON: BrainCircuit for Data/AI focus */}
              <div className="absolute -bottom-2 -right-2 glass-card rounded-2xl px-6 py-4 shadow-2xl border border-white/30 backdrop-blur-xl">
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-secondary" />
                  DS & ML Student
                </div>
                <div className="text-white/90 text-sm font-semibold tracking-wide">CGPA 8.26</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <button 
          onClick={scrollToAbout}
          className="p-3 rounded-full border border-white/20 bg-white/5 animate-bounce hover:bg-white/10 transition-colors shadow-lg"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
        <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Explore My Work</span>
      </div>
    </section>
  );
};

export default Hero;