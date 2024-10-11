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
      <div className={styles.About} id="about">
        <h2>About Us</h2>
        <p>
          The purpose of this club is to provide a service that integrates Ohio
          State students with individuals with developmental disabilities and
          their families. Student volunteers will collaborate to administer a
          program that supports and empowers the creativity of individuals with
          developmental disabilities by hosting painting nights.
        </p>
      </div>
      <div className={styles.Events} id="events">
        <h2>Events</h2>
        <img src={img1} alt={`Event flier`} />
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
