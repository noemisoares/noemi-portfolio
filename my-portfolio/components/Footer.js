import styles from "./components.module.css";
import { Social } from "./Social";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Social className={styles.socialsFooter} />
      <p>Recife, PE</p>
      <p>&copy; {new Date().getFullYear()} Noemi Soares</p>
    </footer>
  );
}
