import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiZod } from "react-icons/si";

const Skill = () => {
  return (
    <div id="skill" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiHtml5 color="#E34F26" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoCss3 color="#1572b6" size={30} data-tip="css" />
            <ReactTooltip place="top" effect="solid" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#3B82F6" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJsBadge color="#F7DF1E" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={30} />
          </span>
          <span className="p-3 bg-white flex items-center rounded-2xl">
            <SiExpress color="#000000" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongoose color="#A40000" size={30} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiZod color="#3E6DB0" size={30} />
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Skill;
