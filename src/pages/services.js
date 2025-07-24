import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaChartLine, FaCloud, FaDatabase, FaPencilRuler , FaShoppingCart, FaServer, FaCogs, FaBug } from 'react-icons/fa'
import TransitionEffect from '@/components/TransitionEffect'
import { ServicesTitle } from '@/components/TitlesBackground';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Services = () => {
  const { t } = useTranslation('common')

  const serviceList = [
    {
      title: t('services.webDevelopmentTitle'),
      description: t('services.webDevelopmentDescription'),
      icon: <FaCode className="w-8 h-8 text-blue-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-blue-500',
      circleColor: 'bg-blue-200 group-hover:bg-light',
    },
    {
      title: t('services.uiUxDesignTitle'),
      description: t('services.uiUxDesignDescription'),
      icon: <FaPencilRuler className="w-8 h-8 text-teal-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-teal-500',
      circleColor: 'bg-teal-200 group-hover:bg-light',
    },
    {
      title: t('services.devOpsTitle'),
      description: t('services.devOpsDescription'),
      icon: <FaCogs className="w-8 h-8 text-cyan-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-cyan-500',
      circleColor: 'bg-cyan-200 group-hover:bg-light',
    },
    {
      title: t('services.cloudSolutionsTitle'),
      description: t('services.cloudSolutionsDescription'),
      icon: <FaCloud className="w-8 h-8 text-orange-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-orange-500',
      circleColor: 'bg-orange-200 group-hover:bg-light',
    },
    {
      title: t('services.testingTitle'),
      description: t('services.testingDescription'),
      icon: <FaBug className="w-8 h-8 text-gray-700 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-gray-700',
      circleColor: 'bg-gray-200 group-hover:bg-light',
    },
    {
      title: t('services.databaseManagementTitle'),
      description: t('services.databaseManagementDescription'),
      icon: <FaServer className="w-8 h-8 text-red-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-red-500',
      circleColor: 'bg-red-200 group-hover:bg-light',
    },
    {
      title: t('services.seoOptimizationTitle'),
      description: t('services.seoOptimizationDescription'),
      icon: <FaChartLine className="w-8 h-8 text-green-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-green-500',
      circleColor: 'bg-green-200 group-hover:bg-light',
    },
    {
      title: t('services.ecommerceSolutionsTitle'),
      description: t('services.ecommerceSolutionsDescription'),
      icon: <FaShoppingCart className="w-8 h-8 text-indigo-500 transition-colors duration-300" />,
      backgroundColor: 'group-hover:bg-indigo-500',
      circleColor: 'bg-indigo-200 group-hover:bg-light',
    },
  ]
  return (
    <div>
    <Head>
      <title>{t('services.title')}</title>
      <meta name="description" content={t('services.description')} />
      <meta name="keywords" content={t('services.keywords')} />
      <meta property="og:title" content={t('services.title')} />
      <meta property="og:description" content={t('services.description')} />
      <meta property="og:url" content="https://www.kamalidoufkir.me/services" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
            {/* Services Banner */}
            <div className="text-center mb-12 relative">
              {/* Background svg */}
              <div className="absolute inset-0 flex justify-center items-center ">
                <ServicesTitle />
              </div>
              {/* Foreground Text */}      
              <h2 className="relative font-extrabold mb-16">
                <AnimatedText className='!text-5xl'>
                    <span className="mr-3 !text-gray-700 uppercase">{t('services.my')}</span>
                    <span className="text-primary uppercase">{t('navbar.services')}</span>
                </AnimatedText>    
              </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="group relative p-6 rounded-lg shadow-lg flex flex-col items-center text-center bg-gray-100 transition-colors duration-300 border border-solid border-gray-500"
              >

                <div className={`relative mb-4 p-4 rounded-full transition-colors duration-300 z-10 ${service.circleColor}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-light z-10">
                  {service.title}
                </h3>
                <p className="group-hover:text-light transition-colors duration-300 z-10">
                  {service.description}
                </p>

                <div className={`absolute bottom-0 left-0 w-full rounded-lg ${service. backgroundColor} z-0 h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-500 ease-in-out`} />
              </motion.div>
            ))}
          </div>
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

export default Services
