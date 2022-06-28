import { getSession } from 'next-auth/react';
import Link from 'next/link';
import {AiOutlineRight} from 'react-icons/ai'
import { useState } from 'react'
import Delete from '../../../components/admin/form/Delete';

function ProfilePage({data}) {
  
  //Delete Pop Up
  const [id,setId] =  useState('')
  const [showModal, setShowModal] = useState(false);
  
  async function handleClick(data) {
    setId(data)
    setShowModal(true)
  }

  const close = () => {
    setShowModal(false);
  };
  const deleteId = () => {
    setId('');
  };

  //Status 
  function dat(data){
    switch(data) {
      case 'REC':
        return 'Recieved'
      case 'PAID':
        return 'Paid'
      case 'INP':
        return 'In Progress'
      case 'CPL':
        return 'Completed'
      default:
        return 'No State'
    }
  }
  
  return (
    <>
      <div className='BREADCRUMBS my-8 ml-10 opacity-75 text-gray-700'>
        <div className='flex flex-row text-sm'>
          <Link href="/admin"><a className='hover:text-gray-500'>Dashboard</a></Link>
          <AiOutlineRight size={'0.8em'} className="mt-[0.2rem] mx-2 text-gray-700" />
          <p className='font-medium'>Enquiries</p>
        </div>
      </div>

      <div className='HEADER-TEXT flex flex-row justify-between '>
        <h1 className='text-[2.1rem] font-light mx-16 mt-2 px-12'>Enquiries:</h1>
        <div className='mt-[1.3rem] px-12 mx-3'>
          <Link href='/admin/enq/add'><a  className='border hover:bg-gray-200/25 hover:cursor-pointer px-2 rounded-md h-full mr-10 text-gray-700 font-medium text-sm pb-1 pt-2'>Add Enquiry</a></Link>
        </div>
      </div>
      <div className="overflow-hidden border-b border-gray-200 mx-16 mt-5 rounded-sm shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">#</th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Full Name</th>
              <th className="w-1/3 text-left py-3 px-4 upercase font-semibold text-sm">EMAIl</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">STATUS</th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.data.slice(0).reverse().map(function(d, idx){
              return (
                <tr className={idx%2 != 0 ? 'bg-gray-50': ''} key={idx}>
                  <td className="text-left py-3 px-4 font-semibold text-sm">{idx+1}</td>
                  <td className="w-1/3 text-left py-3 px-4 font-semibold text-sm">{d.name}</td>  
                  <td className="w-1/3 text-left py-3 px-4 font-semibold text-sm">{d.email}</td>       
                  <td className="w-1/5 text-left py-3 px-4 font-semibold text-sm">{dat(d.status)}</td> 
                  <td className="w-1/3 text-center py-3 px-4 uppercase font-semibold text-[0.65rem]">
                    <span className='border hover:bg-gray-200/25 px-2 pb-1 pt-2 rounded-md mr-1'><Link href={`/admin/enq/`+d._id}>View</Link></span>
                    <span className='bg-green-800 hover:bg-green-700 px-2 pb-1 pt-2 rounded-md text-white mr-1'><Link href={`/admin/enq/`+d._id+'/edit'}>EDIT</Link></span> 
                    <span onClick={() => handleClick(d._id)} className='bg-red-800 hover:bg-red-700 px-2 pb-1 pt-2 rounded-md text-white hover:cursor-pointer'>DELETE</span> 
                  </td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
      {showModal &&
        <Delete 
          id={id}
          close={close}
          deleteId={deleteId}
          type='ENQ'
        /> 
      }
    </>
  );
}

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req });

  const res = await fetch('http://localhost:3000/api/adm/enq/',{
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