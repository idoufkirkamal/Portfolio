import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'next-i18next'

const TypewriterAnimation = () => {
    const { t, i18n } = useTranslation('common')

    return (
        <TypeAnimation
          key={i18n.language}
          sequence={[
            t('home.typewriter.modern'),
            3200,
            t('home.typewriter.clean'),
            3000,
            t('home.typewriter.efficient'),
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
