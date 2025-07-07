import React from "react";
import { useLoaderData, useParams } from "react-router";
import ScrollToTop from "../Components/ScrollToTop";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects.find((p) => p.id === parseInt(id));

  const dynamicTitle = `${project.title} | Fahim`;

  return (
    <section className="text-secondary">
      <title>{dynamicTitle}</title>
      <ScrollToTop></ScrollToTop>

      <a target="_blank" href={project.website}>
        <div className="border-accent border-1 rounded-xl overflow-hidden ">
          <img
            className="object-cover object-top"
            src={project.img}
            alt={project.title}
          />
        </div>
      </a>

      <h1 className="text-center mt-4 text-2xl md:text-4xl font-extrabold">
        {project.title}
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-1 pt-2">
        <a target="_blank" href={project?.website}>
          <div className="px-2 text-xs py-1 flex items-center gap-1.5 font-semibold transition-colors duration-100 bg-secondary hover:bg-secondary/80 text-primary rounded-md">
            {" "}
            <TbWorld /> Website
          </div>
        </a>

        <a target="_blank" href={project.source}>
          <div className="px-2 text-xs py-1 flex items-center gap-1.5 font-semibold transition-colors duration-100 bg-secondary hover:bg-secondary/80 text-primary rounded-md">
            <FaGithub /> Source
          </div>
        </a>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-bold mt-6">Description :</h3>
        <p className="text-sm md:text-base mt-1 md:mt-3 text-secondary/80">
          {project.description}
        </p>
      </div>

      <div>
        <h4 className="text-lg md:text-xl font-bold mt-6">Challenges :</h4>
        <ul className="mt-1 text-sm md:text-base md:mt-3 text-secondary/80 px-6 md:px-8">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="list-disc">
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg md:text-xl font-bold mt-6">Improvements :</h4>
        <ul className="mt-1 text-sm md:text-base md:mt-3 text-secondary/80 px-6 md:px-8">
          {project.improvements.map((i, index) => (
            <li key={index} className="list-disc">
              {i}
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </section>
  );
};

export default ProjectDetails;
