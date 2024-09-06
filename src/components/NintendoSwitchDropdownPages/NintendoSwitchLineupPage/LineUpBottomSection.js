import React from 'react'
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpBottomSection.css'

const LineUpBottomSection = ({ lineUpBottomSectionData }) => {
    return (
        <>
            <div className='nintendo-switch-lineup-bottom-section-container'>
                <div className='lineup-bottom-section-content'>
                    <div className='lineup-bottom-section-content-left'>
                        <h5>{lineUpBottomSectionData?.leftTitle}</h5>
                        <h2>{lineUpBottomSectionData?.leftTitle2}</h2>
                        {
                            lineUpBottomSectionData?.listContent?.map((data, index) => (
                                <div key={index}>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    {
                        lineUpBottomSectionData?.rightContent?.map((data, index) => (
                            <div className='lineup-bottom-section-content-right' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='bottom-img' />
                                <h5>{data?.title}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LineUpBottomSection
