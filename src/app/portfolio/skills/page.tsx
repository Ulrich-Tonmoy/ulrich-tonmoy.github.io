/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "@/styles/vs-code/skills-page.module.css";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/client";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { color, randomNumber } from "@/lib/utils";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filters, setFilters] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterSkills, setFilterSkills] = useState([]);

  const [activeQualification, setActiveQualification] =
    useState("Work Experience");

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const educationQuery = '*[_type == "educations"]';
    const skillsQuery = '*[_type == "skills"]';
    const skillsFilterQuery = '*[_type == "filters"]';
    client.fetch(skillsFilterQuery).then((res) => {
      setFilters(res.filter((x: any) => x.name === "Skill")[0].filter);
    });
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

  const handleWorkFilter = (item: any) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterSkills(skills);
      } else {
        setFilterSkills(skills.filter((skill: any) => skill.tag === item));
      }
    }, 500);
  };
  const handleQualification = (item: any) => {
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
            {filters?.map((item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`${styles.filterItem} ${styles.flex} ${
                  styles.text
                } ${activeFilter === item ? `${styles.itemActive}` : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-8">
            {filterSkills
              ?.sort((a: any, b: any) => a?.sortId - b?.sortId)
              .map((skill: any) => (
                <div
                  className="block-container w-16 h-16"
                  key={skill.name}
                  title={skill?.name}
                >
                  <div
                    className={`btn-back btn-back-${
                      color[randomNumber()]
                    } rounded-xl`}
                  />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={urlFor(skill?.icon)}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
        <motion.div className={styles.exp}>
          <div className={styles.filter}>
            {["Education", "Work Experience"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleQualification(item)}
                className={`${styles.filterItem} ${styles.flex} ${
                  styles.text
                } ${
                  activeQualification === item ? `${styles.itemActive}` : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          {activeQualification === "Work Experience"
            ? experience?.map((exp: any, index: any) => (
                <motion.div className={styles.expItem} key={index}>
                  <div className={styles.expYear}>
                    <p className={styles.boldText}>{exp?.company}</p>
                  </div>
                  <motion.div className={styles.expWorks}>
                    {exp?.works?.map((work: any, i: any) => (
                      <div key={i} className={styles.expWorkContainer}>
                        <div>
                          <span className={styles.expWorkRounder}></span>
                          {exp?.works?.length !== i + 1 && (
                            <span className={styles.expWorkLine}></span>
                          )}
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className={styles.expWork}
                              >
                                <h4 className={styles.boldText}>
                                  {work?.year}
                                </h4>
                                <p className={styles.text}>{work?.name}</p>
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent className={styles.skillsTooltip}>
                              <p>{work?.desc}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              ))
            : education?.map((edu: any, index: any) => (
                <motion.div className={styles.expItem} key={index}>
                  <div className={styles.expYear}>
                    <p className={styles.boldText}>{edu?.year}</p>
                  </div>
                  <motion.div className={styles.expWorks}>
                    {edu?.educationInfo?.map((info: any, i: any) => (
                      <div key={i} className={styles.expWorkContainer}>
                        <div>
                          <span className={styles.expWorkRounder}></span>
                          {edu?.educationInfo?.length !== i + 1 && (
                            <span className={styles.expWorkLine}></span>
                          )}
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className={styles.expWork}
                              >
                                <h4 className={styles.boldText}>
                                  {info?.degree}
                                </h4>
                                <p className={styles.text}>
                                  {info?.instituteName}
                                </p>
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent className={styles.skillsTooltip}>
                              <p>{info?.desc}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
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
