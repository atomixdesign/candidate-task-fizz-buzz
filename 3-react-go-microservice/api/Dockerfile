## go application
FROM golang:1.12.0-alpine3.9
## create an /app directory within our image that will hold our application source files
RUN mkdir /app
## copy from root directory into /app directory
ADD . /app

## specify to execute any further commands inside our /app directory
WORKDIR /app

## Running dependencies
RUN apk update && apk add git && go get -u github.com/gin-gonic/gin

## run go build | exec Go program
RUN go build -o main .

EXPOSE 5000

## start command which kicks off
CMD ["/app/main"]
