import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Badminton from "./../assets/images/badminton.jpg";
import Football from "./../assets/images/Football.jpg";

interface Sport {
  name: string;
  type: string;
  image: string;
}

const sports: Sport[] = [
  {
    name: "Football",
    type: "Team Sport",
    image: Football,
  },
  { name: "Badminton", type: "Racquet Sport", image: Badminton },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const GamesSection = () => {
  return (
    <section className="py-20 px-4 bg-section-games">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-section-games-accent" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-skills-title">
            Sports I Play
          </h2>
        </div>
        <p className="text-center text-skills-subtitle mb-12">
          Sports that keep me active and competitive
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sports.map((sport) => (
            <motion.div
              key={sport.name}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-section-card hover:bg-section-card-hover border border-section-border hover:border-section-games-accent transition-all duration-300 hover:shadow-skill cursor-default overflow-hidden"
            >
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-skills-title">
                  {sport.name}
                </h4>
                <p className="text-xs text-skills-subtitle mt-1">
                  {sport.type}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GamesSection;
