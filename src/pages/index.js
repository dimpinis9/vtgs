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
          <h1 className={styles.title}>Welcome to VTGS</h1>
          <p className={styles.subtitle}>
            Your trusted partner in business solutions.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.about}>
          <h2>About Us</h2>
          <p>
            VTGS is a leading provider of innovative business solutions. Our
            mission is to help you achieve your goals with our expert services
            and cutting-edge technology.
          </p>
        </section>

        <section id="services" className={styles.services}>
          <h2>Our Services</h2>
          <ul>
            <li>Consulting</li>
            <li>Technology Solutions</li>
            <li>Business Strategy</li>
          </ul>
        </section>

        <section id="testimonials" className={styles.testimonials}>
          <h2>Testimonials</h2>
          <p>
            "VTGS transformed our business processes and helped us achieve
            remarkable growth." - Client A
          </p>
          <p>
            "The team at VTGS is professional, knowledgeable, and dedicated to
            client success." - Client B
          </p>
        </section>

        <section id="projects" className={styles.projects}>
          <h2>Recent Projects</h2>
          <div className={styles.project}>
            <h3>Project 1</h3>
            <p>Description of Project 1...</p>
          </div>
          <div className={styles.project}>
            <h3>Project 2</h3>
            <p>Description of Project 2...</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
