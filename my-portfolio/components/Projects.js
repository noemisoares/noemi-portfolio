import styles from "./projects.module.css";
import Link from "next/link";
import Image from "next/image";

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
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className={styles.projectImage}
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href="/forca">
              <button className={styles.projectButton}>
                <strong>Ver Projeto</strong>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
