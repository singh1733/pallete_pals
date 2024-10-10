import styles from "../assets/styles/MainPage.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <h1>Pallette Pals</h1>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={500}>
            Events
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
