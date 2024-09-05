import React from 'react'
import topSectionImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionImg1.avif';
import topSectionImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionImg2.avif';
import topSectionImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionImg3.avif';
import videoFile from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionTwoSecondImgs/sectionVdo.webm';
import sectionTwoImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionTwoSecondImgs/sectionImg1.png';
import sectionTwoImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionTwoSecondImgs/sectionImg2.avif';
import sectionTwoImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionTwoSecondImgs/sectionImg3.avif';
import sectionTwoImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/sectionTwoImgs/sectionTwoSecondImgs/sectionImg4.avif';
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpSectionTwoSection.css'

const LineUpSectionTwo = () => {
    const sectionTwoData = [
        {
            sectionImg: topSectionImg1,
        },
        {
            sectionImg: topSectionImg2,
        },
        {
            sectionImg: topSectionImg3,
        },
    ]
    return (
        <>
            <div className='nintendo-switch-lineup-section-two-container'>
                <div className='nintendo-switch-lineup-section-two-content'>
                    <div className='nintendo-switch-lineup-section-two-content-title'>
                        <h2>Get to know the
                            three different play modes</h2>
                    </div>
                    <div className='nintendo-switch-lineup-section-two-content-flex'>
                        {
                            sectionTwoData?.map((data, index) => (
                                <div className='nintendo-switch-lineup-section-two-content-box' key={index}>
                                    <div className='nintendo-switch-lineup-section-two-content-box-img'>
                                        <img src={data?.sectionImg} className='img-fluid' alt="lineup-two-section-img" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='nintendo-switch-lineup-section-two-second-container'>
                <div className='nintendo-switch-lineup-section-two-second-content'>
                    <div className='nintendo-switch-lineup-section-two-second-content-title'>
                        <div className='lineup-section-two-second-tv-mode'>
                            <img src={sectionTwoImg1} className='img-fluid' alt='tv-mode' />
                            <small>TV mode</small>
                            <hr />
                        </div>
                        <h2>Play on the
                            big screen</h2>
                        <p>Connect your system using the included dock to enjoy a traditional gaming experience in HD.</p>
                    </div>
                    <div className='nintendo-switch-lineup-section-two-second-video'>
                        <video
                            className='nintendo-switch-lineup-section-two-second-video-element'
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={videoFile} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <img src={sectionTwoImg2} className='lineup-section-two-second-video-img1' alt='lineup-section-two-second-video-img1' />
                        <img src={sectionTwoImg3} className='lineup-section-two-second-video-img2' alt='lineup-section-two-second-video-img1' />
                    </div>
                    <div className='lineup-section-two-second-img3'>
                        <img src={sectionTwoImg4} className='img-fluid' alt='lineup-section-two-second-img3' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineUpSectionTwo
