import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function AdminNavigation() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function logoutHandler() {
    signOut();
  }


  return (
    <div className=''>
        <aside className="w-56 fixed left-0 top-0 h-screen bg-gray-50 shadow-xl border-r border-gray-100 px-3 py-1">
            <div className='w-10/12 m-auto my-3'>
                <Link href="/admin">
                    <a className="text-lg font-semibold hover:opacity-70">EV - Dashboard</a>
                </Link>
                <hr className='border-bottom border-solid border-gray-300 my-3'></hr>
                <div className='flex flex-col text-lg'>
                    <Link href="/">
                        <a className="hover:opacity-70">Home</a>
                    </Link>
                    <Link href="/admin/users">
                        <a className="hover:opacity-70">Users</a>
                    </Link>
                    <Link href="/admin/enq">
                        <a className="hover:opacity-70">Enquiries</a>
                    </Link>
                </div>
                <hr className='border-top border-solid border-gray-300 my-3'></hr>
                <div className='flex flex-col text-md'>
                    <Link href="/admin/profile"><a className='hover:opacity-70'>Profile</a></Link>
                    <button onClick={logoutHandler} className="text-left hover:opacity-70">Logout</button>
                </div>
            </div>
        </aside>
    </div>
  );
}

export default AdminNavigation;
