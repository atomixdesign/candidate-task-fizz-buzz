<?php


namespace App\Controllers;


use App\FizzBuzz;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController
{
    protected FizzBuzz $fizzBuzz;

    public function __construct()
    {
        $this->fizzBuzz = new FizzBuzz();
    }

    public function handle(): JsonResponse
    {
        // TODO
        // get data from http request
        $postRequest = file_get_contents('php://input');
        if (isset($postRequest)){
            $jsonContent = json_decode($postRequest);
            $startInt = $jsonContent->startValue;
            $endInt = $jsonContent->endValue;

            // run calculation and send result in response
            $result = $this->fizzBuzz->calculate($startInt, $endInt);
            $calculationResult = new JsonResponse($result);
            return $calculationResult;
        }
        else {
            return new JsonResponse('');
        }
    }
}