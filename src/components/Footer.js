import React from 'react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  
  return (
    <>
        <div className='border-t-2 border-dark w-full'></div>
        <footer className='w-full px-24 py-8 font-medium flex flex-row items-center justify-between bg-light text-dark'>
            <h2>Copyright © {new Date().getFullYear()} {t('footer.allRightsReserved')}</h2>
            <h2>Made with 🤍 {t('footer.by')} Kamal IDOUFKIR</h2>
        </footer>
    </>
  );
}

export default Footer;
