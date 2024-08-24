import React from 'react'
import '../../assets/css/homepagecss/onlineStoreSection.css'
import onlineStoreImg from '../../assets/images/MNS_desktop_TEST.png'

const OnlineStoreSection = () => {
  return (
    <>
      <div className='online-store-container'>
        <h4>Online Store</h4>
        <img src={onlineStoreImg} className='img-fluid' alt='online-store-img' />
        <div className='row my-5 mx-0'>
            <div className='col-md-10'>
                <p>Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.</p>
            </div>
            <div className='col-md-2'>
                <button className='online-store-btn'>Start Shopping</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default OnlineStoreSection
