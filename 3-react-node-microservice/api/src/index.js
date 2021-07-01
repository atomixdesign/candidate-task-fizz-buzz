const express = require("express")

const app = express()

app.use(express.json());

// Implement API
app.post("/", (req, res) => {
  const {min, max} = req.body

  let loopArray = []
  for (let i = min; i <= max; i++) {
     loopArray.push(i)
  }

  
  
  function fizzBuzz(num) {
    
    if (num % 15 === 0) {
      return 'FizzBuzz ';
    }
    else if (num % 5 === 0) {
      return 'Buzz '
    }
    else if (num % 3 === 0) {
      return 'Fizz '
    }
    
    return num    
  }
  
  let fizzbuzzArray = loopArray.map(fizzBuzz)
  console.log(fizzbuzzArray);
   res.json(fizzbuzzArray)
});


app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)
})
