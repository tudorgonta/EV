import { getSession } from 'next-auth/react';
import Link from 'next/link';

function ProfilePage({data}) {
  return (
    <>
      Welcome to the Enquiries Page
      <h2>Enquiries: </h2>
      <ol className='flex flex-col'>
      {data.data.map(function(d, idx){
         return (
          <li className='' key={idx}>
            <span className='mr-5'>{idx+1}</span>            
            <Link href={`/admin/users/${d._id}`} >{d.email}</Link>
          </li>
          )
       })}
       </ol>  
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