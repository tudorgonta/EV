import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-800 lg shadow md:px-6 md:py-8 mt-14">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className='className="flex items-center mb-4 sm:mb-0"'>
            <Link href="/">
                <a className="self-center text-2xl whitespace-nowrap text-white font-medium">EV Charging</a>
            </Link>
          </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-400">
                <li>
                    <Link href="/"><a className="mr-4 hover:underline md:mr-6">Home</a></Link>
                </li>
                <li>
                    <Link href="/enquiry"><a className="mr-4 hover:underline md:mr-6">Make an enquiry</a></Link>
                </li>
                <li>
                    <Link href="/auth"><a className="hover:underline">Login</a></Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border/20 opacity-20 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/" className="hover:underline">EVCharging™</Link>. All Rights Reserved.
        </span>
    </footer>
  )
}

export default Footer