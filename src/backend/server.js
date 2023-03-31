const express = require('express')
const cors = require('cors');
const app = express()
const routes = require('./routes/routes')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.use('/home', routes);

module.exports = app;