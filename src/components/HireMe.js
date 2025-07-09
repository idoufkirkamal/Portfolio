import React, { useState } from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const HireMe = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation('common')

  return (
    <div className="fixed -left-1 -bottom-1 flex items-center justify-center overflow-hidden">
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText
          className="animate-spin-slow"
          backgroundColor={isHovered ? "#676194" : "#1b1b1b"}
          strokeColor={isHovered ? "#676194" : "#1b1b1b"}
        />
        <Link 
          href="mailto:idoufkir.kamal@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark hover:border-primary w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-primary"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {t('home.hireMe')}
        </Link>
      </div>
    </div>
  )
}

export default HireMe
