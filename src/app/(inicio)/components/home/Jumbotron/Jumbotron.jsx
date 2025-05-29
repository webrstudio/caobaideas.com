"use client";
import { images } from "./consts";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

export const Jumbotron = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

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
        <div
          key={currentImage}
          className={styles.jumbotronImageWrapper}
          style={{ backgroundImage: `url(${images[currentImage].src})` }}
        />
      </div>
    </section>
  );
};
