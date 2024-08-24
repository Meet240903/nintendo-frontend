import React from 'react'
import '../assets/css/signupHeader.css'
import nintendoLogo from '../assets/images/nintendu-logo.svg'
import { Link } from 'react-router-dom'

const SignupHeader = () => {
  return (
    <div className='signup-header'>
      <div className='signup-header-logo'>
        <Link to='/'><img src={nintendoLogo} className='img-fluid' alt='nintendo-logo' /></Link>
      </div>
      <p className='signup-header-title'>Nintendo Account</p>
    </div>
  )
}

export default SignupHeader
