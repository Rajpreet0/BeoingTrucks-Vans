import Image from 'next/image'
import React from 'react'
import Van from '../images/van.jpg'

const Gallery: React.FC = () => {
  return (
<div className='min-h-screen' id='gallery'>
    <h1 className='text-3xl text-center pt-20 pb-10 font-glock tracking-wider'>Gallerie</h1>
<section className="overflow-hidden text-neutral-700" >
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Van} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Van}/>
        </div>
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Van} />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Van} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Van} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Van} />
        </div>
      </div>
    </div>
  </div>
</section>

</div>

  )
}

export default Gallery