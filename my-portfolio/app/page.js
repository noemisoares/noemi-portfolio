import Image from "next/image";
import styles from "./page.module.css";
import { Social } from "@/components/Social";
import { Footer } from "@/components/Footer";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src="/me.png"
            alt="Foto de Noemi Soares"
            width={250}
            height={250}
            className={styles.avatar}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>Olá, eu sou Noemi Soares</h2>
          <p>
            Desenvolvedora apaixonada por tecnologia, focada em criar soluções
            criativas e funcionais.
          </p>
          <Social />
        </div>
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
      
    </main>
  );
}
