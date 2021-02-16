import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zero Net Energy Consultant & Architect</title>
        {/* Get the favicon from David */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
