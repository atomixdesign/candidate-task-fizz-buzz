1. Install node and its dependencies  - FE build
'react-scripts' is not recognized as
to fix: npm install react-scripts --save
react-scripts start
npm start

2. Install golang and its dependencies - Reference https://golang.org/doc/install
    Chosen Gin - http web framework - faster and productivity

    $go get -u github.com/gin-gonic/gin  

    $go get -u github.com/gin-gonic/contrib/static  

3. Generate go.mod file in $GOPATH - go mod init / go mod tidy  

4. Run go run main.go in the terminal  

#22/03/2021 - Created API with post - form data processing  
1. Create FE script - in views/js/index.html (later will be replaced with react)  
2. Created main.go & fizzBuzz calculation function (with formdata)  
3. API - curl -X POST http://localhost:3000/api/fizzBuzz/1/100  
4. Terminal:  
AtomixFizzBuzz\3-react-go-microservice\api>go run main.go  
[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.  
 - using env:   export GIN_MODE=release  
 - using code:  gin.SetMode(gin.ReleaseMode)  

[GIN-debug] GET    /api/                     --> main.main.func1 (4 handlers)  
[GIN-debug] POST   /api/fizzBuzz/:start/:end --> main.FizzBuzzCalc (4 handlers)  
[GIN-debug] Listening and serving HTTP on :3000  
1  
2  
3 fizz  
4  
5 buzz  
6 fizz  
7  
8  
9 fizz  
10 buzz  
11  
12 fizz  
13   
14  
15 fizzbuzz  

#23/03/2021 - Created React FE to call Golang API service  
1. Edited form in App.tsx to call the API  
2. Updated the method to post and client call in golang api
3. set proxy to localhost:5000 for the golang and added to package.json


UI
npm install semantic-ui-react semantic-ui-css
