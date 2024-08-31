import React from 'react'
import '../../assets/css/gameDetailPagecss/gameDetailCharacterSection.css'
import borderDivider from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/gameDetailCharactersImgs/smBros/dividerborder.png'

const NintendoGameCharacterSection = ({ sectionData }) => {
    return (
        <>
            <div className='game-detail-character-section-container'
                style={{
                    backgroundImage: sectionData?.backgroundImg
                        ? `url(${sectionData.backgroundImg})`
                        : 'none', // No image if backgroundImg is not available
                    backgroundColor: sectionData?.backgroundColor || 'transparent', // Fallback to transparent if backgroundColor is not available
                    backgroundSize: 'cover', // Ensures the image covers the whole div
                    backgroundPosition: 'center', // Centers the image in the div
                    backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                }}

            >
                {
                    sectionData?.characterSectionTopData && <div className='row mx-0 game-detail-character-section-top-content'
                        style={{
                            backgroundImage: sectionData?.characterSectionTopData?.backgroundImg
                                ? `url(${sectionData.characterSectionTopData.backgroundImg})`
                                : 'none', // No image if backgroundImg is not available
                            backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                            backgroundPosition: 'center', // Optional: centers the image in the div
                            backgroundRepeat: 'no-repeat',
                            padding: sectionData?.characterSectionTopData?.sectionMainImg ? '3rem' : '0'
                        }}
                    >
                        <div className={`${sectionData?.characterSectionTopData?.sectionMainImg ? 'col-md-6' : 'col-md-12'} game-detail-character-section-top-left`}
                            style={{
                                backgroundImage: sectionData?.characterSectionTopData?.leftDivBackgroundImg
                                    ? `url(${sectionData.characterSectionTopData.leftDivBackgroundImg})`
                                    : 'none', // No image if backgroundImg is not available
                                backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                                backgroundPosition: 'center', // Optional: centers the image in the div
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <h2 className='my-5' style={{ color: `${sectionData?.characterSectionTopData?.sectionTitleColor}` }}>{sectionData?.characterSectionTopData?.sectionTitle}</h2>
                            <p style={{ color: `${sectionData?.characterSectionTopData?.sectionContentColor}` }}>{sectionData?.characterSectionTopData?.sectionContent}</p>
                        </div>
                        {
                            sectionData?.characterSectionTopData?.sectionMainImg && <div className='col-md-6 game-detail-character-section-top-right'>
                                <img src={sectionData?.characterSectionTopData?.sectionMainImg} className='img-fluid' alt='character-top-section-img' />
                            </div>
                        }
                        <img src={borderDivider} className='border-divider my-5 img-fluid' alt='border-divider' />
                    </div>
                }
                <div className='game-detail-character-section-box-grid'>
                    {
                        sectionData?.sectionInnerData?.map((data, index) => (
                            <div className={`game-detail-character-section-${sectionData?.gridClass}-boxs`} key={index}
                                style={{
                                    backgroundColor: `${data?.backgroundColor}`,
                                    backgroundImage: data?.backgroundImg
                                        ? `url(${data.backgroundImg})`
                                        : 'none', // No image if backgroundImg is not available
                                    backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                                    backgroundPosition: 'center', // Optional: centers the image in the div
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {
                                    data?.charSpan !== true && <h1 className='fw-bold my-4 text-center'>{data?.characterName}</h1>
                                }
                                <img src={data?.characterImg} className='img-fluid' alt='char-imgs' />
                                {
                                    data?.charSpan === true && <div className={`game-detail-character-section-${sectionData?.gridClass}-boxs-span`}>{data?.characterName}</div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NintendoGameCharacterSection
