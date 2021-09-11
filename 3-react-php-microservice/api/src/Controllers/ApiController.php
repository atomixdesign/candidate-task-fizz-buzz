<?php


namespace App\Controllers;


use App\FizzBuzz;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ApiController
{
    protected FizzBuzz $fizzBuzz;

    public function __construct()
    {
        $this->fizzBuzz = new FizzBuzz();
    }

    public function handle(Request $request): JsonResponse
    {
        $start = $request->query->get('start');
        $end = $request->query->get('end');
        $start = intval($start);
        $end = intval($end);
        // better to use a validation library
        if(!$start || !$end || !is_int($start) || !is_int($end)) {
            return new JsonResponse(['error' => 'invalid inputs'], 400);
        }
        $data = $this->fizzBuzz->calculate($start, $end);
        return new JsonResponse($data, 200);
    }
}