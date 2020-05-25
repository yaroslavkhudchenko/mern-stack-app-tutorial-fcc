const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({ // create new schema
    username: { // field with validations
        type:String,
        required:true,
        unique:true,
        trim:true, // white space at the end
        minlength:3 // min length for name
    }
}, {
    timestamps:true // stamps when created/modified
});

const User = mongoose.model('User', userSchema);

module.exports = User; // export User variable