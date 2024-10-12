import styles from "../assets/styles/MainPage.module.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className={styles.Nav}>
      <h1>Palette Pals</h1>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={500} offset={-75}>
            Events
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500} offset={-75}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-75}>
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
