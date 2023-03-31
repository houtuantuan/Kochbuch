const express = require('express')
const app = express()
// const cors = require('cors');
// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/Kochbuch', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

module.exports = app
