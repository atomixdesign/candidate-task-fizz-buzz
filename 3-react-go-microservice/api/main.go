package main

import (
	"log"
	"net/http"
	"encoding/json"
	"strconv"
)

type ErrorType struct {
    Error string `json:"error"`
}

func returnFizzBuzz(w http.ResponseWriter, r *http.Request){
    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    errormessage := "invalid inputs"
    start := r.URL.Query().Get("start")
    end := r.URL.Query().Get("end")
    intStart, err := strconv.Atoi(start)
    if err != nil {
        json.NewEncoder(w).Encode(ErrorType{errormessage})
        return
    }
    intEnd, err := strconv.Atoi(end)
    if err != nil {
       json.NewEncoder(w).Encode(ErrorType{errormessage})
       return
    }
    result := fizzBuzz(intStart, intEnd)
    json.NewEncoder(w).Encode(result)
}

func handleRequests() {
    http.HandleFunc("/fizz-buzz", returnFizzBuzz)
    log.Fatal(http.ListenAndServe(":8000", nil))
}

func main() {
	log.Print("Server listing on http://127.0.0.1:8000")
	handleRequests()
}