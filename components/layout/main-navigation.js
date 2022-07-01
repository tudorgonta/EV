import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';

import {useRouter} from 'next/router'

function MainNavigation() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function logoutHandler() {
    signOut();
  }

  const [stickyClass, setStickyClass] = useState('');
  const [linkClass, setLinkClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? (
        setStickyClass('bg-[#FFFFFF] bg-opacity-100 text-black shadow-md z-10'),
        setLinkClass('border-black')
        ) : (setStickyClass('bg-black bg-opacity-20 text-white'),
           setLinkClass('')
        )
    }
  };

  return (
   
    <div className={router.pathname == "/" ? ` fixed w-full transition-all duration-300 ${stickyClass}` : `fixed w-full bg-white/100 text-black top-0 shadow-md z-10`}>
    <header className="flex flex-row justify-between w-10/12 m-auto py-4">
      <Link href='/'>
        <a className=''>
          <div className="font-semibold">EV Charging</div>
        </a>
      </Link>
      <nav>
        <ul className='flex flex-row'>
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
