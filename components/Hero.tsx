"use client";
import Image from 'next/image'
import React from 'react'
import {Link as ScrollLink} from 'react-scroll'
import { Fade } from "react-awesome-reveal";
import BackgroundImage from '../images/background-image.jpg'

const Hero: React.FC = () => {
  return (
    <div className="hero_container" id="home">
      <div className='hero_bg'>
        <Image alt='' src={BackgroundImage} layout='fill' className='object-center'/>
      </div>
      <div className='hero_content'>
       <Fade> 
        <div className='flex flex-col items-center justify-center h-screen text-white'> 
            <h1 className='text-[28px] tracking-widest font-glock md:text-[50px]'>BoeingTrucks&Vans</h1>
            <p className='text-lg p-2 w-full mt-[25px] text-center items-center md:w-[55%] md:text-xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
            <div className='flex space-x-2 md:space-x-6'>
               <ScrollLink activeClass="active" to="mobile" smooth="true"> 
                 <button className='hero_btn'>Unsere Angebote</button>
               </ScrollLink>
               <ScrollLink activeClass="active" to="kontakt" smooth="true"> 
                 <button className='hero_btn'>Kontaktiere uns</button>
               </ScrollLink>
            </div>
        </div>
       </Fade>
      </div>
    </div>
  )
}

export default Hero
