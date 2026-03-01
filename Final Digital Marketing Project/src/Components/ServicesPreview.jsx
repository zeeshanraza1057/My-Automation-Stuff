import { motion } from "framer-motion";

const services = [
  {
    title: "Printing Solutions",
    items: [
      "Business Cards Printing",
      "Letterheads & Files",
      "Pamphlets, Flyers & Brochures",
      "Posters & Stickers",
      "Custom Packaging Printing"
    ]
  },
  {
    title: "Graphic & Creative Design",
    items: [
      "Graphic Design Services",
      "Branding & Visual Identity",
      "Marketing & Advertising Design",
      "Custom Print Designs"
    ]
  },
  {
    title: "Outdoor Advertising",
    items: ["Sign Boards", "Billboards", "Flex Printing", "Hoardings"]
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="font-bold text-xl mb-4">{service.title}</h3>
            <ul className="list-disc list-inside space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
