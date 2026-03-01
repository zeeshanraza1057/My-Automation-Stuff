import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, containerStagger } from "../../Animations/motion";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    id: 1,
    text: "Working with this printing company has been exceptional. From business cards to complete branding materials, they delivered outstanding quality. Their attention to detail and quick turnaround time helped us launch our marketing campaign on schedule. The team understood our vision and brought it to life perfectly.",
    author: "Ahmed Hassan",
    position: "Marketing Director, TechVision Solutions",
    avatar: "/images/testimonials/avatar1.jpg" // Add your image path
  },
  {
    id: 2,
    text: "Our outdoor advertising campaign exceeded all expectations. The billboards and signboards they designed and installed across Lahore created massive brand visibility. Their creative team delivered eye-catching designs, and the installation was flawless. We've seen a significant increase in customer inquiries since the campaign launched.",
    author: "Sara Khan",
    position: "Founder & CEO, StyleHub Boutique",
    avatar: "/images/testimonials/avatar2.jpg" // Add your image path
  },
  {
    id: 3,
    text: "The graphic design services are top-notch. They created our complete brand identity from scratch - logo, color palette, marketing materials, and social media graphics. The creative team was responsive, professional, and delivered designs that perfectly captured our brand essence. Highly recommend their design services.",
    author: "Bilal Mahmood",
    position: "Owner, Fresh Bites Restaurant Chain",
    avatar: "/images/testimonials/avatar3.jpg" // Add your image path
  },
  {
    id: 4,
    text: "From concept to completion, their printing solutions have been outstanding. We've used them for packaging design, promotional materials, and custom printing for our retail stores. The quality is consistently excellent, pricing is competitive, and they always meet deadlines. They're our go-to printing partner.",
    author: "Fatima Ali",
    position: "Operations Manager, GreenLeaf Organics",
    avatar: "/images/testimonials/avatar4.jpg" // Add your image path
  },
  {
    id: 5,
    text: "Their shop signboard transformed our storefront completely. The LED display they designed and installed has become a landmark in our area. People stop to take photos! The craftsmanship is excellent, and the after-sales support is impressive. They truly understand how to make businesses stand out.",
    author: "Kashif Raza",
    position: "Owner, Elite Fitness Gym",
    avatar: "/images/testimonials/avatar5.jpg" // Add your image path
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - testimonialsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= testimonials.length - testimonialsPerView ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={styles.mainTitle}>Client Testimonials</h2>
          <p className={styles.subtitle}>
            Words That Speak Volumes About Client Satisfaction and Trust in Our Services!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsWrapper}>
          <motion.div
            className={styles.testimonialsGrid}
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.slice(currentIndex, currentIndex + testimonialsPerView).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={styles.testimonialCard}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardContent}>
                  <p className={styles.testimonialText}>
                    {testimonial.text}
                  </p>

                  <div className={styles.authorInfo}>
                    <div className={styles.avatar}>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="%23ffffff" stroke-width="2"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"%3E%3C/path%3E%3Ccircle cx="12" cy="7" r="4"%3E%3C/circle%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className={styles.authorDetails}>
                      <h4 className={styles.authorName}>{testimonial.author}</h4>
                      <p className={styles.authorPosition}>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className={styles.navigation}>
            <button 
              onClick={handlePrev}
              className={styles.navButton}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <button 
              onClick={handleNext}
              className={styles.navButton}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}