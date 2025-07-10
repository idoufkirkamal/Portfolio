import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'next-i18next'

const TypewriterAnimation = () => {
    const { t } = useTranslation('common')
    
    return (
        <TypeAnimation
          sequence={[
            t('home.typewriter.powerful'),
            3000,
            t('home.typewriter.modern'),
            3000,
            t('home.typewriter.clean'),
            3000,
            t('home.typewriter.userFriendly'),
            3000,
            t('home.typewriter.secure'),
            3000
          ]}
          wrapper="span"
          speed={10}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className='text-primary'
        />
      );
}

export default TypewriterAnimation
