import { motion } from "framer-motion";

interface Project {
  name: string;
  url: string;
  role: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    name: "Pro Traders Fund",
    url: "https://app.protradersfund.com/",
    role: "Frontend Developer",
    description:
      "A proprietary trading firm platform offering instant funding to traders with evaluation challenges, profit tracking, and up to 90% profit sharing.",
    responsibilities: [
      "Developed the trader evaluation dashboard with real-time profit/loss tracking and analytics",
      "Built account management features including payout processing and challenge progress tracking",
      "Created responsive landing pages with dynamic testimonial sections and conversion-optimized CTAs",
      "Integrated third-party trading APIs for live account monitoring and trade history display",
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST API"],
  },
  {
    name: "BTC Proxy",
    url: "https://btcproxy.io/",
    role: "Full Stack Developer",
    description:
      "A Bitcoin staking and AI-leveraged yield protocol enabling users to earn yield on their BTC holdings through smart contract interactions.",
    responsibilities: [
      "Developed the DApp interface for Bitcoin staking, unstaking, and yield tracking",
      "Integrated Web3 wallet connections (MetaMask, WalletConnect) and smart contract interactions",
      "Built the Alpha BTC yield dashboard displaying real-time APY, staking metrics, and portfolio performance",
      "Created marketing landing pages that helped establish trust with major global crypto brands",
    ],
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
  {
    name: "Energy Industry Client",
    url: "",
    role: "Senior Software Developer",
    description:
      "Corporate website for a major global leader in chemistry and technology solutions for the energy industry.",
    responsibilities: [
      "Built easy charts to track past data, alarms, and oil well downtime, plus tables you can drag, sort, and resize",
      "Eliminated 60%–70% of high/medium Checkmarx security risks for the app",
      "Optimized charting libraries, cutting usage from 1GB to 300–400MB for large data sets",
      "Reduced technical debt by 10% by simplifying complex data API calls",
      "Mentored juniors and collaborated with design and backend team members",
    ],
    techStack: ["React", "TypeScript", "CMS Integration", "SCSS", "REST API"],
  },
  {
    name: "Pharmacy Benefit Manager Platform",
    url: "",
    role: "Senior Frontend Developer",
    description:
      "A Pharmacy Benefit Manager (PBM) platform revolutionizing Rx solutions for health systems, employers, and PBMs with modular enterprise tools.",
    responsibilities: [
      "Developed modular UI components for the Enterprise platform serving PBMs, health systems, and employers",
      "Built interactive analytics dashboards and case study pages with data visualization",
      "Ensured HIPAA-aware frontend practices and accessibility standards (WCAG 2.1 AA) compliance",
      "Collaborated with backend teams to integrate complex prescription and benefits data flows",
    ],
    techStack: [
      "React",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "GraphQL",
      "Jest",
    ],
  },
  {
    name: "BitCron",
    url: "https://bitcron.com",
    role: "Full Stack Developer",
    description:
      "Founded in 2018, BitCron is a multi-cryptocurrency wallet platform that allows users to securely store, send, and receive digital assets. The platform supports 50+ cryptocurrencies and provides a seamless wallet experience with real-time transaction tracking and secure asset management.",
    responsibilities: [
      "Developed the web dashboard for the BitCron multi-cryptocurrency wallet using Vue.js",
      "Implemented wallet management features including balance tracking, transaction history, and secure send/receive flows",
      "Integrated real-time blockchain transaction updates and notifications using WebSocket services",
      "Built responsive UI components for managing and monitoring over 50 supported cryptocurrencies",
    ],
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
  {
    name: "E-commerce Platforms",
    url: "",
    role: "Frontend Developer",
    description:
      "Developed and customized multiple e-commerce websites for clients including M2 Apparel and Hoffner using OpenCart and Shopify. These platforms enabled businesses to sell clothing and household utensils online with responsive storefronts, product catalogs, and secure checkout systems.",
    responsibilities: [
      "Built and customized OpenCart and Shopify storefronts for client e-commerce businesses",
      "Developed responsive product listing, product detail, and checkout pages",
      "Integrated payment gateways, shipping modules, and order management systems",
      "Implemented product catalog management, filtering, and SEO-friendly page structures",
    ],
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
  {
    name: "Thread Research",
    url: "",
    role: "Senior Frontend Developer",
    description:
      "Thread Research is a clinical research platform that connects participants with medical studies and trials. The platform streamlines participant onboarding, eligibility screening, and study engagement through secure digital workflows.",
    responsibilities: [
      "Developed the participant-facing web application for clinical trial enrollment and study participation using Vue.js",
      "Implemented participant profile management, eligibility questionnaires, and onboarding workflows",
      "Built dashboards for participants to track study progress, appointments, and study communications",
      "Integrated REST APIs for participant data, consent forms, and study updates",
    ],
    techStack: ["Vue.js", "JavaScript", "Vuex", "Tailwind CSS", "REST APIs"],
  },
  {
    name: "Uniswap Clone",
    url: "",
    role: "Frontend Developer (Web3)",
    description:
      "A decentralized exchange interface inspired by Uniswap enabling token swaps and liquidity pool tracking using blockchain data.",
    responsibilities: [
      "Redesigned the application UI to improve usability and trading workflow",
      "Integrated The Graph to fetch real-time liquidity pool and token data from subgraphs",
      "Displayed pool values, token prices, and trading metrics within the dashboard",
      "Optimized state management using Redux for scalable data handling",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "The Graph",
      "Web3.js",
      "Tailwind CSS",
    ],
  },
];

const SelectedProjectsSection = () => {
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
        <h2>Projects</h2>
      </div>
      <p className="section-subtitle" style={{ marginBottom: "var(--space-3)" }}>
        A curated selection of production applications I’ve built and
        contributed to throughout my career.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <p className="project-meta">{project.role}</p>
            <h3>
              {project.url ? (
                <a
                  href={project.url}
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
              Key responsibilities
            </h4>
            <ul className="detail-list">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="project-tags">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.url && (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site →
              </a>
            )}
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default SelectedProjectsSection;
