import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className=''>New to ema-jhon <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;