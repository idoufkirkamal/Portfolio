import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Certificate1 from '../../public/images/certificates/1.jpg'
import Certificate2 from '../../public/images/certificates/2.jpg'
import Certificate3 from '../../public/images/certificates/3.jpg'

const Certificate = ({site, title, img, link}) => {
  return(
      <article className='w-full flex flex-col items-center justify-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative'>
          <div>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102.5%] rounded-[2rem] bg-dark rounded-br-[2.1rem]'/>
              <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg group">
                <Image src={img} alt={title} className="w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"/>
            </Link>
            <div className='w-full mt-4'>
                  <span className='text-primary font-medium text-xl'>{site}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                      <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    </Link> 
              </div>
          </div>
          <div className='w-full flex flex-col items-start justify-start mt-4'>
              <div className='w-full mt-4 flex items-center justify-between'>
                  <Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>View Certificate</Link>
              </div>
          </div>
      </article>
  )
}


const Certificates = () => {
  return (
    <>
    <h1 className='font-bold text-8xl mt-40 w-full text-center text-dark'>Certificates</h1>
    <div className='grid grid-cols-12 gap-24 gap-y-24 pt-16'>
        <div className='col-span-6 flex'>
            <Certificate 
              site="Udemy"
              title="React, NodeJS, Express & MongoDB"
              img={Certificate1}
              link="/"
              githubLink="/"
            /> 
        </div>
        <div className='col-span-6 flex'>
            <Certificate 
              site="Udemy"
              title="MongoDB - The Complete Developer's Guide 2024"
              img={Certificate2}
              link="/"
              githubLink="/"
            /> 
        </div>
        <div className='col-span-6 flex'>
            <Certificate 
              site="Facebook"
              title="The Complete Full stack Developer's Guide"
              img={Certificate3}
              link="/"
              githubLink="/"
            /> 
        </div>
    </div>
    </>
  )
}

export default Certificates
