import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {AiOutlineRight} from 'react-icons/ai'


function ProfilePage({ data}) {
  const router = useRouter()

  async function handleClick(data) {
    await fetch(`http://localhost:3000/api/adm/enq/${data}`, {
      method: 'DELETE',
    }).then((res) => {
      if(res.ok) router.push("/admin/enq")
    })
  }

  /*
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Mobile number: {data.mob}</p>
          <p>Street: {data.street}</p>
          <p>City: {data.city}</p>
          <p>Postcode: {data.postcode}</p>
          <p>Car Model: {data.car}</p>
          <p>Car Brand: {data.brand}</p>
  */

  return (
    <>
      <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
        <div className='flex flex-row text-sm'>
          <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
          <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700" />
          <Link href="/admin/enq"><a className='hover:text-gray-500'>Enquiries</a></Link>
          <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700"/>
          <p className='font-medium'>View Enquiry</p>
        </div>
      </div>
      <div className='CONTAINER mx-16 mt-5 rounded-sm shadow'>

        <div className='HEADER bg-gray-700 flex flex-row rounded-t-sm py-4 px-12'>
          <div className='HEADER_TEXT text-white'>
            <h1 className='text-[2.1rem] font-light'>View Enquiry</h1>
            <h2 className='opacity-30 text-sm -mt-1 font-thin'>#{data._id}</h2>
          </div>
          <div className='mt-5'>
            <button className='bg-white border-none pb-1 pt-2 px-3 rounded-xl ml-24 text-sm uppercase font-medium'>{data.status == "REC" && 'Recieved'}</button>
          </div>
          {
            //EDIT/DELETE BUTTONS 
          }
          {
            //Generate payment link
          }
        </div>

        <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>
          <div className='LEFT w-1/2 my-10 px-12 border-r border-gray-200'>

            <div className='CONTENT-DETAILS mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Contact Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Full Name:</h3>
                    <p className='font-light'>{data.name}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Email:</h3>
                    <p className='font-light'>{data.email}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Mobile Number:</h3>
                    <p className='font-light'>{data.mob}</p>
                  </div>
                </div>
            </div>

            <div className='CONTENT-CAR mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Car Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Brand:</h3>
                    <p className='font-light'>{data.brand}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Model:</h3>
                    <p className='font-light'>{data.car}</p>
                  </div>
                </div>
            </div>
          </div>

          <div className='RIGHT w-1/2 my-10 px-12'>
          <div className='CONTENT-ADDRESS mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Address Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Street:</h3>
                    <p className='font-light'>{data.street}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>City:</h3>
                    <p className='font-light'>{data.city}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Postcode:</h3>
                    <p className='font-light'>{data.postcode}</p>
                  </div>
                </div>
            </div>
            {
            //GOOGLE MAPS 
            }
          </div>
        </div>

      </div>
      {
     // <span className='bg-green-800 hover:bg-green-700 p-2 rounded-md text-white mr-1'><Link href={`/admin/enq/`+data._id+`/edit`}>Edit </Link></span> 
     // <span onClick={() => handleClick(data._id)} className='bg-red-800 hover:bg-red-700 p-2 rounded-md text-white hover:cursor-pointer'>DELETE</span> 
   
      }
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