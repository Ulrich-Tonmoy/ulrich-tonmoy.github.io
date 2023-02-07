import styles from "../styles/ProjectCard.module.css";
import { motion } from "framer-motion";
import { urlFor } from "./../client";
import { EyeIcon, GithubIcon } from "./icons";
import { useState } from "react";

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
    const getColor = () => {
        return Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={`${styles.projectItem} ${styles.flex}`}
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
                <div className={styles.techContainer}>
                    {showModal &&
                        project?.techs?.map((tech, index) => (
                            <div
                                className={`${styles.tech}`}
                                style={{ border: `0.1rem solid #${getColor()}` }}
                                key={index}
                            >
                                <p className={styles.text}>{tech}</p>
                            </div>
                        ))}
                </div>
                <p className={styles.text} style={{ marginTop: 10 }}>
                    {showModal
                        ? project?.description
                        : `${project?.description.substring(0, 70)}...`}
                    <button onClick={() => setShowModal(!showModal)}>
                        {showModal ? "hide" : "show"}
                    </button>
                </p>
                <div className={`${styles.tag} ${styles.flex}`}>
                    <p className={styles.text}>{project?.tags[0]}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
