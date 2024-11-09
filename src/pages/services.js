import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaChartLine, FaCloud, FaDatabase, FaPencilRuler , FaShoppingCart, FaServer } from 'react-icons/fa'
import TransitionEffect from '@/components/TransitionEffect'
import { ServicesTitle } from '@/components/TitlesBackground';

const serviceList = [
  {
    title: 'Web Development',
    description: 'High-quality and responsive web development services.',
    icon: <FaCode className="w-8 h-8 text-blue-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-blue-500',
    circleColor: 'bg-blue-200 group-hover:bg-light',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user experiences.',
    icon: <FaPencilRuler className="w-8 h-8 text-purple-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-purple-500',
    circleColor: 'bg-purple-200 group-hover:bg-light',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating mobile applications for Android and iOS platforms.',
    icon: <FaMobileAlt className="w-8 h-8 text-teal-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-teal-500',
    circleColor: 'bg-teal-200 group-hover:bg-light',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility and search engine ranking.',
    icon: <FaChartLine className="w-8 h-8 text-yellow-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-yellow-500',
    circleColor: 'bg-yellow-200 group-hover:bg-light',
  },
  {
    title: 'Cloud Solutions',
    description: 'Implementing cloud infrastructure and services.',
    icon: <FaCloud className="w-8 h-8 text-green-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-green-500',
    circleColor: 'bg-green-200 group-hover:bg-light',
  },
  {
    title: 'Data Analysis',
    description: 'Providing data insights and analytics solutions.',
    icon: <FaDatabase className="w-8 h-8 text-red-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-red-500',
    circleColor: 'bg-red-200 group-hover:bg-light',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Developing and managing e-commerce platforms.',
    icon: <FaShoppingCart className="w-8 h-8 text-indigo-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-indigo-500',
    circleColor: 'bg-indigo-200 group-hover:bg-light',
  },
  {
    title: 'Database Management',
    description: 'Ensuring robust and efficient database solutions.',
    icon: <FaServer className="w-8 h-8 text-orange-500 transition-colors duration-300" />,
    backgroundColor: 'group-hover:bg-orange-500',
    circleColor: 'bg-orange-200 group-hover:bg-light',
  },
]
const services = () => {
  return (
    <div>
    <Head>
      <title>Kamal IDOUFKIR | Services</title>
      <meta name="description" content="Discover the professional IT services offered by Kamal IDOUFKIR, including web development, mobile app development, UI/UX design, SEO optimization, cloud solutions, and more. Each service is crafted with expertise in modern technologies like React, Tailwind CSS, and more." />
      <meta name="keywords" content="Kamal IDOUFKIR, IT services, web development, mobile app development, UI/UX design, SEO optimization, cloud solutions, data analysis, e-commerce solutions, database management, Morocco IT professional" />
      <meta property="og:title" content="Kamal IDOUFKIR | Professional IT Services" />
      <meta property="og:description" content="Explore the range of IT services provided by Kamal IDOUFKIR, from web development and SEO to cloud and database solutions." />
      <meta property="og:url" content="https://www.kamalidoufkir.me/services" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
            {/* Contact Banner */}
            <div className="text-center mb-12 relative">
              {/* Background svg */}
              <div className="absolute inset-0 flex justify-center items-center ">
                <ServicesTitle />
              </div>
              {/* Foreground Text */}      
              <h2 className="relative font-extrabold mb-16">
                <AnimatedText className='!text-5xl'>
                    <span className="mr-3 !text-gray-700 uppercase">My</span>
                    <span className="text-primary uppercase">Services</span>
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
                className="group relative p-6 rounded-lg shadow-lg flex flex-col items-center text-center bg-gray-100 transition-colors duration-300"
              >
                {/* Circular Icon Background with hover color change */}
                <div className={`relative mb-4 p-4 rounded-full transition-colors duration-300 z-10 ${service.circleColor}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-light z-10">
                  {service.title}
                </h3>
                <p className="group-hover:text-light transition-colors duration-300 z-10">
                  {service.description}
                </p>

                {/* Bottom line with purple color, animating from bottom to top on hover */}
                <div className={`absolute bottom-0 left-0 w-full rounded-lg ${service. backgroundColor} z-0 h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-500 ease-in-out`} />
              </motion.div>
            ))}
          </div>
        </Layout>
      </main>
    </div>
  )
}

export default services
