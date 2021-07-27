const express = require("express");
const router = express.Router();
const app = express();

app.get('/api/inputs', function (req, res) {
    const start = req.query.start;
    const end = req.query.end;
    const result = []
    if (start && end) {
        for (let i = start; i <= end; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result.push({'number': i, value: 'FizzBuzz'});
            } else if (i % 3 === 0) {
                result.push({'number': i, value: 'Fizz'});
            } else if (i % 5 === 0) {
                result.push({'number': i, value: 'Buzz'});
            } else {
                result.push({'number': i, value: '-'});
            }
        }
    }


    res.send({
        result
    })
})

app.listen(8000, () => {
    console.log("Started on PORT 8000");
})