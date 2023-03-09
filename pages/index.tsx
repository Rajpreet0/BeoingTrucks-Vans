import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import VansTrucks from '../components/VansTrucks'


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>BoeingTrucks&Vans: Home</title>
    </Head>
      <div className='min-h-screen text-white bg-fixed_bg'>
        <Hero/>
        <About/>
        <Gallery/>
        <VansTrucks/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
