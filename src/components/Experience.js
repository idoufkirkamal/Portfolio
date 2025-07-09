import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';
import { ExperienceTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-start justify-between'>
           <LiIcon reference={ref} />
            <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className='ml-20'
            >
                <h3 className='font-bold text-2xl text-dark'>
                    {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a>
                </h3>
                <span className='font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-dark'>
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
            position: "Stage d'Initiation",
            company: "WEB3 Marketing",
            companyLink: "",
            time: "01 July 2022 - 01 August 2022",
            address: "Agadir, Morocco",
            work: "Developed a basic e-commerce mobile application using Java, which includes essential features such as product browsing, a shopping cart, user authentication. Offering a user-friendly interface and seamless experience."
        },
        {
            position: "Stage de Fin d'Etudes",
            company: "MWC",
            companyLink: "",
            time: "10 April 2023 - 10 June 2023",
            address: "Safi, Morocco",
            work: "Development of a web application for training management within MWC, a company specialized in industrial control and technical inspection. This application enables comprehensive management of training sessions, participants, instructors, courses, chapters, and rooms. The technologies used include HTML, Bootstrap, JavaScript, MySQL, and PHP."
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
