import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information and forecasts using OpenWeather API.",
      technologies: ["Vue.js", "TypeScript", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by AI, featuring natural language processing and context-aware responses.",
      technologies: ["React", "Python", "OpenAI API", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const workExperience = [
    {
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures."
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained web applications from concept to deployment, working closely with design and product teams."
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      period: "2019 - 2020",
      description: "Developed responsive websites and web applications for various clients across different industries."
    }
  ];

  return (
    <section className="yellow-section py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Projects Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            Projects
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            {"-->"} of the professional kind
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16 animate-scale-in">
          <div className="section-card bg-card/95 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-card-foreground mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-card-foreground">
                      {job.position}
                    </h4>
                    <Badge variant="secondary" className="w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">{job.company}</p>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-semibold text-secondary-foreground mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`shadow-card border-0 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 ${
                  project.featured ? 'bg-gradient-to-br from-card to-primary/5' : 'bg-card'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-card-foreground">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="gradient-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        size="sm" 
                        className="gradient-primary text-primary-foreground hover:shadow-elegant transition-all group"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth group"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;