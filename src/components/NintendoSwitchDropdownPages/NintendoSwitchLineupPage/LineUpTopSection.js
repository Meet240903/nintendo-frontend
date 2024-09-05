import React from 'react';
import videoFile from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionVdo1.webm';
import topSectionImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg1.avif';
import topSectionImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg2.avif';
import topSectionImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg3.avif';
import topSectionImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg4.avif';
import topSectionImg5 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg5.avif';
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpTopSection.css'

const LineUpTopSection = () => {
    const topsectionTwoData = [
        {
            sectionImg: topSectionImg3,
            title: "Nintendo Switch – OLED Model",
            content: "Level up with an OLED screen that makes colors pop.",
            price: "$349.99",
        },
        {
            sectionImg: topSectionImg4,
            title: "Nintendo Switch",
            content: "Play at home or on the go with one system.",
            price: "$299.99",
        },
        {
            sectionImg: topSectionImg5,
            title: "Nintendo Switch Lite",
            content: "Dedicated to portable play.",
            price: "$199.99",
        },
    ]
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
            <div className='nintendo-switch-lineup-top-section-two-container'>
                <div className='nintendo-switch-lineup-top-section-two-content'>
                    <div className='nintendo-switch-lineup-top-section-two-content-title'>
                        <h2>Three systems, so many ways to play</h2>
                    </div>
                    <div className='nintendo-switch-lineup-top-section-two-content-flex'>
                        {
                            topsectionTwoData?.map((data, index) => (
                                <div className='nintendo-switch-lineup-top-section-two-content-box' key={index}>
                                    <div className='nintendo-switch-lineup-top-section-two-content-box-img'>
                                        <img src={data?.sectionImg} className='img-fluid' alt="lineup-top-two-section-img" />
                                    </div>
                                    <div className='nintendo-switch-lineup-top-section-two-content-box-body'>
                                        <p>{data?.title}</p>
                                        <small>{data?.content}</small>
                                        <div className='nintendo-switch-lineup-top-section-two-content-box-body-footer'>
                                            <h4>{data?.price}</h4>
                                            <button>Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default LineUpTopSection;
