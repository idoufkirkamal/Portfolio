import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
  <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
    <NavBar/>
    <AnimatePresence mode="wait">
      <Component key={router.asPath} {...pageProps} />  
    </AnimatePresence>
    {router.pathname !== '/' && <Footer />}
  </main>)
}
