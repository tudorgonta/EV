import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Roadmap = () => {
  return (
    <>
    <div className='w-full'>
        {/* Row */}
      <div className='flex flex-row w-[70%] mx-auto pt-10 mt-5 pb-12'>
          <div className='TEXT w-2/4 text-left my-auto'>
            <h2 className='text-2xl pb-4 font-medium'>How do i charge my car?</h2>
            <p className='text-md font-extralight pb-4'>Charge your electric vehicle at home using one of our smart homecharge solutions or gain access to over 6,200 public charging bays** across the country using our intuitive app.</p>
            <Link href="/"><a className='underline text-md font-medium'>Read more</a></Link>
          </div>
          <div className='w-[33%] drop-shadow-lg ml-28 text-right'>
            <Image
                src="https://res.cloudinary.com/dxmyxyyay/image/upload/v1656525133/dcbel-7aFmUOkguyE-unsplash_1_nch8o9.jpg"
                alt="Plug"
                height="120%"
                width={80}
                layout="responsive" 
                objectFit="cover"
                className='rounded-sm object-[30%]'
            />
          </div>
      </div>
    </div>
    <div className='w-full bg-gray-50'>
      {/* Row */}
      <div className='flex flex-row w-[70%] m-auto pt-10 mt-5 pb-12'>
          <div className='w-[33%] drop-shadow-lg mr-28 text-left'>
            <Image
                src="https://res.cloudinary.com/dxmyxyyay/image/upload/v1656528688/zaptec-YawPVmsnCbw-unsplash_rcgd9z.jpg"
                alt="Plug"
                height="120%"
                width={80}
                layout="responsive" 
                objectFit="cover"
                className='rounded-sm object-[60%]'
            />
          </div>
          <div className='TEXT w-2/4 text-left my-auto'>
            <h2 className='text-2xl pb-4 font-medium'>How long will my EV take to charge?</h2>
            <p className='text-md font-extralight pb-4'>The typical time to charge an electric car can take as little as 30 minutes or as long as 12 hours. This depends on the size of your vehicles battery and the speed of the charging point.</p>
            <Link href="/"><a className='underline text-md font-medium'>Read more</a></Link>
          </div>
      </div>
    </div>
    <div className='w-full'>
      {/* Row */}
      <div className='flex flex-row w-[70%] m-auto pt-10 mt-5 pb-16'>
          <div className='TEXT w-2/4 my-auto'>
            <h2 className='text-2xl pb-4 font-medium'>How much will it cost?</h2>
            <p className='text-md font-extralight pb-4'>The average electricity rate is <strong>28p per kWh*.</strong><br></br>
            <span className='text-sm'>*Please note, energy prices vary and can go up and down. To find your current cost per kWh, please check your electricity bill or contact your provider.</span></p>
            <Link href="/"><a className='underline text-md font-medium'>Read more</a></Link>
          </div>
          <div className='w-[33%] drop-shadow-lg ml-28 text-left'>
            <Image
                src="https://res.cloudinary.com/dxmyxyyay/image/upload/v1656527809/dcbel-nhEIkTjKJ3k-unsplash_vfcygp.jpg"
                alt="Plug"
                height="120%"
                width={80}
                layout="responsive" 
                objectFit="cover"
                className='rounded-sm object-[10%]'
            />
          </div>
      </div>
      
    </div>
    </>
  )
}

export default Roadmap