import express from "express";
import { fizzBuzz } from "./fizzBuzz";

const app = express();

app.use(express.json());
// Implement API

app.use("/fizzbuzz", async (req, res) => {
  try {
    const { start, end } = req.body;
    const response = fizzBuzz(parseInt(start), parseInt(end));
    res.json(response);
  } catch (err) {
    res.send(err.message);
  }
});
app.use("/", (req, res) => res.send("FizzBuzz Server"));

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`);
});
