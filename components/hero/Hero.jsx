import styles from "./styles.module.css";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <section className="styles.hero">
      <div className="styles.hero-content">
        <h1>Griffin EnerG Consulting</h1>
        <p>Know your options</p>
        <button className="styles.contact-me">Contact Me</button>
      </div>
      <Illustration />
    </section>
  );
};

export default Hero;
