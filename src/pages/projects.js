import { React, useState } from "react";
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons/';
import TransitionEffect from '@/components/TransitionEffect';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsTitle } from "@/components/TitlesBackground";

// Utility function to generate project images dynamically
const getProjectImages = (projectNumber, imageCount) => {
  return Array.from({ length: imageCount }, (_, i) => 
    require(`../../public/images/projects/Project${projectNumber}/${i + 1}.png`)
  );
};

const ProjectCard = ({ title, summary, img, images, githubLink, techs, link }) => {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <article className="w-full flex items-center justify-between rounded-xl border border-solid border-gray-500 bg-light shadow-lg p-10">
        <div className="w-1/2 flex justify-center items-center">
          <div 
            className="w-full rounded-lg cursor-pointer border-2 border-gray-300 hover:border-primary transition-colors duration-300 bg-white flex items-center justify-center overflow-hidden"
            onClick={() => {
              setIsImagePopupOpen(true);
              setCurrentImageIndex(0);
            }}
          >
            <Image
              src={img}
              alt={title}
              className="w-full h-auto object-contain transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-lg"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-between pl-8">
          <h2 className="my-1 w-full text-left text-3xl font-bold leading-tight">{title}</h2>
          <p className="my-3 font-medium text-dark text-lg leading-relaxed">{summary}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techs?.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-primary text-white text-sm rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-4">
            {link && (
              <Link href={link} target="_blank" className="rounded-lg bg-dark text-light py-2 px-4 text-sm font-semibold hover:bg-primary transition-colors">
                Visit Project
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink} target="_blank" className="w-10 h-10">
                <GithubIcon className="w-full h-full text-dark" />
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Image Popup Modal - Multiple Images */}
      <AnimatePresence>
        {isImagePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setIsImagePopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative bg-white rounded-lg shadow-2xl max-w-5xl max-h-[90vh] overflow-hidden group"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsImagePopupOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              {/* Navigation Arrows */}
              {images && images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="relative w-full h-[80vh] flex items-center justify-center bg-gray-50">
                <Image
                  src={images && images.length > 0 ? images[currentImageIndex] : img}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Invisible hover area at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 group/bottom">
                  {/* Image Counter - Hidden when hovering */}
                  {images && images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm group-hover/bottom:opacity-0 transition-all duration-300">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}

                  {/* Thumbnail Navigation */}
                  {images && images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg opacity-0 group-hover/bottom:opacity-100 transition-opacity duration-300">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-12 h-12 rounded border-2 overflow-hidden ${
                            index === currentImageIndex ? 'border-primary' : 'border-gray-300'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${title} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


const projectsData = [
  { 
    type: "Web Project", 
    title: "This Portfolio", 
    summary: "A modern and responsive portfolio website built with Next.js and Tailwind CSS, featuring clean design, smooth animations and interactive components.", 
    img: getProjectImages(1, 1)[0], 
    images: null, // No multiple images for portfolio project
    githubLink: "https://github.com/idoufkirkamal/Portfolio", 
    techs: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  { 
    type: "Web Project", 
    title: "MediFlow", 
    summary: "A comprehensive medical appointment management system built with Jakarta EE and Hibernate ORM, featuring modern UI design and efficient data management for healthcare professionals.", 
    img: getProjectImages(2, 7)[2], 
    images: getProjectImages(2, 7),
    githubLink: "https://github.com/idoufkirkamal/MediFlow",
    techs: ["Jakarta EE", "Hibernate ORM", "Tailwind CSS", "MYSQL"]
  },
  { 
    type: "Web Project", 
    title: "ExamManager", 
    summary: "ExamManager is a comprehensive exam management application that allows teachers to input and modify student grades while enabling students to view their results, and manage grade complaints.", 
    img: getProjectImages(3, 9)[4], 
    images: getProjectImages(3, 9),
    githubLink: "https://github.com/idoufkirkamal/ExamManager",
    techs: ["CodeIgniter", "Tailwind CSS", "MySQL"]
  },
  { 
    type: "Web Project", 
    title: "Volmaghreb", 
    summary: "VolMaghreb is a user-friendly flight reservation platform that features a clean, modern design and enables efficient management of flight bookings for both customers and administrators.", 
    img: getProjectImages(4, 13)[2], 
    images: getProjectImages(4, 13),
    link: "https://volmaghreb.onrender.com/volmaghreb", 
    githubLink: "https://github.com/idoufkirkamal/volmaghreb",
    techs: ["Spring Boot", "Spring Security", "Spring Data JPA", "Thymeleaf", "Bootstrap", "MySQL"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(project => filter === "All" || project.type === filter);
  
  // Separate "This Portfolio" from other projects
  const portfolioProject = filteredProjects.find(project => project.title === "This Portfolio");
  const otherProjects = filteredProjects.filter(project => project.title !== "This Portfolio").reverse();
  
  // Combine them with portfolio first, then reversed other projects
  const orderedProjects = portfolioProject ? [portfolioProject, ...otherProjects] : otherProjects;

  return (
    <div>
      <Head>
        <title>Kamal IDOUFKIR | Projects</title>
        <meta name="description" content="Explore the portfolio projects of Kamal IDOUFKIR..." />
        <meta property="og:title" content="Kamal IDOUFKIR | Software Engineering Projects" />
        <meta property="og:description" content="Discover the innovative software engineering projects..." />
        <meta property="og:url" content="https://www.kamalidoufkir.me/projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* Projects Banner */}
            <div className="text-center mb-12 relative">
              {/* Background svg */}
              <div className="absolute inset-0 flex justify-center items-center ">
                <ProjectsTitle />
              </div>
              {/* Foreground Text */}      
              <h2 className="relative font-extrabold mb-16">
                <AnimatedText className='!text-5xl'>
                    <span className="mr-3 !text-gray-700 uppercase">My</span>
                    <span className="text-primary uppercase">Projects</span>
                </AnimatedText>    
              </h2>
            </div>
          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-8 items-center justify-center">
            {["All", "Web Project", "Mobile App", "Design"].map(category => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg ${filter === category ? "bg-dark text-light" : "bg-light text-dark"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-16 mb-24">
            {orderedProjects.map((project, index) => (
              <div key={index} className="col-span-12">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
