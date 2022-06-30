import UserEnq from "./UserEnq"

const Enquiries = (data) => {
    const dat = data.data
  return (
    <div>
        <h2 className='text-xl'>Enquiries</h2>
        <UserEnq data={dat} />
    </div>
  )
}

export default Enquiries