import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'

const contact = () => {
  return (
    <div>
    <Head>
        <title>Kamal IDOUFKIR | Contact</title>
        <meta name="description" content='Kamal IDOUFKIR' />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>    
        <AnimatedText className='mb-16' text="My Services"/>         
        

        </Layout>
    </main>
</div>
  )
}

export default contact
