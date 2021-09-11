import express, { Request, Response} from 'express';
import { validationResult, query } from 'express-validator';
import { fizzBuzz } from './fizzBuzz';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json());

app.get('/fizz-buzz',
    query('start').isInt(),
    query('end').isInt(),
    ((req: Request<any, any, any, { start: string, end: string}>, res: Response) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
      }
      const { start, end } = req.query;
      const fizzBuzzData = fizzBuzz(parseInt(start), parseInt(end));
      return res.status(200).json(fizzBuzzData);
    })
)

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)
})
