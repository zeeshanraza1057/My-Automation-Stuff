import { motion } from "framer-motion";
import contactInfo from "../Config/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Smart Printers
      </motion.h2>

      <motion.form
        action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
        method="POST"
        target="_blank"
        className="bg-white p-8 rounded shadow space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <input
          name="entry.1111111111"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded"
        />

        <input
          name="entry.2222222222"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded"
        />

        <input
          name="entry.3333333333"
          placeholder="Your Phone"
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="entry.4444444444"
          placeholder="Your Message"
          required
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      <div className="text-center mt-10 space-y-2">
        <p>📞 {contactInfo.phone}</p>
        <p>📧 {contactInfo.email}</p>
        <p>📍 {contactInfo.address}</p>
      </div>
    </section>
  );
}
