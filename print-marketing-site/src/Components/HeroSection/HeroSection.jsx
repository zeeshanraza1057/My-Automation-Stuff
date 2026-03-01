import styles from "./HeroSection.module.scss";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Special Weekly</span>
          <h1>
            You think <br /> We Create
          </h1>
          <button>Shop Now</button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1520974735194-6c9d8c56b6a4"
            alt="Print products"
          />
        </motion.div>

      </div>
    </section>
  );
}
