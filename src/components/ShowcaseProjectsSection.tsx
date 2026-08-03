import { motion } from "framer-motion";
import projectOts from "@/assets/project-ots.jpg";
import projectOrangebits from "@/assets/project-orangebits.jpg";
import projectCrontech from "@/assets/project-crontech.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectFreelance from "@/assets/project-freelance.jpg";
import projectPunekar from "@/assets/project-punekar.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const professionalMeta = [
  {
    id: "oil-well",
    image: projectOts,
    tags: ["React", "Charts", "Performance", "Security"],
  },
  {
    id: "admin-trading",
    image: projectOrangebits,
    tags: ["React", "Real-time", "UI/UX", "ADA"],
  },
  {
    id: "crypto-trading",
    image: projectCrontech,
    tags: ["WebSocket", "Crypto", "Security", "KYC"],
  },
] as const;

const personalMeta = [
  {
    id: "portfolio",
    image: projectPortfolio,
    tags: ["Microfrontends", "React", "Portfolio"],
    link: "https://naveedmadabhavi.com",
  },
  {
    id: "punekar",
    image: projectPunekar,
    tags: ["Social Media", "Branding", "9M+ Followers"],
  },
  {
    id: "freelance",
    image: projectFreelance,
    tags: ["Fiverr", "React", "Angular", "Freelance"],
  },
] as const;

const ShowcaseProjectsSection = () => {
  const { t } = useLanguage();

  const professionalProjects = professionalMeta.map((meta) => {
    const copy = t.showcase.professional.find((p) => p.id === meta.id)!;
    return { ...meta, ...copy };
  });

  const personalProjects = personalMeta.map((meta) => {
    const copy = t.showcase.personal.find((p) => p.id === meta.id)!;
    return { ...meta, ...copy };
  });

  return (
    <>
      <ProjectGroup
        id="professional"
        title={t.showcase.professionalTitle}
        subtitle={t.showcase.professionalSubtitle}
        projects={professionalProjects}
        columns={3}
      />
      <ProjectGroup
        id="personal"
        title={t.showcase.personalTitle}
        subtitle={t.showcase.personalSubtitle}
        projects={personalProjects}
        columns={2}
      />
    </>
  );
};

type ShowcaseItem = {
  id: string;
  title: string;
  company?: string;
  description: string;
  image: string;
  tags: readonly string[];
  link?: string;
};

const ProjectGroup = ({
  id,
  title,
  subtitle,
  projects,
  columns = 3,
}: {
  id: string;
  title: string;
  subtitle: string;
  projects: ShowcaseItem[];
  columns?: 2 | 3;
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
    <div
      className={`media-grid ${columns === 2 ? "media-grid--two" : "media-grid--three"}`}
    >
      {projects.map((project) => (
        <article key={project.id} className="media-card">
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
            <div className="media-card-footer">
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  </motion.section>
);

export default ShowcaseProjectsSection;
