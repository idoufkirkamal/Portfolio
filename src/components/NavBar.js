import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import {useRouter} from 'next/router'
import WhatsappIcon, { GithubIcon, LinkedInIcon } from './Icons'
import { motion } from 'framer-motion'
import { LanguageIcon } from './Icons'
import { useTranslation } from 'next-i18next'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group text-dark`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}   
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false)
    const { t } = useTranslation('common')
    const router = useRouter()

    const handleLanguageChange = (event) => {
        const locale = event.target.value;
        router.push(router.pathname, router.asPath, { locale });
    }
  return (
    <header className='w-full px-24 py-8 font-medium flex items-center justify-between bg-light'>
        <nav className='z-10'>
            <CustomLink href='/' title={t('navbar.home')} className='mr-4'/>
            <CustomLink href='/about' title={t('navbar.about')} className='mx-4'/>
            <CustomLink href='/projects' title={t('navbar.projects')} className='mx-4'/>
            <CustomLink href='/services' title={t('navbar.services')} className='mx-4'/>
            <CustomLink href='/contact' title={t('navbar.contact')} className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap z-10'>
            <motion.a href='https://github.com/idoufkirkamal' target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 ms-4'
            ><GithubIcon/></motion.a>
            <motion.a href="https://api.whatsapp.com/send?phone=212708087165&text=Hello Kamal! Are you available to discuss a project?" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 ml-4'
            >
                <WhatsappIcon/>
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/kamal-idoufkir' target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 ml-4'
            >
                <LinkedInIcon/>
            </motion.a>

            <div className='relative ml-4'>
                <LanguageIcon 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg !w-5 cursor-pointer ml-1" 
                    color={isHovered ? "#676194" : "#1b1b1b"}
                />
                <select 
                    className="bg-light text-dark hover:text-primary py-2 pl-8 pr-2 rounded-md text-lg font-semibold border-2 border-solid border-dark hover:border-primary cursor-pointer "
                    value={router.locale}
                    onChange={handleLanguageChange}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%] z-10'>
            <Logo/>
        </div>
    </header>
  )
}

export default NavBar
