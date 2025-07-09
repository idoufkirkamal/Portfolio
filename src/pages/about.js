import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import profilePic from '../../public/images/profile/Profile-img2.png'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education' 
import Certificates from '@/components/Certificates' 
import TransitionEffect from '@/components/TransitionEffect'
import { AboutTitle } from '@/components/TitlesBackground'
import { motion } from "framer-motion";

const about = () => {
  return (
    <div>
      <Head>
        <title>Kamal IDOUFKIR | About</title>
        <meta name="description" content="Learn about Kamal IDOUFKIR, a dedicated Software Engineer from Morocco with expertise in software development and a commitment to innovation, quality, and user-centered design." />
        <meta name="keywords" content="Kamal IDOUFKIR, about Kamal IDOUFKIR, software engineer, software development, web development, mobile development, Morocco, innovative solutions" />
        <meta property="og:title" content="Kamal IDOUFKIR | About" />
        <meta property="og:description" content="Discover the journey, skills, and expertise of Kamal IDOUFKIR, a passionate Software Engineer from Morocco focused on impactful, user-friendly digital solutions." />
        <meta property="og:url" content="https://www.kamalidoufkir.me/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center'>
          <Layout className='pt-16'>  
          {/* About Banner */}
          <div className="text-center mb-12 relative">  
            {/* Background svg */}
              <div className="absolute inset-0 flex justify-center items-center ">
                <AboutTitle />
              </div>
              {/* Foreground Text */}      
              <h2 className="relative font-extrabold mb-20">
                <AnimatedText className='!text-5xl'>
                    <span className="mr-3 !text-gray-700 uppercase">About</span>
                    <span className="text-primary uppercase">Me</span>
                </AnimatedText>    
              </h2>
            </div>         
            <motion.div
              className="mx-auto p-10 shadow-lg rounded-xl border border-solid border-gray-500 bg-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header with Name and Title */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-5xl font-extrabold text-primary"><span className='!mr-3 !text-gray-700 font-bold'>Kamal</span>IDOUFKIR</h1>
                <p className="text-gray-600 text-lg">Software Engineer | React, Next.js, Node.js, Spring Boot, Laravel, Tailwind CSS</p>
              </motion.div>

              {/* Horizontal line */}
              <motion.hr
                className="my-6 border-t border-gray-300"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />

              {/* Profile Picture and Bio */}
              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="relative flex-shrink-0 mr-9">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {/* Profile Picture */}
                    <Image
                      src={profilePic}
                      alt="Profile Picture"
                      width={150}
                      height={150}
                      className="rounded-full w-40 h-40"
                      draggable="false"
                    />
                  </motion.div>
                  {/* Small Circle with Emoji */}
                  <div className="absolute bottom-4 right-3 transform translate-x-1/4 translate-y-1/4 bg-white w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                    <span className="text-lg">👋</span>
                  </div>
                </div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <p className="font-medium text-left mb-2 text-dark">
                    Hi, I&#39;m Kamal, a Software Engineer from Morocco and currently pursuing a Master&#39;s degree in Software Engineering. My work centers on clear design, clean code, and thoughtful problem-solving. I&#39;m always exploring new tools and technologies to keep my work fresh and effective. Every project I take on is an opportunity to learn, improve, and make an impact.
                  </p>
                  <p className="font-medium text-left text-dark">
                    Whether I&#39;m working on a website, mobile app, or other digital product, I bring my commitment to creating user-friendly, powerful, and clear solutions to every project. I look forward to the opportunity to bring my skills and passion to your next project.
                  </p>
                </motion.div>
              </motion.div>

              {/* Proficient in Section - Separate Container */}
              <motion.div
                className="mt-6 ml-52"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4">Proficient in:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="flex">
                    <span className="font-bold mr-2">Frontend:</span>
                    <span>React, Next.js, Tailwind CSS, TypeScript</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2 flex-shrink-0">Backend:</span>
                    <span>Node.js, Express.js, Prisma ORM, Spring Boot, Hibernate (Spring Data JPA), Laravel, Eloquent ORM</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">Database:</span>
                    <span>MySQL, PostgreSQL</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2 flex-shrink-0">Auth & Security:</span>
                    <span>JWT, bcrypt, Helmet.js, Laravel Sanctum</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">DevOps:</span>
                    <span>Docker, GitHub Actions, Railway, Vercel, Kubernetes</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">Testing:</span>
                    <span>Jest, Playwright, React Testing Library, JUnit, PHPUnit</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2 flex-shrink-0">API Tools:</span>
                    <span>Postman, Thunder Client</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2 flex-shrink-0">Cloud Providers:</span>
                    <span>AWS, Azure</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          <Skills />
          <Experience/>
          <Education/>
          <Certificates/>
          </Layout>
        </main>
    </div>
  )
}

export default about
