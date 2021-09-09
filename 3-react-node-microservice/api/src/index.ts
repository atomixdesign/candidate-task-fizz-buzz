import express from "express";
const bodyParser= require("body-parser");
const router=express.Router();
const app = express();
var fizzArraySend: string[]=[];
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

 app.post('/calculate',(req,res)=>{
  const body=req.body;
  var rangeStart=body.rangeStart;
  var rangeEnd=body.rangeEnd;
  fizzArraySend=calculateFizz(rangeStart,rangeEnd);
  res.send(fizzArraySend);
})



app.use("/",router);

function calculateFizz(rangeStart: number,rangeEnd: number) {
  var fizzArray=[];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    switch(true) {
      case (i%3===0 && i%5===0):
        fizzArray.push("FizzBuzz")
        break;
      case i%3===0:
        fizzArray.push("Fizz")
        break;
      case i%5===0:
        fizzArray.push("Buzz")
        break;
      default:
        fizzArray.push("")
    }
}
return fizzArray;
}

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)
})
