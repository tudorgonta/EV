const Step2 = (props) => {
  const { data, handleChange, next, back } = props;

  return (
    <>
    <h1 className='mb-5 font-medium text-center text-4xl mt-16'>Personal details</h1>
    <h3 className='text-center text-lg mb-5'>Contact details</h3>
    <form className='w-10/12 flex flex-col h-auto mx-auto my-5 rounded px-10'>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-1/2 ml-[2.5rem]">
        <div className="flex flex-col w-3/4 mx-auto my-0">
          <label htmlFor="name" className='text-left ml-3 mb-2 text-md'>Full Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              className="p-1 px-3 border rounded-sm"
            />
        </div>
        <div className="flex flex-col w-3/4 mt-4 mx-auto my-0">
          <label htmlFor="name" className='text-left ml-3 mb-2 text-m'>Mob Number:</label>
            <input
              type="text"
              name="mob"
              value={data.mob}
              onChange={handleChange}
              className="p-1 px-3 border rounded-sm bg-white"
            />
        </div>
        <div className="flex flex-col w-3/4 mt-4 mx-auto my-0">
          <label htmlFor="email" className='text-left ml-3 mb-2 text-md'>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
            className="p-1 px-3 border rounded-sm"
          />
        </div>
      </div>

      <div className='flex flex-col w-1/2'>
        <div className="flex flex-col w-3/4">
          <label htmlFor="street" className='text-left ml-3 mb-2 text-md'>Street:</label>
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={handleChange}
            className="p-1 px-3 border rounded-sm"
          />
        </div>
        <div className="flex flex-col w-3/4 mt-4">
          <label htmlFor="city" className='text-left ml-3 mb-2 text-md'>City:</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="p-1 px-3 border rounded-sm"
          />
        </div>
        <div className='flex flex-col w-3/4 mt-4'>
          <label htmlFor="postcode" className='text-left ml-3 mb-2 text-md'>Postcode:</label>
          <input
            type="text"
            name="postcode"
            value={data.postcode}
            onChange={handleChange}
            className="p-1 px-3 border rounded-sm"
          />
        </div>
        </div>
      </div>
      <div className="flex-row mt-5">
        <button onClick={back} className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 transition-opacity mr-5">Back</button> 
        <button onClick={next} disabled={!data.name || !data.mob || !data.email || !data.postcode} className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 transition-opacity">Next</button>
      </div>
    </form>
    </>
  );
};
export default Step2;