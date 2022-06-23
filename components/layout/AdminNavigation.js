import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import {AiOutlineHome, AiOutlineUser, AiOutlineForm, AiOutlineUsergroupAdd, AiOutlineLogout} from 'react-icons/ai'

function AdminNavigation() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function logoutHandler() {
    signOut();
  }


  return (
    <div className=''>
        <aside className="w-56 fixed left-0 top-0 h-screen shadow px-3 py-1 text-gray-700">
            <div className='w-10/12 m-auto my-3'>
                <Link href="/admin">
                    <a className="text-lg font-semibold hover:opacity-70">EV - Dashboard</a>
                </Link>
                <hr className='border-b-2 rounded border-solid border-gray-200/[0.5] my-3'></hr>
                <div className='flex flex-col text-lg'>
                    <div className='flex flex-row '>
                        <AiOutlineHome size={'1em'} className="mt-[0.26rem] mr-2" />
                        <Link href="/">
                            <a className="hover:opacity-70">Home</a>
                        </Link>
                    </div>
                    <div className='flex flex-row '>
                        <AiOutlineUsergroupAdd size={'1em'} className="mt-[0.26rem] mr-2" />
                        <Link href="/admin/users">
                            <a className="hover:opacity-70">Users</a>
                        </Link>
                    </div>
                    <div className='flex flex-row '>
                        <AiOutlineForm size={'1em'} className="mt-[0.26rem] mr-2" />
                        <Link href="/admin/enq">
                            <a className="hover:opacity-70">Enquiries</a>
                        </Link>
                    </div>
                </div>
                <hr className='border-top rounded border-solid border-gray-200/[0.5] my-3'></hr>
                <div className='flex flex-col text-md'>
                    <div className='flex flex-row '>
                        <AiOutlineUser size={'1em'} className="mt-[0.26rem] mr-2" />
                        <Link href="/admin/profile"><a className='hover:opacity-70'>Profile</a></Link>
                    </div>
                    <div className='flex flex-row '>
                        <AiOutlineLogout size={'1em'} className="mt-[0.26rem] mr-2" />
                        <button onClick={logoutHandler} className="text-left hover:opacity-70">Logout</button>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  );
}

export default AdminNavigation;
