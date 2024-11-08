import { React, useState } from "react";
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import {GithubIcon}  from '@/components/Icons/'
import Project1 from '../../public/images/projects/1.jpg'
import Project2 from '../../public/images/projects/2.jpg'
import Project3 from '../../public/images/projects/3.jpg'
import Project4 from '../../public/images/projects/4.jpg'
import Project5 from '../../public/images/projects/5.jpg'
import TransitionEffect from '@/components/TransitionEffect'
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ type, title, summary, img, link, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="w-full h-auto flex flex-col items-center justify-center rounded-xl bg-light shadow-2xl relative"
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
            <p className="font-medium text-dark">{summary}</p>
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


const Featuredproject = ({type, title, summary, img, link, githubLink}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative'>
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-[1.88rem]'/>
          <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg group">
            <Image src={img} alt={title} className="w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"/>
        </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                  <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={githubLink} target="_blank" className='w-11'><GithubIcon/></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


const projects = () => {
  return (
    <div>
    <Head>
      <title>Kamal IDOUFKIR | Projects</title>
      <meta name="description" content="Explore the portfolio projects of Kamal IDOUFKIR, a Software Engineer from Morocco. This collection showcases innovative software engineering projects, including portfolio websites, website templates, and feature-rich applications using technologies like React, Tailwind CSS, and more." />
      <meta name="keywords" content="Kamal IDOUFKIR, software engineering projects, portfolio website, React projects, Tailwind CSS, JavaScript projects, website templates, Morocco software engineer, innovative software solutions" />
      <meta property="og:title" content="Kamal IDOUFKIR | Software Engineering Projects" />
      <meta property="og:description" content="Discover the innovative software engineering projects of Kamal IDOUFKIR. This portfolio includes feature-rich applications and website templates, showcasing skills in React, Tailwind CSS, and more." />
      <meta property="og:url" content="https://www.kamalidoufkir.me/projects" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center'>
          <Layout className='pt-16'>    
            <AnimatedText className='mb-16'>My Projects</AnimatedText>        
            <div className='grid grid-cols-12 gap-24 gap-y-40 mb-24'>
                <div className='col-span-12'>
                    <Featuredproject 
                      type="Portfolio Website"
                      title="This Portfolio"
                      summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                      It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                      local currency. "
                      img={Project1}
                      link="https://www.kamalidoufkir.me"
                      githubLink="https://github.com/idoufkirkamal/Portfolio"
                    /> 
                </div>
                <div className='col-span-6'>
                    <Card 
                      type="Website Template"
                      title="Agency Website Template"
                      summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                      It shows detail regarding almost all the cryptocurrency."
                      img={Project2}
                      link="/"
                      githubLink="/"
                    /> 
                </div>
                <div className='col-span-6'>
                      <Card 
                        type="Website Template"
                        title="Agency Website Template"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency."
                        img={Project3}
                        link="/"
                        githubLink="/"
                      /> 
                </div>
                <div className='col-span-6'>
                        <Card 
                          type="Website Template"
                          title="Agency Website Template"
                          summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency."
                          img={Project4}
                          link="/"
                          githubLink="/"
                        /> 
                </div>
                <div className='col-span-6'>
                        <Card 
                          type="Website Template"
                          title="Agency Website Template"
                          summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency."
                          img={Project5}
                          link="/"
                          githubLink="/"
                        /> 
                </div>
            </div>
          </Layout>
        </main>
</div>
  )
}

export default projects
