<?php


namespace App;

use LogicException;

class FizzBuzz
{
    public function calculate(int $start, int $end): array
    {
        for ($i = $start; $i < $end; $i++) {
            if ($i % 3 === 0 && $i % 5 === 0) {
                return "FizzBuzz";
            }
            else if ($i % 3 === 0) {
                return "Fizz";
            }
            else if ($i % 3 === 0) {
                return "Buzz";
            }
            else {
                return '';
            }
        }
    }
}