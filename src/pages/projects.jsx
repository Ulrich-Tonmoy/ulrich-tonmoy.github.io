import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "./../client";
import { EyeIcon, GithubIcon } from "../components/icons";

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [projects, setProjects] = useState([]);
    const [filterProject, setFilterProject] = useState([]);

    useEffect(() => {
        const query = '*[_type == "projects"]';
        client.fetch(query).then((res) => {
            setProjects(res);
            setFilterProject(res);
        });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterProject(projects);
            } else {
                setFilterProject(projects.filter((project) => project.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={styles.container}
        >
            <h2 className={styles.headText}>
                I Like<span> Making Stuff</span>
                <br />
                and <span> Putting it on the Internet</span>
            </h2>
            <div className={styles.filter}>
                {["Web", "MERN", "Mobile", "Desktop", "Game", "AI/ML", "All"].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`${styles.filterItem} ${styles.flex} ${styles.text} ${
                            activeFilter === item ? `${styles.active}` : ""
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className={styles.card}
            >
                {filterProject?.map((project, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className={`${styles.projectItem} ${styles.flex}`}
                        key={index}
                    >
                        <div className={`${styles.img} ${styles.flex}`}>
                            <img src={urlFor(project?.imgUrl)} alt={project?.name} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    staggerChildren: 0.5,
                                }}
                                className={` ${styles.projectHover} ${styles.flex}`}
                            >
                                {project?.projectLink && (
                                    <a href={project?.projectLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className={styles.flex}
                                        >
                                            <EyeIcon />
                                        </motion.div>
                                    </a>
                                )}
                                {project?.codeLink && (
                                    <a href={project?.codeLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className={styles.flex}
                                        >
                                            <GithubIcon />
                                        </motion.div>
                                    </a>
                                )}
                            </motion.div>
                        </div>
                        <div className={`${styles.content} ${styles.flex}`}>
                            <h4 className={styles.boldText}>{project?.title}</h4>
                            <p className={styles.text} style={{ marginTop: 10 }}>
                                {project?.description.substring(0, 90)}...
                            </p>
                            <div className={`${styles.tag} ${styles.flex}`}>
                                <p className={styles.text}>{project?.tags[0]}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
export default Projects;
