import React, { useState } from "react";
import ProgressBarr from "./ProgressBar";
import Step1 from "./Step1";
import Step15 from "./Step15";
import Step2 from "./Step2";
import Submit from "./Submit";
import { useSelector, useDispatch } from 'react-redux';
import { addStep, removeStep, setStep } from "../../redux/progress.slice";



const Form = ({dat, chargers}) => {
  const cart = useSelector((state) => state.cart)
  const progress = useSelector((state) => state.progress)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    comments: "",
    mob: "",
    status: "REC",
    password: "",
    charger_id: cart._id,
    verifPass: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    dispatch(addStep())
  };
  const back = () => {
    dispatch(removeStep())
  };
  const handleClick = (event) => {
    const selectedStep = parseInt(event.target.value)
    dispatch(setStep(selectedStep))
  };
  switch (progress[0].step) {
    case 1:
      return (
        <>
        <form className="w-1/2 mx-auto mt-5">
          <ProgressBarr currentStep={progress[0].step} handleClick={handleClick}/>
        </form>
        <Step1 
          data={formData} 
          handleChange={handleChange} 
          next={next} 
          dat={dat}
          chargers={chargers}
        />
        </>
      );
    case 2:
      return (
        <>
        <div className="w-1/2 mx-auto mt-5">
          <ProgressBarr currentStep={progress[0].step} handleClick={handleClick}/>
        </div>
        <Step15 
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
          chargers={chargers}
        />
        </>
      );
    case 3:
      return (
        <>
        <div className="w-1/2 mx-auto mt-5">
          <ProgressBarr currentStep={progress[0].step} handleClick={handleClick}/>
        </div>
        <Step2
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
        </>
      )
    default:
      return (
        <>
          <form className="w-1/2 mx-auto mt-5">
            <ProgressBarr currentStep={progress[0].step} handleClick={handleClick}/>
          </form>
          <Submit data={formData} handleChange={handleChange} back={back} />
        </>
      );
  }
};
export default Form;