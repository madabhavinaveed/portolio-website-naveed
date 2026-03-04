import { motion } from "framer-motion";

interface Book {
  title: string;
  author: string;
  cover: string;
  genre: string;
}

const books: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    genre: "Programming",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
    genre: "Psychology",
  },
  {
    title: "The Discovery of India",
    author: "Jawaharlal Nehru",
    cover: "https://covers.openlibrary.org/b/id/15133613-L.jpg",
    genre: "History / Philosophy",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BooksSection = () => {
  return (
    <section className="py-20 px-4 bg-section-books">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-skills-title">
          Books I've Read
        </h2>
        <p className="text-center text-skills-subtitle mb-12">
          Books that shaped my thinking and career
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {books.map((book) => (
            <motion.div
              key={book.title}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-section-card hover:bg-section-card-hover border border-section-border hover:border-section-accent transition-all duration-300 hover:shadow-skill cursor-default justify-center mx-auto max-w-6xl"
            >
              <div className="w-full aspect-[2/3] rounded-lg overflow-hidden bg-skills-bg">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h4 className="text-xs font-semibold text-skills-title leading-tight">
                  {book.title}
                </h4>
                <p className="text-[10px] text-skills-subtitle mt-0.5">
                  {book.author}
                </p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-section-accent/20 text-section-accent font-medium">
                {book.genre}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BooksSection;
