import React from 'react';
import videoFile from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionVdo1.webm'; // Adjust the path to your video file
import topSectionImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg1.avif'; // Adjust the path to your video file
import topSectionImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg2.avif'; // Adjust the path to your video file
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpTopSection.css'

const LineUpTopSection = () => {
    return (
        <>
            <div className='nintendo-switch-lineup-top-section-container'>
                <div className='nintendo-switch-lineup-top-section-img'>
                    <div className='nintendo-switch-lineup-top-section-left-img'>
                        <img src={topSectionImg1} className='img-fluid' alt='top-section-left' />
                    </div>
                    <div className='nintendo-switch-lineup-top-section-right-img'>
                        <img src={topSectionImg2} className='img-fluid' alt='top-section-left' />
                    </div>
                </div>
                <div className='nintendo-switch-lineup-top-section-video'>
                    <video
                        className='nintendo-switch-lineup-top-section-video-element'
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='nintendo-switch-lineup-top-section-content'>
                    <h3>Play anytime, anywhere with
                    Nintendo Switch</h3>
                </div>
            </div>
        </>
    );
}

export default LineUpTopSection;
