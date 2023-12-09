/* eslint-disable @next/next/no-img-element */
"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CTA } from "@/components/3d";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/client";
import { randomNumber } from "@/lib/utils";
import binary from "../../../../../public/binary.png";

const About = () => {
  const color = ["red", "green", "yellow", "blue", "orange", "pink", "black"];
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((res) => {
      setExperience(transformData(res));
    });
    client.fetch(skillsQuery).then((res) => {
      setSkills(res);
    });
  }, []);

  function transformData(inputData: any) {
    return inputData.flatMap((experience: any) => {
      const company = experience.company;

      return experience.works.map((work: any) => ({
        name: work.name,
        company: company,
        year: work.year,
        desc: work.desc,
      }));
    });
  }

  return (
    <section className="max-container">
      <title>Tonmoy - 3D Portfolio(About)</title>
      <h1 className="head-text">
        Hello, I&apos;m
        <span className="blue-gradient_text font-semibold drop-shadow"> Tonmoy</span> 👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer & Game Developer, specializing in technical education through hands-on
          learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills
            ?.sort((a: any, b: any) => a?.sortId - b?.sortId)
            .map((skill: any) => (
              <div className="block-container w-20 h-20" key={skill.name} title={skill?.name}>
                <div className={`btn-back btn-back-${color[randomNumber()]} rounded-xl`} />
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
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-12 flex">
          <VerticalTimeline animate={true}>
            {experience.map((exp: any, index) => (
              <VerticalTimelineElement
                key={index}
                visible={true}
                date={exp.year}
                iconStyle={{ background: "linear-gradient(135deg, #adfda2 -20%, #11d3f3 120%)" }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={binary}
                      alt={exp.company}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  boxShadow: "none",
                  borderBottomColor: color[randomNumber()],
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">{exp.name}</h3>
                  <p className="text-slate-500 font-medium text-base" style={{ margin: 0 }}>
                    {exp.company}
                  </p>
                </div>

                <div className="my-5 list-disc ml-5 space-y-2">{exp.desc}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
