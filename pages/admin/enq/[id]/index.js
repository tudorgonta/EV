import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function ProfilePage({ data}) {
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
    <h1 className='mb-5 font-medium text-center text-4xl mt-16'>View Enquiry</h1>
        <div className="bg-slate-100 rounded-sm w-2/4 mx-auto text-left py-3 px-20">
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Mobile number: {data.mob}</p>
          <p>Street: {data.street}</p>
          <p>City: {data.city}</p>
          <p>Postcode: {data.postcode}</p>
          <p>Car Model: {data.car}</p>
          <p>Car Brand: {data.brand}</p>
        </div>
        <span className='bg-green-800 hover:bg-green-700 p-2 rounded-md text-white mr-1'><Link href={`/admin/enq/`+data._id+`/edit`}>Edit </Link></span> 
        <span onClick={() => handleClick(data._id)} className='bg-red-800 hover:bg-red-700 p-2 rounded-md text-white hover:cursor-pointer'>DELETE</span> 
    </>
  );
}

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req });
  
  if (!session || session.user.role !== "Admin") {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const { params } = context;
  const id = params.id;

  const res = await fetch(`http://localhost:3000/api/adm/enq/${id}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const dat = await res.json()

  const data = dat.data

  return {
    props: { session, data },
  };
}

export default ProfilePage;