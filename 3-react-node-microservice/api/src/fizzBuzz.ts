export type FizzBuzzOutput = 'Fizz' | 'Buzz' | 'FizzBuzz' | ''

export type FizzBuzzResult = {
  input: number
  output: FizzBuzzOutput
}

export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  let result: FizzBuzzResult[] = [];
  for (start; end >= start;  ++start) {
    const data: FizzBuzzResult = {
      input: start,
      output: ( start%3  === 0 && start%5 === 0 ? 'FizzBuzz' : '' ) || ( start%3 ? '' : 'Fizz' ) || ( start%5 ? '' : 'Buzz' ) || ''
    };
    result = [ ...result, data];
  }
  return result;
}