import "./Skills.scss";
import { motion } from "framer-motion";
import { client, urlFor } from "./../../client";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "./../../wrapper";

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
        <>
            <h2 className="head-text">Skills & Qualifications</h2>
            <div className="app__skills-container">
                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="app__skills-list"
                >
                    <div className="app__skills-filter">
                        {["Frontend", "Backend", "Game", "AI/ML", "Other", "All"].map(
                            (item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleWorkFilter(item)}
                                    className={`app__skills-filter-item app__flex p-text ${
                                        activeFilter === item ? "item-active" : ""
                                    }`}
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
                                className="app__skills-item app__flex"
                                key={skill?.name}
                            >
                                <div
                                    className="app__flex"
                                    style={{ backgroundColor: skill?.bgColor }}
                                >
                                    <img src={urlFor(skill?.icon)} alt={skill?.name} />
                                </div>
                                <p className="p-text">{skill?.name}</p>
                            </motion.div>
                        ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    <div className="app__skills-filter">
                        {["Education", "Work Experience"].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleQualification(item)}
                                className={`app__skills-filter-item app__flex p-text ${
                                    activeQualification === item ? "item-active" : ""
                                }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {activeQualification === "Work Experience"
                        ? experience?.map((exp) => (
                              <motion.div className="app__skills-epx-item" key={exp?.year}>
                                  <div className="app__skills-exp year">
                                      <p className="bold-text">{exp?.company}</p>
                                  </div>
                                  <motion.div className="app__skills-exp-works">
                                      {exp?.works?.map((work, i) => (
                                          <div
                                              key={work?.name}
                                              className="app__skills-exp-work__container"
                                          >
                                              <div>
                                                  <span className="app__skills-exp-work__rounder"></span>
                                                  {exp?.works?.length !== i + 1 && (
                                                      <span className="app__skills-exp-work__line"></span>
                                                  )}
                                              </div>
                                              <motion.div
                                                  whileInView={{ opacity: [0, 1] }}
                                                  transition={{ duration: 0.5 }}
                                                  className="app__skills-exp-work"
                                                  data-tip
                                                  data-for={work?.name}
                                              >
                                                  <h4 className="bold-text">{work?.year}</h4>
                                                  <p className="p-text">{work?.name}</p>
                                              </motion.div>
                                              <ReactTooltip
                                                  id={work?.name}
                                                  effect="solid"
                                                  arrowColor="#fff"
                                                  className="skills-tooltip"
                                              >
                                                  {work?.desc}
                                              </ReactTooltip>
                                          </div>
                                      ))}
                                  </motion.div>
                              </motion.div>
                          ))
                        : education?.map((edu) => (
                              <motion.div className="app__skills-epx-item" key={edu?.year}>
                                  <div className="app__skills-exp year">
                                      <p className="bold-text">{edu?.year}</p>
                                  </div>
                                  <motion.div className="app__skills-exp-works">
                                      {edu?.educationInfo?.map((info, i) => (
                                          <div
                                              key={info?.degree}
                                              className="app__skills-exp-work__container"
                                          >
                                              <div>
                                                  <span className="app__skills-exp-work__rounder"></span>
                                                  {edu?.educationInfo?.length !== i + 1 && (
                                                      <span className="app__skills-exp-work__line"></span>
                                                  )}
                                              </div>
                                              <motion.div
                                                  whileInView={{ opacity: [0, 1] }}
                                                  transition={{ duration: 0.5 }}
                                                  className="app__skills-exp-work"
                                                  data-tip
                                                  data-for={info?.degree}
                                              >
                                                  <h4 className="bold-text">{info?.degree}</h4>
                                                  <p className="p-text">{info?.instituteName}</p>
                                              </motion.div>
                                              <ReactTooltip
                                                  id={info?.degree}
                                                  effect="solid"
                                                  arrowColor="#fff"
                                                  className="skills-tooltip"
                                              >
                                                  {info?.desc}
                                              </ReactTooltip>
                                          </div>
                                      ))}
                                  </motion.div>
                              </motion.div>
                          ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
