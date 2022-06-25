import { getSession } from 'next-auth/react';
import Link from 'next/link';

function ProfilePage() {
  return (
  <>
    <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
      <div className='flex flex-row text-sm'>
        <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
      </div>
    </div>
    <div className='flex flex-row justify-between '>
      <h1 className='text-[2.1rem] font-light mx-16 mt-2 px-12'>Welcome to the Admin Page</h1>
    </div>
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

  return {
    props: { session },
  };
}

export default ProfilePage;