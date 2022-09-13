import CartRight from "./CartRight";

import Input from "./Input";
const Step2 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <>
    <form className='my-5 mt-24'>
      <div className="flex flex-row">
        <div className="flex flex-col w-4/6 self-start">
        <h1 className='mb-5 font-medium text-center text-4xl mt-2'>Personal details</h1>
        <h3 className='text-center text-lg mb-5'>Please provide your contact details</h3>
        <Input 
          type='text'
          name='name'
          value={data.name}
          onChange={handleChange}
          onInput="* Name should not be empty!"
          placeholder="Full Name"
        />
        <Input 
          type='text'
          name='mob'
          value={data.mob}
          onChange={handleChange}
          onInput="* Should be a valid phone number"
          placeholder="Mob Number"
        />
        <Input 
          type='text'
          name='email'
          value={data.email}
          onChange={handleChange}
          onInput="* Should be a valid email"
          placeholder="Email"
        />
        <Input 
          type='text'
          name='street'
          value={data.street}
          onChange={handleChange}
          onInput="* This field is required"
          placeholder="Street"
        />
        <Input 
          type='text'
          name='city'
          value={data.city}
          onChange={handleChange}
          onInput="* This field is required"
          placeholder="City"
        />
        <Input 
          type='text'
          name='postcode'
          value={data.postcode}
          onChange={handleChange}
          onInput="* This field is required"
          placeholder="Post Code"
        />
        <div className="flex flex-col items-center mt-12">
          <button onClick={back} className="w-1/2 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 mr-5 duration-300">Back</button> 
        </div>
        </div>
        <CartRight next={next} />
      </div>
    </form>
    </>
  );
};
export default Step2;