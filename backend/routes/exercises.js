const router = require('express').Router();// import Router from express

let Exercise = require('../models/exercise.model'); // import mongoose model

// route => handles imcoming http get requests /users
router.route('/').get((req, res) => {
    Exercise.find() // get list of all the exercises from mongodb database 
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

// get the exercise with the given id(request get)
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete the exercise with the given id(request delete)
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update exercise with the given id(request post)
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => { // if found replace db data for given positions with the new data
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            // save new data to db
            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router; // export router