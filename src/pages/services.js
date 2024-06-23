import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VTGS - Services</title>
        <meta
          name="description"
          content="Detailed description of the services offered by VTGS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Our Services</h1>
        <section className={styles.service}>
          <h2>Consulting</h2>
          <p>
            Our consulting services help businesses optimize their processes and
            improve efficiency...
          </p>
        </section>
        <section className={styles.service}>
          <h2>Technology Solutions</h2>
          <p>
            We provide state-of-the-art technology solutions tailored to your
            business needs...
          </p>
        </section>
        <section className={styles.service}>
          <h2>Business Strategy</h2>
          <p>
            Our business strategy services ensure you have a clear plan to
            achieve your business goals...
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
