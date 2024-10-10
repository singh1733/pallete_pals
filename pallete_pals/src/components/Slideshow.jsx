import { useState, useEffect } from "react";
import styles from "../assets/styles/MainPage.module.css";

const Slideshow = () => {
  const [curIndex, setCurIndex] = useState(0);

  const images = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prevIndex) => (prevIndex + 1) % images.length); //so index does not go over length and restarts at 0
      return () => clearInterval(interval); //clean up function once unmounted
    }, 4000);
  }, [images.length]);

  const goToNext = () => {
    setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length //+ length for if index is at 0
    );
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
