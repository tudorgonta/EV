import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Edit({session, data}) {

    const router = useRouter();
    const dat =  data.data

    const submitContact = async (event) => {
        event.preventDefault()
        const d = {
            name: event.target.name.value,
            email: event.target.email.value
        }
        await fetch(`http://localhost:3000/api/adm/enq/${router.query.id}`, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(d)
        }).then((res) => {
            // Do a fast client-side transition to the already prefetched dashboard page
            if (res.ok) router.push('/admin/enq')
        })
    }
    
  return (
    <>
    {dat != null ? (
      <>
      <h2>Edit Enquiry - {dat.name} :  </h2>
        <div className='flex flex-col'>
          <form onSubmit={submitContact}>
            <label>Full Name:</label>
            <input className='border border-solid p-2' name="name" defaultValue={dat.name}/>
            <label>E-mail:</label>
            <input className='border border-solid p-2' name="email" defaultValue={dat.email}/>
            <button type="submit" className="px-4 py-2 font-bold text-white bg-emerald-800 rounded-full hover:bg-emerald-700">
              Edit
            </button>
          </form>
        </div>
        </>
        ) : (
         <>Please click {!session ? (<a href="/ ">here</a>) : (<Link href={`/admin/enq/`+dat._id}>here</Link>)} to continue</>
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

  const res = await fetch(`http://localhost:3000/api/adm/enq/${id}`,{
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

export default Edit;