const { Mongoose } = require("mongoose");

const mongoose = require('mongoose'); // allows us to create a model which we can use to interact with the database easily

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);