import express from 'express'
import {fizzBuzz} from "./fizzBuzz";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/fizzbuzz',  (req, res) => {
  const x: number = parseInt(req.query.x as string);
  const y: number = parseInt(req.query.y as string);
  res.send(fizzBuzz(x, y));
})

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)
})
