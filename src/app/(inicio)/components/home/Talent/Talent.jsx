"use client";
import { talent } from "./consts";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { Container, Title, GridContainer } from "@/components";

export const Talent = () => {
  return (
    <>
      <section className={styles.talentWrapper}>
        <div className={styles.talentBackground}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
        </div>
        <Title title="Talentos" />
        <GridContainer>
          {talent.map((talent) => (
            <Slide triggerOnce key={talent.id}>
              <div className={styles.talentCard}>
                <figure className={styles.talentImage}>
                  <img src={talent.image} />
                </figure>
                <span className={styles.planTitle}>{talent.name}</span>
                <ul className={styles.planBenefits}></ul>
              </div>
            </Slide>
          ))}
        </GridContainer>
      </section>
    </>
  );
};
