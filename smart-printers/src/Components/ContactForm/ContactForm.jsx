import { motion } from "framer-motion";
import contactInfo from "../../Config/contact.js";
import { fadeInUp, fadeIn, buttonHover } from "../../Animations/motion.js";
import styles from "./ContactForm.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      {/* Section Heading */}
      <motion.h2
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
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <input
          name="entry.1111111111"
          placeholder="Your Name"
          required
        />
        <input
          name="entry.2222222222"
          type="email"
          placeholder="Your Email"
          required
        />
        <input
          name="entry.3333333333"
          placeholder="Your Phone"
          required
        />
        <textarea
          name="entry.4444444444"
          placeholder="Your Message"
          required
        />

        <motion.button
          type="submit"
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className={styles.contactInfo}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>📞 {contactInfo.phone}</p>
        <p>📧 {contactInfo.email}</p>
        <p>📍 {contactInfo.address}</p>
      </motion.div>
    </section>
  );
}
