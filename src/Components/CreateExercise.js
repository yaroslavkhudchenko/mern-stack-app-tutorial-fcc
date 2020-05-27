import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';

export const CreateExercise = () => {
    const [createExerciseState, setStateHook] = useState({
        username: '21124',
        description: 'w',
        duration: 0,
        date: new Date(),
        users: ['21124']
    })

    const onChangeUsername = (e) => {
        setStateHook({
            ...createExerciseState,
            username: e.target.value
        });
        console.log('state as it is')
        console.log(createExerciseState);
    }
    const onChangeDescription = (e) => {
        e.persist()
        console.log('start descr change->')
        console.log(createExerciseState);
        
        // debugger;

        createExerciseState.description = e.target.value;
        //setStateHook({description:e.target.value})
        setStateHook({
            ...createExerciseState,
            description : e.target.value
        });

    }
    const onChangeDuration = (e) => {
        setStateHook({
            ...createExerciseState,
            duration: e.target.value
        });
    }
    const onChangeDate = (date) => {
        setStateHook({
            ...createExerciseState,
            date: date
        });
        console.log('state as it is')
        console.log(createExerciseState);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: createExerciseState.username,
            description: createExerciseState.description,
            duration: createExerciseState.duration,
            date: createExerciseState.date,
        };
        console.log(exercise);
        window.location = '/';
    }
    useEffect(()=>{
        setStateHook({
            ...createExerciseState,
            users: ['test userAr'],
            username: 'test userAr',
            description: 'hello there ha ha ha'
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    useEffect(() => {
       console.log('set STATEEEEEEEEEEEEE!!!!!!!!!!!!')
       console.log(createExerciseState)
    }, [createExerciseState]); 
    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>


            
                <div className="form-group">
                    <label>Username: </label>
                    <select useref="userInput"
                        required
                        className="form-control"
                        value={createExerciseState.username}
                        onChange={onChangeUsername}>
                        {
                            createExerciseState.users && createExerciseState.users.map(function (user) {
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
                        value={createExerciseState.description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={createExerciseState.duration}
                        onChange={onChangeDuration}
                    />
                </div>




                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={createExerciseState.date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>

            </form>                
            <div id='dupa' style={{ 'position': 'fixed', 'bottom': '50px' }}>
                {createExerciseState.description}
            </div>

        </div>
    )
}
