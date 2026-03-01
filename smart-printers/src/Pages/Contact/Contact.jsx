import { motion } from "framer-motion";
import contactInfo from "../../Config/contact";
import { fadeInUp, fadeIn, buttonHover } from "../../Animations/motion";
import styles from "./Contact.module.scss";

export default function ContactPage() {
  return (
    <section id="contact" className={styles.contactSection}>
      {/* Heading */}
      <motion.h2
        className={styles.heading}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Contact Smart Printers
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
        method="POST"
        target="_blank"
        className={styles.form}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <input
          name="entry.1111111111"
          placeholder="Your Name"
          required
          className={styles.input}
        />

        <input
          name="entry.2222222222"
          type="email"
          placeholder="Your Email"
          required
          className={styles.input}
        />

        <input
          name="entry.3333333333"
          placeholder="Your Phone"
          required
          className={styles.input}
        />

        <textarea
          name="entry.4444444444"
          placeholder="Your Message"
          required
          className={styles.textarea}
        />

        <motion.button
          type="submit"
          className={styles.button}
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      {/* <motion.div
        className={styles.contactInfo}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>📞 {contactInfo.phone}</p>
        <p>📧 {contactInfo.email}</p>
        <p>📍 {contactInfo.address}</p>
      </motion.div> */}
    </section>
  );
}
