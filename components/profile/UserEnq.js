const UserEnq = (props) => {
    const {data} = props
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
        <div className="flex flex-col rounded-md text-sm my-10 shadow-md">
            <div className="flex flex-row justify-between bg-slate-700 text-white font-thin py-4 px-8 rounded-sm">
                <span className="mt-[0.5rem]">Enquiry #{data._id}</span>
                <div className='flex flex-row mt-1 ml-20 mr-5'>
            <p className=' text-sm font-thin text-white mr-3 pt-1'>Status:</p>
            <span className="text-center text-sm font-medium rounded-md bg-white px-3 pt-[0.2rem] pb-[0.05rem] text-gray-700">
                {dat(data.status)}
            </span>
          </div>
            </div>
            <div className="py-5 mx-auto w-full text-center">
        <div className='CONTENT w-full flex flex-row text-gray-700'>
          <div className='LEFT w-1/2 -mr-10 border-r border-gray-200'>

            <div className='CONTENT-DETAILS mb-5 justify-center'>
                <h2 className='text-xl opacity-50 font-extralight'>Contact Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Full Name:</h3>
                    <p className='font-light'>{data.name}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Email:</h3>
                    <p className='font-light'>{data.email}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Mobile Number:</h3>
                    <p className='font-light'>{data.mob}</p>
                  </div>
                </div>
            </div>

            <div className='CONTENT-CAR mb-5 '>
                <h2 className='text-xl opacity-50 font-extralight'>Car Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Brand:</h3>
                    <p className='font-light'>{data.brand}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Model:</h3>
                    <p className='font-light'>{data.car}</p>
                  </div>
                </div>
            </div>
          </div>

          <div className='RIGHT w-[55%] flex flex-col justify-center'>
            <div className='CONTENT-ADDRESS mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Address Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Street:</h3>
                    <p className='font-light'>{data.street}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>City:</h3>
                    <p className='font-light'>{data.city}</p>
                  </div>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Postcode:</h3>
                    <p className='font-light'>{data.postcode}</p>
                  </div>
                </div>
              </div>
              <div className='DETAILS mb-5'>
                <h2 className='text-xl opacity-50 font-extralight'>Additional Details:</h2>
                <div className='py-2 px-3'>
                  <div className='BOX-ITEM flex flex-row justify-center'>
                    <h3 className='mr-5'>Details:</h3>
                    <p className='font-light break-all'>{data.comments}</p>
                  </div>
                </div>
              </div>
            {
            //GOOGLE MAPS 
            }
          </div>
        </div>
            </div>
        </div>
    </>
  )
}

export default UserEnq