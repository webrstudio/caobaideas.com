"use client";
import { useFetch } from "@/hooks";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { Container, Loader } from "@/components";

export const Talent = ({ url }) => {
  const { error, data, isLoading } = useFetch({
    url: `${process.env.NEXT_PUBLIC_API}/talents/getTalentById/index.php?talento_url=${url}`,
  });
  return (
    <Container>
      <div className={`${styles.talentWrapper} smallContainer`}>
        {!data && isLoading ? <Loader /> : (
          <Slide triggerOnce>
            <div className={`${styles.talentDescription}`}>
              <figure>
                <img
                  src={`${process.env.NEXT_PUBLIC_SERVER_NAME}/${data.talento_imagen}`}
                />
              </figure>
              <h3 className={styles.talentName}>{data.talento_nombre}</h3>
              <p>{data.talento_descripcion}</p>
              {!data.talento_video ? null : (
                <iframe
                  src={data.talento_video}
                  className={styles.talentVideo}
                />
              )}
            </div>
          </Slide>
        )}
      </div>
    </Container>
  );
};
