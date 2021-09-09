import express, { Request, Response } from 'express'
import { fizzBuzz } from './fizzBuzz'
import cors from 'cors'

const app = express()
app.use(cors())

const jsonResponse = async (req: Request, res: Response) => {
  let start = req.query.a as any;
  let end = req.query.b as any;
  const result = await fizzBuzz(start, end);
  res.json(result);
};

app.get("/", jsonResponse);

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)
})
