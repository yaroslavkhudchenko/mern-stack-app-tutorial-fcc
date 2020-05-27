import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)


export const ExercisesList = () => {
    const [exercisesListHook, setStateHook] = useState({ exercises: [] })

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        setStateHook({
            exercises: exercisesListHook.exercises.filter(el => el._id !== id) // filter to return only those which have not this 'id'
        })
    }
    const exerciseList  = () => {
        return exercisesListHook.exercises.map(exercise => <Exercise exercise={exercise} deleteExercise={deleteExercise} key={exercise.id}></Exercise>)
    }
    useEffect(()=>{
        
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                setStateHook({
                    exercises: res.data
                })
            })
            .catch(error => console.log(`error ${error}`))
        
        
    }, [])
    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}
    
