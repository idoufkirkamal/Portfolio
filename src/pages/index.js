import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import ProfilePic from "../../public/images/profile/profile1.png"
import dynamic from 'next/dynamic';
const AnimatedText = dynamic(() => import('@/components/AnimatedText'), { ssr: false });
import Link from 'next/link'
import { DownloadIcon } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import ParticlesContainer from '@/components/ParticlesContainer'
import TypewriterAnimation from '@/components/TypewriterAnimation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kamal IDOUFKIR - Software Engineer</title>
        <meta name="description" content="Welcome to the portfolio of Kamal IDOUFKIR, a passionate Software Engineer from Morocco. Currently pursuing a Master’s degree in Software Engineering, Kamal is dedicated to creating innovative, user-friendly software solutions that make a real impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Kamal IDOUFKIR, Software Engineer Morocco, software development, software engineer portfolio, innovative software solutions, user-friendly applications, software engineering master’s degree, software solutions Morocco" />
        <meta property="og:title" content="Kamal IDOUFKIR - Software Engineer | Innovative Solutions in Software Development" />
        <meta property="og:description" content="Discover the portfolio of Kamal IDOUFKIR, a software engineer passionate about developing user-friendly, innovative software solutions. Based in Morocco, Kamal is currently pursuing a Master’s degree in Software Engineering." />
        <meta property="og:url" content="https://kamalidoufkir.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TransitionEffect/>
      <main className='flex bg-light items-center text-dark w-full min-h-screen'>
        <Layout className='py-0'>
        <ParticlesContainer/>
          <div className='flex items-center justify-between w-full'>
              <div className='w-1/2 z-10'>
                <Image src={ProfilePic} alt='Kamal IDOUFKIR' className='w-full h-ful z-10'/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText className='!text-5xl text-left z-10'>
                Turning Ideas into <TypewriterAnimation /> Software!
              </AnimatedText>
                  <p className='my-4 text-base font-medium z-10'>
                  As a skilled software engineer who enjoys creating helpful, user-friendly clean and easy-to-use software, I love turning ideas into working applications that solve real problems. Explore my work to see how I can help bring your ideas to life.
                  </p>
                  <div className='flex items-center self-start mt-2'>
                    <Link className='flex items-center bg-dark text-light p-2.5 pl-6 pr-5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark z-10' href="/IDOUFKIR_Kamal_CV.pdf" download={true}>
                      Download CV <DownloadIcon className={"!w-5 ml-2"}/>
                    </Link>
                  </div>
              </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
