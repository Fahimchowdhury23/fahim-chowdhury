import React from "react";
import TrueFocus from "./TrueFocus";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Skills from "./Skills";

const Myself = () => {
  // Smooth Scrolling

  const handleScroll = (sectionName) => {
    const section = document.getElementById(sectionName);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    {
      platform: "Github",
      link: "https://github.com/Fahimchowdhury23",
      icon: <FaGithub size={20} />,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/md-fahim-chowdhoury",
      icon: <FaLinkedin size={20} />,
    },
    {
      platform: "Discord",
      link: "https://discordapp.com/users/879041544181649500",
      icon: <FaDiscord size={20} />,
    },
    {
      platform: "Resume",
      link: "https://drive.google.com/file/d/1PanJ2HcmK7b6rXjw_l9qy8WPHaDMbFtr/view?usp=sharing",
      icon: <MdOutlineFileDownload size={20} />,
    },
  ];

  return (
    <div>
      <TrueFocus
        sentence="Developer Bibliophile"
        manualMode={true}
        blurAmount={4}
        borderColor="green"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />

      <section className="flex justify-between">
        <div className="text-secondary">
          <h2 className="font-bold hidden md:block text-2xl pt-5">Hi,I'm</h2>

          <h1 className="hidden md:block font-extrabold text-4xl pt-1">
            Fahim Chowdhury
          </h1>

          <h2 className="font-extrabold md:hidden text-2xl pt-5">
            Hi,I'm Fahim
          </h2>

          <p className="max-w-lg flex-wrap flex pt-1 md:pt-3">
            <strong>Frontend developer.{"\u00A0"}</strong> With a strong command
            of
            <strong>JavaScript and React.</strong>Love building things. Active
            on
            {"\u00A0"}
            <span>
              <a
                className="hover:underline hover:text-blue-700"
                target="_blank"
                href="https://www.linkedin.com/in/md-fahim-chowdhoury"
              >
                LinkedIn.
              </a>
            </span>
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-y-2 gap-x-20 md:gap-3 items-start md:items-center pt-4">
            {socials.map((social, index) => (
              <a key={index} target="blank" href={social.link}>
                <button className="px-2 py-1 flex items-center gap-1 hover:bg-secondary hover:text-primary transition-all cursor-pointer duration-300 border-1 rounded-full">
                  {social.icon} {social.platform}
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* Profile Photo */}

        <div className="w-full mx-auto overflow-hidden pt-10 md:pt-0">
          <img
            className="w-30 h-30 object-cover rounded-full"
            src="./Profile.png"
            alt="profile"
          />
        </div>
      </section>

      <div className="pt-6">
        <h2 className="font-bold text-xl text-secondary pb-2">About</h2>
        <p className="text-sm md:text-base text-gray-500 break-words">
          At the start of 2025, I promised myself I'd become a developer by
          year's end. Now, with a solid grasp of the MERN stack, I build clean,
          user-focused web experiences and{" "}
          <strong className="text-secondary">
            <span
              className="underline cursor-pointer"
              onClick={() => handleScroll("projects")}
            >
              continue to grow through hands-on projects
            </span>
            .
          </strong>
          <br />
          Fiction and literature also shape my creativity, helping me see
          problems from new angles. I'm currently diving into backend
          development and exploring DSA to strengthen my fundamentals, aiming to
          become a{" "}
          <strong className="text-secondary">
            senior developer within the next three years.
          </strong>{" "}
          The journey is just beginning, and I'm all in for what's ahead — if
          you'd like to be a part of it,{" "}
          <strong className="text-secondary">
            <span
              className="underline cursor-pointer"
              onClick={() => handleScroll("contact")}
            >
              just ping me here
            </span>
            .
          </strong>
        </p>
      </div>

      <Skills></Skills>
    </div>
  );
};

export default Myself;
