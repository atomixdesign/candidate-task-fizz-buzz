/**
 * @param start number
 * @param end number
 * @returns [{
 *   input: number
 *   output: string
 * }]
 */
module.exports = (start, end) => {
  let fizzBuzzResult = [];
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
