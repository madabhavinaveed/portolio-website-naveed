import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectOts from "@/assets/project-ots.jpg";
import projectOrangebits from "@/assets/project-orangebits.jpg";
import projectCrontech from "@/assets/project-crontech.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectFreelance from "@/assets/project-freelance.jpg";
import projectPunekar from "@/assets/project-punekar.jpg";

const professionalProjects = [
  {
    title: "Oil Well Analytics Dashboard",
    // company: "OTS Consulting Services (ChampionX)",
    description:
      "Built responsive dashboards with interactive charts to track alarms, downtime, and historical oil well data. Cut memory usage from 1GB to under 400MB and eliminated 80% of security vulnerabilities.",
    image: projectOts,
    tags: ["React", "Charts", "Performance", "Security"],
  },
  {
    title: "Admin & Trading Platform",
    company: "Orangebits Software Technologies",
    description:
      "Led development of an admin dashboard managing 10,000+ users and tracking over 1 million trades in real-time. Standardized UI components and reduced build times by 10%.",
    image: projectOrangebits,
    tags: ["React", "Real-time", "UI/UX", "ADA"],
  },
  {
    title: "Crypto Trading & ICO Platform",
    company: "Crontech LLC",
    description:
      "One of the first five engineers — built crypto trading apps with real-time WebSocket updates for 1M+ live connections. Designed secure KYC/payment flows with light/dark theme support.",
    image: projectCrontech,
    tags: ["WebSocket", "Crypto", "Security", "KYC"],
  },
];

const personalProjects = [
  {
    title: "Personal Portfolio Website",
    company: undefined,
    description:
      "Built this portfolio site to explore microfrontends, with plans to integrate Angular and Vue as part of a microfrontend architecture course.",
    image: projectPortfolio,
    tags: ["Microfrontends", "React", "Portfolio"],
    link: "https://naveedmadabhavi.com",
  },
  {
    title: "Freelance Development",
    company: "Fiverr & Upwork",
    description:
      "Earned the Top Rated Seller badge on Fiverr building responsive web applications. Delivered React and Angular solutions with clean code and fast turnaround.",
    image: projectFreelance,
    tags: ["Fiverr", "React", "Angular", "Freelance"],
  },
  {
    title: "Being Punekar",
    company: "Co-founder | 9M+ Followers",
    description:
      "Co-founded a social media brand on Facebook & Instagram celebrating Pune's culture, food, and city life, growing to over 9 million followers.",
    image: projectPunekar,
    tags: ["Social Media", "Branding", "9M+ Followers"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-section">
      <div className="max-w-6xl mx-auto">
        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            → of the professional kind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            → of the personal kind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
