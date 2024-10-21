/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/vs-code/modal.module.css";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/client";
import { EyeIcon, GithubIcon } from "@/components/vs-code/icons";
import ReactDOM from "react-dom";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ project, handleClose }: any) => {
  const getColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  return ReactDOM.createPortal(
    <motion.div
      onClick={handleClose}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button className={styles.closeButton} onClick={handleClose}>
          x
        </button>
        <p className={styles.titleText}>{project?.title}</p>
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
          <div className={styles.tagContainer}>
            {project?.tags?.map((tag: any, index: any) => (
              <div className={`${styles.tag} ${styles.flex}`} key={index}>
                <p className={styles.text}>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.techContainer}>
          {project?.techs?.map((tech: any, index: any) => (
            <div
              className={`${styles.tech}`}
              style={{ border: `0.1rem solid #${getColor()}` }}
              key={index}
            >
              <p className={styles.text}>{tech}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.content} ${styles.flex}`}>
          <p className={styles.desc} style={{ marginTop: 10 }}>
            {project?.description}
          </p>
        </div>
      </motion.div>
    </motion.div>,
    document.body // Append the modal to the body
  );
};

export default Modal;
