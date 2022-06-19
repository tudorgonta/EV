import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function logoutHandler() {
    signOut();
  }


  return (
    <div className='relative bg-black bg-opacity-50 z-10'>
    <header className="text-white flex flex-row justify-between w-10/12 m-auto py-4">
      <Link href='/'>
        <a>
          <div className="">EV Charging</div>
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
