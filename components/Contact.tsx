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
                        <label className='block uppercase tracking-widest  text-xs font-bold mb-2'>
                          Vorname
                        </label>
                        <input
                        name='surname'
                        required
                     
                        
                        className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-black rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
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
                        
                         
                         className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-black rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
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
                      
                        
                        className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-black rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
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
                       
                         
                         className='appearance-none block w-full shadow-inner focus:border-2 focus:border-main bg-white text-black rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
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
                         className='appearance-none block w-full h-full bg-white focus:border-2  focus:border-main text-black rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white transition-all'
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
                 <p className='text-lg'>An der Wurth 1-3 , <br/> 48612 Horstmar, NRW</p>
                 <div className='flex flex-col mt-4 justify-around md:flex-row'>
                     <div className='flex '>
                       <EnvelopeIcon
                       className='w-6 h-6 mr-2'/>
                        <p className='cursor-pointer hover:underline'><a href='mailto:boeingtrucksvans.kontakt@gmail.com'>boeingtrucksvans.kontakt@gmail.com</a></p>
                     </div>
                     <div className='flex ml-0 mt-4 md:mt-0 md:ml-5'>
                       <PhoneIcon
                        className='w-6 h-6 mr-2'/>
                        <p className='cursor-pointer hover:underline'><a href='tel:+49 152 53134794'>+49 152 53134794</a></p>
                     </div>
                 </div>
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.3860786950863!2d7.315950977129362!3d52.072701369249124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b84bbfaf6fcb5b%3A0xc5637ecd3581a5c9!2sAn%20d.%20Wurth%201%2C%2048612%20Horstmar!5e0!3m2!1sde!2sde!4v1686782595848!5m2!1sde!2sde" 
                 width="100%" height="450" loading="lazy" 
              className='rounded-lg border-4 mt-8 text-center border-main'></iframe>
              
             </div>


           </div>
    </div>
  )
}

export default Contact

