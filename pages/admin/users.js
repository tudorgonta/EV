import { getSession } from 'next-auth/react';

function ProfilePage() {
  return <>Welcome to the Users Page</>;
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