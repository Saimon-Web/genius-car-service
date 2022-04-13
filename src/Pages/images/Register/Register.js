import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'


import useFirebase from '../../../hooks/useFirebase';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const { user, signInWithGoogle } = useFirebase();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }


    // const [user, setUser] = useState('');


    if (user) {
        navigate('/')
    }

    const HandlecreateUserEmailPassword = (event) => {
        event.preventDefault();

        // handleSignUpEmail(email, password, confirmpassword)

    }



    return (
        <div>
            <h1>Register</h1>
            <div >
                <div className='form-container'>
                    <h2 className='form-title'>SignUp</h2>
                    <div className='inner-box'>

                        <form action="" className='form-box' onSubmit={HandlecreateUserEmailPassword} >
                            <div className="input-group">
                                <label htmlFor="email" >Email</label> <br />
                                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password" >Password</label> <br />
                                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirm-password" >Confirm Password</label> <br />
                                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                            </div>

                            {/* <p className='text-danger'>{error}</p>
                            <p className='text-primary'>{success}</p> */}

                            <input className='form-submit' type="submit" value="Sign Up" />
                        </form>

                    </div>
                    <p className='paragraph'>Already have an account? <Link className='link' to='/login'>login</Link></p>

                    <button onClick={signInWithGoogle}>Continue with Google</button>
                </div>


                <div className='background-container'></div>



            </div>
        </div >
    );
};

export default Register;