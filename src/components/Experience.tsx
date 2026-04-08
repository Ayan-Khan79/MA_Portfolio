import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

const Experience = () => {
  const internship = {
    company: "Techplement",
    position: "Web Development Intern",
    duration: "Nov 1 – Nov 30, 2024",
    type: "Internship",
    certificate: "https://drive.google.com/file/d/1W0fYKBmsSeZMhQ8qPe4JzOljQPqdsaoR/view?usp=sharing",
    responsibilities: [
      "Optimized database queries for faster data retrieval, improving application performance by 30%",
      "Implemented API optimizations to reduce response times and enhance user experience",
      "Collaborated with development team to deliver high-quality web solutions",
      "Gained hands-on experience with production-level web development practices"
    ]
  };

  const training = {
    company: "Capgemini",
    position: "Analyst Trainee (Sogeti)",
    duration: "Jan 2026 – Present",
    type: "Corporate Training"
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gaining valuable industry experience through hands-on projects and professional training
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Main Internship - FULL DETAIL KEPT AS IS */}
          <Card className="card-hover border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">{internship.company}</h3>
                    </div>
                    <p className="text-xl font-semibold text-white/90">{internship.position}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{internship.duration}</span>
                    </div>
                    <span className="text-sm bg-secondary/20 text-white px-3 py-1 rounded-full">
                      {internship.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities & Achievements</h4>
                <div className="space-y-4">
                  {internship.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="default" className="bg-primary hover:bg-primary/90" asChild>
                    <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <h5 className="font-semibold text-foreground mb-3">Technologies & Skills Applied</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Database Optimization', 'API Development', 'Performance Tuning', 'Team Collaboration', 'Web Development'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capgemini Training - SUBTLE & SHORT */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border border-dashed border-muted-foreground/30 bg-muted/10 opacity-80">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-200 text-slate-600">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{training.company}</h4>
                <p className="text-sm text-muted-foreground">{training.position}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-sm font-medium text-foreground">{training.duration}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{training.type}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;