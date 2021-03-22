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
  router.Use(static.Serve("/", static.LocalFile("./views", true)))

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
  api.POST("/fizzBuzz/:start/:end", FizzBuzzCalc)

  // Start and run the server
  router.Run(":3000")
}

//FizzBuzz calculation
//TODO: Return json response & code refactoring
func FizzBuzzCalc(c *gin.Context) {
    a, err := strconv.ParseInt(c.Param("start")[0:], 10, 64);
    if err != nil {
      c.JSON(http.StatusOK, "typeerror")
    }

    n, err1 := strconv.ParseInt(c.Param("end")[0:], 10, 64);
    if err1 != nil {
      c.JSON(http.StatusOK, "typeerror")
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
