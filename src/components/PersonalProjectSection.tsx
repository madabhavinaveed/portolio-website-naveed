import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "This Website",
      description: "I created this website in an effort to learn how React, Gatsby, and Netlify works. It's been a fun ride to learn new stuff.",
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
      company: "This Website",
      position: "Senior Software Developer (Frontend)",
      period: "May 2023 - June 2025",
      description: "I built this site to explore React, Gatsby, and Netlify, and plan to integrate Angular and Vue as part of my microfrontend course."  },
    {
      company: "Ongoing Learning & Courses",
      position: "Software Developer",
      period: "Jul 2021 - April 2023",
      description: "I'm currently taking a Udemy course on Microfrontend Architecture to strengthen my skills in building scalable, modular frontend apps."
    },
  ];

  return (
    <section className="blue-section py-20 px-6">
      <div className="container mx-auto max-w-6xl">
      {/* Projects Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
          Projects
        </h2>
        <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
          {"-->"} of the personal kind
        </p>
      </div>
  
      {/* Work Experience */}
      <div className="mb-16 animate-scale-in">
        <div className="section-card bg-card/95 backdrop-blur-sm px-6 py-8">
          {/* <h3 className="text-2xl font-semibold text-card-foreground text-center mb-6">
            Professional Experience
          </h3> */}
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          I enjoy to code on my free time. Whether it is following a course to learn something new, or to create something fun and even sometimes useful.</p>
  
          {/* Work cards in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-4 border-none pl-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  {/* <h4 className="text-lg font-semibold text-card-foreground">
                    {job.position}
                  </h4> */}
                  {/* <Badge variant="secondary" className="w-fit mt-2 md:mt-0"> 
                    {job.period}
                  </Badge> */}
                </div>
                <p className="font-medium text-primary mb-1">{job.company}</p>
                <p className="text-muted-foreground text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default ProjectsSection;