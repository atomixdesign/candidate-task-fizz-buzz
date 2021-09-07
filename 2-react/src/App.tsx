import React, { useState } from "react";
import { fizzBuzz, FizzBuzzResult } from "./fizzBuzz";
import "./App.css";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState<FizzBuzzResult[]>();

  const handleCalculation = (event: any) => {
    event.preventDefault();
    const res = fizzBuzz(Number(start), Number(end));
    setResult(res);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    name === "start" ? setStart(value) : setEnd(value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleCalculation}>
          <div className="input-col">
            <label htmlFor="start">Start</label>
            <input
              type="text"
              name="start"
              value={start}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-col">
            <label htmlFor="end">End</label>
            <input
              type="text"
              name="end"
              value={end}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-col">
            <input type="submit" value="Calculate" className="submit-btn" />
          </div>
        </form>
        <hr />
        <div className="result-container">
          {result
            ? result.map((item, index) => {
                return (
                  <p key={index}>
                    {`${item.input}.`}
                    {item.output ? item.output : "-"}
                  </p>
                );
              })
            : null}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
