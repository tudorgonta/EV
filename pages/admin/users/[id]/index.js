import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {AiOutlineRight} from 'react-icons/ai'

function ProfilePage({ data}) {

  const router = useRouter()
  const status = ['User', 'Admin']
  for( var i = 0; i < status.length; i++){                             
    if ( status[i] == data.status) { 
        status.splice(i, 1); 
        i--; 
    }
  }

  async function handleClick(data) {
    await fetch(`http://localhost:3000/api/adm/users/${data}`, {
      method: 'DELETE',
    }).then((res) => {
      if(res.ok) router.push("/admin/users")
    })
  }

  const handleStatus = async event => {
    handleSelect(data._id, event.target.value)
  };

  async function handleSelect(id, data) {
    await fetch(`http://localhost:3000/api/adm/users/${id}/role`, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      } ,
      body: JSON.stringify(data)
    }).then((res) => {
      if(res.ok) router.push("/admin/users/"+id)
    })
  }

  function dat(data){
    switch(data) {
      case 'User':
        return 'User'
      case 'Admin':
        return 'Admin'
      default:
        return 'No Role'
    }
}
  return (
    <>
      <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
        <div className='flex flex-row text-sm'>
          <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
          <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700" />
          <Link href="/admin/users"><a className='hover:text-gray-500'>Users</a></Link>
          <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700"/>
          <p className='font-medium'>View User</p>
        </div>
      </div>
      <div className='flex flex-row justify-between '>
        <h1 className='text-[2.1rem] font-light mx-16 mt-2 px-12'>View User</h1>
        <div className='mt-[1.3rem] px-12 mx-3'>
          <Link href={`/admin/users/`+data._id+'/edit'}><a className='border hover:bg-gray-200/25 px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Edit User</a></Link>
          <span onClick={() => handleClick(data._id)} className='border hover:bg-gray-200/25 hover:cursor-pointer px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Delete User</span>
        </div>
      </div>
      {
        //Content
      }
      <div className='CONTAINER mx-16 mt-5 rounded-sm shadow'>
        <div className='HEADER bg-gray-700 flex flex-row justify-between rounded-t-sm py-4 px-12'>
          <div className='HEADER_TEXT text-white'>
            <h2 className='opacity-60 text-sm mt-2 font-thin'>#{data._id}</h2>
          </div>
          <div className='flex flex-row mt-1 ml-20'>
            <p className=' text-sm font-thin text-white mr-3 pt-1 opacity-60'>Role:</p>
            <select onChange={handleStatus} className="text-center text-sm font-medium rounded-md select2 bg-white px-3 pt-[0.2rem] pb-[0.05rem] pr-[1.4rem] text-gray-700">
              <option value="" className="">{dat(data.role)}</option>
              {status.map(option => (
                <option key={dat(option)} value={option} className="">
                  {dat(option)}
                </option>
              ))}
            </select>
          </div>
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
          </div>
        </div>
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

  const { params } = context;
  const id = params.id;

  const res = await fetch(`http://localhost:3000/api/adm/users/${id}`,{
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