import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <p>
        &copy; CAOBA MEDIA & MANAGMENT - 2025
      </p>
      <a href='https://webrstudio.com' target="_blank">
        Desarrollado por WEBRSTUDIO
      </a>
    </footer>
  );
};
