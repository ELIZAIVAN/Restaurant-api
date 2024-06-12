const mongoose  = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Locality: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Cuisine: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
    },
    Votes: {
        type: Number,
    },
    Cost: {
        type: Number,
    }

})

module.exports = mongoose.model('Restaurant',restaurantSchema)