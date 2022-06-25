import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

function Edit({session, data}) {

    const router = useRouter();
    const dat =  data.data

    const submitContact = async (event) => {
        event.preventDefault()
        const d = {
            name: event.target.name.value,
            email: event.target.email.value,
            mob: event.target.mob.value,
            brand: event.target.brand.value,
            car: event.target.car.value,
            street: event.target.street.value,
            city: event.target.city.value,
            postcode: event.target.postcode.value
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
            if (res.ok) router.push(`/admin/enq/${router.query.id}`)
        })
    }
    
  return (
    <>
    {dat != null ? (
      <>
        <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
          <div className='flex flex-row text-sm'>
            <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
            <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700" />
            <Link href="/admin/enq"><a className='hover:text-gray-500'>Enquiries</a></Link>
            <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700"/>
            <Link href={`/admin/enq/`+dat._id}><a className='hover:text-gray-500'>View Enquiries</a></Link>
            <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700"/>
            <p className='font-medium'>Edit Enquiry</p>
          </div>
        </div>
        <form onSubmit={submitContact}>
        <div className='flex flex-row justify-between '>
          <div className='flex flex-row mx-7 mt-2 px-12'>
            <Link href={`/admin/enq/`+dat._id}><a className='hover:text-gray-500'><AiOutlineLeft size={'1.3rem'} className="mt-[0.7rem] mr-3" /></a></Link>
            <h1 className='text-[2.1rem] font-light'>Edit Enquiry</h1>
          </div>
          <div className='mt-[0.8rem] px-12 mx-3 mb-2'>
            <button type="submit" className='border hover:bg-gray-200/25 hover:cursor-pointer px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Confirm Edit</button>
            <span onClick={() => handleClick(data._id)} className='border hover:bg-gray-200/25 hover:cursor-pointer px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Delete Enquiry</span>
          </div>
        </div>
        
        {
          //Edit Form
        }
      <div className='CONTAINER mx-16 mt-5 rounded-sm shadow'>
          <div className='HEADER bg-gray-700 flex flex-row rounded-t-sm py-4 px-12'>
            <div className='HEADER_TEXT text-white'>
              <h2 className='opacity-60 text-sm mt-2 font-thin'>#{dat._id}</h2>
            </div>
          </div>
            <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>
              <div className='LEFT w-1/2 my-10 px-12 border-r border-gray-200'>

                <div className='CONTENT-DETAILS mb-5'>
                    <h2 className='text-xl opacity-50 font-extralight'>Contact Details:</h2>
                    <div className='py-2 px-3'>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Full Name:</h3>
                        <input name="name" defaultValue={dat.name} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Email:</h3>
                        <input name="email" defaultValue={dat.email} className='font-light ml-5 w-full px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Mobile Number:</h3>
                        <input name="mob" defaultValue={dat.mob} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                    </div>
                </div>

                <div className='CONTENT-CAR mb-5'>
                    <h2 className='text-xl opacity-50 font-extralight'>Car Details:</h2>
                    <div className='py-2 px-3'>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Brand:</h3>
                        <input name="brand" defaultValue={dat.brand} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Model:</h3>
                        <input name="car" defaultValue={dat.car} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                    </div>
                </div>
              </div>

              <div className='RIGHT w-1/2 my-10 px-12'>
                <div className='CONTENT-ADDRESS mb-5'>
                    <h2 className='text-xl opacity-50 font-extralight'>Address Details:</h2>
                    <div className='py-2 px-3'>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Street:</h3>
                        <input name="street" defaultValue={dat.street} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>City:</h3>
                        <input name="city" defaultValue={dat.city} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Postcode:</h3>
                        <input name="postcode" defaultValue={dat.postcode} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                    </div>
                  </div>
                  <div className='DETAILS mb-5'>
                    <h2 className='text-xl opacity-50 font-extralight'>Additional Details:</h2>
                    <div className='py-2 px-3'>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Details:</h3>
                        <textarea name="postcode" defaultValue={dat.comments} className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </form>
    </> ) : 
    (
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