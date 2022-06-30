import {useState} from 'react'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

async function createForm(dat) {
    const response = await fetch('/api/user/form', {
      method: 'POST',
      body: JSON.stringify(dat),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  }

async function createUser(dat) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(dat),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function Submit(props) {
  const { data: session } = useSession();
  const { data, handleChange, back } = props;
  const router = useRouter();

  const [createAcc, setCreateAcc] = useState(false);
  const [passMessage, setPassMessage] = useState("");
  const [passVerifMessage, setPassVerifMessage] = useState("");
  const passValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(`${data.password}`)
  const passEqual = data.verifPass.includes(data.password)

  const handlePass = async () => {
    if(!passValid){
      setPassMessage("* Minimum eight characters, at least one letter and one number!")
    } else {
      setPassMessage(" ")
    }
  }

  const handleVerif = async () => {
    if(!passEqual){
      setPassVerifMessage("* Passwords do not match.")
    } else {
      setPassVerifMessage("")
    }
  }

  async function submitHandler(e) {
    e.preventDefault()
      try {
        if(createAcc){
          await createUser(data)
        }
        await createForm(data)
        router.push(`/profile`)
      } catch (error) {
        console.log(error);
      }
  }
  const handleCheck = () => {
    setCreateAcc(current => !current);
  }
  return (
    <div>
      <h1 className='mb-5 font-medium text-center text-4xl mt-16'>Review details</h1>
      <div className='CONTAINER mx-16 mt-5 rounded-sm shadow'>
        <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>
          <div className='LEFT w-1/2 my-10 px-12 border-r border-gray-200'>

            <div className='CONTENT-DETAILS mb-5'>
                <h2 className='text-xl opacity-60 font-extralight'>Contact Details:</h2>
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
                <h2 className='text-xl opacity-60 font-extralight'>Car Details:</h2>
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
                <h2 className='text-xl opacity-60 font-extralight'>Address Details:</h2>
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
              <div className='DETAILS mb-5'>
                <h2 className='text-xl opacity-60 font-extralight'>Please add additional details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row'>
                    <textarea
                      name="comments"
                      value={data.comments}
                      onChange={handleChange}
                      placeholder="Details"
                      className={`w-full p-1 px-2 border border-opacity-25 rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
                    />
                    
                  </div>
                </div>
              </div>
          </div>
        </div>
      {!session && (
        <div className='ACCOUNT pb-8'>
          <label htmlFor="toogleA" className="flex items-center cursor-pointer justify-center">
            <div className=" ml-3 mr-8 opacity-60 text-gray-700 font-medium">
              Do you want to create an account?
            </div>
            <div className="relative ">
              <input 
                id="toogleA"
                type="checkbox" 
                className="sr-only"
                onChange={handleCheck}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
          </label>
          <div className={`w-full m-auto ml-20 mt-7 flex justify-center text-left dropdown  ${createAcc ? 'active-form' : ''}`}>
            <div className='w-1/3'>
              <input
                type="text"
                name="password"
                value={data.password}
                onChange={handleChange}
                onInput={handlePass}
                placeholder="Password"
                className={`mr-5 p-1 px-2 border-b rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
                />
                <div className={`text-left w-[55%] dropdown  ${passMessage ? 'active-form' : ''}`}>
                  <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{passMessage}</span>
                </div>
              </div>
              <div className='w-1/3'>
                <input
                type="text"
                name="verifPass"
                value={data.verifPass}
                onChange={handleChange}
                onInput={handleVerif}
                placeholder="Verify Password"
                className={`p-1 px-2 border-b rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
                />
                <div className={`text-left w-[60%] dropdown  ${passVerifMessage ? 'active-form' : ''}`}>
                    <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{passVerifMessage}</span>
                </div>
              </div>
          </div>
        </div>
      )}
        </div>

      <form onSubmit={submitHandler}>
        <div className="flex-row mt-5">
          <button onClick={back} className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 mr-5 duration-300">Back</button> 
          <button type="submit" className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Submit;