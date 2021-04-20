package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "encoding/json"
)

type Input struct {
    Start int `json:"start"`
    End int `json:"end"`
}

func main() {
    // Set the router as the default one with Gin
    router:= gin.Default()

    // Setup route group for the API
    api:= router.Group("/api")

    //call API post function
    api.POST("/fizzBuzz", FizzBuzzCalc)

    // Start and run the server
    router.Run(":5000")
}

//FizzBuzz calculation
func FizzBuzzCalc(c * gin.Context) {
    errormessage:= "Input is required"
    jsonData,
    err:= c.GetRawData()
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H {
            "error": errormessage,
        })
    }
    input:= Input {}
    json.Unmarshal(jsonData, & input)
    start:= input.Start;
    end:= input.End;
    result, err := fizzBuzz(start, end)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H {
            "error": errormessage,
        })
    } else {
        c.JSON(http.StatusOK, gin.H {
            "message": result,
        })
    }
}
