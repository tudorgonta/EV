import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const ProgressBarr = props => {

  const {handleClick} = props;
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage} filledBackground="rgb(55 65 81)">
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {props.currentStep <= 3 ? (
                <button value={1} onClick={handleClick}>{index + 1}</button>
            ) : (
                index+1
            )}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {props.currentStep === 3 ? (
                <button value={2} onClick={handleClick}>{index + 1}</button>
            ) : (
                index+1
            )}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
                {index+1}
          </div>
        )}
      </Step>
      
    </ProgressBar>
  );
};

export default ProgressBarr;
