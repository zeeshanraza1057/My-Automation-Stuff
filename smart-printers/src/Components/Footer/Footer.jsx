// import { motion } from "framer-motion";
// import contactInfo from "../../Config/contact";
// import { fadeInUp } from "../../Animations/motion";
// import styles from "./Footer.module.scss"; // SCSS module

// export default function Footer() {
//   return (
//     <motion.footer
//       className={styles.footer}
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <div className={styles.footer__inner} style={{ fontFamily: "inherit" }}>
//         {/* Brand / Contact */}
//         <div className={styles.footer__brand}>
//           <h3>Smart Printers</h3>
//           <p>📞 {contactInfo.phone}</p>
//           <p>📧 {contactInfo.email}</p>
//           <p>📍 {contactInfo.address}</p>
//         </div>

//         {/* Quick Links (no bullets) */}
//         <div className={styles.footer__list}>
//           <h3>Quick Links</h3>
//           <ul>
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#services">Services</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Social / Extras (use same markup/styles as Quick Links) */}
//         <div className={styles.footer__list}>
//           <h3>Follow Us</h3>
//           <ul>
//             <li>
//               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 Facebook
//               </a>
//             </li>
//             <li>
//               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 Instagram
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className={styles.footer__bottom}>
//           <div
//             className={styles.footer__copyright}
//             style={{ ["--year"]: String(new Date().getFullYear()) }}
//           >
//             <a href="#">Smart Printers</a>. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }


import { motion } from "framer-motion";
import contactInfo from "../../Config/contact";
import { fadeInUp } from "../../Animations/motion";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.footerInner}>
        {/* Contact Buttons */}
        <div className={styles.contactButtons}>
          <a 
            href={`mailto:${contactInfo.email}`}
            className={styles.contactButton}
          >
            {contactInfo.email}
          </a>
          <a 
            href={`tel:${contactInfo.phone}`}
            className={styles.contactButton}
          >
            {contactInfo.phone}
          </a>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a 
            href="https://instagram.com/yourcompany" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
          <a 
            href="https://facebook.com/yourcompany" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook
          </a>
          <a 
            href="https://twitter.com/yourcompany" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            X
          </a>
          <a 
            href="https://youtube.com/yourcompany" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Youtube
          </a>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear}–{currentYear + 1} Smart Printers by Your Company | All Rights Reserved | Designed by Your Agency
          </p>
          <div className={styles.footerLinks}>
            <a href="/privacy-policy" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="/disclaimer" className={styles.footerLink}>Disclaimer</a>
            <span className={styles.separator}>|</span>
            <a href="/terms-conditions" className={styles.footerLink}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}