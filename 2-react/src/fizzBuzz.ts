export type FizzBuzzOutput = 'Fizz' | 'Buzz' | 'FizzBuzz' | ''

export type FizzBuzzResult = {
  input: number
  output: FizzBuzzOutput
}

export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  var result: FizzBuzzResult[] = []
  for (var i: number = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push({ input: i, output: 'FizzBuzz' })
    }
    else if (i % 3 === 0) {
      result.push({ input: i, output: 'Fizz' })
    }
    else if (i % 5 === 0) {
      result.push({ input: i, output: 'Buzz' })
    }
    else {
      result.push({ input: i, output: '' })
    }
  }
  return result
}