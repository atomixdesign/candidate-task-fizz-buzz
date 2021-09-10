export type FizzBuzzOutput = 'Fizz' | 'Buzz' | 'FizzBuzz' | ''

export type FizzBuzzResult = {
  input: number
  output: FizzBuzzOutput
}

export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  let calculation: FizzBuzzResult[] | any[] = [];
  if (end >= start) {
    for (let i = start; i <= end; i++) {
      if(i % 15 === 0) {
        calculation = [ ...calculation, { input: i, output: 'FizzBuzz'}];
      }
      else if(i % 3 === 0) {
        calculation = [ ...calculation, { input: i, output: 'Fizz'}];
      }
      else if(i % 5 === 0) {
        calculation = [ ...calculation, { input: i, output: 'Buzz'}];
      }
      else {
        calculation = [ ...calculation, { input: i, output: ''}];
      }
    }
  }
  return calculation;
}