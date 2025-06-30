import React from "react";
import TrueFocus from "./TrueFocus";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Myself = () => {
  return (
    <div className="pt-24 w-4/5 mx-auto">
      <div>
        <TrueFocus
          sentence="Developer Bibliophile"
          manualMode={true}
          blurAmount={4}
          borderColor="green"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </div>
      <section className="flex flex-col md:flex-row">
        <div>
          <h1 className="font-extrabold text-2xl md:text-4xl pt-5">
            Hi there, I'm Fahim Chowdhury
          </h1>
          <p className="pt-3 lg:w-3/4">
            A passionate <strong>Full stack web developer.</strong> With a
            strong command of{" "}
            <span className="underline decoration-black/50 font-semibold">
              JavaScript and React.
            </span>{" "}
            I love building things and help people. Very active on Discord.
          </p>

          <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center pt-4">
            <a target="blank" href="https://github.com/Fahimchowdhury23">
              <button className="px-3 flex items-center gap-1  hover:bg-black hover:text-white transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
                <FaGithub size={20} /> GitHub
              </button>
            </a>

            <a target="blank" href="discordapp.com/users/879041544181649500">
              <button className="px-3 hover:bg-black hover:text-white flex items-center gap-1 transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
                <FaDiscord size={20} /> Discord
              </button>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/fahim-chowdhury-369933368/"
            >
              <button className="px-3 hover:bg-black flex items-center gap-1 hover:text-white transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
                <FaLinkedin size={20} /> LinkedIn
              </button>
            </a>
            <a target="blank" href="">
              <button className="px-3 flex items-center gap-1 hover:bg-black hover:text-white transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
                <MdOutlineFileDownload size={20} /> Resume
              </button>
            </a>
          </div>

          <div>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="w-1/2">
          <img
            className="w-60 h-60 object-cover rounded-full"
            src="./Profile.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Myself;
