import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const projectMeta: Record<
  string,
  { url: string; techStack: string[] }
> = {
  "pro-traders": {
    url: "https://app.protradersfund.com/",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST API"],
  },
  "btc-proxy": {
    url: "https://btcproxy.io/",
    techStack: [
      "React",
      "TypeScript",
      "Ethers.js",
      "Web3.js",
      "Solidity",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  energy: {
    url: "",
    techStack: ["React", "TypeScript", "CMS Integration", "SCSS", "REST API"],
  },
  pbm: {
    url: "",
    techStack: [
      "React",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "GraphQL",
      "Jest",
    ],
  },
  bitcron: {
    url: "https://bitcron.com",
    techStack: [
      "Vue.js",
      "JavaScript",
      "WebSocket",
      "Vuex",
      "Tailwind CSS",
      "REST APIs",
      "AngularJS",
      "Node.js",
    ],
  },
  ecommerce: {
    url: "",
    techStack: [
      "Shopify",
      "OpenCart",
      "AngularJS",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
    ],
  },
  thread: {
    url: "",
    techStack: ["Vue.js", "JavaScript", "Vuex", "Tailwind CSS", "REST APIs"],
  },
  uniswap: {
    url: "",
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "The Graph",
      "Web3.js",
      "Tailwind CSS",
    ],
  },
};

const SelectedProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="projects"
      className="page-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="section-heading">
        <h2>{t.projects.title}</h2>
      </div>
      <p className="section-subtitle" style={{ marginBottom: "var(--space-3)" }}>
        {t.projects.subtitle}
      </p>
      <div className="project-grid">
        {t.projects.items.map((project) => {
          const meta = projectMeta[project.id] ?? { url: "", techStack: [] };
          return (
            <article key={project.id} className="project-card">
              <p className="project-meta">{project.role}</p>
              <h3>
                {meta.url ? (
                  <a
                    href={meta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p>{project.description}</p>
              <h4 className="eyebrow" style={{ marginTop: "0.5rem" }}>
                {t.projects.responsibilities}
              </h4>
              <ul className="detail-list">
                {project.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="project-tags">
                {meta.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {meta.url && (
                <a
                  className="project-link"
                  href={meta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.visitSite}
                </a>
              )}
            </article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default SelectedProjectsSection;
