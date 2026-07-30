import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skyftImg from "@/assets/Skyft.jpg";
import worldBetImg from "@/assets/world bet.jpg";

interface ICOProject {
  name: string;
  image: string;
  description: string;
}

const icoProjects: ICOProject[] = [
  {
    name: "SKYFchain",
    image: skyftImg,
    description:
      "Blockchain-based operating platform for cargo robotics — ICO token sale dashboard with multi-language support",
  },
  {
    name: "WorldBet",
    image: worldBetImg,
    description:
      "Blockchain-based betting platform with cryptocurrency payments and real-time sports event betting",
  },
];

const IcoPlatformsSection = () => {
  const [selected, setSelected] = useState<ICOProject | null>(null);

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
          <h2>ICO Platforms</h2>
          <p className="section-subtitle">
            Crypto ICO platforms I built back in 2018
          </p>
        </div>
      </div>

      <div className="media-grid">
        {icoProjects.map((project) => (
          <article key={project.name} className="media-card">
            <button
              type="button"
              className="media-card-trigger"
              onClick={() => setSelected(project)}
              aria-label={`View larger image of ${project.name}`}
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
            onClick={() => setSelected(null)}
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
                onClick={() => setSelected(null)}
                aria-label="Close"
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
