import { getSession } from 'next-auth/react';
import Link from 'next/link';

function ProfilePage({data}) {
  return (
    <>
      Welcome to the Users Page
      <h2>Users: </h2>
      {data.data.map(function(d, idx){
         return (
          <div className='flex flex-col' key={idx}>            
            <Link href={`/admin/users/${d._id}`} >{d.email}</Link>
          </div>
          )
       })}
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