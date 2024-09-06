import React from 'react'
import titleImg from '../../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/titleImg.png'
import '../../../assets/css/nintendoSwitchCompareSystemCSSpages/compareSystemTopSection.css'

const CompareSystemTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='nintendo-switch-compare-system-top-section-container'>
                <div className='nintendo-switch-compare-system-top-section-title'>
                    <img src={titleImg} className='img-fluid' alt='nintendo-switch' />
                    <h2>Features comparison</h2>
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 compare-system-top-section-first-row-content' key={index}>
                            <div className='col-12 col-md-3 compare-system-top-section-first-row-content-left'
                                style={{
                                    backgroundColor: data?.backgroundColor ? data.backgroundColor : 'none',
                                    color: data?.color ? data.color : '#000'
                                }}
                            >
                                <p>{data?.leftTitle}</p>
                            </div>
                            <div className='col-12 col-md-9 compare-system-top-section-first-row-content-right'>
                                <div className={`row mx-0 compare-system-top-section-${data?.className}-content-right-inner-content`}>
                                    {
                                        data?.rightContentData?.map((data, index) => (
                                            <div className={`col-4 col-md-4 text-center my-4`}>
                                                {
                                                    data?.sectionImg && <img src={data?.sectionImg} className='img-fluid' alt='top-section-img' key={index} />
                                                }
                                                <p className='my-3 fw-bold'>{data?.title}</p>
                                                <p className='my-2'>{data?.content}</p>
                                                <p className='my-2'>{data?.content2}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CompareSystemTopSection
