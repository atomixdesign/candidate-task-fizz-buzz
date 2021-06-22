import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import List from "./components/List";
import FizzBuzzContext from "./context/FizzBuzzContext";
import { FizzBuzzType } from "./types/types";

const App: React.FC = () => {
  const [arrayState, setArray] = useState([]);
  const arrayValue: FizzBuzzType = {
    arrayState,
    setArray,
  };
  return (
    <div className="App">
      <FizzBuzzContext.Provider value={arrayValue}>
        <div className="row justify-content-center">
          <div className="col-md-6 mt-4">
            <InputForm />
            <List />
          </div>
        </div>
      </FizzBuzzContext.Provider>
    </div>
  );
};

export default App;
