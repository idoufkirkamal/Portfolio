import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import TransitionEffect from '@/components/TransitionEffect'

const contact = () => {
  return (
    <div>
      <Head>
        <title>Kamal IDOUFKIR | Contact</title>
        <meta name="description" content="Get in touch with Kamal IDOUFKIR" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="Contact" />
          <div className="grid grid-cols-12 gap-8 w-full max-w-5xl">
            {/* Contact Form */}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-12 md:col-span-7 bg-gray-100 p-8 rounded-lg shadow-lg"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-2xl font-bold text-left mb-4"
              >
                Let's Bring Your Ideas to Life!
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-lg text-left mb-8"
              >
                If you have any suggestions or a project in mind, please fill out the form below, and I will get back to you soon!
              </motion.h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none"
                    rows="4"
                    placeholder="Your Message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.90 }}
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-dark text-light p-2text-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </motion.button>
                </form>
            </motion.div>

            {/* Vertical Line */}
            <div className="hidden md:block col-span-1 border-l border-gray-300 h-full mx-auto"></div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-12 md:col-span-4 space-y-6 flex flex-col justify-center"
            >
              <ContactInfo
                icon={<FaEnvelope className="w-6 h-6 text-red-400" />}
                title="Email"
                details="idoufkir.kamal@gmail.com"
              />
              <ContactInfo
                icon={<FaPhone className="w-6 h-6 text-teal-500" />}
                title="Phone"
                details="+212708087165"
              />
              <ContactInfo
                icon={<FaMapMarkerAlt className="w-6 h-6 text-blue-500" />}
                title="Location"
                details="Agadir, Morocco"
              />
              <ContactInfo
                icon={<FaLinkedin className="w-6 h-6 text-blue-700" />}
                title="LinkedIn"
                details={<a href="https://www.linkedin.com/in/kamal-idoufkir" target="_blank" rel="noopener noreferrer">linkedin.com/in/kamal-idoufkir</a>}
              />
              <ContactInfo
                icon={<FaGithub className="w-6 h-6 text-black" />}
                title="GitHub"
                details={<a href="https://github.com/idoufkirkamal" target="_blank" rel="noopener noreferrer">github.com/idoufkirkamal</a>}
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </div>
  )
}

const ContactInfo = ({ icon, title, details }) => (
  <div className="flex items-center space-x-4">
    <div className="p-3 bg-gray-200 rounded-full">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{details}</p>
    </div>
  </div>
)

export default contact
