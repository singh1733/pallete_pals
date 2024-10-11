import insta from "../assets/images/insta.png";
import logo from "../assets/images/logo.jpg";
import styles from "../assets/styles/MainPage.module.css";

const Contact = () => {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logo}></img>
      <h2>Contact Us!</h2>
      <p>Email: palettepalsosu@gmail.com</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSec3E6Df6Weh-OUx--5PjNmDdvU4cdeDRmOwzv-Da2CidbJvQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign Up
      </a>

      <a
        href="https://www.instagram.com/palettepalsosu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={insta} alt="Instagram" className={styles.insta} />
      </a>
    </>
  );
};

export default Contact;
