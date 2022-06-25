import Image from 'next/image';
import { useState } from 'react';
import CarSvg from './carSvg';
import Battery from './svg/Battery';
import CarElec from './svg/CarElec';
import Coins from './svg/Coins';
import Socket from './svg/Socket';

const Step1 = (props) => {

  //dat == all data about cars
  const {data, next, dat } = props;


  //Get Brands
  const uniqueIds = [];
  const brandsResult = dat.map(function(item){
    return(
        item.brand
    )
  })
  const brands = brandsResult.filter(element => {
    const isDuplicate = uniqueIds.includes(element);
    if (!isDuplicate) {
      uniqueIds.push(element);
      return true;
    }
    return false;
  });

  //Select
  const [selected, setSelected] = useState(undefined);
  const [second, setSecond] = useState('');
  const [nex, setNex] = useState('Choose a car to continue')

  const handleFirst = event => {
    setSelected(event.target.value)
    data.brand=event.target.value
    setSecond('')
    setNex('Choose a car model to continue')
  };

  const handleSecond = event => {
    setSecond(event.target.value)
    setNex('Continue')
    data.car=event.target.value
  }

  //Additional Car Info
  const info = dat.find(obj => {
    return obj.car === second;
  })

  return (
    <>
    <form className='flex flex-row w-full h-auto mx-auto my-5 mt-20 rounded px-10'>
      <div className='w-1/3 flex flex-col'>
        <h1 className='mb-5 font-medium text-left text-4xl'>Your vehicle</h1>
        <h2 className='mb-10 text-left text-xl'>Please tell us about your vehicle, so we can check if you may be eligible for a grant to reduce the cost of your home charger</h2>
        <h3 className='text-left text-lg mb-5'>Select your vehicle</h3>
        <label htmlFor="cars" className='text-left ml-3 mb-2 text-sm'>What car do you drive?</label>
        <select value={selected} onChange={handleFirst} className="p-2 px-3 border rounded-sm select1">
          <option value="" className="text-left">Please choose your car brand</option>
          {brands.map(option => (
            <option key={option} value={option} className="text-left">
              {option}
            </option>
          ))}
        </select>
        {selected &&
          <>
          <label htmlFor="cars" className='text-left ml-3 mt-4 mb-2 text-sm'>What is your car model?</label>
            <select value={second} onChange={handleSecond} className="p-2 px-3 border rounded-sm select1">
              <option value="" className="text-left">Please choose your car model</option>
              {dat.map(option => {
                if(option.brand === selected) {
                  return(
                    <option key={option.car} value={option.car} className="text-left">
                      {option.car}
                    </option>
                  )}
                
                })}
            </select>
          </>
        }
      </div>
      <div className='w-2/3'>
        {second ? (
          <div>

            {info.img ? (
              <>
                <div className='-mt-12' style={{ position: "relative", width: "auto", paddingBottom: "40%" }} >
                  <Image
                    alt="Image Alt"
                    src={info.img}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className='text-xl mb-6 mt-1'>{info.brand} {info.car}</p>
              </>
            ) : (
              <>
                <CarSvg className="mx-auto my-0" />
                <p className='text-xl m-6'>Please choose a car model</p>
              </>
            )}
            <div className='flex flex-row justify-between mb-7'>
              <div className='w-1/4 text-center'>
                <Socket className="mx-auto my-0 fill-gray-700 mb-2" />
                <h5 className='text-md opacity-70'>Socket type</h5>
                <h3 className='text-xl'>{info.socket}</h3>
              </div>
              <div className='w-1/4 text-center'>
                <Battery className="mx-auto my-0 fill-gray-700 mb-2" />
                <h5 className='text-md opacity-70'>Battery capacity</h5>
                <h3 className='text-xl'>{info.bat} kWh</h3>
              </div>
              <div className='w-1/4 text-center'>
                <Coins className="mx-auto my-0 fill-gray-700 mb-2" />
                <h5 className='text-md opacity-70'>Full charge cost</h5>
                <h3 className='text-xl'>£{info.price}</h3>
              </div>
              <div className='w-1/4 text-center'>
                <CarElec className="mx-auto my-0 fill-gray-700 mb-2" />
                <h5 className='text-md opacity-70'>Battery range</h5>
                <h3 className='text-xl'>{info.dist}</h3>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <CarSvg className="mx-auto my-0" />
            <p className='text-xl mt-6'>Please choose a car</p>
          </div>
        )
        }
        <div></div>
        <button onClick={next} disabled={!second} className="w-1/2 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 disabled:mt-5 transition-opacity">
          {nex}
        </button>
      </div>
    </form>
    </>
  );
};
export default Step1;