import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, GitBranch, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8 text-primary" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-8 h-8 text-secondary" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "API Development", level: 85 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8 text-accent" />,
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "pgAdmin", level: 70 },
        { name: "Git/GitHub", level: 80 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Problem Solving", icon: <Code className="w-5 h-5" /> },
    { name: "Version Control", icon: <GitBranch className="w-5 h-5" /> },
    { name: "UI/UX Design", icon: <Palette className="w-5 h-5" /> },
    { name: "Team Collaboration", icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technical skills and expertise gained through academic projects and practical experience
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="skill-bar h-full rounded-full transition-all duration-1000 ease-out"
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

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="card-hover bg-background border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-3">
                  {skill.icon}
                </div>
                <p className="font-medium text-foreground">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Primary Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Git/GitHub'].map((tech) => (
                    <span key={tech} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;