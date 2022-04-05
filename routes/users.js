const express = require("express");
const router = express.Router();
const arrivalsCtrl = require("../controllers/arrivals");

router.post("/flights/:id/arrival", arrivalsCtrl.create);
// the end 
module.exports = router;