const router = require('express').Router();// import Router from express

let User = require('../models/user.model'); // import mongoose model

// route => handles imcoming http get requests /users
router.route('/').get((req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => req.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; // export router