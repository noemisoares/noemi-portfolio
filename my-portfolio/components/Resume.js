import styles from "./resume.module.css";
import { FaBook } from "react-icons/fa";

export function Resume() {
  return (
    <section className={styles.resume}>
      <h2>Currículo</h2>
      <div className={styles.resumeGrid}>
        <div className={styles.card}>
          <h3>Projetos e Pesquisas</h3>
          <ul>
            <li>
              <strong>Pesquisa em Computação Quântica</strong> – Liderança de
              equipe e produção de dois eBooks acadêmicos:
              <ul>
                <li>
                  <a
                    href="/ebooks/ebook-linguagem-julia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkEbook"
                  >
                    <FaBook className="iconEbook" /> <i>Linguagem Julia na
                    Programação Quântica</i>
                  </a>
                </li>
                <li>
                  <a
                    href="/ebooks/ebook-criptografia-quantica.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkEbook"
                  >
                    <FaBook className="iconEbook" /> <i>Criptografia Quântica</i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Projetos Web</strong> – Desenvolvimento de aplicações web
              com React, Next.js, e foco em boas práticas de programação.
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Educação</h3>
          <ul>
            <li>
              Bacharelado em Ciência da Computação -{" "}
              <strong>Universidade Católica de Pernambuco</strong>
            </li>
            <li>
              Curso Suporte em TI Google - <strong>Coursera</strong>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Pesquisa</h3>
          <ul>
            <li>React, Next.js, Javascript</li>
            <li>C, Python, Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}