import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <section className="border text-secondary border-base-100 hover:shadow-lg transition-all duration-300 ease-out rounded-lg overflow-hidden flex flex-col">
      <div>
        <a target="_blank" className="cursor-pointer" href={project?.website}>
          <video
            className="pointer-events-none object-cover object-top w-full transition-all duration-500 ease-out"
            autoPlay
            muted
            loop
            playsInline
            src={project.video}
          ></video>
        </a>
      </div>
      <div className="p-2 flex flex-col flex-1">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg">{project.title}</h2>
          <time className="text-sm">{project.timeline}</time>
          <p className="text-sm mt-1 text-secondary/80">
            {project.about} <br />
            <Link className="text-blue-500" to={`/project/${project.id}`}>
              <span className="underline">See More</span>
            </Link>
          </p>
        </div>

        <div className="flex-1" />

        {/* Tech Stack */}

        <div>
          <div>
            <ul className="flex flex-wrap text-pretty gap-1 mt-2">
              {project.tech.map((icon, index) => (
                <li
                  className="px-1 border border-transparent inline-flex items-center py-0 text-xs font-semibold transition-all duration-100 bg-accent text-secondary rounded-md"
                  key={index}
                >
                  {icon}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row flex-wrap items-start gap-1 pt-2">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
