var express = require('express');
var router = express.Router();
const arrivalsCtrl = require('../controllers/arrivals');

router.post('/flights/:id/arrivals', arrivalsCtrl.create)

module.exports = router;