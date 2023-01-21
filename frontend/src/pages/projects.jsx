import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";

const Projects = () => {
    return (
        <>
            <h3>Stuff I've Built So Far</h3>
            <div className={styles.container}>
                {/* {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))} */}
            </div>
        </>
    );
};
export default Projects;
