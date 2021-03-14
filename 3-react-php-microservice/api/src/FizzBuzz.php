<?php


namespace App;

use LogicException;

class FizzBuzz
{
    public function calculate(int $start, int $end): array
    {
        //throw new LogicException('TODO: Implement FizzBuzz');
        // array to store result
        $resultArray = array();

        // iterate through given range
        for ($counter = $start; $counter <= $end; $counter++){
            // check for fizz (divisible by 3), buzz (divisible by 5), both, or nothing (not divisible by either)
            // both conditions met
            if ($counter % 3 == 0 && $counter % 5 == 0) {
                $resultArray[] = "FizzBuzz";
            }
            // divisible by 3 only
            else if ($counter % 3 == 0 && $counter % 5 != 0) {
                $resultArray[] = "Fizz";
            }
            // divisible by 5 only
            else if ($counter % 3 != 0 && $counter % 5 == 0) {
                $resultArray[] = "Buzz";
            }
            // divisible by neither
            else if ($counter % 3 != 0 && $counter % 5 != 0) {
                $resultArray[] = "-";
            }
        }

        // return result
        return $resultArray;
    }
}