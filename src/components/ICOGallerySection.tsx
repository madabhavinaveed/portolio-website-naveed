import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

const ICOGallerySection = () => {
  const [selected, setSelected] = useState<ICOProject | null>(null);

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
            ICO Platforms
          </h2>
          <p className="text-lg text-[hsl(var(--skills-subtitle))] max-w-2xl mx-auto">
            Crypto ICO platforms I built back in 2018
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {icoProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-xl border border-[hsl(var(--skill-border))] bg-[hsl(var(--skill-card-bg))] overflow-hidden hover:border-[hsl(var(--skill-border-hover))] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[hsl(var(--skills-title))] mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-[hsl(var(--skills-subtitle))]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-center text-white/90 mt-3 text-lg font-semibold">
                {selected.name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ICOGallerySection;
