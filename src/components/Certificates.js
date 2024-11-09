import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { CertificatesTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';
import Certificate1 from '../../public/images/certificates/1.jpg';
import Certificate2 from '../../public/images/certificates/2.jpg';
import Certificate3 from '../../public/images/certificates/3.jpg';

const Card = ({ site, title, img, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="w-full h-auto flex flex-col items-center justify-center rounded-lg bg-light shadow-xl relative border border-solid border-gray-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={img}
          alt={title}
          className="rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute -bottom-5 left-4 right-4 bg-white rounded-lg shadow-lg p-4"
            >
              <span className="text-primary font-medium text-sm">{site}</span>
              <h2 className="w-full text-left text-md font-bold mt-2 mb-6">{title}</h2>
              <Link
                href={link}
                target="_blank"
                className="rounded-lg bg-dark text-light p-2 px-6 text-md font-semibold hover:bg-primary"
              >
                View Certificate
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};

const Certificates = () => {
  // Certificate data stored in an array
  const certificates = [
    {
      site: "Udemy",
      title: "React, NodeJS, Express & MongoDB",
      img: Certificate1,
      link: "/"
    },
    {
      site: "Udemy",
      title: "MongoDB - The Complete Developer's Guide 2024",
      img: Certificate2,
      link: "/"
    },
    {
      site: "Facebook",
      title: "The Complete Full stack Developer's Guide",
      img: Certificate3,
      link: "/"
    }
  ];

  return (
    <>
      {/* Certificates Banner */}
      <div className="text-center mb-12 relative">
        {/* Background svg */}
        <div className="absolute inset-0 flex justify-center items-center ">
          <CertificatesTitle />
        </div>
        {/* Foreground Text */}
        <h2 className="relative font-extrabold mb-20">
          <AnimatedText className='!text-5xl'>
            <span className="mr-3 !text-gray-700 uppercase">My</span>
            <span className="text-primary uppercase">Certificates</span>
          </AnimatedText>
        </h2>
      </div>
      
      <div className='grid grid-cols-12 gap-16'>
        {certificates.map((certificate, index) => (
          <div key={index} className='col-span-6 flex'>
            <Card 
              site={certificate.site}
              title={certificate.title}
              img={certificate.img}
              link={certificate.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
