import { useRef } from 'react';

async function createForm(email, password) {
  const response = await fetch('/api/user/form', {
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

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

      try {
        const result = await createForm(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <section className="">
      <h1>Create Form: </h1>
      <form onSubmit={submitHandler}>
        <div className="">
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className="">
          <label htmlFor='password'>Your Name</label>
          <input
            type='text'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="">
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
