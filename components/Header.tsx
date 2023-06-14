"use client"
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import {Link as ScrollLink} from 'react-scroll'
import { Slide } from "react-awesome-reveal";
import { useState } from "react"
import Logo from '../images/logo.png'
import Link from "next/link";

function Header () {

    const [toggle, setToggle] = useState<boolean>(false);


    const toggleModal = () => {
        setToggle(!toggle);
    }

  return (
    <div>
       
        <nav className="fixed w-full z-40  bg-[#292929]">
            
            <div className="flex items-center justify-between">
                <div className="p-2 cursor-pointer">
    	           <Link href='/'>
                        <Image
                           src={Logo}
                           alt=""
                           className="p-1 ml-2 h-[75px] w-[100px]  md:h-[100px] md:w-[150px]"/>
                   </Link>   
                </div>
                <Slide>
                <div className="hidden md:flex items-center space-x-5 text-xl lg:space-x-14 text-white">
                    <ScrollLink activeClass="active" to="about" smooth="true" className="header-element">
                        Über uns
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="gallery" smooth="true" className="header-element">
                       Gallerie
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="kontakt" smooth="true" className="header-element">
                        Kontakt
                    </ScrollLink>
                <div className='hidden md:block p-2 px-6 pt-2 text-lg text-white'>
                    <ScrollLink activeClass="active" to="mobile" smooth="true">
                        <button
                        className='px-8 py-2 color-black rounded-full tracking-widest hover:scale-110 transition-all drop-shadow-md bg-main'>
                         Vans&Trucks
                        </button>
                    </ScrollLink>  
                 </div> 
                </div>
    
            </Slide>

            {/* Mobile Menu */}
            {toggle && (
            
                   <XMarkIcon
                     onClick={toggleModal}
                     className='block h-6 w-6 cursor-pointer text-main md:hidden'/>
              )}
              {!toggle && (
                     <Bars3BottomRightIcon
                       onClick={toggleModal}
                       className='block h-6 w-6 cursor-pointer text-main md:hidden'/>
              )}        
            </div>
          
            
        {
          toggle && (
            <div>
               <div className='absolute flex flex-col items-center 
              h-fit space-y-4 w-full text-xl  sm:w-auto 
              sm:self-center   drop-shadow-xl transition-all text-white bg-[#292929]'>
                    
                    <ScrollLink activeClass="active" to="about" smooth="true" onClick={() => toggleModal()} className="header-element">
                        Über uns
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="gallery" smooth="true" onClick={() => toggleModal()} className="header-element">
                       Gallerie
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="kontakt" smooth="true" onClick={() => toggleModal()} className="header-element">
                        Kontakt
                    </ScrollLink>
                <div className='block p-3 px-6 pt-2 cursor-pointer text-white'>
                <ScrollLink activeClass="active" to="mobile" onClick={() => toggleModal()} smooth="true">
                        <button
                        className='px-8 py-2 color-black rounded-full tracking-widest hover:scale-110 transition-all drop-shadow-md bg-main'>
                         Vans&Trucks
                        </button>
                    </ScrollLink> 
                </div>
              
               </div>
            </div>
          )
        }

        </nav>
    </div>
  )
}

export default Header