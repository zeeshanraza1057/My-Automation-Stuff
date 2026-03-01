import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../../Animations/motion";
import styles from "./Portfolio.module.scss";

const portfolioItems = [
  {
    title: "AI-Generated Engineering Exhibition Booth Concept",
    image: "/images/portfolio/portfolio-1.jpg",
  },
  {
    title: "Pakistan Auto Show Stall Design",
    image: "/images/portfolio/portfolio-2.jpg",
  },
  {
    title: "Carrier HVAC Exhibition Booth Design & Build",
    image: "/images/portfolio/portfolio-3.jpg",
  },
  {
    title: "Fashion & Makeup Exhibition Stall Design",
    image: "/images/portfolio/portfolio-4.jpg",
  },
  {
    title: "Auto Parts Exhibition Booth Design Concept",
    image: "/images/portfolio/portfolio-5.jpg",
  },
  {
    title: "Pakistan HVACR Society Exhibition Booth Design",
    image: "/images/portfolio/portfolio-6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolioSection}>
      {/* Heading */}
      <motion.div
        className={styles.header}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>A Portfolio That Speaks for Itself</h2>
        <p>
          Each project is a showcase of our design expertise, creativity,
          craftsmanship, and purposeful execution.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className={styles.grid}
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className={styles.cta}>
        <button>
          See Our Projects →
        </button>
      </div>
    </section>
  );
}
