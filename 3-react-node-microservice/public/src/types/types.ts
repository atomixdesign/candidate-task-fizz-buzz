export type FizzBuzzOutput = 'Fizz' | 'Buzz' | 'FizzBuzz' | ''

export type FizzBuzzResult = {
  input: number;
  output: FizzBuzzOutput;
}

export type FizzBuzzType = {
    arrayState: FizzBuzzResult[];
    setArray: any;
}