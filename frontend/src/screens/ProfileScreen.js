import React, { useState, useEffect } from 'react';
import { logout, update } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const handleLogout = () => {
        dispatch(logout());
        props.history.push('/signin');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(update({ userId: userInfo._id, email, name, password }));
    };

    const userUpdate = useSelector(state => state.userUpdate);
    const { loading, success, error } = userUpdate;


    useEffect(() => {
        if (userInfo) {
            console.log(userInfo.name);
            setEmail(userInfo.email);
            setName(userInfo.name);
            setPassword(userInfo.password);
        }
        return () => {

        };
    }, [userInfo])
}

return (
    <div className="profile">
        <div className="profile-info">
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>User Profile</h2>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {success && <div>Profile Saved Successfully</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="name" name="name" id="name" value={name} onChange={() => setName(e.target.name)} />
                        </li>
                        <li>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" id="email" value={email} onChange={() => setEmail(e.target.name)} />
                        </li>
                        <li>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" id="password" value={name} onChange={() => setPassword(e.target.name)} />
                        </li>
                        <li>
                            <button type="submit" className="button primary"> Update</button>
                        </li>
                        <li>
                            <button type="submit" onClick={handleLogout} className="button secondary full-width"> Logout</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
)

export default ProfileScreen;