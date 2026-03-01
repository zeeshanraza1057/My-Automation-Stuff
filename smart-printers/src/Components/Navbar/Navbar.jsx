// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import contactInfo from "../../Config/contact";
// // import { buttonHover, fadeInUp } from "../../Animations/motion";
// // import styles from "./Nav.module.scss";

// // export default function Navbar({ lang, setLang }) {
// // const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className={styles.navbar}>
// //       <div className={styles.container}>
// //         {/* Logo */}
// //         <div className={styles.logo}>Smart Printers</div>

// //         {/* Desktop Menu */}
// //         <div className={styles.desktopMenu}>
// //           <a href="#home">{lang === "en" ? "Home" : "ہوم"}</a>
// //           <a href="#about">{lang === "en" ? "About" : "ہمارے بارے میں"}</a>
// //           <a href="#services">{lang === "en" ? "Services" : "سروسز"}</a>
// //           <a href="#contact">{lang === "en" ? "Contact" : "رابطہ"}</a>

// //           <motion.a
// //             href={`tel:${contactInfo.phone}`}
// //             className="callBtn"
// //             variants={buttonHover}
// //             initial="rest"
// //             whileHover="hover"
// //           >
// //             {lang === "en" ? "Call" : "کال"}
// //           </motion.a>
// //           <motion.a
// //             href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
// //             target="_blank"
// //             className="whatsappBtn"
// //             variants={buttonHover}
// //             initial="rest"
// //             whileHover="hover"
// //           >
// //             {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
// //           </motion.a>

// //           <button onClick={() => setLang(lang === "en" ? "ur" : "en")} className="langToggle">
// //             {lang === "en" ? "اردو" : "EN"}
// //           </button>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className={styles.mobileButton}>
// //           <button onClick={() => setIsOpen(!isOpen)}>
// //             <span>{isOpen ? "✖" : "☰"}</span>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             className={styles.mobileMenu}
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //           >
// //             <motion.a href="#home" variants={fadeInUp} initial="hidden" animate="visible" onClick={() => setIsOpen(false)}>
// //               {lang === "en" ? "Home" : "ہوم"}
// //             </motion.a>
// //             <motion.a href="#about" variants={fadeInUp} initial="hidden" animate="visible" onClick={() => setIsOpen(false)}>
// //               {lang === "en" ? "About" : "ہمارے بارے میں"}
// //             </motion.a>
// //             <motion.a href="#services" variants={fadeInUp} initial="hidden" animate="visible" onClick={() => setIsOpen(false)}>
// //               {lang === "en" ? "Services" : "سروسز"}
// //             </motion.a>
// //             <motion.a href="#contact" variants={fadeInUp} initial="hidden" animate="visible" onClick={() => setIsOpen(false)}>
// //               {lang === "en" ? "Contact" : "رابطہ"}
// //             </motion.a>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // }


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import contactInfo from "../../Config/contact";
// import { buttonHover, fadeInUp } from "../../Animations/motion";
// import styles from "./Nav.module.scss";

// export default function Navbar({ lang, setLang }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.container}>
//         {/* Logo */}
//         <div className={styles.logo}>Smart Printers</div>

//         {/* Desktop Menu */}
//         <div className={styles.desktopMenu}>
//           <a href="#home">{lang === "en" ? "Home" : "ہوم"}</a>
//           <a href="#services">{lang === "en" ? "Services" : "سروسز"}</a>
//           <a href="#Product">{lang === "en" ? "Product" : "پروڈکٹ"}</a>
//           <a href="#Portfolio">{lang === "en" ? "Portfolio" : "پورٹ فولیو"}</a>
//           <a href="#about">{lang === "en" ? "About" : "ہمارے بارے میں"}</a>
//           <a href="#contact">{lang === "en" ? "Contact" : "رابطہ"}</a>

//           {/* Call Button */}
//           <motion.a
//             href={`tel:${contactInfo.phone}`}
//             className="callBtn"
//             variants={buttonHover}
//             initial="rest"
//             whileHover="hover"
//           >
//             {lang === "en" ? "Call" : "کال"}
//           </motion.a>

