/* eslint-disable @next/next/no-img-element */
"use client";

import { CTA } from "@/components/3d";
import arrow from "../../../../../public/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { randomNumber } from "@/lib/utils";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/client";

const Projects = () => {
  const color = ["red", "green", "yellow", "blue", "orange", "pink", "black"];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((res) => {
      setProjects(res);
    });
  }, []);

  return (
    <section className="max-container">
      <title>Tonmoy - 3D Portfolio(Projects)</title>
      <h1 className="head-text">
        My&nbsp;
        <span className="blue-gradient_text drop-shadow font-semibold">Projects</span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I&apos;ve embarked on numerous projects throughout the years, but these are the
        ones I hold closest to my heart. Many of them are open-source, so if you come
        across something that piques your interest, feel free to explore the codebase and
        contribute your ideas for further enhancements. Your collaboration is highly
        valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project: any, index: any) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl btn-back-${color[randomNumber()]}`} />
              <Link
                href={urlFor(project?.imgUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={urlFor(project?.imgUrl)}
                    alt="project screenshot"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-semibold">{project.title}</h4>
              <p className="mt-2 text-slate-500">
                {project?.description.length > 200
                  ? `${project?.description.substring(0, 200)}...`
                  : project?.description}
              </p>
              {project?.projectLink && (
                <div className="mt-5 flex items-center gap-2">
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
              {project?.codeLink && (
                <div className="mt-5 flex items-center gap-2">
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Github Link
                  </Link>
                  <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
