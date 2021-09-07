import React, { useState } from "react";
import "./App.css";
import { fizzBuzz, FizzBuzzResult } from "./fizzBuzz";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [result, setResult] = useState<FizzBuzzResult[]>();

  const handleSubmit = (event: any) => {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="start">Start</label>
        <input
          type="text"
          name="start"
          value={start}
          onChange={handleChange}
        ></input>
        <label htmlFor="end">End</label>
        <input
          type="text"
          name="end"
          value={end}
          onChange={handleChange}
        ></input>
        <input type="submit" value="Calculate" className="submit-btn" />
      </form>
      <hr />
      <div>
        {result
          ? result.map((item, index) => {
              return (
                <p className="output" key={index}>
                  {`${item.input}.`}
                  {item.output ? item.output : "-"}
                </p>
              );
            })
          : null}
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
