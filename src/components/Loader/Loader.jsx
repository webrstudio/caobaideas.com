import styles from "./styles.module.css";

export const Loader = ({ fullScreen }) => {
  return (
    <section className={styles.loaderWrapper}>
      <div className={styles.loaderSpinner} />
    </section>
  );
};
