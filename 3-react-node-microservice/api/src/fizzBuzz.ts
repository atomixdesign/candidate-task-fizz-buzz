export type FizzBuzzOutput = 'Fizz' | 'Buzz' | 'FizzBuzz' | ''

export type FizzBuzzResult = {
  input: number
  output: FizzBuzzOutput
}

export const fizzBuzz = (start: number, end: number): FizzBuzzResult[] => {
  
  let current:number = start;
  let dataArray = [];
  let counter = 1;
  while(current<=end){
      if(current%15===0){
          dataArray.push({input:<number>counter,output:<FizzBuzzOutput>'FizzBuzz'})
      }else if(current%5===0){
          dataArray.push({input:<number>counter,output:<FizzBuzzOutput>'Buzz'})
      }else if(current%3===0){
          dataArray.push({input:<number>counter,output:<FizzBuzzOutput>'Fizz'})
      }else{
          dataArray.push({input:<number>counter,output:<FizzBuzzOutput>''})
      }
      current++;
      counter++;
  }
  return dataArray;
  throw 'TODO: Implement FizzBuzz';
}