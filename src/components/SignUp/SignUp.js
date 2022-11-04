import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [errorMsg, setErrorMsg] = useState(null);
    const {createUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        console.log(typeof email, typeof password);
        if(password.length<6){
            setErrorMsg('Password Should be more than 6 characters');
            return;
        }
        if(password !== confirm){
            setErrorMsg('Password did not match');
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required/>
                </div>
                <p className='text-error'>{errorMsg}</p>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className=''>Already Have an Account <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;