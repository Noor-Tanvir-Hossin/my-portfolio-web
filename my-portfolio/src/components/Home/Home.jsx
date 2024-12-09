import React from "react";
import avtarImage from "../../assets/7358602-removebg-preview.png";
import TextChange from "../Projects/TextChange";
import Download from "../Download/Download";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange></TextChange>
        </h1>
        <p className="text-sm mt-3 md:text-2xl tracking-tight">
          Crafting dynamic web solutions with MERN magic—where every line of
          code brings ideas to life!
        </p>
        <button
          id="#footer"
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
       
      </div>
      <div>
        <img className="" src={avtarImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
