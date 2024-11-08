import React from 'react';
import { motion } from 'framer-motion';

const quote = {
    initial: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
};

const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
    }
};

const AnimatedText = ({ children, className = "" }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-7xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {
          React.Children.map(children, (child, index) => (
            typeof child === 'string'
              ? child.split(" ").map((word, i) => (
                  <motion.span key={`${word}-${index}-${i}`} className="inline-block" variants={singleWord}>
                    {word}&nbsp;
                  </motion.span>
                ))
              : <motion.span key={`component-${index}`} className="inline-block" variants={singleWord}>{child}</motion.span>
          ))
        }
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
