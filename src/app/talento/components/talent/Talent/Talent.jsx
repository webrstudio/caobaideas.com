"use client";
import styles from "./styles.module.css";
import { Container } from "@/components";
import { Slide } from "react-awesome-reveal";

export const Talent = () => {
  return (
    <Container>
      <div className={`${styles.talentWrapper} smallContainer`}>
        <Slide triggerOnce>
          <div className={`${styles.talentDescription}`}>
            <figure>
              <img src="/assets/images/talent/jaivo.png" />
            </figure>
            <h3 className={styles.talentName}>El Jaivo</h3>
            <p>
              El terror de las viejitas, líder de Los Mesmos y un cómico por
              naturaleza; su carisma y buen humor te harán pasar un increíble
              momento de diversión… con un toque de picardía.
            </p>
            <iframe
                src="https://www.youtube.com/embed/woFs97Z6YXI"
                className={styles.talentVideo}
            />
          </div>
        </Slide>
      </div>
    </Container>
  );
};
