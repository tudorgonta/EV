import Link from 'next/link'
import React from 'react'
import img from '../../public/images/hero.jpg'
const Header = () => {
    const styling = {
    backgroundImage: `url('${img.src}')`,
    }
    return (
      <div className='w-full pb-[50vh]'>
          <div className="absolute inset-0 bg-center bg-cover h-[50vh]" style={styling}>
              <main className="w-full flex flex-col h-[50vh] content-center justify-center" >
                  <div className="w-full sm:w-1/2 lg:w-1/2 m-auto">
                      <div className="text-white text-lg font-Dancing text-center p-1 rounded">
                          Complete Form<br></br>
                          <Link href="/enquiry"><a>LINK</a></Link>
                      </div>
                  </div>
              </main>
          </div>
      </div>
    )
}

export default Header