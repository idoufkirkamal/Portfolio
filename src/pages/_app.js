import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
  <main className={`${montserrat.variable} font-mont`}>
    <NavBar/>
    <Component {...pageProps} />
    {router.pathname !== '/' && <Footer />}
  </main>)
}
