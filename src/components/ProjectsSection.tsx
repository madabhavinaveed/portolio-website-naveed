import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "XSPOC Production Optimization",
      description:
        "Lead frontend development for production optimization project focused on diagnosing anomalies in artificially-lifted wells. Built interactive, data-rich interfaces with advanced visualizations.",
      technologies: [
        "React.js",
        "AmCharts 5",
        "DataTables",
        "CodeAI",
        "REST APIs",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Healthcare & Clinical Research Platform",
      description:
        "Developed responsive interfaces for healthcare and clinical research applications with real-time datatables and reporting dashboards.",
      technologies: ["Vue.js", "React.js", "SCSS", "Node.js", ".NET"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Crypto Exchange & Wallet Platform",
      description:
        "Built secure UI components for crypto exchanges, digital wallets, and ICO platforms including Bitcron with support for 50+ cryptocurrencies.",
      technologies: [
        "Vue.js",
        "React.js",
        "Angular",
        "Web3",
        "Smart Contracts",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "E-commerce Platforms (M2 Apparel, Hoffner)",
      description:
        "Developed and customized e-commerce platforms using WordPress, Shopify, and OpenCart with responsive design and secure checkout flows.",
      technologies: ["WordPress", "Shopify", "OpenCart", "AngularJS", "Java"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const workExperience = [
    {
      company: "OTS Consulting Services LLP (now ChampionX)",
      position: "Senior Software Developer (Frontend)",
      period: "May 2023 - June 2025",
      description:
        "Built responsive dashboards with interactive charts to track alarms, downtime, and historical oil well data. Introduced resizable, sortable tables and cut memory usage of large datasets from 1GB to under 400MB. Led a security effort that eliminated 80% of high/medium-risk vulnerabilities flagged by Checkmarx.",
      link: "https://www.championx.com/",
    },
    {
      company: "Orangebits Software Technologies",
      position: "Software Developer",
      period: "Jul 2021 - April 2023",
      description:
        "Led development of the Business Entity module and was promoted to the Delta team within six months. Built an admin dashboard for managing 10,000+ users and tracking over 1 million trades in real-time. Standardized UI components, reduced build times by 10%, and made the app ADA-compliant. Cross-team collaboration also halved daily meetings.",
      link: "https://www.rxsense.com/",
    },
    {
      company: "Crontech LLC",
      position: "Software Engineer",
      period: "Dec 2018 - Jun 2021",
      description:
        "One of the first five engineers at Crontech, helped build crypto trading apps and ICO platforms. Implemented real-time WebSocket updates for 1M+ live connections, designed secure KYC/payment flows, and revamped the UI with support for light and dark themes.",
    },
    {
      company: "PRCV Soft",
      position: "Junior Software Engineer",
      period: "July 2016 - Nov 2018",
      description:
        "Migrated client web apps from jQuery to AngularJS and Bootstrap, cutting tech debt by 20%. Delivered CMS solutions that automated manual processes, reducing effort for clients by 30%.",
    },
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
        <div className="mb-16 animate-scale-in py-6 ">
          <div className="section-card bg-card/95 backdrop-blur-sm px-6 py-8">
            <div className="text-muted-foreground text-left  mx-auto space-y-2 mb-6">
              <p className="m-0 mt-2">
                I am a Senior Developer with 8 years of experience building
                scalable web applications across both startups and enterprise
                environments.
              </p>
              <p className="m-0 mt-2 py-2">
                At OTS, I led development on the XSPOC product, handling over
                50% of new module features and reducing security risks using
                Checkmarx.
              </p>
              <p className="m-0 mt-2">
                At OrangeBits, I contributed to frontend improvements focused on
                performance and stability for a healthcare tech platform.
              </p>
            </div>
            {/* Work cards in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-4 border-none">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    {/* <h4 className="text-lg font-semibold text-card-foreground">
                    {job.position}
                  </h4> */}
                    {/* <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
                    {job.period}
                  </Badge> */}
                  </div>
                  <p className="font-medium text-primary mb-1">
                    @ {job.company}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {job.description}
                  </p>
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
