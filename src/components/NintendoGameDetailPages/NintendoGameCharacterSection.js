import React from 'react'
import '../../assets/css/gameDetailPagecss/gameDetailCharacterSection.css'
import borderDivider from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/gameDetailCharactersImgs/smBros/dividerborder.png'
import charimg from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/gameDetailCharactersImgs/smBros/character-daisy.avif'

const NintendoGameCharacterSection = ({ sectionData }) => {
    return (
        <>
            <div className='game-detail-character-section-container'
                style={{
                    backgroundImage: sectionData?.backgroundImg
                        ? `url(${sectionData.backgroundImg})`
                        : 'none', // No image if backgroundImg is not available
                    backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                    backgroundPosition: 'center', // Optional: centers the image in the div
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {
                    sectionData?.characterSectionTopData && <div className='row mx-0 game-detail-character-section-top-content'>
                        <div className='col-md-6 game-detail-character-section-top-left'>
                            <h2 style={{ color: `${sectionData?.characterSectionTopData?.sectionTitleColor}` }}>{sectionData?.characterSectionTopData?.sectionTitle}</h2>
                            <p style={{ color: `${sectionData?.characterSectionTopData?.sectionContentColor}` }}>{sectionData?.characterSectionTopData?.sectionContent}</p>
                        </div>
                        <div className='col-md-6 game-detail-character-section-top-right'>
                            <img src={sectionData?.characterSectionTopData?.sectionMainImg} className='img-fluid' alt='character-top-section-img' />
                        </div>
                        <img src={borderDivider} className='border-divider my-5 img-fluid' alt='border-divider' />
                    </div>
                }
                <div className='game-detail-character-section-box-grid'>
                    {
                        sectionData?.sectionInnerData?.map((data, index) => (
                            <div className='game-detail-character-section-boxs' key={index}
                                style={{ backgroundColor: `${data?.backgroundColor}` }}
                            >
                                <img src={data?.characterImg} className='img-fluid' alt='char-imgs' />
                                <div className='game-detail-character-section-boxs-span'>{data?.characterName}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NintendoGameCharacterSection
