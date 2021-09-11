package main

type FizzBuzzResult struct {
	Input int `json:"input"`
	Output string `json:"output"`
}

func fizzBuzz(start int, end int) (result []FizzBuzzResult) {

	fizz := "Fizz"
    buzz := "Buzz"
    empty := ""

    if end >= start {
    for i := start; i <= end; i++ {
        	if i % 15 == 0 {
                result = append(result, FizzBuzzResult{i, fizz + buzz})
            } else if i % 3 == 0 {
                result = append(result, FizzBuzzResult{i, fizz})
            } else if i % 5 == 0 {
                result = append(result, FizzBuzzResult{i, buzz})
            } else {
                result = append(result, FizzBuzzResult{i, empty})
            }
        }
    }
	return result
}