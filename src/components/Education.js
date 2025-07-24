import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
import { EducationTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';
import { useTranslation } from 'next-i18next';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='font-bold text-2xl text-gray-900'>{type}</h3>
                <span className='font-medium text-dark/75'>
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
    const { t } = useTranslation('common');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    const educationDetails = [
        {
            type: t('education.dut'),
            time: t('education.dutTime'),
            place: t('education.estSafi'),
            info: t('education.dutInfo')
        },
        {
            type: t('education.licence'),
            time: t('education.licenceTime'),
            place: t('education.fssAgadir'),
            info: t('education.licenceInfo')
        },
        {
            type: t('education.master'),
            time: t('education.masterTime'),
            place: t('education.fssAgadir'),
            info: t('education.masterInfo')
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
                        <span className="mr-3 !text-gray-700 uppercase">{t('education.myEducation').split(' ')[0]}</span>
                        <span className="text-primary uppercase">{t('education.myEducation').split(' ')[1]}</span>
                    </AnimatedText>
                </h2>
            </div> 
            <div ref={ref} className='w-[85%] mx-auto relative mr-14'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
                <ul className='w-full flex flex-col items-start justify-between ml-14'>
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
