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

function Submit(props) {
  const { data, handleChange, back } = props;
  async function submitHandler() {
      try {
        const result = await createForm(data)
        console.log(result);
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div>
      <h1 className='mb-5 font-medium text-center text-4xl mt-16'>Review details</h1>
        <div className="bg-slate-100 rounded-sm w-2/4 mx-auto text-left py-3 px-20">
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Mobile number: {data.mob}</p>
          <p>Street: {data.street}</p>
          <p>City: {data.city}</p>
          <p>Postcode: {data.postcode}</p>
          <p>Car Model: {data.car}</p>
          <p>Car Brand: {data.brand}</p>
        </div>

        <h3 className='text-center text-lg my-5'>Please add additional details: </h3>

        <p className="flex flex-col w-2/4 mx-auto">
          <label htmlFor="comments" className="mb-3">Comments:</label>
          <textarea
            name="comments"
            value={data.comments}
            onChange={handleChange}
            className="p-1 px-3 border rounded-sm"
          ></textarea>
        </p>
        <form onSubmit={submitHandler}>
          <div className="flex-row mt-5">
            <button onClick={back} className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 transition-opacity mr-5">Back</button> 
            <button type="submit" className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 transition-opacity">Submit</button>
          </div>
        </form>
    </div>
  );
};
export default Submit;