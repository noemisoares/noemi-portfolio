import styles from "./components.module.css";
import { Social } from "./Social";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p> Recife, PE</p>
      <p> (81) 98333-6777</p>
      <Social className={styles.socialsFooter} />

      <p>&copy; {new Date().getFullYear()} Noemi Soares</p>
    </footer>
  );
}
