import React, { useState } from "react";
import axios from "axios";
import FizzBuzzForm from "./components/FizzBuzzForm";
import FizzBuzzList from "./components/FizzBuzzList";
import "./App.css";

const App = () => {
  const [fizzBuzzData, setFizzBuzzData] = useState([]);

  const updateFizzBuzz = async (inputState: any) => {
    try {
      const resp = await axios.get(
        `http://127.0.0.1:8000/fizzBuzz?start=${inputState.startValue}&end=${inputState.endValue}`
      );
      setFizzBuzzData(resp.data);
    } catch (e) {
      console.log("Error output:", e);
    }
  };

  return (
    <div className="App">
      <FizzBuzzForm onSubmit={updateFizzBuzz} />
      <FizzBuzzList fizzBuzzData={fizzBuzzData} />
    </div>
  );
};

export default App;
