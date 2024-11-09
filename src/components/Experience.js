import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';
import { ExperienceTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between'>
           <LiIcon reference={ref} />
            <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className='ml-20'
            >
                <h3 className='capitalize font-bold text-2xl text-dark'>
                    {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    const experienceData = [
        {
            position: "Software Engineer",
            company: "Google",
            companyLink: "https://www.google.com",
            time: "2022-Present",
            address: "Mountain View, CA",
            work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
        },
        {
            position: "Software Engineer",
            company: "Google",
            companyLink: "https://www.google.com",
            time: "2022-Present",
            address: "Mountain View, CA",
            work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
        },
    ];

    return (
        <div className='my-32'>
            {/* Experience Banner */}
            <div className="text-center mb-12 relative">  
                {/* Background svg */}
                <div className="absolute inset-0 flex justify-center items-center ">
                    <ExperienceTitle />
                </div>
                {/* Foreground Text */}
                <h2 className="relative font-extrabold mb-20">
                    <AnimatedText className='!text-5xl'>
                        <span className="mr-3 !text-gray-700 uppercase">My</span>
                        <span className="text-primary uppercase">Experience</span>
                    </AnimatedText>    
                </h2>
            </div>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div 
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {experienceData.map((exp, index) => (
                        <Details
                            key={index}
                            position={exp.position}
                            company={exp.company}
                            companyLink={exp.companyLink}
                            time={exp.time}
                            address={exp.address}
                            work={exp.work}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
