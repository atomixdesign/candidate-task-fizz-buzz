// imports
import React, { useState } from 'react';
import ResultListItem from './ResultListItem';
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

  // state for results of calculation
  const [results, setResults] = useState(Array);

  //additional definitions
  const getCalculations = async (start: Number, end: Number) : Promise<any> => {
    try {
      // run fetch POST to server
      let response = await Axios.post("http://localhost:80", {"startValue": start, "endValue": end});
      if (response.data !== null){
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButton = async (event: any) => {
    event.preventDefault();
    
    // call API for FizzBuzz calculations
    getCalculations(chosenValues.startValue, chosenValues.endValue).then( response => {
      setResults(response);
      if (response !== []){
        setCalculated(true);
      }
    });
  };
  
    // update values from input elements
    const handleInputEntry = (event: any) => {
      // get properties from input element
      let inputName = event.target.name;
      let inputValue = event.target.value;
      // update state with these values
      if (inputName === "startValue"){
        setChosenValues({...chosenValues, startValue: inputValue});
      }
      else if (inputName === "endValue"){
        setChosenValues({...chosenValues, endValue: inputValue});
      }
    };

  //component output
  return (
    <div>
      <form>
        <label htmlFor="startInput">Start</label>
        <input id="startInput" name="startValue" type="number" value={chosenValues.startValue} defaultValue="1" onChange={handleInputEntry}></input>
        <label htmlFor="endInput">End</label>
        <input id="endInput" name="endValue" type="number" value={chosenValues.endValue} defaultValue="2" min={chosenValues.startValue} onChange={handleInputEntry}></input>
        <button onClick={handleButton}>Calculate</button>
      </form>
      <hr/>
      <div>
        <ul>
          {isCalculated? results.map( function (calculation: any){ return (
            <ResultListItem key={calculation.input} count={calculation.input} result={calculation.output}></ResultListItem>
          )}) : <></>}
        </ul>
      </div>
    </div>
  );
}

//export component
export default FizzBuzzForm;
