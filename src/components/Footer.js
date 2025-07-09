import React from 'react';

const Footer = () => {
  return (
    <>
        <div className='border-t-2 border-dark w-full'></div>
        <footer className='w-full px-24 py-8 font-medium flex flex-row items-center justify-between bg-light text-dark'>
            <h2>Copyright © {new Date().getFullYear()} All rights reserved.</h2>
            <h2>Made with 🤍 by Kamal IDOUFKIR</h2>
        </footer>
    </>
  );
}

export default Footer;
