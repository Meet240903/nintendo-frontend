import React from 'react'
import '../../assets/css/gameDetailPagecss/gameDetailMiddleSection.css'
import borderImg from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/gameDetailMiddleSectionImgs/smBrosWonder/divider-light-blue-large.png'

const NintendoGameMiddleSection = ({ sectionData }) => {
    return (
        <>
            <div
                className='nintendo-game-middle-section-container'
                style={{
                    backgroundImage: sectionData?.backgroundImg
                        ? `url(${sectionData.backgroundImg})`
                        : 'none', // No image if backgroundImg is not available
                    backgroundColor: `${sectionData?.backgroundColor}`,
                    backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                    backgroundPosition: 'center', // Optional: centers the image in the div
                }}
            >
                {
                    sectionData?.middleTopData && <div className='nintendo-game-detail-middle-top-section'>
                        <h3>{sectionData?.middleTopData?.title}</h3>
                        <p>{sectionData?.middleTopData?.content}</p>
                    </div>
                }
                {
                    sectionData?.sectionData?.map((data, index) => (
                        <>
                            <div className='row mx-0 nintendo-game-middle-row-section' key={index}>
                                <div className='col-md-6 nintedo-game-middle-left'
                                    style={{
                                        backgroundImage: data?.leftDivBgImg
                                            ? `url(${data?.leftDivBgImg})`
                                            : 'none', // No image if backgroundImg is not available
                                        backgroundColor: `${data?.leftDivBgColor}`,
                                        backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                                        backgroundPosition: 'center', // Optional: centers the image in the div
                                    }}>
                                    <h1 style={{ color: `${data?.titleColor}` }}>{data?.sectionTitle}</h1>
                                    <p style={{ color: `${data?.contentColor}` }}>{data?.sectionContent}</p>
                                </div>
                                <div className='col-md-6 nintedo-game-middle-right'>
                                    <img src={data?.sectionImg} className=' game-detail-middle-section-img' alt='game-detail-middle-section-img' />
                                </div>
                            </div>
                            <img src={borderImg} className='img-fluid' alt='border-img' />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default NintendoGameMiddleSection
