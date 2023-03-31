// STEP THREE AFTER db.js, index.js and app.js IS to create routes.js

const { Router } = require('express');
const controller = require('../controller/controller');
const router = Router();


const cors = require('cors');
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());


router.get('/', controller.getall);


module.exports = router;