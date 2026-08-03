import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skyftImg from "@/assets/Skyft.jpg";
import worldBetImg from "@/assets/world bet.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const icoMeta = [
  { id: "skyf", image: skyftImg },
  { id: "worldbet", image: worldBetImg },
] as const;

const IcoPlatformsSection = () => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const icoProjects = icoMeta.map((meta) => {
    const copy = t.ico.items.find((p) => p.id === meta.id)!;
    return { ...meta, ...copy };
  });

  const selected = icoProjects.find((p) => p.id === selectedId) ?? null;

  return (
    <motion.section
      id="ico"
      className="page-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="section-heading">
        <div>
          <h2>{t.ico.title}</h2>
          <p className="section-subtitle">{t.ico.subtitle}</p>
        </div>
      </div>

      <div className="media-grid">
        {icoProjects.map((project) => (
          <article key={project.id} className="media-card">
            <button
              type="button"
              className="media-card-trigger"
              onClick={() => setSelectedId(project.id)}
              aria-label={t.ico.viewLarger.replace("{name}", project.name)}
            >
              <img src={project.image} alt={project.name} loading="lazy" />
              <div className="media-card-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setSelectedId(null)}
                aria-label={t.ico.close}
              >
                ×
              </button>
              <img src={selected.image} alt={selected.name} />
              <p className="lightbox-caption">{selected.name}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default IcoPlatformsSection;
