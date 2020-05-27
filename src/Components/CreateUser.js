import React,{ useState } from 'react';

export const CreateUser = () => {
    // set the state and function to change the state
    const [createUserState, setStateHook] = useState({username: ''})

    const onChangeUsername = (e) => {

        setStateHook({
            username:e.target.value
        })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: createUserState.username
        };
        console.log(newUser);

        setStateHook({
            username: ''
        })
    }

    return(
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={createUserState.username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}