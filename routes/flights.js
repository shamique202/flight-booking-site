var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

