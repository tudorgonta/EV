import {useState} from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const FaqItem = (props) => {
  const {title, desc} = props
  const [isOpen,setisOpen] = useState(false)
  return (
    <div className='QUEST border-b p-3 my-4 hover:cursor-pointer' onClick={() => setisOpen(!isOpen)}>
        <div className='flex flex-row justify-between'>
            <h3 className='text-lg'>{title}</h3>
            {isOpen === false ? <AiOutlineDown size={20} fill="rgb(55 65 81)" className='mt-2'/> : <AiOutlineUp size={20} fill="rgb(55 65 81)" className='mt-2'/>}
         </div>
        <div className={`text-left dropdown ${isOpen !== false && `active`}`}>
            <p className='py-5 font-extralight'>{desc}</p>
        </div>
    </div>
  )
}

export default FaqItem