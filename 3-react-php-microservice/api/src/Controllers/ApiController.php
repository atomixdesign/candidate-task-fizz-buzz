<?php


namespace App\Controllers;


use App\FizzBuzz;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController
{
    protected FizzBuzz $fizzBuzz;
    protected JsonResponse $jsonResponse;

    public function __construct()
    {
        $this->fizzBuzz = new FizzBuzz();
        $this->jsonResponse = new JsonResponse();
    }

    public function handle($request): JsonResponse
    {
        try {
            $x = $request->query()->get('x');
            $y = $request->query()->get('y');
            $this->jsonResponse->setData($this->fizzBuzz->calculate($x, $y));
        } catch (Exception $e) {
            $this->jsonResponse->setData(['error' => 'invalid inputs']);
        }
        return $this->jsonResponse;
    }
}