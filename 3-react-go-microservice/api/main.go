package main

import (
  "net/http"
  "fmt"
  "strconv"
  "github.com/gin-gonic/contrib/static"
  "github.com/gin-gonic/gin"
)

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
//TODO: Return json response & code refactoring
func FizzBuzzCalc(c *gin.Context) {
    errormessage := "Input is required"
    a, err := strconv.ParseInt(c.PostForm("start")[0:], 10, 64);
    if err != nil {
      c.JSON(http.StatusBadRequest, gin.H{"error": errormessage})
    }

    n, err := strconv.ParseInt(c.PostForm("end")[0:], 10, 64);
    if err != nil {
      c.JSON(http.StatusBadRequest, gin.H{"error": errormessage})
    }
    
    fizz := "fizz"
    buzz := "buzz"
    for i := a; i <= n; i++ {
    	if i % 3 == 0 && i % 5 == 0 {
    		fmt.Println(i, fizz + buzz)
    	} else if i % 3 == 0 {
    		fmt.Println(i, fizz)
    	} else if i % 5 == 0 {
    		fmt.Println(i, buzz)
    	} else {
    		fmt.Println(i)
    	}
    }
}
