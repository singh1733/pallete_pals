import { Link } from "react-scroll";
import styles from "../assets/styles/MainPage.module.css";

const Home = () => {
  return (
    <div className={styles.Root}>
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
      <div className={styles.SlideShow}>
        <button> &lt; </button>
        <div>Slide Show</div>
        <button> &gt; </button>
      </div>
      <div className={styles.About} id="about">
        About Us
      </div>
      <div className={styles.Events} id="events">
        Events
      </div>
      <div className={styles.Events} id="gallery">
        Gallery
      </div>
      <div className={styles.Contact} id="contact">
        Contact Us
      </div>
    </div>
  );
};

export default Home;
