import insta from "../assets/images/insta.png";
const Contact = () => {
  return (
    <>
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
