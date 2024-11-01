import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile2.jpg'

const about = () => {
  return (
    <div>
        <Head>
            <title>Kamal IDOUFKIR | About</title>
            <meta name="description" content='Kamal IDOUFKIR' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
          <Layout className='pt-16'>    
          <AnimatedText className='mb-16' text="About me"/>         
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
            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-[1.66rem]'/>
              <Image src={profilePic} alt="Kamal IDOUFKIR" className='w-full h-auto rounded-2xl'/>
            </div>
          </div>
          </Layout>
        </main>
    </div>
  )
}

export default about