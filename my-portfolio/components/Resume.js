import styles from "./resume.module.css";

export function Resume() {
  return (
    <section className={styles.resume}>
      <h2>Currículo</h2>
      <div className={styles.resumeGrid}>
        <div className={styles.card}>
          <h3>Experiência</h3>
          <ul>
            <li>
              <strong>Desenvolvedor</strong> - St
              (2023-2025)
            </li>
            <li>
              <strong>Estágio</strong> - Em
              (2022-2023)
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Educação</h3>
          <ul>
            <li>Bacharelado em Ciência da Computação - <strong>Universidade Católica de Pernambuco</strong></li>
            <li>Curso Suporte em TI Google - <strong>Coursera</strong></li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Habilidades</h3>
          <ul>
            <li>React, Next.js, Javascript</li>
            <li>C, Python, Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}