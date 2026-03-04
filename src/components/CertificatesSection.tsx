import { motion } from "framer-motion";
import { Award, FileDown } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  type: string;
}

const certificates: Certificate[] = [
  { title: "Football Tournament – Winner", issuer: "School District", type: "Sports" },
  { title: "Badminton Championship", issuer: "Inter-School", type: "Sports" },
  { title: "Sports Day – Overall Champion", issuer: "School", type: "Sports" },
  { title: "Athletic Meet – Outstanding Player", issuer: "District Level", type: "Sports" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const CertificatesSection = () => {
  return (
    <section className="py-20 px-4 bg-section-certs">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Award className="w-8 h-8 text-section-certs-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-skills-title">
            Sports Certificates
          </h2>
        </div>
        <p className="text-center text-skills-subtitle mb-4">
          Achievements from my sports journey
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="/certificates/Naveed_Madabhavi_Sport_Certificates.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-section-certs-accent/20 text-section-certs-accent hover:bg-section-certs-accent/30 transition-colors text-sm font-medium"
          >
            <FileDown className="w-4 h-4" />
            View Full Certificates PDF
          </a>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="group flex flex-col gap-3 p-5 rounded-xl bg-section-card hover:bg-section-card-hover border border-section-border hover:border-section-certs-accent transition-all duration-300 hover:shadow-skill cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-section-certs-accent/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-section-certs-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-skills-title leading-tight">{cert.title}</h4>
                  <p className="text-[11px] text-skills-subtitle mt-1">{cert.issuer}</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-section-certs-accent/20 text-section-certs-accent font-medium self-start">
                {cert.type}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
