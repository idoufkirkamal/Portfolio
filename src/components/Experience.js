import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';
import { ExperienceTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';
import { useTranslation } from 'next-i18next';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='font-bold text-2xl text-gray-900'>{position}&nbsp;{companyLink ? <a href={companyLink} target='_blank' className='text-primary capitalize'>{company}</a> : <span className='text-primary capitalize'>{company}</span>}</h3>
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
    const { t } = useTranslation('common');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    const experienceData = [
        {
            position: t('experience.internshipTitle'),
            company: t('experience.web3Marketing'),
            companyLink: "",
            time: t('experience.web3Time'),
            address: t('experience.web3Location'),
            work: t('experience.web3Description')
        },
        {
            position: t('experience.finalStudiesInternship'),
            company: t('experience.mwc'),
            companyLink: "",
            time: t('experience.mwcTime'),
            address: t('experience.mwcLocation'),
            work: t('experience.mwcDescription')
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
                        <span className="mr-3 !text-gray-700 uppercase">{t('experience.myExperience').split(' ')[0]}</span>
                        <span className="text-primary uppercase">{t('experience.myExperience').split(' ')[1]}</span>
                    </AnimatedText>
                </h2>
            </div>
            <div ref={ref} className='w-[85%] mx-auto relative mr-14'>
                <motion.div 
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
                <ul className='w-full flex flex-col items-start justify-between ml-14'>
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
