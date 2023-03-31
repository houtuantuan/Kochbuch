// STEP THREE AFTER db.js, index.js and app.js IS to create routes.js

const { Router } = require('express');
const controller = require('../controller/controller');
const router = Router();

router.get('/', controller.getall);

module.exports = router;