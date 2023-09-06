import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
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
      <title>Boeing Trucks&Vans GmbH | Hompage des Autoverkaufs in Horstmar der Familie Böing</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel='canonical' href='https://boeing-trucks-vans.de'/>
      <meta name='Author' content='Katharina Böing'/>
      <meta
      name="description"
      content='Finden Sie Ihr Traumauto bei Boeing Trucks&Vans GmbH in Horstmar. Wir bieten Ihnen eine große Auswahl an neuen und gebrauchten Autos aller Marken und Modelle. Ob Sie ein PKW, einen Transporter oder einen LKW suchen, bei uns werden Sie sicher fündig.'
      key="desc"/>
        <meta name="revisit-after" content='5 days'/>
        <meta name='keywords' content='horstmar, Katharina Böing, Boeing, Böing, Stadt Horstmar, Kfz-Handel Horstmar, auto verkaufen, mobile de auto verkauf, horstmar leer, Automarkt Horstmar'/>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta itemProp='isFamilyFriendly' content='True'></meta>
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
