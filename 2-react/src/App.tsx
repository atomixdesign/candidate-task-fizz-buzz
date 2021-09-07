import React, { useState } from "react";
import "./App.css";
import { fizzBuzz } from "./fizzBuzz";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const res = fizzBuzz(Number(start), Number(end));
    console.log(res);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    name === "start" ? setStart(value) : setEnd(value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="start">Start</label>
        <input type="text" name="start" value={start}></input>
        <label htmlFor="end">End</label>
        <input type="text" name="end" value={end}></input>
        <input type="submit" value="Calculate" className="submit-btn" />
      </form>
      <hr />
      <div>
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
