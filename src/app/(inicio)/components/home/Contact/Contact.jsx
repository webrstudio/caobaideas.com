import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { Container, Title, GridContainer } from "@/components";
export const Contact = () => {
  return (
    <Container>
      <Title title="CONTÁCTANOS Y FORMA PARTE DE GOLDEN GYM" blackColor />
      <Slide triggerOnce>
        <GridContainer>
          <a href="#" className={styles.contactCard}>
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a href="#" className={styles.contactCard}>
            <IoCallOutline />
            <span>Llamada</span>
          </a>
          <a href="#" className={styles.contactCard}>
            <CiLocationArrow1 />
            <span>Ubicación</span>
          </a>
        </GridContainer>
      </Slide>
    </Container>
  );
};
