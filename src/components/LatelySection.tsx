import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const LatelySection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="lately"
      className="page-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="section-heading">
        <h2>{t.lately.title}</h2>
      </div>
      <p className="section-subtitle">{t.lately.intro}</p>
      <div className="lately-list">
        {t.lately.items.map((item) => (
          <div key={item.title} className="lately-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default LatelySection;
