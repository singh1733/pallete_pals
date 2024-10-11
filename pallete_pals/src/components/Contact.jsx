import insta from "../assets/images/insta.png";
import logo from "../assets/images/logo.jpg";

const Contact = () => {
  return (
    <>
      <img src={logo} alt="logo"></img>
      <p>Email: palettepalsosu@gmail.com</p>
      <a
        href="https://www.instagram.com/palettepalsosu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={insta} alt="Instagram" />
      </a>
    </>
  );
};

export default Contact;
