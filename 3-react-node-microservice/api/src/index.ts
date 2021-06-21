import express from 'express';
import { fizzBuzz } from './fizzBuzz';

// Setting up express server with middleware to parse json
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set home route to retreiver information from request and sent that to the fizzBuzz function
app.use('/', (req, res): void => {
  const { start, end } = req.body;
  try {
    const result = fizzBuzz(start, end);
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
})

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`)
});
