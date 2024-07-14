import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VTGS - Home</title>
        <meta
          name="description"
          content="Welcome to VTGS - Your trusted partner in business solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <header className={styles.header}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Καλωσήρθατε στην VTGS</h1>
          <p className={styles.subtitle}>
            Η Εταιρεία παροχής ολοκληρωμένων συμβουλευτικών και εκπαιδευτικών
            υπηρεσιών.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.about}>
          <h2>Λίγα Λόγια για την Επιχείρηση</h2>
          <p>
            Η επιχείρηση «VTGS ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ» με διακριτικό τίτλο « VTGS ΙΚΕ»
            παρέχει ολοκληρωμένο σύστημα υπηρεσιών καλύπτοντας κάθε ανάγκη
            οργανισμού του δημόσιου ή του ιδιωτικού τομέα. Με γνώμονα πάντοτε
            τις ανάγκες του εκάστοτε πελάτη και προσαρμοζόμενοι στις εξελίξεις
            των ημερών σκοπός μας είναι η παροχή ολοκληρωμένης υποστήριξης με
            την προσφορά ρεαλιστικών και ουσιαστικών λύσεων, για τη βελτίωση της
            ανταγωνιστικότητας των επιχειρήσεων και την αύξηση της
            αποδοτικότητας και παραγωγικότητας των στελεχών τους. Οι υπηρεσίες
            της «VTGS ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ» προσανατολισμένες στις ιδιαίτερες
            απαιτήσεις του πελάτη ανανεώνονται και προσαρμόζονται διαρκώς στις
            αλλαγές και εξελίξεις που υπαγορεύουν τα Διεθνή και Ευρωπαϊκά
            πρότυπα για την επιτυχία του «Επιχειρείν». Έτσι, καλύπτουν ολοένα
            και περισσότερους τομείς επιχειρηματικής δράσης μεταδίδοντας
            εμπειρία σε πραγματικές συνθήκες εργασίας.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
