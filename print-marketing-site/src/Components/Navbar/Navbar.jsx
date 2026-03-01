import styles from "./Navbar.module.scss";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        Free Local Shipping over 2500 Rs.
      </div>

      {/* Main navbar */}
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>Print</span>Market
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <input type="text" placeholder="What are you looking for?" />
          <FiSearch />
        </div>

        {/* Right icons */}
        <div className={styles.actions}>
          <div className={styles.icon}>
            <HiOutlineLocationMarker />
            <span>Find a Store</span>
          </div>
          <FiShoppingCart className={styles.cart} />
        </div>
      </div>

      {/* Menu */}
      <nav className={styles.menu}>
        <a href="#">About Us</a>
        <a href="#">Business Corporate</a>
        <a href="#">Wedding</a>
        <a href="#">Packaging Solutions</a>
        <a href="#">Book an Appointment</a>
      </nav>
    </header>
  );
}
