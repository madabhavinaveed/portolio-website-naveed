import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "XSPOC Production Optimization",
      description: "Lead frontend development for production optimization project focused on diagnosing anomalies in artificially-lifted wells. Built interactive, data-rich interfaces with advanced visualizations.",
      technologies: ["React.js", "AmCharts 5", "DataTables", "CodeAI", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Healthcare & Clinical Research Platform",
      description: "Developed responsive interfaces for healthcare and clinical research applications with real-time datatables and reporting dashboards.",
      technologies: ["Vue.js", "React.js", "SCSS", "Node.js", ".NET"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Crypto Exchange & Wallet Platform",
      description: "Built secure UI components for crypto exchanges, digital wallets, and ICO platforms including Bitcron with support for 50+ cryptocurrencies.",
      technologies: ["Vue.js", "React.js", "Angular", "Web3", "Smart Contracts"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Platforms (M2 Apparel, Hoffner)",
      description: "Developed and customized e-commerce platforms using WordPress, Shopify, and OpenCart with responsive design and secure checkout flows.",
      technologies: ["WordPress", "Shopify", "OpenCart", "AngularJS", "Java"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const workExperience = [
    {
      company: "OTS Consulting Services LLP",
      position: "Senior Software Developer (Frontend)",
      period: "May 2023 - June 2025",
      description: "Lead frontend development for XSPOC production optimization project. Built interactive interfaces using React.js and advanced visualizations with AmCharts 5. Provided technical leadership and code reviews."
    },
    {
      company: "Orangebits Software Technologies",
      position: "Software Developer",
      period: "Jul 2021 - April 2023",
      description: "Developed responsive interfaces using Vue.js and React.js for healthcare, clinical research, and DeFi applications. Implemented dynamic components and reporting dashboards."
    },
    {
      company: "Crontech LLC",
      position: "Software Engineer",
      period: "Dec 2018 - Jun 2021",
      description: "Built frontend interfaces for crypto exchanges, wallets, and ICO platforms. Created secure UI components for blockchain-based applications with multi-currency support."
    },
    {
      company: "PRCV Soft",
      position: "Junior Software Engineer", 
      period: "July 2016 - Nov 2018",
      description: "Developed e-commerce platforms using WordPress, Shopify, and OpenCart. Built BoloCab ride-booking platform using AngularJS with real-time booking features."
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