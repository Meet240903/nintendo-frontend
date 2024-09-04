import React from 'react'
import '../../assets/css/nintendoStoreGamePagecss/nintendoGameStoreTopSection.css'

const NintendoGameStoreTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='nintendo-store-game-top-section-container'
                style={{
                    backgroundImage: sectionData?.topSectionBgImg
                        ? `url(${sectionData.topSectionBgImg})`
                        : 'none',
                    backgroundSize: 'auto', // or a specific size like '50px' to make it small
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                    backgroundColor: sectionData?.topSectionBgColor ? sectionData?.topSectionBgColor : 'none'
                }}
            >
                <div className='row m-0 store-game-top-section-content'>
                    <div className='col-md-6 store-game-top-section-left'>
                        <h2>{sectionData?.listTitle}</h2>
                        <p>{sectionData?.topSectionContent}</p>
                    </div>
                    <div className='col-md-6 store-game-top-section-right'>
                        <img src={sectionData?.topSectionImg} className='img-fluid top-section-img' alt='top-section-img' />
                    </div>
                </div>
            </div>
            {
                sectionData?.topSectionTwo && <div className='nintendo-store-game-top-section-two-container'
                    style={{
                        backgroundImage: sectionData?.topSectionTwo?.sectionBgImg
                            ? `url(${sectionData.topSectionTwo.sectionBgImg})`
                            : 'none',
                        backgroundSize: 'cover', // or a specific size like '50px' to make it small
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='row m-0 store-game-top-section-two-content'>
                        <div className='col-md-6 store-game-top-section-two-right'>
                            <img src={sectionData?.topSectionTwo?.sectionImg} className='img-fluid top-section-two-img' alt='top-section-two-img' />
                        </div>
                        <div className='col-md-6 store-game-top-section-two-left'>
                            <h2>{sectionData?.topSectionTwo?.title}</h2>
                            <p>{sectionData?.topSectionTwo?.content}</p>
                            <button className='store-game-top-section-two-preorder-btn'>Pre-order now</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default NintendoGameStoreTopSection
