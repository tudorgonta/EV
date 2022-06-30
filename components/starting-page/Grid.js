import React from 'react'
import {AiOutlineDollarCircle, AiOutlineWifi, AiOutlineBulb, AiOutlineHome, AiOutlineCar} from 'react-icons/ai'
import {BsDroplet} from 'react-icons/bs'

const Grid = () => {
  return (
    <div className='w-full bg-gray-800 text-gray-100 pb-20'>
      <div className='w-[95%] m-auto text-left '>
        <h2 className='text-2xl pt-16 pb-12 text-white text-center'>Benefits of EV home chargers</h2>
        <div className='flex flex-row flex-wrap justify-center'>
          <div className='w-[31%] border border-white/20 rounded mr-7 px-5 py-6 shadow'>
            <div className='flex flex-row'>
              <AiOutlineDollarCircle size={36} className='mr-3'/>
              <h3 className='text-xl font-medium py-2'>Cost efficient</h3>
            </div>
            <p className='text-base font-extralight leading-7'>Compared to buying your electricity via a third party, you can take advantage of the relatively cheap electricity from your residential grid at off-peak hours.</p>
          </div>
          <div className='w-[31%] border border-white/20 rounded mr-7 px-5 py-6 shadow'>
            <div className='flex flex-row'>
              <AiOutlineWifi size={36} className='mr-3'/>
              <h3 className='text-xl font-medium py-2'>Remote control</h3>
            </div>
            <p className='text-base font-extralight leading-7'>With smart charging features like remote control, you can stop and start charging your vehicle with the click of a button.</p>
          </div>
          <div className='w-[31%] border border-white/20 rounded px-5 py-6 shadow'>
          <div className='flex flex-row'>
              <AiOutlineBulb size={36} className='mr-3'/>
              <h3 className='text-xl font-medium py-2'>Sustainable</h3>
            </div>
            <p className='text-base font-extralight leading-7'>Connect your residential charging station to a solar panel or 100% renewable energy for emission-free driving.</p>
          </div>
          {
            //second half
          }
          <div className='w-[31%] border border-white/20 rounded mr-7 px-5 py-6 mt-7 shadow'>
            <div className='flex flex-row'>
              <BsDroplet size={36} className='mr-3'/>
              <h3 className='text-xl font-medium py-2'>Durable</h3>
            </div>
            <p className='text-base font-extralight leading-7'>Residential charging stations come in a range of shapes and sizes and are designed to withstand all weather conditions.</p>
          </div>
          <div className='w-[31%] border border-white/20 rounded mr-7 px-5 py-6 mt-7 shadow'>
            <div className='flex flex-row'>
              <AiOutlineHome size={36} className='mr-3'/>
              <h3 className='text-xl font-medium py-2'>Convenient</h3>
            </div>
            <p className='text-base font-extralight leading-7'>Because you can charge at home, you dont have to go out of your way to charge up on the way home.</p>
          </div>
          <div className='w-[31%] border border-white/20 rounded px-5 py-6 mt-7 shadow'>
          <div className='flex flex-row'>
              <AiOutlineCar size={36} className='mr-3'/>
              <h3 className='text-xl font-medium py-2'>Versatile</h3>
            </div>
            <p className='text-base font-extralight leading-7'>With power outputs between 3.7 kW and 22 kW, home charging stations are made to suit any passenger EV.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid