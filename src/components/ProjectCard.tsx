import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company?: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  link?: string;
}

const ProjectCard = ({
  title,
  company,
  description,
  image,
  tags,
  index,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="card-glass rounded-xl overflow-hidden group transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground font-medium text-sm"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        {company && (
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {company}
          </span>
        )}
        <h3 className="text-lg font-bold text-card-foreground mt-1 mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
