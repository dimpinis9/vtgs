// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Σύνδεσμοι</h3>
          <ul>
            <li>
              <a href="/">Αρχική</a>
            </li>
            <li>
              <a href="policies">Οι Πολιτικές μας</a>
            </li>
            <li>
              <a href="services">Οι Υπηρεσίας μας</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Επικοινωνήστε Μαζί μας</h3>
          <p>Email: vtgsike@yahoo.com</p>
          <p>Τηλέφωνο: 213-0314047</p>
        </div>
        {/* <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 VTGS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
