"use client";
import { images } from "./consts";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

export const Jumbotron = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(false);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.jumbotronWrapper}>
      <div className={styles.jumbotronMask}>
        <div className={styles.jumbotronTitles}>
          <Slide triggerOnce>
            <h1>LA CASA DEL CONTENIDO VIRAL</h1>
            <p>
              Producción Multimedia | Agencia Digital | Booking | Management
            </p>
          </Slide>
        </div>
        <div className={styles.jumbotronImageWrapper}>
          <img
            src={images[currentImage].src}
            alt=""
            onLoad={() => setIsLoaded(true)}
            className={`${styles.jumbotronImage} ${
              isLoaded ? styles.visible : styles.hidden
            }`}
          />
        </div>
      </div>
    </section>
  );
};
