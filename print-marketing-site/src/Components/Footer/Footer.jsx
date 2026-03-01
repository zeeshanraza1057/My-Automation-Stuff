import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>BrandName</h2>
            <p>Printing & Designing Services</p>
          </div>
          <div className={styles.links}>
            <div>
              <h4>Services</h4>
              <ul>
                <li>Business Cards</li>
                <li>Letterheads</li>
                <li>Flyers & Pamphlets</li>
                <li>Brochures</li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li>Our Company</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className={styles.social}>
            <h4>Follow Us</h4>
            <div className={styles.icons}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2025 BrandName. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
