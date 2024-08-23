import React from 'react'
import SectionImg from '../../assets/images/Nintendo_Switch_family_wide_TEST-1.avif'

const GamingSystemSection = () => {
  return (
    <>
      <div className='online-store-container'>
        <h4>Gaming System</h4>
        <img src={SectionImg} className='img-fluid' alt='online-store-img' />
        <div className='row my-5'>
            <div className='col-md-6'>
                <p>Find the perfect Nintendo Switch system for you.</p>
            </div>
            <div className='col-md-6'>
                <button className='gaming-system-btn'>Explore now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default GamingSystemSection
