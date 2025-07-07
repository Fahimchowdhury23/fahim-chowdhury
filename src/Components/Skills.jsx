import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "React Router",
    "Firebase",
    "JWT",
    "Axios",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Html",
    "Css",
    "TailwindCSS",
    "Vite",
  ];

  return (
    <div className="pt-6">
      <h1 className="font-bold text-xl text-secondary pb-3">Skills</h1>
      <div>
        <ul className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <li
              className="px-2.5 text-sm py-0.5 font-semibold transition-colors duration-100 bg-secondary hover:bg-secondary/80 text-primary rounded-md"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
