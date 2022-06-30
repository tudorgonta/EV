import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

async function createUser(email, password) {

  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
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

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { session } = useSession();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail)
    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log(result.error)
      if (!result.error) {
        // set some auth state
        router.replace('/');
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className='py-8'>

     <div className='CONTAINER w-2/4 mx-auto rounded-sm shadow'>
        <div className='HEADER bg-gray-700 flex flex-row justify-center rounded-t-sm py-4 px-12'>
          <div className='HEADER_TEXT text-white text-center'>
            <h2 className='opacity-100 text-xl mt-2 font-extralight'>{isLogin ? 'Login' : 'Sign Up'}</h2>
          </div>
        </div>

        <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>

        <div className='LEFT my-16 px-12'>
          <form onSubmit={submitHandler}>
          <div className={`flex justify-around`}>
            <div className='w-1/3'>
              <input
                type="text"
                name="email"
                placeholder="Email"
                ref={emailInputRef}
                className={`mr-44 p-1 px-2 border-b rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
                />
                <div className={`text-left w-[55%] dropdown`}>
                  <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}></span>
                </div>
              </div>
              <div className='w-1/3'>
                <input
                type="password"
                name="verifPass"
                placeholder="Password"
                ref={passwordInputRef}
                className={`p-1 px-2 border-b rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
                />
                <div className={`text-left w-[60%] dropdown`}>
                    <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}></span>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-evenly mt-12'>
              <button className='w-full py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 mr-5 duration-300'>{isLogin ? 'Login' : 'Create Account'}</button>
              <button
                type='button'
                onClick={switchAuthModeHandler}
                className="w-full py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 duration-300">
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </button>
            </div>
          </form>
        </div>

        </div>
      </div>
    </section>
  );
}

export default AuthForm;
