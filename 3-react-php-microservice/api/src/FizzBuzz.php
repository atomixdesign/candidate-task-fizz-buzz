<?php


namespace App;

class FizzBuzz
{
    public function calculate(int $start, int $end): array
    {
        $calculation = [];
        if ($end >= $start) {
          for ($i = $start; $i <= $end; $i++) {
              if($i % 15 === 0) {
                  array_push($calculation, ['input' => $i, 'output' => 'FizzBuzz']);
              }
              else if($i  % 3 === 0) {
                  array_push($calculation, ['input' => $i, 'output' => 'Fizz']);
              }
              else if($i  % 5 === 0) {
                  array_push($calculation, ['input' => $i, 'output' => 'Buzz']);
              }
              else {
                  array_push($calculation, ['input' => $i, 'output' => '']);
              }
          }
        }
        return $calculation;
    }
}