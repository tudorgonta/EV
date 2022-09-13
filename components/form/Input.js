import { useState } from "react";
const Input = (props) => {
    const { data, type, name, value, onChange, onInput, placeholder, disabled} = props
    const [nameMessage, setNameMessage] = useState("");
    const nameValid = /[\S\s]+[\S]+/.test(`${value}`)
    const addValid = /[\S\s]+[\S]+/.test(`${value}`)
    const add1Valid = /[\S\s]+[\S]+/.test(`${value}`)
    const add2Valid = /[\S\s]+[\S]+/.test(`${value}`)
    const emailValid = /^\S+@\S+\.\S+$/.test(`${value}`)
    const mobValid = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/.test(`${value}`)
    const passValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(`${value}`)
    const passEqual = false
    if(data != undefined) {
        passEqual = data.verifPass.includes(data.password)
    }

    const checkFormula = (validType, message) => {
        if(validType == ""){
            setNameMessage(message)
        } else {
            setNameMessage("")
        }
    }
    const handleClick = (prop) => {
        switch(name){
            case 'name':
                checkFormula(nameValid, prop)
                break
            case 'mob':
                checkFormula(mobValid, prop)
                break
            case 'email':
                checkFormula(emailValid, prop)
                break
            case 'street':
                checkFormula(addValid, prop)
                break
            case 'city':
                checkFormula(add1Valid, prop)
                break
            case 'city':
                checkFormula(add2Valid, prop)
                break
            case 'password':
                checkFormula(passValid, prop)
                break
            case 'verifPass':
                checkFormula(passEqual, prop)
                break
            default:
                setNameMessage("")
        }
    }
  return (
    <div className={`flex flex-col w-3/4 mt-7 mx-auto ${disabled ? 'opacity-[65%]' : ''}`}>
        <label className="text-left font-base text-[1.1em] opacity-[80%] mb-1">{placeholder}:</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onInput={() => handleClick(onInput)}
            placeholder={placeholder}
            className={`p-2 px-2 ${nameMessage ? 'border border-red-400 focus:border-red-400' : 'border'} bg-gray-100 rounded-sm duration-300 hover:border-gray-700/40 focus:border-gray-700/40 focus:outline-none`}
            disabled={disabled ? true : false}
        />
        <div className={`text-left dropdown  ${nameMessage ? 'active-form' : ''}`}>
            <span className={`text-red-500 text-[0.75rem] font-medium mt-6`}>{nameMessage}</span>
        </div>
    </div>
  )
}

export default Input