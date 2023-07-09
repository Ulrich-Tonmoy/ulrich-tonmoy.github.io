import styles from "../styles/HomePage.module.css";
import { useEffect, useState } from "react";
import { client, urlFor } from "./../client";
import { motion } from "framer-motion";
import { Hero } from "../components";

export default function Home() {
  const [profile, setProfile] = useState([]);
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  useEffect(() => {
    const query = '*[_type == "profile"]';
    client.fetch(query).then((res) => {
      setProfile(res);
    });
  }, []);

  if (Math.floor(Math.random() * 2 && window.innerWidth >= 1024) === 1) return <Hero />;
  return (
    <div className={styles.header}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.info}
      >
        <div className={styles.badge}>
          <div className={styles.badgeCmp}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={styles.text}>Hello, I'm</p>
              <h1 className={styles.headText}>{profile[0]?.name}</h1>
            </div>
          </div>
          <div className={styles.tagCmp}>
            {profile[0]?.skills?.map((skill) => (
              <p className={styles.bio} key={skill}>
                {skill}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.img}
      >
        {profile[0] && <img src={urlFor(profile[0].profileImage)} alt="profile pic" />}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="./circle.svg"
          alt="profile-circle"
          className={styles.circle}
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.headerCircles}
      >
        {profile[0]?.skillImages?.map((circle, index) => (
          <div className={styles.circleCmp} key={`circle-${index}`}>
            <img src={urlFor(circle)} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
