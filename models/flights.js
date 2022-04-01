// basic database for schema (mongoose)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// models for destinations
const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date

});
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    flightNo: {
        Type: Number,
        Required: true,
        min: 10,
        max: 9999
    },





});




module.exports = mongoose.model('Flight', flightsSchema);