import React from "react";
import FizzBuzz from "./FizzBuzz";

type FizzBuzzListProps = {
  fizzBuzzData: any[];
};
export const FizzBuzzList = ({ fizzBuzzData }: FizzBuzzListProps) => {
  return (
    <div className="fizzbuzz-list">
      <ul>
        {fizzBuzzData.map((fizzBuzz: any) => {
          return <FizzBuzz key={fizzBuzz.input} {...fizzBuzz} />;
        })}
      </ul>
    </div>
  );
};

export default FizzBuzzList;
