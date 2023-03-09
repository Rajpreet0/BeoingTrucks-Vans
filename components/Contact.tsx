"use client"
import React, {useState} from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Contact: React.FC = () => {
  return (
    <div className='min-h-screen  pt-32  pb-32' id='kontakt' >
         <h1 className='text-center font-bold font-glock tracking-widest text-4xl'>Kontaktieren Sie uns</h1>
          
           <div className='flex p-4 w-full flex-col items-center justify-center md:flex-row'>
             
             {/* -------- RIGHT -------- */}
             
             <div className='mt-6 md:w-1/2 md:mt-24'>


                <form
                className='w-full max-w-lg'>
                  <div className='flex flex-wrap -mx-3 mb-4'>

                     <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                          Vorname
                        </label>
                        <input
                        name='surname'
                        required
                     
                        
                        className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                        placeholder='Max'
                        />
                     </div>
                     <div className='w-full md:w-1/2 px-3'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                            Nachname
                        </label>
                        <input
                         name='lastname'
                         required
                        
                         
                         className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                         placeholder='Mustermann'
                        />
                     </div>

                     <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                          Email
                        </label>
                        <input
                        name='email'
                        required
                      
                        
                        className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                        placeholder='max.muster@gmail.com'
                        />
                     </div>
                     <div className='w-full md:w-1/2 px-3'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                            Telefon
                        </label>
                        <input
                         name='telefon'
                         required
                       
                         
                         className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                         placeholder='+49 123 4567'
                        />
                     </div>

                     <div className='w-full px-3 mt-4 mb-6 md:mb-0'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                           Nachricht
                        </label>
                        <textarea
                         name='message'
                        
                         
                         required
                         placeholder="Deine Nachricht..." 
                         className='appearance-none block w-full h-full bg-white focus:border-2  focus:border-main text-gray-700 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white transition-all'
                        />
                     </div>

                     <div className='w-full px-3  mb-6 md:mb-0'>
                         <input type="submit" className="text-white text-xl mt-12 px-6 py-4 shadow-inner rounded-lg cursor-pointer bg-main" value="Abschicken"></input>
                     </div>

                  </div>
                </form>
             </div>
 
             {/* -------- LEFT -------- */}

             <div className='mt-6'>
                 <p className='text-lg'>Mustermann Straße 123, <br/> 12345 Musterhausen, Staat</p>
                 <div className='flex flex-col mt-4 justify-around md:flex-row'>
                     <div className='flex '>
                       <EnvelopeIcon
                       className='w-6 h-6 mr-2'/>
                        <p className='cursor-pointer hover:underline'><a href='mailto:olifugreven.kontakt@gmail.com'>mustermann@gmail.com</a></p>
                     </div>
                     <div className='flex ml-0 mt-4 md:mt-0 md:ml-5'>
                       <PhoneIcon
                        className='w-6 h-6 mr-2'/>
                        <p className='cursor-pointer hover:underline'><a href='tel:+4915901190990'>+0 12345 678910</a></p>
                     </div>
                 </div>
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19598.098466019677!2d7.377429432809612!3d52.12045344701782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b84aa60c80f9d5%3A0xa27f283d29f3e20!2sBorghorst%2C%2048565%20Steinfurt!5e0!3m2!1sde!2sde!4v1677950639270!5m2!1sde!2sde" 
                 width="100%" height="450" loading="lazy" 
              className='rounded-lg border-4 mt-8 text-center border-main'></iframe>
              
             </div>


           </div>
    </div>
  )
}

export default Contact

