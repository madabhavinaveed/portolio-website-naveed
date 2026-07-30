import { motion } from "framer-motion";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/",
  },
  {
    label: "GitHub",
    href: "https://github.com/madabhavinaveed",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/5216033/naved-madabhavi",
  },
  {
    label: "Email",
    href: "mailto:madabhavinaveed@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="page-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="section-heading">
        <h2>Contact</h2>
      </div>
      <ul className="contact-links">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="cv-link">
        <a
          href="https://www.linkedin.com/in/naveed-madabhavi-0888b22a5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn Profile
        </a>
      </p>
    </motion.section>
  );
};

export default ContactSection;
