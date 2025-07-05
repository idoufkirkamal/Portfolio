import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { CertificatesTitle } from './TitlesBackground';
import AnimatedText from './AnimatedText';
import Certificate1 from '../../public/images/certificates/1.jpeg';
import Certificate2 from '../../public/images/certificates/2.png';
import Certificate3 from '../../public/images/certificates/3.jpg';
import Certificate4 from '../../public/images/certificates/4.png';
import Certificate5 from '../../public/images/certificates/5.png';
import Certificate6 from '../../public/images/certificates/6.png';
import Certificate7 from '../../public/images/certificates/7.png';
// import Certificate8 from '../../public/images/certificates/8.png';

const Card = ({ site, title, img, link, onImageClick }) => {
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
          className="rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          onClick={() => onImageClick(img, title, site)}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute -bottom-5 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-solid border-gray-500"
            > 
              <h2 className="w-full text-left text-md font-bold">{title}</h2>
              <h2 className="w-full text-left text-primary font-medium text-sm mt-2 mb-4">{site}</h2>
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

// Image Popup Modal Component
const ImagePopup = ({ isOpen, onClose, image, title, site }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative">
            <Image
              src={image}
              alt={title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Certificates = () => {
  const [popupImage, setPopupImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = (image, title, site) => {
    setPopupImage({ image, title, site });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
  };
 
  const certificates = [
    {
      site: "JetBrains",
      date: "Jul 2025",
      title: "Java Foundations Professional Certificate by JetBrains",
      img: Certificate1,
      link: ""
    },{
      site: "Atlassian",
      date: "Jun 2025",
      title: "Atlassian Agile Project Management Professional Certificate",
      img: Certificate7,
      link: "https://www.linkedin.com/learning/certificates/3ba395a980858b0aec992ff552b0922cc049af7f48986e60c77faad1ebcf5c5e"
    },{
      site: "GitHub",
      date: "Jun 2025",
      title: "Career Essentials in GitHub Professional Certificate",
      img: Certificate6,
      link: "https://www.linkedin.com/learning/certificates/bef410d922022b1804c749839a3b377798145474dd18c73c09f439694ce962c8"
    },{
      site: "PagerDuty",
      date: "Jun 2025",
      title: "DevOps Professional Certificate by PagerDuty and LinkedIn",
      img: Certificate5,
      link: "https://www.linkedin.com/learning/certificates/570b74946199c54c0b8eafe306b9dd95b4b89a0932887cb70e8b9e262441275d"
    },{
      site: "Docker, Inc",
      date: "Jun 2025",
      title: "Docker Foundations Professional Certificate",
      img: Certificate4,
      link: "https://www.linkedin.com/learning/certificates/5de4fc18a8f39fa949dba67bdc89cbd0e8c3fb3c00c94095548074fe034535b7"
    },{
      site: "Udemy",
      date: "Jun 2025",
      title: "Git and GitHub MasterClass: Git Workflow, Commands",
      img: Certificate3,
      link: "https://www.udemy.com/certificate/UC-191f0b6f-c3ee-4559-ab5c-966e41a1790d"
    },{
      site: "Mozilla",
      date: "Jun 2025",
      title: "JavaScript Foundations Professional Certificate by Mozilla",
      img: Certificate2,
      link: "https://www.linkedin.com/learning/certificates/43517df74ede7813a296239484117676f7cea43324d65c93bd32e475ac460736"
    },{
      site: "Cisco",
      date: "2023",
      title: "CCNAv7 Introduction to Networks",
      img: Certificate1,
      link: ""
    },
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
              onImageClick={handleImageClick}
            />
          </div>
        ))}
      </div>

      {/* Image Popup Modal */}
      {popupImage && (
        <ImagePopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          image={popupImage.image}
          title={popupImage.title}
          site={popupImage.site}
        />
      )}
    </>
  );
};

export default Certificates;
