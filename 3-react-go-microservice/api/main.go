package main

import (
  "net/http"
  "github.com/gin-gonic/contrib/static"
  "github.com/gin-gonic/gin"
  "encoding/json"
)

type Input struct {
  Start int `json:"start"`
  End int `json:"end"`
}

func main() {
  // Set the router as the default one with Gin
  router := gin.Default()

  //frontend static files
  router.Use(static.Serve("/", static.LocalFile("../../public", true)))

  // Setup route group for the API
  api := router.Group("/api")
  {
    api.GET("/", func(c *gin.Context) {
      c.JSON(http.StatusOK, gin.H {
        "message": "pong",
      })
    })
  }

 //call API post function
  api.POST("/fizzBuzz", FizzBuzzCalc)

  // Start and run the server
  router.Run(":5000")
}

//FizzBuzz calculation
func FizzBuzzCalc(c *gin.Context) {
    errormessage := "Input is required"
    jsonData, err := c.GetRawData()
    if err != nil {
      c.JSON(http.StatusBadRequest, gin.H{"error": errormessage})
    }
    input  := Input{}
    json.Unmarshal(jsonData, &input)

    start := input.Start;
    end := input.End;
    fizz := "Fizz"
    buzz := "Buzz"
    defValue := "-"

    var output map[int]string
    output = make(map[int]string)
    for i := start; i <= end; i++ {
    	if i % 3 == 0 && i % 5 == 0 {
        output[int(i)] = fizz + buzz
    	} else if i % 3 == 0 {
        output[int(i)] = fizz
    	} else if i % 5 == 0 {
        output[int(i)] = buzz
    	} else {
    		output[int(i)] = defValue
    	}
    }

    c.JSON(http.StatusOK, gin.H{"message": output})
}
