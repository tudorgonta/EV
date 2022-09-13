import Link from 'next/link'

const Header = () => {
    const styling = {
    backgroundImage: `url('https://res.cloudinary.com/dxmyxyyay/image/upload/v1656528596/ather-energy-EaDLbQr-k04-unsplash_roi5xw.jpg')`,
    backgroundPosition: 'center'
    }
    return (
      <div className='w-full'>
          <div className=" inset-0 bg-center bg-cover h-[50vh] " style={styling}>
              <main className="w-full flex flex-col h-[50vh] content-center justify-center" >
                  <div className="w-full sm:w-1/2 lg:w-[65%] m-auto">
                      <div className="flex flex-col text-white text-lg font-Dancing text-left p-1 rounded">
                          <p className='drop-shadow-lg text-3xl'>Electric vehicle (EV)<br></br>charging stations for home</p>
                          <div className='mt-10'>
                            <Link href="/enquiry"><a className='bg-white text-black px-4 py-3 rounded hover:bg-gray-200 drop-shadow-lg text-base duration-300'>Make an enquiry</a></Link>
                          </div>
                      </div>
                  </div>
              </main>
          </div>
      </div>
    )
}

export default Header