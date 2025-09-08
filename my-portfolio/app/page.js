import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Image
          src="/me.png"
          alt="Foto de Noemi Soares"
          width={150}
          height={150}
          className={styles.avatar}
        />
        <h2>Olá, eu sou Noemi Soares</h2>
        <p> 
          Este é meu portfólio criado com Next.js.
        </p>
      </div>
    </section>
  );
}
