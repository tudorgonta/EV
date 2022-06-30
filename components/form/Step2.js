import { useState } from "react";
const Step2 = (props) => {
  const { data, handleChange, next, back } = props;
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [mobMessage, setMobMessage] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [add1Message, setAdd1Message] = useState("");
  const [add2Message, setAdd2Message] = useState("");
  

  const nameValid = /[\S\s]+[\S]+/.test(`${data.name}`)
  const addValid = /[\S\s]+[\S]+/.test(`${data.street}`)
  const add1Valid = /[\S\s]+[\S]+/.test(`${data.city}`)
  const add2Valid = /[\S\s]+[\S]+/.test(`${data.postcode}`)
  const emailValid = /^\S+@\S+\.\S+$/.test(`${data.email}`)
  const mobValid = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/.test(`${data.mob}`)

  const handleClick = async () => {
    if(nameValid == ""){
      setNameMessage("* Name should not be empty!")
    } else {
      setNameMessage("")
    }
  }

  const handleEmail = () => {
    if(!emailValid) {
      setEmailMessage("* Should be a valid email")
    } else {
      setEmailMessage("")
    }
  }
  const handleMob = () => {
    if(!mobValid) {
      setMobMessage("* Should be a valid phone number")
    } else {
      setMobMessage("")
    }
  }
  const handleAdd = () => {
    if(!addValid) {
      setAddMessage("* This field is required")
    } else {
      setAddMessage("")
    }
  }
  const handleAdd1 = () => {
    if(!add1Valid) {
      setAdd1Message("* This field is required")
    } else {
      setAdd1Message("")
    }
  }
  const handleAdd2 = () => {
    if(!add2Valid) {
      setAdd2Message("* This field is required")
    } else {
      setAdd2Message("")
    }
  }
  return (
    <>
    <h1 className='mb-5 font-medium text-center text-4xl mt-16'>Personal details</h1>
    <h3 className='text-center text-lg mb-5'>Please provide your contact details</h3>
    <form className='w-10/12 flex flex-col h-auto mx-auto my-5 rounded px-10'>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-1/2 ml-[2.5rem]">
        <div className="flex flex-col w-3/4 mx-auto my-0">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              onInput={handleClick}
              placeholder="Full Name"
              className={`p-1 px-2 ${nameMessage ? 'border-b border-red-400 focus:border-red-400' : 'border-b'} rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
            />
            <div className={`text-left dropdown  ${nameMessage ? 'active-form' : ''}`}>
              <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{nameMessage}</span>
            </div>
        </div>
        <div className="flex flex-col w-3/4 mt-7 mx-auto my-0">
            <input
              type="text"
              name="mob"
              value={data.mob}
              onChange={handleChange}
              onInput={handleMob}
              placeholder="Mob Number"
              className={`p-1 px-2 ${mobMessage ? 'border-b border-red-400 focus:border-red-400' : 'border-b'} rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
            />
            <div className={`text-left dropdown  ${mobMessage ? 'active-form' : ''}`}>
              <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{mobMessage}</span>
            </div>
        </div>
        <div className="flex flex-col w-3/4 mt-7 mx-auto my-0">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            onInput={handleEmail}
            placeholder="Email"
            className={`p-1 px-2 ${emailMessage ? 'border-b border-red-400 focus:border-red-400' : 'border-b'} rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
            />
          <div className={`text-left dropdown  ${emailMessage ? 'active-form' : ''}`}>
              <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{emailMessage}</span>
            </div>
        </div>
      </div>

      <div className='flex flex-col w-1/2'>
        <div className="flex flex-col w-3/4">
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={handleChange}
            onInput={handleAdd}
            placeholder="Street"
            className={`p-1 px-2 ${addMessage ? 'border-b border-red-400 focus:border-red-400' : 'border-b'} rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
            />
          <div className={`text-left dropdown  ${addMessage ? 'active-form' : ''}`}>
              <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{addMessage}</span>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mt-7">
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            onInput={handleAdd1}
            placeholder="City"
            className={`p-1 px-2 ${add1Message ? 'border-b border-red-400 focus:border-red-400' : 'border-b'} rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
          />
          <div className={`text-left dropdown  ${add1Message ? 'active-form' : ''}`}>
              <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{add1Message}</span>
          </div>
        </div>
        <div className='flex flex-col w-3/4 mt-7'>
          <input
            type="text"
            name="postcode"
            value={data.postcode}
            onInput={handleAdd2}
            onChange={handleChange}
            placeholder="Post Code"
            className={`p-1 px-2 ${add2Message ? 'border-b border-red-400 focus:border-red-400' : 'border-b'} rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
            />
          <div className={`text-left dropdown  ${add2Message ? 'active-form' : ''}`}>
              <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{add2Message}</span>
          </div>
        </div>
        </div>
      </div>
      <div className="flex-row mt-5">
        <button onClick={back} className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 mr-5 duration-300">Back</button> 
        <button onClick={next} disabled={!nameValid || !mobValid || !emailValid || !addValid || !add1Valid || !add2Valid } className="w-1/3 py-2 px-2 text-white rounded disabled:bg-gray-500 hover:bg-gray-600 bg-gray-700 mt-5 duration-300">Next</button>
      </div>
    </form>
    </>
  );
};
export default Step2;