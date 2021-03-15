// imports
import React, { useState } from 'react';
import Axios from 'axios';
    
// state to store entered values
const [chosenValues, setChosenValues] = useState({
    startValue: 0,
    endValue: 0
});

const [isCalculated, setCalculated] = useState(false);

//additional definitions
function handleButton(){
    Axios.post("/api", {chosenValues}).then( fulfilled => {

    }, rejected => {
        
    });
}

// update values from input elements
function handleInputEntry(event: any){
    // get properties from input element
    let inputName = event.target.name;
    let inputValue = event.target.value;

    // update state with these values
    if (inputName == "startValue"){
        setChosenValues({startValue: inputValue, endValue: chosenValues.endValue});
    }
    else if (inputName == "endValue"){
        setChosenValues({startValue: chosenValues.startValue, endValue: inputValue});
    }
}

// component definition
function FizzBuzzForm() {


  return (
    <div>
      <form>
        <label htmlFor="startInput">Start</label>
        <input id="startInput" name="startValue" type="number" value="0"></input>
        <label htmlFor="endInput">End</label>
        <input id="endInput" name="startValue" type="number" value="0"></input>
        <button onClick={handleButton}>Calculate</button>
      </form>
      <hr/>
      <div>
        <ul>
          
        </ul>
      </div>
    </div>
  );
}

//export component
export default FizzBuzzForm;
