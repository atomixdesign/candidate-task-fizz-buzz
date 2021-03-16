// imports
import React, { useState } from 'react';
import Axios from 'axios';

// component definition
function FizzBuzzForm() {

  // state to store entered values
  const [chosenValues, setChosenValues] = useState({
    startValue: 0,
    endValue: 0
  });

  // state for calculation
  const [isCalculated, setCalculated] = useState(false);

  //additional definitions
  const handleButton = (event: any) => {
    event.preventDefault();
    // call API for FizzBuzz calculations
    Axios.post("/", {chosenValues}).then( fulfilled => {
      // success
      setCalculated(true);
      }, rejected => {
        // not success
        setCalculated(false);
      });
    }
  
    // update values from input elements
    const handleInputEntry = (event: any) => {
      // get properties from input element
      let inputName = event.target.name;
      let inputValue = event.target.value;
      // update state with these values
      if (inputName === "startValue"){
        setChosenValues({startValue: inputValue, endValue: chosenValues.endValue});
      }
      else if (inputName === "endValue"){
        setChosenValues({startValue: chosenValues.startValue, endValue: inputValue});
      }
    }

  //component output
  return (
    <div>
      <form>
        <label htmlFor="startInput">Start</label>
        <input id="startInput" name="startValue" type="number" defaultValue="0" onChange={handleInputEntry}></input>
        <label htmlFor="endInput">End</label>
        <input id="endInput" name="endValue" type="number" defaultValue="0" onChange={handleInputEntry}></input>
        <button onClick={handleButton}>Calculate</button>
      </form>
      <hr/>
      <p>Chosen start: {chosenValues.startValue} Chosen end: {chosenValues.endValue}</p>
      <div>
        <ul>
          {isCalculated? <p>is calculated</p> : <></>}
        </ul>
      </div>
    </div>
  );
}

//export component
export default FizzBuzzForm;
