import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      className="intro"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <img
        src={profilePhoto}
        alt="Naveed Madabhavi"
        className="avatar"
        width={120}
        height={120}
      />
      <div>
        <p className="eyebrow">{t.intro.role}</p>
        <h1 className="page-title">Naveed Madabhavi</h1>
        <p className="tagline">{t.intro.tagline}</p>
      </div>
    </motion.section>
  );
};

export default IntroSection;
