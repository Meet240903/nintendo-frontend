import React from 'react'
import sectionImg1 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/topSectionImgs/sectionImg1.png'
import sectionImg2 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/topSectionImgs/sectionImg2.png'
import sectionImg3 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/topSectionImgs/sectionImg3.avif'
import sectionImg4 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/topSectionImgs/sectionImg4.avif'
import '../../../assets/css/nintendoSwitchOnlineServiceCSSpages/onlineServiceTopSection.css'

const OnlineServiceTopSection = () => {
    return (
        <>
            <div className='nintendo-switch-online-service-top-section-container'>
                <div className='row mx-0 nintendo-switch-online-service-top-section-content'>
                    <div className='col-md-5 nintendo-switch-online-service-top-section-content-left'>
                        <img src={sectionImg1} className='img-fluid' alt='content-left-img' />
                        <div className='online-service-free-trial-section'>
                            <h4>Free 7-day trial!</h4>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className='col-md-7 nintendo-switch-online-service-top-section-content-right'>
                        <img src={sectionImg2} className='img-fluid' alt='content-left-img' />
                        <img src={sectionImg3} className='img-fluid' alt='content-left-img' />
                    </div>
                </div>
            </div>
            <div className='nintendo-switch-online-service-top-section-two-container'>
            <div className='row mx-0 nintendo-switch-online-service-top-section-two-content'>
                    <div className='col-md-6 nintendo-switch-online-service-top-section-two-content-left'>
                        <img src={sectionImg4} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-6 nintendo-switch-online-service-top-section-two-content-right'>
                        <h4>Watch the video</h4>
                        <p>Check out this short video to learn about all the great benefits you get with a Nintendo Switch Online membership.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlineServiceTopSection
