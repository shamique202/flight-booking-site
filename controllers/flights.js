const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
// the client sees this 
module.exports = {
    new: newFlight,
    index,
    create,
    show,
};
// functions begin here: 
function newFlight(req, res) {
    res.render("flights/new");
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render("flights/index", { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render("flights/show", { title: "Flight info", flight, tickets });
        });
    });
}

function create(req, res) {
    //check to see if depart was left empty so it can be set to undefined to allow schema to be initalized 
    req.body.departs = req.body.departs || undefined;
    // remove whitespace at start, also at the end of airline
    req.body.airline.trim();
    const flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors 
        if (err) return res.render("flights/new");
        // redirect right back to new.ejs 
        res.redirect("/flights");
    });
}