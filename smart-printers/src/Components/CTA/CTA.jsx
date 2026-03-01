import { motion } from "framer-motion";
import contactInfo from "../../Config/contact";
import { fadeInUp, buttonHover } from "../../Animations/motion";
import styles from "./CTA.module.scss"; // import SCSS module

export default function CTA() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Ready to Grow Your Business?
      </motion.h2>

      <motion.p
        className={styles.text}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Contact Smart Printers today for professional printing, graphic design, and advertising solutions. We deliver premium quality services for startups, corporates, and reputed companies worldwide.
      </motion.p>

      <div className={styles.buttonGroup}>
        <motion.a
          href={`tel:${contactInfo.phone}`}
          className={`${styles.button} ${styles.call}`}
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
        >
          Call Now
        </motion.a>

        <motion.a
          href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
          target="_blank"
          className={`${styles.button} ${styles.whatsapp}`}
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
        >
          WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
