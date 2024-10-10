import { Link } from "react-scroll";
import styles from "./MainPage.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.MainPage}>
        <h1>Pallette Pals</h1>
        <h1>About</h1>
        <h1>Events</h1>
        <h1>Gallery</h1>
        <h1>Contact</h1>
      </div>
      <div>Slide Show</div>
      <div>About Us</div>
      <div>Events</div>
      <div>Contact Us</div>
    </>
  );
};

export default Home;
