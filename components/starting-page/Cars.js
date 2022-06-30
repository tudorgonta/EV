import Image from 'next/image'

const Cars = () => {

  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../../public/cars/', true, /\.(png|jpe?g|svg)$/));
  return (
    <div className='w-full pb-12'>
      <div className='w-[80%] m-auto text-center '>
        <h2 className='text-2xl font-medium py-12'>We are compatible with all plug-in vehicle brands</h2>
        <div className='flex flex-wrap flex-row justify-center'>
          {Object.entries(images).map(function(d, idx){
            return(
              <div className='w-[5%] mr-5 my-auto' key={idx}>
                <Image 
                  src={d[1]}
                  alt="car"
                  />
              </div>
            )})}
         </div>
      </div>
    </div>
  )
}

export default Cars