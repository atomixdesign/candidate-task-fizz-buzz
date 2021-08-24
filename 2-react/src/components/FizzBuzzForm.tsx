import React, { useState } from "react";
import FizzBuzzInput from "./FizzBuzzInput";

type FizzBuzzFormProps = {
  onSubmit(stateValue: any): void;
};

const INFO_MESSAGE = "Please select start and end value between 1-15";

export const FizzBuzzForm = (props: FizzBuzzFormProps) => {
  const [inputState, setInputState] = useState({
    startValue: 0,
    endValue: 0,
  });

  const [errorMsg, setErrorMsg] = useState("");

  const validateInputState = (state: {
    startValue: number;
    endValue: number;
  }) => {
    if (state.startValue > 0 && state.endValue > 0 && state.endValue <= 15) {
      return inputState;
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (validateInputState(inputState)) {
      props.onSubmit(inputState);
      setErrorMsg("");
    } else {
      setErrorMsg(INFO_MESSAGE);
    }
  };

  const inputOnChange = (inputValue: any, inputIdText: string) => {
    return setInputState({
      ...inputState,
      [inputIdText]: parseInt(inputValue.target.value),
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <FizzBuzzInput
          inputText="Start"
          inputIdText="startValue"
          inputValue={inputState.startValue}
          inputOnChange={inputOnChange}
        />
        <FizzBuzzInput
          inputText="End"
          inputIdText="endValue"
          inputValue={inputState.endValue}
          inputOnChange={inputOnChange}
        />
        <button>Calculate</button>
        <div className="error-msg">{errorMsg !== "" && errorMsg}</div>
      </form>
    </div>
  );
};

export default FizzBuzzForm;
