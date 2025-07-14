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
        <div className="section-card bg-card/95 backdrop-blur-sm">
        <p className="text-muted-foreground">Currently, I work as an app frontend developer at GRID. My team and I are reponsible for maintaining the iOS and Android apps and building new features into it.

Before GRID, I used to work as a frontend developer at Vodafone, the biggest telecommunications company in Europe, where my team and I were in charge of maintaining and developing new features for the online shop.

Before Vodafone, I used to work at a media agency called Parasol Island, where I was able to code various projects for mulitple clients in the consumer goods industry.

Some of the projects I have been a part of during my professional journey as a developer are:</p>

          {/* Grid layout for two columns on medium and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  {/* <h4 className="text-lg font-semibold text-card-foreground">
                    {job.position}
                  </h4> */}
                 
                </div>
                <p className="font-medium text-primary mb-2">{job.company}</p>
                <p className="text-muted-foreground">{job.description}</p>
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