

// // import { motion } from "framer-motion";
// // import { useState } from "react";
// // import enContent from "../../Content/en.js";
// // import urContent from "../../Content/ur.js";
// // import contactInfo from "../../Config/contact.js";
// // import { fadeInUp, fadeIn, buttonHover } from "../../Animations/motion.js";
// // import styles from "./Hero.module.scss";
// // // import heroBanner from "../../images/Hero-banner.png";


// // export default function Hero() {
// //   const [lang, setLang] = useState("en");
// //   const content = lang === "en" ? enContent.hero : urContent.hero;

// //   // Brands/Companies data
// //   const brands = [
// //     { name: "Brand 1", logo: "/images/Trane.png" },
// //     { name: "Brand 2", logo: "/images/Enabling Solutions.png" },
// //     { name: "Brand 3", logo: "/images/Meca tech.png" },
// //     { name: "Brand 4", logo: "/images/Core Petro.png" },
// //     { name: "Brand 5", logo: "/images/Keys.png" },
// //     { name: "Brand 5", logo: "/images/KIps.png" },
// //     { name: "Brand 5", logo: "/images/TD Logo.png", small: true},
// //     // { name: "Brand 5", logo: "/images/Keys.png" },
// //     // { name: "Brand 5", logo: "/images/Keys.png" },
// //     // { name: "Brand 5", logo: "/images/Keys.png" },
// //     // { name: "Brand 5", logo: "/images/Keys.png" },
// //     // { name: "Brand 5", logo: "/images/Keys.png" },

// //   ];

// //   // const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

// //   // const handlePrevBrand = () => {
// //   //   setCurrentBrandIndex((prev) => 
// //   //     prev === 0 ? brands.length - 1 : prev - 1
// //   //   );
// //   // };

// //   // const handleNextBrand = () => {
// //   //   setCurrentBrandIndex((prev) => 
// //   //     prev === brands.length - 1 ? 0 : prev + 1
// //   //   );
// //   // };

// //   return (
// //     <>
// //       <section className={styles.heroSection}>
// //         <div className={styles.videoBackground}>
// //           <video autoPlay loop muted playsInline className={styles.video}>
// //             <source src="path/to/your/video.mp4" type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //           <div className={styles.overlay}></div>
// //         </div>

// //         <div className={styles.container}>
// //           <div className={styles.contentWrapper}>
// //             {/* Left Content */}
// //             <div className={styles.leftContent}>
// //               {/* Heading */}
// //               <motion.h1
// //                 variants={fadeInUp}
// //                 initial="hidden"
// //                 animate="visible"
// //                 className={styles.mainHeading}
// //               >
// //                 {content.title}
// //               </motion.h1>

// //               {/* Subtitle */}
// //               <motion.p
// //                 variants={fadeIn}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 className={styles.subtitle}
// //               >
// //                 {content.subtitle}
// //               </motion.p>

// //               {/* Call To Action Button */}
// //               <motion.div
// //                 className={styles.ctaButtons}
// //                 variants={fadeInUp}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //               >
// //                 <motion.a
// //                   href={`tel:${contactInfo.phone}`}
// //                   className={styles.primaryButton}
// //                   variants={buttonHover}
// //                   initial="rest"
// //                   whileHover="hover"
// //                 >
// //                   <span>{lang === "en" ? "Get a Free Consultation" : "مفت مشاورت حاصل کریں"}</span>
// //                   <svg 
// //                     className={styles.arrow}
// //                     width="20" 
// //                     height="20" 
// //                     viewBox="0 0 24 24" 
// //                     fill="none" 
// //                     stroke="currentColor" 
// //                     strokeWidth="2"
// //                   >
// //                     <path d="M5 12h14M12 5l7 7-7 7"/>
// //                   </svg>
// //                 </motion.a>

// //                 {/* <motion.a
// //                   // href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}

// //                   href={`https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className={styles.secondaryButton}
// //                   variants={buttonHover}
// //                   initial="rest"
// //                   whileHover="hover"
// //                 >
// //                   {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
// //                 </motion.a> */}
// //               </motion.div>
// //             </div>

// //             {/* Right Visual Element (Optional) */}
// //             <div className={styles.rightContent}>
// //               <motion.div 
// //                 className={styles.visualElement}
// //                 initial={{ opacity: 0, scale: 0.8 }}  
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.8, delay: 0.3 }}
// //               >
// //               <img src="/images/Hero-banner.png" alt="Hero Banner" className={styles.heroImage} />
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Language Toggle */}
// //         <button
// //           onClick={() => setLang(lang === "en" ? "ur" : "en")}
// //           className={styles.langToggle}
// //         >
// //           {lang === "en" ? "اردو میں دیکھیں" : "View in English"}
// //         </button>
// //       </section>

