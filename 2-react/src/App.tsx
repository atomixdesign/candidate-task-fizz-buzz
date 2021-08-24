import React, { useState } from "react";
import FizzBuzzForm from "./components/FizzBuzzForm";
import FizzBuzzList from "./components/FizzBuzzList";
import { fizzBuzz } from "./fizzBuzz";
import "./App.css";

const App = () => {
  const [fizzBuzzData, setFizzBuzzData] = useState(fizzBuzz());

  const updateFizzBuzz = (inputState: any) => {
    setFizzBuzzData(fizzBuzz(inputState.startValue, inputState.endValue));
  };

  return (
    <div className="App">
      <FizzBuzzForm onSubmit={updateFizzBuzz} />
      <FizzBuzzList fizzBuzzData={fizzBuzzData} />
    </div>
  );
};

export default App;
