import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
  // {
  //   name: "Apex Markets",
  //   url: "https://app.apexmarkets.io/",
  //   role: "Full Stack Developer",
  //   description:
  //     "A multi-asset trading platform for Stocks, CFDs, Crypto, and Commodities with enterprise-grade security and compliance.",
  //   responsibilities: [
  //     "Built the secure trading platform frontend with DDoS protection awareness and PCI DSS compliant payment flows",
  //     "Developed multi-asset portfolio views supporting Stocks, CFDs, Crypto, and Commodities",
  //     "Integrated multiple payment gateways including Visa, Mastercard, Wire Transfer, and Bitcoin",
  //     "Implemented real-time customer support chat and order execution monitoring system",
  //   ],
  //   techStack: [
  //     "React",
  //     "TypeScript",
  //     "Next.js",
  //     "PostgreSQL",
  //     "Tailwind CSS",
  //     "Socket.io",
  //   ],
  // },
  {
    name: "BTC Proxy",
    url: "https://btcproxy.io/",
    role: "Frontend Developer (Web3)",
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
    ],
  },
  {
    name: "Energy Industry Client",
    url: "",
    role: "Senior Frontend Developer",
    description:
      "Corporate website for a major global leader in chemistry and technology solutions for the energy industry,",
    responsibilities: [
      "Contributed to the enterprise-grade corporate website with multi-region content support",
      "Built product catalog pages and interactive solutions showcase with filtering capabilities",
      "Implemented responsive design ensuring accessibility for a diverse global audience",
      "Developed CMS integration enabling marketing teams to independently manage content",
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
    url: "https://botcron.com",
    role: "Senior Frontend Developer",
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
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--skills-bg))]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--skills-title))] mb-4">
            Projects
          </h2>
          <p className="text-lg text-[hsl(var(--skills-subtitle))] max-w-2xl mx-auto">
            A curated selection of production applications I’ve built and
            contributed to throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const content = (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block rounded-xl border border-[hsl(var(--skill-border))] bg-[hsl(var(--skill-card-bg))] p-6 hover:border-[hsl(var(--skill-border-hover))] hover:bg-[hsl(var(--skill-card-hover))] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[hsl(var(--skills-title))] group-hover:text-[hsl(var(--skills-category))] transition-colors">
                    {project.name}
                  </h3>
                  {project.url && (
                    <ExternalLink className="w-4 h-4 text-[hsl(var(--skills-subtitle))] group-hover:text-[hsl(var(--skills-category))] transition-colors mt-1 shrink-0" />
                  )}
                </div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(var(--skills-category)/0.15)] text-[hsl(var(--skills-category))] mb-3">
                  {project.role}
                </span>
                <p className="text-sm text-[hsl(var(--skills-subtitle))] mb-4">
                  {project.description}
                </p>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--skills-category))] mb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 mb-4">
                  {project.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[hsl(var(--skill-name))]"
                    >
                      <span className="text-[hsl(var(--skills-category))] mt-1 shrink-0">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full border border-[hsl(var(--skill-border))] text-[hsl(var(--skills-subtitle))] bg-[hsl(var(--skills-bg))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );

            return project.url ? (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
                className="block"
              >
                {content}
              </motion.a>
            ) : (
              <div key={project.name}>{content}</div> // Just render as a div if no URL
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
