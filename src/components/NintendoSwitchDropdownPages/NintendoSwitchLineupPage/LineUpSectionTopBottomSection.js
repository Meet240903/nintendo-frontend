import React from 'react'
import sectionTwoImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/sectionImg1.png';
import sectionTwoImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/joyconImg1.png';
import sectionTwoImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/joyconImg2.avif';
import sectionTwoImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/joyconImg3.png';
import sectionVdo from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/sectionVdo.webm';
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpTopBottomSection.css'

const LineUpSectionTopBottomSection = () => {
    const sectionTwoData = [
        {
            sectionImg: sectionTwoImg2,
        },
        {
            sectionImg: sectionTwoImg3,
        },
        {
            sectionImg: sectionTwoImg4,
        },
    ]
    return (
        <>
            <div className='nintendo-switch-lineup-top-bottom-section-container'>
                <div className='nintendo-switch-lineup-top-bottom-section-content'>
                    <div className='nintendo-switch-lineup-top-bottom-section-content-title'>
                        <div className='lineup-top-bottom-section-hendheld-mode'>
                            <img src={sectionTwoImg1} alt='handheld-mode' />
                            <small>Handheld mode</small>
                            <hr />
                        </div>
                        <h2>Pick up
                            and play</h2>
                        <p>Bring your games on your next travel adventure, or simply carve out some “me” time in the coziest seat in the house.</p>
                    </div>
                    <div className='nintendo-switch-lineup-top-bottom-section-content-flex'>
                        {
                            sectionTwoData?.map((data, index) => (
                                <div className='nintendo-switch-lineup-top-bottom-section-content-box' key={index}>
                                    <div className='nintendo-switch-lineup-top-bottom-section-content-box-img'>
                                        <img src={data?.sectionImg} className='img-fluid' alt="lineup-two-section-img" />
                                    </div>
                                </div>
                            ))
                        }
                        <div className='nintendo-switch-lineup-top-bottom-section-video'>
                            <video
                                className='nintendo-switch-lineup-top-bottom-section-video-element'
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={sectionVdo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineUpSectionTopBottomSection
