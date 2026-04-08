import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Target, User, Rocket, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Galgotias University",
      grade: "CGPA: 8.26",
      status: "Final Semester",
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
      title: "Full-Stack Developer",
      description: "Bridging the gap between robust backend logic and intuitive frontend design.",
      icon: <Rocket className="w-8 h-8 text-primary" />
    },
    {
      title: "Freelance Experienced",
      description: "Proven track record of delivering production-ready solutions to real-world clients.",
      icon: <Briefcase className="w-8 h-8 text-secondary" />
    },
    {
      title: "Continuous Learner",
      description: "Consistently exploring Generative AI and modern cloud architectures.",
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
            Final Year Student & Aspiring Full-Stack Engineer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-3xl shadow-sm border border-primary/5">
              <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm <b>Mohammad Ayan</b>, currently in my final semester of Computer Science Engineering at Galgotias University. 
                My focus lies at the intersection of <b>MERN stack</b> development and <b>Cloud Infrastructure</b>. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past year, I've transitioned from academic projects to professional freelance delivery, 
                specializing in secure, data-driven applications. I thrive in environments that challenge me 
                to solve complex logic problems while maintaining a clean, user-centric aesthetic.
              </p>
            </div>

            {/* Personal Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-all group">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
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

          {/* Education & Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="card-hover border-0 shadow-lg bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                            <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold ${
                              edu.status === 'Final Semester' 
                                ? 'bg-primary/10 text-primary border border-primary/20' 
                                : 'bg-green-500/10 text-green-600 border border-green-500/20'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-2 text-sm">{edu.institution}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">8.26</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Current CGPA</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Live Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;