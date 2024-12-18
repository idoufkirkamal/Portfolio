import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypewriterAnimation = () => {
    return (
        <TypeAnimation
          sequence={[
            'Powerful',
            3000,
            'Modern',
            3000,
            'Clean',
            3000,
            'User-Friendly',
            3000,
            'Secure',
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
