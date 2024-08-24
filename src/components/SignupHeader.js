import React from 'react'
import '../assets/css/signupHeader.css'
import nintendoLogo from '../assets/images/nintendu-logo.svg'

const SignupHeader = () => {
  return (
    <div className='signup-header'>
      <div className='signup-header-logo'>
        <img src={nintendoLogo} className='img-fluid' alt='nintendo-logo' />
      </div>
      <p className='signup-header-title'>Nintendo Account</p>
    </div>
  )
}

export default SignupHeader
