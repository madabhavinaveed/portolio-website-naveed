import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  category: string;
  badge?: string;
}

const skills: Skill[] = [
  // Design
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Design",
  },
  {
    name: "Sketch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    category: "Design",
  },

  // Frontend Frameworks
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frameworks",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    category: "Frameworks",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frameworks",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    category: "Frameworks",
  },

  // UI Libraries
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "UI Libraries",
  },
  {
    name: "Angular Material",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularmaterial/angularmaterial-original.svg",
    category: "UI Libraries",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "UI Libraries",
  },

  // Core
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Core",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Core",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Core",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Core",
  },

  // Charting
  {
    name: "Recharts",
    icon: "https://recharts.org/favicon.ico",
    category: "Charting",
  },
  {
    name: "TradingView",
    icon: "https://www.tradingview.com/static/images/favicon.ico",
    category: "Charting",
  },
  {
    name: "Highcharts",
    icon: "https://www.highcharts.com/media/templates/developer.highcharts.com/img/favicon.ico",
    category: "Charting",
  },
  {
    name: "amCharts",
    icon: "https://www.amcharts.com/wp-content/themes/flavor/favicon.ico",
    category: "Charting",
  },
  {
    name: "D3.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
    category: "Charting",
  },

  // AI Tools
  {
    name: "GitHub Copilot",
    icon: "https://github.githubassets.com/favicons/favicon-dark.svg",
    category: "AI Tools",
  },
  {
    name: "ChatGPT",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    category: "AI Tools",
  },
  // {
  //   name: "Lovable",
  //   icon: "https://lovable.dev/favicon.ico",
  //   category: "AI Tools",
  // },
  // {
  //   name: "LLMs",
  //   icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
  //   category: "AI Tools",
  //   badge: "Learning",
  // },
];

const categories = [
  "Core",
  "Frameworks",
  "UI Libraries",
  "Design",
  "Charting",
  "AI Tools",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-skills-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-skills-title">
          Skills & Technologies
        </h2>
        <p className="text-center text-skills-subtitle mb-12">
          Tools and technologies I've worked with over the years
        </p>

        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category} className="mb-10">
              <h3 className="text-lg font-semibold text-skills-category mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-skill-card hover:bg-skill-card-hover border border-skill-border hover:border-skill-border-hover transition-all duration-300 hover:shadow-skill cursor-default"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 invert opacity-80"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-skill-name text-center leading-tight">
                      {skill.name}
                    </span>
                    {skill.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-skills-category/20 text-skills-category font-medium">
                        {skill.badge}
                      </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
