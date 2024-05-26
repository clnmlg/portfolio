import styles from '../styles/ProjectCard.module.css'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className={styles.cta}>
                    {project.source_code && (
                        <a
                            href={project.source_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Source Code
                        </a>
                    )}
                    {project.name === 'Stackchain' ? (
                        <h1></h1>
                    ) : project.name === 'IvyBridge-Opencore' ? (
                        <h1></h1>
                    ) : (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
