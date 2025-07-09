import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import TransitionEffect from '@/components/TransitionEffect';
import { ContactTitle } from '@/components/TitlesBackground';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary" />,
      title: 'Email',
      details: 'idoufkir.kamal@gmail.com',
    },
    {
      icon: <FaPhone className="w-6 h-6 text-primary" />,
      title: 'Phone',
      details: '+212 7 080 871 65',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />,
      title: 'Location',
      details: 'Agadir, Morocco',
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-primary" />,
      title: 'LinkedIn',
      details: (
        <a href="https://www.linkedin.com/in/kamal-idoufkir" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/kamal-idoufkir
        </a>
      ),
    },
    {
      icon: <FaGithub className="w-6 h-6 text-primary" />,
      title: 'GitHub',
      details: (
        <a href="https://github.com/idoufkirkamal" target="_blank" rel="noopener noreferrer">
          github.com/idoufkirkamal
        </a>
      ),
    },
  ];

  return (
    <div>
      <Head>
        <title>Kamal IDOUFKIR | Contact</title>
        <meta
          name="description"
          content="Get in touch with Kamal IDOUFKIR, a skilled software engineer based in Morocco. Reach out for inquiries, collaborations, or project discussions."
        />
        <meta name="keywords" content="Kamal IDOUFKIR, contact, software engineer, web development, Morocco" />
        <meta property="og:title" content="Kamal IDOUFKIR | Contact" />
        <meta property="og:description" content="Reach out to Kamal IDOUFKIR for software engineering services and collaborations." />
        <meta property="og:url" content="https://www.kamalidoufkir.me/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <div className="container mx-auto">
            {/* Contact Banner */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <ContactTitle />
              </div>
              <h2 className="relative font-extrabold mb-16">
                <AnimatedText className="!text-5xl">
                  <span className="mr-3 !text-gray-700 uppercase">Get</span>
                  <span className="mr-3 !text-gray-700 uppercase">in</span>
                  <span className="text-primary uppercase">Touch</span>
                </AnimatedText>
              </h2>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Let&#39;s Bring Your Ideas to Life!</h3>
                <p className="text-gray-600 mb-6">
                  If you have any suggestions or a project in mind, please fill out the form, and I will get back to you
                  soon!
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="col-span-12 space-y-6 flex flex-col justify-center"
                >
                  {contactInfo.map(({ icon, title, details }, index) => (
                    <ContactInfo key={index} icon={icon} title={title} details={details} />
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="block col-span-full">
                      <span className="text-gray-700">Your Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-dark"
                      />
                    </label>
                    <label className="block col-span-full">
                      <span className="text-gray-700">Your Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-dark"
                      />
                    </label>
                    <label className="block col-span-full">
                      <span className="text-gray-700">Your Subject</span>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-dark"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-gray-700">Your Message</span>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="8"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-dark"
                    ></textarea>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-3 px-6 rounded-md bg-dark text-light text-lg font-semibold transition-colors duration-300"
                  >
                    Send Message
                  </motion.button>

                  {submitted && <p className="text-green-600 mt-4">Thank you! Your message has been sent.</p>}
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

const ContactInfo = ({ icon, title, details }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
    <div className="p-3 bg-gray-200 rounded-full">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-dark">{title}</h4>
      <p className="text-gray-600">{details}</p>
    </div>
  </motion.div>
);

export default Contact;
