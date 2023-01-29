import "react-tooltip/dist/react-tooltip.css";
import styles from "../styles/SkillsPage.module.css";
import { motion } from "framer-motion";
import { client, urlFor } from "./../client";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [activeFilter, setActiveFilter] = useState("All");
    const [filterSkills, setFilterSkills] = useState([]);

    const [activeQualification, setActiveQualification] = useState("Work Experience");

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const educationQuery = '*[_type == "educations"]';
        const skillsQuery = '*[_type == "skills"]';
        client.fetch(query).then((res) => {
            setExperience(res);
        });
        client.fetch(educationQuery).then((res) => {
            setEducation(res);
        });
        client.fetch(skillsQuery).then((res) => {
            setSkills(res);
            setFilterSkills(res);
        });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterSkills(skills);
            } else {
                setFilterSkills(skills.filter((skill) => skill.tag === item));
            }
        }, 500);
    };
    const handleQualification = (item) => {
        setActiveQualification(item);
    };

    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
        >
            <h2 className={styles.headText}>Skills & Qualifications</h2>
            <div className={styles.container}>
                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className={styles.list}
                >
                    <div className={styles.filter}>
                        {["Frontend", "Backend", "Game", "AI/ML", "Other", "All"].map(
                            (item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleWorkFilter(item)}
                                    className={`${styles.filterItem} ${styles.flex} ${
                                        styles.text
                                    } ${activeFilter === item ? `${styles.itemActive}` : ""}`}
                                >
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                    {filterSkills
                        ?.sort((a, b) => a?.sortId - b?.sortId)
                        .map((skill) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className={`${styles.item} ${styles.flex}`}
                                key={skill?.name}
                            >
                                <div
                                    className={`${styles.flex} ${styles.itemDiv}`}
                                    style={{ backgroundColor: skill?.bgColor }}
                                >
                                    <img
                                        src={urlFor(skill?.icon)}
                                        alt={skill?.name}
                                    />
                                </div>
                                <p className={styles.text}>{skill?.name}</p>
                            </motion.div>
                        ))}
                </motion.div>
                <motion.div className={styles.exp}>
                    <div className={styles.filter}>
                        {["Education", "Work Experience"].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleQualification(item)}
                                className={`${styles.filterItem} ${styles.flex} ${styles.text} ${
                                    activeQualification === item ? `${styles.itemActive}` : ""
                                }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {activeQualification === "Work Experience"
                        ? experience?.map((exp, index) => (
                              <motion.div className={styles.expItem} key={index}>
                                  <div className={styles.expYear}>
                                      <p className={styles.boldText}>{exp?.company}</p>
                                  </div>
                                  <motion.div className={styles.expWorks}>
                                      {exp?.works?.map((work, i) => (
                                          <div key={i} className={styles.expWorkContainer}>
                                              <div>
                                                  <span className={styles.expWorkRounder}></span>
                                                  {exp?.works?.length !== i + 1 && (
                                                      <span className={styles.expWorkLine}></span>
                                                  )}
                                              </div>
                                              <motion.div
                                                  whileInView={{ opacity: [0, 1] }}
                                                  transition={{ duration: 0.5 }}
                                                  className={styles.expWork}
                                                  id={work?.name}
                                              >
                                                  <h4 className={styles.boldText}>{work?.year}</h4>
                                                  <p className={styles.text}>{work?.name}</p>
                                              </motion.div>
                                              <Tooltip
                                                  anchorId={work?.name}
                                                  effect="solid"
                                                  arrowColor="#fff"
                                                  clickable
                                                  className={styles.skillsTooltip}
                                              >
                                                  {work?.desc}
                                              </Tooltip>
                                          </div>
                                      ))}
                                  </motion.div>
                              </motion.div>
                          ))
                        : education?.map((edu, index) => (
                              <motion.div className={styles.expItem} key={index}>
                                  <div className={styles.expYear}>
                                      <p className={styles.boldText}>{edu?.year}</p>
                                  </div>
                                  <motion.div className={styles.expWorks}>
                                      {edu?.educationInfo?.map((info, i) => (
                                          <div key={i} className={styles.expWorkContainer}>
                                              <div>
                                                  <span className={styles.expWorkRounder}></span>
                                                  {edu?.educationInfo?.length !== i + 1 && (
                                                      <span className={styles.expWorkLine}></span>
                                                  )}
                                              </div>
                                              <motion.div
                                                  whileInView={{ opacity: [0, 1] }}
                                                  transition={{ duration: 0.5 }}
                                                  className={styles.expWork}
                                                  id={info?.degree}
                                              >
                                                  <h4 className={styles.boldText}>
                                                      {info?.degree}
                                                  </h4>
                                                  <p className={styles.text}>
                                                      {info?.instituteName}
                                                  </p>
                                              </motion.div>
                                              <Tooltip
                                                  anchorId={info?.degree}
                                                  effect="solid"
                                                  arrowColor="#fff"
                                                  clickable
                                                  className={styles.skillsTooltip}
                                              >
                                                  {info?.desc}
                                              </Tooltip>
                                          </div>
                                      ))}
                                  </motion.div>
                              </motion.div>
                          ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skills;
