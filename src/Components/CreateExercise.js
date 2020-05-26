import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';

export const CreateExercise = () => {
    const [state, setState] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    })

    const onChangeUsername = (e) => {
        setState({
            username: e.target.value
        });
    }
    const onChangeDescription = (e) => {
        setState({
            description: e.target.value
        });
    }
    const onChangeDuration = (e) => {
        setState({
            duration: e.target.value
        });
    }
    const onChangeDate = (date) => {
        setState({
            date: date
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };
        console.log(exercise);
        window.location = '/';
    }
    useEffect(()=>{
        setState({
            users: ['test userAr'],
            username: 'test userVa'
        })
    }, []);

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
