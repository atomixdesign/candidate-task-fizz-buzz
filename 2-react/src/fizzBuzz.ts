export type FizzBuzzOutput = "Fizz" | "Buzz" | "FizzBuzz" | "";

export type FizzBuzzResult = {
  input: number;
  output: FizzBuzzOutput;
};

export const fizzBuzz = (
  start: number = 0,
  end: number = 0
): FizzBuzzResult[] => {
  let fizzBuzzResult: FizzBuzzResult[] = [];
  if (start !== 0 && end !== 0) {
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        fizzBuzzResult.push({
          input: i,
          output: "Fizz",
        });
      } else if (i % 5 === 0 && i % 3 !== 0) {
        fizzBuzzResult.push({
          input: i,
          output: "Buzz",
        });
      } else if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzResult.push({
          input: i,
          output: "FizzBuzz",
        });
      } else {
        fizzBuzzResult.push({
          input: i,
          output: "",
        });
      }
    }
    return fizzBuzzResult;
  }
  return fizzBuzzResult;
};
