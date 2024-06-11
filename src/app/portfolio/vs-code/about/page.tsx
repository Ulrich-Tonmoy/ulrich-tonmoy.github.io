"use client";

/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/vs-code/about-page.module.css";
import { useEffect, useState } from "react";
import { urlFor, client } from "@/lib/client";
import { motion } from "framer-motion";

const About = () => {
  const [techStacks, setTechStacks] = useState<any>([]);

  useEffect(() => {
    const query = '*[_type == "techStacks"]';
    client.fetch(query).then((res) => setTechStacks(res));
  }, []);
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.headText}>
        <span className={styles.span}>Fight for your Fairytales.</span> <br />
        <span className={styles.span}>&quot;Someday&quot; </span> is a disease <br /> that
        will take your<span className={styles.span}> Dream </span>
        to the Grave with you. <br /> <span className={styles.span}>-Tim Ferriss</span>
      </h2>
      <div className={styles.profiles}>
        {techStacks?.map((tech: any, index: any) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.item}
            key={tech.title + index}
          >
            <img className={styles.img} src={urlFor(tech?.imgUrl)} alt={tech?.title} />
            <h2 className={styles.boldText}>{tech?.title}</h2>
            <p className={styles.text}>{tech?.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
