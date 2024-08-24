import React from 'react'
import '../assets/css/childAccount.css'
import figureImg from '../assets/images/liginsiginSection/figure2.png'
import { Link } from 'react-router-dom'

const ChildAccountPage = () => {
    return (
        <>
            <div className='child-account-section'>
                <div className='child-account-content'>
                    <h4>Child Accounts</h4>
                    <img src={figureImg} className='figure-img' alt='figure-img' />
                    <p>Please have a parent or guardian look at this.</p>
                </div>
                <div className='process-section'>
                    <div className='text-center my-4'>
                        <Link to='/create-child-account' style={{textDecoration:'none'}}><button className='proccess-section-btn'>Proceed</button></Link>
                    </div>
                    <h6>What is an account for a child?</h6>
                    <p>An account for a child is a Nintendo Account that allows users under 13 (and up to 17) years of age to use Nintendo Account services.</p>
                    <p>When a child shops via the Internet or on a smart-device application, information will be sent to the e-mail address registered for the parent's or guardian's account.</p>
                </div>
            </div>
        </>
    )
}

export default ChildAccountPage
