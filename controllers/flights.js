const Flight = require('../models/flight');

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
    res.render('flights/new');
    res.redirect('/flights');
};

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        // redirects to new.ejs now
        res.redirect('/flights');
    });
};