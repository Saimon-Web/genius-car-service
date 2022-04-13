import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {

                setError(error.message)
            })
    }


    return (
        <div>
            <div >
                <div className='form-container'>
                    <h2 className='form-title'>Login</h2>
                    <div className='inner-box'>

                        <form action="" className='form-box' onSubmit={handleUserSignIn}>
                            <div className="input-group">
                                <label htmlFor="email" >Email</label> <br />
                                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password" >Password</label> <br />
                                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                            </div>
                            <p className='text-danger'>{error}</p>
                            <input className='form-submit' type="submit" value="Login" />
                        </form>

                    </div>
                    <p className='paragraph'>New to Genius Car Service? <Link className='link' to='/register'>Create a new account</Link></p>
                </div>


                <div className='background-container'></div>



            </div>
        </div>
    );
};

export default Login;