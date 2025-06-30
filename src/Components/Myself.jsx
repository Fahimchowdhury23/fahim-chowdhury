import React from "react";
import TrueFocus from "./TrueFocus";
import { FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Myself = () => {
  return (
    <div className="pt-24 w-11/12 mx-auto">
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

      <h1 className="font-extrabold text-2xl md:text-4xl pt-6">
        Hi there, I'm Fahim Chowdhury
      </h1>
      <p className="pt-5">
        A passionate <strong>Full stack web developer</strong> with a flair for
        crafting visually striking, intuitive user interfaces. With a strong
        command of{" "}
        <span className="underline decoration-black/50 font-semibold">
          JavaScript and React
        </span>
        , I specialize in transforming complex ideas into elegant, responsive
        digital experiences that captivate across every device. Driven by both
        logic and imagination, I don't just code — I create. My love for
        literature fuels my creativity, allowing me to weave storytelling into
        every line of code and bring depth to every design. Whether it's
        breathing life into pixels or engineering seamless user journeys, I
        thrive at the intersection of art and technology.
      </p>

      <div className="flex gap-3 items-center pt-4">
        <a target="blank" href="https://github.com/Fahimchowdhury23">
          <button className="px-5 hover:bg-black hover:text-white transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
            GitHub
          </button>
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/fahim-chowdhury-369933368/"
        >
          <button className="px-4 hover:bg-black hover:text-white transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
            LinkedIn
          </button>
        </a>
        <a target="blank" href="">
          <button className="px-4 flex items-center gap-2 hover:bg-black hover:text-white transition-all cursor-pointer duration-300 py-2 border-1 rounded-full">
            <MdOutlineFileDownload size={20} /> Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Myself;
