import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Target, User } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Galgotias University",
      grade: "CGPA: 8.36",
      status: "Current",
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      degree: "12th Grade - CBSE Board",
      institution: "The Children's Academy",
      grade: "78.8%",
      status: "Completed",
      icon: <Award className="w-6 h-6 text-secondary" />
    }
  ];

  const highlights = [
    {
      title: "Problem Solver",
      description: "Passionate about solving complex problems through innovative web solutions",
      icon: <Target className="w-8 h-8 text-primary" />
    },
    {
      title: "Team Player",
      description: "Excellent collaboration skills and ability to work effectively in team environments",
      icon: <User className="w-8 h-8 text-secondary" />
    },
    {
      title: "Continuous Learner",
      description: "Always eager to learn new technologies and stay updated with industry trends",
      icon: <GraduationCap className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Mohammad Ayan, a final-year Computer Science student at Galgotias University with a passion 
                for web development. I combine technical expertise with creative problem-solving to build 
                functional and user-friendly web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in modern web technologies and a keen eye for detail, I'm constantly 
                seeking opportunities to apply my skills and grow in the dynamic field of web development.
              </p>
            </div>

            {/* Personal Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-all">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-success/10 text-success'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="card-gradient p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">8.36</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">3+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;