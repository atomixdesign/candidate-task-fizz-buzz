export enum FizzBuzzType {
  Fizz = 'Fizz',
  Buzz = 'Buzz',
  FizzBuzz = 'FizzBuzz'
}

export type FizzBuzzResult = {
  input: number
  output: FizzBuzzType | ''
}

export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  const result: FizzBuzzResult[] = [];
  for (let i = start; i <= end; i++) {
    let fbstr = (i % 3 === 0 ? `Fizz` : '') + (i % 5 === 0 ? `Buzz` : ``)
    result.push({ input: i, output: fbstr } as FizzBuzzResult);
  }
  return result;
}