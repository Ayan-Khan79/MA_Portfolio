import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Clock, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Email",
      value: "mohammad.ayan9450@gmail.com",
      link: "mailto:mohammad.ayan9450@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohammadayan79",
      link: "https://linkedin.com/in/mohammadayan79"
    },
    {
      icon: <Github className="w-6 h-6 text-primary" />,
      label: "GitHub",
      value: "github.com/Ayan-Khan79",
      link: "https://github.com/Ayan-Khan79"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.subject || 'Inquiry: Full-Stack/Data Science Project';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:mohammad.ayan9450@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Opening Email Client",
      description: "Thank you, Mohammad will get back to you shortly!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Available for New Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Exceptional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you have a complex Full-Stack requirement or need a data-driven solution, 
            I'm ready to help you scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-foreground font-medium truncate">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white shadow-sm">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Response Time</h4>
                    <p className="text-sm text-muted-foreground">Usually within 12-24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Based in</h4>
                    <p className="text-sm text-muted-foreground">Uttar Pradesh, India (Remote Ready)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - 3 columns */}
          <Card className="lg:col-span-3 border-0 shadow-2xl rounded-3xl">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send a Brief</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground ml-1">Name</label>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="rounded-xl bg-muted/30 border-none h-12 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground ml-1">Email</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="rounded-xl bg-muted/30 border-none h-12 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground ml-1">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="E.g. Website Development / Data Consultation"
                    className="rounded-xl bg-muted/30 border-none h-12 focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground ml-1">Message</label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project goals..."
                    className="rounded-2xl bg-muted/30 border-none focus-visible:ring-primary resize-none p-4"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-primary-gradient border-0 text-primary-foreground h-14 rounded-2xl font-bold shadow-xl hover:translate-y-[-2px] transition-all"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Launch Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;