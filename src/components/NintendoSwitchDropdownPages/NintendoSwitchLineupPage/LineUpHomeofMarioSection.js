import React, { useEffect, useState } from 'react';
import marioImg from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/Mario.avif';
import sliderImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sliderImg1.avif';
import sliderImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sliderImg2.avif';
import sliderImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sliderImg3.avif';
import sliderImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sliderImg4.avif';
import sliderImg5 from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sliderImg5.avif';
import sliderImg6 from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sliderImg6.avif';
import videoFile from '../../../assets/images/nintendoSwitchLineUpImgs/homeofMarioSectionImgs/sectionVdo1.webm';
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpHomeofMarioSection.css';
import joyconImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/joyconImg1.png';
import joyconImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/joyconImg2.avif';
import joyconImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/topBottomSectionImgs/joyconImg3.png';

const LineUpHomeofMarioSection = () => {
    const homeMarioImgData = [
        { sectionImg: joyconImg1 },
        { sectionImg: joyconImg2 },
        { sectionImg: joyconImg3 },
    ];
    const sliderData = [
        { sliderImg: sliderImg1 },
        { sliderImg: sliderImg2 },
        { sliderImg: sliderImg3 },
        { sliderImg: sliderImg4 },
        { sliderImg: sliderImg5 },
        { sliderImg: sliderImg6 },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [sliderData.length]);

    return (
        <>
            <div className='nintendo-switch-lineup-homeofmario-container'>
                <div className='nintendo-switch-lineup-homeofmario-content'>
                    <div className='nintendo-switch-lineup-homeofmario-content-title'>
                        <h2>Home of Mario & friends</h2>
                        <img src={marioImg} className='img-fluid' alt='home-of-mario' />
                        <p>Nintendo Switch is the way to play Super Mario Bros.™ Wonder, Mario Kart™ 8 Deluxe, and more games starring Mario and friends.</p>
                    </div>
                    <div className='nintendo-switch-lineup-homeofmario-content-flex'>
                        {homeMarioImgData?.map((data, index) => (
                            <div className='nintendo-switch-lineup-homeofmario-content-box' key={index}>
                                <div className='nintendo-switch-lineup-homeofmario-content-box-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt="lineup-two-section-img" />
                                </div>
                            </div>
                        ))}
                         <div className='nintendo-switch-lineup-homeofmario-section-video'>
                            <video
                                className='nintendo-switch-lineup-homeofmario-section-video-element'
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={videoFile} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='homeofmario-slider'>
                        <div className='homeofmario-slider-wrapper' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {sliderData?.map((data, index) => (
                                <div className={`homeofmario-slider-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                                    <img src={data?.sliderImg} className='img-fluid' alt="slider-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LineUpHomeofMarioSection;
