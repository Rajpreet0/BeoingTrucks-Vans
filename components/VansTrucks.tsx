import React from 'react'
import { ArrowLongUpIcon } from '@heroicons/react/24/outline'
import MobileLogo from '../images/mobile_logo.png'
import Image from 'next/image'

const VansTrucks: React.FC = () => {
  return (
    <div className='min-h-screen pt-[10%]' id="mobile">
        <h1 className='text-center text-3xl font-glock pt-20 tracking-wider'>Unsere Angebote</h1>
        <p className='text-center text-[#c6c6c6] mt-2'>Unsere ganzen Angebote von unseren Truck und unseren Vans werden bei uns über Mobile.de verhandelt und beworben</p>
        <div className='p-[5%]'>
          <iframe 
          src="https://www.instagram.com/" 
          className='w-full h-screen border-2 rounded-lg'/>
          <a 
          target="_blank" rel='noopener noreferrer'
          href='https://suchen.mobile.de/fahrzeuge/details.html?id=361542077&damageUnrepaired=ALSO_DAMAGE_UNREPAIRED&isSearchRequest=true&pageNumber=1&scopeId=MH&action=topOfPage&top=1:1&searchId=6d71593e-9e3e-9ade-e428-8c2d9cc464eb&ref=srp'>
          <div className='w-[250px] h-[55px] bg-[#ff8635] mt-[25px] shadow-lg rounded-lg flex cursor-pointer hover:scale-105 transition-all'>
             <div className='flex flex-rowx items-center justify-around w-full'>
                <Image src={MobileLogo} alt='' width={70} height={70}/>
                <p className='text-white hover:underline mr-5'>Zu mobile.de</p>
                <ArrowLongUpIcon className='w-6 h-6 text-white rotate-45 mr-5'/>
             </div>
          </div>
          </a>
        </div>
    </div>
  )
}

export default VansTrucks