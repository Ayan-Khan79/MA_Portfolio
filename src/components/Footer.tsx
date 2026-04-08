import { Mail, Phone, Linkedin, Github, Heart, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/mohammadayan79",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Ayan-Khan79",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mohammad.ayan9450@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Freelance", href: "#freelance" }, // Added for easy access
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-5 tracking-tight">Mohammad Ayan</h3>
            <p className="text-white/80 mb-8 max-w-md leading-relaxed text-lg">
              Final-year Computer Science student specializing in the MERN stack and data-driven applications. 
              Bridging the gap between high-performance backends and intuitive user interfaces.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-1 shadow-lg backdrop-blur-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-white/30 rounded-full"></span>
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center gap-2 text-white/80 hover:text-white transition-all text-left"
                >
                  <span className="w-0 h-0.5 bg-white transition-all group-hover:w-2"></span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-white/30 rounded-full"></span>
            </h4>
            <div className="space-y-5">
              <a 
                href="mailto:mohammad.ayan9450@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/80 group-hover:text-white">mohammad.ayan9450@gmail.com</span>
              </a>
              <a 
                href="tel:+917905212400"
                className="flex items-center gap-4 group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/80 group-hover:text-white">+91 7905212400</span>
              </a>
              <div className="flex items-center gap-4 pt-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/80 italic">Open for remote opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm font-medium">
              © {currentYear} Mohammad Ayan. Built with precision.
            </p>
            <p className="flex items-center gap-2 text-white/60 text-sm font-medium">
              Designed with <Heart className="w-4 h-4 text-rose-400 animate-pulse" fill="currentColor" /> in React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;