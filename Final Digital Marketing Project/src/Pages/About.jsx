import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    <section id="about" className="bg-gray-100 py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">About Smart Printers</h2>
      <p className="max-w-3xl mx-auto mb-8">
        Smart Printers has been providing professional printing, graphic design, and advertising solutions worldwide for over 15 years.
        We focus on startups, corporates, and reputed companies to deliver premium quality services.
      </p>

      <motion.div
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {years}+
      </motion.div>
      <p className="text-lg mt-2">Years of Excellence</p>
    </section>
  );
}
