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
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const About = () => {
  const { t } = useTranslation('common')
  
  return (
    <div>
      <Head>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.description')} />
        <meta name="keywords" content={t('about.keywords')} />
        <meta property="og:title" content={t('about.title')} />
        <meta property="og:description" content={t('about.description')} />
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
                    <span className="mr-3 !text-gray-700 uppercase">{t('about.aboutMe').split(' ')[0]}</span>
                    <span className="text-primary uppercase">{t('about.aboutMe').split(' ')[1]}</span>
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
                <p className="text-gray-600 text-lg">{t('about.position')}</p>
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
                    {t('about.intro')}
                  </p>
                  <p className="font-medium text-left text-dark">
                    {t('about.commitment')}
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
                <h3 className="text-xl font-semibold text-primary mb-4">{t('about.proficientIn')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.frontend')}</span>
                    <span className="text-gray-700">{t('about.frontendTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.backend')}</span>
                    <span className="text-gray-700">{t('about.backendTech1')}</span>
                    <span className="text-gray-700">{t('about.backendTech2')}</span>
                    <span className="text-gray-700">{t('about.backendTech3')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.database')}</span>
                    <span className="text-gray-700">{t('about.databaseTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.authSecurity')}</span>
                    <span className="text-gray-700">{t('about.authSecurityTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.devopsDeployment')}</span>
                    <span className="text-gray-700">{t('about.devopsTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.cloudProviders')}</span>
                    <span className="text-gray-700">{t('about.cloudProvidersTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.testing')}</span>
                    <span className="text-gray-700">{t('about.testingTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.apiTools')}</span>
                    <span className="text-gray-700">{t('about.apiToolsTech')}</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                    <span className="font-bold text-primary mb-1">{t('about.methodology')}</span>
                    <span className="text-gray-700">{t('about.methodologyTech')}</span>
                  </div>
                </div>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default About
