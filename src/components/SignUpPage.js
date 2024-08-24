import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleImg from '../assets/images/liginsiginSection/googleImg.png';
import '../assets/css/signupPage.css';
import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const years = Array.from({ length: 100 }, (_, i) => ({ value: 2024 - i, label: 2024 - i }));
const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
];
const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));

const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer_not_to_say', label: 'Prefer not to say' },
];

const countries = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'Japan', label: 'Japan' },
    { value: 'China', label: 'China' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Switzerland', label: 'Switzerland' },
    { value: 'South Korea', label: 'South Korea' },
    { value: 'New Zealand', label: 'New Zealand' },
];

const timezones = [
    { value: 'IST', label: 'Indian Standard Time (IST)' },
    { value: 'PST', label: 'Pacific Standard Time (PST)' },
    { value: 'EST', label: 'Eastern Standard Time (EST)' },
    { value: 'CET', label: 'Central European Time (CET)' },
    { value: 'JST', label: 'Japan Standard Time (JST)' },
];

const SignUpPage = () => {
    const [type, setType] = useState('password')
    const [ctype, setcType] = useState('password')

    const handlePasswordClick = () =>{
        if(type === 'password'){
            setType('text');
        }else{
            setType('password')
        }
    }
    const handleCPasswordClick = () =>{
        if(ctype === 'password'){
            setcType('text');
        }else{
            setcType('password')
        }
    }
    return (
        <>
            <div className='signup-section-container'>
                <h4 className='text-center'>Create a Nintendo Account</h4>
                <div className='create-account-selection'>
                    <small>If you have an account for one of the following services, it's even easier to create a Nintendo Account.</small>
                    <div className='row mx-0 my-3'>
                        <div className='col-md-6 create-google-btn-div'>
                            <button className='create-google-btn'>Google</button>
                            <img src={googleImg} className='create-google-img' alt='google-img' />
                        </div>
                        <div className='col-md-6 create-apple-btn-div'>
                            <button className='create-apple-btn'>Sign in with Apple</button>
                            <FontAwesomeIcon icon={faApple} className='create-apple-icon' />
                        </div>
                    </div>
                </div>
                <div className='account-form-section'>
                    <p>If you don't have an account with one of the services listed above or would rather not use an existing account to create your Nintendo Account, please enter your information below.</p>
                    <form>
                        <div className='form-row'>
                            <label htmlFor='nickname'>Nickname</label>
                            <input type='text' id='nickname' name='nickname' required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor='email'>Email address</label>
                            <input type='email' id='email' name='email' required />
                        </div>
                        <div className='form-row'>
                            <label htmlFor='password'>Password</label>
                            <input type={type} id='password' name='password' required />
                            <FontAwesomeIcon icon={type === 'password' ? faEye : faEyeSlash } className='open-eye' onClick={handlePasswordClick} />
                        </div>
                        <div className='form-row'>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <input type={ctype} id='confirm-password' name='confirm-password' required />
                            <FontAwesomeIcon icon={ctype === 'password' ? faEye : faEyeSlash } className='open-eye' onClick={handleCPasswordClick} />
                        </div>
                        <div className='form-row'>
                            <label>Date of Birth</label>
                            <div className='dob-selects'>
                                <select name='year' className='year-dropdown' required>
                                    <option value=''>Year</option>
                                    {years.map((year) => (
                                        <option key={year.value} value={year.value}>{year.label}</option>
                                    ))}
                                </select>
                                <select name='month' required>
                                    <option value=''>Month</option>
                                    {months.map((month) => (
                                        <option key={month.value} value={month.value}>{month.label}</option>
                                    ))}
                                </select>
                                <select name='day' required>
                                    <option value=''>Day</option>
                                    {days.map((day) => (
                                        <option key={day.value} value={day.value}>{day.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='gender'>Gender</label>
                            <select id='gender' name='gender' required>
                                <option value=''>Select Gender</option>
                                {genders.map((gender) => (
                                    <option key={gender.value} value={gender.value}>{gender.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='country'>Country</label>
                            <select id='country' name='country' required>
                                <option value=''>Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.value} value={country.value}>{country.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='form-row'>
                            <label htmlFor='timezone'>Time Zone</label>
                            <select id='timezone' name='timezone' required>
                                <option value=''>Select Time Zone</option>
                                {timezones.map((timezone) => (
                                    <option key={timezone.value} value={timezone.value}>{timezone.label}</option>
                                ))}
                            </select>
                        </div>
                        <hr />
                        <div className='form-footer'>
                            <input type='checkbox' id='stay-in-touch' name='stay-in-touch' />
                            <label htmlFor='stay-in-touch'>
                                <small>I'd like to stay in touch with Nintendo via e-mail to receive special offers, game news, and more. For additional information about advertising and other data usage preferences, please refer to the ‘Privacy and Other Settings’ (which are located in your Nintendo Account settings) after you’ve created your account.</small>
                            </label>
                        </div>
                        <div className='form-footer'>
                            <input type='checkbox' id='user-agreement' name='user-agreement' />
                            <label htmlFor='user-agreement'>
                                <small>By checking the box and selecting [Submit] below, you agree to the NINTENDO ACCOUNT USER AGREEMENT.</small>
                            </label>
                        </div>
                        <div className='form-footer'>
                            <input type='checkbox' id='privacy-policy' name='privacy-policy' />
                            <label htmlFor='privacy-policy'>
                                <small>By checking the box and selecting [Submit] below, you acknowledge that you have read the NINTENDO PRIVACY POLICY.</small>
                            </label>
                        </div>
                        <hr />
                        <div className='form-btn-div'>
                            <button className='form-submit-btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;
