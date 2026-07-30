import { motion } from "framer-motion";

const AboutSection = () => {
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
        <h2>Bio</h2>
      </div>
      <div className="about-prose">
        <p>
          I’m an Indian developer who recently moved to Germany. Programming has
          always been my passion, and I’m dedicated to writing clean, efficient
          code that not only solves problems but also stands the test of time.
        </p>
        <p>
          Beyond coding, I love to travel, read, and immerse myself in the tech
          community. Whether it's attending meet-ups or staying current with the
          latest trends at conferences, I’m constantly learning and evolving.
          Weekends are often spent with friends, enjoying coffee, exploring new
          places, or diving into the latest tech advancements.
        </p>
        <p>
          I also have a special place in my heart for kids and believe that tech
          can play a big role in education and social impact. It's incredible
          how, even from the comfort of our own homes, we as developers can
          contribute to creating a positive difference in society.
        </p>
        <p>
          I feel truly fortunate to be part of a community that is not only
          passionate about technology but also focused on making meaningful
          contributions to the world. I’m excited to continue learning and
          growing while striving to make a lasting impact.
        </p>
        <p>
          If you’d like to learn more about my professional journey, feel free
          to check out my{" "}
          <a
            className="project-link"
            href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline", marginTop: 0 }}
          >
            CV on LinkedIn →
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
