import styles from "./components.module.css";

export function Projects() {

  const projects = [
    {
      title: "Jogo da Forca",
      description: "Implementação do Jogo da Forca em JavaScript, React e Next.js.",
      link: "/forca", // link
      image: "/forca.png", // imagem  public/
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
            <a href={project.link} className={styles.projectButton}>
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
