import { getSession } from 'next-auth/react';
import UserProfile from '../components/profile/user-profile';

function ProfilePage({data}) {
  const {user, enq} = data
  return <UserProfile user={user} enq={enq} />;
}

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req });

  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;


  const user = await fetch(`/api/user/profile`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const data = await user.json()

  if (!session) {
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
