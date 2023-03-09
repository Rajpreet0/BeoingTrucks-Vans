import Image from 'next/image'
import Van from '../images/van.jpg'
import React from 'react'

const About: React.FC = () => {
  return (
    <div className='min-h-screen' id='about'>
        <h1 className='text-center text-3xl pt-20 font-glock tracking-wider'>Über uns</h1>
        <div className='flex flex-col w-full items-center justify-center md:mt-[8%] md:flex-row'>
            <div className='text-center p-2 md:w-1/3'>
                <Image
                    src={Van}
                    alt=""
                    className='rounded-lg'/>
            </div>
            <div className='p-2 md:w-1/2'>
             <p className='text-xl ml-4 w-4/'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                <br/><br/>
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                <br/><br/>
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>
            </div>
        </div>
    </div>
  )
}

export default About