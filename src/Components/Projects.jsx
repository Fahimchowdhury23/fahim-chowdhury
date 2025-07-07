import React, { use } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = fetch("/projects.json").then((res) => res.json());

const Projects = () => {
  const projects = use(projectsData);

  return (
    <div className="pt-15 md:pt-18">
      <div className="text-center text-secondary">
        <a className="px-3 py-1 font-semibold transition-colors duration-100 bg-secondary text-primary rounded-lg">
          My Projects
        </a>

        <h2 className="text-2xl md:text-3xl font-extrabold py-3">
          Check out my latest work
        </h2>

        <p>
          I've worked on a variety of projects. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5 md:pt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
