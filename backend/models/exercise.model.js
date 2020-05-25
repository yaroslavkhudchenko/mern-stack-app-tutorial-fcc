const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({ // create new schema
    // fields
    username: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true // stamps when created/modified
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise; // export Exercise variable