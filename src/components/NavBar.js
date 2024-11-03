import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {useRouter} from 'next/router'
import WhatsappIcon, { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import { LanguageIcon } from './Icons'
import useThemSwitcher from './hooks/useThemSwitcher'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
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
    const [mode, setMode] = useThemSwitcher();

  return (
    <header className='w-full px-24 py-8 font-medium flex items-center justify-between bg-light'>
        <nav className='z-10'>
            <CustomLink href='/' title="Home" className='mr-4'/>
            <CustomLink href='/about' title="About" className='mx-4'/>
            <CustomLink href='/projects' title="Projects" className='mx-4'/>
            <CustomLink href='/services' title="Services" className='mx-4'/>
            <CustomLink href='/contact' title="Contact" className='ml-4'/>
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

            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 w-6
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                > 
                {
                    mode === "light" 
                    ? <SunIcon className={"fill-dark"}/>
                    : <MoonIcon className={"fill-dark"}/>
                    
                }
            </button>

            <div className='relative ml-4'>
                <LanguageIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg !w-5 cursor-pointer ml-1" />
                <select className="bg-light text-dark py-2 pl-8 pr-2 rounded-md text-lg font-semibold border-2 border-solid border-dark cursor-pointer"
                    defaultValue="language"
                >
                    <option value="language" disabled hidden>Language</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="ar">Arabic</option>
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
