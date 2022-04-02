const Flight = require('../models/flight');
// client sees 
module.exports = {
    index,
    create,
    new: newFlight,
    show
}
// functions begins:
function index(req, res) {
    Flight.find({}, function (err, flights) { // finding model
        res.render('flights/index', {
            flights,
            title: 'Flights Schedules'
        });
    }).
        sort({ departs: 'ascending' })
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights'); //responds
    })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {
        title: 'Flights Schedules',
        departsDate
    });
}
function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        console.log(`show ${req.params.id}`); // params.ID = i.d.
        res.render('flights/show', {
            title: 'Flights Schedules', //might change
            flight
        });
    });
}