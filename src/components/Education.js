import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';
import { EducationTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-start justify-between'>
           <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            className='ml-20'
            >
                <h3 className='font-bold text-2xl text-dark'>
                    {type}
                </h3>
                <span className='font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full text-dark'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    const educationDetails = [
        {
            type: "Diplome Universitaire de Technologie en Génie Informatique",
            time: "2021-2023",
            place: "École Supérieure de Technologie Safi | Université Cadi Ayyad",
            info: "A two-year program focused on equipping students with essential skills in computer science and information technology."
        },
        {
            type: "Licence d'Excellence en Ingénierie logicielle",
            time: "2023-2024",
            place: "Faculté des Sciences Agadir | Université Ibn Zohr",
            info: "Provides advanced knowledge and skills in software engineering, covering core subjects like software development."
        },
        {
            type: "Master d'Excellence en Ingénierie logicielle",
            time: "2024-Present",
            place: "Faculté des Sciences Agadir | Université Ibn Zohr",
            info: "Offers a deeper and more comprehensive understanding of software engineering principles and practices."
        },
    ];

    return (
        <div className='my-32'>
            {/* Education Banner */}
            <div className="text-center mb-12 relative">
                {/* Background svg */}
                <div className="absolute inset-0 flex justify-center items-center ">
                    <EducationTitle />
                </div>
                {/* Foreground Text */}
                <h2 className="relative font-extrabold mb-20">
                    <AnimatedText className='!text-5xl'>
                        <span className="mr-3 !text-gray-700 uppercase">My</span>
                        <span className="text-primary uppercase">Education</span>
                    </AnimatedText>
                </h2>
            </div> 
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {educationDetails.map((education, index) => (
                        <Details
                            key={index}
                            type={education.type}
                            time={education.time}
                            place={education.place}
                            info={education.info}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Education;
