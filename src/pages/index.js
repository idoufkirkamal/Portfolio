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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kamal IDOUFKIR</title>
        <meta name="description" content="Kamal IDOUFKIR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect/>
      <main className='flex bg-light items-center text-dark w-full min-h-screen'>
        <Layout className='py-0'>
          <div className='flex items-center justify-between w-full'>
              <div className='w-1/2'>
                <Image src={ProfilePic} alt='Kamal IDOUFKIR' className='w-full h-full'/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                  <AnimatedText text="Turning Ideas into Powerful, Clean, User-Friendly Software!" className='!text-5xl text-left'/>
                  <p className='my-4 text-base font-medium'>
                  As a skilled software engineer who enjoys creating helpful, user-friendly clean and easy-to-use software, I love turning ideas into working applications that solve real problems. Explore my work to see how I can help bring your ideas to life.
                  </p>
                  <div className='flex items-center self-start mt-2'>
                    <Link className='flex items-center bg-dark text-light p-2.5 pl-6 pr-5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark' href="/IDOUFKIR_Kamal_CV.pdf" download={true}>
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
