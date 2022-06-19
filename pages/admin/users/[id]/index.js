import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function ProfilePage({session, data}) {
    const router = useRouter();
    const [confirm, setConfirm] = useState(false);
    const edit = () => setConfirm(true);
    const noEdit = () => setConfirm(false);
    const dat =  data.data
    const submitContact = async (event) => {
      if(confirm) {
        try {
          const res = await fetch(`http://localhost:3000/api/adm/users/${router.query.id}`, {
              method: 'PUT',
              headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(event.target.name.value)
          })
          router.push("/admin/users");
        } catch (error) {
            router.push("/");
        }
      } else {
        try {
          const res = await fetch(`http://localhost:3000/api/adm/users/${router.query.id}`, {
              method: 'DELETE'
          })
          router.push("/admin/users");
        } catch (error) {
            router.push("/");
        }
      }
    };
  return (
    <>
    {dat != null ? (
      <>
      <h2>Edit User {dat.email} :  </h2>
        <div className='flex flex-col'>
          <form onSubmit={submitContact}>
            <label>E-mail:</label>
            <input className='border border-solid p-2' name="name" defaultValue={dat.email}/>
            <button
              type="submit"
              onClick={edit}
              className="px-4 py-2 font-bold text-white bg-emerald-800 rounded-full hover:bg-emerald-700"
            >
              Edit
            </button>
            <button
              type="submit"
              onClick={noEdit}
              className="px-4 py-2 font-bold text-white bg-red-800 rounded-full hover:bg-red-700"
            >
              Delete
            </button>
          </form>
        </div>
        </>
        ) : (
         <>Please click {!session ? (<a href="/ ">here</a>) : (<Link href="/admin/users/">here</Link>)} to continue</>
        )}
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

  const res = await fetch(`http://localhost:3000/api/adm/users/${id}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: context.req.headers.cookie,
    },
  });

  const data = await res.json()

  return {
    props: { session, data },
  };
}

export default ProfilePage;