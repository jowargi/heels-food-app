import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright © 2025 Food App</p>
      <address className={styles.address}>Нью-Йорк, Россия</address>
    </footer>
  );
}
