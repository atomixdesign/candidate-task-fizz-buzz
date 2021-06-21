import React, { useContext, useRef } from "react";
import FizzBuzzContext from "../../context/FizzBuzzContext";
import axios from "axios";

const InputForm: React.FC = () => {
  const { setArray } = useContext(FizzBuzzContext);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    const body = {
      start: startRef.current?.value,
      end: endRef.current?.value,
    };
    try {
      const fbResult = await axios.post("http://localhost:8000", body);
      setArray(fbResult.data);
      console.log(fbResult.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form className="row mb-2">
        <div className="col-4">
          {" "}
          <label htmlFor="start">Start:</label>
          <input type="number" defaultValue="1" ref={startRef} />
        </div>
        <div className="col-4">
          {" "}
          <label htmlFor="start">End:</label>
          <input type="number" defaultValue="15" ref={endRef} />
        </div>
        <div className="col-4">
          {" "}
          <button className=" mt-3 btn btn-primary" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
