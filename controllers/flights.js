const Flight = require('../models/flights');

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights', { flights });
    });
};

function newFlight(req, res) {
    //respond with a form for entering a new flight
    res.render('flights/new');
    res.redirect('/flights');
};

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        // for now, redirect right back to new.ejs
        res.redirect('/flights');
    });
};