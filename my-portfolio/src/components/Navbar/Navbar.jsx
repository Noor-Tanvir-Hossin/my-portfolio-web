import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const  [menu,setMenu]=useState(false)
    const  [showMenu,setShowMenu]=useState(false)

  return (
    <nav className=" flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Protfolio</span>
      <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#about">
          <li className="text-xl transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#skill">
          <li className="text-xl transition-all duration-300 p-1 md:p-0">Skill</li>
        </a>
        <a href="#projects">
          <li className="text-xl transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#footer">
          <li className="text-xl transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>
      {
        showMenu ? <IoCloseOutline size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
            setMenu(!menu); setShowMenu(!showMenu)
        }} /> : <GiHamburgerMenu size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
            setMenu(!menu); setShowMenu(!showMenu)
        }} />
      }
    </nav>
  );
};

export default Navbar;
