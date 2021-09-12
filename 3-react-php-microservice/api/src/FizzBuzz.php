<?php


namespace App;

use LogicException;

class FizzBuzz
{
    public function calculate(int $start, int $end): array
    {
        $result = [];
        for ($start; $start <= $end; $start++) {
            $output = '';
            if ($start%3 == 0 && $start%5 == 0) {
                $output = 'FizzBuzz';
            } else if ($start%3 == 0) {
                $output = 'Fizz';
            } else if ($start%5 == 0) {
                $output = 'Buzz';
            }
            $result[] = [
                'input' => $start,
                'output' => $output
            ];
        }
        return $result;
    }
}