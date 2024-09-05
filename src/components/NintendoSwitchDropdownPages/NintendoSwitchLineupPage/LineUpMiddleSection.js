import React from 'react'
import sectionImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/middleSectionImgs/sectionImg1.avif'
import sectionImg2 from '../../../assets/images/nintendoSwitchLineUpImgs/middleSectionImgs/sectionImg2.avif'
import sectionImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/middleSectionImgs/sectionImg3.avif'
import sectionImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/middleSectionImgs/sectionImg4.avif'
import sectionImg5 from '../../../assets/images/nintendoSwitchLineUpImgs/middleSectionImgs/sectionImg5.avif'
import handImg1 from '../../../assets/images/nintendoSwitchLineUpImgs/middleSectionImgs/handImg1.avif'
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpMiddleSection.css'

const LineUpMiddleSection = () => {
    return (
        <>
            <div className='nintendo-switch-lineup-middle-section-container'>
                <div className="nintendo-switch-lineup-middle-section-title">
                    <img src={sectionImg1} alt='middle-top-img' />
                    <h2>Instant multiplayer</h2>
                    <p>Detach the two included Joy-Con™ controllers and pop the kickstand to enjoy game time—even without a TV.</p>
                </div>
                <div className='nintendo-switch-lineup-middle-section-img'>
                    <img src={sectionImg2} alt='middle-top-img' />
                </div>
                <div className="nintendo-switch-lineup-middle-section-title">
                    <h2>Play together
                        and share the smiles</h2>
                    <p>All systems can play online** with friends or connect with any other Nintendo Switch models via local wireless.***</p>
                </div>
                <div className='nintendo-switch-lineup-middle-section-img'>
                    <img src={sectionImg3} alt='middle-top-img' />
                </div>
            </div>
            <div className='nintendo-switch-lineup-middle-second-section-container'>
                <div className="nintendo-switch-lineup-middle-second-section-title">
                    <p>Or simply connect more controllers to one system and throw a multiplayer*** party.</p>
                </div>
                <div className='nintendo-switch-lineup-middle-second-section-img'>
                    <img src={sectionImg4} className='lineup-middle-second-section-img' alt='middle-second-section-img' />
                    <img src={handImg1} className='lineup-middle-second-section-handheldimg' alt='middle-second-section-img' />
                </div>
                <div className="nintendo-switch-lineup-middle-bottom-section-title">
                    <h2>Get in on the fun, together</h2>
                </div>
                <div className='nintendo-switch-lineup-middle-bottom-section-img'>
                    <img src={sectionImg2} alt='middle-top-img' />
                </div>
            </div>
        </>
    )
}

export default LineUpMiddleSection
