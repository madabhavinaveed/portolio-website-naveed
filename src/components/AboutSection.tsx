import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      className="page-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="section-heading">
        <h2>{t.about.title}</h2>
      </div>
      <div className="about-prose">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
        <p>{t.about.p4}</p>
        <p>
          {t.about.p5Before}{" "}
          <a
            className="project-link"
            href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline", marginTop: 0 }}
          >
            {t.about.cvLink}
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
