// // import { motion } from "framer-motion";
// // import { fadeInUp, containerStagger } from "../../Animations/motion";

// // const services = [
// //   {
// //     title: "Printing Solutions",
// //     items: [
// //       "Business Cards Printing",
// //       "Letterheads & Files",
// //       "Pamphlets, Flyers & Brochures",
// //       "Posters & Stickers",
// //       "Custom Packaging Printing"
// //     ]
// //   },
// //   {
// //     title: "Graphic & Creative Design",
// //     items: [
// //       "Graphic Design Services",
// //       "Branding & Visual Identity",
// //       "Marketing & Advertising Design",
// //       "Custom Print Designs"
// //     ]
// //   },
// //   {
// //     title: "Outdoor Advertising",
// //     items: ["Sign Boards", "Billboards", "Flex Printing", "Hoardings"]
// //   }
// // ];

// // export default function ServicesPreview() {
// //   return (
// //     <section id="services" className="max-w-7xl mx-auto py-20 px-4">
// //       {/* Section Heading */}
// //       <motion.h2
// //         className="text-3xl font-bold text-center mb-12"
// //         variants={fadeInUp}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true }}
// //       >
// //         Our Services
// //       </motion.h2>

// //       {/* Services Cards */}
// //       <motion.div
// //         className="grid md:grid-cols-3 gap-8"
// //         variants={containerStagger}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true }}
// //       >
// //         {services.map((service, i) => (
// //           <motion.div
// //             key={i}
// //             className="bg-white p-6 rounded shadow hover:shadow-lg transition"
// //             variants={cardVariant}
// //           >
// //             <h3 className="font-bold text-xl mb-4">{service.title}</h3>
// //             <ul className="list-disc list-inside space-y-2">
// //               {service.items.map((item, idx) => (
// //                 <li key={idx}>{item}</li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     </section>
// //   );
// // }

// import { motion } from "framer-motion";
// import { fadeInUp, containerStagger } from "../../Animations/motion";

// const services = [
//   {
//     title: "Printing Solutions",
//     items: [
//       "Business Cards Printing",
//       "Letterheads & Files",
//       "Pamphlets, Flyers & Brochures",
//       "Posters & Stickers",
//       "Custom Packaging Printing"
//     ]
//   },
//   {
//     title: "Graphic & Creative Design",
//     items: [
//       "Graphic Design Services",
//       "Branding & Visual Identity",
//       "Marketing & Advertising Design",
//       "Custom Print Designs"
//     ]
//   },
//   {
//     title: "Outdoor Advertising",
//     items: ["Sign Boards", "Billboards", "Flex Printing", "Hoardings"]
//   }
// ];

// export default function ServicesPreview() {
//   return (
//     <section id="services" className="max-w-7xl mx-auto py-20 px-4">
//       {/* Section Heading */}
//       <motion.h2
//         className="text-3xl font-bold text-center mb-12"
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         Our Services
//       </motion.h2>

//       {/* Services Cards */}
//       <motion.div
//         className="grid md:grid-cols-3 gap-8"
//         variants={containerStagger}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded shadow hover:shadow-lg transition"
//           >
//             <h3 className="font-bold text-xl mb-4">{service.title}</h3>
//             <ul className="list-disc list-inside space-y-2">
//               {service.items.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

/* ServicesPreview.module.scss */

// import { motion } from "framer-motion";
// import { fadeInUp, containerStagger } from "../../Animations/motion";
// import styles from "./Service.module.scss";

