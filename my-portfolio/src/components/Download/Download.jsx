import React from 'react';

const Download = () => {
    return (
        <div className='text-center mt-5 '>
            <a 
                href="../../../public/resume.pdf" 
                download="Tanvir_Resume.pdf" 
                className="mt-5 md:md-10 text-white py-4 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
                Download Resume
            </a>
        </div>
    );
};

export default Download;