//           {/* WhatsApp Button */}
//           <motion.a
//             href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
//               contactInfo.whatsappMessage
//             )}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="whatsappBtn"
//             variants={buttonHover}
//             initial="rest"
//             whileHover="hover"
//           >
//             {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
//           </motion.a>

//           {/* Language Toggle */}
//           <button
//             onClick={() => setLang(lang === "en" ? "ur" : "en")}
//             className="langToggle"
//           >
//             {lang === "en" ? "اردو" : "EN"}
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className={styles.mobileButton}>
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <span>{isOpen ? "✖" : "☰"}</span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className={styles.mobileMenu}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//           >
//             <motion.a
//               href="#home"
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               onClick={() => setIsOpen(false)}
//             >
//               {lang === "en" ? "Home" : "ہوم"}
//             </motion.a>

//             <motion.a
//               href="#about"
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               onClick={() => setIsOpen(false)}
//             >
//               {lang === "en" ? "About" : "ہمارے بارے میں"}
//             </motion.a>

//             <motion.a
//               href="#services"
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               onClick={() => setIsOpen(false)}
//             >
//               {lang === "en" ? "Services" : "سروسز"}
//             </motion.a>

//             <motion.a
//               href="#contact"
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               onClick={() => setIsOpen(false)}
//             >
//               {lang === "en" ? "Contact" : "رابطہ"}
//             </motion.a>

//             {/* Mobile Call */}
//             <motion.a
//               href={`tel:${contactInfo.phone}`}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               onClick={() => setIsOpen(false)}
//             >
//               {lang === "en" ? "Call" : "کال"}
//             </motion.a>

//             {/* Mobile WhatsApp */}
//             <motion.a
//               href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
//                 contactInfo.whatsappMessage
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               onClick={() => setIsOpen(false)}
//             >
//               {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contactInfo from "../../Config/contact";
import { buttonHover, fadeInUp } from "../../Animations/motion";
import styles from "./Nav.module.scss";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        {/* <div className={styles.logo}>Smart Printers</div> */}
        <div className={styles.logo}>
  <img src="/images/smartprinterlogo.png" alt="Smart Printers Logo" />
</div>


        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <a href="#home">{lang === "en" ? "Home" : "ہوم"}</a>

          {/* Services Dropdown */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className={styles.dropdownTrigger}>
              {lang === "en" ? "Services" : "سروسز"}
            </span>
            
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <a href="#printing">Printing Services</a>
                  <a href="#design">Design & Branding</a>
                  <a href="#maintenance">Maintenance</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className={styles.dropdownTrigger}>
              {lang === "en" ? "Product" : "پروڈکٹ"}
            </span>

            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <a href="#printers">Printers</a>
                  <a href="#toners">Toners & Ink</a>
                  <a href="#accessories">Accessories</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#Portfolio">{lang === "en" ? "Portfolio" : "پورٹ فولیو"}</a>
          <a href="#about">{lang === "en" ? "About" : "ہمارے بارے میں"}</a>
          <a href="#contact">{lang === "en" ? "Contact" : "رابطہ"}</a>

          {/* Call */}
          <motion.a
            href={`tel:${contactInfo.phone}`}
            className="callBtn"
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
          >
            {lang === "en" ? "Call" : "کال"}
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${encodeURIComponent(
              contactInfo.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappBtn"
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
          >
            {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
          </motion.a>

          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className="langToggle"
          >
            {lang === "en" ? "اردو" : "EN"}
          </button>
        </div>

        {/* Mobile Button */}
        <div className={styles.mobileButton}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <span>{isOpen ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#home">Home</a>

            <details>
              <summary>Services</summary>
              <a href="#printing">Printing</a>
              <a href="#design">Design</a>
              <a href="#maintenance">Maintenance</a>
            </details>

            <details>
              <summary>Products</summary>
              <a href="#printers">Printers</a>
              <a href="#toners">Toners</a>
              <a href="#accessories">Accessories</a>
            </details>

            <a href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
