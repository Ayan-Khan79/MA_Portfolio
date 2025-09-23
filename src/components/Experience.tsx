import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experience = {
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

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gaining valuable industry experience through hands-on projects and optimization work
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">{experience.company}</h3>
                    </div>
                    <p className="text-xl font-semibold text-white/90">{experience.position}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{experience.duration}</span>
                    </div>
                    <span className="text-sm bg-secondary/20 text-white px-3 py-1 rounded-full">
                      {experience.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities & Achievements</h4>
                <div className="space-y-4">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-success" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>

                {/* Certificate Button */}
                <div className="mt-6">
                  <a
                    href={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>

                {/* Skills Applied */}
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

          {/* Timeline Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-muted/50 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Currently seeking new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



// import { Card, CardContent } from '@/components/ui/card';
// import { Building, Calendar, CheckCircle } from 'lucide-react';

// const Experience = () => {
//   const experience = {
//     company: "Techplement",
//     position: "Web Development Intern",
//     duration: "Nov 1 – Nov 30, 2024",
//     type: "Internship",
//     certificate: "/Techplement_Certificate.pdf",
//     responsibilities: [
//       "Optimized database queries for faster data retrieval, improving application performance by 30%",
//       "Implemented API optimizations to reduce response times and enhance user experience",
//       "Collaborated with development team to deliver high-quality web solutions",
//       "Gained hands-on experience with production-level web development practices"
//     ]
//   };

//   return (
//     <section id="experience" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Gaining valuable industry experience through hands-on projects and optimization work
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <Card className="card-hover border-0 shadow-xl overflow-hidden">
//             <CardContent className="p-0">
//               {/* Header */}
//               <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                   <div>
//                     <div className="flex items-center gap-3 mb-2">
//                       <Building className="w-6 h-6" />
//                       <h3 className="text-2xl font-bold">{experience.company}</h3>
//                     </div>
//                     <p className="text-xl font-semibold text-white/90">{experience.position}</p>
//                   </div>
//                   <div className="flex flex-col lg:items-end gap-2">
//                     <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
//                       <Calendar className="w-4 h-4" />
//                       <span className="text-sm font-medium">{experience.duration}</span>
//                     </div>
//                     <span className="text-sm bg-secondary/20 text-white px-3 py-1 rounded-full">
//                       {experience.type}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8">
//                 <h4 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities & Achievements</h4>
//                 <div className="space-y-4">
//                   {experience.responsibilities.map((responsibility, index) => (
//                     <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
//                       <div className="flex-shrink-0 mt-1">
//                         <CheckCircle className="w-5 h-5 text-success" />
//                       </div>
//                       <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Skills Applied */}
//                 <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
//                   <h5 className="font-semibold text-foreground mb-3">Technologies & Skills Applied</h5>
//                   <div className="flex flex-wrap gap-2">
//                     {['Database Optimization', 'API Development', 'Performance Tuning', 'Team Collaboration', 'Web Development'].map((skill) => (
//                       <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Timeline Indicator */}
//           <div className="mt-12 text-center">
//             <div className="inline-flex items-center gap-4 bg-muted/50 rounded-full px-6 py-3">
//               <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium text-muted-foreground">
//                 Currently seeking new opportunities
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;