"use client";
import Link from "next/link";
import { talent } from "./consts";
import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "@/contexts";
import { Slide } from "react-awesome-reveal";
import { Title, GridContainer } from "@/components";

export const Talent = () => {
  const { lightMode }= useContext(ThemeContext)
  return (
    <>
      <section className={`${styles.talentWrapper} ${!lightMode ? 'bgBlackSecondary': 'bgWhiteSecondary'}`} id="talento">
        <div className={styles.talentBackground}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
        </div>
        <Title title="Talentos" />
        <GridContainer>
          {talent.map((talent) => (
            <Slide triggerOnce key={talent.id}>
              <div className={styles.talentCard}>
                <Link href={talent.link} className={styles.talentImage}>
                  <img src={talent.image} loading='lazy'/>
                </Link>
                <div className={styles.talentDescription}>
                  <ul>
                    {talent.social.map((social, i) => (
                      <li key={i}>
                        <a href={social.link} target="_blank" className={styles.talentIcon}>
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Link className={styles.talentName} href={talent.link}>
                    {talent.name}
                  </Link>
                </div>
              </div>
            </Slide>
          ))}
        </GridContainer>
      </section>
    </>
  );
};
