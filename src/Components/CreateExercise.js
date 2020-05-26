import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';

export const CreateExercise = () => {
    const [state, setStateHook] = useState({
        username: '21124',
        description: '',
        duration: 0,
        date: new Date(),
        users: ['21124']
    })

    const onChangeUsername = (e) => {
        setStateHook({
            ...state,
            username: e.target.value
        });
        console.log('state as it is')
        console.log(state);
    }
    const onChangeDescription = (e) => {
        let d = state;
        state.description = e.target.value;

        setStateHook({d});
        console.log('state as it is')
        console.log(state);
    }
    const onChangeDuration = (e) => {
        setStateHook({
            ...state,
            duration: e.target.value
        });
    }
    const onChangeDate = (date) => {
        setStateHook({
            ...state,
            date: date
        });
        console.log('state as it is')
        console.log(state);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: state.username,
            description: state.description,
            duration: state.duration,
            date: state.date,
        };
        console.log(exercise);
        window.location = '/';
    }
   /*  useEffect(()=>{
        setStateHook({
            ...state,
            users: ['test userAr'],
            username: 'test userAr'
        })
    }, []); */

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>


            
                <div className="form-group">
                    <label>Username: </label>
                    <select useref="userInput"
                        required
                        className="form-control"
                        value={state.username}
                        onChange={onChangeUsername}>
                        {
                            state.users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
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
                        value={state.description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={state.duration}
                        onChange={onChangeDuration}
                    />
                </div>




                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={state.date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
