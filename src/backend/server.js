const express = require('express')
// const cors = require('cors');

const app = express()
const routes = require('./routes/routes')
const bodyParser = require("body-parser")

app.use('/home', routes);



app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: true }))



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })


module.exports = app;