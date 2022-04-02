// responds to clients requests
var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

//several ways to handle different routes
//HTTP functions thats called to create a route:
/* GET /flights lists */
router.get('/', flightsCtrl.index);
/* GET (fill out the form information) */
router.get('/new', flightsCtrl.new);
/* GET - lists incoming flight information */
router.get('/:id', flightsCtrl.show);
/* POST new flight listings */
router.post('/', flightsCtrl.create);

module.exports = router;

