export type FizzBuzzOutput = "Fizz" | "Buzz" | "FizzBuzz" | "";

export type FizzBuzzResult = {
  input: number;
  output: FizzBuzzOutput;
};

export const fizzBuzz = (start: number, end: number) => {
  const numbers: number[] = Array.from(
    { length: end + 1 - start },
    (_, i) => start + i
  );
  let results: FizzBuzzResult[] = [];
  numbers.forEach((n) => {
    if (n % 3 === 0 && n % 5 === 0) {
      results.push({ input: n, output: "FizzBuzz" });
    } else if (n % 5 === 0) {
      results.push({ input: n, output: "Buzz" });
    } else if (n % 3 === 0) {
      results.push({ input: n, output: "Fizz" });
    } else {
      results.push({ input: n, output: "" });
    }
  });
  return results;
};
