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
        $startInt = $_POST['startValue'];
        $endInt = $_POST['endValue'];

        // run calculation and send result in response
        $result = $this->$fizzBuzz->calculate($startInt, $endInt);
        $response = new JsonResponse($result);
        $response->send();
    }
}