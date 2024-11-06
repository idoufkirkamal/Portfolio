import React from 'react'
import Certificate1 from '../../public/images/certificates/1.jpg'
import Certificate2 from '../../public/images/certificates/2.jpg'
import Certificate3 from '../../public/images/certificates/3.jpg'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({site, title, img, link}) => {
  return(
    <article className='w-full h-auto flex flex-col items-center justify-center rounded-xl bg-light shadow-xl relative'>
    <div className="relative group w-full h-full">
      <Image
        src={img}
        alt="Vancouver Mountains, Canada"
        className="rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="h-auto absolute -bottom-7 left-0 right-0 bg-white rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <span className='text-primary font-medium text-sm'>{site}</span>
        <h2 className='w-full text-left text-mds font-bold mt-2 mb-6'>{title}</h2>
        <Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2 px-6 text-md font-semibold'>View Certificate</Link>
      </div>
    </div>
  </article>
  )
}



const Certificates = () => {
  return (
    <>
    <h1 className='font-bold text-8xl mt-40 w-full text-center text-dark'>Certificates</h1>
    <div className='grid grid-cols-12 gap-16 pt-16 mt-10'>
        <div className='col-span-6 flex'>
            <Card 
              site="Udemy"
              title="React, NodeJS, Express & MongoDB"
              img={Certificate1}
              link="/"
              githubLink="/"
            /> 
        </div>
        <div className='col-span-6 flex'>
            <Card 
              site="Udemy"
              title="MongoDB - The Complete Developer's Guide 2024"
              img={Certificate2}
              link="/"
              githubLink="/"
            /> 
        </div>
        <div className='col-span-6 flex'>
            <Card 
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
