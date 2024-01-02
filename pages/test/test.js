import React, { useState } from "react";

function QuestionCreator() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} />;
    // more steps...
    default:
      return "모든 단계가 완료되었습니다!";
  }
}

function Step1({ nextStep }) {
  return (
    <div>
      <h1>Step 1</h1>
      {/* Step 1 specific inputs here */}
      <button onClick={nextStep}>다음</button>
    </div>
  );
}

function Step2({ nextStep, prevStep }) {
  return (
    <div>
      <h1>Step 2</h1>
      {/* Step 2 specific inputs here */}
      <button onClick={prevStep}>이전</button>
      <button onClick={nextStep}>다음</button>
    </div>
  );
}

// Define more steps as needed...

export default QuestionCreator;
