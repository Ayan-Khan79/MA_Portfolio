import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Server, Zap, ShieldCheck, Smartphone, BrainCircuit, BarChart3, Binary } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8 text-primary" />,
      skills: [
        { name: "React.js & Hooks", level: 85 },
        { name: "Tailwind CSS & Shadcn", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    {
      title: "Backend & Cloud", 
      icon: <Server className="w-8 h-8 text-secondary" />,
      skills: [
        { name: "Node.js & Express", level: 80 },
        { name: "Firebase (Auth/Store)", level: 85 },
        { name: "RESTful APIs", level: 85 },
        { name: "JWT Authentication", level: 80 }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <BrainCircuit className="w-8 h-8 text-accent" />,
      skills: [
        { name: "Python (NumPy/Pandas)", level: 80 },
        { name: "Machine Learning Algos", level: 75 },
        { name: "Matplotlib & Seaborn", level: 85 },
        { name: "Deep Learning Basics", level: 65 }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: [
        { name: "PostgreSQL & NoSQL", level: 75 },
        { name: "Git & Version Control", level: 90 },
        { name: "Deployment (Vercel/Render)", level: 85 },
        { name: "Cloud Infrastructure", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Data Visualization", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "OTP Authentication", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Predictive Modeling", icon: <Binary className="w-5 h-5" /> },
    { name: "Real-time Sync", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining Full-Stack expertise with Data Science to build 
            intelligent, data-driven applications.
          </p>
        </div>

        {/* Technical Skills Grid - Updated to 2x2 for 4 categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="card-hover bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-3 text-primary">
                  {skill.icon}
                </div>
                <p className="font-medium text-foreground text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;