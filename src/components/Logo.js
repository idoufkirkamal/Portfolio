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
          // backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          backgroundColor: ["#06b6d4"],
          transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
        }}
        initial={{ backgroundColor: "#121212" }} 
        whileTap={{ scale: 0.9 }} 
      >
        KI
      </MotionLink>
    </div>
  );
}

export default Logo;
