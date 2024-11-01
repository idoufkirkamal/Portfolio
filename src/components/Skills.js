import React from 'react';
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

const skillsIcons = [
  icon1, icon2, icon3, icon4, icon5,
  icon6, icon7, icon8, icon9, icon10,
  icon11, icon12, icon13, icon14, icon15,
  icon16, icon17
];

const Skills = () => {
  return (
    <>
      <h1 className='font-bold text-8xl mt-40 w-full text-center'>Skills</h1>
      <div className='flex items-start justify-start gap-6 flex-wrap pt-20'>
        {skillsIcons.map((icon, index) => (
          <div 
            key={index} 
            className='transition-transform duration-300 ease-in-out transform hover:scale-110'
          >
            <Image 
              src={icon} 
              alt={`Skill icon ${index + 1}`} 
              className='w-28 h-28' 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
