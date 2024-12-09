import React from 'react';
import aboutImg from '../../assets/7358653-removebg-preview.png';
import { IoMdArrowForward } from "react-icons/io";
import Download from '../Download/Download';

const About = () => {
    return (
        <div id='about' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold '> Meet Tanvir</h2>
                <div className='md:flex items-center'>
                    <img className='md:h-80' src={aboutImg} alt="" />

                    <ul>
                        <div className='flex gap-3 py-4'>
                        {/* <IoMdArrowForward size={30} className='mt-1' /> */}

                        <span className='96 flex flex-col'>
                            <h1 className='text-xl md:text-3xl font-semibold leading-normal'>MERN Stack Developer</h1>
                            <p className='text-sm my-4 md:text-xl leading-tight'>I am a final-year B.Sc. student in Computer Science and Engineering with a passion for creating scalable and efficient web applications. As a skilled MERN stack developer, I combine academic knowledge with hands-on experience to deliver innovative solutions tailored to user needs. I’m excited to bring my technical expertise and problem-solving abilities to impactful projects.</p>
                           <button className=' flex items-center'> <Download></Download></button>
                        </span>
                        </div>
                       
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default About;