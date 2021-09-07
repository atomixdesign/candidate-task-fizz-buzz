export type FizzBuzzOutput = "Fizz" | "Buzz" | "FizzBuzz" | "";

export type FizzBuzzResult = {
  input: number;
  output: FizzBuzzOutput;
};

// Implement FizzBuzz function
export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  const results: FizzBuzzResult[] = [];
  const fizzBuzzFn = () => {
    for (let num = start; num <= end; num++) {
      const result: FizzBuzzResult = {
        input: num,
        output: "",
      };

      if (num % 3 === 0) {
        result.output += "Fizz";
      }
      if (num % 5 === 0) {
        result.output += "Buzz";
      }
      results.push(result);
    }
  };

  fizzBuzzFn();

  return results;
};
