import { useState, useEffect, Fragment } from "react";
import styles from "../styles/Hero.module.css";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { client } from "./../client";

const Hero = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const query = '*[_type == "profile"]';
    client.fetch(query).then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <section className={`${styles.heroSection} ${styles.paddingX}`}>
      <div className={styles.heroInfoContainer}>
        <div className={styles.heroLineContainer}>
          <div className={styles.heroLine1} />
          <div className={`${styles.heroLine2} ${styles.violetGradient}`} />
        </div>
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className={styles.heroHeadTextName}>{profile[0]?.name}</span>
          </h1>
          <p className={styles.heroSubText}>
            I'm &nbsp;
            {profile[0]?.skills?.map((skill, index) => (
              <Fragment key={index}>
                {skill} <br className={styles.lineBreak} />
              </Fragment>
            ))}
          </p>
        </div>
        <div>
          <EarthCanvas />
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
