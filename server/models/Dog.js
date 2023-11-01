const mongoose = require('mongoose');

// Create object to hold model
let DogModel = {};

// Create Schema for dog
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    breed: {
        type: String,
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        min: 0,
        required: true,
    },

    createdDate: {
        type: Date,
        default: Date.now,
    },

});

// Set up and export model
DogModel = mongoose.model('Dog', DogSchema);
module.exports = DogModel;