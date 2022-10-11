import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {useRouter} from 'next/router'

function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const router = useRouter();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState('');
  const [linkClass, setLinkClass] = useState('');

  function logoutHandler() {
    signOut();
  }

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      (windowHeight > 100) ? (
        setStickyClass('bg-[#FFFFFF] bg-opacity-100 text-black shadow-md z-50'),
        setLinkClass('border-black')
        ) : (setStickyClass('bg-black bg-opacity-20 text-white'),
           setLinkClass('')
        )
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    window.addEventListener('load', stickNavbar);
    }, []);

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    if(cart[1])
      return cart[1].quantity
    return 0
  };
  
  return (
    <div className={router.pathname == "/" ? `text-white fixed w-full transition-all duration-300 ${stickyClass}` : `fixed w-full bg-white/100 text-black top-0 shadow-md z-50`}>
      <header className="flex flex-row justify-between w-10/12 m-auto py-4">

        <Link href='/'><a className=''><div className="font-semibold">EV Charging</div></a></Link>

        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? `showMenuNav bg-opacity-100` : "hideMenuNav"}>
            {/* X sign */}
            <div className={`fixed top-0 right-0 px-8 py-8`} onClick={() => setIsNavOpen(false)} >
              <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            {/* MENU */}
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-black z-50">
              <li>Item</li>
            </ul>
          </div>
        </section>
        
        <nav>
          <ul className='hidden lg:flex lg:flex-row'>
              <li className='font-medium'>
                <Link href='/enquiry'><a className={`hover:border-b transition-all duration-100 ${linkClass}`}>Make an Enquiry</a></Link>
              </li>
              {/*
                <li className='pl-5'>
                  <Link href='/about'>About Us</Link>
                </li>
              */}
              <li className='pl-5'>
                <Link href='/contact'><a className={`hover:border-b transition-all duration-100 ${linkClass}`}>Contact Us</a></Link>
              </li>
            {!session && !loading && (
              <li className='pl-5'>
                <Link href='/auth'><a className={`hover:border-b transition-all duration-100 ${linkClass}`}>Login</a></Link>
              </li>
            )}
            <li className='pl-5'>
              <Link href='/enquiry'><a className={`hover:border-b transition-all duration-100 ${linkClass}`}>Cart ({getItemsCount()})</a></Link>
            </li>
            {session && (
              <li className='pl-5'>
                <Link href='/profile'><a className={`hover:border-b transition-all duration-100 ${linkClass}`}>Profile</a></Link>
              </li>
            )}
            {session && session.user.role === "Admin" && (
              <li className='pl-5'>
                <Link href='/admin'><a className={`hover:border-b transition-all duration-100 ${linkClass}`}>Admin</a></Link>
              </li>
            )}
            {session && (
              <li className='pl-5'>
                <a onClick={logoutHandler} className={`hover:cursor-pointer hover:border-b transition-all duration-100 ${linkClass}`}>Logout</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
