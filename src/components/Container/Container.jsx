import styles from "./styles.module.css";

export const Container = ({ children, backgroundBlack, id }) => {
  return (
    <section
      id={!id ? null : id}
      className={`${styles.containerWrapper} ${
        !backgroundBlack ? "" : styles.backgroundBlack
      }`}
    >
      {children}
    </section>
  );
};
