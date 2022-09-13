import {useState} from 'react'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import CartRight from './cartRight';
import Input from './Input';

function Submit(props) {
  const { data: session } = useSession();
  const { data, handleChange, back } = props;
  const router = useRouter();

  const [createAcc, setCreateAcc] = useState(false);
  const [terms, setTerms] = useState(true);

  async function createForm(dat) {
    await fetch('/api/user/form', {
      method: 'POST',
      body: JSON.stringify(dat),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res)
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) router.push({
        pathname: '/success',
        query: { type: "form" },
      }, '/success')
  })
  }

  async function createUser(dat) {
    await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(dat),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async function submitHandler(e) {
    e.preventDefault()
      try {
        if(createAcc){
          await createUser(data)
        }
        await createForm(data)
      } catch (error) {
        console.log(error);
      }
  }
  const handleCheck = () => {
    setCreateAcc(current => !current);
  }
  const handleTerms = () => {
    setTerms(current => !current);
  }
  return (
    <div>
      <h1 className='mb-5 font-medium text-center text-4xl mt-16'>Review details</h1>
      <div className='CONTAINER flex flex-row'>
        <div className='InnerContainer flex flex-row flex-wrap w-4/6 text-left self-start'>
          <div className='w-1/2'>
            <Input 
              type='text'
              name='name'
              value={data.name}
              onChange={handleChange}
              onInput="* Name should not be empty!"
              placeholder="Full Name"
              disabled={true}
            />
            <Input 
              type='text'
              name='mob'
              value={data.mob}
              onChange={handleChange}
              onInput="* Should be a valid phone number"
              placeholder="Mob Number"
              disabled={true}
            />
            <Input 
              type='text'
              name='email'
              value={data.email}
              onChange={handleChange}
              onInput="* Should be a valid email"
              placeholder="Email"
              disabled={true}
            />
        </div>
        <div className='w-1/2'>
          <Input 
            type='text'
            name='street'
            value={data.street}
            onChange={handleChange}
            onInput="* This field is required"
            placeholder="Street"
            disabled={true}
          />
          <Input 
            type='text'
            name='city'
            value={data.city}
            onChange={handleChange}
            onInput="* This field is required"
            placeholder="City"
            disabled={true}
          />
          <Input 
            type='text'
            name='postcode'
            value={data.postcode}
            onChange={handleChange}
            onInput="* This field is required"
            placeholder="Post Code"
            disabled={true}
          />
        </div>
        <div className='w-1/2'>
          <Input 
            type='text'
            name='carbrand'
            value={data.brand}
            onChange={handleChange}
            onInput="* This field is required"
            placeholder="Car Brand"
            disabled={true}
          />
          <Input 
            type='text'
            name='carmodel'
            value={data.car}
            onChange={handleChange}
            onInput="* This field is required"
            placeholder="Car Model"
            disabled={true}
          />
        </div>
        <div className='w-1/2'>
        <Input 
            type='textarea'
            name='comments'
            value={data.comments}
            onChange={handleChange}
            onInput="* This field is required"
            placeholder="Additional Comments"
            disabled={false}
          />
        </div>
        { !session && (
          <div className='ACCOUNT mt-12 w-full'>
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
            <div className={`w-full m-auto mt-7 flex justify-center text-left dropdown  ${createAcc ? 'active-form' : ''}`}>
              <div className='w-1/3'>
                <Input 
                  type='text'
                  name='password'
                  value={data.password}
                  onChange={handleChange}
                  onInput="* Minimum eight characters, at least one letter and one number!"
                  placeholder="Password"
                  disabled={false}
                  data={data}
                />
              </div>
              <div className='w-1/3 mb-8'>
                <Input 
                  type='text'
                  name='verifPass'
                  value={data.verifPass}
                  onChange={handleChange}
                  onInput="* Passwords do not match."
                  placeholder="Confirm Password"
                  disabled={false}
                  data={data}
                />
              </div>
            </div>
          </div>
        )}
        <label htmlFor="toogleB" className="w-full flex items-center cursor-pointer justify-center mb-8 mt-8">
          <div className="ml-3 mr-8 opacity-60 text-gray-700 font-medium">
            Confirm that i have read Terms and Conditions.
          </div>
          <div className="relative ">
              <input 
                id="toogleB"
                type="checkbox" 
                className="sr-only"
                onChange={handleTerms}
              />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
        </label>
        <div className='w-1/3 ml-[6%]'>
          <button onClick={back} className="w-full py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 mr-5 duration-300">Back</button> 
        </div>
        </div>
        <CartRight next={next} />
        
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex-row mt-5">
          <button type="submit" className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Submit;