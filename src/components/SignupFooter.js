import React from 'react';
import '../assets/css/signupFooter.css'

const SignupFooter = () => {
  return (
    <footer className='signup-footer'>
      <div className='footer-links'>
        <a href='#' className='footer-link'>Official Nintendo Website</a>
        <a href='#' className='footer-link'>Nintendo Account User Agreement</a>
        <a href='#' className='footer-link'>Nintendo Privacy Policy</a>
        <a href='#' className='footer-link'>Help</a>
      </div>
      <div className='footer-language'>
        <span>English (US)</span>
      </div>
      <div className='footer-copy'>
        <small>&copy; Nintendo</small>
      </div>
    </footer>
  );
}

export default SignupFooter;
