import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function AdminNavigation() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function logoutHandler() {
    signOut();
  }


  return (
    <div>
        <aside className="w-56 fixed left-0 top-0 h-screen bg-slate-800">
            <div className='w-10/12 m-auto my-3'>
                <Link href="/admin">
                    <a className="text-white text-xl">EV - Dashboard</a>
                </Link>
                <hr className='border-bottom border-solid border-white my-3'></hr>
                <div className='flex flex-col text-white text-lg'>
                    <Link href="/">
                        <a className="">Home</a>
                    </Link>
                    <Link href="/admin/users">
                        <a className="">Users</a>
                    </Link>
                </div>
                <hr className='border-top border-solid border-white my-3'></hr>
                <div className='flex flex-col text-white text-md'>
                    <Link href="/admin/profile"><a>Profile</a></Link>
                    <button onClick={logoutHandler} className="text-left">Logout</button>
                </div>
            </div>
        </aside>
    </div>
  );
}

export default AdminNavigation;
