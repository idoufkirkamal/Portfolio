import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile2.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education' 
import Certificates from '@/components/Certificates' 
import TransitionEffect from '@/components/TransitionEffect'
import { AboutTitle } from '@/components/TitlesBackground'

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
          {/* Contact Banner */}
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
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-4 flex flex-col items-start justify-start'>
              <p className='font-medium'>
              Hi, I’m Kamal, a Software Engineer from Morocco and currently pursuing a Master’s degree in Software Engineering. 
              I’m passionate about developing innovative software solutions and continuously improving my technical skills.
              </p>
              <p className='my-4 font-medium'> 
              My work centers on clear design, clean code, and thoughtful problem-solving. I’m always exploring new tools and technologies 
              to keep my work fresh and effective. Every project I take on is an opportunity to learn, improve, and make an impact.
              </p>
              <p className='font-medium'>
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to creating user-friendly, powerful, 
              and clear solutions to every project. My approach centers on design excellence and user-centered thinking, ensuring that each product
               is intuitive and impactful. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className='col-span-4'>
                Image
            </div>
          </div>
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
