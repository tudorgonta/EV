const UserDetails = (data) => {
    const dat =  data.data
  return (
    <div>
        <h2 className='text-xl'>User Details</h2>
        <div className='CONTENT w-full flex flex-row mx-auto text-gray-700'>
          <div className='LEFT w-1/2 my-10 border-r border-gray-200'>

            <div className='CONTENT-DETAILS mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Contact Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Full Name:</h3>
                    <p className='font-light'>{dat.name}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Email:</h3>
                    <p className='font-light'>{dat.email}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Mobile Number:</h3>
                    <p className='font-light'>{dat.mob}</p>
                  </div>
                </div>
            </div>

            <div className='CONTENT-CAR mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Car Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Brand:</h3>
                    <p className='font-light'>{dat.brand}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Model:</h3>
                    <p className='font-light'>{dat.car}</p>
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
                    <p className='font-light'>{dat.street}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>City:</h3>
                    <p className='font-light'>{dat.city}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row'>
                    <h3 className='mr-5'>Postcode:</h3>
                    <p className='font-light'>{dat.postcode}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UserDetails