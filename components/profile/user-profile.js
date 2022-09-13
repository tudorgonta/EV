import {useState} from 'react'
import { AiOutlineForm, AiOutlineUser } from 'react-icons/ai';
import Enquiries from './Enquiries';
import UserDetails from './UserDetails';

function UserProfile(props) {
  const {user, enq} = props
  const [isEnq,setIsEnq] = useState('')

  const handleClick = (data) => {
    setIsEnq(data)
  }

  return (
    <section>
      <div className='CONTAINER w-[85%] mx-auto rounded-sm shadow'>
        <div className='HEADER bg-gray-700 flex flex-row justify-center rounded-t-sm py-4 px-12'>
          <div className='HEADER_TEXT text-white text-center'>
            <h2 className='opacity-100 text-2xl mt-2 font-thin'>Hello, {user.name}</h2>
          </div>
        </div>

        <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>

        <div className='w-[18%] h-[auto] px-8 py-10 shadow-sm flex flex-col bg-gray-50'>
          <div className='flex flex-row '>
            <AiOutlineUser size={'1em'} className="mt-[0.1rem] mr-2" />
            <span className={`mb-5 hover:cursor-pointer duration-200 hover:text-gray-500 ${isEnq == 'Details' ? 'border-b' : '' }`} onClick={() => handleClick('Details')}>User Details</span>
          </div>
          <div className='flex flex-row '>
            <AiOutlineForm size={'1em'} className="mt-[0.1rem] mr-2" />
            <span className={`hover:cursor-pointer duration-200 hover:text-gray-500 ${isEnq != 'Details' ? 'border-b' : '' }`} onClick={handleClick}>Enquiries</span>
          </div>
        </div>

        <div className='w-3/4 p-10 px-12'>
          {isEnq == 'Details' ?(
            <UserDetails data={user} />
          ) : (
            <Enquiries data={enq} />
          )}
        </div>

        </div>
      </div>

    </section>
  );
}

export default UserProfile;
