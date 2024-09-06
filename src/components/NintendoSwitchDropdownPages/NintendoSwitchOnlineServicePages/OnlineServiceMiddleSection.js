import React from 'react'
import '../../../assets/css/nintendoSwitchOnlineServiceCSSpages/onlineServiceMiddleSection.css'

const OnlineServiceMiddleSection = ({ sectionData }) => {
    return (
        <>
            <hr />
            <div className='nintendo-switch-online-service-middle-section-container'>
                <div className='row mx-0 nintendo-switch-online-service-middle-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='col-md-4 nintendo-switch-online-service-middle-section-content-boxs' key={index}>
                                <div className='nintendo-switch-online-service-middle-section-content-boxs-imgs'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                </div>
                                <h4 className='my-3'>{data?.title}</h4>
                                <p>{data?.content}</p>
                                <span>Learn more</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
        </>
    )
}

export default OnlineServiceMiddleSection
