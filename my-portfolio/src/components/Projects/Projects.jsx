import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div id='projects' className='p-10 md:p-24 text-white'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='py-12 px-8 flex flex-wrap gap-5'>
                <ProjectCard title="Blogging Website " main="Built with React, Tailwind, Node, Express, and MongoDB, this eCommerce site offers seamless navigation and personalized recommendations. Demonstrates my expertise in developing full-stack digital retail solutions."></ProjectCard>
            </div>
            
        </div>
    );
};

export default Projects;