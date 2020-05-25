const router = require('express').Router();// import Router from express

let Exercises = require('../models/exercise.model'); // import mongoose model

// route => handles imcoming http get requests /users
router.route('/').get((req, res) => {
    Exercises.find() // get list of all the exercises from mongodb database 
        .then(exercises => res.json(exercises)) // in json
        .catch(err => res.status(400).json('Error: ' + err)); // if error return 400 with err message
});

// route => if url /users/add run this post(if post only)
router.route('/add').post((req, res) => {

    const username = req.body.username; // get username - to check how
    const description = req.body.description; // get description
    const duration = Number(req.body.duration); // get duration
    const date = Date.parse(req.body.date); // get date


    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    }); // create the Exercise with the given values

    newExercise.save() // save to databse
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err)); // if error return 400 with err message
});

module.exports = router; // export router