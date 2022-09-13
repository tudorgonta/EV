import {AiOutlineDollarCircle, AiOutlineWifi, AiOutlineBulb, AiOutlineHome, AiOutlineCar} from 'react-icons/ai'
import {BsDroplet} from 'react-icons/bs'

const data = [
  {
    id: 0,
    name: 'Cost efficient',
    icon: <AiOutlineDollarCircle size={36} className='mr-3'/>,
    desc: 'Compared to buying your electricity via a third party, you can take advantage of the relatively cheap electricity from your residential grid at off-peak hours.'
  },
  {
    id: 1,
    name: 'Remote control',
    icon: <AiOutlineWifi size={36} className='mr-3'/>,
    desc: 'With smart charging features like remote control, you can stop and start charging your vehicle with the click of a button.'
  },
  {
    id: 2,
    name: 'Sustainable',
    icon: <AiOutlineBulb size={36} className='mr-3'/>,
    desc: 'Connect your residential charging station to a solar panel or 100% renewable energy for emission-free driving.'
  },
  {
    id: 3,
    name: 'Durable',
    icon: <BsDroplet size={36} className='mr-3'/>,
    desc: 'Residential charging stations come in a range of shapes and sizes and are designed to withstand all weather conditions.'
  },
  {
    id: 4,
    name: 'Convenient',
    icon: <AiOutlineHome size={36} className='mr-3'/>,
    desc: 'Because you can charge at home, you dont have to go out of your way to charge up on the way home.'
  },
  {
    id: 5,
    name: 'Versatile',
    icon: <AiOutlineCar size={36} className='mr-3'/>,
    desc: 'With power outputs between 3.7 kW and 22 kW, home charging stations are made to suit any passenger EV.'
  },
]

const Grid = () => {
  return (
    <div className='bg-gray-800 text-gray-100 pb-20'>
      <div className='w-[95%] mx-auto'>
        <h2 className='text-2xl pt-16 pb-5 text-white text-center'>Benefits of EV home chargers</h2>
        <div className='flex flex-row flex-wrap justify-evenly text-left'>
          {data.map(item =>(
            <div key={item.id} className='w-[31%] border border-white/20 rounded px-5 py-6 mt-7 shadow'>
              <div className='flex flex-row'>
                {item.icon}
                <h3 className='text-xl font-medium py-2'>{item.name}</h3>
              </div>
              <p className='text-base font-extralight leading-7'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grid