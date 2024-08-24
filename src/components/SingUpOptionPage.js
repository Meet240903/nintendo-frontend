import React from 'react'
import '../assets/css/signupOption.css'
import kidsImg from '../assets/images/liginsiginSection/entrance_child.png'
import elderImg from '../assets/images/liginsiginSection/entrance_general.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SingUpOptionPage = () => {
    return (
        <>
            <div className='signup-option-container'>
                <h4>Nintendo Account</h4>
                <div className='signup-option-content'>
                    <Link to='/child-account' style={{ textDecoration: 'none', color: '#000' }}>
                        <div className='option-div'>
                            <img src={kidsImg} className='kids-img' alt='kids-img' />
                            <p>For users up to age 12</p>
                            <FontAwesomeIcon className='option-icon' icon={faChevronCircleRight} />
                        </div>
                    </Link>
                    <Link to='/sign-up' style={{ textDecoration: 'none', color: '#000' }}>
                        <div className='option-div'>
                            <img src={elderImg} className='elder-img' alt='elder-img' />
                            <p>For users age 13 and older</p>
                            <FontAwesomeIcon icon={faChevronCircleRight} className='option-icon' />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SingUpOptionPage
