import Link from "next/link"

const Bar = () => {
  return (
    <div className="bg-gray-800 text-gray-100/95 py-8 px-12 flex flex-col text-center">
        <span className="font-medium text-xl mb-2">Are you eligible for the OZEV EV chargepoint grant?</span>
        <span className="font-thin text-sm mb-4">The OZEV EV chargepoint grant reduces the cost of a home charger and its installation by £350.</span>
        <Link href="/enquiry"><a className="hover:underline hover:border-gray-200 duration-150">Find out now!</a></Link>
    </div>
  )
}

export default Bar