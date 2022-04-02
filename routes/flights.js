var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET /flights list */
router.get('/', flightsCtrl.index);
/* GET (fill out the form) */
router.get('/new', flightsCtrl.new);
/* GET - lists flight information */
router.get('/:id', flightsCtrl.show);
/* POST new flight listings */
router.post('/', flightsCtrl.create);

module.exports = router;

