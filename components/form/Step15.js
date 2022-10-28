import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { removeFromCart } from '../../redux/cart.slice';
import { setSelected } from '../../redux/progress.slice';
import CartRight from './CartRight';

const Step15 = (props) => {
  const { next, back } = props;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const progress = useSelector((state) => state.progress)

  const selectedCheck = (id) => {
    return ((id !== progress[0].selected) && progress[0].selected !== '' )
  }
  const listChargers = useSelector((state) => state.chargers)
  
  return (
    <>
      <h1 className='mb-5 font-medium text-center text-4xl mt-16'>Compatible chargers</h1>
      <h3 className='text-center text-lg mb-5'>Please choose a charger</h3>
      {Object.values(listChargers[0]).length != 0 ? (
        <>
          <div className='flex flex-row'>
            <div className='LEFT w-4/6 flex flex-col self-start'>
              <div className='flex flex-wrap'>
              {Object.values(listChargers[0])?.map((charger) => {
                return (
                  <>  
                    <div className={`${selectedCheck(charger._id) ? "opacity-20" : "opacity-90 hover:opacity-100 "} flex flex-col border border-[2px] bg-white border-gray-600 hover:drop-shadow-lg w-[48.5%] rounded-md mr-[0.6em] py-8 px-6 text-lg mb-[0.6em] duration-500`}>
                      <h3 className='text-2xl font-medium'>{charger.name}</h3>
                      <div className='mx-auto'>
                        {
                          
                          // height={100} width={75} -- thumb sizes pic
                          // height={300} width={250} -- hero pic size
                          // Display charger pictures (carousel with thumbs and arrows), alt tag == image.tag
                        }
                        {Object.values(charger.pic)?.map((image) => {
                            return (
                              <Image src={image.link}
                              alt={image.tag}
                              height={100} width={75}
                              object="responsive"
                              className='rounded-sm'
                          />
                            )
                          })}
                      </div>
                      {
                        //Charger variants


                      }
                      <p className='my-1 font-medium text-xl'>£{charger.price}</p>
                      <p className='font-light text-base my-3 min-h-[15%]'>{charger.desc}</p>
                      <p className='text-base font-base'>Charger type: {charger.socket}*</p>
                      <button disabled={selectedCheck(charger._id)} onClick={((charger._id === progress[0].selected) && progress[0].selected !== '' ) ? () => (dispatch(removeFromCart(cart[1])), dispatch(setSelected(''))) : () => (dispatch(addToCart(charger)), dispatch(setSelected(charger._id)))} className={`w-2/4 rounded-md text-white mx-auto mt-5 py-3 ${((charger._id === progress[0].selected) && progress[0].selected !== '' ) ? 'hover:bg-red-800 bg-red-900' : "hover:bg-gray-600 bg-gray-700"} duration-300`}>{((charger._id === progress[0].selected) && progress[0].selected !== '' ) ? 'Remove from cart' : "Add to cart"}</button>
                      <button disabled={selectedCheck(charger._id)} className='w-2/4 rounded-md text-white mx-auto mt-3 py-3 hover:bg-zinc-700 bg-zinc-800 duration-300 text-base'>Read More</button>
                    </div>
                  </>
                )
              })}
              </div>
              <div className='flex flex-row self-start'>
                <button onClick={back} className="w-full py-2 px-24 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 mr-5 duration-300">Back</button> 
              </div>
            </div>
            <CartRight next={next} />
          </div>
        </>
      ) : (
        <> 
        <h3>We could not find any chargers compatible with your car, please give us call on #NUMBER</h3>
        </>
      )}
    </>
  )
}

export default Step15