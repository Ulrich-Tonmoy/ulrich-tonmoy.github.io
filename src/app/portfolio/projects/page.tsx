"use client";

import { ProjectCard } from "@/components/vs-code";
import styles from "@/styles/vs-code/projects-page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/lib/client";

const Projects = () => {
  const [filters, setFilters] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    const projectsFilterQuery = '*[_type == "filters"]';
    client.fetch(projectsFilterQuery).then((res) => {
      setFilters(res.filter((x: any) => x.name === "Project")[0].filter);
    });
    client.fetch(query).then((res) => {
      setProjects(res);
      setFilterProject(res);
    });
  }, []);

  const handleWorkFilter = (item: any) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(projects.filter((project: any) => project.tags.includes(item)));
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
        {filters?.map((item, index) => (
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
          <ProjectCard project={project} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Projects;
