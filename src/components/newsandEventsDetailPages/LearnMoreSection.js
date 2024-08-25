import React from 'react'
import '../../assets/css/newsEventDetailPageCSS/learnMoreSection.css'

const LearnMoreSection = ({ sectionData }) => {
    return (
        <>
            <div className='news-detail-learn-more-section-container'>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 learn-more-box my-4' key={index}>
                            <div className='col-md-3 learn-more-img-div'>
                                <img src={data?.sectionImg} className='img-fluid learn-more-img' alt='learn-more-img' />
                            </div>
                            <div className='col-md-7 learn-more-box-content'>
                                <h4>{data?.title}</h4>
                                <p>{data?.price}</p>
                                <span>| Nintendo Switch</span>
                            </div>
                            <div className='col-md-2 learn-more-btn-div'>
                                <button className='learn-more-section-btn'>Learn more</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default LearnMoreSection
