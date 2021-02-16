import styles from "./styles.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <Logo />
      <nav>
        <ul>
          <li>Guide to Zero Net Energy</li>
          <li>Latitude Study</li>
          <li>Certified Building</li>
          <li>Non Certified Buildings</li>
          <li>Project Credits</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
