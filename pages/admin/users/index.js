import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';


function ProfilePage({data}) {
  return (
    <>
      <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
        <div className='flex flex-row text-sm'>
          <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
          <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700" />
          <p className='font-medium'>Users</p>
        </div>
      </div>
      <div className='HEADER-TEXT flex flex-row justify-between '>
        <h1 className='text-[2.1rem] font-light mx-16 mt-2 px-12'>Users:</h1>
        <div className='mt-[1.3rem] px-12 mx-3'>
          <span onClick='' className='border hover:bg-gray-200/25 hover:cursor-pointer px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Add User</span>
        </div>
      </div>
      <div className="overflow-hidden border-b border-gray-200 mx-16 mt-5 rounded-sm shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.data.slice(0).reverse().map(function(d, idx){
              return (
                <tr className={idx%2 != 0 ? 'bg-gray-50': ''} key={idx}>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{idx+1}</td>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{d.email}</td>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{d.role}</td>
                  <td className="text-center py-3 px-4 font-semibold text-[0.65rem] uppercase"><span className='border hover:bg-gray-200/25 p-2 rounded-md'><Link href={`/admin/users/`+d._id}>View</Link></span></td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req });

  const res = await fetch('http://localhost:3000/api/adm/users/',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const data = await res.json()

  if (!session || session.user.role !== "Admin") {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session, data },
  };
}

export default ProfilePage;