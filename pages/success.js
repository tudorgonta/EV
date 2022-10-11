import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { removeFromCart } from '../redux/cart.slice';
import { removeCar } from '../redux/car.slice'
import { useSelector, useDispatch } from 'react-redux';

const Success = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const car = useSelector((state) => state.car)

    useEffect(() => {
      dispatch(removeFromCart(cart[0]))
      dispatch(removeCar(car[0]))
    }, [car, cart, dispatch]);

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
            case "payment":
                return (
                  <div className="w-full">
                    <h1 className='font-medium text-center text-4xl mt-24 mb-9'>Payment Succesful!</h1>
                    <div className="w-1/3 mx-auto text-center p-5 bg-gray-50 rounded-sm shadow">
                      <p>Thank you for your payment, we have sent you a reciept on your email. Please, click <Link href="/"><a className="font-medium hover:underline">here</a></Link> to return to the main page.</p>
                    </div>
                  </div>
                )
            default:
                return (
                  <div className="w-full">
                    <div className="w-1/3 mx-auto text-center p-5 bg-gray-50 rounded-sm shadow">
                    <p>Thank you for sending the enquiry, we will be in touch shortly, click <Link href="/"><a className="font-medium hover:underline">here</a></Link> to return to the main page.</p>
                    </div>
                  </div>
                )
        }
    }
  return (
    <div className="my-[15em]">
      {handle(router.query.type)}
    </div>
  )
}

export default Success