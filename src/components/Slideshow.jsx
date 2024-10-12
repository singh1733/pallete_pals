import { useState, useEffect } from "react";
import styles from "../assets/styles/MainPage.module.css";
import img1 from "../assets/images/IMG_2896.jpg";
import img2 from "../assets/images/IMG_2897.jpg";
import img3 from "../assets/images/IMG_2899.jpg";
import img4 from "../assets/images/IMG_2898.jpg";
import img5 from "../assets/images/IMG_2906.jpg";
import img6 from "../assets/images/IMG_2903.jpg";

const Slideshow = () => {
  const [curIndex, setCurIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images]);

  return (
    <div className={styles.Slideshow}>
      <img src={images[curIndex]} alt={`Slide ${curIndex + 1}`} />
    </div>
  );
};

export default Slideshow;
