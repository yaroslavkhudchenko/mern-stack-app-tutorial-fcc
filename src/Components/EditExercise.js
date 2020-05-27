import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export const EditExercise = (props) => {

    const [editExerciseState, setStateHook] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: ['w','s']
    })

    const onChangeUsername = (e) => {
        setStateHook({
            ...editExerciseState,
            username: e.target.value
        });
    }

    const onChangeDescription = (e) => {
        setStateHook({
            ...editExerciseState,
            description: e.target.value
        });
    }

    const onChangeDuration = (e) => {
        setStateHook({
            ...editExerciseState,
            duration: e.target.value
        });
    }

    const onChangeDate = (date) => {
        setStateHook({
            ...editExerciseState,
            date: date
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: editExerciseState.username,
            description: editExerciseState.description,
            duration: editExerciseState.duration,
            date: editExerciseState.date,
        };

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/update/' + props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/exercises/' + props.match.params.id)
            .then(res => {
                setStateHook({
                    ...editExerciseState,
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date)
                })
                console.log('loaded wwwwwwwwwwwwwwwwwwwwwwww ')
                console.log(props.match.params.id)
                
            })
            .catch(function (error) {
                console.log(error);
            })

            console.log('edit state between')
            console.log(editExerciseState)

  
        axios.get('http://localhost:5000/users/')
            .then(res => {
                setStateHook({
                    users: res.data.map(user => user.username) 
                })
            })
            .catch((error) => {
                console.log(error);
            })  
    },[])
    useEffect(()=>{
        console.log('effect changed state in edit exersice hehe');
        console.log(editExerciseState);
    })
    return(
        <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select useref="userInput"
                        className="form-control"
                        value={editExerciseState.username || ''}
                        onChange={onChangeUsername}>
                        {
                            editExerciseState.users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user || ''}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={editExerciseState.description || ''}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={editExerciseState.duration || ''}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <DatePicker
                        selected={editExerciseState.date}
                        onChange={onChangeDate}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
