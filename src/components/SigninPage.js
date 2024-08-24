import React, { useState } from 'react';
import '../assets/css/signinPage.css'
import passkeyImg from '../assets/images/liginsiginSection/fingerprint.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import googleImg from '../assets/images/liginsiginSection/googleImg.png'
import { Link } from 'react-router-dom';

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Check if both fields have values
    const isFormValid = email !== '' && password !== '';

    return (
        <>
            <div className='signin-page-container'>
                <h4>Nintendo Account</h4>
                <div className='signin-content-section'>
                    <div className='signin-form'>
                        <h4>Sign in with password</h4>
                        <div className='form-group'>
                            <label htmlFor='email'>E-mail address/Sign-in ID</label>
                            <input
                                type='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='E-mail address/Sign-in ID'
                            />
                        </div>
                        <div className='form-group my-5'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                            />
                        </div>
                        <div className='text-center'>
                            <button
                                type='submit'
                                disabled={!isFormValid}
                                className={`signin-page-btn ${isFormValid ? 'active' : 'inactive'}`}
                            >
                                Sign in
                            </button>
                        </div>

                    </div>
                </div>
                <div className='forgot-link'>
                    <a className='forgot-a-tag'>Forgot your password?</a>
                </div>
                <div className='passkey-content-section'>
                    <h4>Passkey Sign-In</h4>
                    <img src={passkeyImg} className='passkey-img' alt='passkey-img' />
                    <p className='my-4'>You can't use a passkey on this device.</p>
                    <button
                        type='submit'
                        className='signin-page-btn inactive'
                    >
                        Sign in
                    </button>
                </div>
                <div className='forgot-link'>
                    <a className='forgot-a-tag'>About Passkeys</a><br />
                </div>
                <div className='forgot-link'>
                    <a className='forgot-a-tag'>Can't use passkey sign-in?</a>
                </div>
                <div className='signin-option-content'>
                    <h4>Sign in with</h4>
                    <div className='google-btn-div'>
                        <button className='google-btn'>Google</button>
                        <img src={googleImg} className='google-img' alt='google-img' />
                    </div>
                    <div className='apple-btn-div'>
                        <button className='apple-btn'>Sign in with Apple</button>
                        <FontAwesomeIcon icon={faApple} className='apple-icon' />
                    </div>
                </div>
                <div className='signin-bottom-creation'>
                    <p>Don't have an account?</p>
                    <Link to='/signup-option'><button className='create-account-btn'>Create a Nintendo Account</button></Link>
                </div>
            </div>
        </>
    );
};

export default SigninPage;
