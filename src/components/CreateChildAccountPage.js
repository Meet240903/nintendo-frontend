import React from 'react'
import '../assets/css/createChildAccountPage.css'
import figure2Img from '../assets/images/liginsiginSection/figure1.png'
import { Link } from 'react-router-dom'

const CreateChildAccountPage = () => {
    return (
        <>
            <div className='create-child-account-section'>
                <h4>Create an account for a child</h4>
                <p>A child account can be created and managed through a parent or guardian's account.</p>
                <div className='create-child-account-content'>
                    <div className='create-child-img-div'>
                        <img src={figure2Img} className='child-account-img' alt='child-account-img' />
                        <h4>Notifications from Nintendo</h4>
                    </div>
                    <h6>Notifications about the following activity will be sent to your e-mail address:</h6>
                    <p>Restrict spending/purchases on Nintendo Switch eShop and nintendo.com / Get notifications about purchases made in smart-device apps / User agreement updates / Password changes</p>
                </div>
                <p>Do you (the parent or guardian) already have a Nintendo Account or do you want to create a new one?</p>
                <div className='create-child-acc-btns'>
                    <Link to='/sign-in'><button className='already-account'>Already have an account</button></Link><br />
                    <Link to='/sign-up'><button className='create-new-account'>Create a new account</button></Link>
                </div>
            </div>
        </>
    )
}

export default CreateChildAccountPage
