import { useState, useEffect } from "react";
import styles from "../assets/styles/MainPage.module.css";
import img1 from "../assets/images/IMG_2886.jpeg";
import img2 from "../assets/images/IMG_2887.jpeg";
import img3 from "../assets/images/IMG_2888.jpeg";
import img4 from "../assets/images/IMG_2889.jpeg";
import img5 from "../assets/images/IMG_2890.jpeg";
import img6 from "../assets/images/IMG_2891.jpeg";
import img7 from "../assets/images/IMG_2892.jpeg";
import img8 from "../assets/images/IMG_2893.jpeg";
import img10 from "../assets/images/IMG_2895.jpeg";
import img11 from "../assets/images/IMG_2896.jpeg";
import img12 from "../assets/images/IMG_2897.jpeg";
import img13 from "../assets/images/IMG_2898.jpeg";
import img14 from "../assets/images/IMG_2899.jpeg";
import img15 from "../assets/images/IMG_2900.jpeg";
import img17 from "../assets/images/IMG_2902.jpeg";
import img18 from "../assets/images/IMG_2903.jpeg";
import img19 from "../assets/images/IMG_2904.jpeg";
import img20 from "../assets/images/IMG_2905.jpeg";
import img0 from "../assets/images/IMG_2906.jpeg";

const Slideshow = () => {
  const [curIndex, setCurIndex] = useState(0);
  const images = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img17,
    img18,
    img19,
    img20,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images]);

  const goToNext = () => {
    setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.Slideshow}>
      <button onClick={goToPrevious}>&lt;</button>
      <img src={images[curIndex]} alt={`Slide ${curIndex + 1}`} />
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Slideshow;
