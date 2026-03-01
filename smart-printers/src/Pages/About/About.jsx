import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp, fadeIn } from "../../Animations/motion";
import styles from "./About.module.scss";

export default function About() {
  const [years, setYears] = useState(0);

  useEffect(() => {
    let count = 0;
    const target = 15; // 15+ Years
    const interval = setInterval(() => {
      count += 1;
      setYears(count);
      if (count >= target) clearInterval(interval);
    }, 100);
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        About Smart Printers
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Smart Printers has been providing professional printing, graphic design, and advertising solutions worldwide for over 15 years.
        We focus on startups, corporates, and reputed companies to deliver premium quality services.
      </motion.p>

      {/* Years Counter */}
      <motion.div
        className={styles.yearsCounter}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {years}+
      </motion.div>
      <p className={styles.yearsLabel}>Years of Excellence</p>
    </section>
  );
}
