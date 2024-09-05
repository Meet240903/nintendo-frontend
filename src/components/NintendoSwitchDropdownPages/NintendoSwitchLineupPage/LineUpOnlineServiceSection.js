import React from 'react'
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpOnlineServiceSection.css'
import sectionImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/onlineServiceSectionImgs/sectionImg1.avif';
import sectionImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/onlineServiceSectionImgs/sectionImg2.avif';

const LineUpOnlineServiceSection = () => {
    return (
        <>
            <div className='nintendo-switch-lineup-online-service-section'>
                <div className='row mx-0'>
                    <div className='col-md-6 text-center'>
                        <div className='lineup-online-service-left-section-img'>
                            <img src={sectionImg1} className='img-fluid' alt='online-service' />
                        </div>
                        <p className='my-3 fw-bold'>Nintendo Switch Online</p>
                        <small>Access online multiplayer in compatible games, classic games, and more.</small><br />
                        <button>Learn more</button>
                    </div>
                    <div className='col-md-6 text-center'>
                        <div className='lineup-online-service-right-section-img'>
                            <img src={sectionImg2} className='img-fluid' alt='online-service' />
                        </div>
                        <p className='my-3 fw-bold'>Parental Controls</p>
                        <small>Settings that let you keep the focus on fun.</small><br />
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineUpOnlineServiceSection
