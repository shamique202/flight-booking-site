const mongoose = require('mongoose');
// shortcut for mongoose schema
const Schema = mongoose.Schema;
// my destinations
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    }
});
module.exports = mongoose.model('Flight', flightSchema);