import { getSession } from 'next-auth/react';
import Link from 'next/link';

function ProfilePage({data}) {
  return (
    <>
      <div className='flex flex-row justify-between mb-5'>
        <div className='flex-col'>
          <h1>Welcome to the users Page</h1>
          <h2>Users: </h2>
        </div>
        <button className='border hover:bg-gray-200/25 p-2 rounded-md h-full mr-10 text-gray-700'>Add User</button>
      </div>
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.data.slice(0).reverse().map(function(d, idx){
              return (
                <tr className={idx%2 != 0 ? 'bg-gray-50': ''} key={idx}>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{idx+1}</td>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{d.email}</td>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{d.role}</td>
                  <td className="text-left py-3 px-4 font-semibold text-[0.65rem] uppercase"><span className='border hover:bg-gray-200/25 p-2 rounded-md'><Link href={`/admin/users/`+d._id}>View</Link></span></td>
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