// const express = require('express')
const app = require('./server')
const port = 4000
require("dotenv").config();
// const cors = require('cors');
// app.use(cors());
// const bodyParser = require("body-parser")

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)