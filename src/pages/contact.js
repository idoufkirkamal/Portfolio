import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaUser, FaComment  } from 'react-icons/fa';
import TransitionEffect from '@/components/TransitionEffect';

const contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <Head>
        <title>Kamal IDOUFKIR | Contact</title>
        <meta name="description" content="Get in touch with Kamal IDOUFKIR, a skilled software engineer based in Morocco. Reach out for inquiries, collaborations, or project discussions related to web development, mobile app development, and more." />
        <meta name="keywords" content="Kamal IDOUFKIR, contact, software engineer, web development, mobile app development, Morocco, IT professional, LinkedIn, GitHub" />
        <meta property="og:title" content="Kamal IDOUFKIR | Contact" />
        <meta property="og:description" content="Reach out to Kamal IDOUFKIR for software engineering services, project collaborations, and inquiries. Based in Agadir, Morocco." />
        <meta property="og:url" content="https://www.kamalidoufkir.me/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="Contact" />
          <div className="grid grid-cols-12 gap-8 w-full max-w-5xl">
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <FaUser className="absolute left-3 top-10 text-gray-400" />
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                    type="text"
                    className="mt-1 p-3 pl-10 w-full border border-gray-300 rounded-md focus:outline-none transition duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <FaEnvelope className="absolute left-3 top-10 text-gray-400" />
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                    type="email"
                    className="mt-1 p-3 pl-10 w-full border border-gray-300 rounded-md focus:outline-none transition duration-300"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <FaComment className="absolute left-3 top-10 text-gray-400" />
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                    className="mt-1 p-3 pl-10 w-full border border-gray-300 rounded-md focus:outline-none transition duration-300"
                    rows="4"
                    placeholder="Your Message"
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-dark text-light text-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-green-500 mt-4"
                  >
                    Thank you! Your message has been sent.
                  </motion.p>
                )}
              </AnimatePresence>
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
  );
};

const ContactInfo = ({ icon, title, details }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-4"
  >
    <div className="p-3 bg-gray-200 rounded-full">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{details}</p>
    </div>
  </motion.div>
);

export default contact;
