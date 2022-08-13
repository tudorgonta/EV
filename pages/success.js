import Link from "next/link";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();
    console.log(router.query.type)

    const handle = (data) => {
        switch(data) {
            case "contact":
                return (
                  <div className="w-full">
                    <div className="w-1/3 mx-auto text-center p-5 bg-gray-50 rounded-sm shadow">
                      <p>Email sent succesfully, click <Link href="/"><a className="font-medium hover:underline">here</a></Link> to return to the main page.</p>
                    </div>
                  </div>
                )
            case "form":
                return (
                  <div className="w-full">
                    <div className="w-1/3 mx-auto text-center p-5 bg-gray-50 rounded-sm shadow">
                      <p>Thank you for sending the enquiry, we will be in touch shortly, click <Link href="/"><a className="font-medium hover:underline">here</a></Link> to return to the main page.</p>
                    </div>
                  </div>
                )
            default:
                return (
                  <div className="w-full">
                    <div className="w-1/3 mx-auto text-center p-5 bg-gray-50 rounded-sm shadow">
                      <p>Oops, wrong page, <Link href="/"><a className="font-medium hover:underline">here</a></Link> to return to the main page.</p>
                    </div>
                  </div>
                )
        }
    }
  return (
    
    <div>{handle(router.query.type)}</div>
  )
}

export default Success