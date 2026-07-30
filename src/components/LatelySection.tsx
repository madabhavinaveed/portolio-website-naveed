import { motion } from "framer-motion";

const items = [
  {
    title: "Ongoing Learning & Courses",
    description:
      "I'm currently taking a Udemy course on Microfrontend Architecture to strengthen my skills in building scalable, modular frontend apps.",
  },
  {
    title: "Languages",
    description:
      "I am fluent in English and Hindi, my mother tongue, and I am also fluent in German at the B1/B2 level. I would love to learn Arabic in the future.",
  },
];

const LatelySection = () => {
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
        <h2>What I am upto lately?</h2>
      </div>
      <p className="section-subtitle">
        I enjoy coding in my free time. Whether it's taking online courses,
        taking freelance work to better understand the industry, or attending
        conferences, I'm always looking for ways to learn and improve.
      </p>
      <div className="lately-list">
        {items.map((item) => (
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
