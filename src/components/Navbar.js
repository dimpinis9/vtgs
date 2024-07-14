import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

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
      <div className={styles.logo}>
        {/* <a href="/">
          <Image src="/logo.jpg" alt="VTGS Logo" width={50} height={50} />
        </a> */}
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li onClick={closeMenu}>
          <a href="/">Αρχική</a>
        </li>
        <li onClick={closeMenu}>
          <a href="/policies">Πολιτικές της VTGS</a>
        </li>

        <li onClick={closeMenu}>
          <a href="/services">Υπηρεσίες της VTGS</a>
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
