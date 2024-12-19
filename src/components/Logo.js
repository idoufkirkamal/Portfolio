import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink 
        href="/" 
        className='w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-3xl font-bold'
        whileHover={{ 
          backgroundColor: ["#676194"],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
        initial={{ backgroundColor: "#333333" }} 
        whileTap={{ scale: 0.9 }} 
      >
        KI
      </MotionLink>
    </div>
  );
}

export default Logo;
