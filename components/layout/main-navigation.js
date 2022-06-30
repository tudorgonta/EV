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

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('bg-[#FFFFFF]/100 text-black shadow-md z-10') : setStickyClass('');
    }
  };

  return (
   
    <div className={router.pathname == "/" ? `${stickyClass} fixed w-full transition-all duration-300 text-white bg-black/20` : `fixed w-full bg-white/100 top-0 shadow-md z-10`}>
    <header className="flex flex-row justify-between w-10/12 m-auto py-4">
      <Link href='/'>
        <a className=''>
          <div className="font-semibold">EV Charging</div>
        </a>
      </Link>
      <nav>
        <ul className='flex flex-row'>
          {!session && !loading && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          {session && session.user.role === "Admin" && (
            <li className='pl-5'>
              <Link href='/admin'>Admin</Link>
            </li>
          )}
          {session && (
            <li className='pl-5'>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default MainNavigation;
