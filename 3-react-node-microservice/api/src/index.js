const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/results');

app.use(express.json());
app.use(cors());
app.use(route);

// Implement API

app.listen(8000, () => {
  console.log(`Server listening on http://127.0.0.1:8000`);
})
