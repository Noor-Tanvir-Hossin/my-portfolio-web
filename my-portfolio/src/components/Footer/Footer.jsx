import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <div id='footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
           <div>
            <h1 className='text-2xl md:text-6xl font-bold '>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach OUt</h3>
        </div> 
        <ul className='text-sm md:text-xl'>
            <li className='flex items-center gap-2'>
                <MdOutlineEmail size={20}></MdOutlineEmail>
                tanvirrobin11567@gmail.com
            </li>
            <li className='flex items-center gap-2'>
                <CiLinkedin></CiLinkedin>
                https://www.linkedin.com/in/noortanvirhossain/

            </li>
            <li className='flex items-center gap-2'>
                <FaGithub></FaGithub>
                https://github.com/Noor-Tanvir-Hossin
            </li>
            <li className='flex items-center gap-2'>
                <IoCallOutline></IoCallOutline>
                01619795490
            </li>
        </ul>
        </div>
    );
};

export default Footer;