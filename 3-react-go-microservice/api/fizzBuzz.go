package main

import "errors"

type FizzBuzzResult struct {
    Input int `json:"input"`
    Output string `json:"output"`
}

func fizzBuzz(start int, end int)(result[] FizzBuzzResult, err error) {
    err = errors.New("TODO: Implement fizz buzz")
    fz:= [] FizzBuzzResult {}
    for i:= start;i <= end;i++ {
        fz = append(fz, CalculateFizzBuzz(int(i)))
    }
    return fz, err;
}

func CalculateFizzBuzz(i int) FizzBuzzResult {
    fizz:= "Fizz"
    buzz:= "Buzz"
    output:= ""
    if i % 3 == 0 && i % 5 == 0 {
        output = fizz + buzz
    } else if i % 3 == 0 {
        output = fizz
    } else if i % 5 == 0 {
        output = buzz
    }
    return FizzBuzzResult {
        Input: int(i),
        Output: output,
    }
}
