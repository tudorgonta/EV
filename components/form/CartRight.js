import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  changePayTypee,
} from '../../redux/cart.slice';
import { setSelected } from '../../redux/progress.slice';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../cart/CheckoutForm';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CartRight = (props) => {
  const { next } = props;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const progress = useSelector((state) => state.progress)

  const [instalType, setInstalType] = useState("instal")
  const [clientSecret, setClientSecret] = useState("");

  const installPrice = 350.25

  const changeInstalType = (prop) => {
    setInstalType(prop)
  }

  const getTotalPrice = () => {
    if(instalType === 'instal')
      return cart[1].price+installPrice
    return cart[1].price
  };

  useEffect(() => {
    if(cart[1] != undefined) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: getTotalPrice() }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      
    },
    rules: {
      '.Label': {
        color: 'white',
      }
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='RIGHT w-2/6 bg-gray-700 rounded-md h-[100%] text-white py-10'>
        <h3 className='font-base text-lg mb-5'>Summary Overview</h3>
            {progress[0].selected === ''  ? (
                <h1>Your Cart is Empty!</h1>
            ) : (
            <>
            <div className='w-[85%] mx-auto'>
                <div className='flex rounded-3xl text-black text-left bg-white my-3 duration-300'>
                    <span className={instalType==='instal' ? ('bg-gray-100 text-center rounded-l-2xl w-1/2 px-4 py-5 pt-6 text-[0.95em] duration-300') : ('bg-white cursor-pointer text-center rounded-l-2xl w-1/2 px-4 py-5 pt-6 text-[0.95em] duration-300')} onClick={() => changeInstalType("instal")}>Charger+Installation</span>
                    <span className={instalType==='chargonly' ? ('bg-gray-100 text-center rounded-r-2xl w-1/2 px-4 py-5 pt-6 text-[0.95em] duration-300') : ('bg-white cursor-pointer text-center rounded-r-2xl w-1/2 px-4 py-5 pt-6 text-[0.95em] duration-300')} onClick={() => changeInstalType("chargonly")}>Charger Only</span>
                </div>
                <hr className='mx-auto my-6'></hr>
                {
                //Product Details
                }
                <div className='flex flex-row'>
                    <div className='w-1/3 mr-5'>
                      <Image src={cart[1].pic}
                          alt="Charger"
                          height={300} width={250}
                          object="cover"
                          className='rounded-lg'
                        />
                    </div>
                    <div className='w-1/3 flex flex-col justify-between text-left'>
                      <h3 className='font-medium text-lg'>{cart[1].name}</h3>
                      <p className='font-thin opacity-70 mb-4'>{cart[1].socket} Charger</p>
                      <h3>Qty:</h3>
                      <h3 className='mb-2'>Product Total:</h3>
                    </div>
                    <div className='w-1/4 flex flex-col justify-between text-right'>
                      <button onClick={() => (dispatch(removeFromCart(cart[1])), dispatch(setSelected('')))} className="hover:underline text-right">
                        X
                      </button>
                      <p className='font-thin opacity-0 invisible'>{cart[1].socket} Charger</p>
                      <h3>x{cart[1].quantity}</h3>
                      <h3 className='mb-2'>£{cart[1].price}</h3>
                    </div>
                  </div>
                  <hr className='my-6'></hr>
                  {
                  //Delivery+instalattion
                  }
                  <div className='flex flex-row justify-between text-lg mb-2'>
                    <h3 className='font-medium'>Delivery</h3>
                    <h3>FREE</h3>
                  </div>
                  {instalType === "instal" ? (
                    //With Installation
                    <div className='flex flex-row justify-between text-lg'>
                      <h3 className='font-medium'>Installation</h3>
                      <h3>£{installPrice}</h3>
                    </div>
                    ) : (
                    <></>
                  )}
                  <hr className='my-6'></hr>
                  {
                  //Order Total
                  }
                  <div className='flex flex-row justify-between text-lg mb-6'>
                      <h3 className='font-medium'>Order Total</h3>
                      <h3>£{getTotalPrice()}</h3>
                  </div> 
                  <hr className='my-6'></hr>
                  {
                  //Payment option
                  }
                  <div className='flex rounded-3xl text-black text-left bg-white my-3 duration-300 mb-7'>
                    <span className={(cart[1].payType === 'Pay' || cart[1].payType === 'Card' || cart[1].payType === 'Paypal') ? ('bg-gray-100 text-center rounded-l-2xl w-1/2 px-4 py-2 pt-3 text-[0.95em] duration-300') : ('bg-white cursor-pointer text-center rounded-l-2xl w-1/2 px-4 py-2 pt-3 text-[0.95em] duration-300')} onClick={() => dispatch(changePayTypee('Pay'))}>Pay Now</span>
                    <span className={cart[1].payType === 'Later' ? ('bg-gray-100 text-center rounded-r-2xl w-1/2 px-4 py-2 pt-3 text-[0.95em] duration-300') : ('bg-white cursor-pointer text-center rounded-r-2xl w-1/2 px-4 py-2 pt-3 text-[0.95em] duration-300')} onClick={() => dispatch(changePayTypee('Later'))}>Pay Later</span>
                  </div>
                  {cart[1].payType === 'Later' ?
                    <p className='text-sm mb-5'>*Products will not be delivered unless paid for. </p>  
                    :
                  <>
                    <p className='mb-5'>Please choose the payment method:</p>
                    <div className='flex flex-col text-left w-[48%] mx-auto'>
                      <label className="label cursor-pointer flex justify-start mb-5" onClick={() => dispatch(changePayTypee('Card'))}>
                        <input type="radio" name="radio-6" className={` radio checked:bg-blue-500 cursor-pointer`}  checked={cart[1].payType === 'Card'}/>
                        <span className="label-text ml-6">Debit/Credit Card</span> 
                      </label>
                      <label className="label cursor-pointer flex justify-start mb-6" onClick={() => dispatch(changePayTypee('Paypal'))} >
                        <input type="radio" name="radio-6" className="radio checked:bg-blue-500 cursor-pointer" checked={cart[1].payType === 'Paypal'} />
                        <span className="label-text ml-6">PayPal</span> 
                      </label>
                    </div>
                  </>}
                {progress[0].step === 4 ?(
                  <>
                    {clientSecret && (
                      <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                      </Elements>
                    )}
                  </>) : (
                  <>
                    <button onClick={next} className="w-1/3 py-2 px-2 text-black rounded disabled:bg-gray-500 hover:bg-gray-200 bg-white duration-300">Next</button>
                  </>)
                }
            </div>
            </>
            )}
    </div>
  )
}

export default CartRight