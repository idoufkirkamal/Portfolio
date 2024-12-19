import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon1 from '../../public/images/skills_icons/1.png';
import icon2 from '../../public/images/skills_icons/2.png';
import icon3 from '../../public/images/skills_icons/3.png';
import icon4 from '../../public/images/skills_icons/4.png';
import icon5 from '../../public/images/skills_icons/5.png';
import icon6 from '../../public/images/skills_icons/6.png';
import icon7 from '../../public/images/skills_icons/7.png';
import icon8 from '../../public/images/skills_icons/8.png';
import icon9 from '../../public/images/skills_icons/9.png';
import icon10 from '../../public/images/skills_icons/10.png';
import icon11 from '../../public/images/skills_icons/11.png';
import icon12 from '../../public/images/skills_icons/12.png';
import icon13 from '../../public/images/skills_icons/13.png';
import icon14 from '../../public/images/skills_icons/14.png';
import icon15 from '../../public/images/skills_icons/15.png';
import icon16 from '../../public/images/skills_icons/16.png';
import icon17 from '../../public/images/skills_icons/17.png';
import icon18 from '../../public/images/skills_icons/18.png';
import icon19 from '../../public/images/skills_icons/19.png';
import icon20 from '../../public/images/skills_icons/20.png';
import icon21 from '../../public/images/skills_icons/21.png';


import { SkillsTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';

const skillsIcons = [
  icon1, icon2, icon3, icon4, icon5,
  icon6, icon7, icon8, icon9, icon10,
  icon11, icon12, icon13, icon14, icon15,
  icon16, icon17, icon18, icon19, icon20,
  icon21
];

const Skills = () => {
  return (
    <div className='mt-32'>
      {/* Skills Banner */}
      <div className="text-center mb-12 relative">  
        {/* Background svg */}
          <div className="absolute inset-0 flex justify-center items-center ">
            <SkillsTitle />
          </div>
          {/* Foreground Text */}      
          <h2 className="relative font-extrabold mb-20">
            <AnimatedText className='!text-5xl'>
                <span className="mr-3 !text-gray-700 uppercase">My</span>
                <span className="text-primary uppercase">Skills</span>
            </AnimatedText>    
          </h2>
        </div>  
        <div>
        <div className="flex justify-center">
  <div className="grid grid-cols-7 gap-6 w-full max-w-4xl">
    {skillsIcons.map((icon, index) => (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
        viewport={{ once: true, amount: 0.08 }}
      >
        <Image
          src={icon}
          alt={`Skill icon ${index + 1}`}
          className="w-28 h-28"
          draggable="false"
        />
      </motion.div>
    ))}
  </div>
</div>

        </div>
    </div>
  );
};

export default Skills;
