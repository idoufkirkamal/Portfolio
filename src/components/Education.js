import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';
import { AboutTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between'>
           <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            className='ml-20'
            >
                <h3 className='capitalize font-bold text-2xl text-dark'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }

    )

    return (
        <div className='my-32'>
            {/* Education Banner */}
            <div className="text-center mb-12 relative">  
                {/* Background svg */}
                <div className="absolute inset-0 flex justify-center items-center ">
                    <AboutTitle />
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
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
