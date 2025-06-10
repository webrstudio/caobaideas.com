import styles from "./styles.module.css";

export const Container = ({ children, bgClassName, id }) => {
  return (
    <section
      id={!id ? null : id}
      className={`${styles.containerWrapper} ${
        !bgClassName ? "" : bgClassName
      }`}
    >
      {children}
    </section>
  );
};
