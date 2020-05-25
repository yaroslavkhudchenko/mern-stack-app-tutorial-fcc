const router = require('express').Router();// import Router from express

let User = require('../models/user.model'); // import mongoose model

// route => handles imcoming http get requests /users
router.route('/').get((req, res) => {
    User.find() // get list of all the users from mongodb database 
        .then(user => res.json(user)) // in json
        .catch(err => res.status(400).json('Error: ' + err)); // if error return 400 with err message
});

// route => if url /users/add run this post(if post only)
router.route('/add').post((req, res) => {

    const username = req.body.username; // get username - to check how

    const newUser = new User({username}); // create the User with the given username

    newUser.save() // save to databse
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err)); // if error return 400 with err message
});

module.exports = router; // export router