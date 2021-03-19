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
        // header cors stuff for the purpose of localhost testing this exercise
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        
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