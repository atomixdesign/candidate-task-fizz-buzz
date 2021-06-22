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
        // Set CORS policy as the app is decoupled
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header('Access-Control-Allow-Methods: GET');
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        // Get data from route
        $request = file_get_contents('php://input');
        $jsonRequest = json_decode($request);

        // Deconstructing request
        $start = $jsonRequest->start;
        $end = $jsonRequest->end;

        // Returning FizzBuzz
        $returnObj = $this->fizzBuzz->calculate($start, $end);
        return new JsonResponse($returnObj);
    }
}