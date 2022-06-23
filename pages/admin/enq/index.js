import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function ProfilePage({data}) {
  const router = useRouter()

  async function handleClick(data) {
    await fetch(`http://localhost:3000/api/adm/enq/${data}`, {
      method: 'DELETE',
    }).then((res) => {
      if(res.ok) router.push("/admin/enq")
    })
  }
  
  return (
    <>
      <div className='flex flex-row justify-between mb-5'>
        <div className='flex-col'>
          <h1>Welcome to the Enquiries Page</h1>
          <h2>Enquiries: </h2>
        </div>
        <button className='border hover:bg-gray-200/25 p-2 rounded-md h-full mr-10 text-gray-700'>Add Enquiry</button>
      </div>
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Full Name</th>
              <th className="w-1/3 text-left py-3 px-4 upercase font-semibold text-sm">EMAIl</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">STATUS</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.data.slice(0).reverse().map(function(d, idx){
              return (
                <tr className={idx%2 != 0 ? 'bg-gray-50': ''} key={idx}>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{idx+1}</td>
                  <td className="w-1/3 text-left py-3 px-4 font-semibold text-sm">{d.name}</td>  
                  <td className="w-1/3 text-left py-3 px-4 font-semibold text-sm">{d.email}</td>       
                  <td className="text-left py-3 px-4 font-semibold text-sm">{d.status == 'REC' && "Recieved"}</td> 
                  <td className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-[0.65rem]">
                    <span className='border hover:bg-gray-200/25 p-2 rounded-md mr-1'><Link href={`/admin/enq/`+d._id}>View</Link></span>
                    <span className='bg-green-800 hover:bg-green-700 p-2 rounded-md text-white mr-1'><Link href={`/admin/enq/`+d._id+'/edit'}>EDIT</Link></span> 
                    <span onClick={() => handleClick(d._id)} className='bg-red-800 hover:bg-red-700 p-2 rounded-md text-white hover:cursor-pointer'>DELETE</span> 
                  </td>
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

  const res = await fetch('http://localhost:3000/api/adm/enq/',{
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