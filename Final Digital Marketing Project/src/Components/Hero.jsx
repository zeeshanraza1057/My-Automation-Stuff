import { motion } from "framer-motion";
import { useState } from "react";
import enContent from "../content/en";
import urContent from "../content/ur";
import contactInfo from "../config/contact";

export default function Hero() {
  const [lang, setLang] = useState("en");
  const content = lang === "en" ? enContent.hero : urContent.hero;

  return (
    <section className="hero min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {content.title}
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {content.subtitle}
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href={`tel:${contactInfo.phone}`}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          {lang === "en" ? "Call Now" : "کال کریں"}
        </a>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
          target="_blank"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
        </a>
      </motion.div>

      <button
        onClick={() => setLang(lang === "en" ? "ur" : "en")}
        className="mt-6 underline text-sm text-gray-700"
      >
        {lang === "en" ? "اردو میں دیکھیں" : "View in English"}
      </button>
    </section>
  );
}
