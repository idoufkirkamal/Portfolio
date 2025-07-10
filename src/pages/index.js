import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import dynamic from 'next/dynamic';
const AnimatedText = dynamic(() => import('@/components/AnimatedText'), { ssr: false });
import Link from 'next/link'
import { DownloadIcon, BusinessbagIcon, TeamProjectsIcon, ProjectsIcon  } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import ParticlesContainer from '@/components/ParticlesContainer'
import TypewriterAnimation from '@/components/TypewriterAnimation'
import DevImg from '../../public/images/profile/Profile-img1.png'
import Badge from '@/components/Badge'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation('common')
  
  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={t('home.keywords')} />
        <meta property="og:title" content={t('home.title')} />
        <meta property="og:description" content={t('home.description')} />
        <meta property="og:url" content="https://kamalidoufkir.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TransitionEffect/>
      <main className='flex bg-light items-center text-dark w-full min-h-[88vh]'>
        <Layout className='py-0 !pb-0'>
        <ParticlesContainer/>
          <div className='flex items-center justify-between w-full ml-11'>   
              <div className='flex relative'>
                  <Badge 
                    containerStyle="absolute top-[14%] -left-[7.3rem]"
                    icon={<BusinessbagIcon/>} 
                    endCountNum={1} 
                    endCountText='+'
                    BadgeText={t('home.yearsExperience')}
                  />
                  <Badge 
                    containerStyle="absolute top-[80%] -left-[1rem]"
                    icon={<ProjectsIcon/>} 
                    endCountNum={4} 
                    BadgeText={t('home.finishedProjects')}
                  />
                  <Badge 
                    containerStyle="absolute top-[55%] -right-8"
                    icon={<TeamProjectsIcon/>} 
                    endCountNum={3} 
                    BadgeText={t('home.teamProjects')}
                  />
                  <div className=' w-[400px] h-[400px] absolute -top-1 -right-2'></div>
                   <div className="w-[410px] h-[362px] bg-no-repeat relative bg-bottom" >
                     <Image src={DevImg} fill priority alt="Kamal IDOUFKIR Profile Image" draggable="false" />
                   </div>
              
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText className='!text-[2.9rem] text-left z-10'>
                <span>{t('home.turningIdeas')}</span>
                <br />
                <span>
                  <TypewriterAnimation /> {t('home.software')}
                </span>
              </AnimatedText>
                    <p className='my-4 text-base font-medium z-10 text-dark'>
                    {t('home.description_text')}
                    </p>
                    <div className='flex items-center self-start mt-2 '>
                      <a className='flex items-center bg-dark text-light p-2.5 pl-6 pr-5 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary hover:border-primary border-2 border-solid border-transparent z-10' href="/IDOUFKIR_Kamal_CV.pdf" download target="_blank" rel="noopener noreferrer">
                        {t('home.downloadCV')} <DownloadIcon className={"!w-5 ml-2"}/>
                      </a>
                    </div>
              </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
