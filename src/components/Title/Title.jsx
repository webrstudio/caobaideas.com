import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
export const Title = ({ title }) => {
  return (
    <h2
      className={`${styles.titleWrapper} smallContainer`}
    >
      <Slide triggerOnce>{title}</Slide>
    </h2>
  );
};
