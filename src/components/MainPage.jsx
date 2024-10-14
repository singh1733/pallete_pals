import styles from "../assets/styles/MainPage.module.css";
import Nav from "./Nav";
import Slideshow from "./Slideshow";
import Gallery from "./Gallery";
import Contact from "./Contact";

import img1 from "../assets/images/IMG_2901.jpeg";

const Home = () => {
  return (
    <div className={styles.Root}>
      <Nav />
      <Slideshow />
      <div className={styles.AboutAndEvents}>
        <div className={styles.About} id="about">
          <h2>About Us</h2>
          <p>
            The purpose of this club is to provide a service that integrates
            Ohio State students with individuals with developmental disabilities
            and their families. Student volunteers will collaborate to
            administer a program that supports and empowers the creativity of
            individuals with developmental disabilities by hosting painting
            nights.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSec3E6Df6Weh-OUx--5PjNmDdvU4cdeDRmOwzv-Da2CidbJvQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to sign up!
          </a>
        </div>
        <div className={styles.Events} id="events">
          <h2>Event Flier</h2>
          <img src={img1} alt={`Event flier`} />
        </div>
      </div>

      <div className={styles.Gallery} id="gallery">
        <Gallery />
      </div>
      <div className={styles.Contact} id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
