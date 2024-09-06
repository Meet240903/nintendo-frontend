import React from 'react'
import '../../../assets/css/nintendoSwitchCompareSystemCSSpages/gameCompabilitySection.css'

const GameCompabililtySection = ({ sectionData }) => {
    return (
        <>
            <div className='nintendo-switch-compare-system-game-compability-section-container'>
                <h2>Game Compatibility</h2>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 compare-system-game-compability-section-content' key={index}>
                            <div className='col-md-6 compare-system-game-compability-section-content-left'>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                            </div>
                            <div className='col-md-6 compare-system-game-compability-section-content-right'>
                                <h4 className='my-4'>{data?.title}</h4>
                                {
                                    data?.contentData?.map((data, index) => (
                                        <div key={index}>
                                            <p className='my-4'>{data?.content}</p>
                                            {
                                                data?.contentIcon && <img src={data?.contentIcon} className='img-fluid' alt='handheld-img' />
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default GameCompabililtySection
