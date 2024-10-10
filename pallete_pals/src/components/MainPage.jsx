import styles from "../assets/styles/MainPage.module.css";
import Nav from "./Nav";
import Slideshow from "./Slideshow";



const Home = () => {
  return (
    <div className={styles.Root}>
      <Nav />
      <Slideshow />
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
