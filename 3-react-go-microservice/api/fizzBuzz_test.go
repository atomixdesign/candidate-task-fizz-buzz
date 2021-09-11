package main

import "testing"

func TestFizzBuzz(t *testing.T) {
	expected := [...]FizzBuzzResult{
		{ Input: 1, Output: "" },
		{ Input: 2, Output: "" },
		{ Input: 3, Output: "Fizz" },
		{ Input: 4, Output: "" },
		{ Input: 5, Output: "Buzz" },
		{ Input: 6, Output: "Fizz" },
		{ Input: 7, Output: "" },
		{ Input: 8, Output: "" },
		{ Input: 9, Output: "Fizz" },
		{ Input: 10, Output: "Buzz" },
		{ Input: 11, Output: "" },
		{ Input: 12, Output: "Fizz" },
		{ Input: 13, Output: "" },
		{ Input: 14, Output: "" },
		{ Input: 15, Output: "FizzBuzz" },
	}

	actual := fizzBuzz(1, 15)

	if len(actual) != len(expected) {
		t.Errorf("Expected length of %d, received %d", len(expected), len(actual))
	}

	for i, result := range expected {
		if result.Output != actual[i].Output {
			t.Errorf("Expected result '%s' for %d, received '%s'", result.Output, result.Input, actual[i].Output)
		}
	}
}