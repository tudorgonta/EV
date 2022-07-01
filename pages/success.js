import { useEffect } from "react";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();
    console.log(router.query.type)

    const handle = (data) => {
        switch(data) {
            case "contact":
                return (<p>asdada</p>)
            default:
                return (<p>hehey</p>)
        }
    }
  return (
    
    <div>{handle(router.query.type)}</div>
  )
}

export default Success