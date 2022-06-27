import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineRight } from 'react-icons/ai';

function Edit() {

    const router = useRouter();

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
            postcode: event.target.postcode.value,
            role: "User"
        }
        await fetch(`http://localhost:3000/api/adm/users/`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(d)
        }).then((res) => {
            // Do a fast client-side transition to the already prefetched dashboard page
            if (res.ok) router.push(`/admin/users/`)
        })
    }
    
  return (
    <>
        <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
          <div className='flex flex-row text-sm'>
            <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
            <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700" />
            <Link href="/admin/enq"><a className='hover:text-gray-500'>Users</a></Link>
            <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700"/>
            <p className='font-medium'>Add User</p>
          </div>
        </div>
        <form onSubmit={submitContact}>
        <div className='flex flex-row justify-between '>
            <h1 className='text-[2.1rem] font-light mx-16 mt-2 px-12'>Add User</h1>
          <div className='mt-[0.8rem] px-12 mx-3 mb-2'>
            <button type="submit" className='border hover:bg-gray-200/25 hover:cursor-pointer px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Confirm Add</button>
          </div>
        </div>
        
        {
          //Edit Form
        }
      <div className='CONTAINER mx-16 mt-5 rounded-sm shadow'>
          <div className='HEADER bg-gray-700 flex flex-row rounded-t-sm py-4 px-12'>
            <div className='HEADER_TEXT text-white'>
              <h2 className='opacity-60 text-sm mt-2 font-thin'>#</h2>
            </div>
          </div>
            <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>
              <div className='LEFT w-1/2 my-10 px-12 border-r border-gray-200'>

                <div className='CONTENT-DETAILS mb-5'>
                    <h2 className='text-xl opacity-50 font-extralight'>Contact Details:</h2>
                    <div className='py-2 px-3'>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Full Name:</h3>
                        <input name="name" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Email:</h3>
                        <input name="email" defaultValue="" className='font-light ml-5 w-full px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Mobile Number:</h3>
                        <input name="mob" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                    </div>
                </div>

                <div className='CONTENT-CAR mb-5'>
                    <h2 className='text-xl opacity-50 font-extralight'>Car Details:</h2>
                    <div className='py-2 px-3'>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>Brand:</h3>
                        <input name="brand" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Model:</h3>
                        <input name="car" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
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
                        <input name="street" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row pb-2'>
                        <h3 className='pt-[0.42rem]'>City:</h3>
                        <input name="city" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                      <div className='BOX-ITEM flex flex-row'>
                        <h3 className='pt-[0.42rem]'>Postcode:</h3>
                        <input name="postcode" defaultValue="" className='font-light ml-5 px-[0.8rem] pb-[0.05rem] pt-[0.35rem] border-gray-200 border rounded-md' />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </form>
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

export default Edit;