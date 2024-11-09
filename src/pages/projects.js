import { React, useState } from "react";
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons/';
import Project1 from '../../public/images/projects/1.jpg';
import Project2 from '../../public/images/projects/2.jpg';
import Project3 from '../../public/images/projects/3.jpg';
import Project4 from '../../public/images/projects/4.jpg';
import Project5 from '../../public/images/projects/5.jpg';
import TransitionEffect from '@/components/TransitionEffect';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsTitle } from "@/components/TitlesBackground";

const Card = ({ type, title, summary, img, link, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="w-full h-auto flex flex-col items-center justify-center rounded-lg bg-light shadow-2xl relative border border-solid border-gray-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            className="absolute top-32 left-4 right-4 rounded-lg shadow-lg p-4 border border-solid border-dark bg-white"
          >
            <span className="text-primary font-medium text-md">{type}</span>
            <h2 className="w-full text-left text-3xl font-bold mt-2 mb-4">{title}</h2>
            <p className="font-medium text-dark line-clamp-4">{summary}</p>
            <div className="w-full mt-4 flex items-center justify-between">
              <Link href={link} target="_blank" className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
                Visit Project
              </Link>
              <Link href={githubLink} target="_blank" className="w-11">
                <GithubIcon />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-xl border border-solid border-gray-500 bg-light shadow-lg p-10">
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg group">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-105 rounded-lg"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-8">
        <span className="text-primary font-semibold text-xl">{type}</span>
        <h2 className="my-3 w-full text-left text-4xl font-bold leading-tight">{title}</h2>
        <p className="my-4 font-medium text-dark text-lg leading-relaxed">{summary}</p>
        <div className="mt-4 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10 h-10">
            <GithubIcon className="w-full h-full text-dark" />
          </Link>
          <Link href={link} target="_blank" className="ml-6 rounded-lg bg-dark text-light py-2 px-6 text-lg font-semibold hover:bg-primary transition-colors duration-300">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};


const projectsData = [
  { type: "Web Project", title: "This Portfolio", summary: "A feature-rich Crypto Screener App A feature-rich Crypto Screener App A feature-rich Crypto Screener App", img: Project1, link: "https://www.kamalidoufkir.me", githubLink: "https://github.com/idoufkirkamal/Portfolio", featuredProject: true },
  { type: "Web Project", title: "Agency Website Template", summary: "A rich Crypto Screener App A feature-rrich Crypto Screener App A feature-r feature-rich rich rich Crypto Screener App A feature-r Crypto Screener App A feature-r Crypto Screener App A feature-rich Crypto Screener App A feature-rich Crypto Screener App", img: Project2, link: "/", githubLink: "/" },
  { type: "Mobile App", title: "Mobile App Template", summary: "A feature-rich Crypto Screener App A feature-rich Crypto Screener App A feature-rich Crypto Screener App", img: Project3, link: "/", githubLink: "/" },
  { type: "Design", title: "Design Project", summary: "A feature-rich Crypto Screener App A feature-rich Crypto Screener App A feature-rich Crypto Screener App", img: Project4, link: "/", githubLink: "/" },
  { type: "Web Project", title: "E-commerce Template", summary: "A feature-rich Crypto Screener App A feature-rich Crypto Screener App A feature-rich Crypto Screener App", img: Project5, link: "/", githubLink: "/" },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter(project => filter === "All" || project.type === filter);

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
          {/* Contact Banner */}
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

          <div className="grid grid-cols-12 gap-24 gap-y-40 mb-24">
            {filteredProjects.map((project, index) => (
              project.featuredProject === true ? (
                <div key={index} className="col-span-12">
                  <FeaturedProject {...project} />
                </div>
              ) : (
                <div key={index} className="col-span-6">
                  <Card {...project} />
                </div>
              )
            ))}
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
