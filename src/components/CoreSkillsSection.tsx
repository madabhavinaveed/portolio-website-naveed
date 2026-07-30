import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "GraphQL",
  "Node.js",
  "WebSockets",
  "Firebase",
  "MySQL",
  "Figma",
  "Highcharts",
  "TradingView",
  "amCharts",
  "Jest",
  "Vite",
  "Webpack",
  "CI/CD",
  "Accessibility (WCAG)",
];

const CoreSkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="page-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="section-heading">
        <h2>Core skills</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default CoreSkillsSection;
