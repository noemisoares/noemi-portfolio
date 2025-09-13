import styles from "./projects.module.css";
import Link from "next/link";

export function Projects() {

  const projects = [
    {
      title: "Jogo da Forca",
      description: "Implementação do Jogo da Forca em JavaScript, React e Next.js.",
      link: "/forca",
      image: "/banner_forca.png",
    },
 
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Projetos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href="/forca">
              <button className={styles.projectButton}><strong>Ver Projeto</strong></button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
