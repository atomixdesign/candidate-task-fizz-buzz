<?php


namespace App;

use LogicException;

class FizzBuzz
{
    public function calculate(int $start, int $end): array
    {
        $result = array();
        for ($i = $start; $i <= $end; $i++) {
            if ($i % 3 === 0 && $i % 5 === 0) {
                $result[] = [ 'input' => $i, 'output' => 'FizzBuzz' ];
            }
            else if ($i % 3 === 0) {
                $result[] = [ 'input' => $i, 'output' => 'Fizz' ];
            }
            else if ($i % 5 === 0) {
                $result[] = [ 'input' => $i, 'output' => 'Buzz' ];
            }
            else {
                $result[] = [ 'input' => $i, 'output' => '' ];
            }
        }
        return $result;
    }
}