// //       {/* Brands Section */}
// //       <section className={styles.brandsSection}>
// //         <div className={styles.brandsContainer}>
// //           <motion.div 
// //             className={styles.brandsHeader}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <h2 className={styles.brandsTitle}>
// //               {lang === "en" ? "Brands That Trust Our Crafts" : "برانڈز جو ہماری صناعی پر بھروسہ کرتے ہیں"}
// //             </h2>
// //             <p className={styles.brandsSubtitle}>
// //               {lang === "en" 
// //                 ? "From visionary startups to industry leaders — our work speaks through the company we keep!" 
// //                 : "وژنری اسٹارٹ اپس سے لے کر انڈسٹری لیڈرز تک — ہمارا کام ان کمپنیوں کے ذریعے بولتا ہے جن کے ساتھ ہم ہیں!"}
// //             </p>
// //           </motion.div>

// //           {/* Auto Scrolling Carousel */}
// //     <div className={styles.brandsCarousel}>
// //       <motion.div
// //         className={styles.brandsGrid}
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         {[...brands, ...brands].map((brand, index) => (
// //       <div key={index} className={styles.brandItem}>
// //         <img
// //           src={brand.logo}
// //           alt={brand.name}
// //           className={`${styles.brandLogo} ${
// //             brand.small ? styles.smallLogo : ""
// //           }`}
// //         />
// //           </div>
// //         ))}
// //       </motion.div>
// //     </div>
// //   </div>
// // </section>
// //     </>
// //   );
// // }


// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import enContent from "../../Content/en.js";
// import urContent from "../../Content/ur.js";
// import contactInfo from "../../Config/contact.js";
// import { fadeInUp, fadeIn, buttonHover } from "../../Animations/motion.js";
// import styles from "./Hero.module.scss";

// export default function Hero() {
//   const [lang, setLang] = useState("en");
//   const content = lang === "en" ? enContent.hero : urContent.hero;

//   // Hero banners array
//   const heroBanners = [
//     "/images/Hero-banner.png",
//     "/images/Hero-banner-2.png",
//     "/images/Hero-banner-3.png",
//   ];

//   const [currentBanner, setCurrentBanner] = useState(0);

//   // Auto-slide banners every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   // Brands/Companies data
//   const brands = [
//     { name: "Brand 1", logo: "/images/Trane.png" },
//     { name: "Brand 2", logo: "/images/Enabling Solutions.png" },
//     { name: "Brand 3", logo: "/images/Meca tech.png" },
//     { name: "Brand 4", logo: "/images/Core Petro.png" },
//     { name: "Brand 5", logo: "/images/Keys.png" },
//     { name: "Brand 5", logo: "/images/KIps.png" },
//     { name: "Brand 5", logo: "/images/TD Logo.png", small: true },
//   ];

//   return (
//     <>
//       <section className={styles.heroSection}>
//         <div className={styles.videoBackground}>
//           <video autoPlay loop muted playsInline className={styles.video}>
//             <source src="path/to/your/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className={styles.overlay}></div>
//         </div>

//         <div className={styles.container}>
//           <div className={styles.contentWrapper}>
//             {/* Left Content */}
//             <div className={styles.leftContent}>
//               <motion.h1
//                 variants={fadeInUp}
//                 initial="hidden"
//                 animate="visible"
//                 className={styles.mainHeading}
//               >
//                 {content.title}
//               </motion.h1>

//               <motion.p
//                 variants={fadeIn}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className={styles.subtitle}
//               >
//                 {content.subtitle}
//               </motion.p>

//               <motion.div
//                 className={styles.ctaButtons}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <motion.a
//                   href={`tel:${contactInfo.phone}`}
//                   className={styles.primaryButton}
//                   variants={buttonHover}
//                   initial="rest"
//                   whileHover="hover"
//                 >
//                   <span>{lang === "en" ? "Get a Free Consultation" : "مفت مشاورت حاصل کریں"}</span>
//                   <svg
//                     className={styles.arrow}
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </motion.a>
//               </motion.div>
//             </div>

//             {/* Right Hero Banner Carousel */}
//             <div className={styles.rightContent}>
//               <div className={styles.heroCarouselWrapper}>
//                 {heroBanners.map((banner, index) => (
//                   <motion.img
//                     key={index}
//                     src={banner}
//                     alt={`Banner ${index + 1}`}
//                     className={styles.heroImage}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{
//                       opacity: index === currentBanner ? 1 : 0,
//                       x: index === currentBanner ? 0 : -100,
//                     }}
//                     transition={{ duration: 1 }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Language Toggle */}
//         <button
//           onClick={() => setLang(lang === "en" ? "ur" : "en")}
//           className={styles.langToggle}
//         >
//           {lang === "en" ? "اردو میں دیکھیں" : "View in English"}
//         </button>
//       </section>

//       {/* Brands Section */}
//       <section className={styles.brandsSection}>
//         <div className={styles.brandsContainer}>
//           <motion.div
//             className={styles.brandsHeader}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className={styles.brandsTitle}>
//               {lang === "en"
//                 ? "Brands That Trust Our Crafts"
//                 : "برانڈز جو ہماری صناعی پر بھروسہ کرتے ہیں"}
//             </h2>
//             <p className={styles.brandsSubtitle}>
//               {lang === "en"
//                 ? "From visionary startups to industry leaders — our work speaks through the company we keep!"
//                 : "وژنری اسٹارٹ اپس سے لے کر انڈسٹری لیڈرز تک — ہمارا کام ان کمپنیوں کے ذریعے بولتا ہے جن کے ساتھ ہم ہیں!"}
//             </p>
//           </motion.div>

//           {/* Brands Carousel */}
//           <div className={styles.brandsCarousel}>
//             <motion.div
//               className={styles.brandsGrid}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               {[...brands, ...brands].map((brand, index) => (
//                 <div key={index} className={styles.brandItem}>
//                   <img
//                     src={brand.logo}
//                     alt={brand.name}
//                     className={`${styles.brandLogo} ${
//                       brand.small ? styles.smallLogo : ""
//                     }`}
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import enContent from "../../Content/en.js";
import urContent from "../../Content/ur.js";
import contactInfo from "../../Config/contact.js";
import { fadeInUp, fadeIn, buttonHover } from "../../Animations/motion.js";
import styles from "./Hero.module.scss";

export default function Hero() {
  const [lang, setLang] = useState("en");
  const content = lang === "en" ? enContent.hero : urContent.hero;

  // Hero slides array with title, subtitle, and image
  const heroSlides = [
    {
      id: 1,
      title: "Professional Printing Solutions",
      subtitle: "Elevate your brand with premium custom printing services—the stylish, secure solution for showcasing and protecting your brand.",
      image: "/images/Hero-banner.png",
      buttonText: "Get Started"
    },
    {
      id: 2,
      title: "Creative Design Services",
      subtitle: "Transform your vision into stunning designs with our expert graphic design and branding solutions.",
      image: "/images/Hero-banner-2.png",
      buttonText: "View Portfolio"
    },
    {
      id: 3,
      title: "Outdoor Advertising",
      subtitle: "Make your brand visible with eye-catching billboards, signboards, and outdoor displays across Pakistan.",
      image: "/images/Hero-banner-3.png",
      buttonText: "Learn More"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Brands/Companies data
  const brands = [
    { name: "Brand 1", logo: "/images/Trane.png" },
    { name: "Brand 2", logo: "/images/Enabling Solutions.png" },
    { name: "Brand 3", logo: "/images/Meca tech.png" },
    { name: "Brand 4", logo: "/images/Core Petro.png" },
    { name: "Brand 5", logo: "/images/Keys.png" },
    { name: "Brand 6", logo: "/images/KIps.png" },
    { name: "Brand 7", logo: "/images/TD Logo.png", small: true },
  ];

  return (
    <>
      <section className={styles.heroSection}>
        {/* Hero Slider */}
        <div className={styles.heroSlider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={styles.slide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Background Image */}
              {/* <div 
                className={styles.slideBackground}
                style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
              >
                <div className={styles.slideOverlay}></div>
              </div> */}

              <div className={styles.slideBackground}>
              <img
                src={heroSlides[currentSlide].image}
                alt=""
                className={styles.bgImage}
              />
                <div className={styles.slideOverlay}></div>
              </div>


              {/* Content Overlay */}
              <div className={styles.slideContent}>
                <div className={styles.container}>
                  <div className={styles.textContent}>
                    <motion.h1
                      className={styles.slideTitle}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      {heroSlides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                      className={styles.slideSubtitle}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {heroSlides[currentSlide].subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className={styles.slideButton}
                      >
                        <span>{heroSlides[currentSlide].buttonText}</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className={`${styles.navArrow} ${styles.navArrowLeft}`}
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className={`${styles.navArrow} ${styles.navArrowRight}`}
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className={styles.slideIndicators}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.indicatorActive : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "ur" : "en")}
          className={styles.langToggle}
        >
          {lang === "en" ? "اردو میں دیکھیں" : "View in English"}
        </button>
      </section>

      {/* Brands Section */}
      <section className={styles.brandsSection}>
        <div className={styles.brandsContainer}>
          <motion.div
            className={styles.brandsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.brandsTitle}>
              {lang === "en"
                ? "Brands That Trust Our Crafts"
                : "برانڈز جو ہماری صناعی پر بھروسہ کرتے ہیں"}
            </h2>
            <p className={styles.brandsSubtitle}>
              {lang === "en"
                ? "From visionary startups to industry leaders — our work speaks through the company we keep!"
                : "وژنری اسٹارٹ اپس سے لے کر انڈسٹری لیڈرز تک — ہمارا کام ان کمپنیوں کے ذریعے بولتا ہے جن کے ساتھ ہم ہیں!"}
            </p>
          </motion.div>

          {/* Brands Carousel */}
          <div className={styles.brandsCarousel}>
            <motion.div
              className={styles.brandsGrid}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className={styles.brandItem}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`${styles.brandLogo} ${
                      brand.small ? styles.smallLogo : ""
                    }`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}