// const services = [
//   {
//     title: "Printing Solutions",
//     description: "We specialize in high-quality printing services for business materials, marketing collateral, and custom packaging. From business cards to complete branding packages, we deliver professional results that make your brand stand out.",
//     image: "/images/services/printing-solutions.jpg", // Add your image path
//     items: [
//       "Business Cards & Letterheads",
//       "Brochures & Flyers",
//       "Posters & Banners",
//       "Custom Packaging",
//       "Marketing Materials"
//     ]
//   },
//   {
//     title: "Graphic & Creative Design",
//     description: "We craft custom graphic designs that bring your brand vision to life. Whether you're building a new brand identity or refreshing your marketing materials, our creative team delivers standout designs tailored to your needs.",
//     image: "/images/services/graphic-design.jpg", // Add your image path
//     items: [
//       "Logo & Brand Identity",
//       "Marketing Design",
//       "Social Media Graphics",
//       "Advertising Campaigns",
//       "Visual Merchandising"
//     ]
//   },
//   {
//     title: "Outdoor Advertising",
//     description: "We offer comprehensive outdoor advertising solutions that maximize your brand visibility. From eye-catching signboards to large-scale billboards, we create impactful displays that capture attention across Lahore, Karachi, and Islamabad.",
//     image: "/images/services/outdoor-advertising.jpg", // Add your image path
//     items: [
//       "Sign Boards & Shop Fronts",
//       "Billboards & Hoardings",
//       "Flex & Vinyl Printing",
//       "LED Display Boards",
//       "Vehicle Branding"
//     ]
//   }
// ];

// export default function ServicesPreview() {
//   return (
//     <section id="services" className={styles.servicesSection}>
//       {/* Section Heading */}
//       <motion.div
//         className={styles.sectionHeader}
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h2 className={styles.mainTitle}>
//           Printing Solutions, Design & Advertising Services in Lahore, Karachi & Islamabad
//         </h2>
//         <p className={styles.subtitle}>
//           Custom printing, creative design, and outdoor advertising solutions that enhance your brand visibility and customer engagement.
//         </p>
//       </motion.div>

//       {/* Services Cards */}
//       <motion.div
//         className={styles.servicesGrid}
//         variants={containerStagger}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             className={styles.serviceCard}
//             variants={fadeInUp}
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={styles.imageWrapper}>
//               <img 
//                 src={service.image} 
//                 alt={service.title}
//                 className={styles.serviceImage}
//               />
//             </div>
            
//             <div className={styles.cardContent}>
//               <h3 className={styles.serviceTitle}>{service.title}</h3>
              
//               <p className={styles.serviceDescription}>
//                 {service.description}
//               </p>
              
//               {/* Optional: Uncomment if you want to show the list items */}
//               {/* <ul className={styles.serviceList}>
//                 {service.items.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul> */}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../../Animations/motion";
import styles from "./Service.module.scss";

const services = [
  {
    title: "Commercial Printing Solutions",
    description:
      "High-quality commercial printing services designed for businesses of all sizes. From everyday office printing to premium brand materials, we ensure sharp results and consistent quality.",
    image: "/images/services/printing-solutions.jpg",
  },
  {
    title: "Graphic & Creative Design",
    description:
      "Creative design solutions that visually communicate your brand message. Our designs are crafted to attract, engage, and convert customers across all platforms.",
    image: "/images/services/graphic-design.jpg",
  },
  {
    title: "Outdoor Advertising",
    description:
      "Powerful outdoor advertising solutions that boost brand visibility. We design and produce eye-catching displays that leave a strong impact in high-traffic locations.",
    image: "/images/services/outdoor-advertising.jpg",
  },
  {
    title: "Signage & Branding",
    description:
      "Professional signage and branding solutions for shops, offices, and commercial spaces. We help your brand stand out with clean, durable, and modern signage.",
    image: "/images/services/signage-branding.jpg",
  },
  {
    title: "Digital & Large Format Printing",
    description:
      "Advanced digital and large-format printing for banners, flex, vinyl, and posters. Perfect for promotions, exhibitions, and outdoor marketing campaigns.",
    image: "/images/services/large-format-printing.jpg",
  },
  {
    title: "Corporate & Marketing Materials",
    description:
      "Complete marketing material solutions including brochures, catalogs, folders, and presentation kits designed to elevate your corporate identity.",
    image: "/images/services/marketing-materials.jpg",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className={styles.servicesSection}>
      {/* Section Heading */}
      <motion.div
        className={styles.sectionHeader}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.mainTitle}>
          Printing, Design & Advertising Services in Lahore, Karachi & Islamabad
        </h2>
        <p className={styles.subtitle}>
          Complete printing, creative design, and advertising solutions to help
          your brand grow, stand out, and connect with customers.
        </p>
      </motion.div>

      {/* Services Cards */}
      <motion.div
        className={styles.servicesGrid}
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={styles.serviceCard}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
