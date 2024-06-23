import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>VTGS</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li onClick={closeMenu}>
          <a href="/">Home</a>
        </li>
        <li onClick={closeMenu}>
          <a href="/services">Services</a>
        </li>
        {/* <li onClick={closeMenu}>
          <a href="/team">Team</a>
        </li>
        <li onClick={closeMenu}>
          <a href="/blog">Blog</a>
        </li> */}
        {/* <li onClick={closeMenu}>
          <a href="/contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
