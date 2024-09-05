import React from 'react';
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpPortabilitySection.css';
import gamePadImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/portabilitySectionImgs/gamePadImg1.avif';
import gamePadImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/portabilitySectionImgs/gamePadImg2.avif';
import gamePadImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/portabilitySectionImgs/gamePadImg3.avif';
import gamePadImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/portabilitySectionImgs/gamePadImg4.avif';
import gamePadImg5 from '../../../assets/images/nintendoSwitchLineUpImgs/portabilitySectionImgs/gamePadImg5.avif';

const LineUpPortabilitySection = () => {
    return (
        <>
            <div className="nintendo-switch-lineup-portability-section-container">
                <div className="nintendo-switch-lineup-portability-section-title">
                    <h2>
                        <strong>Prefer</strong> <em><strong>total portability?</strong></em>
                    </h2>
                </div>
                <div className="nintendo-switch-lineup-portability-section-imgs">
                    <div className="nintendo-switch-lineup-portability-section-gamepadimg1">
                        <img src={gamePadImg1} alt="nintendo-switch-lineup-portability-section-gamepadimg1" />
                    </div>
                    <div className="nintendo-switch-lineup-portability-section-gamepadimg2">
                        <img src={gamePadImg2} alt="nintendo-switch-lineup-portability-section-gamepadimg2" />
                    </div>
                    <div className="nintendo-switch-lineup-portability-section-gamepadimg3">
                        <img src={gamePadImg3} alt="nintendo-switch-lineup-portability-section-gamepadimg3" />
                    </div>
                    <div className="nintendo-switch-lineup-portability-section-gamepadimg4">
                        <img src={gamePadImg4} alt="nintendo-switch-lineup-portability-section-gamepadimg4" />
                    </div>
                    <div className="nintendo-switch-lineup-portability-section-gamepadimg5">
                        <img src={gamePadImg5} alt="nintendo-switch-lineup-portability-section-gamepadimg5" />
                    </div>
                </div>
                <div className="nintendo-switch-lineup-portability-section-content">
                    <p>
                        Nintendo Switch Lite is made for you. It’s lightweight, compact, and 100% for handheld play.
                    </p>
                </div>
            </div>
        </>
    );
};

export default LineUpPortabilitySection;
