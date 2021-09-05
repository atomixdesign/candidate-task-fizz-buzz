import express from 'express'
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Implement API

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)

  app.post('/', (req, res) => {
    
    const startNo = parseInt(req.body.startNo)
    const endNo = parseInt(req.body.endNo)

    var returnString = "";
    for (let i = startNo; i <= endNo; i++) {
      // ternery operation for identify value fizz, buzz or fizzbuzz 
      returnString += (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz(" + i + "), " : (i % 5 === 0) ? "Buzz(" + i + "), " : (i % 3 === 0) ? "Fizz(" + i + "), " : ""
    }


    res.send(returnString);
  });

})
