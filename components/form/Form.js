import React, { useState } from "react";
import ProgressBarr from "./ProgressBar";
import Step1 from "./Step1";
import Step15 from "./Step15";
import Step2 from "./Step2";
import Submit from "./Submit";

const Form = ({dat}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    comments: "",
    car: "",    
    brand: "",
    mob: "",
    status: "REC",
    password: "",
    verifPass: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleClick = (event) => {
    const da = parseInt(event.target.value)
    setCurrentStep(da)
  };
  switch (currentStep) {
    case 1:
      return (
        <>
        <form className="w-1/2 mx-auto mt-5">
          <ProgressBarr currentStep={currentStep} handleClick={handleClick}/>
        </form>
        <Step1 
          data={formData} 
          handleChange={handleChange} 
          next={next} 
          dat={dat}
        />
        </>
      );
    case 2:
      return (
        <>
        <div className="w-1/2 mx-auto mt-5">
          <ProgressBarr currentStep={currentStep} handleClick={handleClick}/>
        </div>
        <Step2
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
        </>
      );
    case 3:
      return (
        <>
        <div className="w-1/2 mx-auto mt-5">
          <ProgressBarr currentStep={currentStep} handleClick={handleClick}/>
        </div>
        <Step15 />
        </>
      )
    default:
      return (
        <>
          <form className="w-1/2 mx-auto mt-5">
            <ProgressBarr currentStep={currentStep} handleClick={handleClick}/>
          </form>
          <Submit data={formData} handleChange={handleChange} back={back} />
        </>
      );
  }
};
export default Form;