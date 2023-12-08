/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/project-card.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/lib/client";
import { EyeIcon, GithubIcon } from "@/components/icons";
import { useState } from "react";
import { Modal } from "./";

const ProjectCard = ({ project }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
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
          <p className={styles.text} style={{ marginTop: 10 }}>
            {project?.description.substring(0, 70)}...
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowModal(!showModal)}
            >
              show more
            </motion.button>
          </p>
          <div className={`${styles.tag} ${styles.flex}`}>
            <p className={styles.text}>{project?.tags[0]}</p>
          </div>
        </div>
      </motion.div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showModal && <Modal project={project} handleClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
