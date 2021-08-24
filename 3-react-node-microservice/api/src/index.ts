import express from "express";
import { fizzBuzz } from "./fizzBuzz";
const cors = require("cors");

const app = express();
app.use(cors());
// Implement API

app.get("/fizzBuzz", (req, res) => {
  if (req.query.start && req.query.end) {
    res.send(
      fizzBuzz(
        parseInt(req.query.start.toString()),
        parseInt(req.query.end.toString())
      )
    );
  } else {
    throw new Error("Invalid input.");
  }
});

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`);
});
