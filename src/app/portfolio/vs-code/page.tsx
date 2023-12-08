/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "@/styles/home-page.module.css";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/client";
import { motion } from "framer-motion";

export default function Home() {
  const [profile, setProfile] = useState<any>([]);
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
              <p className={styles.text}>Hello, I&apos;m</p>
              <h1 className={styles.headText}>{profile[0]?.name}</h1>
            </div>
          </div>
          <div className={styles.tagCmp}>
            {profile[0]?.skills?.map((skill: any) => (
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
          src="/circle.svg"
          alt="profile-circle"
          className={styles.circle}
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.headerCircles}
      >
        {profile[0]?.skillImages?.map((circle: any, index: any) => (
          <div className={styles.circleCmp} key={`circle-${index}`}>
            <img src={urlFor(circle)} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
