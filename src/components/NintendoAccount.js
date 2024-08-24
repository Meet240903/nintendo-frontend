import React from 'react';
import '../assets/css/nintendoAccount.css'
import { Link } from 'react-router-dom';

const NintendoAccount = () => {
    return (
        <div className='nintendo-account-container'>
            <h4>Nintendo Account</h4>
            <div className='nintendo-content'>
                <p className='nintendo-content-p'>Sign in to your Nintendo Account or create a new account.</p>
                <div className='row mx-0 nintendo-row-content'>
                    <div className='col-md-6 my-4'>
                        <p className='fw-bold'>For existing users</p>
                        <Link to='/sign-in'><button className='nintendo-account-btn'>Sing in</button></Link>
                    </div>
                    <div className='col-md-6 my-4'>
                        <p className='fw-bold'>Don't have an account?</p>
                        <Link to='/signup-option'><button className='nintendo-account-btn'>Create a Nintendo account?</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NintendoAccount;
