import { motion } from "framer-motion";
import projectOts from "@/assets/project-ots.jpg";
import projectOrangebits from "@/assets/project-orangebits.jpg";
import projectCrontech from "@/assets/project-crontech.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectFreelance from "@/assets/project-freelance.jpg";
import projectPunekar from "@/assets/project-punekar.jpg";

interface ShowcaseProject {
  title: string;
  company?: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const professionalProjects: ShowcaseProject[] = [
  {
    title: "Oil Well Analytics Dashboard",
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

const personalProjects: ShowcaseProject[] = [
  {
    title: "Personal Portfolio Website",
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

const ProjectGroup = ({
  id,
  title,
  subtitle,
  projects,
}: {
  id: string;
  title: string;
  subtitle: string;
  projects: ShowcaseProject[];
}) => (
  <motion.section
    id={id}
    className="page-section"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, margin: "-40px" }}
  >
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
    </div>
    <div className="media-grid">
      {projects.map((project) => (
        <article key={project.title} className="media-card">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="media-card-body">
            {project.company && (
              <p className="project-meta">{project.company}</p>
            )}
            <h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p>{project.description}</p>
            <ul className="project-tags" style={{ marginTop: "0.75rem" }}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </motion.section>
);

const ShowcaseProjectsSection = () => {
  return (
    <>
      <ProjectGroup
        id="professional"
        title="Projects"
        subtitle="→ some more of the professional kind"
        projects={professionalProjects}
      />
      <ProjectGroup
        id="personal"
        title="Projects"
        subtitle="→ of the personal kind"
        projects={personalProjects}
      />
    </>
  );
};

export default ShowcaseProjectsSection;
